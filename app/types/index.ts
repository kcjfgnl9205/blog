import { Blog as TBlog } from 'contentlayer/generated'

export type Theme = 'light' | 'dark'

export type Optional<Type, Key extends keyof Type> = Omit<Type, Key> & Partial<Pick<Type, Key>>

export type Blog = TBlog
