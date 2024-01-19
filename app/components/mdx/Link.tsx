'use client'

export default function MdxLink({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) {
  return <a target='_blank' rel='noopener' {...props} />
}
