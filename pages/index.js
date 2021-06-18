import Head from 'next/head'
import { getData } from '../utils/fetchData'


const Home = () => {
  return (
    <div>
      <Head>
        <title> Mercadillo</title>
      </Head>
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
