import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Opportunities - Work From Home & Side Hustles | Home Hustle',
  description: 'Browse all work from home opportunities, remote jobs, side hustles, and passive income ideas in one place.',
}

const categories = [
  {
    title: 'Remote Jobs',
    icon: '💼',
    description: 'Full-time and part-time positions from companies actively hiring remote workers.',
    count: '10+',
    examples: ['Customer Service', 'Data Entry', 'Claims Processing', 'Sales'],
    link: '/categories/remote-jobs',
    color: 'blue',
  },
  {
    title: 'Freelance Work',
    icon: '✍️',
    description: 'Build your own client base with flexible project-based work on your own schedule.',
    count: '12+',
    examples: ['Writing', 'Design', 'Virtual Assistant', 'Web Development'],
    link: '/categories/freelance',
    color: 'purple',
  },
  {
    title: 'Passive Income',
    icon: '💰',
    description: 'Strategies to build income streams that work while you sleep.',
    count: '12+',
    examples: ['Dividends', 'Print on Demand', 'Digital Products', 'REITs'],
    link: '/categories/passive-income',
    color: 'emerald',
  },
  {
    title: 'Side Hustles',
    icon: '🚀',
    description: 'Quick ways to make extra money that you can start this week.',
    count: '20+',
    examples: ['Delivery', 'Reselling', 'Pet Sitting', 'Handyman'],
    link: '/categories/side-hustles',
    color: 'orange',
  },
]

const featuredCompanies = [
  { name: 'Amazon', type: 'Remote Jobs', hiring: true },
  { name: 'TTEC', type: 'Remote Jobs', hiring: true },
  { name: 'Upwork', type: 'Freelance', hiring: true },
  { name: 'DoorDash', type: 'Side Hustle', hiring: true },
  { name: 'Rover', type: 'Side Hustle', hiring: true },
  { name: 'Instacart', type: 'Side Hustle', hiring: true },
]

function getCategoryColor(color: string) {
  const colors: Record<string, string> = {
    blue: 'bg-blue-50 border-blue-200 hover:border-blue-400',
    purple: 'bg-purple-50 border-purple-200 hover:border-purple-400',
    emerald: 'bg-emerald-50 border-emerald-200 hover:border-emerald-400',
    orange: 'bg-orange-50 border-orange-200 hover:border-orange-400',
  }
  return colors[color] || colors.blue
}

function getIconBg(color: string) {
  const colors: Record<string, string> = {
    blue: 'bg-blue-100',
    purple: 'bg-purple-100',
    emerald: 'bg-emerald-100',
    orange: 'bg-orange-100',
  }
  return colors[color] || colors.blue
}

export default function OpportunitiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">All Opportunities</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Browse our complete collection of vetted work-from-home opportunities. 
          Every listing is researched and verified—no scams, no MLMs, no BS.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
          <div className="text-3xl font-bold text-blue-600">50+</div>
          <div className="text-sm text-gray-600">Opportunities</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
          <div className="text-3xl font-bold text-emerald-600">4</div>
          <div className="text-sm text-gray-600">Categories</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
          <div className="text-3xl font-bold text-purple-600">100%</div>
          <div className="text-sm text-gray-600">Vetted</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
          <div className="text-3xl font-bold text-orange-600">Weekly</div>
          <div className="text-sm text-gray-600">Updated</div>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index}
              href={category.link}
              className={`rounded-xl border-2 p-6 transition ${getCategoryColor(category.color)}`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl ${getIconBg(category.color)}`}>
                  {category.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    <span className="text-sm font-semibold text-gray-500">{category.count} listings</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1 mb-3">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, i) => (
                      <span key={i} className="text-xs bg-white px-2 py-1 rounded text-gray-600">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Companies */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Companies Hiring Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredCompanies.map((company, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:shadow-md transition"
            >
              <div className="font-semibold text-gray-900">{company.name}</div>
              <div className="text-xs text-gray-500">{company.type}</div>
              {company.hiring && (
                <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  Hiring
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* How to Use */}
      <section className="bg-gray-50 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Find Your Perfect Opportunity</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Choose Your Path</h3>
            <p className="text-gray-600 text-sm">
              Want a stable remote job? Prefer flexible freelance? Looking for passive income? Browse the category that fits your goals.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Research & Apply</h3>
            <p className="text-gray-600 text-sm">
              Read the requirements, check the pay range, and apply directly through the company's website.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Start Earning</h3>
            <p className="text-gray-600 text-sm">
              Most opportunities have quick onboarding. Some side hustles can have you earning within 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-blue-600 rounded-xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-3">Don't Miss New Opportunities</h3>
        <p className="text-blue-100 mb-6">
          We add new opportunities every week. Subscribe to get them delivered to your inbox.
        </p>
        <Link 
          href="/subscribe"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          Subscribe for Free
        </Link>
      </div>
    </div>
  )
}
