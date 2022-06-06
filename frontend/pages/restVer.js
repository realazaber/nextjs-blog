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


function restVer(data) {

  const allPosts = data.postsList.data;
  
 // console.log(allPosts);

  return (
    <div>      
        Fetch data with REST
        <hr />
        <AllPosts posts={allPosts}/>
      
    </div>
  )
}

export default restVer