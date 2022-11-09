'use client';

import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useState } from 'react'
import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';
import { GroupIcon, CodeIcon } from '@radix-ui/react-icons'
import StyleGroup from '../../components/StyleGroup';
import StyleBox from '../../components/StyleBox';

export default function SandboxPage() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);

  const extensions = [javascript({ jsx: true })];

  const defaultBackground                       = '#191930';
  const [lightOrDark, setLightOrDark]           = useState('dark');
  const [background, setBackground]             = useState(defaultBackground);
  const [foreground, setForeground]             = useState('#81819c');
  const [caret, setCaret]                       = useState('#fff');
  const [selection, setSelection]               = useState('#20203b');
  const [selectionMatch, setSelectionMatch]     = useState('#20203b');
  const [lineHighlight, setLineHighlight]       = useState('#8a91991a');
  const [gutterBackground, setGutterBackground] = useState(defaultBackground);
  const [gutterForeground, setGutterForeground] = useState('#8e959d66');
  const [comment, setComment]                   = useState('#787b8099');
  const [variableName, setVariableNamet]        = useState('#0080ff');
  const [string, setString]                     = useState('#5c6166');
  const [number, setNumber]                     = useState('#5c6166');
  const [bool, setBool]                         = useState('#5c6166');
  const [nully, setNully]                       = useState('#5c6166');
  const [keyword, setKeyword]                   = useState('#5c6166');
  const [operator, setOperator]                 = useState('#5c6166');
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
      { name: 'Light or Dark?', color: lightOrDark, setColor: setLightOrDark, fontable: false, bolded: false, italicized: false },
      { name: 'Background', color: background, setColor: setBackground, fontable: false, bolded: false, italicized: false },
      { name: 'Foreground', color: foreground, setColor: setForeground, fontable: false, bolded: false, italicized: false },
      { name: 'Caret', color: caret, setColor: setCaret, fontable: false, bolded: false, italicized: false },
      { name: 'Selection', color: selection, setColor: setSelection, fontable: false, bolded: false, italicized: false },
      { name: 'Selection Match', color: selectionMatch, setColor: setSelectionMatch, fontable: false, bolded: false, italicized: false },
      { name: 'Line Highlight', color: lineHighlight, setColor: setLineHighlight, fontable: false, bolded: false, italicized: false },
      { name: 'Gutter Background', color: gutterBackground, setColor: setGutterBackground, fontable: false, bolded: false, italicized: false },
      { name: 'Gutter Foreground', color: gutterForeground, setColor: setGutterForeground, fontable: false, bolded: false, italicized: false }
    ] },
    { group: 'Code', icon: <CodeIcon className='shrink-0'/>, isSubgroup: false, items: [
      { name: 'Comment', color: comment, setColor: setComment, fontable: false, bolded: false, italicized: false },
      { name: 'Variable Name', color: variableName, setColor: setVariableNamet, fontable: false, bolded: false, italicized: false },
      { group: 'Data Types', icon: null, isSubgroup: true, items: [
        { name: 'String', color: string, setColor: setString, fontable: false, bolded: false, italicized: false },
        { name: 'Number', color: number, setColor: setNumber, fontable: false, bolded: false, italicized: false },
        { name: 'Bool', color: bool, setColor: setBool, fontable: false, bolded: false, italicized: false },
        { name: 'Null', color: nully, setColor: setNully, fontable: false, bolded: false, italicized: false },
      ] },
      { name: 'Keyword', color: keyword, setColor: setKeyword, fontable: false, bolded: false, italicized: false },
      { name: 'Operator', color: operator, setColor: setOperator, fontable: false, bolded: false, italicized: false },
      { name: 'Definition', color: definition, setColor: setDefinition, fontable: false, bolded: false, italicized: false },
      { name: 'Angle Bracket', color: angleBracket, setColor: setAngleBracket, fontable: false, bolded: false, italicized: false },
      { group: 'Names', icon: null, isSubgroup: true, items: [
        { name: 'Class Name', color: className, setColor: setClassName, fontable: false, bolded: false, italicized: false },
        { name: 'Type Name', color: typeName, setColor: setTypeName, fontable: false, bolded: false, italicized: false },
        { name: 'Tag Name', color: tagName, setColor: setTagName, fontable: false, bolded: false, italicized: false },
        { name: 'Attribute Name', color: attributeName, setColor: setAttributeName, fontable: false, bolded: false, italicized: false }
      ] },
    ]},
  ];

  function renderStyles(styles) {
    return styles.map(style => {
      if ('group' in style) {
        return (
          <StyleGroup 
            key={style.group} 
            name={style.group}
            icon={style.icon}
            isSubgroup={style.isSubgroup}
          >
            {renderStyles(style.items)}
          </StyleGroup>
        ) 
      } else {
        return (
          <StyleBox 
            key={style.name} 
            name={style.name} 
            color={style.color} 
            setColor={style.setColor} 
            fontable={style.fontable} 
            bolded={style.bolded} 
            italicized={style.italicized} 
          />
        )
      }
    })
  }

  return (
    <>
    <div className='relative flex flex-col-reverse md:grid grid-cols-7 lg:grid-cols-9 gap-x-6 w-full md:px-6 mt-2 md:mt-3'>
      <div className='overflow-y-scroll shadow-xl sticky z-20 w-[calc(100vw - 100px)] md:w-full bottom-1.5 col-span-2 lg:col-span-2 flex flex-col gap-y-12 mx-1.5 mb-2 md:m-0 px-[18px] py-6 md:p-0 md:pt-2.5 bg-black/90 backdrop-blur h-[calc(100vh/2.5)] md:h-auto rounded-xl md:rounded-none border border-white/20 md:border-none'>
        {renderStyles(styles)}
      </div>
      <div className='col-span-5 lg:col-span-7 w-full border border-white/10 md:rounded-t-md'>
        <div className='flex bg-gray-850 md:rounded-t-md'>
          <div className={`border-r border-r-black/40 border-b-white flex justify-center items-center gap-x-2 p-2 px-4 text-gray-500 text-xs rounded-tl-md`}>
            <img className='w-3 h-3 rounded-[1px]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            <p>index.js</p>
          </div>
          <div className="border-r border-black/40 flex justify-center items-center gap-x-2 p-2 px-4 bg-gray-850 text-gray-500 text-xs">
            <img className='w-3 h-3 rounded-[1px]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            <p>index.js</p>
          </div>
          <div className="border-r border-black/40 flex justify-center items-center gap-x-2 p-2 px-4 bg-gray-850 text-gray-500 text-xs">
            <img className='w-3 h-3 rounded-[1px]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            <p>index.js</p>
          </div>
        </div>

        <CodeMirror
          height={'100%'}
          theme={theme}
          extensions={extensions}
          onChange={onChange}
          className='w-full'
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
    </>
  );
}
