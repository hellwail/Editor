import FAQEditor from './FAQEditor'
import UserStoryEditor from './UserStoryEditor'
import ResumeEditor from './ResumeEditor'
import EditorToggle from './EditorToggle'
import './App.css'
import { useState, useEffect } from 'react'

type EditorType = 'faq' | 'userstory' | 'resume'

function App() {
  const [activeEditor, setActiveEditor] = useState<EditorType>(() => {
    return (localStorage.getItem('activeEditor') as EditorType) || 'faq'
  })

  useEffect(() => {
    localStorage.setItem('activeEditor', activeEditor)
  }, [activeEditor])

  const getTitle = () => {
    switch(activeEditor) {
      case 'faq': return 'Awesome FAQ Editor'
      case 'userstory': return 'Awesome User Story Editor'
      case 'resume': return 'Awesome Resume Editor'
    }
  }

  return (
    <div className="app">
      <div className="header">
        <h1 className='title'>{getTitle()}</h1>
        <EditorToggle 
          activeEditor={activeEditor} 
          onToggle={setActiveEditor} 
        />
      </div>
      {activeEditor === 'faq' ? <FAQEditor /> :
       activeEditor === 'userstory' ? <UserStoryEditor /> :
       <ResumeEditor />}
    </div>
  )
}

export default App
