import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import DocsLayout from '../../components/DocsLayout'
import { Copy, Check, ExternalLink } from 'lucide-react'

const IyzicoIntegrationPage: React.FC = () => {
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
      <pre className="text-green-400 text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  )

  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-6">{t('iyzicoIntegration.title')}</h1>
        <p className="text-xl text-gray-700">
          {t('iyzicoIntegration.description')}
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('iyzicoIntegration.setupTitle')}</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-black mb-3">1. Install iyzico SDK</h4>
            <CodeBlock
              language="bash"
              id="iyzico-install"
              code={`# Install iyzico SDK
npm install iyzipay

# For React applications
npm install axios`}
            />
          </div>

          <div>
            <h4 className="font-bold text-black mb-3">2. Initialize iyzico</h4>
            <CodeBlock
              language="javascript"
              id="iyzico-init"
              code={`const Iyzipay = require('iyzipay');

// Initialize iyzico with your credentials
const iyzipay = new Iyzipay({
    apiKey: 'sandbox-your-api-key',
    secretKey: 'sandbox-your-secret-key',
    uri: 'https://sandbox-api.iyzipay.com' // Use https://api.iyzipay.com for production
});`}
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('iyzicoIntegration.createPaymentTitle')}</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-black mb-3">API Endpoint</h4>
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <code className="text-black font-mono">POST /api/billing/iyzico/create-payment</code>
            </div>
            
            <CodeBlock
              language="javascript"
              id="create-iyzico-payment"
              code={`// Create iyzico payment
const response = await fetch('/api/billing/iyzico/create-payment', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_JWT_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    price: '20.00',
    currency: 'TRY',
    planId: 'pro-monthly',
    buyer: {
      id: 'BY789',
      name: 'Ahmet',
      surname: 'Yılmaz',
      gsmNumber: '+905350000000',
      email: 'ahmet@example.com',
      identityNumber: '74300864791',
      registrationAddress: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
      city: 'Istanbul',
      country: 'Turkey'
    }
  })
});

const { paymentPageUrl } = await response.json();`}
            />
          </div>

          <div>
            <h4 className="font-bold text-black mb-3">Server-side Implementation</h4>
            <CodeBlock
              language="javascript"
              id="iyzico-server"
              code={`app.post('/api/billing/iyzico/create-payment', async (req, res) => {
  const { price, currency, planId, buyer } = req.body;
  
  const request = {
    locale: Iyzipay.LOCALE.TR,
    conversationId: '123456789',
    price: price,
    paidPrice: price,
    currency: currency,
    installment: '1',
    paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
    paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
    callbackUrl: 'https://yoursite.com/api/billing/iyzico/callback',
    enabledInstallments: [2, 3, 6, 9],
    buyer: buyer,
    shippingAddress: {
      contactName: buyer.name + ' ' + buyer.surname,
      city: buyer.city,
      country: buyer.country,
      address: buyer.registrationAddress
    },
    billingAddress: {
      contactName: buyer.name + ' ' + buyer.surname,
      city: buyer.city,
      country: buyer.country,
      address: buyer.registrationAddress
    },
    basketItems: [{
      id: planId,
      name: 'Veeq AI Pro Plan',
      category1: 'SaaS',
      itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL,
      price: price
    }]
  };

  iyzipay.checkoutFormInitialize.create(request, (err, result) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    
    res.json({
      paymentPageUrl: result.paymentPageUrl,
      token: result.token
    });
  });
});`}
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('iyzicoIntegration.handleCallbackTitle')}</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-black mb-3">Callback Endpoint</h4>
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <code className="text-black font-mono">POST /api/billing/iyzico/callback</code>
            </div>
            
            <CodeBlock
              language="javascript"
              id="iyzico-callback"
              code={`app.post('/api/billing/iyzico/callback', (req, res) => {
  const { token } = req.body;
  
  const request = {
    locale: Iyzipay.LOCALE.TR,
    token: token
  };

  iyzipay.checkoutForm.retrieve(request, (err, result) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    
    if (result.status === 'success' && result.paymentStatus === 'SUCCESS') {
      // Payment successful
      console.log('Payment successful:', result);
      
      // Update user subscription status
      // Add credits to user account
      
      res.redirect('https://yoursite.com/success');
    } else {
      // Payment failed
      console.log('Payment failed:', result.errorMessage);
      res.redirect('https://yoursite.com/error');
    }
  });
});`}
            />
          </div>

          <div>
            <h4 className="font-bold text-black mb-3">Payment Status Values</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-green-500 pl-4">
                <h5 className="font-bold text-black mb-1">SUCCESS</h5>
                <p className="text-gray-600 text-sm">Payment completed successfully</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h5 className="font-bold text-black mb-1">FAILURE</h5>
                <p className="text-gray-600 text-sm">Payment failed or declined</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h5 className="font-bold text-black mb-1">INIT_THREEDS</h5>
                <p className="text-gray-600 text-sm">3D Secure authentication required</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h5 className="font-bold text-black mb-1">CALLBACK_THREEDS</h5>
                <p className="text-gray-600 text-sm">3D Secure callback received</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('iyzicoIntegration.supportedPaymentMethodsTitle')}</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-black mb-4">Turkish Credit Cards</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  VISA
                </div>
                <span className="text-gray-700">Visa (All Turkish banks)</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  MC
                </div>
                <span className="text-gray-700">Mastercard (All Turkish banks)</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                  AMEX
                </div>
                <span className="text-gray-700">American Express</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-black mb-4">Digital Wallets & Others</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                  BKM
                </div>
                <span className="text-gray-700">BKM Express</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                <div className="w-8 h-5 bg-purple-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  PWB
                </div>
                <span className="text-gray-700">Paywith Series</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                <div className="w-8 h-5 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  IPT
                </div>
                <span className="text-gray-700">Installment Options</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('iyzicoIntegration.testCardsTitle')}</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-bold text-black">Card Number</th>
                <th className="text-left py-3 px-4 font-bold text-black">Brand</th>
                <th className="text-left py-3 px-4 font-bold text-black">Description</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-mono">5528790000000008</td>
                <td className="py-3 px-4">Mastercard</td>
                <td className="py-3 px-4 text-gray-700">Successful payment</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-mono">5401341234567891</td>
                <td className="py-3 px-4">Mastercard</td>
                <td className="py-3 px-4 text-gray-700">3D Secure authentication</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-mono">4766620000000001</td>
                <td className="py-3 px-4">Visa</td>
                <td className="py-3 px-4 text-gray-700">Successful payment</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-mono">4603450000000000</td>
                <td className="py-3 px-4">Visa</td>
                <td className="py-3 px-4 text-gray-700">3D Secure authentication</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Test Details:</strong> Use any future expiry date (MM/YY), any 3-digit CVV, 
            and any cardholder name for testing.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('iyzicoIntegration.bestPracticesTitle')}</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">Validate User Data</h5>
            <p className="text-gray-600 text-sm">Always validate Turkish identity numbers and phone numbers</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">Handle 3D Secure</h5>
            <p className="text-gray-600 text-sm">Support 3D Secure authentication for enhanced security</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">Installment Options</h5>
            <p className="text-gray-600 text-sm">Offer installment payment options popular in Turkey</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">Currency Support</h5>
            <p className="text-gray-600 text-sm">Use Turkish Lira (TRY) for local pricing and compliance</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">Error Handling</h5>
            <p className="text-gray-600 text-sm">Provide Turkish language error messages for better UX</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-gray-700">
            For more information, visit the{' '}
            <a 
              href="https://dev.iyzipay.com/tr/api" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              iyzico Developer Documentation <ExternalLink className="w-4 h-4" />
            </a>
          </p>
        </div>
      </div>
    </DocsLayout>
  )
}

export default IyzicoIntegrationPage