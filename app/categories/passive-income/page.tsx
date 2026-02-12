import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Passive Income Ideas - Build Wealth While You Sleep | Home Hustle',
  description: 'Discover legitimate passive income streams including dividend investing, digital products, rental income, and more ways to make money while you sleep.',
}

const passiveIncomeIdeas = [
  {
    category: 'Investment Income',
    icon: '📈',
    ideas: [
      {
        title: 'Dividend Stock Investing',
        income: '$100-10,000+/month (depending on portfolio)',
        startup: '$100 minimum',
        effort: 'Low',
        timeToProfit: '1-5 years to build meaningful income',
        description: 'Build a portfolio of dividend-paying stocks that pay you quarterly or monthly. Reinvest dividends to compound growth, then eventually live off the income.',
        howToStart: [
          'Open a brokerage account (Fidelity, Schwab, or Vanguard)',
          'Start with dividend ETFs like VYM, SCHD, or DGRO',
          'Reinvest dividends automatically',
          'Add money consistently each month',
        ],
        pros: ['Truly passive', 'Compounds over time', 'Tax advantages'],
        cons: ['Requires capital to generate meaningful income', 'Market risk'],
        resources: ['Fidelity.com', 'Schwab.com', 'r/dividends'],
      },
      {
        title: 'High-Yield Savings & CDs',
        income: '4-5% annually on your balance',
        startup: '$1 minimum',
        effort: 'Very Low',
        timeToProfit: 'Immediate (monthly interest)',
        description: 'Park your emergency fund and savings in high-yield accounts. Safe, FDIC-insured, and currently paying 4-5% APY.',
        howToStart: [
          'Open account at online bank (Marcus, Ally, Discover)',
          'Transfer funds from your regular bank',
          'Watch interest compound monthly',
        ],
        pros: ['Zero risk (FDIC insured)', 'No effort required', 'Liquid'],
        cons: ['Limited growth potential', 'Interest rates can drop'],
        resources: ['Marcus.com', 'Ally.com', 'Bankrate.com'],
      },
      {
        title: 'Real Estate Investment Trusts (REITs)',
        income: '3-8% dividend yields',
        startup: '$10+ (through brokerages)',
        effort: 'Low',
        timeToProfit: 'Quarterly dividends',
        description: 'Own real estate without being a landlord. REITs are companies that own income-producing properties and are required to pay 90% of profits as dividends.',
        howToStart: [
          'Research REIT types (residential, commercial, healthcare)',
          'Buy REIT ETFs like VNQ or individual REITs',
          'Collect quarterly dividends',
        ],
        pros: ['Real estate exposure without management', 'High dividends', 'Liquid'],
        cons: ['Interest rate sensitive', 'Dividends taxed as income'],
        resources: ['VNQ (Vanguard Real Estate ETF)', 'Nareit.com'],
      },
    ],
  },
  {
    category: 'Digital Products',
    icon: '💻',
    ideas: [
      {
        title: 'Print on Demand',
        income: '$500-5,000+/month',
        startup: '$0-50',
        effort: 'Medium upfront, Low ongoing',
        timeToProfit: '3-6 months',
        description: 'Design t-shirts, mugs, phone cases, and more. When someone orders, the product is printed and shipped automatically. You never touch inventory.',
        howToStart: [
          'Create designs using Canva or Adobe Illustrator',
          'Upload to Printful, Redbubble, or Merch by Amazon',
          'Optimize listings with keywords',
          'Promote on social media',
        ],
        pros: ['No inventory', 'Passive once set up', 'Unlimited scale potential'],
        cons: ['Competitive market', 'Requires good designs', 'Marketing needed'],
        resources: ['Printful.com', 'Redbubble.com', 'Merch.amazon.com'],
      },
      {
        title: 'Sell Digital Downloads',
        income: '$200-3,000+/month',
        startup: '$0-100',
        effort: 'High upfront, Very Low ongoing',
        timeToProfit: '1-3 months',
        description: 'Create once, sell forever. Digital planners, templates, presets, ebooks, courses, and printables can sell while you sleep.',
        howToStart: [
          'Identify what people need (templates, guides, tools)',
          'Create your product using free tools',
          'List on Etsy, Gumroad, or your own site',
          'Drive traffic through Pinterest and SEO',
        ],
        pros: ['High margins (nearly 100%)', 'No shipping', 'Sell unlimited copies'],
        cons: ['Upfront work required', 'Marketing needed', 'Can be pirated'],
        resources: ['Gumroad.com', 'Etsy.com', 'Canva.com'],
      },
      {
        title: 'Stock Photography/Video',
        income: '$100-2,000+/month',
        startup: 'Camera or smartphone',
        effort: 'Medium upfront, Low ongoing',
        timeToProfit: '6-12 months',
        description: 'Upload photos and videos to stock sites. Get paid each time someone licenses your content. Popular subjects can sell thousands of times.',
        howToStart: [
          'Shoot high-quality, in-demand content',
          'Upload to Shutterstock, Adobe Stock, iStock',
          'Tag and keyword optimize',
          'Build a large portfolio (500+ images)',
        ],
        pros: ['Single photo can earn for years', 'Creative outlet', 'Flexible'],
        cons: ['Competitive market', 'Requires equipment', 'Slow to build'],
        resources: ['Contributor.shutterstock.com', 'Stock.adobe.com'],
      },
      {
        title: 'AI Prompt Packs',
        income: '$200-5,000+/month',
        startup: '$0',
        effort: 'Medium upfront, Very Low ongoing',
        timeToProfit: '1-2 months',
        description: 'Create and sell prompt libraries for ChatGPT, Midjourney, and other AI tools. Buyers want faster, better results—your prompts save them hours.',
        howToStart: [
          'Master a specific AI tool (image gen, writing, coding)',
          'Create 20-50 tested, results-driven prompts',
          'Package with examples and instructions',
          'Sell on Gumroad, Etsy, or PromptBase',
        ],
        pros: ['Fast-growing market', 'Zero production cost', 'High margins'],
        cons: ['Market still emerging', 'Requires AI expertise', 'Competition increasing'],
        resources: ['Gumroad.com', 'PromptBase.com', 'Etsy.com'],
      },
      {
        title: 'Notion Templates',
        income: '$200-3,000+/month',
        startup: '$0',
        effort: 'Medium upfront, Very Low ongoing',
        timeToProfit: '1-3 months',
        description: 'Build productivity templates for Notion—habit trackers, budget planners, content calendars, CRMs. Millions use Notion and want ready-made systems.',
        howToStart: [
          'Identify a specific use case (students, creators, entrepreneurs)',
          'Build a polished, easy-to-use template',
          'Create tutorial content for marketing',
          'Sell on Gumroad, Etsy, or Notion marketplace',
        ],
        pros: ['Huge user base', 'No code required', 'Bundle potential'],
        cons: ['Saturated niches', 'Needs good design sense', 'Support requests'],
        resources: ['Notion.so', 'Gumroad.com', 'Etsy.com'],
      },
      {
        title: 'Custom GPTs for Sale',
        income: '$300-5,000+/month',
        startup: '$20/mo (ChatGPT Plus)',
        effort: 'Medium upfront, Very Low ongoing',
        timeToProfit: '1-2 months',
        description: 'Build specialized GPTs that solve specific problems—content generators, research assistants, niche advisors. List them on the GPT Store or sell access directly.',
        howToStart: [
          'Identify a painful problem in a niche you know',
          'Build a GPT with detailed instructions and knowledge files',
          'Test extensively and gather feedback',
          'Publish to GPT Store or sell on Gumroad',
        ],
        pros: ['Hot market', 'Low barrier to entry', 'Recurring potential'],
        cons: ['Platform dependent', 'Competition growing', 'Needs marketing'],
        resources: ['OpenAI.com', 'Gumroad.com', 'PromptBase.com'],
      },
      {
        title: 'Newsletter Sponsorships',
        income: '$500-10,000+/month',
        startup: '$0-100',
        effort: 'High upfront, Medium ongoing',
        timeToProfit: '6-12 months',
        description: 'Build an email newsletter in a niche, grow subscribers, then sell sponsorship slots to brands. CPMs range from $20-100+ depending on niche.',
        howToStart: [
          'Pick a niche with advertiser demand (finance, tech, B2B)',
          'Launch on Beehiiv, ConvertKit, or Substack',
          'Grow to 1,000+ engaged subscribers',
          'Pitch sponsors or join ad networks like Sparkloop',
        ],
        pros: ['Own your audience', 'Recurring revenue', 'Build authority'],
        cons: ['Slow to build', 'Consistent writing required', 'Churn management'],
        resources: ['Beehiiv.com', 'ConvertKit.com', 'Sparkloop.com'],
      },
      {
        title: 'YouTube Automation (Faceless Channels)',
        income: '$500-10,000+/month',
        startup: '$0-500',
        effort: 'Medium upfront, Low-Medium ongoing',
        timeToProfit: '6-12 months',
        description: 'Build YouTube channels without showing your face. Use AI voiceovers, stock footage, and outsourced editing. Niches like finance, history, and motivation work well.',
        howToStart: [
          'Pick a niche with high CPM (finance, tech, business)',
          'Use AI tools like ElevenLabs for voiceovers',
          'Outsource editing on Fiverr or hire a team',
          'Post consistently (2-4 videos per week)',
        ],
        pros: ['Scalable (run multiple channels)', 'Ad revenue + sponsorships', 'Sell channels for 30-40x monthly revenue'],
        cons: ['Takes time to monetize', 'Competitive space', 'Algorithm changes'],
        resources: ['YouTube.com/creators', 'ElevenLabs.io', 'Fiverr.com'],
      },
    ],
  },
  {
    category: 'Rental Income',
    icon: '🏠',
    ideas: [
      {
        title: 'Rent Your Space (Airbnb)',
        income: '$500-5,000+/month',
        startup: 'Existing property or room',
        effort: 'Medium',
        timeToProfit: 'Immediate',
        description: 'Rent out a spare room, guest house, or vacation property. Short-term rentals often earn 2-3x traditional rent.',
        howToStart: [
          'Prepare and photograph your space',
          'Create listing on Airbnb/VRBO',
          'Set competitive pricing',
          'Provide great hospitality',
        ],
        pros: ['High income potential', 'Flexibility', 'Meet interesting people'],
        cons: ['Requires property', 'Management time', 'Local regulations'],
        resources: ['Airbnb.com/host', 'VRBO.com'],
      },
      {
        title: 'Rent Your Car (Turo)',
        income: '$300-1,500+/month',
        startup: 'Vehicle valued at $2K+',
        effort: 'Low-Medium',
        timeToProfit: 'Immediate',
        description: 'List your car on Turo when you\'re not using it. Popular cars in good locations can earn $500-1500/month.',
        howToStart: [
          'List your car on Turo',
          'Set pickup location and availability',
          'Keep car clean and maintained',
          'Respond quickly to booking requests',
        ],
        pros: ['Monetize idle asset', 'Insurance included', 'Flexible'],
        cons: ['Wear on your vehicle', 'Must meet renters', 'Not all cars qualify'],
        resources: ['Turo.com'],
      },
      {
        title: 'Rent Storage Space',
        income: '$50-500+/month',
        startup: 'Available space',
        effort: 'Very Low',
        timeToProfit: 'Immediate',
        description: 'Rent your garage, basement, attic, or parking spot to people who need storage. Much more passive than renting rooms.',
        howToStart: [
          'Clear and measure your space',
          'List on Neighbor or StoreAtMyHouse',
          'Set ground rules',
          'Collect monthly payments',
        ],
        pros: ['Very passive', 'No interaction needed', 'Low risk'],
        cons: ['Limited income', 'Need available space', 'Insurance considerations'],
        resources: ['Neighbor.com', 'StoreAtMyHouse.com'],
      },
    ],
  },
  {
    category: 'Online Business',
    icon: '🌐',
    ideas: [
      {
        title: 'Affiliate Marketing',
        income: '$100-10,000+/month',
        startup: '$0-500 (website costs)',
        effort: 'High upfront, Low ongoing',
        timeToProfit: '6-18 months',
        description: 'Recommend products you love and earn commissions on sales. Build a blog, YouTube channel, or social media following around a niche.',
        howToStart: [
          'Choose a niche you\'re knowledgeable about',
          'Build a website or YouTube channel',
          'Create helpful content with product recommendations',
          'Join affiliate programs (Amazon Associates, ShareASale)',
        ],
        pros: ['No product creation', 'Scale infinitely', 'Work from anywhere'],
        cons: ['Takes time to build traffic', 'Income fluctuates', 'Competitive'],
        resources: ['Affiliate-program.amazon.com', 'ShareASale.com'],
      },
      {
        title: 'Niche Websites',
        income: '$500-10,000+/month',
        startup: '$100-500',
        effort: 'High upfront, Low-Medium ongoing',
        timeToProfit: '12-24 months',
        description: 'Build content websites that rank in Google and monetize with ads and affiliates. Can be sold for 30-40x monthly profit.',
        howToStart: [
          'Research profitable niches with low competition',
          'Buy domain and hosting',
          'Create 50-100 quality articles',
          'Monetize with ads (Mediavine) and affiliates',
        ],
        pros: ['Sellable asset', 'Passive once ranking', 'Unlimited potential'],
        cons: ['Long timeline', 'SEO knowledge required', 'Google algorithm risk'],
        resources: ['WordPress.org', 'Ahrefs.com', 'NichePursuits.com'],
      },
    ],
  },
]

function getEffortColor(effort: string) {
  if (effort.includes('Very Low')) return 'bg-green-100 text-green-700'
  if (effort.includes('Low')) return 'bg-green-100 text-green-700'
  if (effort.includes('Medium')) return 'bg-yellow-100 text-yellow-700'
  if (effort.includes('High')) return 'bg-orange-100 text-orange-700'
  return 'bg-gray-100 text-gray-700'
}

export default function PassiveIncomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/" className="text-[#FF8D07] hover:text-[#FFa030] text-sm mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Passive Income Ideas</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Build income streams that work while you sleep. These strategies range from truly 
          passive investments to semi-passive businesses that require upfront work.
        </p>
      </div>

      {/* Reality Check */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
        <h3 className="font-semibold text-blue-900 mb-2">💡 The Truth About Passive Income</h3>
        <p className="text-blue-800 text-sm">
          Most "passive" income requires either significant upfront capital, significant upfront work, 
          or both. True "do nothing and get paid" income (like dividends) requires having money to invest first. 
          The good news? You can start building these streams alongside your regular income.
        </p>
      </div>

      {/* Categories */}
      {passiveIncomeIdeas.map((category, catIndex) => (
        <section key={catIndex} className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 flex items-center gap-3">
            <span className="text-3xl">{category.icon}</span>
            {category.category}
          </h2>
          <div className="space-y-6">
            {category.ideas.map((idea, ideaIndex) => (
              <article 
                key={ideaIndex}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{idea.title}</h3>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getEffortColor(idea.effort)}`}>
                        {idea.effort} Effort
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500 block">Potential Income</span>
                        <span className="font-semibold text-emerald-600">{idea.income}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Startup Cost</span>
                        <span className="font-semibold text-gray-900">{idea.startup}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Time to Profit</span>
                        <span className="font-semibold text-gray-900">{idea.timeToProfit}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{idea.description}</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm font-semibold text-gray-700">✅ Pros</span>
                        <ul className="text-sm text-gray-600 mt-1">
                          {idea.pros.map((pro, i) => (
                            <li key={i}>• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-700">⚠️ Cons</span>
                        <ul className="text-sm text-gray-600 mt-1">
                          {idea.cons.map((con, i) => (
                            <li key={i}>• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <span className="text-sm font-semibold text-gray-700 block mb-2">How to Start:</span>
                      <ol className="text-sm text-gray-600 space-y-1">
                        {idea.howToStart.map((step, i) => (
                          <li key={i}>{i + 1}. {step}</li>
                        ))}
                      </ol>
                    </div>

                    <div className="mt-4">
                      <span className="text-xs text-gray-500">Resources: </span>
                      <span className="text-xs text-blue-600">{idea.resources.join(' • ')}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <div className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-3">Start Building Your Passive Income Today</h3>
        <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
          The best time to plant a tree was 20 years ago. The second best time is now. 
          Pick one strategy above and take the first step today.
        </p>
        <Link 
          href="/subscribe"
          className="inline-block bg-white text-emerald-600 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition"
        >
          Get Weekly Passive Income Tips
        </Link>
      </div>
    </div>
  )
}
