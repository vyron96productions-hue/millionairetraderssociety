'use client'
import Link from 'next/link'
import { pushDataLayer } from '@/lib/gtm'

interface Props extends React.ComponentProps<typeof Link> {
  tracking: Record<string, unknown>
}

export default function TrackedLink({ tracking, onClick, ...props }: Props) {
  return (
    <Link
      {...props}
      onClick={e => {
        pushDataLayer(tracking)
        if (typeof onClick === 'function') onClick(e)
      }}
    />
  )
}
