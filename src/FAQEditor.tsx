import { useState, useCallback } from 'react'
import BaseEditor from './components/BaseEditor'
import { Editor } from '@tiptap/react'
import { DocNode, QuestionNode, FAQItemNode } from './Schemas'

const placeholders = {
  question: 'Введите вопрос...',
  paragraph: 'Введите ответ...'
};

const initialContent = `{
  "type": "doc",
  "content": [{
    "type": "faqItem",
    "content": [
      {
        "type": "question",
        "content": []
      },
      {
        "type": "paragraph",
        "content": []
      }
    ]
  }]
}`;

const FAQEditor = () => {
  const [editorInstance, setEditorInstance] = useState<Editor | null>(null);

  const handleEditorReady = useCallback((editor: Editor) => {
    setEditorInstance(editor);
  }, []);

  const addItem = useCallback(() => {
    if (!editorInstance) return;
    
    editorInstance.chain()
      .command(({ tr }) => {
        const question = editorInstance.schema.nodes.question.create();
        const paragraph = editorInstance.schema.nodes.paragraph.create();
        const faqItem = editorInstance.schema.nodes.faqItem.create(null, [question, paragraph]);
        
        const pos = tr.doc.content.size;
        tr.insert(pos, faqItem);
        
        return true;
      })
      .focus()
      .run();
  }, [editorInstance]);

  return (
    <BaseEditor
      extensions={[DocNode, QuestionNode, FAQItemNode]}
      placeholders={placeholders}
      initialContent={initialContent}
      storageKey="faqContent"
      onEditorReady={handleEditorReady}
    >
      <button className="add-btn" onClick={addItem}>Add item</button>
    </BaseEditor>
  );
};

export default FAQEditor;
