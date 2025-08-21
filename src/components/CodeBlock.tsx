import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language: string
  id?: string
  className?: string
  showHeader?: boolean
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language, 
  id, 
  className = '',
  showHeader = true 
}) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className={`bg-gray-900 rounded-lg overflow-hidden ${className}`}>
      {showHeader && (
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
          <span className="text-gray-400 text-sm font-medium">{language}</span>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
          >
            {copied ? (
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
      )}
      <div className="p-4">
        <pre className="text-green-400 text-sm overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}

export default CodeBlock