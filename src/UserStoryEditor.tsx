import { useState } from 'react';
import BaseEditor from './components/BaseEditor';
import { 
  UserStoryDocNode, 
  UserStoryTitleNode,
  UserStoryQuestionNode,
  UserStoryCriteriaContainerNode,
  UserStoryCriteriaNode,
  UserStoryImplementationContainerNode,
  UserStoryImplementationNode,
  ImplementationParagraphNode,
  CustomBulletList
} from './UserStorySchemas';

const placeholders = {
  userStoryTitle: 'Введите заголовок...',
  userStoryQuestion: 'Что? Зачем? Когда?',
  paragraph: 'Добавьте критерий...',
  implementationParagraph: 'Опишите реализацию...'
};

const initialContent = `{
  "type": "doc",
  "content": [
    {
      "type": "userStoryTitle",
      "content": []
    },
    {
      "type": "userStoryQuestion",
      "content": []
    },
    {
      "type": "userStoryCriteriaContainer",
      "content": [{
        "type": "userStoryCriteria",
        "content": [{
          "type": "bulletList",
          "content": [
            {
              "type": "listItem",
              "content": [{ 
                "type": "paragraph",
                "content": []
              }]
            }
          ]
        }]
      }]
    },
    {
      "type": "userStoryImplementationContainer",
      "content": [{
        "type": "userStoryImplementation",
        "content": [{
          "type": "implementationParagraph",
          "content": []
        }]
      }]
    }
  ]
}`;

const UserStoryEditor = () => {
  const [showImplementation, setShowImplementation] = useState(false);

  return (
    <div className="userstory-editor">
      <BaseEditor
        extensions={[
          UserStoryDocNode,
          UserStoryTitleNode,
          UserStoryQuestionNode,
          UserStoryCriteriaContainerNode,
          UserStoryCriteriaNode,
          UserStoryImplementationContainerNode,
          UserStoryImplementationNode,
          ImplementationParagraphNode,
          CustomBulletList
        ]}
        placeholders={placeholders}
        initialContent={initialContent}
        storageKey="userStoryContent"
      >
        <div className="editor-controls">
          <button 
            className="toggle-implementation-btn"
            onClick={() => setShowImplementation(prev => !prev)}
          >
            {showImplementation ? '−' : '+'}
          </button>
        </div>
      </BaseEditor>
      <style>{`
        .userstory-implementation-container {
          display: ${showImplementation ? 'block' : 'none'};
        }
      `}</style>
    </div>
  );
};

export default UserStoryEditor;