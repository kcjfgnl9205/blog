'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { PATH } from '@/constants/path'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <h1 className='text-6xl font-bold text-gray-700'>Error</h1>
      <p className='text-xl text-gray-600'>{error.message}</p>
      <Link
        className='mt-8 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
        href={PATH.home}
      >
        Go back home
      </Link>
    </div>
  )
}
