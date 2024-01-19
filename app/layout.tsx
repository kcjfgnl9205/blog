import type { Metadata } from 'next'
import '@/globals.css'
import { Footer, HeaderNavbar } from '@/components/layouts'

export const metadata: Metadata = {
  title: 'Blog - park',
  description: '박철휘의 개인 블로그',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko' className='h-full'>
      <body className='h-full'>
        <div className='h-full bg-light-color text-dark-color dark:bg-dark-color dark:text-light-color'>
          <div className='flex flex-col h-full max-w-screen-lg mx-auto'>
            <HeaderNavbar />
            <main className='flex-1'>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
