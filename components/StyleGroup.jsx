export default function StyleGroup({
  name,
  icon = null,
  isSubgroup = false,
  children 
}) {
  const StyleList = ({ children: c }) => (
    <section className={`
      pl-5 border-l border-white/10 flex flex-col gap-y-4
      ${isSubgroup ? 'pt-4' : null}
    `}>
      {c}
    </section>
  )

  return (
    <div className={`
      flex flex-col
      ${isSubgroup ? 'py-3' : 'gap-y-4'}  
    `}>
      {isSubgroup ? (
        <>
          <div className='flex items-center pl-2.5 border-l border-white/85 h-3'>
            <h3 className='text-xs uppercase text-white tracking-widest font-medium'>
              {name}
            </h3>
          </div>
          <StyleList>
            {children}
          </StyleList>
        </>
      ) : (
        <>
          <div className='flex items-center gap-x-2 -ml-0.5'>
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
