import React, { useState, useRef } from 'react'

export default function ColorBox({ color: currentColor }) {
  const picker = useRef(null);
  const [color, setColor] = useState(currentColor);

  const handleChange = (e) => {
    let newColor = e.target.value;

    if (newColor.charAt(0) !== '#') {
      newColor = `#${newColor}`.substring(0, 7)
    }

    setColor(newColor);
    // setStyle(newColor);
  }

  const styles = { backgroundColor: color }

  // props
    // style (the part of the code this ColorBox changes)
    // setStyle
      // We need to have one file with all the state for each style
    // hex
  return (
    <div className='-ml-1'>
      <div 
        className='group flex items-center gap-x-1 bg-black hover:bg-gray-900 focus:bg-gray-900 focus-within:bg-gray-900 focus-within:ring-1 focus-within:ring-gray-700 rounded-full p-1'
      >
        <button
          htmlFor='picker'
          style={styles}
          onClick={() => picker.current.showPicker()}
          className={`
            peer-focus:border-white shrink-0 h-5 w-5 border border-box border-white/20 hover:border-white/70 peer:focused:border-white/70 rounded-full z-10
          `}
        ></button>
        <input 
          id='picker'
          ref={picker}
          type='color' 
          value={color} 
          className='hidden'
          onChange={e => handleChange(e)}
        />
        <input
          id='hex'
          type='text'
          value={color}
          maxLength='7'
          className='text-sm text-white/82 pl-1 leading-5 bg-inherit rounded-r-full focus:outline-none'
          onChange={e => handleChange(e)}
          onClick={e => e.target.select()}
          onFocus={e => e.target.select()}
        />
      </div>
    </div>
  )
}
