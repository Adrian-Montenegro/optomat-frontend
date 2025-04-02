import React, { useState, useEffect } from 'react';
import { FaSearchPlus, FaSearchMinus, FaExpand, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './FilePreview.css';

interface FilePreviewProps {
  file: File | null;
}

const FilePreview = ({ file }: FilePreviewProps) => {
  const [scale, setScale] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (file) {
      setScale(1); // Reset scale on new file
      setPage(1); // Reset page on new file
    }
  }, [file]);

  if (!file) {
    return null;
  }

  const fileUrl = URL.createObjectURL(file);

  return (
    <div className="file-preview">
      {/* Toolbar */}
      <div className="toolbar">
        <button onClick={() => setScale(scale + 0.1)} title="Zoom In">
          <FaSearchPlus />
        </button>
        <button onClick={() => setScale(Math.max(0.5, scale - 0.1))} title="Zoom Out">
          <FaSearchMinus />
        </button>
        <button onClick={() => setScale(1)} title="Fit to Screen">
          <FaExpand />
        </button>
        <button onClick={() => setPage((prev) => Math.max(1, prev - 1))} title="Previous Page">
          <FaArrowLeft />
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)} title="Next Page">
          <FaArrowRight />
        </button>
      </div>

      {/* PDF Preview */}
      {file.type === 'application/pdf' ? (
        <iframe
          src={`${fileUrl}#page=${page}`}
          title="PDF Preview"
          style={{ transform: `scale(${scale})`, transformOrigin: '0 0', width: '100%', height: '80vh' }}
        />
      ) : file.type.startsWith('image/') ? (
        <img src={fileUrl} alt="Uploaded File" style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }} />
      ) : (
        <p>Preview not available for this file type.</p>
      )}
    </div>
  );
};

export default FilePreview;