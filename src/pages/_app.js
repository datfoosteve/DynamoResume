import React from 'react'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </ParallaxProvider>
  )
}

export default MyApp
