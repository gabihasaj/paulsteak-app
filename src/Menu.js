import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import "./App.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function Menu() {
  const [numPages, setNumPages] = useState(0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="Menu">
      <Document
  file={`${import.meta.env.BASE_URL}menu2.pdf`}
  onLoadSuccess={onDocumentLoadSuccess}
  loading={<p>Loading menu…</p>}
  onLoadError={(e) => console.log("PDF load error:", e)}
>

        {numPages > 0 &&
          Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={Math.min(900, window.innerWidth * 0.9)}
            />
          ))}
      </Document>
    </div>
  );
}

export default Menu;
