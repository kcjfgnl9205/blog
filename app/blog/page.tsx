import { Card } from '@/components/blog/Card'
import { PageLayout } from '@/components/layouts'
import { getBlogs } from '@/data'

export default function Page() {
  const posts = getBlogs()
  return (
    <PageLayout title='Blog' description='공유하고 싶거나 다시 보고 싶은 기술들을 정리합니다.'>
      {posts.map((post) => (
        <Card key={post._id} item={post} />
      ))}
    </PageLayout>
  )
}