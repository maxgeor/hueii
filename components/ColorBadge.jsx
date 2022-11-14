export default function ColorBadge({ 
  color,
  pickerRef= null,
  handleChange = null,
  handlePickerClick = null,
  preview = false 
}) {
  const styles = { backgroundColor: color }
  const classes = 'shrink-0 border border-box border-white/[30%] rounded-full z-10'

  return (
    preview ? (
      <span style={styles} className={`${classes} h-[10px] w-[10px] shrink-0`}></span>
    ) : (
      <button
        htmlFor='picker'
        style={styles}
        onClick={handlePickerClick}
        className={`${classes} h-5 w-5 hover:border-white focus:border-white hover:scale-[115%] focus:scale-[115%] focus:outline-none cursor-pointer transition duration-75`}
      ></button>
    )
  )
}
