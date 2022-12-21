import React from 'react'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { ParallaxProvider } from 'react-scroll-parallax';
/* Importing the ReactDOM library. */

/**
 * 
 * @param {*MyDocument} param0 
 * @returns 
 */


function MyApp({ Component, pageProps }) {
  return (
    /* A wrapper for the entire application. */
    <ParallaxProvider>
  <Layout>   
    <Component {...pageProps} />
  </Layout> 

  </ParallaxProvider>

  )
}   




export default MyApp
