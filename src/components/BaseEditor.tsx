import { Editor, useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import React from 'react'

interface BaseEditorProps {
  extensions: any[]
  placeholders: Record<string, string>
  initialContent: string
  storageKey: string
  children?: React.ReactNode
  onEditorReady?: (editor: Editor) => void
}

const BaseEditor = ({ 
  extensions, 
  placeholders, 
  initialContent, 
  storageKey,
  children,
  onEditorReady 
}: BaseEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        document: false,
        heading: false,
      }),
      ...extensions,
      Placeholder.configure({
        includeChildren: true,
        placeholder: ({ node }) => placeholders[node.type.name] || '',
        showOnlyCurrent: false,
        emptyNodeClass: 'is-editor-empty',
        emptyEditorClass: 'is-editor-empty',
        showOnlyWhenEditable: true,
      }),
    ],
    editable: true,
    content: JSON.parse(localStorage.getItem(storageKey) || initialContent),
    onUpdate: ({ editor }) => {
      localStorage.setItem(storageKey, JSON.stringify(editor.getJSON()))
    }
  })

  React.useEffect(() => {
    if (editor && onEditorReady) {
      onEditorReady(editor)
    }
  }, [editor, onEditorReady])

  if (!editor) return null

  return (
    <div className="editor-container">
      <EditorContent editor={editor} />
      {children}
    </div>
  )
}

export default BaseEditor 