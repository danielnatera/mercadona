import Head from 'next/head'
import { getData } from '../utils/fetchData'


const Home = () => {
  return (
    <div>
      <Head>
        <title> Mercadillo</title>
      </Head>
     <img src="https://res.cloudinary.com/ddzcnvofd/image/upload/v1623993824/meme_wc2gew.png" className="mx-80 p-20" />
    </div>
  )
}
export async function getServerSideProps() {
  // const res = await getData('product')
  // console.log(res)
  return {
    props: {}, // will be passed to the page component as props
  }
}


export default Home;
