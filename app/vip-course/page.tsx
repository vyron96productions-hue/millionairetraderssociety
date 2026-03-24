import Image from 'next/image'
import TrackedLink from '@/components/TrackedLink'
import TrackedAnchor from '@/components/TrackedAnchor'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VIP Trading Course',
  description: 'Advanced trading education covering forex, futures, crypto, and more. Live webinars, trade ideas, and a private community of serious traders.',
}

const MODULES = [
  { num: '01', title: 'Advanced Forex Strategies', body: 'Go beyond the basics. Master high-probability forex setups using institutional-level price action techniques.' },
  { num: '02', title: 'Futures Trading Mastery', body: 'Learn how to trade futures contracts with precision — entries, exits, and risk management for volatile markets.' },
  { num: '03', title: 'Crypto Market Analysis', body: 'Navigate the crypto markets with the same discipline as forex and futures. Identify trends and setups that work.' },
  { num: '04', title: 'Live Webinar Sessions', body: 'Join Coach Jess live each week for real-time trade analysis, Q&A, and walkthroughs of current market conditions.' },
  { num: '05', title: 'Curated Trade Ideas', body: 'Receive weekly trade ideas directly from Coach Jess — fully explained with entry, exit, and risk parameters.' },
  { num: '06', title: 'Private Community Access', body: 'Connect with thousands of serious traders in the private MTS support group. Learn, share, and grow together.' },
]

export default function VipCoursePage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', color: '#fff', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(13,190,243,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="two-col-grid" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#e0f7fe', borderRadius: 50, padding: '5px 14px', marginBottom: 20 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: '#0a9ecc' }}>★ MOST POPULAR</span>
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1px', marginBottom: 16 }}>
                VIP<br />
                <span style={{ background: 'linear-gradient(90deg, #0DBEF3, #289E54)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Trading Course</span>
              </h1>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 32 }}>
                Advanced trading education for serious traders. Live webinars, curated trade ideas, private community access, and on-demand lessons across forex, futures, and crypto — all in one monthly subscription.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
                <TrackedAnchor href="https://millionairetraderssociety.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 16, padding: '15px 32px' }} tracking={{ event: 'cta_click', button_text: 'Join VIP →', destination: 'https://millionairetraderssociety.com', page_section: 'hero' }}>
                  Join VIP →
                </TrackedAnchor>
                <TrackedLink href="/courses" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 700, fontSize: 15, padding: '15px 28px', borderRadius: 50, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }} tracking={{ event: 'cta_click', button_text: 'Compare All Courses', destination: '/courses', page_section: 'hero' }}>Compare All Courses</TrackedLink>
              </div>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                {['Monthly subscription', 'Cancel anytime', 'Instant access'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
                    <span style={{ color: '#289E54', fontWeight: 700 }}>✓</span> {f}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, padding: '36px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24, background: '#fff', borderRadius: 16, padding: '16px' }}>
                <Image src="/course-vip.jpg" alt="VIP Trading Course" width={480} height={480} style={{ height: 'auto', width: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 20 }}>What You&apos;ll Get</h3>
              {[
                { icon: '📈', text: 'Forex, futures & crypto strategies' },
                { icon: '🎥', text: 'Live weekly webinars with Coach Jess' },
                { icon: '💡', text: 'Curated weekly trade ideas' },
                { icon: '♾️', text: '24/7 access to all recorded sessions' },
                { icon: '👥', text: 'Private support group chat' },
                { icon: '📖', text: 'Step-by-step trade instruction' },
              ].map(i => (
                <div key={i.text} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                  <span style={{ fontSize: 20 }}>{i.icon}</span>
                  {i.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section style={{ padding: '88px 0', background: 'var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-label">What&apos;s Included</span>
            <h2 className="section-title">Everything in <span>VIP</span></h2>
          </div>
          <div className="three-col-grid">
            {MODULES.map(m => (
              <div key={m.num} className="card">
                <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--cyan)', marginBottom: 10, letterSpacing: '0.06em' }}>MODULE {m.num}</div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--dark)', marginBottom: 8 }}>{m.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--gray)', lineHeight: 1.7 }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade to Bundle */}
      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, #0DBEF3, #289E54)', borderRadius: 24, padding: '52px 48px', textAlign: 'center', color: '#fff' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 900, marginBottom: 14, letterSpacing: '-0.5px' }}>
              Want even more? Get the VIP Bundle.
            </h2>
            <p style={{ fontSize: 17, opacity: 0.85, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 }}>
              The VIP Bundle includes everything in VIP plus the 60-Day Workshop, Stock Options Bootcamp, and the full education vault.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <TrackedLink href="/bundle" style={{ background: '#fff', color: '#0DBEF3', fontWeight: 800, fontSize: 15, padding: '14px 32px', borderRadius: 50, textDecoration: 'none' }} tracking={{ event: 'cta_click', button_text: 'See VIP Bundle →', destination: '/bundle', page_section: 'upgrade_path' }}>See VIP Bundle →</TrackedLink>
              <TrackedLink href="/courses" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 50, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }} tracking={{ event: 'cta_click', button_text: 'View All Courses', destination: '/courses', page_section: 'upgrade_path' }}>View All Courses</TrackedLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
