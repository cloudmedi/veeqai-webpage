import React, { useState } from 'react'
import { Play, Copy, Check, Eye, EyeOff } from 'lucide-react'

interface ApiEndpoint {
  id: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  path: string
  title: string
  description: string
  headers?: Record<string, string>
  body?: string
  parameters?: Array<{
    name: string
    type: string
    required: boolean
    description: string
    example: string
  }>
}

interface ApiExplorerProps {
  endpoint: ApiEndpoint
}

const ApiExplorer: React.FC<ApiExplorerProps> = ({ endpoint }) => {
  const [apiKey, setApiKey] = useState('')
  const [requestBody, setRequestBody] = useState(endpoint.body || '{}')
  const [response, setResponse] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [showApiKey, setShowApiKey] = useState(false)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-800'
      case 'POST': return 'bg-blue-100 text-blue-800'
      case 'PUT': return 'bg-yellow-100 text-yellow-800'
      case 'DELETE': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const generateCurl = () => {
    const baseUrl = 'https://api.veeq.ai'
    let curl = `curl -X ${endpoint.method} ${baseUrl}${endpoint.path}`
    
    if (apiKey) {
      curl += ` \\\n  -H "Authorization: Bearer ${apiKey}"`
    }
    
    curl += ` \\\n  -H "Content-Type: application/json"`
    
    if (endpoint.method !== 'GET' && requestBody !== '{}') {
      curl += ` \\\n  -d '${requestBody}'`
    }
    
    return curl
  }

  const generateJavaScript = () => {
    const baseUrl = 'https://api.veeq.ai'
    let js = `const response = await fetch('${baseUrl}${endpoint.path}', {\n`
    js += `  method: '${endpoint.method}',\n`
    js += `  headers: {\n`
    
    if (apiKey) {
      js += `    'Authorization': 'Bearer ${apiKey}',\n`
    }
    
    js += `    'Content-Type': 'application/json'\n`
    js += `  }`
    
    if (endpoint.method !== 'GET' && requestBody !== '{}') {
      js += `,\n  body: JSON.stringify(${requestBody})`
    }
    
    js += `\n});\n\nconst data = await response.json();\nconsole.log(data);`
    
    return js
  }

  const generatePython = () => {
    const baseUrl = 'https://api.veeq.ai'
    let python = `import requests\n\n`
    python += `url = "${baseUrl}${endpoint.path}"\n`
    python += `headers = {\n`
    
    if (apiKey) {
      python += `    "Authorization": "Bearer ${apiKey}",\n`
    }
    
    python += `    "Content-Type": "application/json"\n`
    python += `}\n`
    
    if (endpoint.method !== 'GET' && requestBody !== '{}') {
      python += `data = ${requestBody}\n\n`
      python += `response = requests.${endpoint.method.toLowerCase()}(url, headers=headers, json=data)\n`
    } else {
      python += `\nresponse = requests.${endpoint.method.toLowerCase()}(url, headers=headers)\n`
    }
    
    python += `result = response.json()\nprint(result)`
    
    return python
  }

  const executeRequest = async () => {
    if (!apiKey) {
      setResponse({
        error: 'API key is required. Please enter your JWT token.',
        timestamp: new Date().toISOString()
      })
      return
    }

    setLoading(true)
    
    // Simulate API call (since we're not actually calling the real API)
    setTimeout(() => {
      const mockResponses: Record<string, any> = {
        '/api/auth/me': {
          user: {
            id: 'user_123',
            name: 'John Doe',
            email: 'john@example.com',
            credits: 4850,
            voiceSlots: { used: 2, total: 10 }
          }
        },
        '/api/music/models': {
          success: true,
          data: [
            {
              _id: 'model_1',
              name: 'musicgen-large',
              displayName: 'Meta MusicGen Large',
              type: 'music',
              provider: { name: 'replicate' },
              pricing: { baseCost: 10 }
            }
          ]
        },
        '/api/music/generate': {
          success: true,
          data: {
            _id: 'music_456',
            title: 'Generated Music',
            status: 'processing',
            credits: { consumed: 10, remaining: 4840 }
          }
        }
      }

      const mockResponse = mockResponses[endpoint.path] || {
        success: true,
        message: 'Mock response - this is a demo',
        timestamp: new Date().toISOString()
      }

      setResponse(mockResponse)
      setLoading(false)
    }, 1500)
  }

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMethodColor(endpoint.method)}`}>
          {endpoint.method}
        </span>
        <code className="text-lg font-mono text-gray-800">{endpoint.path}</code>
      </div>
      
      <h3 className="text-xl font-bold text-black mb-2">{endpoint.title}</h3>
      <p className="text-gray-600 mb-6">{endpoint.description}</p>

      {/* Parameters */}
      {endpoint.parameters && endpoint.parameters.length > 0 && (
        <div className="mb-6">
          <h4 className="font-bold text-black mb-3">Parameters</h4>
          <div className="space-y-3">
            {endpoint.parameters.map((param) => (
              <div key={param.name} className="border-l-4 border-gray-300 pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <code className="text-sm font-mono text-blue-600">{param.name}</code>
                  <span className="text-xs text-gray-500">{param.type}</span>
                  {param.required && (
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">required</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-1">{param.description}</p>
                <code className="text-xs text-gray-500">Example: {param.example}</code>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* API Key Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-black mb-2">
          JWT Token (Authorization)
        </label>
        <div className="relative">
          <input
            type={showApiKey ? 'text' : 'password'}
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg pr-10 font-mono text-sm"
          />
          <button
            onClick={() => setShowApiKey(!showApiKey)}
            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
          >
            {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Request Body */}
      {endpoint.method !== 'GET' && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-black mb-2">
            Request Body (JSON)
          </label>
          <textarea
            value={requestBody}
            onChange={(e) => setRequestBody(e.target.value)}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
          />
        </div>
      )}

      {/* Try It Button */}
      <div className="mb-6">
        <button
          onClick={executeRequest}
          disabled={loading}
          className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
          <Play className="w-4 h-4" />
          {loading ? 'Executing...' : 'Try It Out'}
        </button>
      </div>

      {/* Response */}
      {response && (
        <div className="mb-6">
          <h4 className="font-bold text-black mb-3">Response</h4>
          <div className="bg-gray-900 rounded-lg p-4">
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{JSON.stringify(response, null, 2)}</code>
            </pre>
          </div>
        </div>
      )}

      {/* Code Examples */}
      <div className="space-y-4">
        <h4 className="font-bold text-black">Code Examples</h4>
        
        {/* cURL */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">cURL</span>
            <button
              onClick={() => copyToClipboard(generateCurl(), 'curl')}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
            >
              {copiedCode === 'curl' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copiedCode === 'curl' ? 'Copied' : 'Copy'}
            </button>
          </div>
          <div className="bg-gray-900 rounded-lg p-3">
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{generateCurl()}</code>
            </pre>
          </div>
        </div>

        {/* JavaScript */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">JavaScript</span>
            <button
              onClick={() => copyToClipboard(generateJavaScript(), 'js')}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
            >
              {copiedCode === 'js' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copiedCode === 'js' ? 'Copied' : 'Copy'}
            </button>
          </div>
          <div className="bg-gray-900 rounded-lg p-3">
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{generateJavaScript()}</code>
            </pre>
          </div>
        </div>

        {/* Python */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Python</span>
            <button
              onClick={() => copyToClipboard(generatePython(), 'python')}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
            >
              {copiedCode === 'python' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copiedCode === 'python' ? 'Copied' : 'Copy'}
            </button>
          </div>
          <div className="bg-gray-900 rounded-lg p-3">
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{generatePython()}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApiExplorer