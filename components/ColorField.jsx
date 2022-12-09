'use client';

import { useState } from 'react'
import ColorBadge from './ColorBadge'
import ColorPicker from './ColorPicker'
// import ColorPicker from './components/ColorPicker';

export default function ColorField({ color: colorProp, setColor: setColorProp, showPicker }) {
  const [color, setColor] = useState(colorProp)
  const [picking, setPicking] = useState(false)

  return (
    <div className='-ml-1 w-fit'>
      <div className='group flex items-center gap-x-1.5 md:gap-x-1 w-fit text-white focus-within:text-white bg-transparent hover:bg-gray-700 focus-within:bg-gray-700 focus-within:ring-1 focus-within:ring-gray-600 rounded-full px-1 transition ease-in-out duration-100 cursor-text'>
        <div className='flex items-center h-7'>
          <ColorBadge 
            color={color} 
            showPicker={() => showPicker(color, () => setColor)}
          />
        </div>
        <input 
          id='hex'
          type='text'
          value={color.toUpperCase()} 
          onPaste={e => setColorProp(e.target.value)}
          onChange={e => setColorProp(e.target.value)}
          onSelect={e => e.target.select()}
          className='text-gray-200  group-hover:text-white pl-0.5 w-fit text-base md:text-sm leading-8 md:leading-7 tracking-wideish bg-inherit rounded-r-full focus:outline-none'
        />
      </div>
      <ColorPicker color={color}  />
    </div>
  )
}
