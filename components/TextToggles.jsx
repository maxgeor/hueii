'use client'

import React, { useState } from 'react'
import * as Toggle from '@radix-ui/react-toggle';

export default function TextToggles({ bolded: isBolded, italicized: isItalicized }) {
  const [bolded, setBolded] = useState(isBolded);
  const [italicized, setItalicized] = useState(isItalicized);
  
  return (
    <>
      <Toggle.Root 
        pressed={bolded} 
        onPressedChange={() => setBolded(!bolded)} 
      />
      <Toggle.Root 
        pressed={italicized} 
        onPressedChange={() => setItalicized(!italicized)} 
      />
    </>
  )
}
