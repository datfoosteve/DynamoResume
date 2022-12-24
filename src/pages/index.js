import Head from 'next/head'
import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Portfolio from '../components/Portfolio'
import resumeData from '../resumeData'
import PDFresume from './PDFresume';
import Testimonials from '../components/Testimonials'
import Resume from './components/Resume';
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'


export default function Home() {

<div className="mx-auto flex w-full flex-col items-center justify-center">
  <Head>
    <title>Stephen</title>
    <link rel="icon" href="/two.png" />
  </Head>
  <Header data={resumeData.main} />
  <About data={resumeData.main} />
  <Resume data={resumeData.resume} />
  <PDFresume data={resumeData.main} />
  <Portfolio data={resumeData.portfolio} />
  <Testimonials data={resumeData.testimonials} />
  <Contact data={resumeData.main} />
  <Footer data={resumeData.main} />
</div>

}
