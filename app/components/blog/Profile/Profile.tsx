'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'

export default function Profile() {
  return (
    <div className='w-full p-4 my-12'>
      <div className='flex gap-4 items-center'>
        <Image src='/user.png' alt='profile' width={100} height={100} />
        <div>
          <p className='text-xl font-semibold'>Park Cheol Hwi</p>
          <div className='flex gap-2'>
            <Link href='https://github.com/kcjfgnl9205' target='_blank' title='GitHub 보러가기'>
              <AiFillGithub size={22} />
            </Link>
            <Link href='mailto:kcjfgnl9205@gmail.com' target='_blank' title='메일 보내기'>
              <AiOutlineMail size={22} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
