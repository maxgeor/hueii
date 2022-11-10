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
      flex flex-col gap-y-5 border-box border-white/[8%]
      ${isSubgroup ? 'mt-5 pl-6 border-box border-l ' : 'md:pl-6  md:border-l'}
    `}>
      {c}
    </section>
  )

  return (
    <div className={`flex flex-col ${isSubgroup ? 'py-3 last:pb-0' : 'gap-y-5'}`}>
      {isSubgroup ? (
        <>
          <button 
            className='group flex items-center pl-4 p-2 hover:bg-gray-800 rounded-full -mt-2 -ml-4 -mb-2'
            onClick={() => setOpen(!open)}
          >
            <span className="-ml-[7px]">
              {open ? <ChevronUpIcon className='shrink-0' /> : <ChevronDownIcon className='shrink-0' />}
            </span>
            <div className="flex items-center gap-x-3 w-full pl-2.5 h-3">
              <h3 className='text-xs uppercase text-white tracking-widest whitespace-nowrap'>
                {name}
              </h3>
              {open ? null : (
                <div className='flex gap-x-1'>
                  {console.log(children)}
                  {children.slice(0, 3).map(c => <ColorBadge key={c.props.name} color={c.props.color} preview={true} />)}
                </div>
              )}
            </div>
          </button>
          {open ? <StyleList>{children}</StyleList> : null}
        </>
      ) : (
        <>
          <div className='flex items-center gap-x-[11px] -ml-px'>
            {icon}
            <h3 className='text-sm uppercase tracking-widest whitespace-nowrap'>
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
