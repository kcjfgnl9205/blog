'use client'

export default function CodeBlock({ children }: React.ComponentProps<'code'>) {
  return (
    <>
      {typeof children === 'object' ? (
        <code data-language='HTML' data-theme='default'>
          {children}
        </code>
      ) : (
        <code className='bg-neutral-200 text-indigo-500 px-1 mx-1 rounded-md before:content-none after:content-none'>
          {children}
        </code>
      )}
    </>
  )
}
