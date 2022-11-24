export default function ColorBadge({ 
  color,
  preview = false, 
  showPicker= null
}) {
  const styles = { backgroundColor: color }
  const classes = 'shrink-0 border border-box rounded-full z-10'

  return (
    preview ? (
      <span 
        style={styles} 
        className={`${classes} border-white/[35%] h-2 w-2 shrink-0`}>
      </span>
    ) : (
      <button
        htmlFor='picker'
        style={styles}
        onClick={showPicker}
        className={`${classes} border-white/[30%] h-5 w-5 hover:border-white focus:border-white hover:scale-[115%] focus:scale-[115%] focus:outline-none cursor-pointer transition ease-in-out duration-100`}
      ></button>
    )
  )
}
