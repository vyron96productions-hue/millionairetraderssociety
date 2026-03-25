import Image from 'next/image'
import TrackedLink from '@/components/TrackedLink'
import TrackedAnchor from '@/components/TrackedAnchor'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VIP Bundle — Everything Included',
  description: 'The complete Millionaire Traders Society experience. Get every resource, course, and community access bundled together for maximum results.',
  alternates: { canonical: 'https://learnwithace.teachable.com/p/vip-stock-options/bundle' },
}

const INCLUDES = [
  { icon: '📈', title: 'VIP Trading Course', body: 'Advanced strategies across forex, futures, and crypto with live webinars and trade ideas.' },
  { icon: '📊', title: '60-Day Trader Workshop', body: '60 days of structured stock options education from fundamentals to high-probability setups.' },
  { icon: '🗄️', title: 'Full Education Vault', body: 'Access to every past webinar, workshop recording, and course material ever produced by MTS.' },
  { icon: '🎥', title: 'All Live & Recorded Webinars', body: 'Every live session Coach Jess hosts — past and future — is yours with the bundle.' },
  { icon: '👥', title: 'Private Community Chat', body: 'Connect with thousands of serious MTS traders in the exclusive private group.' },
  { icon: '💡', title: 'Curated Trade Ideas', body: 'Weekly trade ideas from Coach Jess with full analysis — entries, exits, and risk management.' },
  { icon: '⚡', title: 'Priority Support', body: 'Get your questions answered first. Priority access to the MTS support team.' },
]

export default function BundlePage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', color: '#fff', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(40,158,84,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="two-col-grid" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#e8f5e9', borderRadius: 50, padding: '5px 14px', marginBottom: 20 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: '#289E54' }}>★ BEST VALUE</span>
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1px', marginBottom: 16 }}>
                VIP<br />
                <span style={{ background: 'linear-gradient(90deg, #289E54, #0DBEF3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Bundle</span>
              </h1>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 32 }}>
                The complete Millionaire Traders Society experience — every course, every webinar, every resource, and the entire community. One subscription. Everything included.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
                <TrackedAnchor href="https://learnwithace.teachable.com/p/vip-stock-options" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 16, padding: '15px 32px', background: '#289E54', boxShadow: '0 4px 20px rgba(40,158,84,0.4)' }} tracking={{ event: 'cta_click', button_text: 'Get the Bundle →', destination: 'https://learnwithace.teachable.com/p/vip-stock-options', page_section: 'hero' }}>
                  Get the Bundle →
                </TrackedAnchor>
                <TrackedLink href="/courses" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 700, fontSize: 15, padding: '15px 28px', borderRadius: 50, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }} tracking={{ event: 'cta_click', button_text: 'Compare All Courses', destination: '/courses', page_section: 'hero' }}>Compare All Courses</TrackedLink>
              </div>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                {['Monthly subscription', 'Cancel anytime', 'Everything included'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
                    <span style={{ color: '#289E54', fontWeight: 700 }}>✓</span> {f}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 24, padding: '36px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                <Image src="/course-bundle.webp" alt="VIP Bundle" width={480} height={480} style={{ height: 'auto', width: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--dark)', marginBottom: 20 }}>Everything Included</h3>
              {[
                { icon: '📈', text: 'VIP Trading Course' },
                { icon: '📊', text: '60-Day Trader Workshop' },
                { icon: '🗄️', text: 'Full education vault access' },
                { icon: '👥', text: 'Private community chat' },
                { icon: '⚡', text: 'Priority support' },
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

      {/* What's Included */}
      <section style={{ padding: '88px 0', background: 'var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-label">Complete Access</span>
            <h2 className="section-title">Everything You <span>Get</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="bundle-grid">
            {INCLUDES.map(item => (
              <div key={item.title} className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--dark)', marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--gray)', lineHeight: 1.65 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, #289E54, #0DBEF3)', borderRadius: 24, padding: '52px 48px', textAlign: 'center', color: '#fff' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 900, marginBottom: 14, letterSpacing: '-0.5px' }}>
              Ready for everything MTS has to offer?
            </h2>
            <p style={{ fontSize: 17, opacity: 0.85, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 }}>
              Start with the free course if you&apos;re new — or jump straight into the bundle and get the full experience from day one.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <TrackedAnchor href="https://learnwithace.teachable.com/p/vip-stock-options" target="_blank" rel="noopener noreferrer" style={{ background: '#fff', color: '#289E54', fontWeight: 800, fontSize: 15, padding: '14px 32px', borderRadius: 50, textDecoration: 'none' }} tracking={{ event: 'cta_click', button_text: 'Get the Bundle →', destination: 'https://learnwithace.teachable.com/p/vip-stock-options', page_section: 'cta_banner' }}>Get the Bundle →</TrackedAnchor>
              <TrackedLink href="/free-course" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 50, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }} tracking={{ event: 'cta_click', button_text: 'Start Free First', destination: '/free-course', page_section: 'cta_banner' }}>Start Free First</TrackedLink>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 700px) {
          .bundle-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
