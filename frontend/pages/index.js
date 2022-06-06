import React from 'react'
import { gql } from "@apollo/client"

import { ApolloClient, InMemoryCache } from "@apollo/client"

export async function getStaticProps() {

  const connection = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_STRAPI_GRAPQLURL,
    cache: new InMemoryCache()
  });

  const { data } = await connection.query({
    query: gql`
    query allPosts {
      blogposts {
        data {
          attributes {
            title,
            content,
            slug,
            publishedAt,
            thumbnail {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
    `
  });

  return {
    props: data,
    revalidate: 10
  }
}

function Home(data) {

  console.log(data);

  return (
    <div>home</div>
  )
}

export default Home