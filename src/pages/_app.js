import Head from 'next/head'
import '../styles/globals.css'
import Navigation from './navigation'

function MyApp({ Component, pageProps }) {
  return (<>
  <Head><title>Stephens Resume!</title></Head>
    <Navigation/>
  <Component {...pageProps} />
  </>)
}

export default MyApp
