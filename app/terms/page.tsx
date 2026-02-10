import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Home Hustle',
  description: 'Terms of Service for Home Hustle. Please read these terms carefully before using our website.',
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
      <p className="text-white/50 text-sm mb-8">Last updated: February 2026</p>
      
      <div className="prose prose-invert max-w-none">
        <section className="mb-8">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing and using Home Hustle (homehustle.info), you agree to be bound by these 
            Terms of Service. If you disagree with any part of these terms, you may not access 
            the website.
          </p>
        </section>

        <section className="mb-8">
          <h2>Description of Service</h2>
          <p>
            Home Hustle provides information about work from home opportunities, remote jobs, 
            side hustles, and passive income strategies. Our content is for informational and 
            educational purposes only.
          </p>
        </section>

        <section className="mb-8">
          <h2>No Employment Relationship</h2>
          <p>
            Home Hustle is not an employer or employment agency. We do not guarantee employment 
            or income. The opportunities listed on our site are provided by third-party companies, 
            and you apply to them directly. We are not responsible for hiring decisions, pay, 
            or working conditions at any company we feature.
          </p>
        </section>

        <section className="mb-8">
          <h2>No Financial Advice</h2>
          <p>
            The information on this website is not financial, investment, or legal advice. 
            Income claims and earning potential mentioned are examples only and not guarantees. 
            Your results may vary based on your skills, effort, market conditions, and other factors.
          </p>
          <p>
            Before making any financial decisions, please consult with a qualified professional.
          </p>
        </section>

        <section className="mb-8">
          <h2>Accuracy of Information</h2>
          <p>
            We strive to provide accurate and up-to-date information, but we make no warranties 
            about the completeness, reliability, or accuracy of this information. Pay rates, 
            hiring status, and company policies may change without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2>Third-Party Links</h2>
          <p>
            Our website contains links to third-party websites and services. We are not 
            responsible for the content, policies, or practices of any third-party sites. 
            Clicking on links and engaging with third parties is at your own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2>Affiliate Disclosure</h2>
          <p>
            Home Hustle participates in affiliate programs. When you click certain links and 
            sign up or make purchases, we may earn a commission at no additional cost to you. 
            This does not influence which opportunities we recommend. See our{' '}
            <a href="/disclosure" className="text-[#FF8D07]">Affiliate Disclosure</a> for more details.
          </p>
        </section>

        <section className="mb-8">
          <h2>User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use this website for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to any part of the website</li>
            <li>Transmit any viruses, malware, or harmful code</li>
            <li>Scrape, copy, or reproduce our content without permission</li>
            <li>Interfere with the proper functioning of the website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Intellectual Property</h2>
          <p>
            All content on Home Hustle, including text, graphics, logos, and images, is owned 
            by us or our licensors and is protected by copyright laws. You may not reproduce, 
            distribute, or create derivative works without our written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2>Disclaimer of Warranties</h2>
          <p>
            THE WEBSITE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY 
            KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, 
            ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>
        </section>

        <section className="mb-8">
          <h2>Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, HOME HUSTLE SHALL NOT BE LIABLE FOR ANY 
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM 
            YOUR USE OF THE WEBSITE OR ANY OPPORTUNITIES LISTED HEREIN.
          </p>
        </section>

        <section className="mb-8">
          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Home Hustle and its affiliates from any 
            claims, damages, or expenses arising from your use of the website or violation of 
            these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the 
            United States, without regard to conflict of law provisions.
          </p>
        </section>

        <section className="mb-8">
          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users of 
            significant changes by updating the date at the top of this page. Continued use 
            of the website after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section className="mb-8">
          <h2>Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> support@homehustle.info
          </p>
        </section>
      </div>
    </div>
  )
}
