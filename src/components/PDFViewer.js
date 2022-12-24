import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import packageJson from '/package.json';

const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];
const defaultLayoutPluginInstance = defaultLayoutPlugin({
  setInitialTab: () => Promise.resolve(0),
});

const PDFViewer = () => {
  return (
    <div>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}
      >
        <Viewer
          fileUrl="/public/assets/newresumeomg.pdf"
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    </div>
  );
};

export default PDFViewer;
