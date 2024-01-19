interface Props {
  children: React.ReactNode
  title: string
  description?: string
}

export default function PageLayout({ children, title, description }: Props) {
  return (
    <div className='flex flex-col gap-4 p-4'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        {description && <span className='text-gray-500'>{description}</span>}
      </div>
      {children}
    </div>
  )
}
