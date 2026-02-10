import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Home Hustle - Our Mission & Story',
  description: 'Learn about Home Hustle and our mission to help everyday Americans find legitimate work from home opportunities. No scams, no MLMs, just real income.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">About Home Hustle</h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Helping everyday Americans find real ways to earn from home.
        </p>
      </div>

      {/* Mission */}
      <section className="mb-12">
        <div className="bg-white/5 rounded-xl border border-white/10 p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-white/70 mb-4">
            We started Home Hustle because we were tired of seeing people get scammed by fake 
            &ldquo;work from home&rdquo; opportunities. You know the ones — envelope stuffing, MLM schemes, 
            and &ldquo;make $10,000/day&rdquo; nonsense.
          </p>
          <p className="text-white/70 mb-4">
            The truth is, there ARE legitimate ways to earn money from home. Real companies hire 
            remote workers. Freelancing is booming. Side hustles can generate real income. But 
            finding these opportunities through the noise of scams? That&apos;s hard.
          </p>
          <p className="text-white/70">
            That&apos;s where we come in. <strong className="text-white">We research, vet, and curate real opportunities</strong> so 
            you don&apos;t have to wade through the garbage.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-xl border border-white/10 p-6">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-semibold text-white mb-2">Research</h3>
            <p className="text-white/70 text-sm">
              We spend hours researching companies, platforms, and opportunities. 
              If it sounds too good to be true, we dig deeper.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl border border-white/10 p-6">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="font-semibold text-white mb-2">Verify</h3>
            <p className="text-white/70 text-sm">
              Every opportunity we list has been checked. We look for red flags, 
              verify pay claims, and confirm legitimacy.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl border border-white/10 p-6">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-semibold text-white mb-2">Educate</h3>
            <p className="text-white/70 text-sm">
              We don&apos;t just list opportunities — we teach you how to succeed. 
              What to expect, how to get started, and pitfalls to avoid.
            </p>
          </div>
        </div>
      </section>

      {/* Our Standards */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Our Standards</h2>
        <div className="bg-white/5 rounded-xl border border-white/10 p-8">
          <p className="text-white/70 mb-6">
            We have strict criteria for what makes it onto Home Hustle:
          </p>
          <div className="space-y-4">
            {[
              { icon: '🚫', title: 'No MLMs or Network Marketing', desc: 'Period. If you have to recruit to make money, it\'s not on our site.' },
              { icon: '💵', title: 'No Upfront Fees', desc: 'Legitimate employers don\'t ask you to pay for training, equipment, or "starter kits."' },
              { icon: '📊', title: 'Realistic Pay Claims', desc: 'We verify pay ranges and call out when claims seem inflated.' },
              { icon: '🏢', title: 'Real Companies', desc: 'We link to official company pages, not shady third-party sites.' },
              { icon: '📅', title: 'Kept Updated', desc: 'We regularly review our listings and remove opportunities that are no longer available or have gone bad.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure Note */}
      <section className="mb-12">
        <div className="bg-[#FF8D07]/10 border border-[#FF8D07]/30 rounded-xl p-6">
          <h3 className="font-semibold text-[#FF8D07] mb-2">A Note on How We Make Money</h3>
          <p className="text-white/70 text-sm">
            Home Hustle is free to use. We make money through affiliate relationships with 
            some of the platforms we recommend. This means if you sign up through our links, 
            we may earn a commission at no extra cost to you. This never influences which 
            opportunities we recommend — our standards come first. See our full{' '}
            <Link href="/disclosure" className="text-[#FF8D07] hover:underline">
              Affiliate Disclosure
            </Link>{' '}
            for details.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-white/70 mb-6">
          Browse our vetted opportunities and find something that fits your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/opportunities"
            className="bg-[#FF8D07] hover:bg-[#E67D00] text-white px-8 py-3 rounded-full font-semibold transition"
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
      </section>
    </div>
  )
}
