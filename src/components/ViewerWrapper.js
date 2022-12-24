import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { PDFViewer } from '@react-pdf/renderer';
import Resume from './Resume'; // This is a component that takes your resume data as props and renders the PDF

const ResumeData = ({ data }) => {
  return (
    <PDFViewer>
      <Resume data={data} />
    </PDFViewer>
  );
};

const ViewerWrapper = () => (
  <Viewer
    fileUrl={<ResumeData data={data} />}
  />
);

export default ViewerWrapper;