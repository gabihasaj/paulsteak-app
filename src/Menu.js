import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import './App.css';
// tell pdf.js worker where to load from
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


function Menu() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="Menu">
      
      <Document
        file="/menu2.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<p>Loading menu…</p>}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={window.innerWidth * 0.9} // make responsive
          />
        ))}
      </Document>
    </div>
  );
}

export default Menu;
