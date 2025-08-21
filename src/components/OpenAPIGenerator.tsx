import React, { useState } from 'react'
import { Download, Copy, Check, FileCode, Eye } from 'lucide-react'
import { apiEndpoints } from '../data/apiEndpoints'

interface OpenAPIGeneratorProps {
  baseUrl?: string
}

const OpenAPIGenerator: React.FC<OpenAPIGeneratorProps> = ({ baseUrl = 'https://api.veeq.ai' }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [includeExamples, setIncludeExamples] = useState(true)
  const [includeSchemas, setIncludeSchemas] = useState(true)
  const [openApiVersion, setOpenApiVersion] = useState<'3.0.3' | '3.1.0'>('3.0.3')
  const [previewMode, setPreviewMode] = useState<'json' | 'yaml'>('json')

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const generateOpenAPISpec = () => {
    const spec = {
      openapi: openApiVersion,
      info: {
        title: "Veeq AI API",
        description: "Powerful AI-driven audio generation API for music creation, text-to-speech, voice cloning, and more. Generate high-quality audio content programmatically.",
        version: "1.0.0",
        contact: {
          name: "Veeq AI Support",
          email: "support@veeq.ai",
          url: "https://veeq.ai/support"
        },
        license: {
          name: "MIT",
          url: "https://opensource.org/licenses/MIT"
        },
        termsOfService: "https://veeq.ai/terms"
      },
      servers: [
        {
          url: `${baseUrl}/api`,
          description: "Production server"
        },
        {
          url: "http://localhost:3000/api",
          description: "Development server"
        }
      ],
      paths: {} as any,
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
            description: "JWT token obtained from authentication endpoints"
          }
        },
        schemas: includeSchemas ? generateSchemas() : undefined
      },
      security: [
        {
          BearerAuth: []
        }
      ],
      tags: [
        {
          name: "Authentication",
          description: "User authentication and account management"
        },
        {
          name: "Music",
          description: "AI music generation endpoints"
        },
        {
          name: "Speech",
          description: "Text-to-speech and voice synthesis"
        },
        {
          name: "Credits",
          description: "Credit management and billing"
        }
      ]
    }

    // Generate paths from endpoints
    apiEndpoints.forEach(endpoint => {
      const pathKey = endpoint.path
      if (!spec.paths[pathKey]) {
        spec.paths[pathKey] = {}
      }

      const operation: any = {
        tags: [endpoint.category.charAt(0).toUpperCase() + endpoint.category.slice(1)],
        summary: endpoint.title,
        description: endpoint.description,
        operationId: endpoint.id,
        responses: {}
      }

      // Add security if required
      if (endpoint.authentication) {
        operation.security = [{ BearerAuth: [] }]
      } else {
        operation.security = []
      }

      // Add parameters
      if (endpoint.parameters) {
        operation.parameters = endpoint.parameters.map(param => ({
          name: param.name,
          in: param.type === 'query' ? 'query' : param.type === 'header' ? 'header' : 'path',
          required: param.required,
          description: param.description,
          schema: {
            type: getOpenAPIType(param.type),
            example: param.example,
            enum: param.enum
          }
        }))
      }

      // Add request body for non-GET methods
      if (endpoint.requestBody && endpoint.method !== 'GET') {
        operation.requestBody = {
          required: endpoint.requestBody.required,
          content: {
            [endpoint.requestBody.contentType]: {
              schema: {
                type: "object",
                example: includeExamples ? JSON.parse(endpoint.requestBody.example) : undefined
              }
            }
          }
        }
      }

      // Add responses
      endpoint.responses.forEach(response => {
        operation.responses[response.status] = {
          description: response.description,
          content: {
            "application/json": {
              schema: {
                type: "object"
              },
              example: includeExamples ? JSON.parse(response.body) : undefined
            }
          }
        }
      })

      // Add rate limiting info if present
      if (endpoint.rateLimit) {
        operation['x-rate-limit'] = endpoint.rateLimit
      }

      // Add credit cost if present
      if (endpoint.credits) {
        operation['x-credit-cost'] = endpoint.credits
      }

      spec.paths[pathKey][endpoint.method.toLowerCase()] = operation
    })

    return spec
  }

  const generateSchemas = () => {
    return {
      User: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "Unique user identifier"
          },
          name: {
            type: "string",
            description: "User's full name"
          },
          email: {
            type: "string",
            format: "email",
            description: "User's email address"
          },
          credits: {
            type: "integer",
            description: "Available credits"
          },
          voiceSlots: {
            type: "object",
            properties: {
              used: { type: "integer" },
              total: { type: "integer" }
            }
          }
        }
      },
      MusicGenerateRequest: {
        type: "object",
        required: ["prompt", "modelId"],
        properties: {
          prompt: {
            type: "string",
            description: "Text description of the music to generate",
            maxLength: 1000
          },
          modelId: {
            type: "string",
            description: "ID of the AI model to use"
          },
          duration: {
            type: "integer",
            minimum: 10,
            maximum: 120,
            default: 30,
            description: "Duration in seconds"
          },
          style: {
            type: "string",
            description: "Musical style or genre"
          },
          lyrics: {
            type: "string",
            description: "Lyrics for the music (if supported)"
          }
        }
      },
      SpeechGenerateRequest: {
        type: "object",
        required: ["text", "voiceId"],
        properties: {
          text: {
            type: "string",
            description: "Text to convert to speech",
            maxLength: 5000
          },
          voiceId: {
            type: "string",
            description: "ID of the voice to use"
          },
          voiceName: {
            type: "string",
            description: "Name of the voice (for reference)"
          },
          model: {
            type: "string",
            enum: ["speech-2.5-hd", "speech-1.0", "custom"],
            default: "speech-2.5-hd",
            description: "TTS model to use"
          },
          language: {
            type: "string",
            enum: ["en", "es", "fr", "de", "it", "pt", "zh"],
            default: "en",
            description: "Language code"
          }
        }
      },
      APIError: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
            example: false
          },
          error: {
            type: "string",
            description: "Error message"
          },
          code: {
            type: "string",
            description: "Error code"
          },
          details: {
            type: "object",
            description: "Additional error details"
          }
        }
      }
    }
  }

  const getOpenAPIType = (type: string) => {
    switch (type) {
      case 'number': return 'number'
      case 'boolean': return 'boolean'
      case 'array': return 'array'
      default: return 'string'
    }
  }

  const convertToYAML = (obj: any, indent = 0): string => {
    const spaces = '  '.repeat(indent)
    let yaml = ''

    if (Array.isArray(obj)) {
      obj.forEach(item => {
        yaml += `${spaces}- ${convertToYAML(item, indent + 1).trim()}\n`
      })
    } else if (typeof obj === 'object' && obj !== null) {
      Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
          yaml += `${spaces}${key}:\n${convertToYAML(value, indent + 1)}`
        } else {
          const stringValue = typeof value === 'string' ? `"${value}"` : value
          yaml += `${spaces}${key}: ${stringValue}\n`
        }
      })
    } else {
      yaml += `${obj}`
    }

    return yaml
  }

  const getSpecContent = () => {
    const spec = generateOpenAPISpec()
    if (previewMode === 'yaml') {
      return convertToYAML(spec)
    }
    return JSON.stringify(spec, null, 2)
  }

  const downloadSpec = () => {
    const spec = generateOpenAPISpec()
    const content = previewMode === 'yaml' ? convertToYAML(spec) : JSON.stringify(spec, null, 2)
    const extension = previewMode === 'yaml' ? 'yaml' : 'json'
    const blob = new Blob([content], { type: previewMode === 'yaml' ? 'application/x-yaml' : 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `veeq-ai-openapi.${extension}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
          <FileCode className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-black">OpenAPI Specification Generator</h3>
          <p className="text-gray-600">Generate OpenAPI (Swagger) specification for automatic SDK generation and documentation</p>
        </div>
      </div>

      {/* Configuration Options */}
      <div className="mb-6 space-y-4">
        <h4 className="font-bold text-black">Configuration Options</h4>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">OpenAPI Version</label>
            <select
              value={openApiVersion}
              onChange={(e) => setOpenApiVersion(e.target.value as '3.0.3' | '3.1.0')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
            >
              <option value="3.0.3">OpenAPI 3.0.3</option>
              <option value="3.1.0">OpenAPI 3.1.0</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Output Format</label>
            <select
              value={previewMode}
              onChange={(e) => setPreviewMode(e.target.value as 'json' | 'yaml')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
            >
              <option value="json">JSON</option>
              <option value="yaml">YAML</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="include-examples-openapi"
                checked={includeExamples}
                onChange={(e) => setIncludeExamples(e.target.checked)}
                className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black"
              />
              <label htmlFor="include-examples-openapi" className="text-sm text-gray-700">
                Include examples
              </label>
            </div>
            
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="include-schemas-openapi"
                checked={includeSchemas}
                onChange={(e) => setIncludeSchemas(e.target.checked)}
                className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black"
              />
              <label htmlFor="include-schemas-openapi" className="text-sm text-gray-700">
                Include schemas
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-bold text-black">Specification Preview</h4>
          <div className="flex gap-2">
            <button
              onClick={() => copyToClipboard(getSpecContent(), 'openapi')}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              {copiedCode === 'openapi' ? (
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
            <a
              href={`https://editor.swagger.io/?url=data:application/json,${encodeURIComponent(JSON.stringify(generateOpenAPISpec()))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <Eye className="w-4 h-4" />
              View in Swagger Editor
            </a>
          </div>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-4 max-h-80 overflow-y-auto">
          <pre className="text-green-400 text-xs">
            <code>{getSpecContent().substring(0, 2000)}...</code>
          </pre>
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center">
        <button
          onClick={downloadSpec}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          <Download className="w-5 h-5" />
          Download OpenAPI Spec ({previewMode.toUpperCase()})
        </button>
      </div>

      {/* Usage Instructions */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
        <h4 className="font-bold text-green-900 mb-2">Usage Instructions</h4>
        <div className="text-sm text-green-800 space-y-2">
          <p><strong>For SDK Generation:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Use <a href="https://github.com/OpenAPITools/openapi-generator" className="underline" target="_blank" rel="noopener noreferrer">OpenAPI Generator</a> to create SDKs</li>
            <li>Generate client libraries for 50+ programming languages</li>
            <li>Command: <code className="bg-green-100 px-1 rounded">openapi-generator-cli generate -i veeq-ai-openapi.json -g python</code></li>
          </ul>
          
          <p><strong>For Documentation:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Import into <a href="https://editor.swagger.io/" className="underline" target="_blank" rel="noopener noreferrer">Swagger Editor</a> for interactive docs</li>
            <li>Use with <a href="https://redocly.github.io/redoc/" className="underline" target="_blank" rel="noopener noreferrer">ReDoc</a> for beautiful documentation sites</li>
            <li>Import into API testing tools like Insomnia or Postman</li>
          </ul>
        </div>
      </div>

      {/* Specification Stats */}
      <div className="mt-4 text-sm text-gray-600">
        <p>
          Specification includes <strong>{apiEndpoints.length}</strong> endpoints, 
          <strong> {openApiVersion}</strong> format
          {includeSchemas && ', with component schemas'}
          {includeExamples && ', including examples'}
        </p>
      </div>
    </div>
  )
}

export default OpenAPIGenerator