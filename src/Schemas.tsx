import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import FAQItemComponent from './FAQItem'

const QuestionNode = Node.create({
  name: 'question',
  group: 'block',
  content: 'text*',
  defining: true,
  parseHTML() {
    return [{ tag: 'div[data-type="question"]' }]
  },
  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 
      'data-type': 'question'
    }), 0]
  },
  
})

const FAQItemNode = Node.create({
  name: 'faqItem',
  group: 'block',
  content: 'question paragraph+',
  draggable: true,
  parseHTML() {
    return [{ tag: 'div[data-type="faqItem"]' }]
  },
  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, {
      'data-type': 'faqItem',
      class: 'faq-item'
    }), 0]
  },
  addNodeView() {
    return ReactNodeViewRenderer(FAQItemComponent)
  }
})

const DocNode = Node.create({
  name: 'doc',
  topNode: true,
  content: 'faqItem*'
})

export { DocNode, QuestionNode, FAQItemNode }