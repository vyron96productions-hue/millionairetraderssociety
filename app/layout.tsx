import type { Metadata, Viewport } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { default: 'Millionaire Traders Society', template: '%s | Millionaire Traders Society' },
  description: 'Join over 17,000 students learning to trade futures, forex, stocks, and options with Coach Jessica Ramos. Free beginner course available.',
  keywords: ['trading education', 'futures trading', 'forex trading', 'stock options', 'Coach Jessica Ramos', 'millionaire traders society'],
  openGraph: {
    siteName: 'Millionaire Traders Society',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0DBEF3',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
