'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { LandingExitIntent } from '../../../components/ExitIntent'

const V3_BG_IMAGE = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80"

const hustles = [
  {
    emoji: "📝",
    name: "Freelance Micro-Tasks",
    time: "Start in 10 minutes",
    pay: "$5-50 per task",
    description: "Sign up on Fiverr, TaskRabbit, or Amazon Mechanical Turk and start completing small tasks tonight.",
  },
  {
    emoji: "📦",
    name: "Sell What You Own",
    time: "Start in 15 minutes",
    pay: "$50-500+ this week",
    description: "List unused items on Facebook Marketplace, OfferUp, or Poshmark. Everyone has stuff worth money.",
  },
  {
    emoji: "🚗",
    name: "Delivery Driver",
    time: "Start in 1-2 hours",
    pay: "$15-25/hour",
    description: "DoorDash, Uber Eats, and Instacart approve drivers fast. Deliver food or groceries on your schedule.",
  },
  {
    emoji: "💬",
    name: "Online Surveys & Studies",
    time: "Start in 5 minutes",
    pay: "$1-100 per study",
    description: "UserTesting, Respondent, and Prolific pay for your opinions. Some studies pay $100+ for 1 hour.",
  },
  {
    emoji: "🐕",
    name: "Pet Sitting / Dog Walking",
    time: "Get bookings this week",
    pay: "$15-50 per walk/visit",
    description: "Rover and Wag connect you with pet owners. Set your rates. Work when you want.",
  },
]

export default function LandingV3() {
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    phone: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [timeString, setTimeString] = useState('')

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour >= 5 && hour < 12) {
      setTimeString("This Morning")
    } else if (hour >= 12 && hour < 17) {
      setTimeString("This Afternoon")
    } else {
      setTimeString("Tonight")
    }
  }, [])

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
          source: 'landing-page-v3',
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
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="w-20 h-20 bg-[#FF8D07]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🚀</span>
          </div>
          <h2 className="text-2xl font-bold text-[#073B3E] mb-4">Let's Go!</h2>
          <p className="text-gray-600 mb-6">
            Check your email for the complete guide with <strong>step-by-step setup instructions</strong> for all 5 hustles.
          </p>
          <p className="text-sm text-gray-500">
            Seriously — you could have money coming in by tomorrow.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#073B3E]" style={{ fontFamily: "'Outfit', 'Lato', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <Image
          src={V3_BG_IMAGE}
          alt="Woman smiling while looking at phone"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF8D07]/90 via-[#FF8D07]/70 to-[#073B3E]/80" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#073B3E] to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 py-8 md:py-12 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full mb-4 animate-pulse">
            ⚡ NO EXPERIENCE REQUIRED
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            5 Side Hustles You Can Start<br/>
            <span className="text-[#073B3E]">{timeString || "Tonight"}</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Stop scrolling. Start earning. These aren&apos;t &quot;get rich quick&quot; schemes —
            they&apos;re real ways people make extra cash, and you can start in minutes.
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="relative overflow-hidden">
        <Image
          src={V3_BG_IMAGE}
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#073B3E] via-[#073B3E]/95 to-[#073B3E]/90" />

      <div className="relative max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          
          {/* Left: Hustle preview */}
          <div className="lg:col-span-2 mb-8 lg:mb-0">
            <h2 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#FF8D07] rounded-full flex items-center justify-center text-sm text-white">5</span>
              Ways to Make Money Starting Now
            </h2>

            <div className="space-y-4">
              {hustles.map((hustle, i) => (
                <div 
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#FF8D07] transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{hustle.emoji}</div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-bold text-white">{hustle.name}</h3>
                        <span className="text-xs bg-[#FF8D07]/20 text-[#FF8D07] px-2 py-0.5 rounded-full font-semibold">
                          {hustle.pay}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{hustle.description}</p>
                      <p className="text-[#FF8D07] text-xs font-medium">
                        ⏱️ {hustle.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Teaser */}
            <div className="mt-6 bg-[#FF8D07]/10 border border-[#FF8D07]/30 rounded-xl p-4 text-center">
              <p className="text-[#FF8D07] font-medium">
                👆 That's just the preview. Get the full guide with <strong>exact links</strong>, 
                <strong> pro tips</strong>, and <strong>earnings breakdowns</strong>.
              </p>
            </div>
          </div>

          {/* Right: Sticky form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-2xl lg:sticky lg:top-4">
              <div className="text-center mb-4">
                <span className="text-3xl mb-2 block">📥</span>
                <h3 className="font-bold text-[#073B3E] text-lg">Get the Full Guide Free</h3>
                <p className="text-gray-500 text-sm">With step-by-step instructions</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9440C8] focus:border-[#9440C8] text-gray-900 bg-[#F6F6F6]"
                  placeholder="First name"
                  value={formData.first_name}
                  onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                />

                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9440C8] focus:border-[#9440C8] text-gray-900 bg-[#F6F6F6]"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9440C8] focus:border-[#9440C8] text-gray-900 bg-[#F6F6F6]"
                  placeholder="Phone (optional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />

                {error && (
                  <p className="text-red-600 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#9440C8] hover:bg-[#54117E] text-white font-bold py-3 px-6 rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Me the Guide 👉'}
                </button>
              </form>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-400">
                  ✓ 100% Free · ✓ No spam · ✓ Instant access
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Urgency footer */}
      <div className="bg-[#FF8D07] py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="font-bold text-lg mb-2">
            The best time to start was yesterday. The second best time is now.
          </p>
          <p className="text-white/80 text-sm">
            Stop putting it off. Your future self will thank you.
          </p>
        </div>
      </div>

      {/* Exit Intent Popup */}
      {!submitted && <LandingExitIntent source="v3" />}
    </div>
  )
}
