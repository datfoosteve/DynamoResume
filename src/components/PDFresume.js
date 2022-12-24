import React, { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import packageJson from '/package.json';

const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];
const defaultLayoutPluginInstance = defaultLayoutPlugin({
  setInitialTab: () => Promise.resolve(0),
});

const PDFresume = ({ data }) => {
    const [resumeData, setResumeData] = useState({});
  
    useEffect(() => {
      setResumeData(data || {});
    }, []);
  
    if (!data) {
      return null;
    }
  
    return (
      <div>
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}
        >
          <Viewer
            file={new File(['my pdf file'], 'newresumeomg.pdf', { type: 'application/pdf' })}
            plugins={[defaultLayoutPluginInstance]}
            />
       </Worker>
       </div>
       );
       }; 