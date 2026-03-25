import Image from 'next/image'
import TrackedAnchor from '@/components/TrackedAnchor'
import TrackedLink from '@/components/TrackedLink'
import PageEventTracker from '@/components/PageEventTracker'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meet the Team',
  description: 'Meet the Millionaire Traders Society educators — a world-class team of traders and coaches dedicated to your success.',
  alternates: { canonical: 'https://millionairetraderssociety.com/team' },
}

const TEAM = [
  {
    name: 'Courtney',
    role: 'Lead Educator',
    image: '/Courtney.JPG',
    instagram: 'https://www.instagram.com/premium.chart.princess/',
    handle: '@premium.chart.princess',
    accent: '#0DBEF3',
  },
  {
    name: 'Chris',
    role: 'Polish Educator',
    image: '/Chris.JPG',
    instagram: 'https://www.instagram.com/anothertry/',
    handle: '@anothertry',
    accent: '#289E54',
  },
  {
    name: 'Gema',
    role: 'Spanish Educator',
    image: '/Gema.JPG',
    instagram: 'https://www.instagram.com/gema.stocks/',
    handle: '@gema.stocks',
    accent: '#0DBEF3',
  },
  {
    name: 'Forrest',
    role: 'Live Trading & Psychology',
    image: '/Forrest.JPG',
    instagram: 'https://www.instagram.com/forrestthetrader/',
    handle: '@forrestthetrader',
    accent: '#289E54',
  },
  {
    name: 'Majda',
    role: 'French Educator',
    image: '/Majda.JPG',
    instagram: 'https://www.instagram.com/majda.trades/',
    handle: '@majda.trades',
    accent: '#0DBEF3',
  },
]

export default function TeamPage() {
  return (
    <div>
      <PageEventTracker pageName="team" pageCategory="about" />
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', color: '#fff', padding: '80px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(13,190,243,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label" style={{ color: '#0DBEF3' }}>The Educators</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 16 }}>Meet the Team</h1>
          <p style={{ fontSize: 18, opacity: 0.8, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Real traders. Real educators. Every member of the MTS team has been in the markets — and is here to help you level up.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section style={{ padding: '88px 0', background: 'var(--light)' }}>
        <div className="container">
          {/* Group photo */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 64 }}>
            <Image
              src="/Teampic.jpg"
              alt="Millionaire Traders Society Team"
              width={900}
              height={600}
              style={{ width: '100%', maxWidth: 500, height: 'auto', borderRadius: 24, boxShadow: '0 8px 40px rgba(0,0,0,0.12)', display: 'block' }}
              priority
            />
          </div>
          <div className="team-grid">
            {TEAM.map(m => (
              <div key={m.name} style={{ background: '#fff', borderRadius: 24, overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden' }}>
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
                <div style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 900, color: 'var(--dark)', marginBottom: 4 }}>{m.name}</h2>
                  <p style={{ fontSize: 13, fontWeight: 700, color: m.accent, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 20 }}>{m.role}</p>
                  <div style={{ marginTop: 'auto' }}>
                    <TrackedAnchor
                      href={m.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: m.accent, color: '#fff', fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 50, textDecoration: 'none' }}
                      tracking={{ event: 'social_click', button_text: m.handle, destination: m.instagram, page_section: 'team' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      {m.handle}
                    </TrackedAnchor>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 0', background: '#fff', textAlign: 'center' }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, #0DBEF3, #289E54)', borderRadius: 24, padding: '52px 48px', color: '#fff' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 900, marginBottom: 14, letterSpacing: '-0.5px' }}>
              Learn from the best. Start today.
            </h2>
            <p style={{ fontSize: 17, opacity: 0.85, maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.7 }}>
              Our educators are active in the markets every day — and they&apos;re ready to trade alongside you.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <TrackedLink href="/free-course" style={{ background: '#fff', color: '#0DBEF3', fontWeight: 800, fontSize: 15, padding: '14px 32px', borderRadius: 50, textDecoration: 'none' }} tracking={{ event: 'cta_click', button_text: 'Start Free →', destination: '/free-course', page_section: 'team_cta' }}>Start Free →</TrackedLink>
              <TrackedLink href="/courses" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 50, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }} tracking={{ event: 'cta_click', button_text: 'View All Courses', destination: '/courses', page_section: 'team_cta' }}>View All Courses</TrackedLink>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .team-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 28px;
        }
        .team-grid > * { grid-column: span 2; }
        .team-grid > *:nth-child(4) { grid-column: 2 / 4; }
        .team-grid > *:nth-child(5) { grid-column: 4 / 6; }
        @media (max-width: 960px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
          .team-grid > * { grid-column: span 1; }
          .team-grid > *:nth-child(4) { grid-column: span 1; }
          .team-grid > *:nth-child(5) { grid-column: span 1; }
        }
        @media (max-width: 600px) {
          .team-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}
