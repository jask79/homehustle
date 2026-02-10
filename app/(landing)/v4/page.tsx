'use client'

import { useState } from 'react'

export default function LandingV4() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    credit_score_above_600: '',
    bankruptcy_past_7_years: '',
    notes: '',
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
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone: formData.phone,
          source: 'landing-page-v4',
          // Additional fields as metadata/notes
          notes: `Credit Score 600+: ${formData.credit_score_above_600} | Bankruptcy 7yrs: ${formData.bankruptcy_past_7_years} | Notes: ${formData.notes || 'None'}`,
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
            <span className="text-4xl">✅</span>
          </div>
          <h2 className="text-2xl font-bold text-[#073B3E] mb-4">Application Received!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in becoming a <strong>Merchant Partner</strong>. 
            A team member will contact you within <strong>24 hours</strong>.
          </p>
          <p className="text-sm text-gray-500">
            Keep an eye on your phone and email. Talk soon!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#073B3E]" style={{ fontFamily: "'Outfit', 'Lato', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      
      {/* Top banner */}
      <div className="bg-[#FF8D07] text-white text-center py-3 px-4 text-sm font-semibold">
        🔒 Limited Opportunity — Only 30 Partner Spots Available
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8 lg:py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          
          {/* Left: Copy */}
          <div className="text-white mb-10 lg:mb-0">
            <div className="inline-block bg-[#FF8D07] text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
              💼 EXCLUSIVE PARTNER PROGRAM
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Earn <span className="text-[#FF8D07]">$4,200+ Monthly</span> as a Merchant Partner
            </h1>
            
            <p className="text-lg text-gray-300 mb-6">
              We have a unique role seeking <strong className="text-white">30 new Merchant Partners</strong>.
            </p>

            <p className="text-lg text-gray-300 mb-8">
              Not everyone will qualify for this one, but for those that do — 
              <strong className="text-[#FF8D07]"> it requires very little work</strong>.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                '$4,200 minimum monthly pay',
                'Very little work required',
                'Limited to 30 partners only',
                'Quick qualification process',
                'Contact within 24 hours',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#FF8D07] text-xl">✓</span>
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm">
                ⚡ <strong className="text-white">Spots filling fast</strong> — We review applications in the order received. 
                Fill out the form to see if you qualify.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="text-center mb-6">
              <span className="text-4xl mb-3 block">📋</span>
              <h2 className="text-xl font-bold text-[#073B3E]">Apply Now</h2>
              <p className="text-gray-500 text-sm mt-1">We'll contact you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9440C8] focus:border-[#9440C8] text-gray-900 bg-[#F6F6F6]"
                    placeholder="John"
                    value={formData.first_name}
                    onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9440C8] focus:border-[#9440C8] text-gray-900 bg-[#F6F6F6]"
                    placeholder="Smith"
                    value={formData.last_name}
                    onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9440C8] focus:border-[#9440C8] text-gray-900 bg-[#F6F6F6]"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9440C8] focus:border-[#9440C8] text-gray-900 bg-[#F6F6F6]"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Credit Score above 600? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="credit_score"
                      value="Y"
                      required
                      className="w-4 h-4 text-[#9440C8] focus:ring-[#9440C8]"
                      checked={formData.credit_score_above_600 === 'Y'}
                      onChange={(e) => setFormData({ ...formData, credit_score_above_600: e.target.value })}
                    />
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="credit_score"
                      value="N"
                      required
                      className="w-4 h-4 text-[#9440C8] focus:ring-[#9440C8]"
                      checked={formData.credit_score_above_600 === 'N'}
                      onChange={(e) => setFormData({ ...formData, credit_score_above_600: e.target.value })}
                    />
                    <span className="text-gray-700">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bankruptcy within past 7 years? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="bankruptcy"
                      value="Y"
                      required
                      className="w-4 h-4 text-[#9440C8] focus:ring-[#9440C8]"
                      checked={formData.bankruptcy_past_7_years === 'Y'}
                      onChange={(e) => setFormData({ ...formData, bankruptcy_past_7_years: e.target.value })}
                    />
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="bankruptcy"
                      value="N"
                      required
                      className="w-4 h-4 text-[#9440C8] focus:ring-[#9440C8]"
                      checked={formData.bankruptcy_past_7_years === 'N'}
                      onChange={(e) => setFormData({ ...formData, bankruptcy_past_7_years: e.target.value })}
                    />
                    <span className="text-gray-700">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Notes for us <span className="text-gray-400">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9440C8] focus:border-[#9440C8] text-gray-900 bg-[#F6F6F6] resize-none"
                  placeholder="Anything you'd like us to know..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
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
                {loading ? 'Submitting...' : 'Submit Application 👉'}
              </button>
            </form>

            <p className="text-xs text-gray-400 text-center mt-4">
              Your information is secure. We'll contact you within 24 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-[#FF8D07]/10 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white/80 text-sm">
            Thanks — talk soon. 🤝
          </p>
        </div>
      </div>
    </div>
  )
}
