'use client'

import Link from 'next/link'
import { Blog } from '@/types'
import { dateFormat } from '@/utils/date'

interface Props {
  item: Blog
}

export default function Card({ item }: Props) {
  return (
    <Link href={item.url} className='my-4 hover:scale-[1.01] transition-all ease-in-out'>
      <div className='flex flex-col'>
        <p className='text-lg font-semibold'>{item.title}</p>
        <p>{item.description}</p>
        <p className='text-sm text-gray-color mt-2'>{dateFormat(item.date)}</p>
      </div>
    </Link>
  )
}
