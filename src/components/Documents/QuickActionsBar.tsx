import React, { useState } from 'react';
import { FaUpload, FaHistory, FaHighlighter, FaPlus, FaTimes } from 'react-icons/fa';
import './QuickActionsBar.css';

const QuickActionsBar = ({ onMarkupClick }: { onMarkupClick: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="quick-actions-fab">
      <button className="fab-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaPlus />}
      </button>
      {isMenuOpen && (
        <div className="fab-menu">
          <button onClick={() => console.log('Upload clicked')}>
            <FaUpload />
            Upload
          </button>
          <button onClick={() => console.log('Version History clicked')}>
            <FaHistory />
            Version History
          </button>
          <button onClick={onMarkupClick}>
            <FaHighlighter />
            Annotations
          </button>
        </div>
      )}
    </div>
  );
};

export default QuickActionsBar;