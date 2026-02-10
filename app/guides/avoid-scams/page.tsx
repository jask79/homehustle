import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Avoid Work From Home Scams | Home Hustle',
  description: 'Learn how to spot and avoid work from home scams. Red flags to watch for, common scam types, and how to verify legitimate opportunities.',
}

export default function AvoidScamsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/" className="text-[#FF8D07] hover:text-[#FFa030] text-sm mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-white mb-4">How to Avoid Work From Home Scams</h1>
        <p className="text-xl text-white/70">
          Protect yourself from the garbage that gives remote work a bad name.
        </p>
      </div>

      {/* Intro */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-12">
        <p className="text-white/80">
          <strong className="text-white">The hard truth:</strong> For every legitimate work-from-home 
          opportunity, there are dozens of scams waiting to take your money or waste your time. 
          The good news? Once you know the red flags, they&apos;re easy to spot.
        </p>
      </div>

      <div className="prose prose-invert max-w-none">
        {/* Major Red Flags */}
        <section className="mb-12">
          <h2>🚨 Major Red Flags (Run Away)</h2>
          
          <div className="space-y-6 not-prose">
            {[
              {
                title: "They ask you to pay upfront",
                desc: "Legitimate employers don't charge for training, equipment, background checks, or 'starter kits.' If they want money from you before you've earned any, it's a scam.",
                example: "\"Just pay $99 for your training materials and you'll be ready to start!\""
              },
              {
                title: "Unrealistic income claims",
                desc: "\"Make $5,000/week from your phone!\" If it sounds too good to be true, it is. Real opportunities have realistic pay ranges, not get-rich-quick promises.",
                example: "\"Our top earners make $50,000/month working just 2 hours a day!\""
              },
              {
                title: "MLM / Network Marketing / \"Be Your Own Boss\"",
                desc: "If the 'job' requires you to recruit others, buy products to resell, or pay for a 'business opportunity,' it's MLM. Most people lose money.",
                example: "\"Build your team and earn passive income from their sales!\""
              },
              {
                title: "Vague job descriptions",
                desc: "Real jobs tell you exactly what you'll be doing. Scams use buzzwords like 'work from anywhere' and 'unlimited earning potential' without explaining the actual work.",
                example: "\"Exciting opportunity in the wellness industry! Be part of a movement!\""
              },
              {
                title: "They contacted you first",
                desc: "Be very skeptical of unsolicited job offers via email, text, or social media DMs. Legitimate employers don't cold-message random people.",
                example: "\"Hi! I found your profile and think you'd be perfect for a remote position...\""
              },
              {
                title: "No verifiable company information",
                desc: "Google the company name. Check LinkedIn. Look for reviews on Glassdoor and BBB. If they don't seem to exist outside their own website, that's a problem.",
                example: "A website with no address, no team page, and stock photos everywhere."
              },
            ].map((flag, i) => (
              <div key={i} className="bg-white/5 rounded-xl border border-white/10 p-6">
                <h3 className="font-bold text-white text-lg mb-2">{flag.title}</h3>
                <p className="text-white/70 mb-3">{flag.desc}</p>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  <span className="text-red-400 text-sm font-medium">Example: </span>
                  <span className="text-white/60 text-sm italic">{flag.example}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Scam Types */}
        <section className="mb-12">
          <h2>Common Scam Types</h2>
          
          <h3>Check Cashing / Money Mule Scams</h3>
          <p>
            They send you a check, ask you to deposit it, keep some money as your &quot;payment,&quot; and 
            wire the rest somewhere. The check bounces days later, and you&apos;re on the hook for the 
            full amount plus bank fees. This can also get you in legal trouble.
          </p>

          <h3>Reshipping Scams</h3>
          <p>
            You receive packages at your home and reship them elsewhere. Sounds easy? Those 
            packages contain goods bought with stolen credit cards. You become an unwitting 
            accomplice to fraud.
          </p>

          <h3>Data Entry Scams</h3>
          <p>
            &quot;Make $500/day doing simple data entry!&quot; Real data entry jobs exist, but they pay 
            $12-20/hour, not hundreds per day. The scam usually involves paying for &quot;training&quot; 
            or &quot;software&quot; that never materializes.
          </p>

          <h3>Envelope Stuffing</h3>
          <p>
            A classic. You pay for a &quot;starter kit&quot; and instructions that tell you to... 
            recruit others into the same scheme. It&apos;s pyramid-shaped for a reason.
          </p>

          <h3>Fake Job Postings (Phishing)</h3>
          <p>
            A &quot;job application&quot; that asks for your Social Security number, bank account info, 
            or copies of your ID before you&apos;ve even had an interview. They&apos;re stealing your 
            identity, not hiring you.
          </p>
        </section>

        {/* How to Verify */}
        <section className="mb-12">
          <h2>How to Verify a Legitimate Opportunity</h2>
          
          <div className="bg-white/5 rounded-xl border border-white/10 p-6 my-6 not-prose">
            <h3 className="font-semibold text-white mb-4">✅ Verification Checklist</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#FF8D07]">1.</span>
                <span><strong className="text-white">Google the company name + &quot;scam&quot; or &quot;reviews&quot;</strong> — See what others say.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF8D07]">2.</span>
                <span><strong className="text-white">Check their website</strong> — Does it look professional? Is there an About page with real people?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF8D07]">3.</span>
                <span><strong className="text-white">Look them up on LinkedIn</strong> — Do real employees work there? Does the company have a presence?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF8D07]">4.</span>
                <span><strong className="text-white">Check Glassdoor and Indeed</strong> — Employee reviews tell you a lot.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF8D07]">5.</span>
                <span><strong className="text-white">Check the BBB</strong> — Not perfect, but scam companies often have complaints.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF8D07]">6.</span>
                <span><strong className="text-white">Apply on the company&apos;s official website</strong> — Not through random job boards or email links.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF8D07]">7.</span>
                <span><strong className="text-white">Trust your gut</strong> — If something feels off, it probably is.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* What to Do If Scammed */}
        <section className="mb-12">
          <h2>What to Do If You&apos;ve Been Scammed</h2>
          <ul>
            <li><strong>Stop all contact</strong> with the scammer immediately.</li>
            <li><strong>Document everything</strong> — emails, texts, receipts, website screenshots.</li>
            <li><strong>Report to the FTC</strong> at <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer" className="text-[#FF8D07]">reportfraud.ftc.gov</a></li>
            <li><strong>Report to the FBI&apos;s IC3</strong> at <a href="https://ic3.gov" target="_blank" rel="noopener noreferrer" className="text-[#FF8D07]">ic3.gov</a> if money was stolen</li>
            <li><strong>Contact your bank</strong> if you shared financial information</li>
            <li><strong>Consider a credit freeze</strong> if you shared your SSN</li>
            <li><strong>Warn others</strong> by leaving reviews and reporting to the BBB</li>
          </ul>
        </section>

        {/* Safe Sources */}
        <section className="mb-12">
          <h2>Where to Find Legitimate Opportunities</h2>
          <p>Stick to trusted sources:</p>
          <ul>
            <li><strong>Company career pages</strong> — Go directly to the source</li>
            <li><strong>LinkedIn Jobs</strong> — Companies verify their profiles</li>
            <li><strong>Indeed, Glassdoor, FlexJobs</strong> — Established job boards</li>
            <li><strong>Home Hustle</strong> — We vet everything we list 😉</li>
          </ul>
          <p>
            Avoid: Craigslist job postings, unsolicited emails, social media DMs, and any site 
            that asks you to pay for job listings.
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="bg-[#0A4F53] rounded-xl p-8 text-center mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Ready for Legit Opportunities?</h2>
        <p className="text-white/70 mb-6">
          Every opportunity on Home Hustle is researched and vetted. No scams, no MLMs, no BS.
        </p>
        <Link
          href="/opportunities"
          className="inline-block bg-[#FF8D07] hover:bg-[#E67D00] text-white px-8 py-3 rounded-full font-semibold transition"
        >
          Browse Vetted Opportunities
        </Link>
      </div>
    </div>
  )
}
