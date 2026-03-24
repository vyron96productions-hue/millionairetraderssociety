import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <div style={{ fontSize: 72, fontWeight: 900, background: 'linear-gradient(90deg, #0DBEF3, #289E54)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1, marginBottom: 16 }}>404</div>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: 'var(--dark)', marginBottom: 12 }}>Page Not Found</h1>
        <p style={{ fontSize: 16, color: 'var(--gray)', marginBottom: 32, lineHeight: 1.7 }}>The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary">Go Home →</Link>
          <Link href="/free-course" className="btn-outline">Free Course</Link>
        </div>
      </div>
    </div>
  )
}
