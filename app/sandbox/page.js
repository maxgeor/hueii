'use client';

import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { javascript } from '@codemirror/lang-javascript';
import { tags as t } from '@lezer/highlight';

import ColorBox from '../../components/ColorBox';

export default function SandboxPage() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);

  const myTheme = createTheme({
    theme: 'light',
    settings: {
      background: '#19192f',
      foreground: '#787892',
      caret: '#fff',
      selection: '#20203b',
      selectionMatch: '#20203b',
      lineHighlight: '#8a91991a',
      gutterBackground: '#20203b',
      gutterForeground: '#8a919966',
    },
    styles: [
      { tag: t.comment, color: '#787b8099' },
      { tag: t.variableName, color: '#0080ff' },
      { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
      { tag: t.number, color: '#5c6166' },
      { tag: t.bool, color: '#5c6166' },
      { tag: t.null, color: '#5c6166' },
      { tag: t.keyword, color: '#5c6166' },
      { tag: t.operator, color: '#5c6166' },
      { tag: t.className, color: '#5c6166' },
      { tag: t.definition(t.typeName), color: '#5c6166' },
      { tag: t.typeName, color: '#5c6166' },
      { tag: t.angleBracket, color: '#5c6166' },
      { tag: t.tagName, color: '#5c6166' },
      { tag: t.attributeName, color: '#5c6166' },
    ],
  });

  const extensions = [javascript({ jsx: true })];

  return (
    <>
    <div className='flex gap-x-12 w-full'>
      <CodeMirror
        value="console.log('hello world!');"
        height="600px"
        theme={myTheme}
        extensions={extensions}
        onChange={onChange}
        className='w-full '
      />
      <section className='flex flex-col gap-y-6'>
        <div className='flex flex-col gap-y-1'>
          <h4 className='text-xs uppercase text-gray-500 tracking-widest'>Background</h4>
          <ColorBox color={'#ff7bb1'} />
        </div>
      </section>
    </div>
    </>
  );
}
