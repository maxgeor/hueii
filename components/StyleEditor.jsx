'use client'

import React, { useState } from 'react'
import StyleList from './StyleList';
import ColorPicker from './ColorPicker';

export default function StyleEditor({ styles, width }) {
  const [colorListExpanded, setColorListExpanded] = useState(false);
  const [pickingColor, setPickingColor] = useState(false);
  // const [pickingColor, setPickingColor] = useState(false);

  return (
    <section className={`
      overflow-y-scroll shadow-xl md:shadow-none absolute md:static bottom-1.5 z-20  pt-12 px-1 pb-4 md:p-0 md:pt-2.5 bg-black/90 backdrop-blur md:h-auto rounded-xl md:rounded-none border border-white/[15%] md:border-none
      ${colorListExpanded ? 'h-full top-1.5 left-1.5 right-1.5 bottom-1.5' : 'h-[calc(100vh/3)] bottom-1.5 left-1.5 right-1.5'}
      ${width}
    `}>
      <StyleList 
        styles={styles} 
        colorListExpanded={colorListExpanded}
        setColorListExpanded={setColorListExpanded}
      />
      {/* <ColorPicker /> */}
    </section>
  )
}
