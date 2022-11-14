'use client'

import ColorBadge from './ColorBadge'
import { useState, useRef } from 'react'
import { SketchPicker } from 'react-color';

export default function ColorField({ color: currentColor, setColor }) {
  const picker = useRef(null);
  const [isPicking, setIsPicking] = useState(false)
  const [pickedColor, setPickedColor] = useState(currentColor)

  const handleChangeComplete = (color) => {
    // let newColor = e.target.value;

    // if (newColor.charAt(0) !== '#') {
    //   newColor = `#${newColor}`.substring(0, 7);
    // }
    // setColor(newColor);
    setColor(color.hex);
  }

  const handlePickerClick = () => {
    setIsPicking(!isPicking)
  }

  return (
    <div className='-ml-1'>
      <div className='group flex items-center gap-x-1 w-fit text-white focus-within:text-white bg-transparent hover:bg-gray-700 focus-within:bg-gray-700 focus-within:ring-1 focus-within:ring-gray-600 rounded-full px-1 transition duration-75 cursor-text'>
        <div className='flex items-center h-7'>
          <ColorBadge 
            color={pickedColor} 
            pickerRef={picker}
            handlePickerClick={handlePickerClick}
            // handleChange={handleChange}
          />
        </div>
        <div className='flex items-center text-sm leading-7 text-gray-100  w-24 pl-0.5 '>
          <p className='font-light'>#</p>
          <label 
            htmlFor='hex'
            className='tracking-widish bg-inherit rounded-r-full peer:focus:outline-none'
            onPaste={e => handleChange(e)}
            onChange={e => handleChange(e)}
            onClick={e => e.target.select()}
            onSelect={e => e.target.select()}
          >
            <p>{currentColor.replace('#', '').toUpperCase()}</p>
          </label>
          <input id='hex' type='text' className='hidden peer'/>
        </div>
      </div>
      {isPicking && (
        <SketchPicker
          color={currentColor}
          onChange={handleChangeComplete}
          // onChangeComplete={handleChangeComplete}
        />
      )}
    </div>
  )
}
