'use client'

import ColorField from './ColorField'
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import * as Tooltip from '@radix-ui/react-tooltip';

export default function Style({ 
  name,
  color, 
  setColor,
  showPicker
}) {
  return (
    <div className={`relative -mb-1 flex flex-col items-start gap-y-1 md:gap-0 pt-3 md:pt-2 px-4 pb-4 md:pb-3`}>
      <Tooltip.Provider delayDuration={400} skipDelayDuration={500}>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <h4 className={`cursor-help titlecase tracking-wideish text-gray-500 leading-5 font-mono text-[13px] md:text-[11px]`}>
              {name}
            </h4>
          </Tooltip.Trigger>
          <Tooltip.Content>
            <div className="absolute left-0 bottom-6 tracking-wideish text-gray-500 font-mono text-[11px] py-3 px-4 border border-gray-800 bg-black shadow-xl rounded-lg w-36 text-center">
              var if function
            </div>
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
      <ColorField color={color} setColor={setColor} showPicker={showPicker} />
    </div>
  )
}
