import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import FooterForm from './components/FooterForm'
import MobileNav from './components/MobileNav'
import { GoogleAnalytics } from './components/Analytics'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home Hustle - Legitimate Work From Home Jobs & Passive Income',
  description: 'Find real work from home opportunities, remote jobs, and passive income ideas. No scams, just vetted opportunities for everyday Americans.',
  keywords: 'work from home, remote jobs, side hustle, passive income, home business, online jobs',
  openGraph: {
    title: 'Home Hustle - Legitimate Work From Home Jobs & Passive Income',
    description: 'Find real work from home opportunities, remote jobs, and passive income ideas. No scams, just vetted opportunities for everyday Americans.',
    url: 'https://homehustle.info',
    siteName: 'Home Hustle',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Hustle - Legitimate Work From Home Jobs & Passive Income',
    description: 'Find real work from home opportunities, remote jobs, and passive income ideas. No scams, just vetted opportunities.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <GoogleAnalytics />
        {/* Header */}
        <header className="bg-[#073B3E]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo.jpg" 
                  alt="Home Hustle" 
                  width={180} 
                  height={50} 
                  className="h-10 w-auto"
                  priority
                />
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-white/70 hover:text-[#FF8D07] transition">Home</Link>
                <Link href="/opportunities" className="text-white/70 hover:text-[#FF8D07] transition">All Opportunities</Link>
                <Link href="/categories/remote-jobs" className="text-white/70 hover:text-[#FF8D07] transition">Remote Jobs</Link>
                <Link href="/categories/passive-income" className="text-white/70 hover:text-[#FF8D07] transition">Passive Income</Link>
                <Link href="/about" className="text-white/70 hover:text-[#FF8D07] transition">About</Link>
              </div>
              <Link
                href="/subscribe"
                className="bg-[#9440C8] hover:bg-[#7B33A8] text-white px-5 py-2 rounded-full font-medium transition hidden md:block"
              >
                Get Updates
              </Link>
              <MobileNav />
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-[#052A2C] text-white/50 mt-20">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="mb-4">
                  <Image 
                    src="/logo.jpg" 
                    alt="Home Hustle" 
                    width={180} 
                    height={50} 
                    className="h-10 w-auto"
                  />
                </div>
                <p className="text-sm">
                  Helping everyday Americans find legitimate work from home opportunities and build real income streams.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/categories/remote-jobs" className="hover:text-white transition">Remote Jobs</Link></li>
                  <li><Link href="/categories/freelance" className="hover:text-white transition">Freelance Work</Link></li>
                  <li><Link href="/categories/passive-income" className="hover:text-white transition">Passive Income</Link></li>
                  <li><Link href="/categories/side-hustles" className="hover:text-white transition">Side Hustles</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/guides/getting-started" className="hover:text-white transition">Getting Started</Link></li>
                  <li><Link href="/guides/avoid-scams" className="hover:text-white transition">Avoid Scams</Link></li>
                  <li><Link href="/tools" className="hover:text-white transition">Recommended Tools</Link></li>
                  <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
                <p className="text-sm mb-4">Get the latest opportunities delivered to your inbox.</p>
                <FooterForm />
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-sm text-center">
              <p>&copy; 2026 Home Hustle. All rights reserved.</p>
              <p className="mt-2">
                <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                {' · '}
                <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
                {' · '}
                <Link href="/disclosure" className="hover:text-white transition">Affiliate Disclosure</Link>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
