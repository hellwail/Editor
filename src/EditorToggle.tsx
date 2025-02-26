import React from 'react'

type EditorType = 'faq' | 'userstory' | 'resume'

interface EditorToggleProps {
  activeEditor: EditorType
  onToggle: (type: EditorType) => void
}

const EditorToggle: React.FC<EditorToggleProps> = ({ activeEditor, onToggle }) => {
  return (
    <div className="editor-toggle">
      <button 
        className={`toggle-btn ${activeEditor === 'faq' ? 'active' : ''}`}
        onClick={() => onToggle('faq')}
      >
        FAQ Editor
      </button>
      <button 
        className={`toggle-btn ${activeEditor === 'userstory' ? 'active' : ''}`}
        onClick={() => onToggle('userstory')}
      >
        User Story
      </button>
      <button 
        className={`toggle-btn ${activeEditor === 'resume' ? 'active' : ''}`}
        onClick={() => onToggle('resume')}
      >
        Resume
      </button>
    </div>
  )
}

export default EditorToggle 