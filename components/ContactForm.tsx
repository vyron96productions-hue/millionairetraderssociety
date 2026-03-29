'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', company: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '', company: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    fontSize: 15,
    border: '1px solid #e2e8f0',
    borderRadius: 10,
    outline: 'none',
    color: 'var(--dark)',
    background: '#fff',
    transition: 'border-color 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--dark)',
    marginBottom: 6,
  }

  if (status === 'success') {
    return (
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 16, padding: '40px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
        <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--dark)', marginBottom: 8 }}>Message Sent!</h3>
        <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7 }}>Thank you! We&apos;ll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Honeypot — hidden from users, filled by bots */}
      <input type="text" name="company" value={form.company} onChange={handleChange} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="jane@email.com" style={inputStyle} />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Subject</label>
        <select name="subject" value={form.subject} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
          <option value="">Select a topic...</option>
          <option>Question about Free Course</option>
          <option>VIP Membership</option>
          <option>60-Day Workshop</option>
          <option>VIP Bundle</option>
          <option>Technical Support</option>
          <option>General Inquiry</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us how we can help..." style={{ ...inputStyle, resize: 'vertical' }} />
      </div>

      {status === 'error' && (
        <p style={{ fontSize: 14, color: '#dc2626', background: '#fef2f2', padding: '10px 16px', borderRadius: 8, border: '1px solid #fecaca' }}>
          Something went wrong. Please try again.
        </p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-primary" style={{ fontSize: 16, padding: '15px 32px', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}>
        {status === 'sending' ? 'Sending…' : 'Send Message →'}
      </button>
    </form>
  )
}
