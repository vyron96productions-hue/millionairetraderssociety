import Link from 'next/link'
import Image from 'next/image'
import TrackedLink from '@/components/TrackedLink'
import TrackedAnchor from '@/components/TrackedAnchor'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Beginners Trading Course',
  description: 'Get free access to our beginner trading course — a $500+ value. Learn technical analysis, chart reading, and trade setups with Coach Jessica Ramos.',
}

const MODULES = [
  { num: '01', title: 'Introduction to Trading', body: 'What the markets are, how they work, and why trading is one of the most powerful skills you can learn.' },
  { num: '02', title: 'Technical Analysis Basics', body: 'Learn how to read price charts, identify trends, and understand what the market is telling you.' },
  { num: '03', title: 'Support & Resistance', body: 'Master the most foundational concept in trading — where price tends to reverse and why.' },
  { num: '04', title: 'Chart Patterns', body: 'Identify the key patterns that signal high-probability trade setups before they happen.' },
  { num: '05', title: 'Risk Management', body: 'The #1 skill that separates profitable traders from everyone else. Learn to protect your capital.' },
  { num: '06', title: 'Your First Trade Setup', body: 'Put it all together and identify your first real trade setup using the skills you\'ve learned.' },
]

export default function FreeCourse() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', color: '#fff', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(13,190,243,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="two-col-grid" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fef3c7', borderRadius: 50, padding: '5px 14px', marginBottom: 20 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: '#92400e' }}>🎁 FREE — A $500+ Value</span>
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1px', marginBottom: 16 }}>
                Beginners<br />
                <span style={{ background: 'linear-gradient(90deg, #0DBEF3, #289E54)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Trading Course</span>
              </h1>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 32 }}>
                Built by traders, for traders. Get the foundation you need to start reading charts, spotting trade setups, and protecting your money — completely free.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
                <TrackedAnchor href="https://millionairetraderssociety.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 16, padding: '15px 32px' }} tracking={{ event: 'cta_click', button_text: 'Get Free Access →', destination: 'https://millionairetraderssociety.com', page_section: 'hero' }}>
                  Get Free Access →
                </TrackedAnchor>
              </div>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                {['No credit card needed', 'Instant access', 'Beginner friendly'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
                    <span style={{ color: '#289E54', fontWeight: 700 }}>✓</span> {f}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 24, padding: '36px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                <Image src="/course-free.jpg" alt="Beginners Trading Course" width={480} height={480} style={{ height: 'auto', width: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--dark)', marginBottom: 20 }}>What You&apos;ll Get</h3>
              {[
                { icon: '📊', text: '6 structured learning modules' },
                { icon: '🎥', text: 'Video lessons with Coach Jess' },
                { icon: '📖', text: 'Accompanying workbook & notes' },
                { icon: '♾️', text: 'Lifetime access — learn at your pace' },
                { icon: '👥', text: 'Access to the MTS community' },
                { icon: '⬆️', text: 'Easy upgrade path to VIP when ready' },
              ].map(i => (
                <div key={i.text} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid #f1f5f9', fontSize: 14, color: 'var(--dark)' }}>
                  <span style={{ fontSize: 20 }}>{i.icon}</span>
                  {i.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section style={{ padding: '88px 0', background: 'var(--light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-label">Course Curriculum</span>
            <h2 className="section-title">What You&apos;ll <span>Learn</span></h2>
          </div>
          <div className="three-col-grid">
            {MODULES.map(m => (
              <div key={m.num} className="card">
                <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--cyan)', marginBottom: 10, letterSpacing: '0.06em' }}>MODULE {m.num}</div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--dark)', marginBottom: 8 }}>{m.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--gray)', lineHeight: 1.7 }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade path */}
      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, #0DBEF3, #289E54)', borderRadius: 24, padding: '52px 48px', textAlign: 'center', color: '#fff' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 900, marginBottom: 14, letterSpacing: '-0.5px' }}>
              Ready to go beyond the basics?
            </h2>
            <p style={{ fontSize: 17, opacity: 0.85, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 }}>
              Once you&apos;ve completed the free course, upgrade to VIP for advanced strategies, live webinars, and real trade ideas.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <TrackedLink href="/vip-course" style={{ background: '#fff', color: '#0DBEF3', fontWeight: 800, fontSize: 15, padding: '14px 32px', borderRadius: 50, textDecoration: 'none' }} tracking={{ event: 'cta_click', button_text: 'See VIP Course →', destination: '/vip-course', page_section: 'upgrade_path' }}>See VIP Course →</TrackedLink>
              <TrackedLink href="/courses" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 50, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }} tracking={{ event: 'cta_click', button_text: 'View All Courses', destination: '/courses', page_section: 'upgrade_path' }}>View All Courses</TrackedLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
