import React, { useContext, useEffect } from 'react';
import { Editor } from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import '../styles/Editor.css';
import Runner from './Runner';
import ExtrasContext from '../utils/Extras';

function CodeEditor({ language, value, onChange }) {
  
  const { setCode } = useContext(ExtrasContext);
  useEffect(() => {
    // Define a dark theme named 'default'
    monaco.editor.defineTheme('default', {
      base: 'vs-dark', // Use the 'vs-dark' base theme
      inherit: true,
      rules: [
        { token: 'identifier', foreground: '9CDCFE' },
        { token: 'identifier.function', foreground: 'DCDCAA' },
        { token: 'type', foreground: '1AAFB0' }
      ],
      colors: {}
    });
    // Set the theme to 'default'
    monaco.editor.setTheme('default');
  }, []);

  return (
    <div className="editor-container">
      <Runner />
      <Editor
        defaultLanguage={language}
        defaultValue={value}
        theme="vs-dark" // Use Monaco's built-in dark theme for testing
        onChange={(value, event) => {
          setCode(value);
          console.log(value);
          onChange(value);
        }}
        className="editor"
        height="69vh"
        width="100%"
      />
    </div>
  )}

export default CodeEditor;