'use client'

import ColorBox from './ColorBox'
import TextToggles from './TextToggles';

export default function StyleBox({ 
  name,
  color, 
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
        <ColorBox color={color} />
        {fontable ? <TextToggles bolded={bolded} italicized={italicized} /> : null}
      </div>
    </div>
  )
}
