interface Props {
  name: string
}

export default function HashTag({ name }: Props) {
  return <span className='text-sm text-[#5E87C9] font-semibold'>#{name}</span>
}
