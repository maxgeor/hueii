import React from 'react'
import Image from 'next/image'
import Logo from './logo'

export default function Header({ maxWidth }) {
  return (
    <div className={`${maxWidth} flex justify-between items-center sticky top-0 bg-black/90 w-full p-6`}>
      <Logo size='medium' />
      <div className='flex gap-x-6'>
        <p>Sign in</p>
        <p>Sign up</p>
      </div>
    </div>
  )
}
