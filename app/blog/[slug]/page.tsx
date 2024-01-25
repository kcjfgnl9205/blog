import { Mdx } from '@/components/layouts/Mdx'
import { getBlog } from '@/data'
import { dateFormat } from '@/utils/date'
import { Profile, Navigation, ScrollProgressBar } from '@/components/blog'

export default function Page({ params }: { params: { slug: string } }) {
  try {
    const { blog, prev, next } = getBlog(params.slug)
    return (
      <section className='flex flex-col w-full p-4'>
        <ScrollProgressBar />
        <div className='flex flex-col text-center my-4 lg:my-8'>
          <h1 className='text-3xl font-black inline-block bg-clip-text'>{blog.title}</h1>
          <time className='text-gray-500 text-sm mt-2'>{dateFormat(blog.date)}</time>
        </div>
        <Mdx code={blog.body.code} />

        <Profile />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 my-12 mb-24'>
          <Navigation item={prev} />
          <Navigation item={next} next />
        </div>
      </section>
    )
  } catch (error) {
    throw error
  }
}
