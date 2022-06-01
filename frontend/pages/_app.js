import Head from 'next/head';
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      
      <Head>
        <title>Azaber blog</title>
        <meta name="description" content="My personal blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Component {...pageProps} />
      <Footer />
      
    </div>
  ) 
  
}

export default MyApp
