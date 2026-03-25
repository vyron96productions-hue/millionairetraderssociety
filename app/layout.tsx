import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const GTM_ID = 'GTM-MD2ZC44H'

export const metadata: Metadata = {
  title: { default: 'Millionaire Traders Society', template: '%s | Millionaire Traders Society' },
  description: 'Join over 17,000 students learning to trade futures, forex, stocks, and options with Coach Jessica Ramos. Free beginner course available.',
  keywords: ['trading education', 'futures trading', 'forex trading', 'stock options', 'Coach Jessica Ramos', 'millionaire traders society'],
  openGraph: {
    siteName: 'Millionaire Traders Society',
    type: 'website',
    url: 'https://millionairetraderssociety.com',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sayyes2jess_',
    creator: '@sayyes2jess_',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://millionairetraderssociety.com',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0DBEF3',
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Millionaire Traders Society',
  url: 'https://millionairetraderssociety.com',
  logo: 'https://millionairetraderssociety.com/mts-logo.png',
  description: 'Trading education community teaching futures, forex, crypto, and stock options with 17,000+ students worldwide.',
  founder: {
    '@type': 'Person',
    name: 'Jessica Ramos',
    jobTitle: 'Founder & Trading Coach',
    sameAs: [
      'https://www.youtube.com/@SayYes2Jess',
      'https://www.instagram.com/stock_bae/',
      'https://x.com/sayyes2jess_',
    ],
  },
  sameAs: [
    'https://www.youtube.com/@SayYes2Jess',
    'https://www.instagram.com/stock_bae/',
    'https://x.com/sayyes2jess_',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'info@millionairetraderssociety.com',
    availableLanguage: 'English',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <Script src="//code.tidio.co/wmmmrwon5vasr7g0fftydbcwh6vvivg7.js" strategy="lazyOnLoad" />
        {GTM_ID && (
          <Script id="gtm-head" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
      </head>
      <body>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
