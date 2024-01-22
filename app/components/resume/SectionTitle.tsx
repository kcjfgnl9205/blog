interface Props {
  name: string
}

export default function SectionTitle({ name }: Props) {
  return (
    <div className='relative border-b-[1px] border-neutral-200'>
      <p className='text-[#5E87C9] text-xl font-semibold py-4'>{name}</p>
    </div>
  )
}
