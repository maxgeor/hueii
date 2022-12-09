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
    <div className='relative h-screen overflow-y-scroll w-full flex flex-col md:max-h-[calc(100%-71px)]'>
      <div className="flex flex-col gap-12 md:max-w-[238px]">
        {renderStyles(styles)}
      </div>
      <div className='sticky bottom-0 w-full p-12 bg-gradient-to-t from-black via-black/99 to-transparent z-10'></div>
    </div>
  )
}
