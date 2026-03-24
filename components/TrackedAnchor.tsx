'use client'
import { pushDataLayer } from '@/lib/gtm'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tracking: Record<string, unknown>
}

export default function TrackedAnchor({ tracking, onClick, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={e => {
        pushDataLayer(tracking)
        if (typeof onClick === 'function') onClick(e)
      }}
    />
  )
}
