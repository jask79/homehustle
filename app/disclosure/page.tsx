import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure - Home Hustle',
  description: 'Affiliate Disclosure for Home Hustle. Learn about our affiliate relationships and how we make money.',
}

export default function DisclosurePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">Affiliate Disclosure</h1>
      <p className="text-white/50 text-sm mb-8">Last updated: February 2026</p>
      
      <div className="prose prose-invert max-w-none">
        <section className="mb-8">
          <h2>Our Commitment to Transparency</h2>
          <p>
            At Home Hustle, we believe in being upfront about how we make money. This disclosure 
            explains our affiliate relationships and ensures you can make informed decisions when 
            using our recommendations.
          </p>
        </section>

        <section className="mb-8">
          <div className="bg-[#FF8D07]/10 border border-[#FF8D07]/30 rounded-xl p-6">
            <h2 className="text-[#FF8D07] mt-0">The Short Version</h2>
            <p className="mb-0">
              Some links on Home Hustle are affiliate links. If you click them and sign up or 
              make a purchase, we may earn a commission at <strong>no extra cost to you</strong>. 
              This helps us keep the site running and free to use.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2>What Are Affiliate Links?</h2>
          <p>
            Affiliate links are special URLs that track when someone clicks through from our 
            site and takes an action (like signing up for a service or making a purchase). 
            When this happens, the company we linked to pays us a small commission as a 
            thank-you for the referral.
          </p>
          <p>
            <strong>Important:</strong> You never pay more because you used our link. The price 
            is the same whether you click through from Home Hustle or go directly to the website.
          </p>
        </section>

        <section className="mb-8">
          <h2>How This Affects Our Recommendations</h2>
          <p>
            <strong>It doesn&apos;t.</strong> Here&apos;s our promise:
          </p>
          <ul>
            <li>
              We recommend opportunities based on quality and legitimacy, not commission rates
            </li>
            <li>
              We list plenty of opportunities where we have no affiliate relationship
            </li>
            <li>
              We will never recommend something we wouldn&apos;t use ourselves just to earn a commission
            </li>
            <li>
              If something has problems or isn&apos;t a good fit, we&apos;ll tell you — even if we have an affiliate link
            </li>
          </ul>
          <p>
            Our reputation depends on giving you honest, useful information. Recommending garbage 
            to make a quick buck would destroy that trust. We&apos;re in this for the long haul.
          </p>
        </section>

        <section className="mb-8">
          <h2>Types of Affiliate Relationships</h2>
          <p>We may earn commissions from:</p>
          <ul>
            <li>
              <strong>Freelance platforms</strong> — Sites like Upwork, Fiverr, and others that 
              connect freelancers with clients
            </li>
            <li>
              <strong>Gig economy apps</strong> — Delivery, rideshare, and task-based platforms
            </li>
            <li>
              <strong>Online learning platforms</strong> — Sites that offer courses and training
            </li>
            <li>
              <strong>Financial services</strong> — Investment platforms, high-yield savings accounts, etc.
            </li>
            <li>
              <strong>Tools and software</strong> — Productivity tools, website builders, and business software
            </li>
            <li>
              <strong>E-commerce platforms</strong> — Print-on-demand services, marketplaces, etc.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>How to Identify Affiliate Links</h2>
          <p>
            In most cases, our affiliate links look like regular links. However, you can assume 
            that any link to a third-party product or service on our site could be an affiliate 
            link. When in doubt, assume it is.
          </p>
          <p>
            This disclosure applies to all links on homehustle.info and any emails we send.
          </p>
        </section>

        <section className="mb-8">
          <h2>FTC Compliance</h2>
          <p>
            This disclosure is provided in accordance with the Federal Trade Commission&apos;s 
            guidelines on endorsements and testimonials. We are required to disclose any 
            &ldquo;material connections&rdquo; we have with companies whose products or services we discuss.
          </p>
        </section>

        <section className="mb-8">
          <h2>Your Choice</h2>
          <p>
            Using our affiliate links is completely optional. If you&apos;d rather not use them, 
            you can always go directly to any website we mention. We appreciate when you do 
            use our links because it helps support the site, but we respect your choice either way.
          </p>
        </section>

        <section className="mb-8">
          <h2>Questions?</h2>
          <p>
            If you have any questions about our affiliate relationships or this disclosure, 
            please <Link href="/about" className="text-[#FF8D07]">contact us</Link>.
          </p>
        </section>

        <section className="mb-8">
          <p className="text-white/50 text-sm">
            Thank you for supporting Home Hustle. Your trust means everything to us. 🙏
          </p>
        </section>
      </div>
    </div>
  )
}
