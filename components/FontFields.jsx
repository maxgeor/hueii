'use client'

import React, { useState } from 'react'
import * as Toggle from '@radix-ui/react-toggle';
import { FontBoldIcon, FontItalicIcon } from '@radix-ui/react-icons';


export default function FontFields({ bolded: isBolded, italicized: isItalicized }) {
  const [bolded, setBolded] = useState(isBolded);
  const [italicized, setItalicized] = useState(isItalicized);
  
  return (
    <div className='flex'>
      <Toggle.Root 
        className="rounded-l flex items-center justify-center border border-gray-600 bg-gray-800 h-6 w-6" 
        aria-label="Toggle bold"
      >
        <FontBoldIcon />
      </Toggle.Root>
      <Toggle.Root 
        className="rounded-r border-l-0 flex items-center justify-center border border-gray-600 bg-gray-800 h-6 w-6" 
        aria-label="Toggle italic"
      >
        <FontItalicIcon />
      </Toggle.Root>
      {/* <Toggle.Root 
        pressed={bolded} 
        onPressedChange={() => setBolded(!bolded)} 
      />
      <Toggle.Root 
        pressed={italicized} 
        onPressedChange={() => setItalicized(!italicized)} 
      /> */}
    </div>
  )
}
