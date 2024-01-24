'use client'

import Link from 'next/link'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { PATH } from '@/constants/path'
import { BlogNavigation } from '@/types'

interface Props {
  item: BlogNavigation
  next?: boolean
}

export default function Navigation({ item, next }: Props) {
  const name = next ? '다음 포스트' : '이전 포스트'

  return (
    <Link href={`${PATH.blog}/${item.link}`} className='flex border-[1px] border-neutral-200 rounded-lg p-4 w-full'>
      <div className={`flex items-center w-full gap-4 ${next && 'flex-row-reverse'}`}>
        <div className={`p-1 border-[1px] border-neutral-200 rounded-full items-center justify-center`}>
          {next ? <AiOutlineRight size={20} /> : <AiOutlineLeft size={20} />}
        </div>
        <div className={`flex flex-col w-full ${next && 'items-end'}`}>
          <span className='text-sm text-neutral-500 font-semibold'>{name}</span>
          <span className='truncate max-w-[90%]'>{item.title}</span>
        </div>
      </div>
    </Link>
  )
}
