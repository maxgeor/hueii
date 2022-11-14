import ColorField from './ColorField'
import FontFields from './FontFields';
import { ChevronRightIcon } from '@radix-ui/react-icons';

export default function Style({ 
  name,
  color, 
  setColor,
  fontable = false, 
  bolded = true, 
  italicized = false
}) {
  return (
    <div className={`
      -mb-1 overflow-visible flex flex-col relative rounded-lg pt-2 px-4 pb-3
      bg-transparent hover:bg-gray-800 active:bg-gray-800 md:bg-transparent md:hover:bg-transparent md:focus:bg-transparent
    `}>
      <h4 className={`lowercase text-xs tracking-wide text-gray-500 leading-5 font-mono`}>
        {name}
      </h4>
      <div className='flex flex-wrap items-center md:w-full md:justify-between gap-2'>
        <ColorField color={color} setColor={setColor} />
        {fontable ? <FontFields bolded={bolded} italicized={italicized} /> : null}
      </div>
      <ChevronRightIcon className='absolute md:hidden md:hover:block right-3.5 translate top-1/2 -translate-y-1/2' />
    </div>
  )
}
