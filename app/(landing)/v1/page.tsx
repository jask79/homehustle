'use client'

import { useState } from 'react'
import Image from 'next/image'
import { LandingExitIntent } from '../../components/ExitIntent'

export default function LandingV1() {
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    phone: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('https://mid.partners/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'landing-page-v1',
        }),
      })

      if (!res.ok) throw new Error('Something went wrong')
      
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#073B3E] flex items-center justify-center px-4" style={{ fontFamily: "'Outfit', 'Lato', sans-serif" }}>
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="w-20 h-20 bg-[#FF8D07]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✅</span>
          </div>
          <h2 className="text-2xl font-bold text-[#073B3E] mb-4">You're In!</h2>
          <p className="text-gray-600 mb-6">
            Check your email for the <strong>$500 Week Starter Guide</strong>. 
            It's packed with actionable steps you can take today.
          </p>
          <p className="text-sm text-gray-500">
            Didn't get it? Check your spam folder or reply to our welcome email.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#073B3E]" style={{ fontFamily: "'Outfit', 'Lato', sans-serif" }}>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      
      {/* Hero section with background image */}
      <section className="relative min-h-[600px] flex flex-col overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
          alt="Woman working from home on laptop"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#073B3E]/95 via-[#073B3E]/80 to-[#073B3E]/60" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#073B3E] to-transparent" />

        {/* Top banner */}
        <div className="relative bg-[#FF8D07] text-white text-center py-3 px-4 text-sm font-semibold">
          🔥 Get paid up to $500/week working from home — No experience required!
        </div>

        {/* Main content */}
        <div className="relative max-w-6xl mx-auto px-4 py-8 lg:py-16 flex-1 flex items-center">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center w-full">

            {/* Left: Copy */}
            <div className="text-white mb-10 lg:mb-0">
              <div className="inline-block bg-[#FF8D07] text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
                📘 FREE GUIDE — No Credit Card Required
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                How to Make Your First <span className="text-[#FF8D07]">$500 Week</span> From Home
              </h1>

              <p className="text-lg text-gray-300 mb-8">
                No experience needed. No startup costs. Just proven methods that real people
                are using right now to build extra income from their couch.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  '5 beginner-friendly hustles anyone can start today',
                  'Exact steps to land your first paying client or sale',
                  'Time-saving tools the pros use (most are free)',
                  'Common mistakes that kill most side hustles',
                  'Real income examples with realistic timelines',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#FF8D07] text-xl">✓</span>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>

              {/* Social proof + urgency */}
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-gray-300 text-sm">
                  <div className="flex -space-x-2">
                    {['👩', '👨', '👩‍🦱', '🧑'].map((emoji, i) => (
                      <div key={i} className="w-8 h-8 bg-[#FF8D07]/30 rounded-full flex items-center justify-center text-sm border-2 border-[#073B3E]">
                        {emoji}
                      </div>
                    ))}
                  </div>
                  <span>Join 2,400+ people building side income</span>
                </div>
                <div className="flex items-center gap-2 text-[#FF8D07] text-sm font-medium">
                  <span className="animate-pulse">🔥</span>
                  <span>127 people downloaded this guide today</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="text-center mb-6">
                <span className="text-4xl mb-3 block">💰</span>
                <h2 className="text-xl font-bold text-[#073B3E]">Get Your Free Guide</h2>
                <p className="text-gray-500 text-sm mt-1">Instant access — no spam, ever.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9440C8] focus:border-[#9440C8] text-gray-900 bg-[#F6F6F6]"
                    placeholder="Your first name"
                    value={formData.first_name}
                    onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9440C8] focus:border-[#9440C8] text-gray-900 bg-[#F6F6F6]"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9440C8] focus:border-[#9440C8] text-gray-900 bg-[#F6F6F6]"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {error && (
                  <p className="text-red-600 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#9440C8] hover:bg-[#54117E] text-white font-bold py-4 px-6 rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {loading ? 'Sending...' : 'Send Me the Free Guide 👉'}
                </button>
              </form>

              <p className="text-xs text-gray-400 text-center mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom trust strip */}
      <div className="bg-[#FF8D07]/10 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <span>✓ 100% Free</span>
            <span>✓ No Credit Card</span>
            <span>✓ Instant Access</span>
            <span>✓ Real Strategies</span>
          </div>
        </div>
      </div>

      {/* Exit Intent Popup */}
      {!submitted && <LandingExitIntent source="v1" />}
    </div>
  )
}
