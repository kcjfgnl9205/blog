'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

export default function ScrollProgressBar() {
  const [width, setWidth] = useState(0)

  const handleScroll = useCallback((): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    if (scrollTop === 0) {
      setWidth(0)
      return
    }

    const windowHeight = scrollHeight - clientHeight
    const currentPercent = Math.ceil((scrollTop / windowHeight) * 100)
    setWidth(currentPercent)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div className='w-full h-[4px] bg-neutral-200 dark:bg-dark-color fixed top-0 left-0 right-0 z-10'>
      <div className='h-full bg-rose-500' style={{ width: width + '%' }}></div>
    </div>
  )
}
