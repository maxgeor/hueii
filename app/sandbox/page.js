'use client';

import React from 'react';
import { useState, useEffect } from 'react'
import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';
import { GroupIcon, CodeIcon, DividerVerticalIcon, ArrowLeftIcon } from '@radix-ui/react-icons'
import StyleEditor from '../../components/StyleEditor';
import CodeEditor from '../../components/CodeEditor';
import StyleEditorButton from '../../components/StyleEditorButton';
import { SketchPicker } from 'react-color';

export default function SandboxPage() {
  const [picking, setPicking] = useState(false)
  const [pickerColor, setPickerColor] = useState('#fff')
  const [colorListExpanded, setColorListExpanded] = useState(false);
  const [changeColor, setChangeColor] = useState(null)

  const white = '#C7C7FF'
  const black = '#222237'
  const gray = '#B0B0CF'
  const purple = '#817BD5';
  const green = '#63BB96';
  const blue = '#3FA7DE';
  const red = '#D4629A';
  const yellow = '#C6B062';
  const teal = '#72BABB';

  const handleShowPicker = (color, setColor) => {
    setChangeColor(setColor)
    setPickerColor(color)
    setPicking(true)
  }

  const handleChangeComplete = color => {
    setPickerColor(color.hex)
    changeColor(color.hex)
  };

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
      { name: 'Keyword', color: keyword, setColor: setKeyword, fontable: true, bolded: false, italicized: false },
      { name: 'Variables', color: variableName, setColor: setVariableName, fontable: true, bolded: false, italicized: false },
      { name: 'Operator', color: operator, setColor: setOperator, fontable: true, bolded: false, italicized: false },
      { name: 'Comment', color: comment, setColor: setComment, fontable: true, bolded: false, italicized: false },
      { group: '•••', icon: null, isSubgroup: true, items: [
        { name: 'Angle Bracket', color: angleBracket, setColor: setAngleBracket, fontable: true, bolded: false, italicized: false },
        { name: 'Definition', color: definition, setColor: setDefinition, fontable: true, bolded: false, italicized: false },
      ] },
    ]},
  ];

  return (
    <div className='max-h-screen relative md:flex md:justify-between gap-x-10 lg:gap-x-16 w-full md:px-6 mt-2 md:mt-3 max-w-[1158px] mx-auto'>
      <section className={`
        flex md:w-1/3 lg:w-1/4 overflow-y-scroll shadow-xl md:shadow-none absolute md:relative bottom-1.5 z-20  pt-12 px-1 pb-4 md:p-0 md:pt-2.5 bg-black/90 backdrop-blur md:h-auto rounded-xl md:rounded-none border border-white/[15%] md:border-none
        ${colorListExpanded ? 'h-full top-1.5 left-1.5 right-1.5 bottom-1.5' : 'h-[calc(100vh/3)] bottom-1.5 left-1.5 right-1.5'}
      `}>
        <div className={`${picking ? 'opacity-0 -translate-x-64' : 'opacity-100 translate-x-0 '} ease-in-out transform duration-[250ms] transition-all w-full`}>
          <StyleEditor 
            styles={styles} 
            colorListExpanded={colorListExpanded}
            setColorListExpanded={setColorListExpanded}
            showPicker={handleShowPicker}
          />
        </div>
        <div className={`${picking ? 'opacity-100 -translate-x-[188px]' : ' opacity-0 translate-x-[800px]'} sticky top-4 flex flex-col gap-y-4 -mt-[5px] transform duration-[250ms] ease-in-out transition-all w-full`}>
          <div className=' flex items-center justify-center '>
            <StyleEditorButton
              position={'top-0 -left-1'}
              handleClick={() => setPicking(false)}
            >
              <ArrowLeftIcon /> 
            </StyleEditorButton>
            <div className='flex items-center gap-x-1.5'>
              <span 
                style={{ backgroundColor: pickerColor }}
                className={`border border-white/[30%] h-5 w-5 rounded-full `}
              ></span>
              <div className='flex items-center w-16 text-sm leading-7 '>
                <p className='font-light'>#</p>
                <p className='tracking-widish text-gray-100'>
                  {pickerColor.replace('#', '').toUpperCase()}
                </p>
              </div>
            </div>
          </div>
          <SketchPicker
            color={pickerColor}
            onChange={handleChangeComplete}
            // onChangeComplete={handleChangeComplete}
          />
        </div>
      </section>
      <CodeEditor 
        theme={theme}
        background={background}
        foreground={foreground}
        width={'w-2/3 lg:w-3/4'}
      />
    </div>
  );
}
