'use client'

import { useState } from 'react'
import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';

// const useState

const defaultBackground = '#191930'

const theme = createTheme({
  theme: 'dark',
  settings: {
    background: defaultBackground,
    foreground: '#81819c',
    caret: '#fff',
    selection: '#20203b',
    selectionMatch: '#20203b',
    lineHighlight: '#8a91991a',
    gutterBackground: defaultBackground,
    gutterForeground: '#8e959d66',
  },
  styles: [
    { 
      name: 'comment', 
      tag: t.comment, color: '#787b8099' 
    },
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

export default theme;

// State
  // feeds into raw theme
  // feeds into styleObject
    // groups
      // stlyes

// CodeMirror needs the raw theme to display the code 

// We need all the theme tags to have a state 

// We need to structure the state into an array of objets
  // name
  // color (state)
  // setColor (setState)
  // 

// When the page loads, we need some way to take the data we fetched from local storage or the db and funnel it through the theme (set state, generate theme, feed theme into )