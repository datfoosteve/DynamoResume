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
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
  </ParallaxProvider>

  )
}   

export default MyApp
