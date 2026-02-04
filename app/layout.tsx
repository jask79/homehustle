import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home Hustle - Legitimate Work From Home Jobs & Passive Income',
  description: 'Find real work from home opportunities, remote jobs, and passive income ideas. No scams, just vetted opportunities for everyday Americans.',
  keywords: 'work from home, remote jobs, side hustle, passive income, home business, online jobs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Home Hustle</span>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
                <Link href="/opportunities" className="text-gray-600 hover:text-blue-600 transition">All Opportunities</Link>
                <Link href="/categories/remote-jobs" className="text-gray-600 hover:text-blue-600 transition">Remote Jobs</Link>
                <Link href="/categories/passive-income" className="text-gray-600 hover:text-blue-600 transition">Passive Income</Link>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
              </div>
              <Link 
                href="/subscribe" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition hidden md:block"
              >
                Get Updates
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 mt-20">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">H</span>
                  </div>
                  <span className="text-xl font-bold text-white">Home Hustle</span>
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
                <form className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
              <p>© 2026 Home Hustle. All rights reserved.</p>
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
