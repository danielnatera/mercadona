import '../styles/index.css'
import Layout from '../components/Layout'
import {DataProvider} from '../store/GlobalState'

function MyApp({ Component, pageProps }) {
  return (
   <DataProvider>
    <div className="container mx-auto my-5">
      <Layout>
        <Component {...pageProps} />
      </Layout>
  </div>
  </DataProvider>
  );
}

export default MyApp
