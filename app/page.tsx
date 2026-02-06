import Link from 'next/link'
import Image from 'next/image'

const featuredOpportunities = [
  {
    id: 1,
    title: 'Remote Customer Service Representative',
    company: 'Various Companies',
    type: 'remote',
    schedule: 'Part-Time or Full-Time',
    pay: '$15-25/hour',
    description: 'Help customers via phone, chat, or email from the comfort of your home. Many companies offer flexible schedules.',
    categories: ['Remote Jobs', 'Customer Service'],
  },
  {
    id: 2,
    title: 'Freelance Content Writer',
    company: 'Multiple Platforms',
    type: 'freelance',
    schedule: 'Flexible',
    pay: '$25-75/hour',
    description: 'Write articles, blog posts, and marketing content for businesses. Set your own rates and schedule.',
    categories: ['Freelance', 'Writing'],
  },
  {
    id: 3,
    title: 'Virtual Bookkeeper',
    company: 'Remote Firms',
    type: 'remote',
    schedule: 'Part-Time',
    pay: '$20-40/hour',
    description: 'Manage financial records for small businesses remotely. QuickBooks experience preferred.',
    categories: ['Remote Jobs', 'Finance'],
  },
  {
    id: 4,
    title: 'Online Tutoring',
    company: 'Various Platforms',
    type: 'freelance',
    schedule: 'Flexible',
    pay: '$20-80/hour',
    description: 'Teach students online in subjects like Math, English, or test prep. Great for teachers and subject experts.',
    categories: ['Freelance', 'Education'],
  },
  {
    id: 5,
    title: 'Dividend Stock Investing',
    company: 'Self-Directed',
    type: 'passive',
    schedule: 'Passive',
    pay: '3-6% annual yield',
    description: 'Build a portfolio of dividend-paying stocks for regular passive income. Start with any amount.',
    categories: ['Passive Income', 'Investing'],
  },
  {
    id: 6,
    title: 'Print on Demand Business',
    company: 'Printful, Redbubble, etc.',
    type: 'passive',
    schedule: 'Semi-Passive',
    pay: '$500-5000+/month potential',
    description: 'Design t-shirts, mugs, and more. Products are printed and shipped when customers order.',
    categories: ['Passive Income', 'E-commerce'],
  },
]

const categories = [
  { name: 'Remote Jobs', icon: '💼', count: 45, href: '/categories/remote-jobs' },
  { name: 'Freelance Work', icon: '✍️', count: 32, href: '/categories/freelance' },
  { name: 'Passive Income', icon: '💰', count: 28, href: '/categories/passive-income' },
  { name: 'Side Hustles', icon: '🚀', count: 38, href: '/categories/side-hustles' },
]

function getBadgeClass(type: string) {
  switch (type) {
    case 'remote': return 'badge badge-remote'
    case 'freelance': return 'badge badge-freelance'
    case 'passive': return 'badge badge-fulltime'
    default: return 'badge badge-parttime'
  }
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80"
          alt="People working remotely"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#073B3E]/95 via-[#073B3E]/80 to-[#073B3E]/60" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#073B3E] to-transparent" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 py-20 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-2xl">
            Real Work From Home Opportunities
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-2xl">
            No scams. No get-rich-quick schemes. Just legitimate ways for everyday Americans
            to earn money from home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/opportunities"
              className="bg-[#FF8D07] hover:bg-[#E67D00] text-white px-8 py-3 rounded-full font-semibold transition text-center"
            >
              Browse All Opportunities
            </Link>
            <Link
              href="/guides/getting-started"
              className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition text-center"
            >
              Getting Started Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-[#0A4F53] py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-[#FF8D07] text-xl">✓</span>
              <span>100% Vetted Opportunities</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#FF8D07] text-xl">✓</span>
              <span>No Upfront Fees Required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#FF8D07] text-xl">✓</span>
              <span>Updated Weekly</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#FF8D07] text-xl">✓</span>
              <span>Real Pay Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Browse by Category</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#FF8D07]/40 hover:shadow-[0_0_20px_rgba(255,141,7,0.1)] transition text-center"
              >
                <span className="text-4xl mb-3 block">{cat.icon}</span>
                <h3 className="font-semibold text-white">{cat.name}</h3>
                <p className="text-sm text-white/50">{cat.count} opportunities</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-16 bg-[#0A4F53]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Featured Opportunities</h2>
            <Link href="/opportunities" className="text-[#FF8D07] hover:text-[#FFa030] font-medium">
              View All →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredOpportunities.map((opp) => (
              <article
                key={opp.id}
                className="opportunity-card bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={getBadgeClass(opp.type)}>
                    {opp.type === 'passive' ? 'Passive Income' : opp.type}
                  </span>
                  <span className="text-[#FF8D07] font-semibold text-sm">{opp.pay}</span>
                </div>
                <h3 className="font-bold text-lg text-white mb-1">{opp.title}</h3>
                <p className="text-sm text-white/50 mb-3">{opp.company} · {opp.schedule}</p>
                <p className="text-white/70 text-sm mb-4">{opp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {opp.categories.map((cat) => (
                    <span key={cat} className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded">
                      {cat}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 text-white">How Home Hustle Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF8D07]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">We Research</h3>
              <p className="text-white/70">
                We spend hours researching and vetting every opportunity so you don&apos;t have to.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF8D07]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">We Verify</h3>
              <p className="text-white/70">
                Every listing is checked for legitimacy. No scams, MLMs, or shady opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9440C8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">You Apply</h3>
              <p className="text-white/70">
                Browse opportunities that fit your skills and schedule, then apply directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0A4F53] border-t border-[#FF8D07]/20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Home Hustle?</h2>
          <p className="text-white/80 mb-8">
            Join thousands of Americans who have found legitimate ways to earn from home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/opportunities"
              className="bg-[#9440C8] hover:bg-[#7B33A8] text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Browse Opportunities
            </Link>
            <Link
              href="/subscribe"
              className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Get Weekly Updates
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
