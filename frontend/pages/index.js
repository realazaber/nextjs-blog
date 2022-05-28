const URL = process.env.STRAPIBASEURL

export async function getStaticProps(context) {
  const fetchParams = {
    method: "post",
    header: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      query: `{
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
      }`
    })
  }
}

export default function Home() {
  console.log(URL);

  return (
      <main>
      </main>
  )
}
