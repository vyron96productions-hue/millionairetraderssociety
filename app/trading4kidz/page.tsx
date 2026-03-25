import Image from 'next/image'
import TrackedAnchor from '@/components/TrackedAnchor'
import TrackedLink from '@/components/TrackedLink'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trading4Kidz — Learn Investing the Fun Way',
  description: 'Trading and investing education made fun for kids and parents. Trading4Kidz teaches the next generation how money, markets, and investing really work.',
  alternates: { canonical: 'https://millionairetraderssociety.com/trading4kidz' },
}

const FEATURES = [
  { icon: '📈', title: 'Market Basics Made Simple', body: 'Stocks, bonds, crypto, and more — explained in plain language kids actually understand.' },
  { icon: '💰', title: 'Money & Investing Habits', body: 'Build healthy financial habits early. Kids learn to save, invest, and think long-term.' },
  { icon: '🧠', title: 'Financial Literacy', body: 'Understanding how money works is the most important skill a child can learn — and it starts here.' },
  { icon: '👨‍👩‍👧', title: 'Great for Parents Too', body: 'Watch and learn together. Trading4Kidz is designed so the whole family can grow financially together.' },
  { icon: '🎮', title: 'Fun & Engaging Content', body: 'No boring lectures. Interactive, visual, and entertaining content that keeps kids coming back.' },
  { icon: '🎥', title: 'Free YouTube Education', body: 'All content is free on YouTube. Subscribe and start watching with your kids today.' },
]

export default function Trading4KidzPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1117 0%, #0a2a3a 60%, #0d3320 100%)', color: '#fff', padding: '80px 0 64px', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: -60, right: -60, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(40,158,84,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -40, left: -40, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(13,190,243,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="two-col-grid" style={{ alignItems: 'center', gap: 48 }}>
            {/* Left: text */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(40,158,84,0.15)', border: '1px solid rgba(40,158,84,0.4)', borderRadius: 50, padding: '5px 16px', marginBottom: 24 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: '#289E54' }}>🎓 KIDS &amp; FAMILY EDUCATION</span>
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1px', marginBottom: 20 }}>
                Teaching Kids to<br />
                <span style={{ background: 'linear-gradient(90deg, #289E54, #0DBEF3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Think Like Investors</span>
              </h1>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 36 }}>
                Trading4Kidz makes financial education fun, engaging, and accessible for kids and parents. From understanding stocks to building smart money habits — the next generation starts here.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
                <TrackedAnchor
                  href="https://www.youtube.com/@trading4kidz"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#FF0000', color: '#fff', fontWeight: 800, fontSize: 15, padding: '14px 28px', borderRadius: 50, textDecoration: 'none', boxShadow: '0 4px 20px rgba(255,0,0,0.35)' }}
                  tracking={{ event: 'cta_click', button_text: 'Watch on YouTube', destination: 'https://www.youtube.com/@trading4kidz', page_section: 'hero' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  Watch on YouTube
                </TrackedAnchor>
                <TrackedLink
                  href="/courses"
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', fontWeight: 700, fontSize: 15, padding: '14px 28px', borderRadius: 50, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}
                  tracking={{ event: 'cta_click', button_text: 'View MTS Courses', destination: '/courses', page_section: 'hero' }}
                >
                  View MTS Courses
                </TrackedLink>
              </div>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                {['Free on YouTube', 'Ages 8+', 'Learn together'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
                    <span style={{ color: '#289E54', fontWeight: 700 }}>✓</span> {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: logo */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                src="/Trading4kidz_LOGO.png"
                alt="Trading4Kidz — Learn Investing the Fun Way"
                width={540}
                height={360}
                style={{ width: '100%', height: 'auto', mixBlendMode: 'screen', filter: 'drop-shadow(0 0 40px rgba(40,158,84,0.4))' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Trading4Kidz */}
      <section style={{ padding: '88px 0', background: 'var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">About the Program</span>
            <h2 className="section-title">Why Start <span>Financial Education Early?</span></h2>
            <p style={{ fontSize: 16, color: 'var(--gray)', maxWidth: 580, margin: '0 auto', lineHeight: 1.75 }}>
              Most schools don&apos;t teach kids how money actually works. Trading4Kidz fills that gap — making investing approachable, exciting, and something the whole family can learn together.
            </p>
          </div>
          <div className="three-col-grid">
            {FEATURES.map(f => (
              <div key={f.title} className="card">
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--dark)', marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--gray)', lineHeight: 1.7 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube CTA */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', borderRadius: 24, padding: '60px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -40, right: 200, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(40,158,84,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1, maxWidth: 520 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,0,0,0.15)', border: '1px solid rgba(255,0,0,0.3)', borderRadius: 50, padding: '4px 14px', marginBottom: 20 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#FF0000' }}>FREE ON YOUTUBE</span>
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 900, color: '#fff', marginBottom: 16, letterSpacing: '-0.5px', lineHeight: 1.2 }}>
                Subscribe &amp; Start Learning Today
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: 32 }}>
                All Trading4Kidz content is completely free on YouTube. Hit subscribe and watch with your kids — because financial freedom starts with financial education.
              </p>
              <TrackedAnchor
                href="https://www.youtube.com/@trading4kidz"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#FF0000', color: '#fff', fontWeight: 800, fontSize: 16, padding: '16px 36px', borderRadius: 50, textDecoration: 'none', boxShadow: '0 4px 24px rgba(255,0,0,0.4)' }}
                tracking={{ event: 'cta_click', button_text: 'Subscribe on YouTube →', destination: 'https://www.youtube.com/@trading4kidz', page_section: 'youtube_cta' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                Subscribe on YouTube →
              </TrackedAnchor>
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Image
                src="/Trading4kidz_LOGO.png"
                alt="Trading4Kidz"
                width={320}
                height={213}
                style={{ width: 280, height: 'auto', mixBlendMode: 'screen', opacity: 0.9 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MTS bridge */}
      <section style={{ padding: '72px 0', background: 'var(--light)', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label">Part of the MTS Family</span>
          <h2 className="section-title" style={{ marginBottom: 16 }}>Ready to Go <span>Beyond the Basics?</span></h2>
          <p style={{ fontSize: 16, color: 'var(--gray)', maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.75 }}>
            When your kids are ready to take it to the next level, Millionaire Traders Society has courses for every stage of the journey.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <TrackedLink href="/free-course" className="btn-primary" tracking={{ event: 'cta_click', button_text: 'Start with the Free Course', destination: '/free-course', page_section: 'mts_bridge' }}>Start with the Free Course →</TrackedLink>
            <TrackedLink href="/courses" className="btn-outline" tracking={{ event: 'cta_click', button_text: 'See All Courses', destination: '/courses', page_section: 'mts_bridge' }}>See All Courses</TrackedLink>
          </div>
        </div>
      </section>
    </div>
  )
}
