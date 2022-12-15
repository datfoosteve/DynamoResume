import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import Contact from '../components/Contact'
import Resume from '../components/Resume'
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navigation from './navigation';
import { motion } from "framer-motion";

export default function Home() {
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
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  )
}
