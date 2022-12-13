import React from 'react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';

const Navigation = () => {
  return (
<AnimatePresence>
    <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        margin: 0
        
      }}>

    <li>
    

    <Link href="/about">
        AboutPage
      </Link>

    </li>
    <li>
      <Link href="/experience">
        ExperiancePage
      </Link>
    </li>
    <li>
      <Link href="/skills">
        SkillsPage
      </Link>
    </li>
    <li> 
      <Link href="/projects">
        ProjectsPage
      </Link>
    </li>
    <li>
      <Link href="/contact">
        ContactPage
      </Link>
    </li>


  </ul>
  </AnimatePresence>
  );
};

export default Navigation;