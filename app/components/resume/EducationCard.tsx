interface Props {
  name: string
  description: string
}

export default function EducationCard({ name, description }: Props) {
  return (
    <div className='flex flex-col gap-1'>
      <h3 className='text-xl font-semibold'>{name}</h3>
      <p className='text-sm text-neutral-500'>{description}</p>
    </div>
  )
}
