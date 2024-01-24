import { Blog } from '@/types'
import { allBlogs } from 'contentlayer/generated'
import { skills } from '@/data/resume/skills'
import { experiences } from '@/data/resume/experiences'
import { projects } from '@/data/resume/projects'

const getBlogs = () => {
  const items: Blog[] = allBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return items
}

const getBlog = (slug: string) => {
  const index = allBlogs.findIndex((blog) => blog.slug === slug)
  if (index === -1) {
    throw new Error('게시글이 존재하지 않습니다.')
  }

  return {
    blog: allBlogs[index],
    prev: {
      link: allBlogs[index - 1] && allBlogs[index - 1].slug,
      title: allBlogs[index - 1] && allBlogs[index - 1].title,
    },
    next: {
      link: allBlogs[index + 1] && allBlogs[index + 1].slug,
      title: allBlogs[index + 1] && allBlogs[index + 1].title,
    },
  }
}

const getResumeSkills = () => {
  return skills
}

const getResumeExperiences = () => {
  return experiences
}

const getResumeProjects = () => {
  return projects
}

export { getBlogs, getBlog, getResumeSkills, getResumeExperiences, getResumeProjects }
