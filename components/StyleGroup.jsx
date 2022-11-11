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
      flex flex-col gap-y-6 border-white/[7%]
      ${isSubgroup ? 'mt-6 pl-6 border-box border-l' : 'md:pl-6 md:border-l'}
    `}>
      {c}
    </section>
  )

  return (
    <div className='oveflow-visible flex flex-col gap-y-6'>
      {isSubgroup ? (
        <div className={`flex flex-col ${open? 'my-2' : 'my-0.5'} transition-all ease-out duration-200`}>
          <button 
            className={`
              ${open ? '-mb-3.5 md:-my-2.5' : 'bg-gray-800/40'} 
              group flex justify-between items-center w-full md:bg-black hover:bg-gray-800 active:bg-gray-800 focus:ring-1 md:focus:bg-gray-800 focus:ring-gray-600 focus:outline-none rounded-full
              p-3 -mx-3 -my-2.5 md:p-2 md:pl-3 md:-ml-3 md:mr-0
            `}
            onClick={() => setOpen(!open)}
          >
            <h3 className='text-xs leading-4 uppercase text-white font-light tracking-widest whitespace-nowrap'>
              {name}
            </h3>
            <div className="flex justify-end items-center gap-x-2.5">
              {open ? null : (
                <div className={`
                  flex transition-all duration-100 
                  ${open ? 'gap-x-[-12px] opacity-0' : 'gap-x-1 opacity-100'}
                `}>
                  {children.map(c => <ColorBadge key={c.props.name} color={c.props.color} preview={true} />)}
                </div>
              )}
              {open ? <ChevronUpIcon className='shrink-0 -mb-px' /> : <ChevronDownIcon className='shrink-0 -mt-px' />}
            </div>
          </button>
          <div>
            {open ? <StyleList>{children}</StyleList> : null}
          </div>
        </div>
      ) : (
        <>
          <div className='absolute md:static -top-6 transform left-1/2 -translate-x-1/2 md:translate-x-0 flex items-center gap-x-[10px] -ml-px'>
            {icon}
            <h3 className='text-sm leading-4 uppercase tracking-widest whitespace-nowrap'>
              {name}
            </h3>
          </div>
          <StyleList>
            {children}
          </StyleList>
        </>
      )}
    </div>
  )
}
