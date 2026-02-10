'use client'

import { useState, useEffect } from 'react'

interface ExitIntentProps {
  onSubmit: (email: string) => Promise<void>
  headline?: string
  subheadline?: string
  buttonText?: string
  source: string
}

export default function ExitIntent({
  onSubmit,
  headline = "Wait! Before you go...",
  subheadline = "Get our free guide delivered to your inbox. No spam, just value.",
  buttonText = "Send Me the Guide",
  source,
}: ExitIntentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Check if already dismissed this session
    if (sessionStorage.getItem('exitIntentDismissed')) {
      setDismissed(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves through the top of the viewport
      if (e.clientY <= 0 && !dismissed && !submitted) {
        setIsVisible(true)
      }
    }

    // Add delay before enabling exit intent (don't trigger immediately)
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 5000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [dismissed, submitted])

  const handleClose = () => {
    setIsVisible(false)
    setDismissed(true)
    sessionStorage.setItem('exitIntentDismissed', 'true')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await onSubmit(email)
      setSubmitted(true)
      
      // Auto-close after success
      setTimeout(() => {
        setIsVisible(false)
      }, 2000)
    } catch {
      // Handle error silently
    } finally {
      setLoading(false)
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">You&apos;re in!</h3>
            <p className="text-gray-600">Check your inbox for the guide.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">👋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{headline}</h3>
              <p className="text-gray-600 text-sm">{subheadline}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9440C8] focus:border-[#9440C8] text-gray-900"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#9440C8] hover:bg-[#7B33A8] text-white font-bold py-3 px-6 rounded-full transition disabled:opacity-50"
              >
                {loading ? 'Sending...' : buttonText}
              </button>
            </form>

            <p className="text-xs text-gray-400 text-center mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  )
}

// Pre-configured exit intent for landing pages
export function LandingExitIntent({ source }: { source: string }) {
  const handleSubmit = async (email: string) => {
    const res = await fetch('https://mid.partners/api/capture-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        source: `exit-intent-${source}`,
      }),
    })
    if (!res.ok) throw new Error('Failed')
  }

  return (
    <ExitIntent
      onSubmit={handleSubmit}
      headline="Wait! Don't leave empty-handed"
      subheadline="Get our free guide on making your first $500 from home. Just enter your email."
      buttonText="Get the Free Guide 👉"
      source={source}
    />
  )
}
