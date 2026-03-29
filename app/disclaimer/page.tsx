import Image from 'next/image'
import Link from 'next/link'
import PageEventTracker from '@/components/PageEventTracker'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer and Risk Disclosure for Millionaire Traders Society.',
}

export default function DisclaimerPage() {
  return (
    <div>
      <PageEventTracker pageName="disclaimer" pageCategory="legal" />
      <section style={{ background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', color: '#fff', padding: '72px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label" style={{ color: '#0DBEF3' }}>Important Notice</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 16 }}>Disclaimer</h1>
          <p style={{ fontSize: 16, opacity: 0.7, maxWidth: 480, margin: '0 auto' }}>Please read this disclaimer carefully before using any content, courses, or information provided by Millionaire Traders Society.</p>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: 800 }}>

          <div style={{ background: '#fef2f2', border: '2px solid #fecaca', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <span style={{ fontSize: 28, flexShrink: 0 }}>⚠️</span>
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: '#dc2626', marginBottom: 8 }}>High Risk Warning</h2>
                <p style={{ fontSize: 15, color: '#7f1d1d', lineHeight: 1.7 }}>
                  Trading involves substantial risk. You may lose all or more of your investment. Past performance does not guarantee future results. You accept full responsibility for your trades, your decisions, and your outcomes.
                </p>
              </div>
            </div>
          </div>

          {[
            {
              title: 'Disclaimer',
              body: `Millionaire Traders Society provides educational services only.

We are NOT:
• Financial advisors
• Investment advisors
• Brokers`,
            },
            {
              title: 'Risk Disclosure',
              body: `Trading involves substantial risk.

• You may lose all or more of your investment
• Past performance does not guarantee future results
• You accept full responsibility for your trades, your decisions, and your outcomes`,
            },
            {
              title: 'No Guarantees',
              body: `We do not guarantee:
• Profits
• Income
• Trading success`,
            },
            {
              title: 'Educational Purpose Only',
              body: `All content is for informational and educational purposes only.

Nothing should be interpreted as:
• Financial advice
• Investment recommendations`,
            },
            {
              title: 'Personal Responsibility',
              body: `You are solely responsible for:
• Conducting your own research
• Consulting licensed professionals`,
            },
            {
              title: 'Testimonial Disclaimer',
              body: `Results shared by students:
• Are not typical
• Do not guarantee future results`,
            },
          ].map(s => (
            <div key={s.title} style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--dark)', marginBottom: 12 }}>{s.title}</h2>
              <div style={{ fontSize: 15, color: '#475569', lineHeight: 1.85, whiteSpace: 'pre-line' }}>{s.body}</div>
            </div>
          ))}

          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: 32, marginTop: 16 }}>
            <p style={{ fontSize: 14, color: '#94a3b8', marginBottom: 24 }}>Last updated: March 25, 2026</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/terms" className="btn-outline" style={{ fontSize: 14, padding: '10px 20px' }}>Terms &amp; Conditions</Link>
              <Link href="/privacy" className="btn-outline" style={{ fontSize: 14, padding: '10px 20px' }}>Privacy Policy</Link>
              <Link href="/contact" className="btn-primary" style={{ fontSize: 14, padding: '10px 20px' }}>Questions? Contact Us</Link>
            </div>
          </div>

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 12, color: '#94a3b8' }}>Engineered By</span>
            <a href="https://verdictiq.org" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Image src="/verdictiq-logo.png" alt="VerdictIQ" width={100} height={34} style={{ height: 28, width: 'auto' }} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
