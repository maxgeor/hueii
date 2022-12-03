import { useState } from 'react'
import ColorBadge from './ColorBadge'

export default function ColorField({ color, setColor, showPicker }) {
  const [currentColor, setCurrentColor] = useState(color)
  return (
    <div className='-ml-1'>
      <div className='group flex items-center gap-x-1 w-fit text-white focus-within:text-white bg-transparent hover:bg-gray-700 focus-within:bg-gray-700 focus-within:ring-1 focus-within:ring-gray-600 rounded-full px-1 transition ease-in-out duration-100 cursor-text'>
        <div className='flex items-center h-7'>
          <ColorBadge 
            color={currentColor} 
            showPicker={() => showPicker(color, () => setColor)}
          />
        </div>
        {/* <div className='flex items-center  text-base md:text-sm leading-7 text-gray-100  w-24 pl-0.5 '> */}
        {/* </div> */}
        <input 
          id='hex'
          type='text'
          value={color.toUpperCase()} 
          onPaste={e => setColor(e.target.value)}
          onChange={e => setColor(e.target.value)}
          onSelect={e => e.target.select()}
          className='text-gray-100 pl-0.5 text-base md:text-sm leading-7 tracking-wideish bg-inherit rounded-r-full focus:outline-none'
        />
      </div>
    </div>
  )
}
