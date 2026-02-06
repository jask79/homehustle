'use client'

import { useState } from 'react'

export default function FooterForm() {
  const [email, setEmail] = useState('')
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
          email,
          source: 'footer-signup',
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
      <p className="text-sm text-[#FF8D07] font-medium">
        Thanks! You're subscribed.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#FF8D07]/50"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-[#FF8D07] hover:bg-[#E67D00] text-white px-4 py-2 rounded-lg text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Subscribe'}
      </button>
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </form>
  )
}
