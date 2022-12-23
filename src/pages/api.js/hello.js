// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler() {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

// Path: src\pages\api.js\hello.js  
// Compare this snippet from src\components\Portfolio.js:
// import React from 'react'
// import { LinkIcon } from '@heroicons/react/outline'
//  



// Compare this snippet from src\components\pdfview.js:
// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react"

// const InvoicePDF = dynamic(() => import("./pdf"), { ssr: false });



// Next.js API route support: https://nextjs.org/docs/api-routes/introduction