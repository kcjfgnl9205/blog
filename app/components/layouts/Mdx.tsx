import { useMDXComponent } from 'next-contentlayer/hooks'
import { CodeBlock, MdxLink } from '@/components/mdx'

interface Props {
  code: string
}

const components = {
  pre: CodeBlock,
  a: MdxLink,
}

export function Mdx({ code }: Props) {
  const Component = useMDXComponent(code)

  return (
    <div className='prose dark:prose-invert flex-1 prose-a:text-sky-600 max-w-full p-4'>
      <Component components={components} />
    </div>
  )
}
