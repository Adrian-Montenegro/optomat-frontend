import React, { useState } from 'react';
import {
  FaFile, FaSave, FaFolderOpen, FaShareAlt, FaPrint, FaPen, FaHighlighter,
  FaEraser, FaPalette, FaPlus, FaFont, FaSignature, FaCheckSquare, FaCaretDown,
  FaSearchMinus, FaSearchPlus, FaAdjust, FaCog, FaRulerCombined as FaRuler,
  FaEnvelope, FaCloudUploadAlt, FaImage, FaUsers, FaHistory, FaKeyboard, FaUserCog,
  FaExpand,
} from 'react-icons/fa';
import './Sidebar.css';

interface SidebarProps {
  onFileSelect: (file: File) => void;
}

const Sidebar = ({ onFileSelect }: SidebarProps) => {
  const [activeTab, setActiveTab] = useState<'file' | 'markup' | 'insert' | 'share' | 'sizing' | 'settings'>('file');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="sidebar">
      {/* Tab Buttons */}
      <div className="sidebar-tabs">
        <button
          className={activeTab === 'file' ? 'active' : ''}
          onClick={() => setActiveTab('file')}
          title="File Management"
        >
          <FaFile />
        </button>
        <button
          className={activeTab === 'markup' ? 'active' : ''}
          onClick={() => setActiveTab('markup')}
          title="Markup Tools"
        >
          <FaPen />
        </button>
        <button
          className={activeTab === 'insert' ? 'active' : ''}
          onClick={() => setActiveTab('insert')}
          title="Insert Fields"
        >
          <FaPlus />
        </button>
        <button
          className={activeTab === 'share' ? 'active' : ''}
          onClick={() => setActiveTab('share')}
          title="Share & Export"
        >
          <FaShareAlt />
        </button>
        <button
          className={activeTab === 'sizing' ? 'active' : ''}
          onClick={() => setActiveTab('sizing')}
          title="Sizing & Format"
        >
          <FaRuler />
        </button>
        <button
          className={activeTab === 'settings' ? 'active' : ''}
          onClick={() => setActiveTab('settings')}
          title="Settings"
        >
          <FaCog />
        </button>
      </div>

      {/* Tab Content */}
      <div className="sidebar-content">
        {activeTab === 'file' && (
          <div className="tab-content">
            <input
              type="file"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
              id="file-upload"
            />
            <label htmlFor="file-upload" className="sidebar-button">
              <FaFolderOpen />
            </label>
            <button onClick={() => alert('New PDF')}>
              <FaFile />
            </button>
            <button onClick={() => alert('Save / Save As')}>
              <FaSave />
            </button>
            <button onClick={() => alert('Print')}>
              <FaPrint />
            </button>
          </div>
        )}

        {activeTab === 'markup' && (
          <div className="tab-content">
            <button title="Pen">
              <FaPen />
            </button>
            <button title="Highlighter">
              <FaHighlighter />
            </button>
            <button title="Eraser">
              <FaEraser />
            </button>
            <button title="Color Picker">
              <FaPalette />
            </button>
          </div>
        )}

        {activeTab === 'insert' && (
          <div className="tab-content">
            <button title="Text Field">
              <FaFont />
            </button>
            <button title="Signature">
              <FaSignature />
            </button>
            <button title="Checkbox">
              <FaCheckSquare />
            </button>
            <button title="Dropdown">
              <FaCaretDown />
            </button>
          </div>
        )}

        {activeTab === 'share' && (
          <div className="tab-content">
            <button onClick={() => alert('Send To Email')}>
              <FaEnvelope />
            </button>
            <button onClick={() => alert('Send To Cloud')}>
              <FaCloudUploadAlt />
            </button>
            <button onClick={() => alert('Export as PNG')}>
              <FaImage />
            </button>
            <button onClick={() => alert('Collaborate')}>
              <FaUsers />
            </button>
            <button onClick={() => alert('Version Control')}>
              <FaHistory />
            </button>
          </div>
        )}

        {activeTab === 'sizing' && (
          <div className="tab-content">
            <button onClick={() => alert('Fit to Screen')}>
              <FaExpand />
            </button>
            <button onClick={() => alert('100% Zoom')}>
              <FaExpand />
            </button>
            <button onClick={() => alert('Custom Zoom')}>
              <FaExpand />
            </button>
            <button onClick={() => alert('Single Page Layout')}>
              <FaAdjust />
            </button>
            <button onClick={() => alert('Continuous Layout')}>
              <FaAdjust />
            </button>
            <button onClick={() => alert('Dark Mode Toggle')}>
              <FaAdjust />
            </button>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="tab-content">
            <button onClick={() => alert('Theme Customization')}>
              <FaPalette />
            </button>
            <button onClick={() => alert('Toolbar Customization')}>
              <FaCog />
            </button>
            <button onClick={() => alert('Keyboard Shortcuts')}>
              <FaKeyboard />
            </button>
            <button onClick={() => alert('User Preferences')}>
              <FaUserCog />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;