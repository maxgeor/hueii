'use client';

import Link from 'next/link';
import Logo from '../../components/logo'
import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';
import { useState, createContext } from 'react';
import { 
  CodeIcon, 
  GroupIcon, 
  UploadIcon,
  QuestionMarkCircledIcon
} from '@radix-ui/react-icons'

export default function DashboardLayout({ children }) {
  const white = '#C7C7FF'
  const black = '#222237'
  const gray = '#B0B0CF'
  const purple = '#817BD5';
  const green = '#63BB96';
  const blue = '#3FA7DE';
  const red = '#D4629A';
  const yellow = '#C6B062';
  const teal = '#72BABB';

  const [lightOrDark, setLightOrDark]           = useState('dark');
  const [background, setBackground]             = useState(black);
  const [foreground, setForeground]             = useState(gray);
  const [caret, setCaret]                       = useState('#fff');
  const [selection, setSelection]               = useState('#343450');
  const [selectionMatch, setSelectionMatch]     = useState('#28283e');
  const [lineHighlight, setLineHighlight]       = useState('#8a91991a');
  const [gutterBackground, setGutterBackground] = useState(black);
  const [gutterForeground, setGutterForeground] = useState('#464658');
  const [comment, setComment]                   = useState('#45455f');
  const [variableName, setVariableName]         = useState(teal);
  const [string, setString]                     = useState(green);
  const [number, setNumber]                     = useState('#D4629A');
  const [bool, setBool]                         = useState('#D4629A');
  const [nully, setNully]                       = useState('#D4629A');
  const [keyword, setKeyword]                   = useState('#817ccd');
  const [operator, setOperator]                 = useState(gray);
  const [className, setClassName]               = useState('#5c6166');
  const [definition, setDefinition]             = useState('#5c6166');
  const [typeName, setTypeName]                 = useState('#5c6166');
  const [angleBracket, setAngleBracket]         = useState('#5c6166');
  const [tagName, setTagName]                   = useState('#5c6166');
  const [attributeName, setAttributeName]       = useState('#5c6166');

  const theme = createTheme({
    theme: lightOrDark,
    settings: {
      background,
      foreground,
      caret,
      selection,
      selectionMatch,
      lineHighlight,
      gutterBackground,
      gutterForeground,
    },
    styles: [
      { tag: t.comment, color: comment },
      { tag: t.variableName, color: variableName },
      { tag: [t.string, t.special(t.brace)], color: string },
      { tag: t.number, color: number },
      { tag: t.bool, color: bool },
      { tag: t.null, color: nully },
      { tag: t.keyword, color: keyword },
      { tag: t.operator, color: operator },
      { tag: t.className, color: className },
      { tag: t.definition(t.typeName), color: definition },
      { tag: t.typeName, color: typeName },
      { tag: t.angleBracket, color: angleBracket },
      { tag: t.tagName, color: tagName },
      { tag: t.attributeName, color: attributeName },
    ],
  });

  const styles = [
    { group: 'General', icon: <GroupIcon className='shrink-0'/>, isSubgroup: false, items: [
      { group: 'Text', isSubgroup: true, items: [
        { name: 'Editor Text', color: foreground, setColor: setForeground },
        { name: 'Gutter Text', color: gutterForeground, setColor: setGutterForeground }
      ] },
      { group: 'Backgrounds', isSubgroup: true, items: [
        { name: 'Editor Background', color: background, setColor: setBackground },
        { name: 'Gutter Background', color: gutterBackground, setColor: setGutterBackground },
      ] },
      { group: 'Highlights', isSubgroup: true, items: [
        { name: 'Line Highlight', color: lineHighlight, setColor: setLineHighlight },
        { name: 'Selection', color: selection, setColor: setSelection },
        { name: 'Selection Match', color: selectionMatch, setColor: setSelectionMatch },
      ] },
      { name: 'Light or Dark?', color: lightOrDark, setColor: setLightOrDark },
      { name: 'Caret', color: caret, setColor: setCaret },
    ] },
    { group: 'Code', icon: <CodeIcon className='shrink-0'/>, isSubgroup: false, items: [
      { group: 'Data Types', icon: null, isSubgroup: true, items: [
        { name: 'String', color: string, setColor: setString, fontable: true, bolded: false, italicized: false },
        { name: 'Number', color: number, setColor: setNumber, fontable: true, bolded: false, italicized: false },
        { name: 'Boolean', color: bool, setColor: setBool, fontable: true, bolded: false, italicized: false },
        { name: 'Null', color: nully, setColor: setNully, fontable: true, bolded: false, italicized: false },
      ] },
      { group: 'Names', icon: null, isSubgroup: true, items: [
        { name: 'Class Name', color: className, setColor: setClassName, fontable: true, bolded: false, italicized: false },
        { name: 'Type Name', color: typeName, setColor: setTypeName, fontable: true, bolded: false, italicized: false },
        { name: 'Tag Name', color: tagName, setColor: setTagName, fontable: true, bolded: false, italicized: false },
        { name: 'Attribute Name', color: attributeName, setColor: setAttributeName, fontable: false, bolded: false, italicized: false }
      ] },
      { name: 'Variables', color: variableName, setColor: setVariableName, fontable: true, bolded: false, italicized: false },
      { name: 'Keyword', color: keyword, setColor: setKeyword, fontable: true, bolded: false, italicized: false },
      { name: 'Operator', color: operator, setColor: setOperator, fontable: true, bolded: false, italicized: false },
      { name: 'Comment', color: comment, setColor: setComment, fontable: true, bolded: false, italicized: false },
      { name: 'Angle Bracket', color: angleBracket, setColor: setAngleBracket, fontable: true, bolded: false, italicized: false },
      { name: 'Definition', color: definition, setColor: setDefinition, fontable: true, bolded: false, italicized: false },
    ]},
  ];

  const ThemeContext = createContext();

  return (
    <ThemeContext.Provider value={styles}>
      <div className='relative bg-black md:pb-12'>
        <header className='relative flex items-center justify-between gap-x-2 py-3 px-4 md:pl-[18px] md:py-3 md:px-6 max-w-8xl mx-auto'>
          <div className='flex items-center gap-x-4 w-fit self-start '>
            <Link href='/'>
              <div className='-ml-1 transition duration-75 transform hover:scale-[108%] active:scale-100'>
                <Logo size='small' />
              </div>
            </Link>
          </div>
          <div className='flex items-center flex-wrap-reverse gap-y-2 gap-x-4 justify-end'>
            <p className='md:absolute transform left-1/2 md:-translate-x-1/2 text-gray-500 text-xs'>
              <a href='#' className='text-white hover:underline underline-offset-4'>Sign up</a> to save your theme
            </p>
            <div className='flex items-center gap-x-3'>
              <div className='flex items-center h-12'>
                <button className='transition duration-75 transform hover:scale-[102%] active:scale-100 flex gap-x-2 items-center bg-white text-black font-medium rounded-full px-5 py-2 text-sm'>
                  <UploadIcon />
                  <span>Export</span>
                </button>
              </div>
              <QuestionMarkCircledIcon className='text-gray-400 hover:text-white' />
            </div>
          </div>
        </header>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}