import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Freelance Work - Flexible Income Opportunities | Home Hustle',
  description: 'Find freelance opportunities in writing, design, virtual assistance, and more. Work on your own schedule and build your client base.',
}

const freelanceOpportunities = [
  {
    category: 'Writing & Content',
    opportunities: [
      {
        title: 'Freelance Content Writer',
        platforms: ['Upwork', 'Contently', 'Skyword', 'ClearVoice'],
        pay: '$25-150/article or $0.10-0.50/word',
        description: 'Write blog posts, articles, and marketing content for businesses. Most successful writers specialize in a niche like tech, health, or finance.',
        skills: ['Strong writing skills', 'Research ability', 'SEO knowledge helpful', 'Meet deadlines'],
        difficulty: 'Medium',
        link: 'https://www.upwork.com/freelance-jobs/content-writing/',
      },
      {
        title: 'Copywriter',
        platforms: ['Fiverr', 'Upwork', 'ProBlogger Job Board'],
        pay: '$50-500+ per project',
        description: 'Write sales pages, email campaigns, ads, and website copy that converts. Higher paying than general content writing.',
        skills: ['Persuasive writing', 'Marketing knowledge', 'Understanding of sales psychology'],
        difficulty: 'Medium-Hard',
        link: 'https://www.problogger.com/jobs/',
      },
    ],
  },
  {
    category: 'Virtual Assistance',
    opportunities: [
      {
        title: 'General Virtual Assistant',
        platforms: ['Belay', 'Time Etc', 'Boldly', 'Fancy Hands'],
        pay: '$15-35/hour',
        description: 'Handle email, scheduling, data entry, and administrative tasks for busy professionals. Great entry point for remote work.',
        skills: ['Organization', 'Communication', 'Tech-savvy', 'Reliability'],
        difficulty: 'Easy-Medium',
        link: 'https://www.belay.com/virtual-assistants',
      },
      {
        title: 'Executive Virtual Assistant',
        platforms: ['Boldly', 'Belay', 'Direct clients'],
        pay: '$25-50/hour',
        description: 'Support C-level executives with complex scheduling, travel arrangements, project management, and confidential tasks.',
        skills: ['5+ years admin experience', 'Discretion', 'Proactive problem-solving'],
        difficulty: 'Medium-Hard',
        link: 'https://boldly.com/careers/',
      },
    ],
  },
  {
    category: 'Design & Creative',
    opportunities: [
      {
        title: 'Graphic Designer',
        platforms: ['99designs', 'DesignCrowd', 'Fiverr', 'Dribbble'],
        pay: '$25-100+/hour or $200-2000/project',
        description: 'Create logos, social media graphics, marketing materials, and brand assets for businesses.',
        skills: ['Adobe Creative Suite or Canva Pro', 'Eye for design', 'Client communication'],
        difficulty: 'Medium',
        link: 'https://99designs.com/designers',
      },
      {
        title: 'Video Editor',
        platforms: ['Upwork', 'Fiverr', 'Video Husky', 'Direct clients'],
        pay: '$30-100+/hour',
        description: 'Edit YouTube videos, social media content, ads, and corporate videos. High demand skill with growing market.',
        skills: ['Premiere Pro or Final Cut', 'Storytelling', 'Understanding of pacing'],
        difficulty: 'Medium',
        link: 'https://www.upwork.com/freelance-jobs/video-editing/',
      },
    ],
  },
  {
    category: 'Tech & Development',
    opportunities: [
      {
        title: 'Web Developer',
        platforms: ['Toptal', 'Upwork', 'Freelancer', 'Gun.io'],
        pay: '$50-150+/hour',
        description: 'Build websites and web applications for clients. WordPress, Shopify, and custom development all in demand.',
        skills: ['HTML/CSS/JavaScript', 'Framework knowledge', 'Problem-solving'],
        difficulty: 'Hard',
        link: 'https://www.toptal.com/developers',
      },
      {
        title: 'QA Tester',
        platforms: ['uTest', 'Testlio', 'UserTesting'],
        pay: '$10-50/hour or per bug',
        description: 'Test websites and apps for bugs, usability issues, and functionality. Some platforms pay per bug found.',
        skills: ['Attention to detail', 'Clear communication', 'Various devices helpful'],
        difficulty: 'Easy-Medium',
        link: 'https://www.utest.com/',
      },
    ],
  },
  {
    category: 'Teaching & Tutoring',
    opportunities: [
      {
        title: 'Online English Tutor',
        platforms: ['Cambly', 'Preply', 'iTalki', 'Engoo'],
        pay: '$10-25/hour',
        description: 'Teach English to students worldwide via video chat. No teaching degree required for many platforms.',
        skills: ['Native English speaker', 'Patience', 'Basic tech skills', 'Conversational'],
        difficulty: 'Easy',
        link: 'https://www.cambly.com/en/tutors',
      },
      {
        title: 'Academic Tutor',
        platforms: ['Tutor.com', 'Wyzant', 'Varsity Tutors', 'Chegg Tutors'],
        pay: '$20-80/hour',
        description: 'Help students with math, science, test prep, and other subjects. Higher rates for specialized subjects like SAT/ACT prep.',
        skills: ['Subject expertise', 'Teaching ability', 'Degree often required'],
        difficulty: 'Medium',
        link: 'https://www.wyzant.com/tutorjobs',
      },
    ],
  },
  {
    category: 'AI & Automation',
    opportunities: [
      {
        title: 'AI Content Specialist',
        platforms: ['Upwork', 'Fiverr', 'Direct clients'],
        pay: '$30-100+/hour',
        description: 'Help businesses leverage AI for content creation—blog posts, social media, email sequences. Clients pay for your expertise in prompting and editing AI output.',
        skills: ['AI tool proficiency (ChatGPT, Claude)', 'Editing skills', 'Content strategy', 'Client communication'],
        difficulty: 'Medium',
        link: 'https://www.upwork.com/freelance-jobs/ai/',
      },
      {
        title: 'Automation Specialist',
        platforms: ['Upwork', 'Zapier Experts', 'Make Partners'],
        pay: '$50-150/hour',
        description: 'Build automated workflows connecting apps and services. High demand from businesses wanting to save time on repetitive tasks.',
        skills: ['Zapier/Make proficiency', 'Process mapping', 'Problem-solving', 'Technical documentation'],
        difficulty: 'Medium-Hard',
        link: 'https://zapier.com/experts',
      },
      {
        title: 'AI Prompt Engineer',
        platforms: ['Upwork', 'Toptal', 'Direct clients'],
        pay: '$60-150/hour',
        description: 'Design and optimize prompts for AI systems. Build custom GPTs, create prompt libraries, and help businesses integrate AI into their workflows. One of the hottest freelance skills in 2026.',
        skills: ['Deep AI tool knowledge', 'Systems thinking', 'Clear documentation', 'Business process understanding'],
        difficulty: 'Medium-Hard',
        link: 'https://www.upwork.com/freelance-jobs/prompt-engineering/',
      },
    ],
  },
  {
    category: 'No-Code Development',
    opportunities: [
      {
        title: 'Webflow Developer',
        platforms: ['Upwork', 'Webflow Experts', 'Direct clients'],
        pay: '$50-120/hour',
        description: 'Build stunning, responsive websites without traditional coding. Webflow skills are in high demand from startups and agencies who need fast, beautiful sites.',
        skills: ['Webflow proficiency', 'Design eye', 'CSS understanding', 'Client communication'],
        difficulty: 'Medium',
        link: 'https://experts.webflow.com/',
      },
      {
        title: 'Bubble App Builder',
        platforms: ['Upwork', 'Bubble Agency Partners', 'Direct clients'],
        pay: '$50-100/hour',
        description: 'Create full web applications without code. Build MVPs, internal tools, and marketplace apps for startups and businesses. Projects range from $1K-$20K+.',
        skills: ['Bubble.io proficiency', 'Database design', 'API integrations', 'UX thinking'],
        difficulty: 'Medium-Hard',
        link: 'https://bubble.io/agency-program',
      },
    ],
  },
  {
    category: 'Career Services',
    opportunities: [
      {
        title: 'Resume Writer',
        platforms: ['Fiverr', 'Upwork', 'Direct clients'],
        pay: '$50-150/resume or $300-1,200/package',
        description: 'Craft tailored resumes that help professionals land interviews. Bundle with cover letters and LinkedIn optimization for higher earnings. Use AI to speed up research and drafting.',
        skills: ['Strong writing', 'Understanding of hiring trends', 'ATS optimization', 'Client interviewing'],
        difficulty: 'Medium',
        link: 'https://www.fiverr.com/categories/writing-translation/resume-writing',
      },
      {
        title: 'LinkedIn Profile Optimizer',
        platforms: ['Fiverr', 'Upwork', 'Direct clients'],
        pay: '$75-300/profile',
        description: 'Help professionals stand out on LinkedIn with optimized headlines, summaries, and keyword-rich profiles. High demand from job seekers and executives.',
        skills: ['LinkedIn expertise', 'SEO thinking', 'Copywriting', 'Personal branding knowledge'],
        difficulty: 'Easy-Medium',
        link: 'https://www.upwork.com/freelance-jobs/linkedin/',
      },
    ],
  },
  {
    category: 'Transcription & Translation',
    opportunities: [
      {
        title: 'Transcriptionist',
        platforms: ['Rev', 'TranscribeMe', 'GoTranscript', 'Scribie'],
        pay: '$15-30/audio hour (works out to $7-20/actual hour)',
        description: 'Convert audio and video files to text. Medical and legal transcription pays more but requires training.',
        skills: ['Fast typing (60+ WPM)', 'Good listening skills', 'Grammar knowledge'],
        difficulty: 'Easy-Medium',
        link: 'https://www.rev.com/freelancers',
      },
      {
        title: 'Translator',
        platforms: ['Gengo', 'One Hour Translation', 'Unbabel', 'Lionbridge'],
        pay: '$0.05-0.25/word',
        description: 'Translate documents, websites, and content between languages. Specialized translation (legal, medical) pays premium rates.',
        skills: ['Fluent in 2+ languages', 'Cultural knowledge', 'Writing ability'],
        difficulty: 'Medium',
        link: 'https://gengo.com/translators/',
      },
    ],
  },
]

function getDifficultyColor(difficulty: string) {
  if (difficulty.includes('Easy')) return 'bg-green-100 text-green-700'
  if (difficulty.includes('Medium')) return 'bg-yellow-100 text-yellow-700'
  if (difficulty.includes('Hard')) return 'bg-red-100 text-red-700'
  return 'bg-gray-100 text-gray-700'
}

export default function FreelancePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/" className="text-[#FF8D07] hover:text-[#FFa030] text-sm mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Freelance Work</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Build your own business on your own schedule. These platforms connect freelancers 
          with clients for project-based and ongoing work.
        </p>
      </div>

      {/* Benefits */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-3xl mb-3">🕐</div>
          <h3 className="font-semibold text-gray-900 mb-2">Flexible Schedule</h3>
          <p className="text-gray-600 text-sm">Work when you want, where you want. Set your own hours and take on as many or few projects as you like.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-3xl mb-3">💰</div>
          <h3 className="font-semibold text-gray-900 mb-2">Set Your Rates</h3>
          <p className="text-gray-600 text-sm">As you build your reputation, you can increase your rates. Top freelancers earn six figures.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-3xl mb-3">📈</div>
          <h3 className="font-semibold text-gray-900 mb-2">Grow Your Business</h3>
          <p className="text-gray-600 text-sm">Start on platforms, then transition to direct clients for higher pay and more control.</p>
        </div>
      </div>

      {/* Categories */}
      {freelanceOpportunities.map((category, catIndex) => (
        <section key={catIndex} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            {category.category}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {category.opportunities.map((opp, oppIndex) => (
              <article 
                key={oppIndex}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{opp.title}</h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getDifficultyColor(opp.difficulty)}`}>
                    {opp.difficulty}
                  </span>
                </div>
                <p className="text-emerald-600 font-semibold text-sm mb-2">{opp.pay}</p>
                <p className="text-gray-600 text-sm mb-4">{opp.description}</p>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-gray-500 uppercase">Platforms:</span>
                  <p className="text-sm text-gray-700">{opp.platforms.join(', ')}</p>
                </div>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-gray-500 uppercase">Skills Needed:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {opp.skills.map((skill, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href={opp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Get Started →
                </a>
              </article>
            ))}
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-3">New to Freelancing?</h3>
        <p className="text-blue-100 mb-6">
          Check out our free guide on how to start freelancing and land your first client.
        </p>
        <Link 
          href="/guides/getting-started"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          Read the Guide
        </Link>
      </div>
    </div>
  )
}
