'use client'

import ColorBadge from './ColorBadge'
import { useState, useRef } from 'react'
import { SketchPicker } from 'react-color';

export default function ColorField({ color: currentColor, setColor }) {
  const hex = useRef(null);
  const picker = useRef(null);
  const [isPicking, setIsPicking] = useState(false)

  const handleChangeComplete = (color) => {
    // let newColor = e.target.value;

    // if (newColor.charAt(0) !== '#') {
    //   newColor = `#${newColor}`.substring(0, 7);
    // }
    // setColor(newColor);
    setColor(color.hex);
  }

  return (
    <div className='-ml-1 -mb-1'>
      <div className='group flex items-center gap-x-1 w-fit text-gray-100 hover:text-white focus-within:text-white bg-transparent hover:bg-gray-750 focus-within:bg-gray-750 focus-within:ring-1 focus-within:ring-gray-600 rounded-full px-1 transition duration-75 cursor-text'>
        <div className='py-1 h-8'>
          <ColorBadge 
            color={currentColor} 
            pickerRef={picker}
            showPicker={() => setIsPicking(true)}
            hidePicker={() => setIsPicking(false)}
            // handleChange={handleChange}
          />
        </div>
        <div className='flex items-center w-24 pl-1 py-1 -my-1' onClick={() => hex.current.focus()}>
          <input
            id='hex'
            ref={hex}
            type='text'
            value={currentColor.toUpperCase()}
            className='truncate text-sm leading-5 bg-inherit rounded-r-full focus:outline-none'
            onPaste={e => handleChange(e)}
            onChange={e => handleChange(e)}
            onClick={e => e.target.select()}
            onFocus={e => e.target.select()}
          />
        </div>
      </div>
      <SketchPicker
        color={currentColor}
        // onChange={e => handleChangeComplete(e.hex)}
        onChangeComplete={handleChangeComplete}
      />
    </div>
  )
}
