import Style from './Style';
import StyleGroup from './StyleGroup';

export default function StyleList({ styles, showPicker }) {
  const renderStyles = (styls) => {
    return styls.map(s => {
      if ('group' in s) {
        return (
          <StyleGroup 
            key={s.group} 
            name={s.group}
            icon={s.icon}
            isSubgroup={s.isSubgroup}
          >
            {renderStyles(s.items)}
          </StyleGroup>
        ) 
      } else {
        return (
          <Style 
            key={s.name} 
            name={s.name} 
            color={s.color} 
            setColor={s.setColor} 
            fontable={s.fontable} 
            bolded={s.bolded} 
            italicized={s.italicized}
            showPicker={showPicker}
          />
        )
      }
    })
  }

  return (
    <div className='max-w-[245px] h-screen overflow-y-scroll w-full md:max-h-[calc(100%-112px)] flex flex-col gap-y-12'>
      {renderStyles(styles)}
    </div>
  )
}
