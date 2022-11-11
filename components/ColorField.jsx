import { useRef } from 'react'
import ColorBadge from './ColorBadge'

export default function ColorField({ color, setColor }) {
  const picker = useRef(null);

  const showPicker = () => picker.current.showPicker();

  const handleChange = (e) => {
    let newColor = e.target.value;

    if (newColor.charAt(0) !== '#') {
      newColor = `#${newColor}`.substring(0, 7);
    }
    setColor(newColor);
    showPicker();
  }

  return (
    <div className='-ml-2 -mb-2'>
      <div className='group flex items-center gap-x-1 p-2 w-min bg-transparent hover:bg-gray-800 focus:bg-gray-800 focus-within:bg-gray-800 focus-within:ring-2 focus-within:ring-gray-500 rounded-full '>
        <ColorBadge 
          color={color} 
          pickerRef={picker}
          showPicker={showPicker} 
          handleChange={handleChange}
        />
        <input
          id='hex'
          type='text'
          value={color.toUpperCase()}
          className='w-fit text-md text-gray-100 pl-1 leading-5 bg-inherit rounded-r-full focus:outline-none'
          onPaste={e => handleChange(e)}
          onChange={e => handleChange(e)}
          onClick={e => e.target.select()}
          onFocus={e => e.target.select()}
        />
      </div>
    </div>
  )
}
