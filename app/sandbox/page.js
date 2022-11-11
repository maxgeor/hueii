'use client';

import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useState } from 'react'
import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';
import { GroupIcon, CodeIcon, EnterFullScreenIcon, ExitFullScreenIcon } from '@radix-ui/react-icons'
import StyleGroup from '../../components/StyleGroup';
import Style from '../../components/Style';

export default function SandboxPage() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);

  const extensions = [javascript({ jsx: true })];

  const [colorEditorExpanded, setcolorEditorExpanded] = useState(false);

  const white = '#C7C7FF'
  const black = '#25253C'
  const gray = '#B0B0CF'
  const purple = '#817BD5';
  const green = '#63BB96';
  const blue = '#3FA7DE';
  const red = '#D4629A';
  const yellow = '#C6B062';
  const teal = '#72BABB';

  const [lightOrDark, setLightOrDark]           = useState('dark');
  const [background, setBackground]             = useState(black);
  const [foreground, setForeground]             = useState(gray);
  const [caret, setCaret]                       = useState('#fff');
  const [selection, setSelection]               = useState('#343450');
  const [selectionMatch, setSelectionMatch]     = useState('#28283e');
  const [lineHighlight, setLineHighlight]       = useState('#8a91991a');
  const [gutterBackground, setGutterBackground] = useState(black);
  const [gutterForeground, setGutterForeground] = useState('#464658');
  const [comment, setComment]                   = useState('#45455f');
  const [variableName, setVariableName]         = useState(teal);
  const [string, setString]                     = useState(green);
  const [number, setNumber]                     = useState('#D4629A');
  const [bool, setBool]                         = useState('#D4629A');
  const [nully, setNully]                       = useState('#D4629A');
  const [keyword, setKeyword]                   = useState('#817ccd');
  const [operator, setOperator]                 = useState(gray);
  const [className, setClassName]               = useState('#5c6166');
  const [definition, setDefinition]             = useState('#5c6166');
  const [typeName, setTypeName]                 = useState('#5c6166');
  const [angleBracket, setAngleBracket]         = useState('#5c6166');
  const [tagName, setTagName]                   = useState('#5c6166');
  const [attributeName, setAttributeName]       = useState('#5c6166');

  const theme = createTheme({
    theme: lightOrDark,
    settings: {
      background,
      foreground,
      caret,
      selection,
      selectionMatch,
      lineHighlight,
      gutterBackground,
      gutterForeground,
    },
    styles: [
      { tag: t.comment, color: comment },
      { tag: t.variableName, color: variableName },
      { tag: [t.string, t.special(t.brace)], color: string },
      { tag: t.number, color: number },
      { tag: t.bool, color: bool },
      { tag: t.null, color: nully },
      { tag: t.keyword, color: keyword },
      { tag: t.operator, color: operator },
      { tag: t.className, color: className },
      { tag: t.definition(t.typeName), color: definition },
      { tag: t.typeName, color: typeName },
      { tag: t.angleBracket, color: angleBracket },
      { tag: t.tagName, color: tagName },
      { tag: t.attributeName, color: attributeName },
    ],
  });

  const styles = [
    { group: 'General', icon: <GroupIcon className='shrink-0'/>, isSubgroup: false, items: [
      { group: 'Text', isSubgroup: true, items: [
        { name: 'Editor Text', color: foreground, setColor: setForeground },
        { name: 'Gutter Text', color: gutterForeground, setColor: setGutterForeground }
      ] },
      { group: 'Background', isSubgroup: true, items: [
        { name: 'Editor Background', color: background, setColor: setBackground },
        { name: 'Gutter Background', color: gutterBackground, setColor: setGutterBackground },
      ] },
      { group: 'Highlights', isSubgroup: true, items: [
        { name: 'Line Highlight', color: lineHighlight, setColor: setLineHighlight },
        { name: 'Selection', color: selection, setColor: setSelection },
        { name: 'Selection Match', color: selectionMatch, setColor: setSelectionMatch },
      ] },
      { name: 'Light or Dark?', color: lightOrDark, setColor: setLightOrDark },
      { name: 'Caret', color: caret, setColor: setCaret },
    ] },
    { group: 'Code', icon: <CodeIcon className='shrink-0'/>, isSubgroup: false, items: [
      { group: 'Data Types', icon: null, isSubgroup: true, items: [
        { name: 'String', color: string, setColor: setString, fontable: false, bolded: false, italicized: false },
        { name: 'Number', color: number, setColor: setNumber, fontable: false, bolded: false, italicized: false },
        { name: 'Boolean', color: bool, setColor: setBool, fontable: false, bolded: false, italicized: false },
        { name: 'Null', color: nully, setColor: setNully, fontable: false, bolded: false, italicized: false },
      ] },
      { group: 'Names', icon: null, isSubgroup: true, items: [
        { name: 'Class Name', color: className, setColor: setClassName, fontable: false, bolded: false, italicized: false },
        { name: 'Type Name', color: typeName, setColor: setTypeName, fontable: false, bolded: false, italicized: false },
        { name: 'Tag Name', color: tagName, setColor: setTagName, fontable: false, bolded: false, italicized: false },
        { name: 'Attribute Name', color: attributeName, setColor: setAttributeName, fontable: false, bolded: false, italicized: false }
      ] },
      { name: 'Variables', color: variableName, setColor: setVariableName, fontable: false, bolded: false, italicized: false },
      { name: 'Keyword', color: keyword, setColor: setKeyword, fontable: false, bolded: false, italicized: false },
      { name: 'Operator', color: operator, setColor: setOperator, fontable: false, bolded: false, italicized: false },
      { name: 'Comment', color: comment, setColor: setComment, fontable: false, bolded: false, italicized: false },
      { name: 'Angle Bracket', color: angleBracket, setColor: setAngleBracket, fontable: false, bolded: false, italicized: false },
      { name: 'Definition', color: definition, setColor: setDefinition, fontable: false, bolded: false, italicized: false },
    ]},
  ];

  function renderStyles(styles) {
    return styles.map((style, index) => {
      if ('group' in style) {
        return (
          <StyleGroup 
            key={style.group} 
            name={style.group}
            icon={style.icon}
            isSubgroup={style.isSubgroup}
            first={index === 0}
          >
            {renderStyles(style.items)}
          </StyleGroup>
        ) 
      } else {
        return (
          <Style 
            key={style.name} 
            name={style.name} 
            color={style.color} 
            setColor={style.setColor} 
            fontable={style.fontable} 
            bolded={style.bolded} 
            italicized={style.italicized} 
            first={index === 0}
          />
        )
      }
    })
  }

  return (
    <>
    <div className='relative md:flex gap-x-12 w-full md:px-6 mt-2 md:mt-3'>
      <div className={`
        md:w-1/3 lg:w-1/4 overflow-y-scroll shadow-xl absolute md:static bottom-1.5 z-20 p-5 md:p-0 md:pt-2.5 bg-black/90 backdrop-blur md:h-auto rounded-xl md:rounded-none border border-white/20 md:border-none
        ${colorEditorExpanded ? 'h-full top-1.5 left-1.5 right-1.5 bottom-1.5' : 'h-[calc(100vh/3)] bottom-1.5 left-1.5 right-1.5'}
      `}>
        <div className='relative flex flex-col gap-y-12'>
          {renderStyles(styles)}
          <button 
            className='md:hidden absolute top-0 right-0 p-2 rounded-full bg-gray-850 hover:bg-gray-700 text-white'
            onClick={() => setcolorEditorExpanded(!colorEditorExpanded)}
          >
            {colorEditorExpanded ? <ExitFullScreenIcon /> : <EnterFullScreenIcon />}
          </button>
        </div>
      </div>
      <div className='overflow-y-scroll w-full md:w-2/3 lg:w-3/4 border border-white/10 md:rounded-md'>
        <div 
          style={{ backgroundColor: background, color: foreground }}
          className='text-xs flex md:rounded-t-md'
        >
          <div className={`border-r border-r-black/40 border-b-white flex justify-center items-center gap-x-2 p-2 px-4  rounded-tl-md`}>
            <img className='w-3 h-3 rounded-[1px]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            <p>index.js</p>
          </div>
          <div className="border-r border-black/40 flex justify-center items-center gap-x-2 p-2 px-4 ">
            <img className='w-3 h-3 rounded-[1px]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            <p>index.js</p>
          </div>
          <div className="border-r border-black/40 flex justify-center items-center gap-x-2 p-2 px-4">
            <img className='w-3 h-3 rounded-[1px]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            <p>index.js</p>
          </div>
        </div>

        <div className='h-fit'>
          <CodeMirror
            height={'fit-content'}
            theme={theme}
            extensions={extensions}
            onChange={onChange}
            className='w-full font-mono'
            value={`(function (global, undefined) {
    "use strict";
    undefinedVariable = {};
    undefinedVariable.prop = 5;

    function initializeProperties(target, members) {
      var keys = Object.keys(members);
      var properties;
      var i, len;
      for (i = 0, len = keys.length; i < len; i++) {
        var key = keys[i];
        var enumerable = key.charCodeAt(0) !== /*_*/95;
        var member = members[key];
        if (member && typeof member === 'object') {
          if (member.value !== undefined || typeof member.get === 'function' || typeof member.set === 'function') {
            if (member.enumerable === undefined) {
              member.enumerable = enumerable;
            }
            properties = properties || {};
            properties[key] = member;
            continue;
          } 
        }
        if (!enumerable) {
          properties = properties || {};
          properties[key] = { value: member, enumerable: enumerable, configurable: true, writable: true }
          continue;
        }
        target[key] = member;
      }
      if (properties) {
        Object.defineProperties(target, properties);
      }
    }

    (function (rootNamespace) {

      // Create the rootNamespace in the global namespace
      if (!global[rootNamespace]) {
        global[rootNamespace] = Object.create(Object.prototype);
      }

      // Cache the rootNamespace we just created in a local variable
      var _rootNamespace = global[rootNamespace];
      if (!_rootNamespace.Namespace) {
        _rootNamespace.Namespace = Object.create(Object.prototype);
      }

      function defineWithParent(parentNamespace, name, members) {
        /// <summary locid="1">
        /// Defines a new namespace with the specified name, under the specified parent namespace.
        /// </summary>
        /// <param name="parentNamespace" type="Object" locid="2">
        /// The parent namespace which will contain the new namespace.
        /// </param>
        /// <param name="name" type="String" locid="3">
        /// Name of the new namespace.
        /// </param>
        /// <param name="members" type="Object" locid="4">
        /// Members in the new namespace.
        /// </param>
        /// <returns locid="5">
        /// The newly defined namespace.
        /// </returns>
        var currentNamespace = parentNamespace,
          namespaceFragments = name.split(".");

        for (var i = 0, len = namespaceFragments.length; i < len; i++) {
          var namespaceName = namespaceFragments[i];
          if (!currentNamespace[namespaceName]) {
            Object.defineProperty(currentNamespace, namespaceName, 
              { value: {}, writable: false, enumerable: true, configurable: true }
            );
          }
          currentNamespace = currentNamespace[namespaceName];
        }

        if (members) {
          initializeProperties(currentNamespace, members);
        }

        return currentNamespace;
      }

      function define(name, members) {
        /// <summary locid="6">
        /// Defines a new namespace with the specified name.
        /// </summary>
        /// <param name="name" type="String" locid="7">
        /// Name of the namespace.  This could be a dot-separated nested name.
        /// </param>
        /// <param name="members" type="Object" locid="4">
        /// Members in the new namespace.
        /// </param>
        /// <returns locid="5">
        /// The newly defined namespace.
        /// </returns>
        return defineWithParent(global, name, members);
      }

      // Establish members of the "WinJS.Namespace" namespace
      Object.defineProperties(_rootNamespace.Namespace, {

        defineWithParent: { value: defineWithParent, writable: true, enumerable: true },

        define: { value: define, writable: true, enumerable: true }

      });

    })("WinJS");

    (function (WinJS) {

      function define(constructor, instanceMembers, staticMembers) {
        /// <summary locid="8">
        /// Defines a class using the given constructor and with the specified instance members.
        /// </summary>
        /// <param name="constructor" type="Function" locid="9">
        /// A constructor function that will be used to instantiate this class.
        /// </param>
        /// <param name="instanceMembers" type="Object" locid="10">
        /// The set of instance fields, properties and methods to be made available on the class.
        /// </param>
        /// <param name="staticMembers" type="Object" locid="11">
        /// The set of static fields, properties and methods to be made available on the class.
        /// </param>
        /// <returns type="Function" locid="12">
        /// The newly defined class.
        /// </returns>
        constructor = constructor || function () { };
        if (instanceMembers) {
          initializeProperties(constructor.prototype, instanceMembers);
        }
        if (staticMembers) {
          initializeProperties(constructor, staticMembers);
        }
        return constructor;
      }

      function derive(baseClass, constructor, instanceMembers, staticMembers) {
        /// <summary locid="13">
        /// Uses prototypal inheritance to create a sub-class based on the supplied baseClass parameter.
        /// </summary>
        /// <param name="baseClass" type="Function" locid="14">
        /// The class to inherit from.
        /// </param>
        /// <param name="constructor" type="Function" locid="9">
        /// A constructor function that will be used to instantiate this class.
        /// </param>
        /// <param name="instanceMembers" type="Object" locid="10">
        /// The set of instance fields, properties and methods to be made available on the class.
        /// </param>
        /// <param name="staticMembers" type="Object" locid="11">
        /// The set of static fields, properties and methods to be made available on the class.
        /// </param>
        /// <returns type="Function" locid="12">
        /// The newly defined class.
        /// </returns>
        if (baseClass) {
          constructor = constructor || function () { };
          var basePrototype = baseClass.prototype;
          constructor.prototype = Object.create(basePrototype);
          Object.defineProperty(constructor.prototype, "_super", { value: basePrototype });
          Object.defineProperty(constructor.prototype, "constructor", { value: constructor });
          if (instanceMembers) {
            initializeProperties(constructor.prototype, instanceMembers);
          }
          if (staticMembers) {
            initializeProperties(constructor, staticMembers);
          }
          return constructor;
        } else {
          return define(constructor, instanceMembers, staticMembers);
        }
      }

      function mix(constructor) {
        /// <summary locid="15">
        /// Defines a class using the given constructor and the union of the set of instance members
        /// specified by all the mixin objects.  The mixin parameter list can be of variable length.
        /// </summary>
        /// <param name="constructor" locid="9">
        /// A constructor function that will be used to instantiate this class.
        /// </param>
        /// <returns locid="12">
        /// The newly defined class.
        /// </returns>
        constructor = constructor || function () { };
        var i, len;
        for (i = 0, len = arguments.length; i < len; i++) {
          initializeProperties(constructor.prototype, arguments[i]);
        }
        return constructor;
      }

      // Establish members of "WinJS.Class" namespace
      WinJS.Namespace.define("WinJS.Class", {
        define: define,
        derive: derive,
        mix: mix
      });

    })(WinJS);

  })(this);
            `}
          />
        </div>
      </div>
    </div>
    </>
  );
}
