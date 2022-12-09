'use client'

import React, { useCallback } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import sampleCode from '../lib/samples/javascript';

export default function CodeEditor({ classes, background, foreground, theme }) {
  const onChange = useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);

  return (
    <section className={`
      max-h-[calc(100vh-104px)] md:max-h-[calc(100vh-116px)] md:max-w-[640px]
      transition-all ease-in-out duration-500 relative overflow-y-scroll w-full border border-gray-100/[8%] rounded-md text-sm md:text-xs
      ${classes}
    `}>
      <div 
        style={{ backgroundColor: background, color: foreground }}
        className='z-10 sticky top-0 flex md:rounded-t-md border-b border-b-black/40'
      >
        <div className={`flex justify-center items-center gap-x-2 p-2 px-4  rounded-tl-md`}>
          <img className='w-3 h-3 rounded-[1px]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
          <p>index.js</p>
        </div>
      </div>
      <div className=''>
        <CodeMirror
          height={'fit-content'}
          theme={theme}
          extensions={[javascript({ jsx: true })]}
          onChange={onChange}
          className='w-full font-mono'
          value={sampleCode}
        />
      </div>
    </section>
  )
}
