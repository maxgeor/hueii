'use client'

import React, { useCallback } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import sampleCode from '../lib/samples/javascript';

export default function CodeEditor({
  width,
  background,
  foreground,
  theme
}) {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);

  return (
    <section className={`
      overflow-y-scroll w-full border border-gray-100/[8%] md:rounded-md
      ${width}
    `}>
      <div 
        style={{ backgroundColor: background, color: foreground }}
        className='text-xs flex md:rounded-t-md'
      >
        <div className={`border-r border-r-black/40 border-b-white flex justify-center items-center gap-x-2 p-2 px-4  rounded-tl-md`}>
          <img className='w-3 h-3 rounded-[1px]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
          <p>index.js</p>
        </div>
        <div className="border-r border-black/40 flex justify-center items-center gap-x-2 p-2 px-4 ">
          <img className='w-3 h-3 rounded-[1px]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
          <p>index.js</p>
        </div>
        <div className="border-r border-black/40 flex justify-center items-center gap-x-2 p-2 px-4">
          <img className='w-3 h-3 rounded-[1px]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
          <p>index.js</p>
        </div>
      </div>
      <div className='h-fit'>
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
