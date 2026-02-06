'use client'

import { useState } from 'react'

type QuizAnswer = {
  question: string
  answer: string
}

const questions = [
  {
    id: 1,
    question: "How much time can you dedicate per week?",
    options: [
      { label: "1-5 hours", value: "minimal", emoji: "⏰" },
      { label: "5-15 hours", value: "moderate", emoji: "📅" },
      { label: "15-30 hours", value: "significant", emoji: "💪" },
      { label: "30+ hours (full-time)", value: "fulltime", emoji: "🚀" },
    ],
  },
  {
    id: 2,
    question: "What's your main goal?",
    options: [
      { label: "Extra spending money", value: "extra", emoji: "💵" },
      { label: "Pay off debt", value: "debt", emoji: "📉" },
      { label: "Replace my job income", value: "replace", emoji: "🔄" },
      { label: "Build long-term wealth", value: "wealth", emoji: "📈" },
    ],
  },
  {
    id: 3,
    question: "What skills do you have? (Pick your strongest)",
    options: [
      { label: "Writing or communication", value: "writing", emoji: "✍️" },
      { label: "Tech or computer skills", value: "tech", emoji: "💻" },
      { label: "Creative or artistic", value: "creative", emoji: "🎨" },
      { label: "People skills / sales", value: "sales", emoji: "🤝" },
      { label: "None of these — teach me!", value: "beginner", emoji: "🌱" },
    ],
  },
  {
    id: 4,
    question: "How much can you invest upfront?",
    options: [
      { label: "$0 — I need free options", value: "zero", emoji: "🆓" },
      { label: "Under $100", value: "low", emoji: "💰" },
      { label: "$100-500", value: "medium", emoji: "💵" },
      { label: "$500+ for the right opportunity", value: "high", emoji: "🏦" },
    ],
  },
]

function getRecommendation(answers: QuizAnswer[]): { title: string; description: string; hustles: string[] } {
  const timeAnswer = answers.find(a => a.question === questions[0].question)?.answer
  const goalAnswer = answers.find(a => a.question === questions[1].question)?.answer
  const skillAnswer = answers.find(a => a.question === questions[2].question)?.answer
  
  // Simple recommendation logic
  if (skillAnswer === 'writing') {
    return {
      title: "Content Creator Path",
      description: "Your communication skills are gold in today's digital economy. Here's where you'll thrive:",
      hustles: ["Freelance writing ($25-75/hr)", "Social media management", "Copywriting for businesses", "Starting a blog or newsletter"]
    }
  } else if (skillAnswer === 'tech') {
    return {
      title: "Tech Leverage Path", 
      description: "Your tech skills open doors most people can't access. High-value opportunities:",
      hustles: ["Freelance web development", "Virtual assistant (tech-focused)", "Online tutoring (tech subjects)", "No-code app building"]
    }
  } else if (skillAnswer === 'creative') {
    return {
      title: "Creative Entrepreneur Path",
      description: "Your creativity is a superpower. Here's how to monetize it:",
      hustles: ["Print-on-demand products", "Selling digital designs", "Social media content creation", "Etsy or creative marketplaces"]
    }
  } else if (skillAnswer === 'sales') {
    return {
      title: "Relationship Builder Path",
      description: "People who connect with others easily can earn big. Your opportunities:",
      hustles: ["Affiliate marketing", "Remote sales positions", "Real estate referrals", "High-ticket coaching/consulting"]
    }
  } else {
    // Beginner path
    if (timeAnswer === 'minimal') {
      return {
        title: "Quick Cash Path",
        description: "Perfect for beginners with limited time. Start earning fast with:",
        hustles: ["Paid surveys & micro-tasks", "Selling unused items", "Cashback & reward apps", "Pet sitting / dog walking"]
      }
    } else if (goalAnswer === 'wealth') {
      return {
        title: "Wealth Builder Path",
        description: "Building long-term wealth takes strategy. Your roadmap:",
        hustles: ["Dividend investing", "Content/affiliate sites", "Digital product creation", "Real estate crowdfunding"]
      }
    } else {
      return {
        title: "Flexible Beginner Path",
        description: "No experience needed for these proven hustles:",
        hustles: ["Freelancing on Fiverr/Upwork", "Virtual assistant work", "Online tutoring", "Delivery/rideshare (flexible)"]
      }
    }
  }
}

export default function LandingV2() {
  const [step, setStep] = useState(0) // 0-3 = questions, 4 = form, 5 = result
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    phone: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [recommendation, setRecommendation] = useState<ReturnType<typeof getRecommendation> | null>(null)

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, { question: questions[step].question, answer }]
    setAnswers(newAnswers)
    
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      // Calculate recommendation before showing form
      setRecommendation(getRecommendation(newAnswers))
      setStep(questions.length) // Go to form
    }
  }

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
          source: 'landing-page-v2',
        }),
      })

      if (!res.ok) throw new Error('Something went wrong')
      
      setStep(questions.length + 1) // Show result
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const progress = Math.min((step / questions.length) * 100, 100)

  // Result screen
  if (step === questions.length + 1 && recommendation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-emerald-500">
        <div className="max-w-2xl mx-auto px-4 py-8 lg:py-16">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🎯</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Your Perfect Match:
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-purple-600">
                {recommendation.title}
              </h2>
            </div>

            <p className="text-gray-600 text-center mb-6">
              {recommendation.description}
            </p>

            <div className="bg-purple-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Your Top Recommended Hustles:</h3>
              <ul className="space-y-3">
                {recommendation.hustles.map((hustle, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </span>
                    <span className="text-gray-700">{hustle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <p className="text-blue-800 font-medium mb-2">
                📧 Check your inbox!
              </p>
              <p className="text-blue-600 text-sm">
                We're sending you a detailed guide with step-by-step instructions 
                for getting started with each of these opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Form screen (after quiz)
  if (step === questions.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-emerald-500">
        <div className="max-w-md mx-auto px-4 py-8 lg:py-16">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">We Found Your Perfect Match!</h2>
              <p className="text-gray-500 text-sm mt-2">
                Enter your info to see your personalized recommendations
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900"
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
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {loading ? 'Loading...' : 'See My Results →'}
              </button>
            </form>

            <p className="text-xs text-gray-400 text-center mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Quiz questions
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-emerald-500">
      <div className="max-w-xl mx-auto px-4 py-8 lg:py-16">
        {/* Header */}
        <div className="text-center text-white mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Find Your Perfect Side Hustle
          </h1>
          <p className="text-purple-100">
            Answer 4 quick questions to get personalized recommendations
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-white/80 text-sm mb-2">
            <span>Question {step + 1} of {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            {questions[step].question}
          </h2>

          <div className="space-y-3">
            {questions[step].options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="w-full flex items-center gap-4 p-4 bg-gray-50 hover:bg-purple-50 border-2 border-gray-200 hover:border-purple-400 rounded-xl transition text-left group"
              >
                <span className="text-2xl">{option.emoji}</span>
                <span className="font-medium text-gray-700 group-hover:text-purple-700">
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Back button (if not first question) */}
        {step > 0 && (
          <button
            onClick={() => {
              setStep(step - 1)
              setAnswers(answers.slice(0, -1))
            }}
            className="mt-4 text-white/80 hover:text-white text-sm mx-auto block"
          >
            ← Back to previous question
          </button>
        )}
      </div>
    </div>
  )
}
