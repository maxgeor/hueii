'use client'

import { EnterFullScreenIcon, ExitFullScreenIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import StyleGroup from './StyleGroup';
import Style from './Style';

export default function StyleEditor({ styles, width }) {
  const [colorEditorExpanded, setColorEditorExpanded] = useState(false);

  function renderStyles(styles) {
    return styles.map((style, index) => {
      if ('group' in style) {
        return (
          <StyleGroup 
            key={style.group} 
            name={style.group}
            icon={style.icon}
            isSubgroup={style.isSubgroup}
            first={index === 0}
          >
            {renderStyles(style.items)}
          </StyleGroup>
        ) 
      } else {
        return (
          <Style 
            key={style.name} 
            name={style.name} 
            color={style.color} 
            setColor={style.setColor} 
            fontable={style.fontable} 
            bolded={style.bolded} 
            italicized={style.italicized} 
            first={index === 0}
          />
        )
      }
    })
  }

  return (
    <section className={`
      overflow-y-scroll shadow-xl md:shadow-none absolute md:static bottom-1.5 z-20  pt-12 px-6 pb-4 md:p-0 md:pt-2.5 bg-black/90 backdrop-blur md:h-auto rounded-xl md:rounded-none border border-white/[15%] md:border-none
      ${colorEditorExpanded ? 'h-full top-1.5 left-1.5 right-1.5 bottom-1.5' : 'h-[calc(100vh/3)] bottom-1.5 left-1.5 right-1.5'}
      ${width}
    `}>
      <div className='relative flex flex-col gap-y-12'>
        {renderStyles(styles)}
        <button 
          className='md:hidden absolute -top-8 -right-2 p-2 rounded-full bg-gray-850 hover:bg-gray-700 text-white'
          onClick={() => setColorEditorExpanded(!colorEditorExpanded)}
        >
          {colorEditorExpanded ? <ExitFullScreenIcon /> : <EnterFullScreenIcon />}
        </button>
      </div>
    </section>
  )
}
