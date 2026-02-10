import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Recommended Tools for Working From Home | Home Hustle',
  description: 'Essential tools and software for remote work, freelancing, and side hustles. Productivity apps, communication tools, and business essentials.',
}

const toolCategories = [
  {
    title: "Productivity & Organization",
    icon: "📋",
    tools: [
      {
        name: "Notion",
        description: "All-in-one workspace for notes, tasks, databases, and project management. Great for organizing client work and personal projects.",
        price: "Free tier available",
        link: "https://notion.so",
      },
      {
        name: "Trello",
        description: "Visual project management with boards and cards. Simple and intuitive for tracking tasks and workflows.",
        price: "Free tier available",
        link: "https://trello.com",
      },
      {
        name: "Todoist",
        description: "Clean, powerful to-do list app. Works across all devices and helps you stay on top of deadlines.",
        price: "Free tier available",
        link: "https://todoist.com",
      },
      {
        name: "Google Calendar",
        description: "Essential for scheduling. Syncs everywhere, easy to share availability with clients.",
        price: "Free",
        link: "https://calendar.google.com",
      },
    ],
  },
  {
    title: "Communication",
    icon: "💬",
    tools: [
      {
        name: "Zoom",
        description: "The standard for video calls. Most clients expect you to be comfortable with Zoom meetings.",
        price: "Free tier (40 min limit)",
        link: "https://zoom.us",
      },
      {
        name: "Slack",
        description: "Team messaging platform. Many remote teams use Slack for daily communication.",
        price: "Free tier available",
        link: "https://slack.com",
      },
      {
        name: "Loom",
        description: "Record quick video messages and screen shares. Great for async communication and tutorials.",
        price: "Free tier available",
        link: "https://loom.com",
      },
      {
        name: "Calendly",
        description: "Scheduling tool that lets clients book time on your calendar without the back-and-forth.",
        price: "Free tier available",
        link: "https://calendly.com",
      },
    ],
  },
  {
    title: "Finance & Invoicing",
    icon: "💰",
    tools: [
      {
        name: "Wave",
        description: "Free accounting and invoicing software. Perfect for freelancers and small businesses.",
        price: "Free",
        link: "https://waveapps.com",
      },
      {
        name: "QuickBooks Self-Employed",
        description: "Track income, expenses, and mileage. Separates business and personal transactions automatically.",
        price: "$15/month",
        link: "https://quickbooks.intuit.com",
      },
      {
        name: "PayPal",
        description: "Accept payments from clients worldwide. Integrates with most invoicing tools.",
        price: "Transaction fees apply",
        link: "https://paypal.com",
      },
      {
        name: "Stripe",
        description: "Professional payment processing for businesses. Great for recurring billing.",
        price: "Transaction fees apply",
        link: "https://stripe.com",
      },
    ],
  },
  {
    title: "Time Tracking",
    icon: "⏱️",
    tools: [
      {
        name: "Toggl Track",
        description: "Simple time tracking with one-click timers. Great for billing hourly clients.",
        price: "Free tier available",
        link: "https://toggl.com/track",
      },
      {
        name: "Clockify",
        description: "Free time tracker with unlimited users. Includes reporting and timesheet features.",
        price: "Free",
        link: "https://clockify.me",
      },
      {
        name: "RescueTime",
        description: "Automatic time tracking that shows where your time actually goes. Eye-opening for productivity.",
        price: "Free tier available",
        link: "https://rescuetime.com",
      },
    ],
  },
  {
    title: "Writing & Content",
    icon: "✍️",
    tools: [
      {
        name: "Grammarly",
        description: "Grammar and spelling checker that works everywhere. Essential for any writing work.",
        price: "Free tier available",
        link: "https://grammarly.com",
      },
      {
        name: "Hemingway Editor",
        description: "Makes your writing clearer and more readable. Great for blog posts and marketing copy.",
        price: "Free online version",
        link: "https://hemingwayapp.com",
      },
      {
        name: "Google Docs",
        description: "Free, cloud-based word processing. Easy to share and collaborate with clients.",
        price: "Free",
        link: "https://docs.google.com",
      },
      {
        name: "Canva",
        description: "Design tool for non-designers. Create social media graphics, presentations, and more.",
        price: "Free tier available",
        link: "https://canva.com",
      },
    ],
  },
  {
    title: "Gig Economy Essentials",
    icon: "🚗",
    tools: [
      {
        name: "Stride",
        description: "Free mileage and expense tracking app built for gig workers. Tracks drives automatically.",
        price: "Free",
        link: "https://stridehealth.com",
      },
      {
        name: "Everlance",
        description: "Automatic mileage tracking with expense management. Popular with delivery drivers.",
        price: "Free tier available",
        link: "https://everlance.com",
      },
      {
        name: "Gridwise",
        description: "Analytics app for rideshare and delivery drivers. Shows best times and locations to work.",
        price: "Free tier available",
        link: "https://gridwise.io",
      },
    ],
  },
  {
    title: "Home Office Hardware",
    icon: "🖥️",
    tools: [
      {
        name: "Good Headset",
        description: "Essential for calls. Logitech H390 (~$30) or Jabra Evolve 40 (~$80) are solid choices.",
        price: "$30-100",
        link: "#",
      },
      {
        name: "Second Monitor",
        description: "Huge productivity boost. Any 24\"+ monitor works. Check Facebook Marketplace for deals.",
        price: "$100-200",
        link: "#",
      },
      {
        name: "Webcam",
        description: "Built-in laptop cameras work, but a Logitech C920 (~$70) looks much more professional.",
        price: "$50-100",
        link: "#",
      },
      {
        name: "Ring Light",
        description: "Good lighting makes you look professional on video calls. Basic ring lights start at $20.",
        price: "$20-50",
        link: "#",
      },
    ],
  },
]

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Recommended Tools</h1>
        <p className="text-xl text-white/70 max-w-3xl">
          The right tools make remote work easier. Here&apos;s what we recommend for 
          productivity, communication, finances, and more.
        </p>
      </div>

      {/* Note */}
      <div className="bg-[#FF8D07]/10 border border-[#FF8D07]/30 rounded-xl p-6 mb-12">
        <p className="text-white/80 text-sm">
          <strong className="text-[#FF8D07]">💡 Note:</strong> Most of these tools have free tiers 
          that are perfectly fine to start with. Don&apos;t pay for premium features until you actually 
          need them. Some links may be affiliate links — see our{' '}
          <Link href="/disclosure" className="text-[#FF8D07] hover:underline">disclosure</Link>.
        </p>
      </div>

      {/* Tool Categories */}
      {toolCategories.map((category, catIndex) => (
        <section key={catIndex} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10 flex items-center gap-3">
            <span className="text-3xl">{category.icon}</span>
            {category.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {category.tools.map((tool, toolIndex) => (
              <div 
                key={toolIndex}
                className="bg-white/5 rounded-xl border border-white/10 p-5 hover:border-[#FF8D07]/40 transition"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white text-lg">{tool.name}</h3>
                  <span className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded">
                    {tool.price}
                  </span>
                </div>
                <p className="text-white/70 text-sm mb-3">{tool.description}</p>
                {tool.link !== "#" && (
                  <a 
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF8D07] hover:text-[#FFa030] text-sm font-medium"
                  >
                    Visit Site →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* CTA */}
      <div className="bg-[#0A4F53] rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Working From Home?</h2>
        <p className="text-white/70 mb-6">
          Now that you&apos;ve got the tools, find the opportunities.
        </p>
        <Link
          href="/opportunities"
          className="inline-block bg-[#FF8D07] hover:bg-[#E67D00] text-white px-8 py-3 rounded-full font-semibold transition"
        >
          Browse Opportunities
        </Link>
      </div>
    </div>
  )
}
