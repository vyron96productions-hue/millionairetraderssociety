import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Coach Jessica Ramos',
  description: 'Meet Coach Jessica Ramos, founder of Millionaire Traders Society and trading educator to 17,000+ students worldwide.',
}

const MILESTONES = [
  { year: '2020', title: 'MTS Founded', body: 'Jessica Ramos launches Millionaire Traders Society with a mission to democratize trading education.' },
  { year: '2021', title: '5,000 Students', body: 'The community grows rapidly as word spreads about Coach Jess\'s clear, results-focused teaching style.' },
  { year: '2022', title: 'VIP Program Launch', body: 'The VIP Trading Course launches, delivering live webinars, trade ideas, and advanced strategies.' },
  { year: '2023', title: '10,000+ Students', body: 'MTS crosses 10,000 students, with graduates reporting consistent 5-figure monthly returns.' },
  { year: '2024', title: '17,000+ Students', body: 'The community continues to grow, with the VIP Bundle and 60-Day Workshop becoming flagship programs.' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', color: '#fff', padding: '72px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label" style={{ color: '#0DBEF3' }}>The Coach Behind the Community</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 16 }}>Meet Coach Jessica Ramos</h1>
          <p style={{ fontSize: 18, opacity: 0.8, maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>Founder of Millionaire Traders Society and trading educator to over 17,000 students across the globe.</p>
        </div>
      </section>

      {/* Bio */}
      <section style={{ padding: '88px 0', background: 'var(--light)' }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <span className="section-label">Her Story</span>
              <h2 className="section-title">From Trader to <span>Educator</span></h2>
              <p style={{ fontSize: 16, color: 'var(--gray)', lineHeight: 1.85, marginBottom: 20 }}>
                Coach Jessica Ramos didn&apos;t start out as a millionaire. She started as a curious, determined person who believed that the financial markets held the key to true freedom — and she was right.
              </p>
              <p style={{ fontSize: 16, color: 'var(--gray)', lineHeight: 1.85, marginBottom: 20 }}>
                After years of mastering futures, forex, crypto, and stock options on her own, Jess realized something important: most trading education was either too expensive, too complex, or too dishonest. She set out to change that.
              </p>
              <p style={{ fontSize: 16, color: 'var(--gray)', lineHeight: 1.85, marginBottom: 32 }}>
                Today, Millionaire Traders Society is one of the most trusted trading education communities online, with students from age 8 to 99 learning to trade profitably — on their own schedule, in their own way.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/courses" className="btn-primary">Start Learning →</Link>
                <a href="https://www.youtube.com/@SayYes2Jess" target="_blank" rel="noopener noreferrer" className="btn-outline">YouTube Channel</a>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* Stats card */}
              <div style={{ background: 'linear-gradient(135deg, #0DBEF3, #289E54)', borderRadius: 20, padding: '36px 32px', color: '#fff' }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 24 }}>By the Numbers</h3>
                {[
                  { label: 'Students Taught', value: '17,000+' },
                  { label: 'Years of Education', value: '3+' },
                  { label: 'Markets Covered', value: '5+' },
                  { label: 'Active Community Members', value: 'Thousands' },
                ].map((s, i) => (
                  <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 14, marginBottom: i < 3 ? 14 : 0, borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                    <span style={{ fontSize: 14, opacity: 0.8 }}>{s.label}</span>
                    <span style={{ fontSize: 15, fontWeight: 800 }}>{s.value}</span>
                  </div>
                ))}
              </div>

              {/* Socials card */}
              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 20, padding: '28px 24px' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--dark)', marginBottom: 16 }}>Follow Coach Jess</h3>
                {[
                  { label: 'YouTube', handle: '@SayYes2Jess', href: 'https://www.youtube.com/@SayYes2Jess', color: '#dc2626' },
                  { label: 'Instagram', handle: '@stock_bae', href: 'https://www.instagram.com/stock_bae/', color: '#db2777' },
                  { label: 'X / Twitter', handle: '@sayyes2jess_', href: 'https://x.com/sayyes2jess_', color: '#0D1117' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f1f5f9', textDecoration: 'none' }}
                  >
                    <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--dark)' }}>{s.label}</span>
                    <span style={{ fontSize: 13, color: s.color, fontWeight: 600 }}>{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '88px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-label">The Journey</span>
            <h2 className="section-title">MTS <span>Milestones</span></h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {MILESTONES.map((m, i) => (
              <div key={m.year} style={{ display: 'flex', gap: 28, position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, #0DBEF3, #289E54)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                    <span style={{ color: '#fff', fontWeight: 900, fontSize: 12 }}>{m.year}</span>
                  </div>
                  {i < MILESTONES.length - 1 && (
                    <div style={{ width: 2, flexGrow: 1, background: '#e2e8f0', minHeight: 32 }} />
                  )}
                </div>
                <div style={{ paddingBottom: 32 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--dark)', marginBottom: 6 }}>{m.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--gray)', lineHeight: 1.7 }}>{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 0', background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900, color: '#fff', marginBottom: 14 }}>
            Ready to start your <span style={{ color: '#0DBEF3' }}>trading journey?</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', marginBottom: 28, maxWidth: 440, margin: '0 auto 28px', lineHeight: 1.7 }}>
            Begin with the free course — no experience, no credit card needed.
          </p>
          <Link href="/free-course" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>Get Free Course →</Link>
        </div>
      </section>
    </div>
  )
}
