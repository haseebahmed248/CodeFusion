import React, { useContext, useEffect } from 'react';
import { Editor } from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import '../styles/Editor.css';
import Runner from './Runner';
import ExtrasContext from '../utils/Extras';

function CodeEditor({ language, value, onChange }) {
  
  const { setCode } = useContext(ExtrasContext);
  useEffect(() => {
    monaco.editor.defineTheme('default', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'identifier', foreground: '9CDCFE' },
        { token: 'identifier.function', foreground: 'DCDCAA' },
        { token: 'type', foreground: '1AAFB0' }
      ],
      colors: {}
    });
    monaco.editor.setTheme('default');
  }, []);

  return (
    <div className="editor-container">
      <Runner />
      <Editor
        defaultLanguage={language}
        defaultValue={value}
        theme="custom-dark"
        onChange={(value, event) => {
          setCode(value);
          console.log(value);
          onChange(value)}}
        className="editor"
        height="69vh"
        width="100%"
        
      />
    </div>
  );
}

export default CodeEditor;
