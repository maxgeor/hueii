'use client'

import React, { useState } from 'react'
import * as Toggle from '@radix-ui/react-toggle';
import { FontBoldIcon, FontItalicIcon } from '@radix-ui/react-icons';


export default function FontFields({ bolded: isBolded, italicized: isItalicized }) {
  const [bolded, setBolded] = useState(isBolded);
  const [italicized, setItalicized] = useState(isItalicized);

  const classes = 'border-box h-6 flex items-center justify-center border h-6 w-6 focus:ring-1 focus:ring-white active:ring-0 focus:outline-none hover:scale-[108%] focus:scale-[108%] active:scale-100 transition duration-75';
  const active = `text-black bg-gray-100 hover:bg-white focus:bg-white border-gray-100 hover:border-white focus:border-white`;
  const inactive = 'text-gray-300 hover:text-white focus:text-white bg-gray-900 hover:bg-gray-700 focus:bg-gray-700 border-gray-700 hover:border-gray-500 focus:border-gray-500';
  
  const boldClasses = `${classes} ${bolded && !italicized ? `${active} border-r-gray-100` : bolded ? `${active} border-r-gray-700/25` : `${inactive} border-r-gray-700/70`} rounded-l`;
  const italicClasses = `${classes} ${italicized ? `${active} border-l-gray-100 hover:border-l-white focus:border-l-white` : `${inactive} border-l-transparent hover:border-l-gray-500 focus:border-l-gray-500`} rounded-r`;

  return (
    <span className='flex'>
      <Toggle.Root 
        className={boldClasses} 
        aria-label="Toggle bold"
        pressed={bolded} 
        onPressedChange={() => setBolded(!bolded)}
      >
        <FontBoldIcon />
      </Toggle.Root>
      <Toggle.Root 
        className={italicClasses} 
        aria-label="Toggle italic" 
        pressed={italicized} 
        onPressedChange={() => setItalicized(!italicized)}
      >
        <FontItalicIcon />
      </Toggle.Root>
    </span>
  )
}
