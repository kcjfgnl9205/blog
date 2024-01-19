'use client'

import React, { useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { MdCheck, MdContentCopy } from 'react-icons/md'

export default function CodeBlock({ children }: React.ComponentProps<'pre'>) {
  console.log(children)
  const ref = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const text = ref.current?.querySelector('code')?.innerText
    if (!text) return

    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      toast.success('코드를 복사했습니다.')
    } catch (e) {
      console.error(e)
      toast.error('코드 복사에 실패했습니다.')
    } finally {
      setTimeout(() => {
        setCopied(false)
      }, 1500)
    }
  }

  return (
    <div className='group relative my-2 -mx-2 overflow-hidden rounded-lg sm:mx-0 sm:my-5'>
      <pre ref={ref} className='m-0 rounded-none p-5 leading-4'>
        {children}
      </pre>
      <button
        className='
          absolute right-2 bottom-2 flex h-8 w-8 items-center justify-center rounded-lg
          bg-neutral-700 text-xs text-neutral-400 hover:text-neutral-300
          opacity-0 transition-all group-hover:opacity-100
        '
        aria-label='copy-button'
        onClick={handleCopy}
      >
        {copied ? <MdCheck /> : <MdContentCopy />}
      </button>
    </div>
  )
}
