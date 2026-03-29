import Image from 'next/image'
import Link from 'next/link'
import PageEventTracker from '@/components/PageEventTracker'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Millionaire Traders Society. Effective January 1, 2022.',
}

export default function TermsPage() {
  return (
    <div>
      <PageEventTracker pageName="terms" pageCategory="legal" />
      <section style={{ background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', color: '#fff', padding: '72px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label" style={{ color: '#0DBEF3' }}>Legal</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 16 }}>Terms &amp; Conditions</h1>
          <p style={{ fontSize: 16, opacity: 0.7, maxWidth: 520, margin: '0 auto' }}>Effective Date: January 1, 2022 &nbsp;·&nbsp; Last Updated: March 25, 2026</p>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: 800 }}>

          <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: 12, padding: '20px 24px', marginBottom: 40 }}>
            <p style={{ fontSize: 14, color: '#0369a1', lineHeight: 1.7 }}>
              This Terms and Conditions Agreement (&ldquo;Agreement&rdquo;) governs your access to and use of the services, content, and educational programs provided by Millionaire Traders Society, owned and operated by Jessica Ramos (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing, purchasing, or participating in any of our programs, courses, memberships, or services (collectively, the &ldquo;Program&rdquo;), you agree to be legally bound by this Agreement. If you do not agree, you must not use the Program.
            </p>
          </div>

          {[
            {
              title: '1. Eligibility',
              body: `You must be at least 18 years old or have parental/guardian consent to use the Program.`,
            },
            {
              title: '2. Services Provided',
              body: `Millionaire Traders Society provides educational content only, including but not limited to:

• Trading education
• Market analysis training
• Pre-recorded and live sessions
• Community access (e.g., Telegram)

We do not provide financial, investment, or legal services.`,
            },
            {
              title: '3. No Signals / No Managed Accounts',
              body: `The Company does not provide:

• Trade signals
• Copy trading
• Account management

All decisions are made solely by you.`,
            },
            {
              title: '4. Payment Terms',
              body: `Pricing
• Monthly Plans: Starting at $149/month (subject to change)
• Lifetime Access: Up to $5,500 (varies by package)

Billing
By enrolling, you authorize recurring charges to your payment method. Subscriptions renew every 28–30 days unless canceled.`,
            },
            {
              title: '5. No Refund Policy',
              body: `All purchases are final and non-refundable.

By purchasing, you acknowledge:
• Immediate access to digital content is granted
• No refunds will be issued for:
  – Zero participation
  – Dissatisfaction
  – Failure to cancel`,
            },
            {
              title: '6. Chargeback Policy',
              body: `You agree not to initiate chargebacks without first contacting the Company.

Improper chargebacks may result in:
• Immediate account termination
• Collections or legal action`,
            },
            {
              title: '7. Account Responsibility',
              body: `• One account per user
• Sharing login credentials is strictly prohibited
• Violations may result in termination without refund`,
            },
            {
              title: '8. Telegram & Third-Party Platforms',
              body: `We are not responsible for third-party platforms (e.g., Telegram).

Access to community features:
• Requires active membership
• May be revoked at any time`,
            },
            {
              title: '9. Intellectual Property',
              body: `All content is owned by the Company and protected by law. You are granted a limited, non-transferable license for personal use only.

You may NOT:
• Copy
• Reproduce
• Distribute
• Teach or resell content

Violations will result in legal action.`,
            },
            {
              title: '10. Confidentiality',
              body: `You agree not to share:
• Strategies
• Materials
• Discussions

Any breach may result in:
• Legal action
• Injunctive relief`,
            },
            {
              title: '11. Non-Compete & Non-Solicitation',
              body: `During participation and for 12 months after, you agree not to:
• Use Company materials for commercial purposes
• Solicit students or members into competing programs

This does not restrict personal trading.`,
            },
            {
              title: '12. Termination',
              body: `We reserve the right to terminate access without notice for:
• Misconduct
• IP violations
• Abuse of the platform`,
            },
            {
              title: '13. Limitation of Liability',
              body: `To the fullest extent permitted by law, the Company shall not be liable for:
• Financial losses
• Trading losses
• Indirect or consequential damages

Maximum liability = amount paid by you.`,
            },
            {
              title: '14. Force Majeure',
              body: `We are not liable for delays caused by:
• Internet outages
• Platform failures
• Acts of God
• Government actions`,
            },
            {
              title: '15. Governing Law',
              body: `This Agreement is governed by the laws of the State of Florida. All disputes will be resolved in Florida courts.`,
            },
            {
              title: '16. Modifications',
              body: `We may update this Agreement at any time. Continued use constitutes acceptance of updated terms.`,
            },
            {
              title: '17. Acknowledgment',
              body: `By purchasing or participating, you confirm that you have read, understand, and agree to all terms.`,
            },
          ].map(s => (
            <div key={s.title} style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--dark)', marginBottom: 12 }}>{s.title}</h2>
              <div style={{ fontSize: 15, color: '#475569', lineHeight: 1.85, whiteSpace: 'pre-line' }}>{s.body}</div>
            </div>
          ))}

          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: 32, marginTop: 16 }}>
            <p style={{ fontSize: 14, color: '#94a3b8', marginBottom: 24 }}>Effective Date: January 1, 2022 · Last Updated: March 25, 2026</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/privacy" className="btn-outline" style={{ fontSize: 14, padding: '10px 20px' }}>Privacy Policy</Link>
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
