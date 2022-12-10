'use client'

import React, { useCallback, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import sampleCode from '../lib/samples/javascript';
import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';

export default function CodeEditor() {
  const { theme } = useContext(ThemeContext);

  const styles = createTheme({
    theme: theme.lightOrDark,
    settings: {
      background: theme.background,
      foreground : theme.text,
      gutterBackground: theme.background,
      gutterForeground: theme.text,
      caret: theme.text,
      selection: theme.selection,
      selectionMatch: theme.selectionMatch,
      lineHighlight: theme.lineHighlight,
    },
    styles: [
      { tag: t.comment, color: theme.comment },
      { tag: t.variableName, color: theme.variableName },
      { tag: [t.string, t.special(t.brace)], color: theme.string },
      { tag: t.number, color: theme.number },
      { tag: t.bool, color: theme.bool },
      { tag: t.null, color: theme.nullish },
      { tag: t.keyword, color: theme.keyword },
      { tag: t.operator, color: theme.operator },
      { tag: t.className, color: theme.className },
      { tag: t.definition(t.typeName), color: theme.definition},
      { tag: t.typeName, color: theme.typeName },
      { tag: t.angleBracket, color: theme.angleBracket },
      { tag: t.tagName, color: theme.tagName },
      { tag: t.attributeName, color: theme.attributeName }
    ],
  });

  const onChange = useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);

  return (
    <section className={`
      md:w-2/3 max-h-[calc(100vh-104px)] md:max-h-[calc(100vh-116px)] md:max-w-[640px]
      transition-all ease-in-out duration-500 relative overflow-y-scroll w-full border border-gray-100/[8%] rounded-md text-sm md:text-xs
    `}>
      <div 
        style={{ backgroundColor: theme.background, color: theme.text }}
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
          theme={styles}
          extensions={[javascript({ jsx: true })]}
          onChange={onChange}
          className='w-full font-mono'
          value={sampleCode}
        />
      </div>
    </section>
  )
}
