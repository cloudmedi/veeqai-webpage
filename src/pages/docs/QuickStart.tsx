import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import DocsLayout from '../../components/DocsLayout'
import { Copy, Check, ExternalLink } from 'lucide-react'

const QuickStartPage: React.FC = () => {
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
              {t('quickStart.copied')}
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              {t('quickStart.copy')}
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
        <h1 className="text-4xl font-bold text-black mb-6">{t('quickStart.title')}</h1>
        <p className="text-xl text-gray-700">
          {t('quickStart.description')}
        </p>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('quickStart.step1.title')}</h3>
        <p className="text-gray-700 mb-4">
          {t('quickStart.step1.description')}
        </p>
        <a
          href="http://localhost:5173/register"
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          {t('quickStart.step1.button')} <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('quickStart.step2.title')}</h3>
        <p className="text-gray-700 mb-4">
          {t('quickStart.step2.description')}
        </p>
        
        <div className="space-y-4">
          <h4 className="font-bold text-black">cURL</h4>
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

          <h4 className="font-bold text-black mt-6">JavaScript</h4>
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

          <h4 className="font-bold text-black mt-6">Python</h4>
          <CodeBlock
            language="python"
            id="python-example"
            code={`import requests

url = "https://api.veeq.ai/api/music/generate"
headers = {
    "Authorization": "Bearer YOUR_JWT_TOKEN",
    "Content-Type": "application/json"
}
data = {
    "prompt": "Upbeat electronic dance music",
    "modelId": "MODEL_ID",
    "duration": 30
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(result)`}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('quickStart.step3.title')}</h3>
        <p className="text-gray-700 mb-6">
          {t('quickStart.step3.description')}
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            to="/docs/api-explorer"
            className="block p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h4 className="font-bold text-black mb-2">{t('quickStart.step3.apiExplorer.title')}</h4>
            <p className="text-gray-600 text-sm">{t('quickStart.step3.apiExplorer.description')}</p>
          </Link>
          
          <Link
            to="/docs/endpoints"
            className="block p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h4 className="font-bold text-black mb-2">{t('quickStart.step3.apiReference.title')}</h4>
            <p className="text-gray-600 text-sm">{t('quickStart.step3.apiReference.description')}</p>
          </Link>
          
          <Link
            to="/docs/sdk-generator"
            className="block p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h4 className="font-bold text-black mb-2">{t('quickStart.step3.sdkGenerator.title')}</h4>
            <p className="text-gray-600 text-sm">{t('quickStart.step3.sdkGenerator.description')}</p>
          </Link>
          
          <Link
            to="/docs/help"
            className="block p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h4 className="font-bold text-black mb-2">{t('quickStart.step3.getHelp.title')}</h4>
            <p className="text-gray-600 text-sm">{t('quickStart.step3.getHelp.description')}</p>
          </Link>
        </div>
      </div>
    </DocsLayout>
  )
}

export default QuickStartPage