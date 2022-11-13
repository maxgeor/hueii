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
      overflow-visible flex flex-col relative rounded-lg pt-2 px-4 pb-3
      bg-transparent hover:bg-gray-750 active:bg-gray-750 md:bg-transparent md:hover:bg-transparent md:focus:bg-transparent
    `}>
      <h4 className={`text-xs tracking-wide text-gray-500 leading-5 font-mono`}>
        {name}
      </h4>
      <div className='flex flex-wrap items-center w-fit md:w-full md:justify-between gap-2'>
        <ColorField color={color} setColor={setColor} />
        {fontable ? 
          <span className='mt-1'>
            <FontFields bolded={bolded} italicized={italicized} /> 
          </span>
        : null}
      </div>
      <ChevronRightIcon className='absolute md:hidden md:hover:block right-3.5 translate top-1/2 -translate-y-1/2' />
    </div>
  )
}
