import { SKILL } from '@/types'

interface Props {
  name: string
  flg?: SKILL
  sm?: boolean
}

export default function Badge({ name, flg, sm }: Props) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border-[1px]
        ${flg === SKILL.FRONT ? 'border-[#5E87C9]' : 'border-[#db0f62]'}
        ${flg === SKILL.FRONT ? 'text-[#5E87C9]' : 'text-[#db0f62]'}
        ${sm ? 'px-2' : 'px-4'}
        ${sm ? 'py-1' : 'py-2'}
        text-xs
        font-medium
      `}
    >
      {name}
    </span>
  )
}
