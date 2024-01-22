import { CardDetail } from '@/components/resume'

interface Props {
  items: { text: string; link?: string }[]
}

export default function CardDetails({ items }: Props) {
  return (
    <div className='flex flex-col gap-1 text-sm'>
      {items.map((item) => (
        <CardDetail key={item.text} item={item} />
      ))}
    </div>
  )
}
