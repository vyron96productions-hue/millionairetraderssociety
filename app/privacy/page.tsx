import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Millionaire Traders Society. Effective March 25, 2026.',
}

export default function PrivacyPage() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', color: '#fff', padding: '72px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label" style={{ color: '#0DBEF3' }}>Legal</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 16 }}>Privacy Policy</h1>
          <p style={{ fontSize: 16, opacity: 0.7, maxWidth: 480, margin: '0 auto' }}>Effective Date: March 25, 2026</p>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: 800 }}>

          <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: 12, padding: '20px 24px', marginBottom: 40 }}>
            <p style={{ fontSize: 14, color: '#0369a1', lineHeight: 1.7 }}>
              Millionaire Traders Society respects your privacy. This policy explains how we collect, use, and protect your personal information.
            </p>
          </div>

          {[
            {
              title: '1. Information We Collect',
              body: `We may collect:
• Name
• Email
• Payment information
• Usage data`,
            },
            {
              title: '2. How We Use Information',
              body: `We use your data to:
• Provide services
• Process payments
• Improve user experience
• Send updates`,
            },
            {
              title: '3. Payment Security',
              body: `Payments are processed via secure third-party providers. We do not store full payment details.`,
            },
            {
              title: '4. Sharing Information',
              body: `We do NOT sell your personal data.

We may share data with:
• Payment processors
• Service providers`,
            },
            {
              title: '5. Cookies',
              body: `We may use cookies to:
• Improve functionality
• Analyze traffic`,
            },
            {
              title: '6. Data Security',
              body: `We implement reasonable measures to protect your data. However, no system is 100% secure.`,
            },
            {
              title: '7. Your Rights',
              body: `You may request:
• Access to your data
• Deletion of your data`,
            },
            {
              title: '8. Third-Party Links',
              body: `We are not responsible for external websites.`,
            },
            {
              title: '9. Children\'s Privacy',
              body: `Our services are not intended for children under 13.`,
            },
            {
              title: '10. Changes',
              body: `We may update this policy at any time. Continued use constitutes acceptance of the updated policy.`,
            },
            {
              title: '11. Contact',
              body: `For questions, contact:\n\nJessica@sayyes2jess.com`,
            },
          ].map(s => (
            <div key={s.title} style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--dark)', marginBottom: 12 }}>{s.title}</h2>
              <div style={{ fontSize: 15, color: '#475569', lineHeight: 1.85, whiteSpace: 'pre-line' }}>{s.body}</div>
            </div>
          ))}

          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: 32, marginTop: 16 }}>
            <p style={{ fontSize: 14, color: '#94a3b8', marginBottom: 24 }}>Effective Date: March 25, 2026</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/terms" className="btn-outline" style={{ fontSize: 14, padding: '10px 20px' }}>Terms &amp; Conditions</Link>
              <Link href="/disclaimer" className="btn-outline" style={{ fontSize: 14, padding: '10px 20px' }}>Disclaimer</Link>
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
