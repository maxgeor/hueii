'use client';

import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

export default function EditorPage() {
  const [isOn, setIsOn] = useState(false);
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);

  return (
    <>
      <div>Editor</div>

      <p>{ isOn ? 'On!' : 'Off' }</p>
      <button onClick={() => setIsOn(!isOn)}>
        {`Turn ${isOn ? 'off' : 'on'}`}
      </button>
      <CodeMirror
        value="console.log('hello world!');"
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </>
  );
}
