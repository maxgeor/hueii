'use client'
import React, { useState } from 'react'
import Style from './Style';
import StyleGroup from './StyleGroup';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { EnterFullScreenIcon, ExitFullScreenIcon, ArrowLeftIcon } from '@radix-ui/react-icons'

export default function StyleList({ styles, colorListExpanded, setColorListExpanded }) {
  const [groups, setGroups] = useState([]);

  function renderStyles(styles) {
    return styles.map(s => {
      if ('group' in s) {
        // if (!s.isSubgroup) {
        //   setGroups([...groups, s.name])
        // }
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
          />
        )
      }
    })
  }

  const StyleListButton = ({ position, handleClick, children }) => {
    return(
      <button 
        className={`${position} hidden absolute w-fit p-2 rounded-full bg-gray-750 hover:bg-gray-600 active:bg-gray-600 text-white`}
        onClick={handleClick}
      >
        {children}
      </button>
    )
  }

  return (
    <div className='relative flex flex-col gap-y-14'>
      {/* <div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger />

          <DropdownMenu.Portal>
            <DropdownMenu.Content>

              <DropdownMenu.RadioGroup>
                <DropdownMenu.RadioItem>
                  <DropdownMenu.ItemIndicator />
                </DropdownMenu.RadioItem>
              </DropdownMenu.RadioGroup>

            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        <StyleListButton 
          position={'-top-8 right-1.5'}
          handleClick={() => setColorListExpanded(!colorListExpanded)}
        >
          {colorListExpanded ? <ExitFullScreenIcon /> : <EnterFullScreenIcon />}
        </StyleListButton>
      </div> */}
      {renderStyles(styles)}
    </div>
  )
}
