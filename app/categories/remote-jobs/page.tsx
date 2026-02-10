import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remote Jobs - Work From Home Opportunities | Home Hustle',
  description: 'Find legitimate remote jobs from top companies hiring now. Customer service, tech, writing, and more work from home positions.',
}

const remoteJobs = [
  {
    company: 'Amazon',
    title: 'Customer Service Associate',
    pay: '$16-19/hour',
    type: 'Full-Time & Part-Time',
    description: 'Handle customer inquiries via phone, chat, and email. Amazon regularly hires remote customer service reps with benefits including health insurance and 401(k).',
    requirements: ['High school diploma', 'Reliable internet', 'Quiet workspace', 'Basic computer skills'],
    link: 'https://www.amazon.jobs/en/teams/virtual-customer-service',
    hiring: true,
  },
  {
    company: 'TTEC',
    title: 'Customer Experience Champion',
    pay: '$15-22/hour',
    type: 'Full-Time',
    description: 'Provide customer support for major brands from home. TTEC is one of the largest remote employers with opportunities across the US.',
    requirements: ['6+ months customer service experience', 'High school diploma', 'Hardwired internet'],
    link: 'https://www.ttecjobs.com/en/work-from-home',
    hiring: true,
  },
  {
    company: 'TELUS International',
    title: 'AI Data Annotator',
    pay: '$14-25/hour',
    type: 'Part-Time & Full-Time',
    description: 'Help train AI by evaluating search results, rating content quality, and annotating data. Flexible schedule, work when you want.',
    requirements: ['Strong English skills', 'Attention to detail', 'Smartphone and computer'],
    link: 'https://www.telusinternational.ai/cmp/public/jobs',
    hiring: true,
  },
  {
    company: 'Liveops',
    title: 'Virtual Call Center Agent',
    pay: '$12-25/hour',
    type: 'Contract/Freelance',
    description: 'Independent contractor position taking inbound calls for various clients. You choose your own schedule and work as much or as little as you want.',
    requirements: ['Must pass background check', 'Dedicated phone line', 'Quiet workspace'],
    link: 'https://www.liveops.com/become-an-agent',
    hiring: true,
  },
  {
    company: 'Concentrix',
    title: 'Work at Home Advisor',
    pay: '$14-18/hour',
    type: 'Full-Time',
    description: 'Provide customer support for Fortune 500 companies. Concentrix offers paid training, benefits, and career advancement opportunities.',
    requirements: ['High school diploma', '1 year customer service preferred', 'Reliable internet'],
    link: 'https://jobs.concentrix.com/global/en/work-from-home',
    hiring: true,
  },
  {
    company: 'UnitedHealth Group',
    title: 'Remote Claims Processor',
    pay: '$17-24/hour',
    type: 'Full-Time',
    description: 'Process medical claims and assist healthcare providers. UnitedHealth is one of the largest healthcare employers with strong benefits.',
    requirements: ['Healthcare experience preferred', 'Detail-oriented', 'HIPAA knowledge a plus'],
    link: 'https://careers.unitedhealthgroup.com/',
    hiring: true,
  },
  {
    company: 'Progressive Insurance',
    title: 'Customer Service Rep',
    pay: '$18-22/hour',
    type: 'Full-Time',
    description: 'Help customers with insurance quotes, policy changes, and claims. Progressive offers excellent benefits and paid training.',
    requirements: ['Strong communication skills', 'Computer proficiency', 'State licensing may be required'],
    link: 'https://www.progressive.com/careers/',
    hiring: true,
  },
  {
    company: 'Williams-Sonoma',
    title: 'Remote Sales Specialist',
    pay: '$15-18/hour + commission',
    type: 'Full-Time & Seasonal',
    description: 'Help customers shop Williams-Sonoma, Pottery Barn, and West Elm from home. Great for those who love home decor and design.',
    requirements: ['Sales or retail experience', 'Product knowledge willingness', 'Evenings/weekends availability'],
    link: 'https://careers.williams-sonomainc.com/',
    hiring: true,
  },
  {
    company: 'Transcom',
    title: 'Customer Support Agent',
    pay: '$14-17/hour',
    type: 'Full-Time',
    description: 'Support customers for tech and telecom companies. Transcom provides equipment and offers opportunities to move into team lead roles.',
    requirements: ['High school diploma', 'Tech-savvy', 'Problem-solving skills'],
    link: 'https://jobs.transcom.com/',
    hiring: true,
  },
  {
    company: 'Kelly Services',
    title: 'Various Remote Positions',
    pay: '$14-30/hour',
    type: 'Contract & Full-Time',
    description: 'Staffing agency with remote positions in customer service, data entry, admin support, and more. Great way to get your foot in the door.',
    requirements: ['Varies by position', 'Generally entry-level friendly'],
    link: 'https://www.kellyservices.com/us/jobs/',
    hiring: true,
  },
]

export default function RemoteJobsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/" className="text-[#FF8D07] hover:text-[#FFa030] text-sm mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Remote Jobs</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Legitimate work-from-home positions from established companies. These employers are actively 
          hiring and offer real benefits, training, and career growth opportunities.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-blue-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{remoteJobs.length}+</div>
          <div className="text-sm text-gray-600">Companies Hiring</div>
        </div>
        <div className="bg-green-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-green-600">$14-30</div>
          <div className="text-sm text-gray-600">Hourly Range</div>
        </div>
        <div className="bg-purple-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-purple-600">100%</div>
          <div className="text-sm text-gray-600">Work From Home</div>
        </div>
        <div className="bg-orange-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-orange-600">Weekly</div>
          <div className="text-sm text-gray-600">Updated</div>
        </div>
      </div>

      {/* Tips Box */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
        <h3 className="font-semibold text-amber-900 mb-2">💡 Pro Tips for Remote Job Hunting</h3>
        <ul className="text-amber-800 text-sm space-y-1">
          <li>• Apply directly on company websites, not third-party job boards</li>
          <li>• Legitimate employers NEVER ask you to pay for training or equipment</li>
          <li>• Set up a dedicated, quiet workspace before applying</li>
          <li>• Most positions require a hardwired (not WiFi) internet connection</li>
        </ul>
      </div>

      {/* Job Listings */}
      <div className="space-y-6">
        {remoteJobs.map((job, index) => (
          <article 
            key={index}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-xl font-bold text-gray-900">{job.company}</h2>
                  {job.hiring && (
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                      ✓ Hiring Now
                    </span>
                  )}
                </div>
                <h3 className="text-lg text-gray-700 mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    💰 {job.pay}
                  </span>
                  <span className="flex items-center gap-1">
                    ⏰ {job.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-700">Requirements:</span>
                  <ul className="text-sm text-gray-600 mt-1">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-blue-500">•</span> {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-shrink-0">
                <a 
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                  Apply Now →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 bg-gray-900 rounded-xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-3">Want More Opportunities?</h3>
        <p className="text-gray-300 mb-6">
          Get new remote job listings sent to your inbox every week.
        </p>
        <Link 
          href="/subscribe"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
        >
          Subscribe for Free
        </Link>
      </div>
    </div>
  )
}
