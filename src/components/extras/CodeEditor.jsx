import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

function CodeEditor() {

  const [code, setCode] = useState('');
  const [theme, setTheme] = useState('light');
  const [output, setOutput] = useState('');

  function handleEditorChange(value, event) {
    // console.log('here is the current model value:', value);
    setCode(value)
    // console.warn('code',code)
  }

  const handleRunCode = () => {
    try {
      // Evaluate the code
      const result = eval(code);

      // Set the output
      setOutput(result);
    } catch (error) {
      // Handle any errors
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className={theme == 'vs-dark' ? 'hidden' : 'text-center'}>
        <button className='bg-whitish p-2 rounded text-center text-pulp' onClick={() => setTheme('vs-dark')}>
          Enable dark mode</button>
      </div>
      <p className='m-1 p-2'>Write a function to find maximum element from array [23,11,54,17,29,2]</p>
      <Editor
        height="50vh"
        defaultLanguage="javascript"
        defaultValue=""
        onChange={handleEditorChange}
        theme={theme}
      />
      <button onClick={handleRunCode} className='bg-pulp px-8 py-2 rounded text-center text-white'>Run</button>
      <div className='text-center text-xl'>Output:<br /> {output}</div>
    </>
  );
}

export default CodeEditor;

