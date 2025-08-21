import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
import DocsLayout from '../../components/DocsLayout'
import { ExternalLink, HelpCircle } from 'lucide-react'

const HelpPage: React.FC = () => {
  const { t } = useTranslation()
  
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-6">{t('help.title')}</h1>
        <p className="text-xl text-gray-700">
          {t('help.description')}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-black mb-4">Official Resources</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-black pl-4">
              <h4 className="font-bold text-black mb-1">JavaScript/Node.js SDK</h4>
              <p className="text-gray-600 text-sm mb-2">Complete SDK with TypeScript support</p>
              <Link to="/docs/sdk-generator" className="text-green-600 text-sm hover:underline">Available via Generator</Link>
            </div>
            <div className="border-l-4 border-black pl-4">
              <h4 className="font-bold text-black mb-1">Python SDK</h4>
              <p className="text-gray-600 text-sm mb-2">Full-featured Python client library</p>
              <Link to="/docs/sdk-generator" className="text-green-600 text-sm hover:underline">Available via Generator</Link>
            </div>
            <div className="border-l-4 border-black pl-4">
              <h4 className="font-bold text-black mb-1">Multi-Language Support</h4>
              <p className="text-gray-600 text-sm mb-2">PHP, Go, Ruby, and cURL examples</p>
              <Link to="/docs/sdk-generator" className="text-green-600 text-sm hover:underline">Available via Generator</Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-black mb-4">Community</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-black pl-4">
              <h4 className="font-bold text-black mb-1">Discord Community</h4>
              <p className="text-gray-600 text-sm">Join developers using Veeq AI</p>
            </div>
            <div className="border-l-4 border-black pl-4">
              <h4 className="font-bold text-black mb-1">GitHub Examples</h4>
              <p className="text-gray-600 text-sm">Code samples and integrations</p>
            </div>
            <div className="border-l-4 border-black pl-4">
              <h4 className="font-bold text-black mb-1">Support</h4>
              <p className="text-gray-600 text-sm">24/7 developer support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">Contact Support</h3>
        <p className="text-gray-700 mb-6">
          Need help with your integration? Our support team is ready to assist you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <a
            href="mailto:support@veeq.ai"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            <HelpCircle className="w-5 h-5" />
            Email Support
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gray-100 text-black px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-200 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            Join Discord
          </a>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">FAQ</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-black mb-2">How do I get an API key?</h4>
            <p className="text-gray-700">
              Register for a free account at{' '}
              <a href={`https://app.veeq.ai${i18n.language === 'tr' ? '/tr' : ''}/register`} className="text-blue-600 hover:underline">
                our registration page
              </a>
              . You'll receive your JWT token immediately after creating an account.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-black mb-2">What are the rate limits?</h4>
            <p className="text-gray-700">
              Free plans have 10 requests per minute, Pro plans have 100 requests per minute. 
              Enterprise plans have custom limits. See our{' '}
              <Link to="/docs/rate-limits" className="text-blue-600 hover:underline">
                rate limits page
              </Link>{' '}
              for more details.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-black mb-2">How much do credits cost?</h4>
            <p className="text-gray-700">
              Music generation typically costs 10-20 credits depending on duration and model. 
              Text-to-speech costs 5 credits per request. Check our{' '}
              <Link to="/pricing" className="text-blue-600 hover:underline">
                pricing page
              </Link>{' '}
              for current rates.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-black mb-2">Can I test the API without credits?</h4>
            <p className="text-gray-700">
              Yes! Use our{' '}
              <Link to="/docs/api-explorer" className="text-blue-600 hover:underline">
                API Explorer
              </Link>{' '}
              with mock responses to test endpoints without consuming credits.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-black mb-2">Do you provide SDKs?</h4>
            <p className="text-gray-700">
              We provide code generators for multiple languages including JavaScript, Python, PHP, Go, and Ruby. 
              Visit our{' '}
              <Link to="/docs/sdk-generator" className="text-blue-600 hover:underline">
                SDK Generator
              </Link>{' '}
              to download ready-to-use code.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-black mb-6">Quick Links</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            to="/docs/quick-start"
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h4 className="font-bold text-black mb-2">Quick Start Guide</h4>
            <p className="text-gray-600 text-sm">Get up and running in minutes</p>
          </Link>
          
          <Link
            to="/docs/api-explorer"
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h4 className="font-bold text-black mb-2">API Explorer</h4>
            <p className="text-gray-600 text-sm">Test endpoints in your browser</p>
          </Link>
          
          <Link
            to="/docs/endpoints"
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h4 className="font-bold text-black mb-2">API Reference</h4>
            <p className="text-gray-600 text-sm">Complete endpoint documentation</p>
          </Link>
          
          <Link
            to="/docs/error-handling"
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h4 className="font-bold text-black mb-2">Error Handling</h4>
            <p className="text-gray-600 text-sm">Handle errors gracefully</p>
          </Link>
        </div>
      </div>
    </DocsLayout>
  )
}

export default HelpPage