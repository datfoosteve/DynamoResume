import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navigation from './navigation';
import { motion } from "framer-motion";

const IndexPage = () => {
  return (
    <div className="text-3xl font-bold underline ">
      <h1>Hello, I am Stephen Puthenpurackal</h1>
      <p>Its a pleasure to make your aquaintance.</p>
     
    
    </div>



  );
  
};

export default IndexPage;