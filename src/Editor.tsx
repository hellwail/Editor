// import { useEditor,
//     // EditorContent 
// } from '@tiptap/react'
// import { DocNode, QuestionNode, FAQItemNode } from './Schemas'
// import StarterKit from '@tiptap/starter-kit'
// import Placeholder from '@tiptap/extension-placeholder'

// const Editor = useEditor({
//   extensions: [
//     // Переопределяем узел документа, чтобы позволял только faqItem
//     DocNode, 
//     // Базовые узлы и марки (можно подключить StarterKit и сконфигурировать):
//     StarterKit.configure({
//       heading: false,    // например, отключим заголовки, если не нужны в ответе
//       // ... при необходимости отключаем/настраиваем другие части StarterKit
//     }),
//     // Либо вместо StarterKit можно подключить поштучно:
//     // Document, Paragraph, Text, Bold, Italic, BulletList, ListItem, OrderedList, Blockquote, CodeBlock, HardBreak, etc.
//     // Наши кастомные узлы:
//     QuestionNode,
//     FAQItemNode,
//     // Расширение placeholder для отображения подсказок в пустых полях
//     Placeholder.configure({
//       includeChildren: true, // показывать placeholder и в вложенных узлах (внутри faqItem)
//       placeholder: ({ node }) => {
//         if (node.type.name === 'question') {
//           return 'Введите вопрос...'
//         }
//         if (node.type.name === 'paragraph') {
//           return 'Введите ответ...'
//         }
//         return ''
//       },
//       // showOnlyCurrent: false,  // при false placeholders видны во всех пустых полях сразу
//     }),
//   ],
//   content: '', 
//   autofocus: 'end',  
// })

// export default Editor
