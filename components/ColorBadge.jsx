export default function ColorBadge({ 
  color,
  pickerRef= null,
  showPicker = null,
  handleChange = null,
  preview = false 
}) {
  const styles = { backgroundColor: color }
  const classes = 'shrink-0 border border-box border-white/[30%] rounded-full z-10'

  return (
    preview ? (
      <div className='shrink-0'>
        <div style={styles} className={`${classes} h-3 w-3 shrink-0`}></div>
      </div>
    ) : (
      <>
        <input 
          id='picker'
          ref={pickerRef}
          type='color' 
          value={color} 
          className='peer hidden'
          onInput={e => handleChange(e)}
          onChange={e => handleChange(e)}
        />
        <button
          htmlFor='picker'
          style={styles}
          onClick={showPicker}
          className={`${classes} h-6 w-6 hover:border-white focus:border-white hover:scale-[108%] focus:scale-[108%] focus:outline-none cursor-pointer`}
        ></button>
      </>
    )
  )
}
