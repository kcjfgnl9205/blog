'use client'

import { useCallback, useEffect, useState } from 'react'
import { AiOutlineUp } from 'react-icons/ai'

export default function ScrollTopButton() {
  const SCROLL_THRESHOLD = 20

  const [show, setShow] = useState(false)

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = useCallback(() => {
    setShow(window.scrollY > SCROLL_THRESHOLD)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      {show && (
        <div
          className='relative rounded-full p-4 cursor-pointer bg-indigo-200 text-indigo-700 hover:bg-indigo-300 transition-all duration-150'
          onClick={handleClick}
        >
          <AiOutlineUp size={18} />
        </div>
      )}
    </>
  )
}
