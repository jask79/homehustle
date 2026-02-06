'use client'

import { useState } from 'react'

export default function SubscribePage() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
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
          source: 'subscribe-page',
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
      <div className="min-h-[60vh] bg-[#073B3E] flex items-center justify-center px-4 py-16">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="w-20 h-20 bg-[#FF8D07]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✅</span>
          </div>
          <h2 className="text-2xl font-bold text-[#073B3E] mb-4">You're Subscribed!</h2>
          <p className="text-gray-600 mb-6">
            Thanks for signing up. We'll send you the latest work-from-home
            opportunities and tips straight to your inbox.
          </p>
          <p className="text-sm text-gray-500">
            Didn't get a confirmation? Check your spam folder.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[60vh] bg-[#073B3E] flex items-center justify-center px-4 py-16">
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-md w-full">
        <div className="text-center mb-6">
          <span className="text-4xl mb-3 block">📬</span>
          <h1 className="text-2xl font-bold text-[#073B3E]">Get Updates</h1>
          <p className="text-gray-500 text-sm mt-1">
            Stay in the loop with the latest opportunities — no spam, ever.
          </p>
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
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9440C8] focus:border-[#9440C8] text-gray-900 bg-[#F6F6F6]"
              placeholder="Your last name"
              value={formData.last_name}
              onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
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

          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#9440C8] hover:bg-[#54117E] text-white font-bold py-4 px-6 rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {loading ? 'Sending...' : 'Subscribe'}
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  )
}
