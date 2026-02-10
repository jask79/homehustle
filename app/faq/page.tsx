import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | Home Hustle',
  description: 'Answers to common questions about work from home opportunities, getting started, and how Home Hustle works.',
}

const faqs = [
  {
    category: "About Home Hustle",
    questions: [
      {
        q: "What is Home Hustle?",
        a: "Home Hustle is a curated directory of legitimate work-from-home opportunities. We research, vet, and organize remote jobs, freelance work, side hustles, and passive income strategies so you can find real ways to earn from home without wading through scams."
      },
      {
        q: "Is Home Hustle free to use?",
        a: "Yes, 100% free. We make money through affiliate partnerships with some platforms we recommend — meaning if you sign up through our links, we may earn a commission at no extra cost to you. This never influences which opportunities we feature."
      },
      {
        q: "How do you vet opportunities?",
        a: "We research every company and opportunity before listing it. We check for red flags (upfront fees, unrealistic claims, MLM structures), verify the company exists and has a decent reputation, and confirm the pay ranges are realistic. If something doesn't pass our standards, it doesn't make the list."
      },
      {
        q: "How often do you update the site?",
        a: "We add new opportunities and review existing listings weekly. Job markets change fast, so we work to keep things current. If you notice something outdated, let us know!"
      },
    ]
  },
  {
    category: "Getting Started",
    questions: [
      {
        q: "I have no experience. Can I still find work from home?",
        a: "Absolutely. Many opportunities on our site require no prior experience — especially in categories like side hustles (delivery, selling, pet sitting) and entry-level remote jobs (customer service, data entry). We mark experience requirements clearly so you can filter appropriately."
      },
      {
        q: "What equipment do I need to work from home?",
        a: "At minimum: a computer, reliable internet (many jobs require hardwired/ethernet, not just WiFi), and a quiet workspace. Some jobs provide equipment; others expect you to have your own. A good headset with a microphone is essential for any phone/video work. Check out our Getting Started Guide for more details."
      },
      {
        q: "How much money can I realistically make?",
        a: "It varies wildly depending on what you do. Side hustles might bring in a few hundred extra per month. Remote jobs pay like regular jobs ($15-50+/hour). Freelancing income grows as you build clients. Passive income takes time to build but can scale significantly. We try to give realistic ranges for every opportunity we list."
      },
      {
        q: "What's the difference between remote jobs, freelance, and side hustles?",
        a: "Remote jobs are employee positions with set hours and benefits — you work for one company. Freelance work means you're self-employed, working with multiple clients on projects. Side hustles are usually gig-based (delivery, tasks, selling) that you do for extra money on a flexible schedule."
      },
    ]
  },
  {
    category: "Avoiding Scams",
    questions: [
      {
        q: "How do I know if an opportunity is a scam?",
        a: "Red flags include: asking you to pay upfront, unrealistic income claims, vague job descriptions, pressure to decide quickly, and requests for personal/financial info before a real interview. If you found it on Home Hustle, we've already vetted it. Check out our full guide on avoiding scams for more."
      },
      {
        q: "Are there any legitimate opportunities that require paying upfront?",
        a: "Very rarely. Some freelance platforms charge a monthly fee (FlexJobs, for example), and some certifications cost money. But a \"job\" that asks you to pay for training, equipment, or starter kits is almost always a scam. Real employers cover those costs."
      },
      {
        q: "Is MLM/network marketing legitimate?",
        a: "Technically legal, but we don't list MLMs because the vast majority of participants lose money. If \"the job\" is really about recruiting others or buying products to resell, it's not a job — it's a business model where you're the customer. We avoid them entirely."
      },
    ]
  },
  {
    category: "Technical Questions",
    questions: [
      {
        q: "Why do some jobs require a hardwired internet connection?",
        a: "WiFi can be unreliable — it drops, lags, and varies in quality. For customer service and phone-based jobs, companies need consistent connectivity. Hardwired (Ethernet) connections are more stable. If your router is far from your workspace, consider a powerline adapter or long ethernet cable."
      },
      {
        q: "Do I need a dedicated phone line for remote work?",
        a: "Rarely these days. Most remote jobs use computer-based calling (VoIP) or company-provided software. Some older companies still require a landline, but it's becoming uncommon. Check the specific requirements for any job you're interested in."
      },
      {
        q: "Can I work from home internationally?",
        a: "Depends on the opportunity. Many freelance and gig platforms work globally. Traditional remote jobs often require you to be based in specific countries (usually the US) for tax and legal reasons. Passive income strategies generally work anywhere. We note location requirements where applicable."
      },
    ]
  },
  {
    category: "Taxes & Legal",
    questions: [
      {
        q: "Do I have to pay taxes on side hustle income?",
        a: "Yes. All income is taxable, including side hustles, freelance work, and gig economy earnings. If you earn more than $400/year from self-employment, you need to report it. Consider setting aside 25-30% for taxes and making quarterly estimated payments if you earn significant amounts."
      },
      {
        q: "What's the difference between W-2 and 1099 work?",
        a: "W-2 = employee (employer handles taxes, may offer benefits). 1099 = independent contractor (you handle your own taxes, no benefits). Remote jobs are usually W-2; freelance and gig work is usually 1099. Know which you're signing up for — it affects your take-home pay."
      },
      {
        q: "Do I need to form an LLC for freelance work?",
        a: "Not required, but it can provide liability protection and potential tax benefits as you grow. Most people start as sole proprietors (just you, no formal business structure) and form an LLC later if needed. Consult a tax professional for your specific situation."
      },
    ]
  },
]

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-white/70">
          Got questions? We&apos;ve got answers.
        </p>
      </div>

      {/* FAQ Sections */}
      {faqs.map((section, sectionIndex) => (
        <section key={sectionIndex} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
            {section.category}
          </h2>
          <div className="space-y-6">
            {section.questions.map((faq, faqIndex) => (
              <div 
                key={faqIndex}
                className="bg-white/5 rounded-xl border border-white/10 p-6"
              >
                <h3 className="font-semibold text-white text-lg mb-3">
                  {faq.q}
                </h3>
                <p className="text-white/70">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Still Have Questions */}
      <div className="bg-[#0A4F53] rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
        <p className="text-white/70 mb-6">
          Can&apos;t find what you&apos;re looking for? Check out our guides or get in touch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/guides/getting-started"
            className="bg-[#FF8D07] hover:bg-[#E67D00] text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Getting Started Guide
          </Link>
          <Link
            href="/guides/avoid-scams"
            className="border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
          >
            How to Avoid Scams
          </Link>
        </div>
      </div>
    </div>
  )
}
