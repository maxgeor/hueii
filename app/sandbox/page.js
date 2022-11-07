'use client';

import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { javascript } from '@codemirror/lang-javascript';
import { tags as t } from '@lezer/highlight';
import { GroupIcon, CodeIcon } from '@radix-ui/react-icons'

import ColorBox from '../../components/ColorBox';

export default function SandboxPage() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);

  const myTheme = createTheme({
    theme: 'dark',
    settings: {
      background: '#25253e',
      foreground: '#81819c',
      caret: '#fff',
      selection: '#20203b',
      selectionMatch: '#20203b',
      lineHighlight: '#8a91991a',
      gutterBackground: '#2c2c45',
      gutterForeground: '#8e959d66',
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
    <div className='grid grid-cols-9 gap-x-5 w-full'>
      <div className='col-span-2 flex flex-col gap-y-10 ml-1 lg:ml-0'>
        <div className='flex flex-col gap-y-4 mt-1'>
          <div className='flex items-center gap-x-2 -ml-0.5'>
            <GroupIcon className='shrink-0' />
            <h3 className='text-sm uppercase tracking-widest'>General</h3>
          </div>
          <section className='pl-5 border-l border-white/[15%] flex flex-col gap-y-4'>
            <div className='flex flex-col '>
              <h4 className='text-xs tracking-wider text-gray-500 leading-5 font-mono'>Background</h4>
              <ColorBox color={'#ff7bb1'} />
            </div>
            <div className='flex flex-col '>
              <h4 className='text-xs tracking-wider text-gray-500 leading-5 font-mono'>Background</h4>
              <ColorBox color={'#ff7bb1'} />
            </div>
            <div className='flex flex-col '>
              <h4 className='text-xs tracking-wider text-gray-500 leading-5 font-mono'>Background</h4>
              <ColorBox color={'#ff7bb1'} />
            </div>
            <div className='flex flex-col '>
              <h4 className='text-xs tracking-wider text-gray-500 leading-5 font-mono'>Background</h4>
              <ColorBox color={'#ff7bb1'} />
            </div>
          </section>
        </div>
        <div className='flex flex-col gap-y-4 mt-2'>
          <div className='flex items-center gap-x-2 -ml-0.5'>
            <CodeIcon className='shrink-0' />
            <h3 className='text-sm uppercase tracking-widest'>Code</h3>
          </div>
          <section className='pl-5 border-l border-white/[15%] flex flex-col gap-y-4'>
            <div className='flex flex-col '>
              <h4 className='text-xs tracking-wider text-gray-500 leading-5 font-mono'>Background</h4>
              <ColorBox color={'#ff7bb1'} />
            </div>
            <div className='flex flex-col py-3'>
              <div className='flex items-center pl-2.5 border-l border-white/85 h-3'>
                <h3 className='text-xs uppercase text-white tracking-widest font-medium'>Operators</h3>
              </div>
              <section className='pt-4 pl-5 border-l border-white/[15%] flex flex-col gap-y-4'>
                <div className='flex flex-col '>
                  <h4 className='text-xs tracking-wider text-gray-500 leading-5 font-mono'>Background</h4>
                  <ColorBox color={'#ff7bb1'} />
                </div>
                <div className='flex flex-col '>
                  <h4 className='text-xs tracking-wider text-gray-500 leading-5 font-mono'>Background</h4>
                  <ColorBox color={'#ff7bb1'} />
                </div>
              </section>
            </div>
            <div className='flex flex-col '>
              <h4 className='text-xs tracking-wider text-gray-500 leading-5 font-mono'>Background</h4>
              <ColorBox color={'#ff7bb1'} />
            </div>
          </section>
        </div>
        
      </div>
      <CodeMirror
        value="console.log('hello world!');"
        height="600px"
        theme={myTheme}
        extensions={extensions}
        onChange={onChange}
        className='col-span-7'
      />
    </div>
    </>
  );
}
