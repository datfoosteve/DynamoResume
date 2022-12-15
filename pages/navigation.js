import React from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

const Navigation = () => {
  return (
    <AnimatePresence>
      <ul
        style={{
          borderStyle: "double",
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 0,
          margin: 0,
        }}
      >
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/education">Education</Link>
        </li>
        <li>
          <Link href="/experience">Experience</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </AnimatePresence>
  );
};

export default Navigation;
