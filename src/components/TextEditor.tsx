import { Editor } from '@monaco-editor/react';

const TextEditor: React.FC = () => {
  return (
    <div className="text-editor-container">
      <Editor
        height="90vh"
        defaultLanguage="markdown"
        defaultValue="# 开始编辑您的文档"
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          fontSize: 14
        }}
      />
    </div>
  );
}

export default TextEditor; 