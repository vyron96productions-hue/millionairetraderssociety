import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import TrackedAnchor from '@/components/TrackedAnchor'

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
                    { label: 'YouTube', handle: '@SayYes2Jess', href: 'https://www.youtube.com/@SayYes2Jess', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
                    { label: 'Instagram', handle: '@stock_bae', href: 'https://www.instagram.com/stock_bae/', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg> },
                    { label: 'X / Twitter', handle: '@sayyes2jess_', href: 'https://x.com/sayyes2jess_', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                  ].map(s => (
                    <TrackedAnchor key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.08)', borderRadius: 10, padding: '11px 14px', color: '#fff', textDecoration: 'none', fontSize: 13 }}
                      tracking={{ event: 'social_click', platform: s.label === 'X / Twitter' ? 'X' : s.label, destination: s.href, page_section: 'contact_socials' }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600 }}>{s.icon}{s.label}</span>
                      <span style={{ opacity: 0.75, color: '#0DBEF3' }}>{s.handle}</span>
                    </TrackedAnchor>
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
