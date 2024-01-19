'use client'

import Link from 'next/link'
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md'
import { useDarkMode } from '@/hooks/useDarkmode'

export default function HeaderNavbar() {
  const [theme, toggleTheme] = useDarkMode()
  return (
    <header className='flex items-center justify-between border-b border-gray-color w-full p-4'>
      <div className='flex items-center gap-4'>
        <Link href='/' className='flex text-lg font-semibold'>
          Home
        </Link>
        <Link href='/blog' className='flex'>
          Blog
        </Link>
      </div>
      <div className='flex'>
        {theme === 'dark' ? (
          <MdOutlineWbSunny size={24} className='cursor-pointer' onClick={toggleTheme} />
        ) : (
          <MdOutlineDarkMode size={24} className='cursor-pointer' onClick={toggleTheme} />
        )}
      </div>
    </header>
  )
}