import React from 'react'

export default function StyleEditorButton({ position, handleClick, children }) {
  return (
    <button 
      className={`${position} absolute w-fit p-2 rounded-full bg-gray-700 hover:bg-gray-600 active:bg-gray-600 text-white`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
