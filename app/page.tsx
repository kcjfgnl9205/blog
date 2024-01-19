import { PageLayout } from '@/components/layouts'

export default function Home() {
  return (
    <PageLayout title='Cheol Hwi Park' description={`👋 Hi there! I'm a junior frontend developer.`}>
      <SectionLayout name='Introduce'>
        <div></div>
      </SectionLayout>
      <SectionLayout name='Skills'>
        <div></div>
      </SectionLayout>
      <SectionLayout name='Career'>
        <div></div>
      </SectionLayout>
      <SectionLayout name='Education'>
        <div></div>
      </SectionLayout>
    </PageLayout>
  )
}

interface SectionProps {
  children: React.ReactNode
  name: string
}

const SectionLayout = ({ children, name }: SectionProps) => {
  return (
    <section className='flex flex-col gap-2'>
      <h3 className='text-xl font-semibold'>{name}</h3>
      {children}
    </section>
  )
}
