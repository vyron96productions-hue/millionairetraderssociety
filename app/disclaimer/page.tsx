import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trading Risk Disclaimer',
  description: 'Important risk disclosure for Millionaire Traders Society. Trading involves substantial risk of loss. Past results do not guarantee future results.',
}

export default function DisclaimerPage() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg, #0D1117, #0a2a3a)', color: '#fff', padding: '72px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label" style={{ color: '#0DBEF3' }}>Important Notice</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 16 }}>Trading Risk Disclaimer</h1>
          <p style={{ fontSize: 16, opacity: 0.7, maxWidth: 480, margin: '0 auto' }}>Please read this disclaimer carefully before using any content, courses, or information provided by Millionaire Traders Society.</p>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: 800 }}>

          <div style={{ background: '#fef2f2', border: '2px solid #fecaca', borderRadius: 16, padding: '28px 32px', marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <span style={{ fontSize: 28, flexShrink: 0 }}>⚠️</span>
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: '#dc2626', marginBottom: 8 }}>High Risk Warning</h2>
                <p style={{ fontSize: 15, color: '#7f1d1d', lineHeight: 1.7 }}>
                  Trading financial instruments including stocks, options, futures, forex, and cryptocurrencies involves a <strong>substantial risk of loss</strong> and is not suitable for all investors. You could lose some or all of your invested capital. Do not trade with money you cannot afford to lose.
                </p>
              </div>
            </div>
          </div>

          {[
            {
              title: '1. Past Results Do Not Guarantee Future Results',
              body: `The performance data, testimonials, case studies, and examples published by Millionaire Traders Society are provided for informational and illustrative purposes only. Past trading results — whether of Coach Jessica Ramos, MTS staff, or any student — are not necessarily indicative of future results.

Any individual's trading results will vary based on their own skill level, risk tolerance, capital, market conditions, and many other factors outside of our control. There is no guarantee that you will achieve similar or any results from our courses or trading education.`,
            },
            {
              title: '2. Educational Purposes Only',
              body: `All content, courses, webinars, trade ideas, newsletters, videos, and materials provided by Millionaire Traders Society are for educational and informational purposes only. Nothing on this website or within any course constitutes financial advice, investment advice, trading advice, or any other type of advice.

You should not treat any of our content as a recommendation to buy, sell, or hold any specific financial instrument. Always conduct your own independent research and due diligence before making any trading or investment decisions.`,
            },
            {
              title: '3. Trade at Your Own Risk',
              body: `By participating in any Millionaire Traders Society course, program, webinar, or community, you acknowledge and agree that:

• You are solely responsible for your own trading decisions
• You understand the risks involved in trading financial markets
• You will not hold Millionaire Traders Society, Coach Jessica Ramos, or any affiliated parties liable for any trading losses you may incur
• You are trading with capital you can afford to lose
• You have consulted with a qualified financial advisor if needed`,
            },
            {
              title: '4. No Guarantee of Income or Profit',
              body: `Millionaire Traders Society makes no guarantee, representation, or warranty that participation in our courses or community will result in profits, income, or financial gain of any kind. Any income or profit examples shown are exceptional results and do not reflect the typical experience of most students.

Individual results will vary significantly based on experience, dedication, market conditions, and other variables. Many people who purchase trading education courses make little to no money from trading.`,
            },
            {
              title: '5. Seek Professional Advice',
              body: `Trading and investing in financial markets is a complex activity. Before making any trading or investment decisions, you should seek advice from a qualified, licensed financial advisor who understands your personal financial situation, goals, and risk tolerance.

Nothing provided by Millionaire Traders Society is a substitute for professional financial, legal, or tax advice.`,
            },
            {
              title: '6. Market Risk Factors',
              body: `Financial markets are subject to significant risks including but not limited to: market volatility, liquidity risk, leverage risk, regulatory changes, geopolitical events, and technical failures. Even experienced traders with sophisticated strategies regularly experience losses.

Options, futures, and leveraged products carry additional risks and can result in losses that exceed your initial investment.`,
            },
          ].map(s => (
            <div key={s.title} style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--dark)', marginBottom: 12 }}>{s.title}</h2>
              <div style={{ fontSize: 15, color: '#475569', lineHeight: 1.85, whiteSpace: 'pre-line' }}>{s.body}</div>
            </div>
          ))}

          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: 32, marginTop: 16 }}>
            <p style={{ fontSize: 14, color: '#94a3b8', marginBottom: 24 }}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/terms" className="btn-outline" style={{ fontSize: 14, padding: '10px 20px' }}>Terms of Service</Link>
              <Link href="/privacy" className="btn-outline" style={{ fontSize: 14, padding: '10px 20px' }}>Privacy Policy</Link>
              <Link href="/contact" className="btn-primary" style={{ fontSize: 14, padding: '10px 20px' }}>Questions? Contact Us</Link>
            </div>
          </div>

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 12, color: '#94a3b8' }}>Engineered By</span>
            <a href="https://verdictiq.org" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Image src="/verdictiq-logo.png" alt="VerdictIQ" width={100} height={34} style={{ height: 28, width: 'auto' }} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
