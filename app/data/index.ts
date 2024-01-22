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
  const doc: Blog | undefined = allBlogs.find((blog) => blog.slug === slug)
  return doc ?? null
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
