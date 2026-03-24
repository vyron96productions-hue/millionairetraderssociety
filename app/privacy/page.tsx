import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Millionaire Traders Society. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', color: '#fff', padding: '72px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label" style={{ color: '#0DBEF3' }}>Legal</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 16 }}>Privacy Policy</h1>
          <p style={{ fontSize: 16, opacity: 0.7, maxWidth: 480, margin: '0 auto' }}>Your privacy matters to us. This policy explains how Millionaire Traders Society collects and uses your information.</p>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: 800 }}>

          {[
            {
              title: '1. Information We Collect',
              body: `We collect information you provide directly to us, including:

• Name and email address when you sign up for a course or our mailing list
• Billing and payment information when you purchase a course or membership
• Communications you send us through our contact form or email
• Profile information if you create an account on our platform

We also automatically collect certain technical information when you visit our website, including IP address, browser type, pages visited, time spent on pages, and referring URLs.`,
            },
            {
              title: '2. How We Use Your Information',
              body: `We use the information we collect to:

• Provide, maintain, and improve our courses and services
• Process transactions and send related information (confirmations, invoices, updates)
• Send promotional communications about courses, webinars, and trading education (you may opt out at any time)
• Respond to your questions and provide customer support
• Monitor and analyze usage patterns to improve our platform
• Comply with legal obligations`,
            },
            {
              title: '3. Sharing of Information',
              body: `We do not sell, trade, or rent your personal information to third parties. We may share your information with:

• Service providers who assist us in operating our website and delivering our services (e.g., payment processors, email delivery services)
• Analytics providers to help us understand how our website is used
• Law enforcement or government agencies when required by law

All third-party service providers are contractually required to protect your information and may only use it to perform services on our behalf.`,
            },
            {
              title: '4. Cookies and Tracking',
              body: `We use cookies and similar tracking technologies to improve your experience on our website. Cookies help us remember your preferences, understand how you use our site, and deliver relevant content.

You can control cookies through your browser settings. However, disabling cookies may affect the functionality of certain features on our website.

We may also use third-party analytics tools (such as Google Analytics) to collect information about website traffic and usage patterns.`,
            },
            {
              title: '5. Data Security',
              body: `We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption (SSL/TLS) to protect data transmitted to and from our website.

However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.`,
            },
            {
              title: '6. Data Retention',
              body: `We retain your personal information for as long as your account is active or as needed to provide you with our services. We will also retain your information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.

You may request deletion of your personal information at any time by contacting us at the address below.`,
            },
            {
              title: '7. Your Rights',
              body: `Depending on your location, you may have the right to:

• Access the personal information we hold about you
• Correct inaccurate or incomplete information
• Request deletion of your personal information
• Opt out of marketing communications at any time
• Data portability (receive your data in a portable format)

To exercise any of these rights, please contact us using the information provided below.`,
            },
            {
              title: '8. Children\'s Privacy',
              body: `Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately and we will take steps to delete it.`,
            },
            {
              title: '9. Changes to This Policy',
              body: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date below. Your continued use of our services after any changes constitutes your acceptance of the updated policy.`,
            },
            {
              title: '10. Contact Us',
              body: `If you have any questions about this Privacy Policy or our privacy practices, please contact us at:\n\nMillionaire Traders Society\nEmail: info@millionairetraderssociety.com\nWebsite: millionairetraderssociety.com`,
            },
          ].map(s => (
            <div key={s.title} style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--dark)', marginBottom: 12 }}>{s.title}</h2>
              <div style={{ fontSize: 15, color: '#475569', lineHeight: 1.85, whiteSpace: 'pre-line' }}>{s.body}</div>
            </div>
          ))}

          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: 32, marginTop: 16 }}>
            <p style={{ fontSize: 14, color: '#94a3b8', marginBottom: 24 }}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/terms" className="btn-outline" style={{ fontSize: 14, padding: '10px 20px' }}>Terms of Service</Link>
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
