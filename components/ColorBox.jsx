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
      <input 
        ref={picker}
        type='color' 
        value={color} 
        className='hidden'
        onChange={e => handleChange(e)}
      />
      <div 
        className='group flex items-center gap-x-1 bg-black hover:ring-1 hover:ring-gray-800 focus-within:ring-1 focus-within:ring-blue-500 rounded-full p-1'
      >
        <button 
          style={styles}
          onClick={() => picker.current.showPicker()}
          className={`
            h-6 w-6 border border-box border-white/20 rounded-full z-10
          `}
        ></button>
        <input
          id='hex'
          type='text'
          value={color}
          maxLength='7'
          className='text-sm text-trueGray-300 p-1 leading-4 bg-black rounded-r-full focus:outline-none'
          onChange={e => handleChange(e)}
          onClick={e => e.target.select()}
          onFocus={e => e.target.select()}
        />
      </div>
    </div>
  )
}
