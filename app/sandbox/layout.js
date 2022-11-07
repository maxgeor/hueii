'use client';

import Link from 'next/link';
import Logo from '../../components/logo'
import { RocketIcon, UploadIcon } from '@radix-ui/react-icons'

export default function DashboardLayout({ children }) {
  return (
    <div>
      <header className='relative flex items-center justify-between px-5 py-3 max-w-8xl mx-auto'>
        <div className='flex items-center gap-x-4 w-fit'>
          <Link href='/'>
            <div className='-ml-1'>
              <Logo size='small' />
            </div>
          </Link>
          {/* <p className='text-gray-500'>Title</p> */}
          <p className='lg:absolute transform left-1/2 lg:-translate-x-1/2 text-gray-500 text-xs'>Sign up to save changes</p>
        </div>
        <div className='flex gap-x-2'>
          <button className='flex gap-x-2 items-center bg-gray-800 rounded-full px-5 py-2 font-medium text-sm'>
            <UploadIcon />
            <span>Export</span>
          </button>
          <button className='flex gap-x-2 items-center bg-white text-black rounded-full px-5 py-2 font-medium text-sm'>
            <RocketIcon />
            <span>Publish</span>
          </button>
        </div>
      </header>
      <div className="max-w-6xl mx-auto">
        <div className="m-5">
          {children}
        </div>
      </div>
    </div>
  );
}