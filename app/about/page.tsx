import Link from 'next/link'
import Image from 'next/image'
import TrackedLink from '@/components/TrackedLink'
import TrackedAnchor from '@/components/TrackedAnchor'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Coach Jessica Ramos',
  description: 'Meet Coach Jessica Ramos, founder of Millionaire Traders Society and trading educator to 17,000+ students worldwide.',
}

const MILESTONES = [
  { year: '2020', title: 'MTS Founded', body: 'Jessica Ramos launches Millionaire Traders Society with a mission to democratize trading education.' },
  { year: '2021', title: '5,000 Students', body: 'The community grows rapidly as word spreads about Coach Jess\'s clear, results-focused teaching style.' },
  { year: '2022', title: 'VIP Program Launch', body: 'The VIP Trading Course launches, delivering live webinars, trade ideas, and advanced strategies.' },
  { year: '2023', title: '10,000+ Students', body: 'MTS crosses 10,000 students, with graduates reporting consistent 5-figure monthly returns.' },
  { year: '2024', title: '17,000+ Students', body: 'The community continues to grow, with the VIP Bundle and 60-Day Workshop becoming flagship programs.' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', color: '#fff', padding: '48px 0 52px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label" style={{ color: '#0DBEF3' }}>The Coach Behind the Community</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 16 }}>Meet Coach Jessica Ramos</h1>
          <p style={{ fontSize: 18, opacity: 0.8, maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>Founder of Millionaire Traders Society and trading educator to over 17,000 students across the globe.</p>
        </div>
      </section>

      {/* Bio + Timeline */}
      <section style={{ padding: '52px 0 72px', background: 'var(--light)' }}>
        <div className="container">
          <div className="two-col-grid" style={{ alignItems: 'flex-start' }}>

            {/* LEFT: Story + Timeline */}
            <div>
              <span className="section-label">Her Story</span>
              <h2 className="section-title">From Trader to <span>Educator</span></h2>
              <p style={{ fontSize: 16, color: 'var(--gray)', lineHeight: 1.85, marginBottom: 20 }}>
                Coach Jessica Ramos didn&apos;t start out as a millionaire. She started as a curious, determined person who believed that the financial markets held the key to true freedom — and she was right.
              </p>
              <p style={{ fontSize: 16, color: 'var(--gray)', lineHeight: 1.85, marginBottom: 20 }}>
                After years of mastering futures, forex, crypto, and stock options on her own, Jess realized something important: most trading education was either too expensive, too complex, or too dishonest. She set out to change that.
              </p>
              <p style={{ fontSize: 16, color: 'var(--gray)', lineHeight: 1.85, marginBottom: 32 }}>
                Today, Millionaire Traders Society is one of the most trusted trading education communities online, with students from age 8 to 99 learning to trade profitably — on their own schedule, in their own way.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
                <TrackedLink href="/courses" className="btn-primary" tracking={{ event: 'cta_click', button_text: 'Start Learning →', destination: '/courses', page_section: 'bio_section' }}>Start Learning →</TrackedLink>
                <TrackedAnchor href="https://www.youtube.com/@SayYes2Jess" target="_blank" rel="noopener noreferrer" className="btn-outline" tracking={{ event: 'social_click', platform: 'YouTube', destination: 'https://www.youtube.com/@SayYes2Jess', page_section: 'bio_section' }}>YouTube Channel</TrackedAnchor>
              </div>

              {/* Timeline directly under story */}
              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: 36 }}>
                <span className="section-label">The Journey</span>
                <h2 className="section-title" style={{ fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 32 }}>MTS <span>Milestones</span></h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {MILESTONES.map((m, i) => (
                    <div key={m.year} style={{ display: 'flex', gap: 20, position: 'relative' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                        <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #0DBEF3, #289E54)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                          <span style={{ color: '#fff', fontWeight: 900, fontSize: 11 }}>{m.year}</span>
                        </div>
                        {i < MILESTONES.length - 1 && (
                          <div style={{ width: 2, flexGrow: 1, background: '#e2e8f0', minHeight: 28 }} />
                        )}
                      </div>
                      <div style={{ paddingBottom: 28 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--dark)', marginBottom: 4 }}>{m.title}</h3>
                        <p style={{ fontSize: 13, color: 'var(--gray)', lineHeight: 1.7 }}>{m.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Photo + Stats + Socials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ borderRadius: 24, overflow: 'hidden' }}>
                <Image src="/coach-jess.png" alt="Coach Jessica Ramos" width={600} height={700} style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ background: 'linear-gradient(135deg, #0DBEF3, #289E54)', borderRadius: 20, padding: '36px 32px', color: '#fff' }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 24 }}>By the Numbers</h3>
                {[
                  { label: 'Students Taught', value: '17,000+' },
                  { label: 'Years of Education', value: '3+' },
                  { label: 'Markets Covered', value: '5+' },
                  { label: 'Active Community Members', value: 'Thousands' },
                ].map((s, i) => (
                  <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 14, marginBottom: i < 3 ? 14 : 0, borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                    <span style={{ fontSize: 14, opacity: 0.8 }}>{s.label}</span>
                    <span style={{ fontSize: 15, fontWeight: 800 }}>{s.value}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 20, padding: '28px 24px' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--dark)', marginBottom: 16 }}>Follow Coach Jess</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { label: 'YouTube', handle: '@SayYes2Jess', href: 'https://www.youtube.com/@SayYes2Jess', bg: '#dc2626', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
                    { label: 'Instagram', handle: '@stock_bae', href: 'https://www.instagram.com/stock_bae/', bg: '#db2777', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg> },
                    { label: 'X / Twitter', handle: '@sayyes2jess_', href: 'https://x.com/sayyes2jess_', bg: '#0D1117', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                  ].map(s => (
                    <TrackedAnchor key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 12, background: '#f8fafc', border: '1px solid #e2e8f0', textDecoration: 'none', transition: 'background 0.2s' }}
                      tracking={{ event: 'social_click', platform: s.label === 'X / Twitter' ? 'X' : s.label, destination: s.href, page_section: 'about_socials' }}
                    >
                      <div style={{ width: 36, height: 36, borderRadius: 8, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>{s.icon}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)' }}>{s.label}</div>
                        <div style={{ fontSize: 12, color: 'var(--gray)' }}>{s.handle}</div>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </TrackedAnchor>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 0', background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900, color: '#fff', marginBottom: 14 }}>
            Ready to start your <span style={{ color: '#0DBEF3' }}>trading journey?</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', marginBottom: 28, maxWidth: 440, margin: '0 auto 28px', lineHeight: 1.7 }}>
            Begin with the free course — no experience, no credit card needed.
          </p>
          <TrackedLink href="/free-course" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }} tracking={{ event: 'cta_click', button_text: 'Get Free Course →', destination: '/free-course', page_section: 'cta_banner' }}>Get Free Course →</TrackedLink>
        </div>
      </section>
    </div>
  )
}
