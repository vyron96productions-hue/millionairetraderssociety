import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Millionaire Traders Society. Please read these terms carefully before using our courses and services.',
}

export default function TermsPage() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', color: '#fff', padding: '72px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label" style={{ color: '#0DBEF3' }}>Legal</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 16 }}>Terms of Service</h1>
          <p style={{ fontSize: 16, opacity: 0.7, maxWidth: 480, margin: '0 auto' }}>By accessing or using Millionaire Traders Society, you agree to be bound by these Terms of Service.</p>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: 800 }}>

          <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: 12, padding: '20px 24px', marginBottom: 40 }}>
            <p style={{ fontSize: 14, color: '#0369a1', lineHeight: 1.7 }}>
              <strong>Please read these Terms carefully.</strong> By accessing or using millionairetraderssociety.com or purchasing any of our courses or memberships, you agree to be legally bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </div>

          {[
            {
              title: '1. Acceptance of Terms',
              body: `By accessing or using Millionaire Traders Society ("MTS", "we", "us", or "our") website, courses, or services, you confirm that you are at least 18 years of age, have read and understood these Terms, and agree to be bound by them.

These Terms constitute a legally binding agreement between you and Millionaire Traders Society. We reserve the right to update these Terms at any time. Continued use of our services after changes constitutes acceptance of the revised Terms.`,
            },
            {
              title: '2. Services and Courses',
              body: `Millionaire Traders Society provides trading education content including online courses, webinars, community access, trade ideas, and related educational materials. All content is provided for educational purposes only and does not constitute financial advice.

Course content, pricing, and availability are subject to change at any time without notice. We reserve the right to modify, suspend, or discontinue any service at our discretion.`,
            },
            {
              title: '3. Payments and Refunds',
              body: `All course and membership purchases are processed securely through our payment provider. By purchasing a course or membership, you authorize us to charge your payment method for the stated amount.

Subscription memberships (VIP Course, VIP Bundle) are billed monthly and may be cancelled at any time. Cancellation takes effect at the end of the current billing period — you will retain access until then.

One-time course purchases (including the 60-Day Trader Workshop) are generally non-refundable once course materials have been accessed. If you have not accessed course materials, please contact us within 7 days of purchase to discuss a refund.`,
            },
            {
              title: '4. Intellectual Property',
              body: `All content published by Millionaire Traders Society — including course videos, workbooks, webinar recordings, written materials, graphics, logos, and trade ideas — is the exclusive intellectual property of Millionaire Traders Society and is protected by copyright law.

You are granted a limited, non-exclusive, non-transferable license to access and use the content for your personal, non-commercial educational purposes only.

You may not reproduce, distribute, transmit, display, sell, license, or create derivative works from any MTS content without our prior written consent. Sharing course access credentials or course materials with non-members is strictly prohibited and may result in account termination without refund.`,
            },
            {
              title: '5. Trading Risk Disclaimer',
              body: `Trading financial instruments involves substantial risk of loss. All content, courses, trade ideas, and information provided by MTS is for educational purposes only and does not constitute financial advice.

Past results of Coach Jessica Ramos or any MTS student are not indicative of future results. You trade at your own risk. Please read our full Trading Risk Disclaimer for complete risk disclosure before purchasing any course or acting on any educational content.`,
            },
            {
              title: '6. Prohibited Conduct',
              body: `When using our services, you agree not to:

• Share your account access with others or allow multiple people to use a single account
• Reproduce, copy, or distribute any course materials
• Use our services for any unlawful purpose
• Attempt to reverse engineer or gain unauthorized access to our platform
• Post or transmit any harmful, offensive, or misleading content in our community
• Impersonate Coach Jessica Ramos, MTS staff, or other members
• Use automated tools to scrape or collect our content`,
            },
            {
              title: '7. Limitation of Liability',
              body: `To the fullest extent permitted by law, Millionaire Traders Society, its owners, officers, employees, coaches, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or any trading decisions you make based on our educational content.

Our total liability to you for any claims arising from your use of our services shall not exceed the amount you paid us in the 12 months preceding the claim.`,
            },
            {
              title: '8. Indemnification',
              body: `You agree to indemnify and hold harmless Millionaire Traders Society and its affiliates from any claims, losses, damages, liabilities, and expenses (including legal fees) arising from your use of our services, violation of these Terms, or any trading losses you incur.`,
            },
            {
              title: '9. Governing Law',
              body: `These Terms shall be governed by and construed in accordance with the laws of the United States. Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in accordance with applicable arbitration rules.`,
            },
            {
              title: '10. Contact Information',
              body: `If you have any questions about these Terms of Service, please contact us at:\n\nMillionaire Traders Society\nEmail: info@millionairetraderssociety.com\nWebsite: millionairetraderssociety.com`,
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
