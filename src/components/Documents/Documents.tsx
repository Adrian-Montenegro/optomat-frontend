import React, { useState } from 'react';
import { FaPlus, FaPen } from 'react-icons/fa';
import Sidebar from './Sidebar';
import FilePreview from './FilePreview';
import MarkupEditor from './MarkupEditor';
import LEEDAnalysis from './LEEDAnalysis';
import './Documents.css';

const Documents = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isMarkupOpen, setIsMarkupOpen] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const toggleMarkupPanel = () => {
    setIsMarkupOpen(!isMarkupOpen);
  };

  return (
    <div className="documents">
      <div className="documents-container">
        {/* Sidebar */}
        <Sidebar onFileSelect={setSelectedFile} />

        {/* Main Document Area */}
        <div className="main-area">
          {/* Upload Area */}
          {!selectedFile && (
            <div className="upload-area">
              <input
                type="file"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
                id="file-upload"
              />
              <label htmlFor="file-upload" className="action-button">
                <FaPlus />
                Upload Document
              </label>
            </div>
          )}

          {/* Document Preview */}
          {selectedFile && (
            <div className="file-preview">
              <FilePreview file={selectedFile} />
            </div>
          )}

          {/* LEED Analysis */}
          {selectedFile && <LEEDAnalysis />}
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fab-button" onClick={toggleMarkupPanel}>
        <FaPen />
      </button>

      {/* Markup Editor */}
      {isMarkupOpen && selectedFile && (
        <MarkupEditor file={selectedFile} onClose={() => setIsMarkupOpen(false)} />
      )}
    </div>
  );
};

export default Documents;