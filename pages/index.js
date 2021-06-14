import Head from 'next/head'
import { getData } from '../utils/fetchData'


const Home = () => {
  return (
    <div>
      <Head>
        <title> Mercadillo</title>
      </Head>
      <Body>

        {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
        <script src="/__/firebase/8.6.7/firebase-app.js"></script>

        {/* <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries --> */}

        {/* <!-- Initialize Firebase --> */}
        <script src="/__/firebase/init.js"></script>
      </Body>
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