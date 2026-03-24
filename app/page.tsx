import Link from 'next/link'
import Image from 'next/image'
import TrackedLink from '@/components/TrackedLink'
import TrackedAnchor from '@/components/TrackedAnchor'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Millionaire Traders Society — Learn to Trade with Coach Jessica Ramos',
  description: 'Join 17,000+ students learning futures, forex, and stock options with Coach Jessica Ramos. Start free today — no experience needed.',
}

const STATS = [
  { value: '17,000+', label: 'Students Worldwide' },
  { value: '3+', label: 'Years of Proven Results' },
  { value: '5–7 Figure', label: 'Student Traders Created' },
  { value: 'Ages 8–99', label: 'Anyone Can Learn' },
]

const COURSES = [
  {
    badge: 'FREE',
    badgeClass: 'badge-cyan',
    title: 'Beginners Trading Course',
    subtitle: 'Start Here',
    description: 'Learn the fundamentals of technical analysis, chart reading, and trade setups. A $500+ value — completely free.',
    features: ['Technical analysis basics', 'Chart reading & patterns', 'Risk management intro', 'Trade setup identification'],
    cta: 'Get Free Access →',
    href: '/free-course',
    accent: '#0DBEF3',
    bg: 'linear-gradient(135deg, #e0f7fe, #b3ecfb)',
    image: '/course-free.jpg',
  },
  {
    badge: 'POPULAR',
    badgeClass: 'badge-cyan',
    title: 'VIP Trading Course',
    subtitle: 'Advanced — Monthly',
    description: 'Dive deep into forex, futures, crypto, and more. Live webinars, curated trade ideas, and a private support community.',
    features: ['Forex, futures & crypto strategies', 'Live webinars & continuing education', 'Private support group chat', 'Curated trade ideas', '24/7 access to recorded sessions'],
    cta: 'Join VIP →',
    href: '/vip-course',
    accent: '#0DBEF3',
    bg: 'linear-gradient(135deg, #e0f7fe, #b3ecfb)',
    image: '/course-vip.jpg',
  },
  {
    badge: 'STOCK OPTIONS',
    badgeClass: 'badge-green',
    title: '60-Day Trader Workshop',
    subtitle: 'Stock Options — One-Time',
    description: '60 days of structured stock options education. Price action, high-probability setups, and the confidence to trade on your own.',
    features: ['Stock options fundamentals', 'Price action deep-dive', 'High-probability setups', 'Dedicated support team'],
    cta: 'Join the Workshop →',
    href: '/workshop',
    accent: '#289E54',
    bg: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
    image: '/course-60day.png',
  },
  {
    badge: 'BEST VALUE',
    badgeClass: 'badge-green',
    title: 'VIP Bundle',
    subtitle: 'Everything Included',
    description: 'The complete package: education vault, trade ideas, webinars, stock options bootcamp, and the 60-Day Workshop.',
    features: ['Everything in VIP Course', '60-Day Trader Workshop', 'Stock Options Bootcamp', 'Education vault access', 'Cancel anytime'],
    cta: 'Get the Bundle →',
    href: '/bundle',
    accent: '#289E54',
    bg: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
    image: '/course-bundle.png',
  },
]

const TESTIMONIALS = [
  { name: 'Marcus T.', handle: '@marcust_trades', text: 'Coach Jess completely changed how I look at charts. Within 3 months of the VIP course I was consistently profitable.', stars: 5 },
  { name: 'Danielle R.', handle: '@dramos_fx', text: 'I started with zero knowledge at 52 years old. Now I trade every morning before work. The free course alone is worth thousands.', stars: 5 },
  { name: 'Kevin S.', handle: '@kevs_trading', text: 'The VIP Bundle is the best investment I\'ve made. The live webinars and trade ideas keep me sharp every single week.', stars: 5 },
  { name: 'Priya M.', handle: '@priya_fx', text: 'Finally a trading educator who speaks plainly. No fluff, no hype — just real strategies that work in today\'s market.', stars: 5 },
  { name: 'Jordan L.', handle: '@jordanltrades', text: 'The 60-Day Workshop gave me the structured foundation I needed. Coach Jess is patient, clear, and genuinely wants you to succeed.', stars: 5 },
  { name: 'Lisa W.', handle: '@lisawtrader', text: 'I was skeptical about online trading courses, but MTS is the real deal. The community alone is worth the subscription price.', stars: 5 },
]

const WHY = [
  { icon: '🎯', title: 'Proven Track Record', body: 'VIP course has consistently created 5 to 7 figure traders for 3+ years running.' },
  { icon: '🌍', title: 'Any Age, Any Level', body: 'Students from age 8 to 99 have learned to trade profitably with our system.' },
  { icon: '📱', title: 'Learn on Your Schedule', body: '24/7 access to all recorded content. Watch at your pace, on any device.' },
  { icon: '🤝', title: 'Real Community', body: 'Private support group chat with fellow traders and direct access to Coach Jess.' },
  { icon: '💡', title: 'No Fluff, Just Results', body: 'Practical, actionable education focused on real market setups you can trade today.' },
  { icon: '🔄', title: 'Always Up to Date', body: 'Live webinars and continuing education keep your skills sharp in any market condition.' },
]

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: 10 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <div>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', overflow: 'hidden', color: '#fff', minHeight: 620 }}>
        {/* Hero background image */}
        <Image
          src="/MillionaireTraderSocietyhero.png"
          alt="Millionaire Traders Society"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Gradient overlay — same dark tone as before, stronger on left */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(13,17,23,0.95) 0%, rgba(10,42,58,0.85) 50%, rgba(13,17,23,0.4) 100%)', zIndex: 1 }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '96px 24px 80px' }}>
          <div style={{ maxWidth: 620 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(13,190,243,0.12)', border: '1px solid rgba(13,190,243,0.25)', borderRadius: 50, padding: '6px 16px', marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#0DBEF3', display: 'inline-block' }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#0DBEF3' }}>17,000+ Students and Counting</span>
            </div>

            <h1 style={{ fontSize: 'clamp(38px, 6vw, 68px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: 20 }}>
              Learn to Trade.<br />
              <span style={{ background: 'linear-gradient(90deg, #0DBEF3, #289E54)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Build Real Wealth.
              </span>
            </h1>

            <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: 36, maxWidth: 540 }}>
              Coach Jessica Ramos has helped over 17,000 students master futures, forex, and stock options trading — from complete beginners to 7-figure traders.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 56 }}>
              <TrackedLink href="/free-course" className="btn-primary" style={{ fontSize: 16, padding: '16px 32px' }} tracking={{ event: 'cta_click', button_text: 'Start Free Today →', destination: '/free-course', page_section: 'hero' }}>
                Start Free Today →
              </TrackedLink>
              <TrackedLink href="/courses" className="btn-outline" style={{ fontSize: 16, padding: '16px 32px', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }} tracking={{ event: 'cta_click', button_text: 'View All Courses', destination: '/courses', page_section: 'hero' }}>
                View All Courses
              </TrackedLink>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 40 }} className="stats-grid">
              {STATS.map(s => (
                <div key={s.value} style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 900, color: '#0DBEF3', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 6, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Free Course Banner ── */}
      <section style={{ background: 'linear-gradient(90deg, #289E54, #0DBEF3)', padding: '18px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>🎁 Free Beginners Trading Course — A $500+ Value, Yours at No Cost</span>
          <TrackedLink href="/free-course" style={{ background: '#fff', color: '#289E54', fontWeight: 800, fontSize: 13, padding: '8px 20px', borderRadius: 50, textDecoration: 'none', whiteSpace: 'nowrap' }} tracking={{ event: 'cta_click', button_text: 'Claim Free Access →', destination: '/free-course', page_section: 'free_course_banner' }}>
            Claim Free Access →
          </TrackedLink>
        </div>
      </section>

      {/* ── Courses ── */}
      <section style={{ padding: '88px 0', background: 'var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-label">Choose Your Path</span>
            <h2 className="section-title">Courses Built for <span>Every Level</span></h2>
            <p style={{ fontSize: 16, color: 'var(--gray)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>Whether you&apos;re just starting out or ready to go professional — there&apos;s a course designed for exactly where you are.</p>
          </div>
          <div className="courses-grid">
            {COURSES.map(c => (
              <div key={c.title} style={{ background: c.bg, borderRadius: 24, padding: '28px 28px 36px', display: 'flex', flexDirection: 'column', border: `1px solid ${c.accent}22` }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                  <Image src={c.image} alt={c.title} width={400} height={400} style={{ height: 360, width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <span className={`badge ${c.badgeClass}`}>{c.badge}</span>
                  <span style={{ fontSize: 12, color: 'var(--gray)', fontWeight: 600 }}>{c.subtitle}</span>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 900, color: 'var(--dark)', marginBottom: 10, lineHeight: 1.2 }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--gray)', lineHeight: 1.7, marginBottom: 20, flexGrow: 1 }}>{c.description}</p>
                <ul style={{ listStyle: 'none', marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {c.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: 'var(--dark)' }}>
                      <span style={{ color: c.accent, fontWeight: 700, marginTop: 1, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <TrackedLink href={c.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: c.accent, color: '#fff', fontWeight: 700, fontSize: 15, padding: '13px 24px', borderRadius: 50, textDecoration: 'none', textAlign: 'center' }} tracking={{ event: 'cta_click', button_text: c.cta, destination: c.href, page_section: 'courses_section' }}>
                  {c.cta}
                </TrackedLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why MTS ── */}
      <section style={{ padding: '88px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">Why 17,000+ Traders <span>Choose MTS</span></h2>
          </div>
          <div className="three-col-grid">
            {WHY.map(w => (
              <div key={w.title} className="card">
                <div style={{ fontSize: 32, marginBottom: 14 }}>{w.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--dark)', marginBottom: 8 }}>{w.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--gray)', lineHeight: 1.7 }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Coach Jess ── */}
      <section style={{ padding: '88px 0', background: 'var(--light)' }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <span className="section-label">Meet Your Coach</span>
              <h2 className="section-title">Coach <span>Jessica Ramos</span></h2>
              <p style={{ fontSize: 16, color: 'var(--gray)', lineHeight: 1.8, marginBottom: 20 }}>
                Jessica Ramos is the founder of Millionaire Traders Society and a passionate trading educator on a mission to make financial freedom accessible to everyone — from age 8 to 99.
              </p>
              <p style={{ fontSize: 16, color: 'var(--gray)', lineHeight: 1.8, marginBottom: 32 }}>
                After years of mastering futures, forex, and stock options markets herself, Coach Jess built MTS to share her strategies with the world. Her straightforward, no-fluff teaching style has helped thousands of students consistently generate income from the markets.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <TrackedLink href="/about" className="btn-primary" tracking={{ event: 'cta_click', button_text: 'Meet Coach Jess →', destination: '/about', page_section: 'about_section' }}>Meet Coach Jess →</TrackedLink>
                <TrackedAnchor href="https://www.youtube.com/@SayYes2Jess" target="_blank" rel="noopener noreferrer" className="btn-outline" tracking={{ event: 'social_click', platform: 'YouTube', destination: 'https://www.youtube.com/@SayYes2Jess', page_section: 'about_section' }}>Watch on YouTube</TrackedAnchor>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ borderRadius: 24, overflow: 'hidden', position: 'relative' }}>
                <Image src="/coach-jess.png" alt="Coach Jessica Ramos" width={600} height={700} style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ background: 'linear-gradient(135deg, #0DBEF3, #289E54)', borderRadius: 20, padding: '28px 32px', color: '#fff', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { label: 'Students', value: '17,000+' },
                  { label: 'Years Teaching', value: '3+' },
                  { label: 'Markets', value: '5+' },
                  { label: 'Community', value: '@SayYes2Jess' },
                ].map(stat => (
                  <div key={stat.label}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{stat.label}</div>
                    <div style={{ fontSize: 18, fontWeight: 900 }}>{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ padding: '88px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-label">Student Results</span>
            <h2 className="section-title">Real Students. <span>Real Results.</span></h2>
          </div>
          <div className="three-col-grid">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="card">
                <Stars count={t.stars} />
                <p style={{ fontSize: 14, color: 'var(--gray)', lineHeight: 1.75, marginBottom: 20, fontStyle: 'italic' }}>&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--cyan)', fontWeight: 600 }}>{t.handle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #0D1117, #0a2a3a)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label" style={{ color: '#0DBEF3' }}>Start Today</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 900, color: '#fff', marginBottom: 16, letterSpacing: '-0.5px' }}>
            Your Trading Journey <span style={{ color: '#0DBEF3' }}>Starts Free</span>
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', marginBottom: 36, maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.7 }}>
            Join over 17,000 students who have transformed their financial future. No experience needed — start with the free course today.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <TrackedLink href="/free-course" className="btn-primary" style={{ fontSize: 16, padding: '16px 36px' }} tracking={{ event: 'cta_click', button_text: 'Get Free Course →', destination: '/free-course', page_section: 'cta_banner' }}>Get Free Course →</TrackedLink>
            <TrackedLink href="/courses" className="btn-outline" style={{ fontSize: 16, padding: '16px 36px', borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }} tracking={{ event: 'cta_click', button_text: 'See All Courses', destination: '/courses', page_section: 'cta_banner' }}>See All Courses</TrackedLink>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
        }
      `}</style>
    </div>
  )
}
