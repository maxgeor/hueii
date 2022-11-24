'use client'

import Style from './Style';
import StyleGroup from './StyleGroup';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { EnterFullScreenIcon, ExitFullScreenIcon, ArrowLeftIcon } from '@radix-ui/react-icons'

export default function StyleEditor({ styles, showPicker, colorListExpanded = false, setColorListExpanded = null }) {

  function renderStyles(styles) {
    return styles.map(s => {
      if ('group' in s) {
        return (
          <StyleGroup 
            key={s.group} 
            name={s.group}
            icon={s.icon}
            isSubgroup={s.isSubgroup}
          >
            {renderStyles(s.items)}
          </StyleGroup>
        ) 
      } else {
        return (
          <Style 
            key={s.name} 
            name={s.name} 
            color={s.color} 
            setColor={s.setColor} 
            fontable={s.fontable} 
            bolded={s.bolded} 
            italicized={s.italicized}
            showPicker={showPicker}
          />
        )
      }
    })
  }

  const StyleListButton = ({ position, handleClick, children }) => {
    return(
      <button 
        className={`${position} hidden absolute w-fit p-2 rounded-full bg-gray-700 hover:bg-gray-600 active:bg-gray-600 text-white`}
        onClick={handleClick}
      >
        {children}
      </button>
    )
  }

  return (
    <div className='md:max-h-[calc(100%-112px)] relative flex flex-col gap-y-12'>
      {renderStyles(styles)}
    </div>
  )
}
