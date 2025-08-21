import React from 'react'
import { useTranslation } from 'react-i18next'
import DocsLayout from '../../components/DocsLayout'

const RateLimitsPage: React.FC = () => {
  const { t } = useTranslation()
  
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-6">{t('rateLimits.title')}</h1>
        <p className="text-xl text-gray-700">
          {t('rateLimits.description')}
        </p>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('rateLimits.understanding.title')}</h3>
        <p className="text-gray-700 mb-6">
          {t('rateLimits.understanding.description')}
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-bold text-green-800 mb-2">{t('rateLimits.plans.free.name')}</h4>
            <p className="text-3xl font-bold text-green-600 mb-2">{t('rateLimits.plans.free.number')}</p>
            <p className="text-sm text-green-600">{t('rateLimits.plans.free.unit')}</p>
          </div>
          <div className="text-center p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">{t('rateLimits.plans.pro.name')}</h4>
            <p className="text-3xl font-bold text-blue-600 mb-2">{t('rateLimits.plans.pro.number')}</p>
            <p className="text-sm text-blue-600">{t('rateLimits.plans.pro.unit')}</p>
          </div>
          <div className="text-center p-6 bg-purple-50 border border-purple-200 rounded-lg">
            <h4 className="font-bold text-purple-800 mb-2">{t('rateLimits.plans.enterprise.name')}</h4>
            <p className="text-3xl font-bold text-purple-600 mb-2">{t('rateLimits.plans.enterprise.number')}</p>
            <p className="text-sm text-purple-600">{t('rateLimits.plans.enterprise.unit')}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('rateLimits.headers.title')}</h3>
        <p className="text-gray-700 mb-4">
          {t('rateLimits.headers.description')}
        </p>
        
        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <pre className="text-green-400 text-sm">
            <code>{`X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995200`}</code>
          </pre>
        </div>

        <div className="space-y-3">
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-bold text-black mb-1">{t('rateLimits.headers.limit.name')}</h5>
            <p className="text-gray-600 text-sm">{t('rateLimits.headers.limit.description')}</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-bold text-black mb-1">{t('rateLimits.headers.remaining.name')}</h5>
            <p className="text-gray-600 text-sm">{t('rateLimits.headers.remaining.description')}</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-bold text-black mb-1">{t('rateLimits.headers.reset.name')}</h5>
            <p className="text-gray-600 text-sm">{t('rateLimits.headers.reset.description')}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('rateLimits.handling.title')}</h3>
        
        <h4 className="font-bold text-black mb-3">{t('rateLimits.handling.jsExample')}</h4>
        <div className="bg-gray-900 rounded-lg p-4 mb-6">
          <pre className="text-green-400 text-sm overflow-x-auto">
            <code>{`async function makeRequestWithRetry(url, options, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    const response = await fetch(url, options);
    
    if (response.status === 429) {
      const resetTime = parseInt(response.headers.get('X-RateLimit-Reset'));
      const waitTime = (resetTime * 1000) - Date.now();
      
      if (waitTime > 0) {
        console.log(\`Rate limited. Waiting \${waitTime}ms\`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        continue;
      }
    }
    
    return response;
  }
  
  throw new Error('Max retries exceeded');
}`}</code>
          </pre>
        </div>

        <h4 className="font-bold text-black mb-3">{t('rateLimits.handling.pythonExample')}</h4>
        <div className="bg-gray-900 rounded-lg p-4">
          <pre className="text-green-400 text-sm overflow-x-auto">
            <code>{`import time
import requests

def make_request_with_retry(url, headers, data, max_retries=3):
    for i in range(max_retries):
        response = requests.post(url, headers=headers, json=data)
        
        if response.status_code == 429:
            reset_time = int(response.headers.get('X-RateLimit-Reset', 0))
            wait_time = max(0, reset_time - int(time.time()))
            
            if wait_time > 0:
                print(f"Rate limited. Waiting {wait_time} seconds")
                time.sleep(wait_time)
                continue
        
        return response
    
    raise Exception("Max retries exceeded")`}</code>
          </pre>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('rateLimits.bestPractices.title')}</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">{t('rateLimits.bestPractices.monitor.title')}</h5>
            <p className="text-gray-600 text-sm">{t('rateLimits.bestPractices.monitor.description')}</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">{t('rateLimits.bestPractices.backoff.title')}</h5>
            <p className="text-gray-600 text-sm">{t('rateLimits.bestPractices.backoff.description')}</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">{t('rateLimits.bestPractices.cache.title')}</h5>
            <p className="text-gray-600 text-sm">{t('rateLimits.bestPractices.cache.description')}</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">{t('rateLimits.bestPractices.batch.title')}</h5>
            <p className="text-gray-600 text-sm">{t('rateLimits.bestPractices.batch.description')}</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">{t('rateLimits.bestPractices.upgrade.title')}</h5>
            <p className="text-gray-600 text-sm">{t('rateLimits.bestPractices.upgrade.description')}</p>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}

export default RateLimitsPage