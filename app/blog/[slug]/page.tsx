import { Mdx } from '@/components/layouts/Mdx'
import { getBlog } from '@/data'
import { notFound } from 'next/navigation'
import { dateFormat } from '@/utils/date'

export default function Page({ params }: { params: { slug: string } }) {
  try {
    const blog = getBlog(params.slug)
    if (!blog) {
      notFound()
    }

    return (
      <section className='flex flex-col w-full'>
        <div className='flex flex-col text-center my-4 lg:my-8 p-4'>
          <h1 className='text-3xl font-black inline-block bg-clip-text'>{blog.title}</h1>
          <time className='text-gray-500 text-sm mt-2'>{dateFormat(blog.date)}</time>
        </div>
        <Mdx code={blog.body.code} />
      </section>
    )
  } catch (error) {
    throw error
  }
}
