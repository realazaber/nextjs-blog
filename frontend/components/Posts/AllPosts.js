import React from 'react'
import Post from './Post'

function AllPosts(props) {

  return (
    <div>
        {
          <div>
            {props.posts.map((post) => (
              <Post 
                key={post.id} 
                title={post.attributes.title} 
                content={post.attributes.content}         
                slug={post.attributes.slug}
                date={post.attributes.publishedAt}
              />
            ))}
          </div>
        } 
    </div>
  )
}

export default AllPosts