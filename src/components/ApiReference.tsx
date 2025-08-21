import React, { useState } from 'react'
import { ChevronDown, ChevronRight, Copy, Check, Code, Eye, EyeOff } from 'lucide-react'
import ApiExplorer from './ApiExplorer'

interface Parameter {
  name: string
  type: string
  required: boolean
  description: string
  example: string
  enum?: string[]
  default?: string
}

interface ResponseExample {
  status: number
  description: string
  body: string
}

interface ApiEndpoint {
  id: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  path: string
  title: string
  description: string
  category: string
  tags?: string[]
  parameters?: Parameter[]
  requestBody?: {
    required: boolean
    contentType: string
    schema: string
    example: string
  }
  responses: ResponseExample[]
  rateLimit?: string
  authentication: boolean
  credits?: number
}

interface ApiReferenceProps {
  endpoints: ApiEndpoint[]
}

const ApiReference: React.FC<ApiReferenceProps> = ({ endpoints }) => {
  const [expandedEndpoints, setExpandedEndpoints] = useState<Set<string>>(new Set())
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['all', ...new Set(endpoints.map(e => e.category))]

  const filteredEndpoints = endpoints.filter(endpoint => {
    const matchesCategory = selectedCategory === 'all' || endpoint.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      endpoint.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleEndpoint = (id: string) => {
    const newExpanded = new Set(expandedEndpoints)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedEndpoints(newExpanded)
  }

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-800 border-green-200'
      case 'POST': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'PUT': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'PATCH': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'DELETE': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const renderParameter = (param: Parameter) => (
    <div key={param.name} className="border-l-4 border-gray-300 pl-4 py-2">
      <div className="flex items-center gap-2 mb-1">
        <code className="text-sm font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">
          {param.name}
        </code>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{param.type}</span>
        {param.required && (
          <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">required</span>
        )}
      </div>
      <p className="text-sm text-gray-600 mb-1">{param.description}</p>
      {param.enum && (
        <div className="text-xs text-gray-500 mb-1">
          Allowed values: {param.enum.map(val => `"${val}"`).join(', ')}
        </div>
      )}
      {param.default && (
        <div className="text-xs text-gray-500 mb-1">Default: {param.default}</div>
      )}
      <code className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
        Example: {param.example}
      </code>
    </div>
  )

  const renderResponse = (response: ResponseExample, index: number) => (
    <div key={index} className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <span className={`px-2 py-1 rounded text-sm font-medium ${
          response.status < 300 ? 'bg-green-100 text-green-800' :
          response.status < 400 ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {response.status}
        </span>
        <span className="text-sm text-gray-600">{response.description}</span>
      </div>
      <div className="bg-gray-900 rounded-lg p-3 relative">
        <button
          onClick={() => copyToClipboard(response.body, `response-${index}`)}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          {copiedCode === `response-${index}` ? 
            <Check className="w-4 h-4" /> : 
            <Copy className="w-4 h-4" />
          }
        </button>
        <pre className="text-green-400 text-sm overflow-x-auto">
          <code>{response.body}</code>
        </pre>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search endpoints..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredEndpoints.length} of {endpoints.length} endpoints
        </div>
      </div>

      {/* Endpoints List */}
      <div className="space-y-4">
        {filteredEndpoints.map((endpoint) => (
          <div key={endpoint.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Endpoint Header */}
            <div 
              className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => toggleEndpoint(endpoint.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-lg text-sm font-medium border ${getMethodColor(endpoint.method)}`}>
                    {endpoint.method}
                  </span>
                  <code className="text-lg font-mono text-gray-800">{endpoint.path}</code>
                  {endpoint.authentication && (
                    <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                      Auth Required
                    </span>
                  )}
                  {endpoint.credits && (
                    <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">
                      {endpoint.credits} credits
                    </span>
                  )}
                </div>
                {expandedEndpoints.has(endpoint.id) ? (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
              </div>
              
              <div className="mt-2">
                <h3 className="text-xl font-bold text-black">{endpoint.title}</h3>
                <p className="text-gray-600 mt-1">{endpoint.description}</p>
                {endpoint.tags && (
                  <div className="flex gap-2 mt-2">
                    {endpoint.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Expanded Content */}
            {expandedEndpoints.has(endpoint.id) && (
              <div className="border-t border-gray-200 p-6 space-y-6">
                {/* Parameters */}
                {endpoint.parameters && endpoint.parameters.length > 0 && (
                  <div>
                    <h4 className="text-lg font-bold text-black mb-4">Parameters</h4>
                    <div className="space-y-3">
                      {endpoint.parameters.map(renderParameter)}
                    </div>
                  </div>
                )}

                {/* Request Body */}
                {endpoint.requestBody && (
                  <div>
                    <h4 className="text-lg font-bold text-black mb-4">Request Body</h4>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-gray-600">Content-Type:</span>
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">{endpoint.requestBody.contentType}</code>
                        {endpoint.requestBody.required && (
                          <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">required</span>
                        )}
                      </div>
                      <div className="bg-gray-900 rounded-lg p-3 relative">
                        <button
                          onClick={() => copyToClipboard(endpoint.requestBody!.example, `request-${endpoint.id}`)}
                          className="absolute top-2 right-2 text-gray-400 hover:text-white"
                        >
                          {copiedCode === `request-${endpoint.id}` ? 
                            <Check className="w-4 h-4" /> : 
                            <Copy className="w-4 h-4" />
                          }
                        </button>
                        <pre className="text-green-400 text-sm overflow-x-auto">
                          <code>{endpoint.requestBody.example}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                )}

                {/* Responses */}
                <div>
                  <h4 className="text-lg font-bold text-black mb-4">Responses</h4>
                  {endpoint.responses.map(renderResponse)}
                </div>

                {/* Additional Info */}
                {endpoint.rateLimit && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-600 font-medium">Rate Limit:</span>
                      <span className="text-yellow-700">{endpoint.rateLimit}</span>
                    </div>
                  </div>
                )}

                {/* Interactive Explorer */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-bold text-black mb-4">Try It Out</h4>
                  <ApiExplorer 
                    endpoint={{
                      id: endpoint.id,
                      method: endpoint.method,
                      path: endpoint.path,
                      title: endpoint.title,
                      description: endpoint.description,
                      parameters: endpoint.parameters,
                      body: endpoint.requestBody?.example
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredEndpoints.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <Code className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No endpoints found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  )
}

export default ApiReference