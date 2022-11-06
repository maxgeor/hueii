import React from 'react'
import Logo from './logo'

export default function Navbar({ maxWidth }) {
  return (
    <div className={`${maxWidth} flex justify-center items-center sticky top-0 w-full p-6`}>
      <Logo />
    </div>
    // <div className={`${maxWidth} flex justify-between items-center sticky top-0 w-full p-6`}>
    //   <Logo />
    //   <div className='flex gap-x-6'>
    //     <p>Sign in</p>
    //     <p>Sign up</p>
    //   </div>
    // </div>
  )
}
