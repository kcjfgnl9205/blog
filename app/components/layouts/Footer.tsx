'use client'

import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className='flex flex-col items-end border-t border-gray-color w-full p-4 dark:border-gray-color'>
      <div className='flex gap-4'>
        <Link href='https://github.com/kcjfgnl9205' target='_blank'>
          <AiFillGithub size={24} className='cursor-pointer' />
        </Link>
      </div>
      <div className='dark:text-gray-color text-sm lg:text-base'>Copyright ©2024 kcjfgnl9205 All rights reserved.</div>
    </footer>
  )
}
