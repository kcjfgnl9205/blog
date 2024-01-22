interface Props {
  children: React.ReactNode
}

export default function Grid({ children }: Props) {
  return <div className='grid grid-cols-1 md:grid-cols-2'>{children}</div>
}
