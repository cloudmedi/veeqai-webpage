import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from './Header'
import SearchModal from './SearchModal'
import Breadcrumb from './Breadcrumb'
import TableOfContents from './TableOfContents'
import { Menu, Search } from 'lucide-react'

const DocsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const location = useLocation()

  const navigationSections = [
    {
      title: t('docsLayout.navigation.gettingStarted'),
      items: [
        { id: 'introduction', title: t('docsLayout.navigation.introduction'), path: '/docs' },
        { id: 'authentication', title: t('docsLayout.navigation.authentication'), path: '/docs/authentication' },
        { id: 'quick-start', title: t('docsLayout.navigation.quickStart'), path: '/docs/quick-start' },
        { id: 'api-explorer', title: t('docsLayout.navigation.apiExplorer'), path: '/docs/api-explorer' }
      ]
    },
    {
      title: t('docsLayout.navigation.apiReference'),
      items: [
        { id: 'endpoints', title: t('docsLayout.navigation.allEndpoints'), path: '/docs/endpoints' }
      ]
    },
    {
      title: t('docsLayout.navigation.billing'),
      items: [
        { id: 'payment-methods', title: t('docsLayout.navigation.paymentMethods'), path: '/docs/payment-methods' },
        { id: 'stripe-integration', title: t('docsLayout.navigation.stripeIntegration'), path: '/docs/stripe-integration' },
        { id: 'iyzico-integration', title: t('docsLayout.navigation.iyzicoIntegration'), path: '/docs/iyzico-integration' },
        { id: 'billing-management', title: t('docsLayout.navigation.billingManagement'), path: '/docs/billing-management' }
      ]
    },
    {
      title: t('docsLayout.navigation.toolsSdks'),
      items: [
        { id: 'sdk-generator', title: t('docsLayout.navigation.sdkGenerator'), path: '/docs/sdk-generator' },
        { id: 'postman', title: t('docsLayout.navigation.postman'), path: '/docs/postman' },
        { id: 'openapi', title: t('docsLayout.navigation.openapi'), path: '/docs/openapi' }
      ]
    },
    {
      title: t('docsLayout.navigation.support'),
      items: [
        { id: 'error-handling', title: t('docsLayout.navigation.errorHandling'), path: '/docs/error-handling' },
        { id: 'rate-limits', title: t('docsLayout.navigation.rateLimits'), path: '/docs/rate-limits' },
        { id: 'help', title: t('docsLayout.navigation.getHelp'), path: '/docs/help' }
      ]
    }
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchModalOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-30 w-72 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col h-full bg-white border-r border-gray-200 pt-20">
            {/* Search Bar */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder={t('docsLayout.searchPlaceholder')}
                  readOnly
                  onClick={() => setSearchModalOpen(true)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-black focus:border-black cursor-pointer"
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
                      {section.items.map((item) => (
                        <Link
                          key={item.id}
                          to={item.path}
                          onClick={() => setSidebarOpen(false)}
                          className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                            isActive(item.path)
                              ? 'bg-black text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {item.title}
                        </Link>
                      ))}
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
              <h1 className="text-lg font-semibold text-black">{t('docsLayout.title')}</h1>
              <div className="w-9" />
            </div>
          </div>
          
          {/* Content Area */}
          <div className="bg-white pt-20">
            <div className="container mx-auto px-4 lg:px-8 py-16">
              <div className="xl:pr-72">
                <Breadcrumb />
                {children}
              </div>
              <TableOfContents />
            </div>
          </div>
        </main>
      </div>
      
      {/* Search Modal */}
      <SearchModal 
        isOpen={searchModalOpen} 
        onClose={() => setSearchModalOpen(false)} 
      />
    </div>
  )
}

export default DocsLayout