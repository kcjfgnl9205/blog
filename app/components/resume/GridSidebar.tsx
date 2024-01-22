import Link from 'next/link'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

interface Props {
  title: string
  description?: string
  demo?: string
  github?: string
}

export default function GridSidebar({ title, description, demo, github }: Props) {
  return (
    <div>
      <div className='mb-4'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        {description && <span className='text-sm text-neutral-500'>{description}</span>}
      </div>
      <div className='flex md:flex-col gap-4 md:gap-1'>
        {demo && (
          <div className='flex gap-2 items-center'>
            <AiOutlineLink size={20} />
            <Link href={demo} target='_blank'>
              <span>Demo</span>
            </Link>
          </div>
        )}
        {github && (
          <div className='flex gap-2 items-center'>
            <AiFillGithub size={20} />
            <Link href={github} target='_blank'>
              <span>Github</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
