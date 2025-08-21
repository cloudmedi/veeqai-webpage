import React from 'react'
import { useTranslation } from 'react-i18next'
import DocsLayout from '../../components/DocsLayout'

const BillingManagementPage: React.FC = () => {
  const { t } = useTranslation()
  
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-6">{t('billingManagement.title')}</h1>
        <p className="text-xl text-gray-700">
          {t('billingManagement.description')}
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('billingManagement.subscription.title')}</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-bold text-black mb-1">GET /api/billing/subscription</h5>
            <p className="text-gray-600 text-sm mb-2">{t('billingManagement.subscription.getCurrent')}</p>
            <div className="bg-gray-900 rounded-lg p-3 mt-2">
              <code className="text-green-400 text-xs">
                {`{
  "plan": "pro-monthly",
  "status": "active",
  "credits": 1000,
  "renewalDate": "2024-09-14"
}`}
              </code>
            </div>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">POST /api/billing/subscription/upgrade</h5>
            <p className="text-gray-600 text-sm">{t('billingManagement.subscription.upgrade')}</p>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4">
            <h5 className="font-bold text-black mb-1">POST /api/billing/subscription/cancel</h5>
            <p className="text-gray-600 text-sm">{t('billingManagement.subscription.cancel')}</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4">
            <h5 className="font-bold text-black mb-1">POST /api/billing/subscription/resume</h5>
            <p className="text-gray-600 text-sm">{t('billingManagement.subscription.resume')}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('billingManagement.invoice.title')}</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-bold text-black mb-1">GET /api/billing/invoices</h5>
            <p className="text-gray-600 text-sm mb-2">{t('billingManagement.invoice.list')}</p>
            <div className="bg-gray-900 rounded-lg p-3 mt-2">
              <code className="text-green-400 text-xs">
                {`{
  "invoices": [
    {
      "id": "inv_123",
      "amount": 20.00,
      "currency": "USD",
      "status": "paid",
      "date": "2024-08-14",
      "downloadUrl": "/api/billing/invoices/inv_123/download"
    }
  ]
}`}
              </code>
            </div>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">GET /api/billing/invoices/:id</h5>
            <p className="text-gray-600 text-sm">{t('billingManagement.invoice.getDetails')}</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4">
            <h5 className="font-bold text-black mb-1">GET /api/billing/invoices/:id/download</h5>
            <p className="text-gray-600 text-sm">{t('billingManagement.invoice.download')}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('billingManagement.credits.title')}</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-bold text-black mb-1">GET /api/billing/credits</h5>
            <p className="text-gray-600 text-sm mb-2">{t('billingManagement.credits.getBalance')}</p>
            <div className="bg-gray-900 rounded-lg p-3 mt-2">
              <code className="text-green-400 text-xs">
                {`{
  "credits": 1500,
  "monthlyAllowance": 1000,
  "resetDate": "2024-09-01",
  "overageCredits": 500
}`}
              </code>
            </div>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">POST /api/billing/credits/purchase</h5>
            <p className="text-gray-600 text-sm">{t('billingManagement.credits.purchase')}</p>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4">
            <h5 className="font-bold text-black mb-1">GET /api/billing/usage</h5>
            <p className="text-gray-600 text-sm mb-2">{t('billingManagement.credits.getUsage')}</p>
            <div className="bg-gray-900 rounded-lg p-3 mt-2">
              <code className="text-green-400 text-xs">
                {`{
  "currentMonth": {
    "musicGeneration": 150,
    "textToSpeech": 300,
    "voiceCloning": 50
  },
  "previousMonth": {
    "musicGeneration": 200,
    "textToSpeech": 280,
    "voiceCloning": 70
  }
}`}
              </code>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('billingManagement.address.title')}</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-bold text-black mb-1">GET /api/billing/address</h5>
            <p className="text-gray-600 text-sm">{t('billingManagement.address.getCurrent')}</p>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4">
            <h5 className="font-bold text-black mb-1">PUT /api/billing/address</h5>
            <p className="text-gray-600 text-sm mb-2">{t('billingManagement.address.update')}</p>
            <div className="bg-gray-900 rounded-lg p-3 mt-2">
              <code className="text-green-400 text-xs">
                {`{
  "name": "John Doe",
  "company": "Acme Corp",
  "address1": "123 Main St",
  "address2": "Suite 100",
  "city": "New York",
  "state": "NY",
  "zipCode": "10001",
  "country": "US",
  "taxId": "12-3456789"
}`}
              </code>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('billingManagement.notifications.title')}</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-bold text-black mb-1">GET /api/billing/notifications</h5>
            <p className="text-gray-600 text-sm">{t('billingManagement.notifications.getPreferences')}</p>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4">
            <h5 className="font-bold text-black mb-1">PUT /api/billing/notifications</h5>
            <p className="text-gray-600 text-sm mb-2">{t('billingManagement.notifications.updateSettings')}</p>
            <div className="bg-gray-900 rounded-lg p-3 mt-2">
              <code className="text-green-400 text-xs">
                {`{
  "emailNotifications": {
    "invoices": true,
    "paymentFailures": true,
    "creditsLow": true,
    "subscriptionChanges": true
  },
  "webhookUrl": "https://yourapi.com/billing-webhook"
}`}
              </code>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('billingManagement.plans.title')}</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-black mb-2">Free</h4>
            <p className="text-2xl font-bold text-black mb-2">$0/month</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 100 credits/month</li>
              <li>• Basic features</li>
              <li>• Community support</li>
            </ul>
          </div>
          
          <div className="border-2 border-black rounded-lg p-4 bg-gray-50">
            <h4 className="font-bold text-black mb-2">Pro</h4>
            <p className="text-2xl font-bold text-black mb-2">$20/month</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 1,000 credits/month</li>
              <li>• All features</li>
              <li>• Priority support</li>
              <li>• API access</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-black mb-2">Enterprise</h4>
            <p className="text-2xl font-bold text-black mb-2">Custom</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Unlimited credits</li>
              <li>• Custom features</li>
              <li>• Dedicated support</li>
              <li>• SLA guarantee</li>
            </ul>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}

export default BillingManagementPage