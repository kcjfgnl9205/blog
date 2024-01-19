import { Blog } from '@/types'
import { allBlogs } from 'contentlayer/generated'

const getBlogs = () => {
  const items: Blog[] = allBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return items
}

const getBlog = (slug: string) => {
  const doc: Blog | undefined = allBlogs.find((blog) => blog.slug === slug)
  return doc ?? null
}

export { getBlogs, getBlog }
