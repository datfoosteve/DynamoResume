import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <ul>
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
  );
};

export default Navigation;