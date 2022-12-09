import { CustomPicker } from 'react-color';
import { EditableInput, Hue, Saturation, Alpha } from 'react-color/lib/components/common';

function ColorPicker({ color, handleChange }) {
  const inputStyles = {
    input: {
      border: 'none',
    },
    label: {
      fontSize: '12px',
      color: '#999',
    },
  };

  function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  function hexToHsl(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      var r = parseInt(result[1], 16);
      var g = parseInt(result[2], 16);
      var b = parseInt(result[3], 16);
      r /= 255, g /= 255, b /= 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;
      if(max == min){
        h = s = 0; // achromatic
      }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }
    var HSL = new Object();
    HSL['h']=h;
    HSL['s']=s;
    HSL['l']=l;
    return HSL;
  }

  const Pointer = () => {
    return (
      <div className='absolute w-4 h-4 rounded-full bg-white border-2 border-gray-400 shadow-sm' />
    )
  }

  return (
    <div className='hidden'>
      <EditableInput
        style={ inputStyles }
        label="hex"
        value={ color }
        onChange={ handleChange } />
      <Hue
        hex={ color }
        rgb= { hexToRgb(color) }
        hsl= { hexToHsl(color) }
        pointer={ Pointer }
        onChange={ handleChange }
        direction={ 'horizontal' || 'vertical' } />
    </div>
  )
}

export default CustomPicker(ColorPicker)
