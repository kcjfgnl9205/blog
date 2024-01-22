import Link from 'next/link'

interface Props {
  item: { text: string; link?: string }
}

export default function CardDetail({ item }: Props) {
  return (
    <p>
      👉 {item.text}
      {item.link && (
        <Link href={item.link} target='_blank' className='text-[#5E87C9] font-semibold'>
          (상세보기)
        </Link>
      )}
    </p>
  )
}
