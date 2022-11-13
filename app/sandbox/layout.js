'use client';

import Link from 'next/link';
import Logo from '../../components/logo'
import { QuestionMarkCircledIcon, UploadIcon } from '@radix-ui/react-icons'

export default function DashboardLayout({ children }) {
  return (
    <div className='relative bg-black md:pb-12'>
      <header className='relative flex items-center justify-between gap-x-2 py-3 px-4 md:pl-[18px] md:py-3 md:px-6 max-w-8xl mx-auto'>
        <div className='flex items-center gap-x-4 w-fit self-start '>
          <Link href='/'>
            <div className='-ml-1 transition duration-75 transform hover:scale-[108%] active:scale-100'>
              <Logo size='small' />
            </div>
          </Link>
        </div>
        <div className='flex items-center flex-wrap-reverse gap-y-2 gap-x-4 justify-end'>
          <p className='md:absolute transform left-1/2 md:-translate-x-1/2 text-gray-500 text-xs'>
            <a href='#' className='text-white hover:underline underline-offset-4'>Sign up</a> to save your theme
          </p>
          <div className='flex items-center gap-x-3'>
            <div className='flex items-center h-12'>
              <button className='transition duration-75 transform hover:scale-[102%] active:scale-100 flex gap-x-2 items-center bg-white text-black font-medium rounded-full px-5 py-2 text-sm'>
                <UploadIcon />
                <span>Export</span>
              </button>
            </div>
            <QuestionMarkCircledIcon className='text-gray-400 hover:text-white' />
          </div>
        </div>
      </header>
      <div className="max-w-6xl mx-auto ">
        {children}
      </div>
    </div>
  );
}