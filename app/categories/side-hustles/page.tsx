import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Side Hustles - Quick Ways to Make Extra Money | Home Hustle',
  description: 'Find side hustles you can start this week. Gig economy jobs, selling online, services, and more ways to make extra money in your spare time.',
}

const sideHustles = [
  {
    category: 'Gig Economy',
    icon: '🚗',
    hustles: [
      {
        title: 'Food Delivery (DoorDash, Uber Eats)',
        income: '$15-30/hour',
        startup: 'Car, bike, or scooter',
        flexibility: 'High',
        description: 'Deliver food from restaurants to customers. Work whenever you want, cash out daily. Peak hours (lunch and dinner) pay best.',
        tips: ['Work during peak hours and bad weather for higher pay', 'Multi-app to stay busy', 'Track mileage for tax deductions'],
        link: 'https://www.doordash.com/dasher/signup/',
      },
      {
        title: 'Rideshare (Uber, Lyft)',
        income: '$20-35/hour (before expenses)',
        startup: 'Car (4-door, under 15 years old)',
        flexibility: 'High',
        description: 'Drive passengers in your car. Higher earning potential than delivery but requires newer vehicle and more interaction.',
        tips: ['Drive during surge pricing', 'Airport runs pay well', 'Keep your car clean for 5-star ratings'],
        link: 'https://www.uber.com/us/en/drive/',
      },
      {
        title: 'Grocery Shopping (Instacart, Shipt)',
        income: '$15-25/hour',
        startup: 'Car and smartphone',
        flexibility: 'High',
        description: 'Shop for groceries and deliver to customers. Good for those who enjoy shopping and don\'t want passengers in their car.',
        tips: ['Learn store layouts', 'Communicate proactively with customers', 'Sunday mornings are busy'],
        link: 'https://shoppers.instacart.com/',
      },
      {
        title: 'Amazon Flex',
        income: '$18-25/hour (set rates)',
        startup: 'Car or large vehicle',
        flexibility: 'Medium',
        description: 'Deliver Amazon packages using your own vehicle. Reserved time blocks rather than on-demand, so income is more predictable.',
        tips: ['Grab blocks early in the morning', 'Larger vehicles get more opportunities', 'Holiday season is busy'],
        link: 'https://flex.amazon.com/',
      },
    ],
  },
  {
    category: 'Selling Online',
    icon: '🛒',
    hustles: [
      {
        title: 'Reselling (eBay, Poshmark, Mercari)',
        income: '$200-2,000+/month',
        startup: '$50-500 for inventory',
        flexibility: 'High',
        description: 'Buy low at thrift stores, garage sales, and clearance racks. Sell high online. Popular categories: clothing, electronics, toys, books.',
        tips: ['Use the eBay app to scan barcodes before buying', 'Start with items you already own', 'Specialize in a category you know'],
        link: 'https://www.ebay.com/sl/sell',
      },
      {
        title: 'Amazon FBA Arbitrage',
        income: '$500-5,000+/month',
        startup: '$200-1,000',
        flexibility: 'Medium',
        description: 'Buy discounted products at retail stores, send to Amazon warehouse, let Amazon handle fulfillment. Can scale to full-time income.',
        tips: ['Use Keepa or Jungle Scout to check sales history', 'Start with clearance items', 'Understand Amazon fees before buying'],
        link: 'https://sell.amazon.com/fulfillment-by-amazon',
      },
      {
        title: 'Facebook Marketplace Flipping',
        income: '$500-3,000+/month',
        startup: '$100-500',
        flexibility: 'High',
        description: 'Buy underpriced items locally and resell for profit. Furniture, electronics, and vehicles are popular categories.',
        tips: ['Negotiate everything', 'Focus on items you can pick up same day', 'Good photos sell faster'],
        link: 'https://www.facebook.com/marketplace/',
      },
      {
        title: 'Handmade Crafts (Etsy)',
        income: '$200-2,000+/month',
        startup: 'Materials cost',
        flexibility: 'High',
        description: 'Sell handmade items, vintage goods, or craft supplies. Great for creative people who enjoy making things.',
        tips: ['Find a niche with demand', 'Professional photos are essential', 'Etsy SEO is crucial for visibility'],
        link: 'https://www.etsy.com/sell',
      },
    ],
  },
  {
    category: 'Services',
    icon: '🔧',
    hustles: [
      {
        title: 'Pet Sitting (Rover, Care.com)',
        income: '$20-50/visit or $50-100/night',
        startup: 'None',
        flexibility: 'Medium',
        description: 'Watch dogs, cats, and other pets in your home or theirs. Overnights pay the most. Great for animal lovers.',
        tips: ['Build up reviews quickly', 'Offer extra services (walks, grooming)', 'Holiday weekends are premium'],
        link: 'https://www.rover.com/become-a-sitter/',
      },
      {
        title: 'Lawn Care & Snow Removal',
        income: '$25-50/yard (lawn) or $25-75/driveway (snow)',
        startup: '$200-500 for equipment',
        flexibility: 'Medium',
        description: 'Mow lawns in summer, shovel driveways in winter. Recurring customers create predictable income.',
        tips: ['Offer weekly service contracts', 'Upsell additional services', 'Quality work gets referrals'],
        link: 'https://www.taskrabbit.com/become-a-tasker',
      },
      {
        title: 'House Cleaning',
        income: '$25-50/hour',
        startup: '$50-100 for supplies',
        flexibility: 'Medium',
        description: 'Clean homes for busy professionals. Can start with basic supplies and scale to a cleaning business.',
        tips: ['Recurring clients are gold', 'Speed comes with experience', 'Get liability insurance'],
        link: 'https://www.handy.com/apply',
      },
      {
        title: 'Handyman Services (TaskRabbit)',
        income: '$30-80/hour',
        startup: 'Basic tools',
        flexibility: 'High',
        description: 'Help people with furniture assembly, mounting TVs, minor repairs, and odd jobs. IKEA assembly is always in demand.',
        tips: ['Get Elite Tasker status for more jobs', 'Specialize in high-demand skills', 'Fast response time wins'],
        link: 'https://www.taskrabbit.com/become-a-tasker',
      },
    ],
  },
  {
    category: 'Online Tasks',
    icon: '💻',
    hustles: [
      {
        title: 'User Testing (UserTesting.com)',
        income: '$10-60/test (20-60 min)',
        startup: 'Computer with webcam',
        flexibility: 'High',
        description: 'Test websites and apps while speaking your thoughts aloud. Get paid to give opinions on user experience.',
        tips: ['Complete your profile thoroughly', 'Respond to tests quickly', 'Speak clearly and give detailed feedback'],
        link: 'https://www.usertesting.com/get-paid-to-test',
      },
      {
        title: 'Survey Sites (Swagbucks, Survey Junkie)',
        income: '$50-200/month',
        startup: 'None',
        flexibility: 'High',
        description: 'Take surveys for market research companies. Low pay per hour but can do it while watching TV.',
        tips: ['Only use legitimate sites', 'Don\'t expect high hourly rates', 'Good for downtime'],
        link: 'https://www.swagbucks.com/',
      },
      {
        title: 'Microtasks (Amazon MTurk)',
        income: '$6-15/hour',
        startup: 'Computer',
        flexibility: 'High',
        description: 'Complete small tasks like data labeling, transcription, and surveys. Low pay but very flexible.',
        tips: ['Use scripts to find good HITs', 'Build qualifications for better tasks', 'Join MTurk communities for tips'],
        link: 'https://www.mturk.com/worker',
      },
      {
        title: 'Search Engine Evaluation',
        income: '$14-20/hour',
        startup: 'Computer and smartphone',
        flexibility: 'Medium',
        description: 'Rate search results and ads for Google, Bing, and other platforms. Part-time hours with set weekly minimums.',
        tips: ['Apply to Appen, Telus AI, and Welocalize', 'Follow guidelines carefully', 'Consistent quality beats speed'],
        link: 'https://appen.com/join-our-crowd/',
      },
    ],
  },
  {
    category: 'Creative',
    icon: '🎨',
    hustles: [
      {
        title: 'Photography (Events, Portraits)',
        income: '$100-500/session',
        startup: 'Camera ($500+)',
        flexibility: 'Medium',
        description: 'Shoot family portraits, events, headshots, or real estate photos. Weekends are busiest.',
        tips: ['Start with friends and family for portfolio', 'Specialize in a niche', 'Network with event planners'],
        link: 'https://www.thumbtack.com/join/photographer',
      },
      {
        title: 'Music Lessons',
        income: '$30-80/hour',
        startup: 'Instrument proficiency',
        flexibility: 'Medium',
        description: 'Teach piano, guitar, drums, or other instruments. In-person or online via Zoom.',
        tips: ['Kids lessons pay well', 'Offer package deals', 'Platform: Lessonface, TakeLessons'],
        link: 'https://takelessons.com/teachers',
      },
      {
        title: 'Voice Acting (Voices.com)',
        income: '$100-1,000+/project',
        startup: 'Decent microphone ($100+)',
        flexibility: 'High',
        description: 'Record voice overs for commercials, audiobooks, animations, and e-learning. Home studio required.',
        tips: ['Invest in acoustic treatment', 'Create professional demos', 'Specialize in a voice type'],
        link: 'https://www.voices.com/talent',
      },
    ],
  },
]

export default function SideHustlesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Side Hustles</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Make extra money in your spare time. These side hustles can be started quickly with 
          little to no upfront investment.
        </p>
      </div>

      {/* Quick Start */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl p-6 mb-12">
        <h3 className="font-bold text-xl mb-2">🚀 Want to Start Today?</h3>
        <p className="text-orange-100 mb-4">
          These hustles have the fastest signup and can earn you money within 24-48 hours:
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">DoorDash</span>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Instacart</span>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Rover</span>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">TaskRabbit</span>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Sell on Mercari</span>
        </div>
      </div>

      {/* Categories */}
      {sideHustles.map((category, catIndex) => (
        <section key={catIndex} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 flex items-center gap-3">
            <span className="text-3xl">{category.icon}</span>
            {category.category}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {category.hustles.map((hustle, hustleIndex) => (
              <article 
                key={hustleIndex}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{hustle.title}</h3>
                
                <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Income:</span>
                    <span className="font-semibold text-emerald-600 ml-1">{hustle.income}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Startup:</span>
                    <span className="font-semibold text-gray-900 ml-1">{hustle.startup}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{hustle.description}</p>

                <div className="mb-4">
                  <span className="text-xs font-semibold text-gray-500 uppercase">Pro Tips:</span>
                  <ul className="text-sm text-gray-600 mt-1">
                    {hustle.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-yellow-500">★</span> {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={hustle.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-4 py-2 rounded-lg transition"
                >
                  Get Started →
                </a>
              </article>
            ))}
          </div>
        </section>
      ))}

      {/* Tax Reminder */}
      <div className="bg-gray-100 rounded-xl p-6 mb-12">
        <h3 className="font-semibold text-gray-900 mb-2">📋 Don't Forget About Taxes!</h3>
        <p className="text-gray-600 text-sm">
          Side hustle income is taxable. Track your earnings and expenses, save 25-30% for taxes, 
          and consider making quarterly estimated payments if you earn more than $1,000/year. 
          Apps like Stride can help track mileage and expenses automatically.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 bg-gray-900 rounded-xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-3">Ready to Hustle?</h3>
        <p className="text-gray-300 mb-6">
          Get weekly updates on new side hustle opportunities and tips to maximize your earnings.
        </p>
        <Link 
          href="/subscribe"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
        >
          Subscribe for Free
        </Link>
      </div>
    </div>
  )
}
