import AllPosts from "../components/Posts/AllPosts";
import StrapiClient from "../lib/strapi-client";

const connection = new StrapiClient();

export async function getStaticProps() {
  const allPosts = connection.fetchData('blogposts');
  return {
    props: {
      postsList: await allPosts
    },
    revalidate: 10
  }
}

function home(data) {

  const allPosts = data.postsList.data;
  
 // console.log(allPosts);

  return (
    <div>      
      <AllPosts posts={allPosts}/>
      

    </div>
  )
}

export default home