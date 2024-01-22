import Link from 'next/link'
import { PATH } from '@/constants/path'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <h1 className='text-6xl font-bold text-gray-700'>404</h1>
      <p className='text-xl text-gray-600'>Oops! Page not found.</p>
      <p className='mt-2 text-gray-500'>We can`t find the page you`re looking for.</p>
      <Link
        className='mt-8 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
        href={PATH.home}
      >
        Go back home
      </Link>
    </div>
  )
}
