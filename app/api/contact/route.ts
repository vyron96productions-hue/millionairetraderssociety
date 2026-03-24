import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json()

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('Contact form submission:', { name, email, subject, message })
    return NextResponse.json({ success: true })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'MTS Website <noreply@millionairetraderssociety.com>',
      to: ['info@millionairetraderssociety.com'],
      reply_to: email,
      subject: `New Website Inquiry — ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table cellpadding="8" style="font-family: sans-serif; font-size: 15px;">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Subject:</strong></td><td>${subject || 'Not specified'}</td></tr>
          <tr><td><strong>Message:</strong></td><td>${message || 'No message'}</td></tr>
        </table>
        <p style="margin-top:16px;color:#64748b;font-size:13px;">Submitted from millionairetraderssociety.com</p>
      `,
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
