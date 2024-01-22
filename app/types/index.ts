import { Blog as TBlog } from 'contentlayer/generated'

export type Theme = 'light' | 'dark'

export type Optional<Type, Key extends keyof Type> = Omit<Type, Key> & Partial<Pick<Type, Key>>

export type Blog = TBlog

export enum SKILL {
  FRONT = 0,
  BACK = 1,
}

export interface Skill {
  name: string
  flg: SKILL
}

export interface ResumePersnalProject {
  name: string
  description: string
  date: string
  github?: string
  demo?: string

  members: string
  stacks: Skill[]
  detail: { text: string; link?: string }[]
}
