import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  path: string
  isCurrentPage?: boolean
}

const Breadcrumb: React.FC = () => {
  const location = useLocation()
  
  const getBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', path: '/' }
    ]

    if (pathname === '/docs') {
      breadcrumbs.push({ label: 'Documentation', path: '/docs', isCurrentPage: true })
      return breadcrumbs
    }

    if (pathname.startsWith('/docs/')) {
      breadcrumbs.push({ label: 'Documentation', path: '/docs' })
      
      const pathSegments = pathname.split('/').filter(Boolean)
      const docsSegment = pathSegments[1] // segment after 'docs'
      
      const pageLabels: Record<string, string> = {
        'authentication': 'Authentication',
        'quick-start': 'Quick Start',
        'api-explorer': 'API Explorer',
        'endpoints': 'All Endpoints',
        'payment-methods': 'Payment Methods',
        'stripe-integration': 'Stripe Integration',
        'iyzico-integration': 'iyzico Integration',
        'billing-management': 'Billing Management',
        'sdk-generator': 'SDK Generator',
        'postman': 'Postman Collection',
        'openapi': 'OpenAPI Spec',
        'error-handling': 'Error Handling',
        'rate-limits': 'Rate Limits',
        'help': 'Get Help'
      }
      
      const pageLabel = pageLabels[docsSegment] || docsSegment
      breadcrumbs.push({ 
        label: pageLabel, 
        path: pathname, 
        isCurrentPage: true 
      })
    }

    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(location.pathname)

  if (breadcrumbs.length <= 1) return null

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.path}>
          {index > 0 && <ChevronRight className="w-4 h-4" />}
          
          {breadcrumb.isCurrentPage ? (
            <span className="text-gray-900 font-medium">
              {breadcrumb.label}
            </span>
          ) : (
            <Link 
              to={breadcrumb.path}
              className="hover:text-gray-700 transition-colors flex items-center gap-1"
            >
              {index === 0 && <Home className="w-4 h-4" />}
              {breadcrumb.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

export default Breadcrumb