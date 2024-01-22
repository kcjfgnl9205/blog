'use client'

import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className='flex gap-4 justify-center items-center border-t border-gray-color w-full p-4 dark:border-gray-color'>
      <div className='dark:text-gray-color text-sm lg:text-base'>Copyright ©2024 kcjfgnl9205 All rights reserved.</div>
      <Link href='https://github.com/kcjfgnl9205' target='_blank'>
        <AiFillGithub size={20} className='cursor-pointer' />
      </Link>
    </footer>
  )
}
