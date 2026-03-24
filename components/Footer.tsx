'use client'
import Link from 'next/link'
import Image from 'next/image'
import { pushDataLayer } from '@/lib/gtm'

const COURSES = [
  { label: 'Free Beginners Course', href: '/free-course' },
  { label: 'VIP Trading Course', href: '/courses#vip' },
  { label: '60-Day Workshop', href: '/courses#workshop' },
  { label: 'VIP Bundle', href: '/courses#bundle' },
]

const SOCIAL = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@SayYes2Jess',
    hoverColor: '#dc2626',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/stock_bae/',
    hoverColor: '#db2777',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/sayyes2jess_',
    hoverColor: '#0DBEF3',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0D1117', color: '#fff', marginTop: 0 }}>
      <div className="container" style={{ padding: '64px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <Image src="/mts-logo.png" alt="Millionaire Traders Society" width={180} height={48} style={{ height: 40, width: 'auto', filter: 'brightness(0) invert(1)' }} />
            </div>
            <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7, marginBottom: 20, maxWidth: 280 }}>
              Empowering everyday people to achieve financial freedom through proven trading education. Over 17,000 students and counting.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {SOCIAL.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  onClick={() => pushDataLayer({ event: 'social_click', platform: s.label, destination: s.href, page_section: 'footer' })}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.background = s.hoverColor
                    el.style.color = '#fff'
                    el.style.transform = 'translateY(-4px)'
                    el.style.boxShadow = `0 8px 20px ${s.hoverColor}55`
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.background = 'rgba(255,255,255,0.08)'
                    el.style.color = '#94a3b8'
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = 'none'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Courses</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {COURSES.map(c => (
                <Link key={c.href} href={c.href} style={{ fontSize: 14, color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}
                  onClick={() => pushDataLayer({ event: 'nav_click', link_text: c.label, destination: c.href, page_section: 'footer_courses' })}
                  onMouseEnter={e => (e.currentTarget.style.color = '#0DBEF3')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
                >{c.label}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'About Coach Jess', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ fontSize: 14, color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}
                  onClick={() => pushDataLayer({ event: 'nav_click', link_text: l.label, destination: l.href, page_section: 'footer_company' })}
                  onMouseEnter={e => (e.currentTarget.style.color = '#0DBEF3')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Get Started</h4>
            <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 16, lineHeight: 1.6 }}>Start with our FREE beginner course — no credit card needed.</p>
            <Link href="/free-course" className="btn-primary" style={{ fontSize: 13, padding: '10px 20px' }}
              onClick={() => pushDataLayer({ event: 'cta_click', button_text: 'Get Free Course', destination: '/free-course', page_section: 'footer_cta' })}
            >Get Free Course →</Link>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: '#475569' }}>© {new Date().getFullYear()} Millionaire Traders Society. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 20 }}>
            {[{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms of Service', href: '/terms' }, { label: 'Disclaimer', href: '/disclaimer' }].map(l => (
              <Link key={l.href} href={l.href} style={{ fontSize: 12, color: '#475569', textDecoration: 'none' }}
                onClick={() => pushDataLayer({ event: 'nav_click', link_text: l.label, destination: l.href, page_section: 'footer_legal' })}
              >{l.label}</Link>
            ))}
          </div>
          <p style={{ fontSize: 12, color: '#334155' }}>Engineered By <a href="https://verdictiq.org" target="_blank" rel="noopener noreferrer" style={{ color: '#475569', textDecoration: 'none' }} onClick={() => pushDataLayer({ event: 'nav_click', link_text: 'VerdictIQ', destination: 'https://verdictiq.org', page_section: 'footer_credit' })}>VerdictIQ</a></p>
        </div>

        <p style={{ fontSize: 11, color: '#334155', lineHeight: 1.6, textAlign: 'center', marginTop: 16 }}>
          Trading involves substantial risk of loss. Past results are not indicative of future performance. All information provided is for educational purposes only and should not be construed as financial advice.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
