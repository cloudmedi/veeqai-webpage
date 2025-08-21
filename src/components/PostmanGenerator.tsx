import React, { useState } from 'react'
import { Download, Copy, Check, FileText, Settings } from 'lucide-react'
import { apiEndpoints } from '../data/apiEndpoints'

interface PostmanGeneratorProps {
  baseUrl?: string
}

const PostmanGenerator: React.FC<PostmanGeneratorProps> = ({ baseUrl = 'https://api.veeq.ai' }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [includeAuth, setIncludeAuth] = useState(true)
  const [includeExamples, setIncludeExamples] = useState(true)
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set(['all']))

  const categories = ['all', ...new Set(apiEndpoints.map(e => e.category))]

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const toggleCategory = (category: string) => {
    const newSelected = new Set(selectedCategories)
    if (category === 'all') {
      newSelected.clear()
      newSelected.add('all')
    } else {
      newSelected.delete('all')
      if (newSelected.has(category)) {
        newSelected.delete(category)
      } else {
        newSelected.add(category)
      }
      if (newSelected.size === 0) {
        newSelected.add('all')
      }
    }
    setSelectedCategories(newSelected)
  }

  const getFilteredEndpoints = () => {
    if (selectedCategories.has('all')) {
      return apiEndpoints
    }
    return apiEndpoints.filter(endpoint => selectedCategories.has(endpoint.category))
  }

  const generatePostmanCollection = () => {
    const filteredEndpoints = getFilteredEndpoints()
    
    const collection = {
      info: {
        _postman_id: `veeq-ai-${Date.now()}`,
        name: "Veeq AI API Collection",
        description: "Complete API collection for Veeq AI - Music Generation, Text-to-Speech, and more",
        schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
        _exporter_id: "veeq-ai-docs"
      },
      item: [] as any[],
      auth: includeAuth ? {
        type: "bearer",
        bearer: [
          {
            key: "token",
            value: "{{jwt_token}}",
            type: "string"
          }
        ]
      } : undefined,
      variable: [
        {
          key: "base_url",
          value: `${baseUrl}/api`,
          type: "string"
        },
        {
          key: "jwt_token",
          value: "your-jwt-token-here",
          type: "string"
        }
      ]
    }

    // Group endpoints by category
    const groupedEndpoints = filteredEndpoints.reduce((groups, endpoint) => {
      const category = endpoint.category
      if (!groups[category]) {
        groups[category] = []
      }
      groups[category].push(endpoint)
      return groups
    }, {} as Record<string, typeof apiEndpoints>)

    // Generate items for each category
    Object.entries(groupedEndpoints).forEach(([category, endpoints]) => {
      const categoryItem = {
        name: category.charAt(0).toUpperCase() + category.slice(1),
        item: endpoints.map(endpoint => {
          const item: any = {
            name: endpoint.title,
            event: [
              {
                listen: "test",
                script: {
                  exec: [
                    "pm.test(\"Status code is successful\", function () {",
                    "    pm.response.to.have.status.oneOf([200, 201, 202]);",
                    "});",
                    "",
                    "pm.test(\"Response time is less than 5000ms\", function () {",
                    "    pm.expect(pm.response.responseTime).to.be.below(5000);",
                    "});",
                    "",
                    "if (pm.response.code === 200 || pm.response.code === 201) {",
                    "    pm.test(\"Response has required structure\", function () {",
                    "        const jsonData = pm.response.json();",
                    "        pm.expect(jsonData).to.be.an('object');",
                    "    });",
                    "}"
                  ],
                  type: "text/javascript"
                }
              }
            ],
            request: {
              method: endpoint.method,
              header: [
                {
                  key: "Content-Type",
                  value: "application/json",
                  type: "text"
                }
              ],
              url: {
                raw: `{{base_url}}${endpoint.path}`,
                host: ["{{base_url}}"],
                path: endpoint.path.split('/').filter(p => p)
              },
              description: endpoint.description
            }
          }

          // Add authentication if endpoint requires it
          if (endpoint.authentication && includeAuth) {
            item.request.auth = {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{jwt_token}}",
                  type: "string"
                }
              ]
            }
          }

          // Add request body for non-GET requests
          if (endpoint.requestBody && endpoint.method !== 'GET') {
            item.request.body = {
              mode: "raw",
              raw: endpoint.requestBody.example,
              options: {
                raw: {
                  language: "json"
                }
              }
            }
          }

          // Add query parameters if any
          if (endpoint.parameters && endpoint.parameters.some(p => p.type === 'query')) {
            const queryParams = endpoint.parameters
              .filter(p => p.type === 'query')
              .map(param => ({
                key: param.name,
                value: param.example,
                description: param.description,
                disabled: !param.required
              }))
            
            if (queryParams.length > 0) {
              item.request.url.query = queryParams
            }
          }

          // Add response examples if enabled
          if (includeExamples && endpoint.responses) {
            item.response = endpoint.responses.map((response, index) => ({
              name: `${response.status} - ${response.description}`,
              originalRequest: {
                method: endpoint.method,
                header: item.request.header,
                body: item.request.body,
                url: item.request.url
              },
              status: response.description,
              code: response.status,
              _postman_previewlanguage: "json",
              header: [
                {
                  key: "Content-Type",
                  value: "application/json"
                }
              ],
              cookie: [],
              body: response.body
            }))
          }

          return item
        })
      }

      collection.item.push(categoryItem)
    })

    return JSON.stringify(collection, null, 2)
  }

  const downloadCollection = () => {
    const collection = generatePostmanCollection()
    const blob = new Blob([collection], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'veeq-ai-postman-collection.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const generateEnvironment = () => {
    const environment = {
      id: `veeq-ai-env-${Date.now()}`,
      name: "Veeq AI Environment",
      values: [
        {
          key: "base_url",
          value: `${baseUrl}/api`,
          type: "default",
          enabled: true
        },
        {
          key: "jwt_token",
          value: "",
          type: "secret",
          enabled: true
        },
        {
          key: "user_id",
          value: "",
          type: "default",
          enabled: true
        }
      ],
      _postman_variable_scope: "environment",
      _postman_exported_at: new Date().toISOString(),
      _postman_exported_using: "Veeq AI Documentation"
    }

    return JSON.stringify(environment, null, 2)
  }

  const downloadEnvironment = () => {
    const environment = generateEnvironment()
    const blob = new Blob([environment], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'veeq-ai-environment.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
          <FileText className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-black">Postman Collection Generator</h3>
          <p className="text-gray-600">Generate and download Postman collection with all API endpoints</p>
        </div>
      </div>

      {/* Configuration Options */}
      <div className="mb-6 space-y-4">
        <h4 className="font-bold text-black">Configuration Options</h4>
        
        {/* Include Options */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="include-auth"
              checked={includeAuth}
              onChange={(e) => setIncludeAuth(e.target.checked)}
              className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black"
            />
            <label htmlFor="include-auth" className="text-sm text-gray-700">
              Include authentication setup
            </label>
          </div>
          
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="include-examples"
              checked={includeExamples}
              onChange={(e) => setIncludeExamples(e.target.checked)}
              className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black"
            />
            <label htmlFor="include-examples" className="text-sm text-gray-700">
              Include response examples
            </label>
          </div>
        </div>

        {/* Category Selection */}
        <div>
          <h5 className="font-medium text-black mb-2">Include Endpoints</h5>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategories.has(category)
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-bold text-black">Collection Preview</h4>
          <button
            onClick={() => copyToClipboard(generatePostmanCollection(), 'collection')}
            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            {copiedCode === 'collection' ? (
              <>
                <Check className="w-4 h-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy JSON
              </>
            )}
          </button>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-4 max-h-64 overflow-y-auto">
          <pre className="text-green-400 text-xs">
            <code>{generatePostmanCollection().substring(0, 1000)}...</code>
          </pre>
        </div>
      </div>

      {/* Download Buttons */}
      <div className="grid md:grid-cols-2 gap-4">
        <button
          onClick={downloadCollection}
          className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          <Download className="w-5 h-5" />
          Download Collection
        </button>
        
        <button
          onClick={downloadEnvironment}
          className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          <Settings className="w-5 h-5" />
          Download Environment
        </button>
      </div>

      {/* Usage Instructions */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-bold text-blue-900 mb-2">How to Use</h4>
        <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
          <li>Download both the collection and environment files</li>
          <li>Open Postman and click "Import" in the top left</li>
          <li>Import both files (collection and environment)</li>
          <li>Select "Veeq AI Environment" from the environment dropdown</li>
          <li>Set your <code className="bg-blue-100 px-1 rounded">jwt_token</code> variable in the environment</li>
          <li>Start making API requests!</li>
        </ol>
      </div>

      {/* Collection Stats */}
      <div className="mt-4 text-sm text-gray-600">
        <p>
          Collection includes <strong>{getFilteredEndpoints().length}</strong> endpoints
          {includeAuth && ' with authentication setup'}
          {includeExamples && ' and response examples'}
        </p>
      </div>
    </div>
  )
}

export default PostmanGenerator