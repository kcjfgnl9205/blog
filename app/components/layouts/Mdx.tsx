import { useMDXComponent } from 'next-contentlayer/hooks'
import { PreBlock, MdxLink, CodeBlock } from '@/components/mdx'

interface Props {
  code: string
}

const components = {
  pre: PreBlock,
  a: MdxLink,
  code: CodeBlock,
}

export function Mdx({ code }: Props) {
  const Component = useMDXComponent(code)

  return (
    <div className='prose dark:prose-invert flex-1 prose-a:text-sky-600 max-w-full'>
      <Component components={components} />
    </div>
  )
}
