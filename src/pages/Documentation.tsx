import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ApiExplorer from '../components/ApiExplorer'
import ApiReference from '../components/ApiReference'
import SdkGenerator from '../components/SdkGenerator'
import PostmanGenerator from '../components/PostmanGenerator'
import OpenAPIGenerator from '../components/OpenAPIGenerator'
import { apiEndpoints } from '../data/apiEndpoints'
import { Copy, Check, ExternalLink, Book, Code, Zap, Menu, X, ChevronRight, Search, Key, Play, FileText, Download, Settings, AlertTriangle, HelpCircle } from 'lucide-react'

const DocumentationPage: React.FC = () => {
  const { t } = useTranslation()
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState('introduction')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  const navigationSections = [
    {
      title: t('documentation.navigation.gettingStarted'),
      items: [
        { id: 'introduction', title: t('documentation.navigation.introduction'), icon: Book },
        { id: 'authentication', title: t('documentation.navigation.authentication'), icon: Key },
        { id: 'quick-start', title: t('documentation.navigation.quickStart'), icon: Zap },
        { id: 'api-explorer', title: t('documentation.navigation.apiExplorer'), icon: Play }
      ]
    },
    {
      title: t('documentation.navigation.apiReference'),
      items: [
        { id: 'endpoints', title: t('documentation.navigation.allEndpoints'), icon: Code },
        { id: 'music-generation', title: t('documentation.navigation.musicGeneration'), icon: '🎵' },
        { id: 'text-to-speech', title: t('documentation.navigation.textToSpeech'), icon: '🎤' },
        { id: 'credits', title: t('documentation.navigation.credits'), icon: '💳' }
      ]
    },
    {
      title: t('documentation.navigation.toolsSdks'),
      items: [
        { id: 'sdk-generator', title: t('documentation.navigation.sdkGenerator'), icon: Download },
        { id: 'postman', title: t('documentation.navigation.postman'), icon: FileText },
        { id: 'openapi', title: t('documentation.navigation.openapi'), icon: Settings }
      ]
    },
    {
      title: t('documentation.navigation.support'),
      items: [
        { id: 'error-handling', title: t('documentation.navigation.errorHandling'), icon: AlertTriangle },
        { id: 'rate-limits', title: t('documentation.navigation.rateLimits'), icon: '⏱️' },
        { id: 'help', title: t('documentation.navigation.getHelp'), icon: HelpCircle }
      ]
    }
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setSidebarOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const CodeBlock = ({ code, language, id }: { code: string; language: string; id: string }) => (
    <div className="bg-gray-900 rounded-lg p-4 relative">
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-400 text-sm font-medium">{language}</span>
        <button
          onClick={() => copyToClipboard(code, id)}
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
        >
          {copiedCode === id ? (
            <>
              <Check className="w-4 h-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="text-green-400 text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Documentation Layout */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-30 w-72 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col h-full bg-white border-r border-gray-200 pt-16">
            {/* Search Bar */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder={t('documentation.search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-black focus:border-black"
                />
                <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">⌘K</kbd>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-4">
              <div className="space-y-6">
                {navigationSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      {section.title}
                    </h3>
                    <div className="space-y-1">
                      {section.items.map((item) => {
                        const IconComponent = typeof item.icon === 'string' ? () => <span>{item.icon}</span> : item.icon
                        return (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-left ${
                              activeSection === item.id
                                ? 'bg-black text-white'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <IconComponent className="w-4 h-4" />
                            {item.title}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
        
        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden" 
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-72">
          {/* Mobile Header */}
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="text-lg font-semibold text-black">{t('documentation.title')}</h1>
              <div className="w-9" /> {/* Spacer */}
            </div>
          </div>
          
          {/* Content Area */}
          <div className="max-w-4xl mx-auto px-6 py-8 lg:px-8">
            {/* Introduction Section */}
            <section id="introduction" className="mb-16">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {t('documentation.intro.badge')}
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                  {t('documentation.intro.title')}
                </h1>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Book className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-3">{t('documentation.intro.subtitle')}</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {t('documentation.intro.description')}
                    </p>
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-orange-600">🎯</span>
                    <span className="font-medium text-orange-800">
                      {t('documentation.intro.goal')}
                    </span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <a 
                    href={`https://app.veeq.ai${i18n.language === 'tr' ? '/tr' : ''}/register`}
                    className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    <Key className="w-5 h-5" />
                    {t('documentation.intro.getApiKey')}
                  </a>
                  <button
                    onClick={() => scrollToSection('quick-start')}
                    className="flex items-center justify-center gap-2 bg-gray-100 text-black px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-200 transition-colors"
                  >
                    <Zap className="w-5 h-5" />
                    {t('documentation.intro.quickStart')}
                  </button>
                </div>
              </div>
            </section>
            
            {/* What We Offer */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">🚀</span>
                <h2 className="text-3xl font-bold text-black">{t('documentation.whatWeOffer.title')}</h2>
              </div>
              
              <p className="text-gray-700 text-lg mb-8">
                {t('documentation.whatWeOffer.description')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🎵</span>
                    <h3 className="text-xl font-bold text-black">{t('documentation.whatWeOffer.musicGeneration.title')}</h3>
                  </div>
                  <p className="text-gray-600">{t('documentation.whatWeOffer.musicGeneration.description')}</p>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🎙️</span>
                    <h3 className="text-xl font-bold text-black">{t('documentation.whatWeOffer.voiceChanging.title')}</h3>
                  </div>
                  <p className="text-gray-600">{t('documentation.whatWeOffer.voiceChanging.description')}</p>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🎤</span>
                    <h3 className="text-xl font-bold text-black">{t('documentation.whatWeOffer.textToSpeech.title')}</h3>
                  </div>
                  <p className="text-gray-600">{t('documentation.whatWeOffer.textToSpeech.description')}</p>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🔊</span>
                    <h3 className="text-xl font-bold text-black">{t('documentation.whatWeOffer.audioProcessing.title')}</h3>
                  </div>
                  <p className="text-gray-600">{t('documentation.whatWeOffer.audioProcessing.description')}</p>
                </div>
              </div>
            </section>

            {/* Authentication Section */}
            <section id="authentication" className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-8">{t('documentation.sections.authentication.title')}</h2>
              
              <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-bold">🔗</span>
                      </span>
                      {t('documentation.sections.authentication.baseUrl')}
                    </h3>
                    <div className="bg-gray-900 rounded-lg p-3 mb-6">
                      <code className="text-green-400 text-sm">https://api.veeq.ai/api</code>
                    </div>
                    
                    <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                      <Key className="w-5 h-5 text-purple-600" />
                      {t('documentation.sections.authentication.authTitle')}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {t('documentation.sections.authentication.authDescription')}
                    </p>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <code className="text-green-400 text-sm">Authorization: Bearer YOUR_JWT_TOKEN</code>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                      <span className="text-xl">⏱️</span>
                      {t('documentation.sections.authentication.rateLimits')}
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-bold text-green-800 mb-1">{t('documentation.sections.authentication.plans.free.name')}</h4>
                        <p className="text-green-600 text-sm">{t('documentation.sections.authentication.plans.free.limit')}</p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-bold text-blue-800 mb-1">{t('documentation.sections.authentication.plans.pro.name')}</h4>
                        <p className="text-blue-600 text-sm">{t('documentation.sections.authentication.plans.pro.limit')}</p>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <h4 className="font-bold text-purple-800 mb-1">{t('documentation.sections.authentication.plans.enterprise.name')}</h4>
                        <p className="text-purple-600 text-sm">{t('documentation.sections.authentication.plans.enterprise.limit')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Start */}
            <section id="quick-start" className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-8">{t('documentation.sections.quickStart.title')}</h2>
              
              <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
                <h3 className="text-2xl font-bold text-black mb-6">{t('documentation.sections.quickStart.step1.title')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('documentation.sections.quickStart.step1.description')}
                </p>
                <a
                  href={`https://app.veeq.ai${i18n.language === 'tr' ? '/tr' : ''}/register`}
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {t('documentation.sections.quickStart.step1.button')} <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
                <h3 className="text-2xl font-bold text-black mb-6">{t('documentation.sections.quickStart.step2.title')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('documentation.sections.quickStart.step2.description')}
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-black">{t('documentation.sections.quickStart.examples.curl')}</h4>
                  <CodeBlock
                    language="bash"
                    id="curl-example"
                    code={`curl -X POST https://api.veeq.ai/api/music/generate \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Upbeat electronic dance music",
    "modelId": "MODEL_ID",
    "duration": 30
  }'`}
                  />

                  <h4 className="font-bold text-black mt-6">{t('documentation.sections.quickStart.examples.javascript')}</h4>
                  <CodeBlock
                    language="javascript"
                    id="js-example"
                    code={`const response = await fetch('https://api.veeq.ai/api/music/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_JWT_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'Upbeat electronic dance music',
    modelId: 'MODEL_ID',
    duration: 30
  })
});

const result = await response.json();
console.log(result);`}
                  />
                </div>
              </div>
            </section>
            
            {/* API Explorer */}
            <section id="api-explorer" className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-8">{t('documentation.sections.apiExplorer.title')}</h2>
              <p className="text-lg text-gray-700 mb-8">
                {t('documentation.sections.apiExplorer.description')}
              </p>
              
              <div className="grid gap-8">
                {/* Authentication Endpoint */}
                <ApiExplorer 
                  endpoint={{
                    id: 'get-user-info',
                    method: 'GET',
                    path: '/api/auth/me',
                    title: 'Get User Information',
                    description: 'Retrieve current user details and credit balance.',
                    parameters: [
                      {
                        name: 'Authorization',
                        type: 'header',
                        required: true,
                        description: 'Bearer token for authentication',
                        example: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
                      }
                    ]
                  }}
                />
                
                {/* Music Generation Endpoint */}
                <ApiExplorer 
                  endpoint={{
                    id: 'generate-music',
                    method: 'POST',
                    path: '/api/music/generate',
                    title: 'Generate Music',
                    description: 'Create original music from text prompts using AI models.',
                    body: JSON.stringify({
                      prompt: 'Upbeat electronic dance music with synthesizers',
                      modelId: 'MODEL_ID',
                      duration: 30,
                      style: 'electronic',
                      lyrics: ''
                    }, null, 2),
                    parameters: [
                      {
                        name: 'prompt',
                        type: 'string',
                        required: true,
                        description: 'Text description of the music to generate',
                        example: 'Upbeat electronic dance music'
                      },
                      {
                        name: 'modelId',
                        type: 'string',
                        required: true,
                        description: 'ID of the AI model to use',
                        example: 'meta-musicgen-large'
                      },
                      {
                        name: 'duration',
                        type: 'number',
                        required: false,
                        description: 'Duration in seconds (10-120)',
                        example: '30'
                      }
                    ]
                  }}
                />
              </div>
            </section>

            {/* Complete API Reference */}
            <section id="endpoints" className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-8">{t('documentation.sections.apiReference.title')}</h2>
              <p className="text-lg text-gray-700 mb-8">
                {t('documentation.sections.apiReference.description')}
              </p>
              
              <ApiReference endpoints={apiEndpoints} />
            </section>
            
            {/* SDK Generator */}
            <section id="sdk-generator" className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-8">{t('documentation.sections.sdks.title')}</h2>
              <p className="text-lg text-gray-700 mb-8">
                {t('documentation.sections.sdks.description')}
              </p>
              
              <SdkGenerator baseUrl="https://api.veeq.ai" />
            </section>
            
            {/* Postman Collection */}
            <section id="postman" className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-8">{t('documentation.sections.postman.title')}</h2>
              <p className="text-lg text-gray-700 mb-8">
                {t('documentation.sections.postman.description')}
              </p>
              
              <PostmanGenerator baseUrl="https://api.veeq.ai" />
            </section>
            
            {/* OpenAPI Specification */}
            <section id="openapi" className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-8">{t('documentation.sections.openapi.title')}</h2>
              <p className="text-lg text-gray-700 mb-8">
                {t('documentation.sections.openapi.description')}
              </p>
              
              <OpenAPIGenerator baseUrl="https://api.veeq.ai" />
            </section>

            {/* Error Handling */}
            <section id="error-handling" className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-8">{t('documentation.sections.errorHandling.title')}</h2>
              
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-black mb-6">{t('documentation.sections.errorHandling.responseFormat.title')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('documentation.sections.errorHandling.responseFormat.description')}
                </p>
                
                <CodeBlock
                  language="json"
                  id="error-format"
                  code={`{
  "success": false,
  "error": "Insufficient credits",
  "code": "INSUFFICIENT_CREDITS",
  "details": {
    "required": 20,
    "available": 5
  },
  "timestamp": "2024-01-15T10:30:00Z"
}`}
                />

                <h4 className="font-bold text-black mt-6 mb-4">{t('documentation.sections.errorHandling.commonCodes.title')}</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-bold text-black mb-1">{t('documentation.sections.errorHandling.commonCodes.401.code')}</h5>
                    <p className="text-gray-600 text-sm">{t('documentation.sections.errorHandling.commonCodes.401.description')}</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-bold text-black mb-1">{t('documentation.sections.errorHandling.commonCodes.402.code')}</h5>
                    <p className="text-gray-600 text-sm">{t('documentation.sections.errorHandling.commonCodes.402.description')}</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-bold text-black mb-1">{t('documentation.sections.errorHandling.commonCodes.429.code')}</h5>
                    <p className="text-gray-600 text-sm">{t('documentation.sections.errorHandling.commonCodes.429.description')}</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-bold text-black mb-1">{t('documentation.sections.errorHandling.commonCodes.500.code')}</h5>
                    <p className="text-gray-600 text-sm">{t('documentation.sections.errorHandling.commonCodes.500.description')}</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Rate Limits */}
            <section id="rate-limits" className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-8">{t('documentation.sections.rateLimits.title')}</h2>
              
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-black mb-6">{t('documentation.sections.rateLimits.understanding.title')}</h3>
                <p className="text-gray-700 mb-6">
                  {t('documentation.sections.rateLimits.understanding.description')}
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">{t('documentation.sections.rateLimits.plans.free.name')}</h4>
                    <p className="text-2xl font-bold text-green-600 mb-2">{t('documentation.sections.rateLimits.plans.free.number')}</p>
                    <p className="text-sm text-green-600">{t('documentation.sections.rateLimits.plans.free.unit')}</p>
                  </div>
                  <div className="text-center p-6 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">{t('documentation.sections.rateLimits.plans.pro.name')}</h4>
                    <p className="text-2xl font-bold text-blue-600 mb-2">{t('documentation.sections.rateLimits.plans.pro.number')}</p>
                    <p className="text-sm text-blue-600">{t('documentation.sections.rateLimits.plans.pro.unit')}</p>
                  </div>
                  <div className="text-center p-6 bg-purple-50 border border-purple-200 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-2">{t('documentation.sections.rateLimits.plans.enterprise.name')}</h4>
                    <p className="text-2xl font-bold text-purple-600 mb-2">{t('documentation.sections.rateLimits.plans.enterprise.number')}</p>
                    <p className="text-sm text-purple-600">{t('documentation.sections.rateLimits.plans.enterprise.unit')}</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Community & Support */}
            <section id="help" className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-8">{t('documentation.sections.support.title')}</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl border border-gray-200 p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">{t('documentation.sections.support.official.title')}</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-black pl-4">
                      <h4 className="font-bold text-black mb-1">{t('documentation.sections.support.official.javascript.title')}</h4>
                      <p className="text-gray-600 text-sm mb-2">{t('documentation.sections.support.official.javascript.description')}</p>
                      <code className="text-green-600 text-sm">{t('documentation.sections.support.official.javascript.availability')}</code>
                    </div>
                    <div className="border-l-4 border-black pl-4">
                      <h4 className="font-bold text-black mb-1">{t('documentation.sections.support.official.python.title')}</h4>
                      <p className="text-gray-600 text-sm mb-2">{t('documentation.sections.support.official.python.description')}</p>
                      <code className="text-green-600 text-sm">{t('documentation.sections.support.official.python.availability')}</code>
                    </div>
                    <div className="border-l-4 border-black pl-4">
                      <h4 className="font-bold text-black mb-1">{t('documentation.sections.support.official.multiLang.title')}</h4>
                      <p className="text-gray-600 text-sm mb-2">{t('documentation.sections.support.official.multiLang.description')}</p>
                      <code className="text-green-600 text-sm">{t('documentation.sections.support.official.multiLang.availability')}</code>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">{t('documentation.sections.support.community.title')}</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-black pl-4">
                      <h4 className="font-bold text-black mb-1">{t('documentation.sections.support.community.discord.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('documentation.sections.support.community.discord.description')}</p>
                    </div>
                    <div className="border-l-4 border-black pl-4">
                      <h4 className="font-bold text-black mb-1">{t('documentation.sections.support.community.github.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('documentation.sections.support.community.github.description')}</p>
                    </div>
                    <div className="border-l-4 border-black pl-4">
                      <h4 className="font-bold text-black mb-1">{t('documentation.sections.support.community.support.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('documentation.sections.support.community.support.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Getting Help */}
              <div className="text-center bg-white rounded-xl border border-gray-200 p-8 mt-8">
                <h3 className="text-2xl font-bold text-black mb-6">{t('documentation.sections.support.help.title')}</h3>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  {t('documentation.sections.support.help.description')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:support@veeq.ai"
                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    <HelpCircle className="w-5 h-5" />
                    {t('documentation.sections.support.help.contactSupport')}
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-gray-100 text-black px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-200 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    {t('documentation.sections.support.help.joinDiscord')}
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DocumentationPage