import React from 'react';
import { FaPen, FaHighlighter, FaEraser, FaPalette, FaTimes } from 'react-icons/fa';
import './MarkupEditor.css';

interface MarkupEditorProps {
  file: File | null;
  onClose: () => void;
}

const MarkupEditor = ({ file, onClose }: MarkupEditorProps) => {
  if (!file) {
    return null; // Hide toolbar if no file is selected
  }

  return (
    <div className="markup-toolbar">
      <div className="toolbar-main">
        <button className="tool-button">
          <FaPen />
          <span>Pen</span>
        </button>
        <button className="tool-button">
          <FaHighlighter />
          <span>Highlighter</span>
        </button>
        <button className="tool-button">
          <FaEraser />
          <span>Eraser</span>
        </button>
        <button className="tool-button">
          <FaPalette />
          <span>Color</span>
        </button>
        <button className="tool-button" onClick={onClose}>
          <FaTimes />
          <span>Close</span>
        </button>
      </div>
    </div>
  );
};

export default MarkupEditor;