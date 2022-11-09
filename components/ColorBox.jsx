import React, { useState, useRef } from 'react'

export default function ColorBox({ color, setColor }) {
  const picker = useRef(null);

  const handleChange = (e) => {
    let newColor = e.target.value;

    if (newColor.charAt(0) !== '#') {
      newColor = `#${newColor}`.substring(0, 7)
    }

    setColor(newColor);
  }

  const styles = { backgroundColor: color }

  return (
    <div className='-ml-1'>
      <div className='group flex items-center gap-x-1 bg-transparent hover:bg-gray-800 focus:bg-gray-800 focus-within:bg-gray-800 focus-within:ring-1 focus-within:ring-gray-700 rounded-full p-1'>
        <input 
          id='picker'
          ref={picker}
          type='color' 
          value={color} 
          className='peer hidden'
          onChange={e => handleChange(e)}
        />
        <button
          htmlFor='picker'
          style={styles}
          onClick={() => picker.current.showPicker()}
          className={`peer-focus:border-white shrink-0 h-5 w-5 border border-box border-white/[30%] hover:border-white hover:scale-[108%] peer:focus:scale-[108%] peer:focus:border-white/70 rounded-full z-10`}
        ></button>
        <input
          id='hex'
          type='text'
          value={color}
          maxLength='7'
          className='text-sm text-white pl-1 leading-5 bg-inherit rounded-r-full focus:outline-none'
          onChange={e => handleChange(e)}
          onClick={e => e.target.select()}
          onFocus={e => e.target.select()}
        />
      </div>
    </div>
  )
}
