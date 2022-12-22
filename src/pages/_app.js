import React from 'react'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { ParallaxProvider } from 'react-scroll-parallax'


function MyApp({ Component, pageProps} ) { 
  return (
  <ParallaxProvider>
    <Layout>
      <Component {...pageProps} />
  </Layout> 
  </ParallaxProvider>
)}
export default MyApp

 
  


// Path: src\pages\api.js\hello.js
// Compare this snippet from src\components\Portfolio.js:
// import React from 'react'
// import { LinkIcon } from '@heroicons/react/outline'
//
//
//
//
// Compare this snippet from src\components\pdfview.js:
// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react"
//
// const InvoicePDF = dynamic(() => import("./pdf"), { ssr: false });
//
//
//
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction