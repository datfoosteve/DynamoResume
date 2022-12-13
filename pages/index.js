import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navigation from './navigation';

const IndexPage = () => {
  return (
    <div style={styles}>
      <Navigation />
      <h1>Hello, I am Stephen Puthenpurackal</h1>
      <p>Its a pleasure to make your aquaintance.</p>
     
    
    </div>
  );
};

export default IndexPage;