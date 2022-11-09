export default function StyleGroup({
  name,
  icon = null,
  isSubgroup = false,
  children 
}) {
  const StyleList = ({ children: c }) => (
    <section className={`
      pl-6 border-box border-l border-white/10 flex flex-col gap-y-5
      ${isSubgroup ? 'pt-5' : null}
    `}>
      {c}
    </section>
  )

  return (
    <div className={`
      flex flex-col
      ${isSubgroup ? 'py-3 last:pb-0' : 'gap-y-5'}  
    `}>
      {isSubgroup ? (
        <>
          <div className='flex items-center pl-3 border-box border-l border-white/85 h-3'>
            <h3 className='text-xs uppercase text-white tracking-widest'>
              {name}
            </h3>
          </div>
          <StyleList>
            {children}
          </StyleList>
        </>
      ) : (
        <>
          <div className='flex items-center gap-x-[11px] -ml-px'>
            {icon}
            <h3 className='text-sm uppercase tracking-widest'>
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
