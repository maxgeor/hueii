'use client'

import Style from './Style';
import StyleGroup from './StyleGroup';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { GroupIcon, CodeIcon } from '@radix-ui/react-icons';

export default function StyleList() {
  const { theme } = useContext(ThemeContext);

  const styles = [
    { group: 'General', icon: <GroupIcon className='shrink-0'/>, isSubgroup: false, items: [
      { group: 'Highlights', isSubgroup: true, items: [
        { name: 'selection', title: 'Selection', color: theme.selection },
        { name: 'selectionMatch', title: 'Selection Match', color: theme.selectionMatch },
        { name: 'lineHighlight', title: 'Line Highlight', color: theme.lineHighlight },
      ] },
      { name: 'text', title: 'Text', color: theme.text },
      { name: 'background', title: 'Background', color: theme.background },
    ] },
    { group: 'Code', icon: <CodeIcon className='shrink-0'/>, isSubgroup: false, items: [
      { group: 'Data Types', icon: null, isSubgroup: true, items: [
        { name: 'string', title: 'String', color: theme.string },
        { name: 'number', title: 'Number', color: theme.number },
        { name: 'bool', title: 'Boolean', color: theme.bool },
        { name: 'nullish', title: 'Null', color: theme.nullish },
      ] },
      { group: 'Names', icon: null, isSubgroup: true, items: [
        { name: 'className', title: 'Class Name', color: theme.className },
        { name: 'typeName', title: 'Type Name', color: theme.typeName },
        { name: 'tagName', title: 'Tag Name', color: theme.tagName },
        { name: 'attributeName', title: 'Attribute Name', color: theme.attributeName }
      ] },
      { name: 'keyword', title: 'Keyword', color: theme.keyword },
      { name: 'variableName', title: 'Variables', color: theme.variableName },
      { name: 'operator', title: 'Operator', color: theme.operator },
      { name: 'comment', title: 'Comment', color: theme.comment },
      { group: '•••', icon: null, isSubgroup: true, items: [
        { name: 'angleBracket', title: 'Angle Bracket', color: theme.angleBracket },
        { name: 'definition', title: 'Definition', color: theme.definition },
      ]},
    ]},
  ];

  const renderStyles = (ss) => {
    return ss.map(s => {
      if ('group' in s) {
        return (
          <StyleGroup key={s.group} name={s.group} icon={s.icon} isSubgroup={s.isSubgroup}>
            {renderStyles(s.items)}
          </StyleGroup>
        ) 
      } else {
        return (
          <Style key={s.name} name={s.name} title={s.title} color={s.color} />
        )
      }
    })
  }

  return (
    <section className='md:w-1/3 bg-black/90 backdrop-blur flex shadow-xl md:shadow-none absolute md:static top-1.5 bottom-1.5 left-1.5 right-1.5 z-20 pt-8 px-6 md:p-0 md:mt-1 md:h-auto rounded-xl md:rounded-none border border-white/[15%] md:border-none'>
      <div className='relative h-screen overflow-y-scroll w-full flex flex-col md:max-h-[calc(100%-71px)]'>
        <div className="flex flex-col gap-y-12 md:max-w-[238px]">
          {renderStyles(styles)}
        </div>
        <div className='sticky bottom-0 w-full p-12 bg-gradient-to-t from-black via-black/99 to-transparent z-10'></div>
      </div>
    </section>
  )
}
