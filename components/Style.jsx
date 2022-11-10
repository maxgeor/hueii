'use client'

import ColorField from './ColorField'
import TextToggles from './TextToggles';

export default function Style({ 
  name,
  color, 
  setColor,
  fontable = false, 
  bolded = false, 
  italicized = false 
}) {
  return (
    <div className='flex flex-col'>
      <h4 className='text-xs tracking-wider text-gray-500 leading-5 font-mono'>
        {name}
      </h4>
      <div className='flex justify-between gap-x-2'>
        <ColorField color={color} setColor={setColor} />
        {fontable ? 
          <TextToggles bolded={bolded} italicized={italicized} /> 
        : null}
      </div>
    </div>
  )
}
