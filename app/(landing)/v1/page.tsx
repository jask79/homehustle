'use client'

import { useState } from 'react'

// Metadata is in layout for landing pages

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
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✅</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">You're In!</h2>
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
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600">
      {/* Mobile-first hero + form layout */}
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          
          {/* Left: Copy */}
          <div className="text-white mb-10 lg:mb-0">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              🔥 Free Guide — No Credit Card Required
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              How to Make Your First <span className="text-yellow-300">$500 Week</span> From Home
            </h1>
            
            <p className="text-lg text-blue-100 mb-8">
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
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-blue-50">{item}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 text-blue-100 text-sm">
              <div className="flex -space-x-2">
                {['👩', '👨', '👩‍🦱', '🧑'].map((emoji, i) => (
                  <div key={i} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm border-2 border-white/30">
                    {emoji}
                  </div>
                ))}
              </div>
              <span>Join 2,400+ people building side income</span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="text-center mb-6">
              <span className="text-4xl mb-3 block">📘</span>
              <h2 className="text-xl font-bold text-gray-900">Get Your Free Guide</h2>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
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
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {loading ? 'Sending...' : 'Send Me the Free Guide →'}
              </button>
            </form>

            <p className="text-xs text-gray-400 text-center mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom trust strip */}
      <div className="bg-white/10 backdrop-blur-sm py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <span>✓ 100% Free</span>
            <span>✓ No Credit Card</span>
            <span>✓ Instant Access</span>
            <span>✓ Real Strategies</span>
          </div>
        </div>
      </div>
    </div>
  )
}
