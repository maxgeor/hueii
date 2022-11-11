import ColorField from './ColorField'
import FontFields from './FontFields';
import { ChevronRightIcon } from '@radix-ui/react-icons';

export default function Style({ 
  name,
  color, 
  setColor,
  fontable = false, 
  bolded = false, 
  italicized = false,
  first
}) {
  return (
    <div className='overflow-visible flex flex-col relative bg-gray-800/40 hover:bg-gray-800 active:bg-gray-800 md:bg-transparent md:hover:bg-transparent rounded-lg pb-3 pt-2 px-3 -mx-3 md:p-0 md:-mr-0 -my-2 first:mt-0 last:mb-0 md:m-0'>
      <h4 className={`${first ? 'md:-mt-1 ' : null} text-xs tracking-wide text-gray-500 leading-5 font-mono`}>
        {name}
      </h4>
      <div className='flex flex-wrap items-center w-fit md:justify-between gap-2'>
        <ColorField color={color} setColor={setColor} />
        {fontable ? 
          <span className='mt-1'>
            <FontFields bolded={bolded} italicized={italicized} /> 
          </span>
        : null}
      </div>
      <ChevronRightIcon className='absolute md:hidden right-3 translate top-1/2 -translate-y-1/2' />
    </div>
  )
}
