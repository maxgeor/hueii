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

  const StyleList = ({ children: c }) => (
    <section className={`
      flex flex-col border-gray-800
      ${isSubgroup ? 'pl-2 ml-4 border-box border-l' : 'md:pl-2 ml-px md:border-l'}
    `}>
      {c}
    </section>
  )

  return (
    <div className='oveflow-visible flex flex-col'>
      {isSubgroup ? (
        <div className={`
          flex flex-col transition-all ease-out duration-300
          ${open? 'my-2' : null}
        `}>
          <button 
            className={`
              group flex justify-between items-center w-full rounded-full transition ease-in-out duration-75
              text-white hover:text-white focus:text-white md:bg-black hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-700 border border-transparent focus:border-gray-600 h-10 border-box focus:outline-none 
              py-2.5 px-4 -ml-px
            `}
            onClick={() => setOpen(!open)}
          >
            <h3 className='text-xs leading-6 uppercase font-light tracking-widest whitespace-nowrap'>
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
              <ChevronDownIcon className={`${open ? '-rotate-180 translate-y-px' : 'rotate-0'} transform shrink-0 -mt-px transition ease-out duration-300`} />
            </div>
          </button>
          {open ? <StyleList>{children}</StyleList> : null}
        </div>
      ) : (
        <>
          <div className='absolute md:static -top-8 transform left-1/2 -translate-x-1/2 md:translate-x-0 flex items-center gap-x-[10px] -ml-px'>
            {icon}
            <h3 className='text-[14px] text-white leading-4 uppercase tracking-widest whitespace-nowrap ml-px'>
              {name}
            </h3>
          </div>
          <div className='mt-4'>
            <StyleList>{children}</StyleList>
          </div>
        </>
      )}
    </div>
  )
}
