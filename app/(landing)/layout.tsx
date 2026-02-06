import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home Hustle - Start Earning From Home',
  description: 'Discover proven ways to earn extra income from home. No scams, no get-rich-quick schemes — just real opportunities.',
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* No header/footer - clean landing page experience */}
        {children}
      </body>
    </html>
  )
}
