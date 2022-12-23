import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import packageJson from '/package.json';

const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];

/* A plugin that is used to render the pdf. */
const SetInitialTabExample = ({ fileUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
      setInitialTab: () => Promise.resolve(0),
  });
function Home() {
  const [resumeData, setResumeData] = useState({})


    useEffect(() => {
    fetch('/resumeData.json')
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data)
      })
  }, [])
  return (


    <div className="mx-auto flex w-full flex-col items-center justify-center">
      <Head>
        <title>Stephen</title>
        <link rel="icon" href="/two.png" />
      </Head>

      
    
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
        <div style={{ height: '750px',
                      width: '900px',
                      marginLeft: 'auto',
                     marginRight: 'auto' }}>
            <Viewer
                fileUrl="public\assets\newresumeomg.pdf"
                plugins={[
                    defaultLayoutPluginInstance
                ]}
            />
        </div>
    </Worker>
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials}/>
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  )
}  
    return (
      <div className="mx-auto flex w-full flex-col items-center justify-center">
        <Head>
          <title>Stephen</title>
          <link rel="icon" href="/two.png" />
        </Head>

        
      
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Testimonials data={resumeData.testimonials}/>
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </div>
    )
  }