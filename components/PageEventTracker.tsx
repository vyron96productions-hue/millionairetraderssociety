'use client'
import { useEffect } from 'react'
import { pushDataLayer } from '@/lib/gtm'

interface Props {
  pageName: string
  pageCategory?: string
}

export default function PageEventTracker({ pageName, pageCategory }: Props) {
  useEffect(() => {
    pushDataLayer({ event: 'page_view', page_name: pageName, page_category: pageCategory ?? 'general' })
  }, [pageName, pageCategory])
  return null
}
