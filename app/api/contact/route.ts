import { NextRequest, NextResponse } from 'next/server'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name    = (String(body.name    ?? '')).trim()
  const email   = (String(body.email   ?? '')).trim()
  const subject = (String(body.subject ?? '')).trim()
  const message = (String(body.message ?? '')).trim()
  const company = (String(body.company ?? '')).trim()

  if (company) {
    return NextResponse.json({ success: true })
  }

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set — contact form submission dropped:', { name, email, subject })
    return NextResponse.json({ error: 'Unable to send message. Please try again later.' }, { status: 500 })
  }

  const safeName    = escapeHtml(name)
  const safeEmail   = escapeHtml(email)
  const safeSubject = escapeHtml(subject)
  const safeMessage = escapeHtml(message)

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'MTS Website <noreply@barguard.app>',
      to: ['info@millionairetraderssociety.com'],
      reply_to: email,
      subject: `New Website Inquiry — ${safeName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table cellpadding="8" style="font-family: sans-serif; font-size: 15px;">
          <tr><td><strong>Name:</strong></td><td>${safeName}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${safeEmail}</td></tr>
          <tr><td><strong>Subject:</strong></td><td>${safeSubject || 'Not specified'}</td></tr>
          <tr><td><strong>Message:</strong></td><td>${safeMessage || 'No message'}</td></tr>
        </table>
        <p style="margin-top:16px;color:#64748b;font-size:13px;">Submitted from millionairetraderssociety.com</p>
      `,
    }),
  })

  if (!res.ok) {
    const errBody = await res.json().catch(() => null)
    console.error('Resend API error:', errBody)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
