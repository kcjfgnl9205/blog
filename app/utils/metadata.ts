import { Metadata } from 'next'

interface MetadataProps {
  title: string
  description: string
  path: string
}

export default function metadata(props: MetadataProps): Metadata {
  const { title, description: desc, path } = props
  const description = `개발 블로그 | ${desc}`

  return {
    title: `CheolHwi | ${title}`,
    description,
    openGraph: {
      title,
      description,
      url: process.env.HOST! + path,
      locale: 'ko_KR',
    },
  }
}
