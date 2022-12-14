'use client';

import Link from 'next/link';
import Logo from '../../components/logo'
import { UploadIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons'

export default function SandboxLayout({ children }) {
  return (
    <div className='h-screen overflow-y-hidden relative bg-black'>
      <header className='relative flex items-center justify-between gap-x-4 py-3 px-4 md:pl-[18px] md:py-3 md:px-6 max-w-8xl mx-auto'>
        <div className='flex items-center gap-x-4 w-fit self-start '>
          <Link href='/'>
            <div className='-ml-1 transition duration-75 transform hover:scale-[108%] active:scale-100'>
              <Logo classes='h-[48px] w-[48px] md:h-[52px] md:w-[52px]' />
            </div>
          </Link>
        </div>
        <div className='flex items-center flex-wrap-reverse gap-y-2 gap-x-4 justify-end'>
          <div className='flex flex-wrap justify-end gap-x-1 text-gray-500 text-xs md:absolute transform left-1/2 md:-translate-x-1/2'>
            <span>When you're done,</span> <a href='#' className='text-white hover:underline underline-offset-4'>add your theme to VSCode</a> 
            {/* <span>After exporting,</span> <a href='#' className='text-white hover:underline underline-offset-4'>add your theme to VSCode</a>  */}
          </div>
          <div className='flex items-center gap-x-3 my-2'>
            <button className='transition duration-75 transform hover:scale-[102%] active:scale-100 flex gap-x-2 items-center font-normal bg-white text-black rounded-full px-5 py-2 text-sm'>
              <UploadIcon />
              <span>Export</span>
            </button>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}