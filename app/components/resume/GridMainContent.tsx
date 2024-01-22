import { Skill } from '@/types'
import { HashTag } from '@/components/common'
import { CardDetails } from '@/components/resume'

interface Props {
  name: string
  date?: string
  members?: string
  skills?: Skill[]
  detail?: { text: string; link?: string }[]
}

export default function GridMainContent({ name, date, members, skills, detail }: Props) {
  return (
    <div className='border-b-[1px] py-4 md:pb-4 md:pt-0 md:border-none'>
      <div className='flex flex-col mb-2 md:mb-4'>
        <h6 className='text-lg font-semibold'>{name}</h6>
        {date && <span className='text-sm text-neutral-500'>{date}</span>}
        {members && <span className='text-sm text-neutral-500'>{members}</span>}
      </div>

      <div className='mb-4'>
        {skills && (
          <div className='flex flex-wrap gap-1'>
            {skills.map((skill) => (
              <HashTag key={skill.name} name={skill.name} />
            ))}
          </div>
        )}
      </div>

      {detail && <CardDetails items={detail} />}
    </div>
  )
}
