import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import DocsLayout from '../../components/DocsLayout'
import { Copy, Check } from 'lucide-react'

const ErrorHandlingPage: React.FC = () => {
  const { t } = useTranslation()
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

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
              {t('errorHandling.copied')}
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              {t('errorHandling.copy')}
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
    <DocsLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-6">{t('errorHandling.title')}</h1>
        <p className="text-xl text-gray-700">
          {t('errorHandling.description')}
        </p>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('errorHandling.responseFormat.title')}</h3>
        <p className="text-gray-700 mb-4">
          {t('errorHandling.responseFormat.description')}
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
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('errorHandling.statusCodes.title')}</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">{t('errorHandling.statusCodes.200.code')}</h5>
            <p className="text-gray-600 text-sm">{t('errorHandling.statusCodes.200.description')}</p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <h5 className="font-bold text-black mb-1">{t('errorHandling.statusCodes.400.code')}</h5>
            <p className="text-gray-600 text-sm">{t('errorHandling.statusCodes.400.description')}</p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <h5 className="font-bold text-black mb-1">{t('errorHandling.statusCodes.401.code')}</h5>
            <p className="text-gray-600 text-sm">{t('errorHandling.statusCodes.401.description')}</p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <h5 className="font-bold text-black mb-1">{t('errorHandling.statusCodes.402.code')}</h5>
            <p className="text-gray-600 text-sm">{t('errorHandling.statusCodes.402.description')}</p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <h5 className="font-bold text-black mb-1">{t('errorHandling.statusCodes.429.code')}</h5>
            <p className="text-gray-600 text-sm">{t('errorHandling.statusCodes.429.description')}</p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <h5 className="font-bold text-black mb-1">{t('errorHandling.statusCodes.500.code')}</h5>
            <p className="text-gray-600 text-sm">{t('errorHandling.statusCodes.500.description')}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('errorHandling.errorCodes.title')}</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-bold text-black">{t('errorHandling.errorCodes.headers.code')}</th>
                <th className="text-left py-3 px-4 font-bold text-black">{t('errorHandling.errorCodes.headers.description')}</th>
                <th className="text-left py-3 px-4 font-bold text-black">{t('errorHandling.errorCodes.headers.solution')}</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-mono text-red-600">INVALID_CREDENTIALS</td>
                <td className="py-3 px-4 text-gray-700">{t('errorHandling.errorCodes.invalidCredentials.description')}</td>
                <td className="py-3 px-4 text-gray-700">{t('errorHandling.errorCodes.invalidCredentials.solution')}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-mono text-red-600">INSUFFICIENT_CREDITS</td>
                <td className="py-3 px-4 text-gray-700">{t('errorHandling.errorCodes.insufficientCredits.description')}</td>
                <td className="py-3 px-4 text-gray-700">{t('errorHandling.errorCodes.insufficientCredits.solution')}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-mono text-red-600">RATE_LIMIT_EXCEEDED</td>
                <td className="py-3 px-4 text-gray-700">{t('errorHandling.errorCodes.rateLimitExceeded.description')}</td>
                <td className="py-3 px-4 text-gray-700">{t('errorHandling.errorCodes.rateLimitExceeded.solution')}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-mono text-red-600">INVALID_MODEL</td>
                <td className="py-3 px-4 text-gray-700">{t('errorHandling.errorCodes.invalidModel.description')}</td>
                <td className="py-3 px-4 text-gray-700">{t('errorHandling.errorCodes.invalidModel.solution')}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-mono text-red-600">TEXT_TOO_LONG</td>
                <td className="py-3 px-4 text-gray-700">{t('errorHandling.errorCodes.textTooLong.description')}</td>
                <td className="py-3 px-4 text-gray-700">{t('errorHandling.errorCodes.textTooLong.solution')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DocsLayout>
  )
}

export default ErrorHandlingPage