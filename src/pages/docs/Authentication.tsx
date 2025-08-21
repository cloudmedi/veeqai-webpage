import React from 'react'
import { useTranslation } from 'react-i18next'
import DocsLayout from '../../components/DocsLayout'
import CodeBlock from '../../components/CodeBlock'

const AuthenticationPage: React.FC = () => {
  const { t } = useTranslation()
  
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-6">{t('authentication.title')}</h1>
        <p className="text-xl text-gray-700">
          {t('authentication.description')}
        </p>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-black mb-4">{t('authentication.baseUrl')}</h3>
            <CodeBlock 
              code="https://api.veeq.ai/api"
              language="URL"
              showHeader={false}
              className="mb-6"
            />
            
            <h3 className="text-xl font-bold text-black mb-4">{t('authentication.authTitle')}</h3>
            <p className="text-gray-700 mb-4">
              {t('authentication.authDescription')}
            </p>
            <CodeBlock 
              code="Authorization: Bearer YOUR_JWT_TOKEN"
              language="HTTP Header"
              showHeader={false}
            />
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-black mb-4">{t('authentication.rateLimits')}</h3>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-bold text-green-800 mb-1">{t('authentication.plans.free.name')}</h4>
                <p className="text-green-600 text-sm">{t('authentication.plans.free.limit')}</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-1">{t('authentication.plans.pro.name')}</h4>
                <p className="text-blue-600 text-sm">{t('authentication.plans.pro.limit')}</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-bold text-purple-800 mb-1">{t('authentication.plans.enterprise.name')}</h4>
                <p className="text-purple-600 text-sm">{t('authentication.plans.enterprise.limit')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Registration */}
      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('authentication.registration.title')}</h3>
        <p className="text-gray-700 mb-4">
          {t('authentication.registration.description')}
        </p>
        
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <code className="text-black font-mono">POST /api/auth/register</code>
        </div>
        
        <CodeBlock 
          code={`{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}`}
          language="JSON"
          className="mb-4"
        />
        
        <h4 className="font-bold text-black mt-6 mb-3">{t('authentication.response')}</h4>
        <CodeBlock 
          code={`{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "credits": 5000,
    "voiceSlots": {
      "used": 0,
      "total": 10
    }
  }
}`}
          language="JSON"
        />
      </div>

      {/* User Login */}
      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('authentication.login.title')}</h3>
        <p className="text-gray-700 mb-4">
          {t('authentication.login.description')}
        </p>
        
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <code className="text-black font-mono">POST /api/auth/login</code>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-4">
          <pre className="text-green-400 text-sm overflow-x-auto">
            <code>{`{
  "email": "john@example.com",
  "password": "securepassword"
}`}</code>
          </pre>
        </div>
      </div>
    </DocsLayout>
  )
}

export default AuthenticationPage