'use client'

import { useState } from 'react'
import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';
import { GroupIcon, CodeIcon } from '@radix-ui/react-icons'

const defaultBackground                       = '#191930';
const [lightOrDark, setLightOrDark]           = useState('dark');
const [background, setBackground]             = useState(defaultBackground);
const [foreground, setForeground]             = useState('#81819c');
const [caret, setCaret]                       = useState('#fff');
const [selection, setSelection]               = useState('#20203b');
const [selectionMatch, setSelectionMatch]     = useState('#20203b');
const [lineHighlight, setLineHighlight]       = useState('#8a91991a');
const [gutterBackground, setGutterBackground] = useState(defaultBackground);
const [gutterForeground, setGutterForeground] = useState('#8e959d66');
const [comment, setComment]                   = useState('#787b8099');
const [variableName, setVariableNamet]        = useState('#0080ff');
const [string, setString]                     = useState('#5c6166');
const [number, setNumber]                     = useState('#5c6166');
const [bool, setBool]                         = useState('#5c6166');
const [nully, setNully]                       = useState('#5c6166');
const [keyword, setKeyword]                   = useState('#5c6166');
const [operator, setOperator]                 = useState('#5c6166');
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
    { name: 'Light or Dark?', color: lightOrDark, setColor: setLightOrDark },
    { name: 'Background', color: background, setColor: setBackground },
    { name: 'Foreground', color: foreground, setColor: setForeground },
    { name: 'Caret', color: caret, setColor: setCaret },
    { name: 'Selection', color: selection, setColor: setSelection },
    { name: 'Selection Match', color: selectionMatch, setColor: setSelectionMatch },
    { name: 'Line Highlight', color: lineHighlight, setColor: setLineHighlight },
    { name: 'Gutter Background', color: gutterBackground, setColor: setGutterBackground },
    { name: 'Gutter Foreground', color: gutterForeground, setColor: setGutterForeground }
  ] },
  { group: 'Code', icon: <CodeIcon className='shrink-0'/>, isSubgroup: false, items: [
    { name: 'Comment', color: comment, setColor: setComment },
    { name: 'Variable Name', color: variableName, setColor: setVariableNamet },
    { group: 'Data Types', icon: null, isSubgroup: true, items: [
      { name: 'String', color: string, setColor: setString },
      { name: 'Number', color: number, setColor: setNumber },
      { name: 'Bool', color: bool, setColor: setBool },
      { name: 'Null', color: nully, setColor: setNully },
    ] },
    { name: 'Keyword', color: keyword, setColor: setKeyword },
    { name: 'Operator', color: operator, setColor: setOperator },
    { name: 'Definition', color: definition, setColor: setDefinition },
    { name: 'Angle Bracket', color: angleBracket, setColor: setAngleBracket },
    { group: 'Names', icon: null, isSubgroup: true, items: [
      { name: 'Class Name', color: className, setColor: setClassName },
      { name: 'Type Name', color: typeName, setColor: setTypeName },
      { name: 'Tag Name', color: tagName, setColor: setTagName },
      { name: 'Attribute Name', color: attributeName, setColor: setAttributeName }
    ] },
  ]},
];

export default { theme, styles };
