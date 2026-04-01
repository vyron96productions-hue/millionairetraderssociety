import Image from 'next/image'
import TrackedLink from '@/components/TrackedLink'
import TrackedAnchor from '@/components/TrackedAnchor'
import PageEventTracker from '@/components/PageEventTracker'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The 60 Day Trader Workbook',
  description: 'A hands-on companion designed exclusively for Millionaire Traders Society students. Bridge the gap between learning and execution with step-by-step exercises from the 60-Day Trader Program.',
  alternates: { canonical: 'https://millionairetraderssociety.com/workbook' },
}

const FEATURES = [
  { icon: '📋', text: 'Step-by-step trade journaling templates' },
  { icon: '📊', text: 'Chart analysis worksheets' },
  { icon: '🎯', text: 'Daily trade planning frameworks' },
  { icon: '🧠', text: 'Mindset & discipline exercises' },
  { icon: '📈', text: 'Performance tracking pages' },
  { icon: '✅', text: 'Aligned with 60-Day Workshop curriculum' },
]

const WHAT_INSIDE = [
  { num: '01', title: 'Trade Setup Identification', body: 'Worksheets to practice identifying the high-probability trade setups covered in the 60-Day Workshop, so the patterns become second nature.' },
  { num: '02', title: 'Chart Reading Exercises', body: 'Step-by-step exercises that reinforce price action and chart interpretation skills — practice the same techniques Coach Jess teaches live.' },
  { num: '03', title: 'Trade Planning Templates', body: 'Pre-built templates for mapping out entries, exits, stop losses, and profit targets before you ever place a trade.' },
  { num: '04', title: 'Daily Journaling Pages', body: 'Structured daily journal pages to track your trades, emotions, and lessons learned. Accountability built right into the workbook.' },
  { num: '05', title: 'Mindset & Discipline Sections', body: 'Focused exercises to build the mental game: patience, discipline, and the confidence to trust your own analysis.' },
  { num: '06', title: 'Progress Tracking', body: 'Weekly and monthly performance summaries to measure your growth and identify areas for improvement over the full 60 days.' },
]

export default function WorkbookPage() {
  return (
    <div>
      <PageEventTracker pageName="workbook" pageCategory="products" />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', color: '#fff', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(13,190,243,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -40, left: -40, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(40,158,84,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="two-col-grid" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(13,190,243,0.12)', border: '1px solid rgba(13,190,243,0.25)', borderRadius: 50, padding: '5px 16px', marginBottom: 20 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: '#0DBEF3' }}>DIGITAL WORKBOOK</span>
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1px', marginBottom: 16 }}>
                The 60 Day Trader<br />
                <span style={{ background: 'linear-gradient(90deg, #0DBEF3, #289E54)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Workbook</span>
              </h1>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 28 }}>
                The 60-Day Trader Workbook is a hands-on companion designed exclusively for students of Millionaire Traders Society and the 60-Day Trader Program. Built to turn theory into practice, this workbook bridges the gap between learning and execution, guiding you step-by-step as you apply the same technical trading concepts taught inside the program.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
                <TrackedAnchor
                  href="https://millionairetraderssociety.com/workbook#buy"
                  className="btn-primary"
                  style={{ fontSize: 16, padding: '15px 32px' }}
                  tracking={{ event: 'cta_click', button_text: 'Get the Workbook →', destination: '#buy', page_section: 'hero' }}
                >
                  Get the Workbook →
                </TrackedAnchor>
                <TrackedLink
                  href="/workshop"
                  style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 700, fontSize: 15, padding: '15px 28px', borderRadius: 50, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}
                  tracking={{ event: 'cta_click', button_text: 'See the Workshop', destination: '/workshop', page_section: 'hero' }}
                >
                  See the Workshop
                </TrackedLink>
              </div>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                {['$25 one-time', 'Digital download', 'Perfect for Workshop students'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
                    <span style={{ color: '#0DBEF3', fontWeight: 700 }}>✓</span> {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Product card */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 24, padding: '36px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                <Image
                  src="/mts%20mockups_workbook.png"
                  alt="The 60 Day Trader Workbook"
                  width={480}
                  height={480}
                  sizes="(max-width: 768px) 100vw, 480px"
                  style={{ height: 'auto', width: '100%', maxWidth: 320, objectFit: 'contain' }}
                />
              </div>
              <div style={{ textAlign: 'center', marginBottom: 20 }}>
                <div style={{ fontSize: 32, fontWeight: 900, color: 'var(--dark)', lineHeight: 1 }}>$25</div>
                <div style={{ fontSize: 13, color: 'var(--gray)', marginTop: 4 }}>One-time purchase · Digital download</div>
              </div>
              <TrackedAnchor
                href="https://millionairetraderssociety.com/workbook#buy"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0DBEF3', color: '#fff', fontWeight: 700, fontSize: 16, padding: '15px 24px', borderRadius: 50, textDecoration: 'none', boxShadow: '0 4px 20px rgba(13,190,243,0.4)', marginBottom: 16 }}
                tracking={{ event: 'cta_click', button_text: 'Buy Now', destination: '#buy', page_section: 'hero_card' }}
              >
                Buy Now
              </TrackedAnchor>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {FEATURES.map(f => (
                  <li key={f.text} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--dark)' }}>
                    <span style={{ fontSize: 16 }}>{f.icon}</span>
                    {f.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section style={{ padding: '88px 0', background: 'var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-label">Inside the Workbook</span>
            <h2 className="section-title">Your Trading Edge <span>In Practice</span></h2>
            <p style={{ fontSize: 16, color: 'var(--gray)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Six structured sections to take you from watching to doing — every page aligned with the 60-Day Trader Program.
            </p>
          </div>
          <div className="three-col-grid">
            {WHAT_INSIDE.map(m => (
              <div key={m.num} className="card">
                <div style={{ fontSize: 13, fontWeight: 800, color: '#0DBEF3', marginBottom: 10, letterSpacing: '0.06em' }}>SECTION {m.num}</div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--dark)', marginBottom: 8 }}>{m.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--gray)', lineHeight: 1.7 }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pair with Workshop */}
      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, #0DBEF3, #289E54)', borderRadius: 24, padding: '52px 48px', textAlign: 'center', color: '#fff' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 900, marginBottom: 14, letterSpacing: '-0.5px' }}>
              Pair it with the 60-Day Trader Workshop
            </h2>
            <p style={{ fontSize: 17, opacity: 0.9, marginBottom: 32, maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.7 }}>
              The workbook is designed as a companion to the 60-Day Trader Workshop. Get both and accelerate your results by putting every lesson into practice the same day.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <TrackedLink
                href="/workshop"
                style={{ background: '#fff', color: '#0DBEF3', fontWeight: 800, fontSize: 15, padding: '14px 32px', borderRadius: 50, textDecoration: 'none' }}
                tracking={{ event: 'cta_click', button_text: 'See the Workshop →', destination: '/workshop', page_section: 'pair_upsell' }}
              >
                See the Workshop →
              </TrackedLink>
              <TrackedLink
                href="/courses"
                style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 50, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }}
                tracking={{ event: 'cta_click', button_text: 'View All Courses', destination: '/courses', page_section: 'pair_upsell' }}
              >
                View All Courses
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
