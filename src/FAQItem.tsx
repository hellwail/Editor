import { NodeViewWrapper, 
    NodeViewContent, 
    NodeViewProps 
} from '@tiptap/react'

const FAQItemComponent = (props: NodeViewProps) => {
  return (
    <NodeViewWrapper className="faq-item">
      <div 
        className="drag-handle" 
        contentEditable={false}
        draggable="true"
        data-drag-handle
      >
        ⋮⋮
      </div>
      <button 
        className="remove-btn" 
        contentEditable={false} 
        onClick={() => props.deleteNode?.()}
      >
        Delete
      </button>

      <div className="faq-content">
        {/* <div className="question-wrapper">
          <NodeViewContent className="question-content" />
        </div> */}
        <div className="answer-wrapper">
          <NodeViewContent className="answer-content" />
        </div>
      </div>
    </NodeViewWrapper>
  )
}


export default FAQItemComponent
