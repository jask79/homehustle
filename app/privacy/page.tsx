import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Home Hustle',
  description: 'Privacy Policy for Home Hustle. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
      <p className="text-white/50 text-sm mb-8">Last updated: February 2026</p>
      
      <div className="prose prose-invert max-w-none">
        <section className="mb-8">
          <h2>Introduction</h2>
          <p>
            Home Hustle (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to 
            protecting your personal information. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website homehustle.info.
          </p>
        </section>

        <section className="mb-8">
          <h2>Information We Collect</h2>
          <p>We may collect information about you in a variety of ways:</p>
          <ul>
            <li>
              <strong>Personal Data:</strong> When you subscribe to our newsletter or fill out forms, 
              we collect your name, email address, and phone number (if provided).
            </li>
            <li>
              <strong>Usage Data:</strong> We automatically collect certain information when you visit 
              our website, including your IP address, browser type, operating system, referring URLs, 
              and pages viewed.
            </li>
            <li>
              <strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies 
              to track activity on our website and hold certain information.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Send you newsletters and updates about work from home opportunities</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Analyze usage patterns to improve our website and content</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Sharing Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. 
            We may share your information with:
          </p>
          <ul>
            <li>Service providers who assist in operating our website and conducting our business</li>
            <li>Analytics partners to help us understand website usage</li>
            <li>Law enforcement when required by law</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Email Communications</h2>
          <p>
            By subscribing to our newsletter, you agree to receive emails from us. You can 
            unsubscribe at any time by clicking the unsubscribe link at the bottom of any email 
            or by contacting us directly.
          </p>
        </section>

        <section className="mb-8">
          <h2>Third-Party Links</h2>
          <p>
            Our website contains links to third-party websites. We are not responsible for the 
            privacy practices of these external sites. We encourage you to read their privacy 
            policies before providing any personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. 
            However, no method of transmission over the Internet is 100% secure, and we cannot 
            guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>California Privacy Rights</h2>
          <p>
            If you are a California resident, you have specific rights regarding your personal 
            information under the California Consumer Privacy Act (CCPA). Please contact us 
            to exercise these rights.
          </p>
        </section>

        <section className="mb-8">
          <h2>Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for children under 13 years of age. We do not knowingly 
            collect personal information from children under 13.
          </p>
        </section>

        <section className="mb-8">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new Privacy Policy on this page and updating the 
            &ldquo;Last updated&rdquo; date.
          </p>
        </section>

        <section className="mb-8">
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> support@homehustle.info
          </p>
        </section>
      </div>
    </div>
  )
}
