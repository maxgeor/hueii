import ColorField from './ColorField'
import FontFields from './FontFields';

export default function Style({ 
  name,
  color, 
  setColor,
  showPicker,
  fontable = false, 
  bolded = true, 
  italicized = false
}) {
  return (
    <div className={`-mb-1 flex flex-col pt-2 px-4 pb-3`}>
      <h4 className={`titlecase tracking-wideish text-gray-500 leading-5 font-mono text-[13px] md:text-[11px]`}>
        {name}
      </h4>
      <div className='flex flex-wrap items-center md:w-full md:justify-between gap-2'>
        <ColorField color={color} setColor={setColor} showPicker={showPicker} />
        {fontable ? <FontFields bolded={bolded} italicized={italicized} /> : null}
      </div>
    </div>
  )
}
