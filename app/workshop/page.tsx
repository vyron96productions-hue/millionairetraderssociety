import Image from 'next/image'
import TrackedLink from '@/components/TrackedLink'
import TrackedAnchor from '@/components/TrackedAnchor'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '60-Day Trader Workshop',
  description: '60 days of structured stock options education. Learn price action analysis, trade setup identification, and build confidence in your own analysis.',
  alternates: { canonical: 'https://millionairetraderssociety.com/workshop' },
}

const MODULES = [
  { num: '01', title: 'Stock Options Fundamentals', body: 'Understand calls, puts, strike prices, expiration, and how options are priced. The complete beginner foundation.' },
  { num: '02', title: 'Price Action Deep-Dive', body: 'Master reading raw price movement without relying on indicators. Learn what the chart is really telling you.' },
  { num: '03', title: 'High-Probability Setup Identification', body: 'Learn to spot the trade setups with the highest win-rate potential so you stop guessing and start executing.' },
  { num: '04', title: 'Chart Reading & Interpretation', body: 'Go beyond basic candlestick patterns — understand structure, momentum, and the story behind every move.' },
  { num: '05', title: 'Building Trade Confidence', body: 'The psychological side of trading. Learn how to trust your analysis, stay disciplined, and avoid emotional trades.' },
  { num: '06', title: 'Dedicated Support & Continuing Education', body: 'Get access to a dedicated support team and ongoing educational content that evolves with the markets.' },
]

export default function WorkshopPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', color: '#fff', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(40,158,84,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="two-col-grid" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#e8f5e9', borderRadius: 50, padding: '5px 14px', marginBottom: 20 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: '#289E54' }}>STOCK OPTIONS</span>
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1px', marginBottom: 16 }}>
                60-Day Trader<br />
                <span style={{ background: 'linear-gradient(90deg, #289E54, #0DBEF3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Workshop</span>
              </h1>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 32 }}>
                60 days of structured stock options education. Go from curious to confident with a program designed to give you the tools, mindset, and analysis skills to trade on your own terms.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
                <TrackedAnchor href="https://learnwithace.teachable.com/p/the-60-day-trader-workshop" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 16, padding: '15px 32px', background: '#289E54', boxShadow: '0 4px 20px rgba(40,158,84,0.4)' }} tracking={{ event: 'cta_click', button_text: 'Join the Workshop →', destination: 'https://learnwithace.teachable.com/p/the-60-day-trader-workshop', page_section: 'hero' }}>
                  Join the Workshop →
                </TrackedAnchor>
                <TrackedLink href="/courses" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 700, fontSize: 15, padding: '15px 28px', borderRadius: 50, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }} tracking={{ event: 'cta_click', button_text: 'Compare All Courses', destination: '/courses', page_section: 'hero' }}>Compare All Courses</TrackedLink>
              </div>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                {['One-time payment', 'Full 60-day program', 'Dedicated support team'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
                    <span style={{ color: '#289E54', fontWeight: 700 }}>✓</span> {f}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 24, padding: '36px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                <Image src="/course-60day.png" alt="60-Day Trader Workshop" width={480} height={480} style={{ height: 'auto', width: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--dark)', marginBottom: 20 }}>What You&apos;ll Get</h3>
              {[
                { icon: '📡', text: 'Live Trading & Trade Updates' },
                { icon: '🔍', text: 'Trade Reviews' },
                { icon: '💡', text: 'Trade Ideas' },
                { icon: '🤝', text: 'Live Support Access' },
                { icon: '👥', text: 'Engagement Encouraged' },
                { icon: '🎥', text: 'Weekly Webinars' },
              ].map(i => (
                <div key={i.text} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid #f1f5f9', fontSize: 14, color: 'var(--dark)' }}>
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
            <span className="section-label">60-Day Curriculum</span>
            <h2 className="section-title">What You&apos;ll <span>Learn</span></h2>
          </div>
          <div className="three-col-grid">
            {MODULES.map(m => (
              <div key={m.num} className="card">
                <div style={{ fontSize: 13, fontWeight: 800, color: '#289E54', marginBottom: 10, letterSpacing: '0.06em' }}>MODULE {m.num}</div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--dark)', marginBottom: 8 }}>{m.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--gray)', lineHeight: 1.7 }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle upsell */}
      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, #289E54, #0DBEF3)', borderRadius: 24, padding: '52px 48px', textAlign: 'center', color: '#fff' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 900, marginBottom: 14, letterSpacing: '-0.5px' }}>
              Get even more with the VIP Bundle
            </h2>
            <p style={{ fontSize: 17, opacity: 0.85, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 }}>
              The VIP Bundle includes this workshop plus the full VIP Trading Course and the entire education vault.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <TrackedLink href="/bundle" style={{ background: '#fff', color: '#289E54', fontWeight: 800, fontSize: 15, padding: '14px 32px', borderRadius: 50, textDecoration: 'none' }} tracking={{ event: 'cta_click', button_text: 'See VIP Bundle →', destination: '/bundle', page_section: 'upgrade_path' }}>See VIP Bundle →</TrackedLink>
              <TrackedLink href="/courses" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 50, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }} tracking={{ event: 'cta_click', button_text: 'View All Courses', destination: '/courses', page_section: 'upgrade_path' }}>View All Courses</TrackedLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
