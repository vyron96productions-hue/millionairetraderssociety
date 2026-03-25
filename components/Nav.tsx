'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { pushDataLayer } from '@/lib/gtm'

const COURSES = [
  { label: 'Free Beginners Course', href: '/free-course' },
  { label: 'VIP Trading Course', href: '/vip-course' },
  { label: '60-Day Trader Workshop', href: '/workshop' },
  { label: 'VIP Bundle', href: '/bundle' },
  { label: 'All Courses', href: '/courses' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function openDrop() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setDropOpen(true)
  }
  function closeDrop() {
    closeTimer.current = setTimeout(() => setDropOpen(false), 120)
  }

  return (
    <>
      <nav style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 112 }}>

          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }} onClick={() => pushDataLayer({ event: 'nav_click', link_text: 'Logo', destination: '/', page_section: 'nav' })}>
            <Image src="/mts-logo.png" alt="Millionaire Traders Society" width={400} height={120} style={{ height: 96, width: 'auto', display: 'block' }} priority />
          </Link>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Link href="/" className="nav-link" onClick={() => pushDataLayer({ event: 'nav_click', link_text: 'Home', destination: '/', page_section: 'nav_desktop' })}>Home</Link>

            <div style={{ position: 'relative' }} onMouseEnter={openDrop} onMouseLeave={closeDrop}>
              <span className="nav-link" style={{ cursor: 'default', display: 'flex', alignItems: 'center', gap: 4 }}>
                Courses
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>
              </span>
              {dropOpen && (
                <div style={{ position: 'absolute', top: '100%', left: 0, paddingTop: 6, zIndex: 100, minWidth: 240 }}>
                  <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, boxShadow: '0 8px 32px rgba(0,0,0,0.12)', padding: 8 }}>
                    {COURSES.map(c => (
                      <Link key={c.href} href={c.href} className="dropdown-item" onClick={() => { setDropOpen(false); pushDataLayer({ event: 'nav_click', link_text: c.label, destination: c.href, page_section: 'nav_courses_dropdown' }) }}>{c.label}</Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="nav-link" onClick={() => pushDataLayer({ event: 'nav_click', link_text: 'About Coach Jess', destination: '/about', page_section: 'nav_desktop' })}>About Coach Jess</Link>
            <Link href="/team" className="nav-link" onClick={() => pushDataLayer({ event: 'nav_click', link_text: 'Meet the Team', destination: '/team', page_section: 'nav_desktop' })}>Meet the Team</Link>
            <Link href="/trading4kidz" className="nav-link" style={{ color: '#289E54', fontWeight: 700 }} onClick={() => pushDataLayer({ event: 'nav_click', link_text: 'Trading4Kidz', destination: '/trading4kidz', page_section: 'nav_desktop' })}>Trading4Kidz</Link>
            <Link href="/contact" className="nav-link" onClick={() => pushDataLayer({ event: 'nav_click', link_text: 'Contact', destination: '/contact', page_section: 'nav_desktop' })}>Contact</Link>
            <Link href="/free-course" className="btn-outline" style={{ marginLeft: 4, padding: '9px 18px', fontSize: 13 }} onClick={() => pushDataLayer({ event: 'cta_click', button_text: 'Free Course', destination: '/free-course', page_section: 'nav_desktop' })}>Free Course</Link>
            <Link href="/vip-course" className="btn-primary" style={{ marginLeft: 4, padding: '10px 20px', fontSize: 14 }} onClick={() => pushDataLayer({ event: 'cta_click', button_text: 'Join VIP', destination: '/vip-course', page_section: 'nav_desktop' })}>Join VIP</Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(true)} className="nav-mobile-btn" aria-label="Open menu" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--dark)', padding: 8 }}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200 }}>
          <div onClick={() => setMenuOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, background: '#fff', width: 300, height: '100%', padding: 24, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <Image src="/mts-logo.png" alt="Millionaire Traders Society" width={160} height={42} style={{ height: 36, width: 'auto' }} />
              <button onClick={() => setMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}>
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <Link href="/" className="dropdown-item" onClick={() => { setMenuOpen(false); pushDataLayer({ event: 'nav_click', link_text: 'Home', destination: '/', page_section: 'nav_mobile' }) }}>Home</Link>
            <Link href="/courses" className="dropdown-item" onClick={() => { setMenuOpen(false); pushDataLayer({ event: 'nav_click', link_text: 'All Courses', destination: '/courses', page_section: 'nav_mobile' }) }}>All Courses</Link>
            {COURSES.map(c => (
              <Link key={c.href} href={c.href} className="dropdown-item" onClick={() => { setMenuOpen(false); pushDataLayer({ event: 'nav_click', link_text: c.label, destination: c.href, page_section: 'nav_mobile_courses' }) }} style={{ paddingLeft: 28, fontSize: 13 }}>{c.label}</Link>
            ))}
            <Link href="/about" className="dropdown-item" onClick={() => { setMenuOpen(false); pushDataLayer({ event: 'nav_click', link_text: 'About Coach Jess', destination: '/about', page_section: 'nav_mobile' }) }}>About Coach Jess</Link>
            <Link href="/team" className="dropdown-item" onClick={() => { setMenuOpen(false); pushDataLayer({ event: 'nav_click', link_text: 'Meet the Team', destination: '/team', page_section: 'nav_mobile' }) }}>Meet the Team</Link>
            <Link href="/trading4kidz" className="dropdown-item" style={{ color: '#289E54', fontWeight: 700 }} onClick={() => { setMenuOpen(false); pushDataLayer({ event: 'nav_click', link_text: 'Trading4Kidz', destination: '/trading4kidz', page_section: 'nav_mobile' }) }}>Trading4Kidz</Link>
            <Link href="/contact" className="dropdown-item" onClick={() => { setMenuOpen(false); pushDataLayer({ event: 'nav_click', link_text: 'Contact', destination: '/contact', page_section: 'nav_mobile' }) }}>Contact</Link>
            <Link href="/free-course" className="btn-outline" onClick={() => { setMenuOpen(false); pushDataLayer({ event: 'cta_click', button_text: 'Get Free Course', destination: '/free-course', page_section: 'nav_mobile' }) }} style={{ marginTop: 12, justifyContent: 'center' }}>Get Free Course</Link>
            <Link href="/vip-course" className="btn-primary" onClick={() => { setMenuOpen(false); pushDataLayer({ event: 'cta_click', button_text: 'Join VIP', destination: '/vip-course', page_section: 'nav_mobile' }) }} style={{ marginTop: 8, justifyContent: 'center' }}>Join VIP →</Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile-btn { display: none; }
        @media (max-width: 960px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
