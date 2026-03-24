import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Millionaire Traders Society team. Questions about courses, membership, or trading? We\'re here to help.',
}

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', color: '#fff', padding: '72px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label" style={{ color: '#0DBEF3' }}>Get In Touch</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 16 }}>Contact Us</h1>
          <p style={{ fontSize: 18, opacity: 0.8, maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>Have a question about our courses or membership? We&apos;re happy to help you find the right path.</p>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ padding: '88px 0', background: 'var(--light)' }}>
        <div className="container">
          <div className="two-col-grid" style={{ alignItems: 'start', gap: 56 }}>
            <div>
              <span className="section-label">Send a Message</span>
              <h2 className="section-title" style={{ marginBottom: 12 }}>We&apos;d Love to <span>Hear From You</span></h2>
              <p style={{ fontSize: 16, color: 'var(--gray)', marginBottom: 32, lineHeight: 1.7 }}>Fill out the form and our team will get back to you within 24 hours. Prefer social? Reach out on any of our platforms.</p>
              <ContactForm />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 100 }}>
              <div style={{ background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', borderRadius: 20, padding: '32px 28px', color: '#fff' }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8 }}>Follow Coach Jess</h3>
                <p style={{ fontSize: 13, opacity: 0.75, marginBottom: 20, lineHeight: 1.6 }}>Get free trading tips, market updates, and education daily.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { label: 'YouTube', handle: '@SayYes2Jess', href: 'https://www.youtube.com/@SayYes2Jess' },
                    { label: 'Instagram', handle: '@stock_bae', href: 'https://www.instagram.com/stock_bae/' },
                    { label: 'X / Twitter', handle: '@sayyes2jess_', href: 'https://x.com/sayyes2jess_' },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,0.08)', borderRadius: 10, padding: '11px 14px', color: '#fff', textDecoration: 'none', fontSize: 13 }}
                    >
                      <span style={{ fontWeight: 600 }}>{s.label}</span>
                      <span style={{ opacity: 0.75, color: '#0DBEF3' }}>{s.handle}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 20, padding: '28px 24px' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--dark)', marginBottom: 16 }}>What to Expect</h3>
                {[
                  'Response within 24 hours',
                  'No pushy sales — honest answers',
                  'Help finding the right course for you',
                  'Free course always available',
                  'Friendly, judgment-free team',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
                    <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>✓</span>
                    <span style={{ fontSize: 14, color: '#475569' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
