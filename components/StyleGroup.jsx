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
      flex flex-col space-y-6 border-box border-white/[13%]
      ${isSubgroup ? 'mt-5 pl-6 border-box border-l-2' : 'md:pl-6 md:border-l-2'}
    `}>
      {c}
    </section>
  )

  return (
    <div className={`flex flex-col space-y-6`}>
      {isSubgroup ? (
        <div className='flex flex-col my-0.5'>
          <button 
            className='group overflow-visible flex justify-between items-center p-2 pl-3 hover:bg-gray-800 focus:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:outline-none rounded-full -mt-2 -ml-3 -mb-2'
            onClick={() => setOpen(!open)}
          >
            <div className="flex items-center gap-x-2.5 w-full">
              <h3 className='text-xs leading-4 uppercase text-white font-light tracking-widest whitespace-nowrap'>
                {name}
              </h3>
              {open ? null : (
                <div className='flex gap-x-1'>
                  {children.map(c => <ColorBadge key={c.props.name} color={c.props.color} preview={true} />)}
                </div>
              )}
            </div>
            {open ? <ChevronUpIcon className='shrink-0 -mb-px' /> : <ChevronDownIcon className='shrink-0 -mt-px' />}
          </button>
          <div>
            {open ? <StyleList>{children}</StyleList> : null}
          </div>
        </div>
      ) : (
        <>
          <div className='flex items-center gap-x-[10px] -ml-px'>
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
