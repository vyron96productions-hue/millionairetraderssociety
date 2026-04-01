import Link from 'next/link'
import Image from 'next/image'
import TrackedLink from '@/components/TrackedLink'
import TrackedAnchor from '@/components/TrackedAnchor'
import PageEventTracker from '@/components/PageEventTracker'
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
    image: '/course-free.png',
  },
  {
    badge: 'STOCK OPTIONS',
    badgeClass: 'badge-cyan',
    title: '60-Day Trader Workshop',
    subtitle: 'Stock Options — One-Time',
    description: '60 days of structured stock options education. Live trading updates, trade reviews, weekly webinars, and live support access.',
    features: ['Live Trading & Trade Updates', 'Trade Reviews', 'Trade Ideas', 'Live Support Access', 'Engagement Encouraged', 'Weekly Webinars'],
    cta: 'Join the Workshop →',
    href: '/workshop',
    accent: '#0DBEF3',
    bg: 'linear-gradient(135deg, #e0f7fe, #b3ecfb)',
    image: '/mts%20mockups_so.png',
  },
  {
    badge: 'POPULAR',
    badgeClass: 'badge-green',
    title: 'VIP Trading Course',
    subtitle: 'Advanced — Monthly',
    description: 'Dive deep into forex, futures, crypto, and more. Live webinars, curated trade ideas, and a private support community.',
    features: ['Forex, futures & crypto strategies', 'Live webinars & continuing education', 'Private support group chat', 'Curated trade ideas', '24/7 access to recorded sessions'],
    cta: 'Join VIP →',
    href: '/vip-course',
    accent: '#289E54',
    bg: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
    image: '/course-vip.png',
  },
  {
    badge: 'BEST VALUE',
    badgeClass: 'badge-green',
    title: 'VIP Bundle',
    subtitle: 'Everything Included',
    description: 'The complete package: education vault, trade ideas, webinars, and the 60-Day Workshop.',
    features: ['Everything in VIP Course', '60-Day Trader Workshop', 'Education vault access', 'All live & recorded webinars', 'Cancel anytime'],
    cta: 'Get the Bundle →',
    href: '/bundle',
    accent: '#289E54',
    bg: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
    image: '/mts%20mockups_bundle.png',
  },
  {
    badge: 'WORKBOOK',
    badgeClass: 'badge-cyan',
    title: 'The 60 Day Trader Workbook',
    subtitle: 'Digital — One-Time $25',
    description: 'A hands-on companion for 60-Day Workshop students. Bridge the gap between learning and execution with exercises aligned to the program.',
    features: ['Trade setup worksheets', 'Chart reading exercises', 'Trade planning templates', 'Daily journaling pages', 'Mindset exercises', 'Progress tracking'],
    cta: 'Get the Workbook →',
    href: '/workbook',
    accent: '#0DBEF3',
    bg: 'linear-gradient(135deg, #e0f7fe, #b3ecfb)',
    image: '/mts%20mockups_workbook.png',
  },
]

const TESTIMONIALS = [
  { name: 'Ewelina M.', handle: 'MTS Student', text: 'For about six months I can honestly say my account is growing. The strategy is very well explained and our coaches are very helpful. If you show up every day, watch the lessons, and do the same thing every day, success is guaranteed. Cheers to the best school in the world!', stars: 5 },
  { name: 'Karen Cummings', handle: 'MTS Student', text: 'Jess is by far the best educator I ever had in trading. Wish I had met her 5 years ago. She is extremely knowledgeable and really cares for her students success. After her 60 day program you will only yearn for more. Jess is hands down the best!!', stars: 5 },
  { name: 'Kelly Ray', handle: 'MTS Student', text: 'Coach Jess and MTS Admins are the TRUTH! MTS has completely changed my life. The education is clear and simple. Making $30K and counting in two months is life changing. I\'ll always and forever recommend MTS to anyone wanting to learn how to trade any market.', stars: 5 },
  { name: 'Joselyn', handle: 'MTS Student', text: 'Retired Army, I got smacked with losses learning the hard way — then I found Jess. What started as little $50 wins have compounded into daily $1K wins within a year. She didn\'t just help me make money…she helped shift my whole mindset and taught me to fish for a lifetime. Leaving this legacy for my kids and their kids. THANK YOU, Jess and the entire MTS team. 🙏', stars: 5 },
  { name: 'Cristina M.', handle: 'MTS Student', text: 'Joining Coach Jess\' course wasn\'t just mentorship — it was a complete life upgrade. She built my discipline, mindset, and confidence from the ground up. Coach Jess brings real boss energy, but what sets her apart is how much she genuinely cares. The results started showing within my first month — and it\'s genuinely changed my life forever. She\'s not just a mentor — she\'s the standard.', stars: 5 },
  { name: 'Reneta Nikolova', handle: 'MTS Student', text: 'The bootcamp was extremely well structured and I love the way Jess explains complex concepts simply. What I appreciated most was being constantly encouraged to actually implement what we were taught. All of this knowledge allows me to do my own analysis even when there isn\'t a trade idea posted. Joining MTS has been one of the best decisions I\'ve made.', stars: 5 },
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
      <PageEventTracker pageName="home" pageCategory="home" />

      {/* ── Hero ── */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: 620, background: '#fff' }}>
        {/* Branding image — left side, fades to white going right */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, bottom: 0, width: '60%',
          backgroundImage: "url('/IMG_7638.JPG')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          WebkitMaskImage: 'linear-gradient(90deg, black 0%, black 45%, transparent 85%, transparent 100%)',
          maskImage: 'linear-gradient(90deg, black 0%, black 45%, transparent 85%, transparent 100%)',
        }} />
        {/* Hero trading image — right side, fades in from white */}
        <div style={{
          position: 'absolute',
          top: 0, right: 0, bottom: 0, width: '65%',
          backgroundImage: "url('/MillionaireTraderSocietyhero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, transparent 10%, rgba(0,0,0,0.6) 35%, black 55%, black 100%)',
          maskImage: 'linear-gradient(90deg, transparent 0%, transparent 10%, rgba(0,0,0,0.6) 35%, black 55%, black 100%)',
          opacity: 0.85,
        }} />
        {/* Subtle light overlay over hero image area to keep it clean */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(255,255,255,0.18) 55%, rgba(255,255,255,0.1) 100%)', zIndex: 1 }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '96px 24px 80px' }}>
          <div style={{ maxWidth: 620 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(13,190,243,0.12)', border: '1px solid rgba(13,190,243,0.3)', borderRadius: 50, padding: '6px 16px', marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#0DBEF3', display: 'inline-block' }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#0DBEF3' }}>17,000+ Students and Counting</span>
            </div>

            <h1 style={{ fontSize: 'clamp(38px, 6vw, 68px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: 20, color: '#0D1117' }}>
              Learn to Trade.<br />
              <span style={{ background: 'linear-gradient(90deg, #0DBEF3, #289E54)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Build Real Wealth.
              </span>
            </h1>

            <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: '#475569', lineHeight: 1.7, marginBottom: 36, maxWidth: 540 }}>
              Coach Jessica Ramos has helped over 17,000 students master futures, forex, and stock options trading — from complete beginners to 7-figure traders.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 56 }}>
              <TrackedLink href="/free-course" className="btn-primary" style={{ fontSize: 16, padding: '16px 32px' }} tracking={{ event: 'cta_click', button_text: 'Start Free Today →', destination: '/free-course', page_section: 'hero' }}>
                Start Free Today →
              </TrackedLink>
              <TrackedLink href="/courses" className="btn-outline" style={{ fontSize: 16, padding: '16px 32px' }} tracking={{ event: 'cta_click', button_text: 'View All Courses', destination: '/courses', page_section: 'hero' }}>
                View All Courses
              </TrackedLink>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, borderTop: '1px solid rgba(13,17,23,0.1)', paddingTop: 40 }} className="stats-grid">
              {STATS.map(s => (
                <div key={s.value} style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 'clamp(18px, 2.2vw, 28px)', fontWeight: 900, color: '#0DBEF3', lineHeight: 1, whiteSpace: 'nowrap' }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: '#64748b', marginTop: 6, fontWeight: 500 }}>{s.label}</div>
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
                  <Image src={c.image} alt={c.title} width={400} height={400} sizes="(max-width: 768px) 100vw, 480px" style={{ height: 360, width: 'auto', objectFit: 'contain' }} />
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
