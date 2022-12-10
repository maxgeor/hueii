'use client';

import { useState } from 'react';
import StyleList from '../../components/StyleList';
import CodeEditor from '../../components/CodeEditor';
import { ThemeContext } from '../../context/ThemeContext';

export default function SandboxPage() {
  const [theme, setTheme] = useState({
    lightorDark: 'dark',
    background: '#222237',
    text: '#B0B0CF',
    selection: '#343450',
    selectionMatch: '#28283e',
    lineHighlight: '#8a9199',
    comment: '#45455f',
    variableName: '#72BABB',
    string: '#63BB96',
    number: '#D4629A',
    bool: '#D4629A',
    nullish: '#D4629A',
    keyword: '#817ccd',
    operator: '#B0B0CF',
    className: '#5c6166',
    definition: '#5c6166',
    typeName: '#5c6166',
    angleBracket: '#5c6166',
    tagName: '#5c6166',
    attributeName: '#5c6166'
  });
  
  return (
    <div className='max-w-[1050px] md:flex md:justify-between gap-x-6 w-full px-6 pt-4 mx-auto bg-transparent'>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {/* <section className='md:w-1/3 bg-black/90 backdrop-blur flex flex-col shadow-xl md:shadow-none absolute md:static top-1.5 bottom-1.5 left-1.5 right-1.5 z-20 pt-8 px-6 md:p-0 md:mt-1 md:h-auto rounded-xl md:rounded-none border border-white/[15%] md:border-none'>
          <StyleList styles={styles} />
        </section> */}
        <StyleList />
        <CodeEditor />
      </ThemeContext.Provider>
    </div>
  );
}
