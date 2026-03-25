import Link from 'next/link'
import Image from 'next/image'
import TrackedLink from '@/components/TrackedLink'
import TrackedAnchor from '@/components/TrackedAnchor'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trading Courses',
  description: 'Browse all Millionaire Traders Society courses — from free beginner lessons to advanced VIP trading programs for forex, futures, and stock options.',
}

const COURSES = [
  {
    id: 'free',
    badge: 'FREE',
    badgeColor: '#0a9ecc',
    badgeBg: '#e0f7fe',
    title: 'Beginners Trading Course',
    price: 'Free',
    priceNote: 'A $500+ value — no credit card needed',
    description: 'The perfect starting point. Learn the core concepts of technical analysis, chart reading, risk management, and trade setup identification from scratch.',
    features: [
      'Introduction to technical analysis',
      'Reading charts and identifying patterns',
      'Understanding support & resistance',
      'Risk management fundamentals',
      'Trade setup identification',
      'Introduction to price action',
    ],
    cta: 'Get Free Access →',
    href: '/free-course',
    accent: '#0DBEF3',
    highlight: false,
    image: '/course-free.jpg',
  },
  {
    id: 'workshop',
    badge: 'STOCK OPTIONS',
    badgeColor: '#0a9ecc',
    badgeBg: '#e0f7fe',
    title: '60-Day Trader Workshop',
    price: 'One-Time',
    priceNote: 'Stock options education program',
    description: '60 days of structured stock options education. Live trading updates, trade reviews, weekly webinars, and live support access.',
    features: [
      'Live Trading & Trade Updates',
      'Trade Reviews',
      'Trade Ideas',
      'Live Support Access',
      'Engagement Encouraged',
      'Weekly Webinars',
    ],
    cta: 'Join the Workshop →',
    href: '/workshop',
    accent: '#0DBEF3',
    highlight: false,
    image: '/course-60day.png',
  },
  {
    id: 'vip',
    badge: 'MOST POPULAR',
    badgeColor: '#289E54',
    badgeBg: '#e8f5e9',
    title: 'VIP Trading Course',
    price: 'Monthly Subscription',
    priceNote: 'Cancel anytime — flexible membership',
    description: 'Advanced trading education covering forex, futures, crypto, and more. Get live webinars, trade ideas, and join a private community of serious traders.',
    features: [
      'Forex, futures & crypto strategies',
      'Advanced price action techniques',
      'Live webinars & continuing education',
      'Curated weekly trade ideas',
      'Private support group chat',
      '24/7 access to recorded sessions',
      'Step-by-step trade instruction',
      'Access to past and future webinars',
    ],
    cta: 'Join VIP →',
    href: '/vip-course',
    accent: '#289E54',
    highlight: true,
    image: '/course-vip.jpg',
  },
  {
    id: 'bundle',
    badge: 'BEST VALUE',
    badgeColor: '#289E54',
    badgeBg: '#e8f5e9',
    title: 'VIP Bundle',
    price: 'Monthly Subscription',
    priceNote: 'Everything included — cancel anytime',
    description: 'The complete Millionaire Traders Society experience. Get every resource, course, and community access bundled together for maximum results.',
    features: [
      'Everything in VIP Trading Course',
      '60-Day Trader Workshop included',
      'Full education vault access',
      'All live & recorded webinars',
      'Private community chat',
      'Curated trade ideas',
      'Priority support',
    ],
    cta: 'Get the Bundle →',
    href: '/bundle',
    accent: '#289E54',
    highlight: false,
    image: '/course-bundle.webp',
  },
]

export default function CoursesPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', color: '#fff', padding: '72px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label" style={{ color: '#0DBEF3' }}>Trading Education</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 16 }}>All Courses & Programs</h1>
          <p style={{ fontSize: 18, opacity: 0.8, maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.7 }}>Start free and scale up. Every program is designed to meet you where you are and take you where you want to go.</p>
          <TrackedLink href="/free-course" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }} tracking={{ event: 'cta_click', button_text: 'Start Free Today →', destination: '/free-course', page_section: 'hero' }}>Start Free Today →</TrackedLink>
        </div>
      </section>

      {/* Courses */}
      <section style={{ padding: '88px 0', background: 'var(--light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28 }} className="courses-two-grid">
            {COURSES.map(c => (
              <div key={c.id} id={c.id} style={{ background: '#fff', borderRadius: 24, padding: '36px 32px', border: c.highlight ? `2px solid ${c.accent}` : '1px solid #e2e8f0', position: 'relative', boxShadow: c.highlight ? `0 8px 32px ${c.accent}22` : 'none', display: 'flex', flexDirection: 'column' }}>
                {c.highlight && (
                  <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: c.accent, color: '#fff', fontSize: 11, fontWeight: 800, padding: '4px 16px', borderRadius: 50, letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    ★ Most Popular
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                  <Image src={c.image} alt={c.title} width={320} height={280} style={{ height: 260, width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <span style={{ background: c.badgeBg, color: c.badgeColor, fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 50, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{c.badge}</span>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: c.accent }}>{c.price}</div>
                    <div style={{ fontSize: 11, color: 'var(--gray)' }}>{c.priceNote}</div>
                  </div>
                </div>
                <h2 style={{ fontSize: 24, fontWeight: 900, color: 'var(--dark)', marginBottom: 12, lineHeight: 1.2 }}>{c.title}</h2>
                <p style={{ fontSize: 14, color: 'var(--gray)', lineHeight: 1.75, marginBottom: 24 }}>{c.description}</p>
                <ul style={{ listStyle: 'none', marginBottom: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 12px', flexGrow: 1 }}>
                  {c.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, fontSize: 13, color: 'var(--dark)' }}>
                      <span style={{ color: c.accent, fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                {c.id === 'vip' && (
                  <div style={{ background: '#fef9c3', border: '1px solid #fde047', borderRadius: 10, padding: '10px 14px', marginBottom: 16, fontSize: 13, fontWeight: 600, color: '#854d0e' }}>
                    ⚠️ Please take the Free Course prior to joining.
                  </div>
                )}
                {c.href.startsWith('http') ? (
                  <TrackedAnchor href={c.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: c.accent, color: '#fff', fontWeight: 700, fontSize: 15, padding: '14px 24px', borderRadius: 50, textDecoration: 'none', boxShadow: `0 4px 14px ${c.accent}33` }} tracking={{ event: 'cta_click', button_text: c.cta, destination: c.href, page_section: 'courses_section' }}>
                    {c.cta}
                  </TrackedAnchor>
                ) : (
                  <TrackedLink href={c.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: c.accent, color: '#fff', fontWeight: 700, fontSize: 15, padding: '14px 24px', borderRadius: 50, textDecoration: 'none', boxShadow: `0 4px 14px ${c.accent}33` }} tracking={{ event: 'cta_click', button_text: c.cta, destination: c.href, page_section: 'courses_section' }}>
                    {c.cta}
                  </TrackedLink>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section style={{ padding: '64px 0', background: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 12 }}>Not sure which course is <span>right for you?</span></h2>
          <p style={{ fontSize: 16, color: 'var(--gray)', marginBottom: 28, lineHeight: 1.7 }}>Start with the free course — it&apos;s the foundation for everything else. You can always upgrade when you&apos;re ready.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <TrackedLink href="/free-course" className="btn-primary" tracking={{ event: 'cta_click', button_text: 'Start Free →', destination: '/free-course', page_section: 'faq_strip' }}>Start Free →</TrackedLink>
            <TrackedLink href="/contact" className="btn-outline" tracking={{ event: 'cta_click', button_text: 'Ask a Question', destination: '/contact', page_section: 'faq_strip' }}>Ask a Question</TrackedLink>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .courses-two-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
