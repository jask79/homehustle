import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Getting Started Guide - How to Start Working From Home | Home Hustle',
  description: 'Complete guide to starting your work from home journey. Learn how to find opportunities, avoid scams, and build real income from home.',
}

export default function GettingStartedPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/" className="text-[#FF8D07] hover:text-[#FFa030] text-sm mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-white mb-4">Getting Started Guide</h1>
        <p className="text-xl text-white/70">
          Your complete roadmap to finding legitimate work from home opportunities.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-white/5 rounded-xl border border-white/10 p-6 mb-12">
        <h2 className="text-lg font-semibold text-white mb-4">📋 What We&apos;ll Cover</h2>
        <ul className="space-y-2 text-white/70">
          <li><a href="#mindset" className="hover:text-[#FF8D07] transition">1. Setting the Right Expectations</a></li>
          <li><a href="#types" className="hover:text-[#FF8D07] transition">2. Types of Work From Home Opportunities</a></li>
          <li><a href="#scams" className="hover:text-[#FF8D07] transition">3. How to Spot and Avoid Scams</a></li>
          <li><a href="#setup" className="hover:text-[#FF8D07] transition">4. Setting Up Your Home Office</a></li>
          <li><a href="#apply" className="hover:text-[#FF8D07] transition">5. How to Apply and Get Hired</a></li>
          <li><a href="#next" className="hover:text-[#FF8D07] transition">6. Your Next Steps</a></li>
        </ul>
      </div>

      {/* Content Sections */}
      <div className="prose prose-invert max-w-none">
        <section id="mindset" className="mb-12">
          <h2>1. Setting the Right Expectations</h2>
          <p>
            Before we dive in, let&apos;s get real about what working from home actually looks like:
          </p>
          <div className="bg-white/5 rounded-xl border border-white/10 p-6 my-6">
            <h3 className="text-[#FF8D07] mt-0">The Truth About Working From Home</h3>
            <ul className="mb-0">
              <li><strong>It&apos;s real work.</strong> You&apos;ll have deadlines, responsibilities, and expectations — just from your couch.</li>
              <li><strong>Income varies.</strong> Some opportunities pay hourly, some per project, some are commission-based. Know what you&apos;re getting into.</li>
              <li><strong>It takes time to build.</strong> Most people don&apos;t replace their full income overnight. Be patient.</li>
              <li><strong>&ldquo;Passive income&rdquo; requires upfront work.</strong> Nothing is truly passive — it&apos;s just front-loaded effort.</li>
            </ul>
          </div>
          <p>
            If you go in with realistic expectations, you&apos;re much more likely to succeed. The people who fail 
            are usually the ones looking for shortcuts.
          </p>
        </section>

        <section id="types" className="mb-12">
          <h2>2. Types of Work From Home Opportunities</h2>
          <p>Not all remote work is the same. Here are the main categories:</p>
          
          <h3>Remote Jobs (Employee Positions)</h3>
          <p>
            Real jobs with real companies, just done from home. You&apos;re an employee with benefits, 
            set hours, and a regular paycheck.
          </p>
          <p><strong>Best for:</strong> People who want stability and don&apos;t want to build a business.</p>
          <p><Link href="/categories/remote-jobs" className="text-[#FF8D07]">Browse Remote Jobs →</Link></p>

          <h3>Freelance Work</h3>
          <p>
            You&apos;re self-employed, working with multiple clients on projects. More flexibility, 
            but you&apos;re responsible for finding work and managing your business.
          </p>
          <p><strong>Best for:</strong> People with marketable skills who want flexibility and growth potential.</p>
          <p><Link href="/categories/freelance" className="text-[#FF8D07]">Browse Freelance Work →</Link></p>

          <h3>Side Hustles</h3>
          <p>
            Quick ways to make extra money on your own schedule. Usually gig-based (delivery, 
            tasks, selling) with immediate earning potential.
          </p>
          <p><strong>Best for:</strong> People who need money fast or want to earn in their spare time.</p>
          <p><Link href="/categories/side-hustles" className="text-[#FF8D07]">Browse Side Hustles →</Link></p>

          <h3>Passive Income Streams</h3>
          <p>
            Systems that earn money with minimal ongoing effort — after significant upfront work 
            or investment. Think: investments, digital products, content sites.
          </p>
          <p><strong>Best for:</strong> People thinking long-term who can delay gratification.</p>
          <p><Link href="/categories/passive-income" className="text-[#FF8D07]">Browse Passive Income →</Link></p>
        </section>

        <section id="scams" className="mb-12">
          <h2>3. How to Spot and Avoid Scams</h2>
          <p>
            Unfortunately, the work-from-home space is full of scams. Here&apos;s how to protect yourself:
          </p>
          
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
            <h3 className="text-red-400 mt-0">🚨 Major Red Flags</h3>
            <ul className="mb-0">
              <li><strong>They ask you to pay upfront.</strong> Legitimate employers don&apos;t charge for training, equipment, or &ldquo;starter kits.&rdquo;</li>
              <li><strong>&ldquo;Make $5,000/week with no experience!&rdquo;</strong> If it sounds too good to be true, it is.</li>
              <li><strong>MLM/Network Marketing.</strong> If the &ldquo;job&rdquo; requires recruiting others or buying products, run.</li>
              <li><strong>Vague job descriptions.</strong> Real jobs tell you exactly what you&apos;ll be doing.</li>
              <li><strong>They contacted you first.</strong> Be skeptical of unsolicited job offers.</li>
              <li><strong>No verifiable company info.</strong> Google them. Check LinkedIn. If they don&apos;t exist, neither does the job.</li>
            </ul>
          </div>

          <h3>Safe Practices</h3>
          <ul>
            <li>Apply directly on company websites, not random job boards</li>
            <li>Research the company before applying (Glassdoor, BBB, Reddit)</li>
            <li>Never give out your SSN until you&apos;ve received a legitimate job offer</li>
            <li>Don&apos;t cash checks and &ldquo;send money back&rdquo; — classic check fraud</li>
            <li>Trust your gut — if something feels off, it probably is</li>
          </ul>
        </section>

        <section id="setup" className="mb-12">
          <h2>4. Setting Up Your Home Office</h2>
          <p>You don&apos;t need a fancy setup to start, but you do need the basics:</p>
          
          <h3>Essentials</h3>
          <ul>
            <li><strong>Reliable internet.</strong> Most remote jobs require hardwired (Ethernet) connection, not WiFi.</li>
            <li><strong>Quiet workspace.</strong> Doesn&apos;t need to be a separate room, but you need somewhere you can focus.</li>
            <li><strong>Computer.</strong> Most jobs work fine with any computer made in the last 5 years. Some provide equipment.</li>
            <li><strong>Headset with microphone.</strong> Essential for calls. A $30 headset works fine to start.</li>
          </ul>

          <h3>Nice to Have</h3>
          <ul>
            <li>Second monitor (huge productivity boost)</li>
            <li>Comfortable chair</li>
            <li>Good lighting for video calls</li>
            <li>Standing desk or converter</li>
          </ul>
        </section>

        <section id="apply" className="mb-12">
          <h2>5. How to Apply and Get Hired</h2>
          
          <h3>For Remote Jobs</h3>
          <ol>
            <li><strong>Update your resume.</strong> Highlight any remote work experience, self-discipline, and communication skills.</li>
            <li><strong>Apply directly.</strong> Go to the company&apos;s career page, not third-party job boards.</li>
            <li><strong>Follow instructions exactly.</strong> If they ask for a cover letter, write one. If they ask for a video, make one.</li>
            <li><strong>Be patient.</strong> Companies get hundreds of applications. It may take weeks to hear back.</li>
            <li><strong>Prepare for video interviews.</strong> Test your tech, find good lighting, dress professionally from the waist up.</li>
          </ol>

          <h3>For Freelance Work</h3>
          <ol>
            <li><strong>Pick one platform to start.</strong> Upwork, Fiverr, or whatever fits your skills.</li>
            <li><strong>Create a strong profile.</strong> Professional photo, detailed skills, portfolio if possible.</li>
            <li><strong>Start with lower rates.</strong> Build reviews first, raise rates later.</li>
            <li><strong>Apply to LOTS of jobs.</strong> Freelancing is a numbers game at first.</li>
            <li><strong>Deliver great work.</strong> Early reviews make or break your freelance career.</li>
          </ol>

          <h3>For Side Hustles</h3>
          <ol>
            <li><strong>Just sign up.</strong> Most gig apps approve quickly.</li>
            <li><strong>Complete onboarding.</strong> Watch required videos, pass background checks.</li>
            <li><strong>Start working.</strong> Learn the ropes, read tips from experienced workers.</li>
            <li><strong>Optimize over time.</strong> Learn the best times, routes, and strategies.</li>
          </ol>
        </section>

        <section id="next" className="mb-12">
          <h2>6. Your Next Steps</h2>
          <p>Ready to start? Here&apos;s what to do right now:</p>
          <ol>
            <li><strong>Decide what type of work fits your situation.</strong> Need money fast? Side hustles. Want stability? Remote jobs. Have skills? Freelance.</li>
            <li><strong>Browse our opportunities.</strong> Pick 3-5 that interest you.</li>
            <li><strong>Take action today.</strong> Apply to one job, sign up for one platform, list one item to sell. Just start.</li>
            <li><strong>Subscribe for updates.</strong> We add new opportunities weekly.</li>
          </ol>
        </section>
      </div>

      {/* CTA */}
      <div className="bg-[#0A4F53] rounded-xl p-8 text-center mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Find Your Opportunity?</h2>
        <p className="text-white/70 mb-6">
          Browse our complete list of vetted work from home opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/opportunities"
            className="bg-[#FF8D07] hover:bg-[#E67D00] text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Browse All Opportunities
          </Link>
          <Link
            href="/subscribe"
            className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
          >
            Get Weekly Updates
          </Link>
        </div>
      </div>
    </div>
  )
}
