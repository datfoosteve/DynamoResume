import React from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

const Navigation = () => {
  return (
    <AnimatePresence>
      <ul class="flex border-b"
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
        <li class="-mb-px mr-1">
          <Link href="/about"class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">About</Link>
        </li>
        <li class="-mb-px mr-1">
          <Link href="/education"class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">Education</Link>
        </li>
        <li class="-mb-px mr-1">
          <Link href="/experience"class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">Experience</Link>
        </li>
        <li class="-mb-px mr-1">
          <Link href="/skills"class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">Skills</Link>
        </li>
        <li class="-mb-px mr-1">
          <Link href="/projects"class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">Projects</Link>
        </li>
        <li class="-mb-px mr-1">
          <Link href="/contact" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">Contact</Link>
        </li>
      </ul>
    </AnimatePresence>



  );
};

export default Navigation;
