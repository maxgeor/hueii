'use client'

import { useState } from "react"
import ColorBadge from "./ColorBadge";
import { ChevronUpIcon, ChevronDownIcon } from "@radix-ui/react-icons";

export default function StyleGroup({
  name,
  icon = null,
  isSubgroup = false,
  children 
}) {
  const [open, setOpen] = useState(false);

  const Styles = ({ children: c }) => (
    <section className={`
      flex flex-col border-gray-800
      ${isSubgroup ? 'pl-2 ml-4 border-box border-l' : 'pl-2 ml-px border-l'}
    `}>
      {c}
    </section>
  )

  return (
    <div className='oveflow-visible flex flex-col'>
      {isSubgroup ? (
        <div className={`
          flex flex-col transition-all ease-out duration-500
          ${open? 'my-2' : null}
        `}>
          <button 
            className={`
              group flex justify-between items-center w-full rounded-full transition ease-in-out duration-100
              text-white hover:text-white focus:text-white md:bg-black hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-700 border border-transparent focus:border-gray-600 h-10 border-box focus:outline-none
              px-4 -ml-px my-1 md:my-0
            `}
            onClick={() => setOpen(!open)}
          >
            <h3 className='text-sm md:text-xs leading-6 uppercase font-light tracking-widest whitespace-nowrap'>
              {name}
            </h3>
            <div className="flex justify-end items-center gap-x-1.5 -mr-[5px]">
              {open ? null : (
                <div className={`
                  flex gap-x-[5px] transition-all 
                `}>
                  {children.map(c => <ColorBadge key={c.props.name} color={c.props.color} preview={true} />)}
                </div>
              )}
              <ChevronDownIcon className={`${open ? '-rotate-180 translate-y-px' : 'rotate-0'} transform shrink-0 -mt-px transition ease-out duration-500`} />
            </div>
          </button>
          {open ? <Styles>{children}</Styles> : null}
        </div>
      ) : (
        <>
        <div className='flex items-center gap-x-[10px] -ml-px'>
          {icon}
          <h3 className='text-base md:text-sm text-white leading-4 uppercase tracking-widest whitespace-nowrap ml-px'>
            {name}
          </h3>
        </div>
        <div className='mt-5 md:mt-4'>
          <Styles>{children}</Styles>
        </div>
        </>
      )}
    </div>
  )
}
