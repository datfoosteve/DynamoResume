import React, { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';


const PDFresume = ({ data }) => {
    return (<Worker><Viewer fileUrl={'public/assets/newresumeomg.pdf'}/> </Worker>);
           }; 

           export default PDFresume;