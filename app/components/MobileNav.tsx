'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#073B3E]">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white p-2"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col items-center gap-6 pt-8">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="text-xl text-white hover:text-[#FF8D07] transition"
            >
              Home
            </Link>
            <Link 
              href="/opportunities" 
              onClick={() => setIsOpen(false)}
              className="text-xl text-white hover:text-[#FF8D07] transition"
            >
              All Opportunities
            </Link>
            <Link 
              href="/categories/remote-jobs" 
              onClick={() => setIsOpen(false)}
              className="text-xl text-white hover:text-[#FF8D07] transition"
            >
              Remote Jobs
            </Link>
            <Link 
              href="/categories/freelance" 
              onClick={() => setIsOpen(false)}
              className="text-xl text-white hover:text-[#FF8D07] transition"
            >
              Freelance
            </Link>
            <Link 
              href="/categories/passive-income" 
              onClick={() => setIsOpen(false)}
              className="text-xl text-white hover:text-[#FF8D07] transition"
            >
              Passive Income
            </Link>
            <Link 
              href="/categories/side-hustles" 
              onClick={() => setIsOpen(false)}
              className="text-xl text-white hover:text-[#FF8D07] transition"
            >
              Side Hustles
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="text-xl text-white hover:text-[#FF8D07] transition"
            >
              About
            </Link>
            <Link
              href="/subscribe"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-[#9440C8] hover:bg-[#7B33A8] text-white px-8 py-3 rounded-full font-medium transition"
            >
              Get Updates
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
