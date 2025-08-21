import React from 'react'
import { useTranslation } from 'react-i18next'
import DocsLayout from '../../components/DocsLayout'

const PaymentMethodsPage: React.FC = () => {
  const { t } = useTranslation()
  
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-6">{t('paymentMethods.title')}</h1>
        <p className="text-xl text-gray-700">
          {t('paymentMethods.description')}
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('paymentMethods.supported.title')}</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-black mb-4">{t('paymentMethods.supported.cards')}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  VISA
                </div>
                <span className="text-gray-700">{t('paymentMethods.supported.visa')}</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  MC
                </div>
                <span className="text-gray-700">{t('paymentMethods.supported.mastercard')}</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                  AMEX
                </div>
                <span className="text-gray-700">{t('paymentMethods.supported.amex')}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-black mb-4">{t('paymentMethods.supported.turkish')}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                <div className="w-8 h-5 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  iyz
                </div>
                <span className="text-gray-700">{t('paymentMethods.supported.iyzico')}</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                  BKM
                </div>
                <span className="text-gray-700">{t('paymentMethods.supported.bkm')}</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                <div className="w-8 h-5 bg-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">
                  3D
                </div>
                <span className="text-gray-700">{t('paymentMethods.supported.threeDSecure')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('paymentMethods.security.title')}</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-bold text-green-800 mb-2">{t('paymentMethods.security.pci.title')}</h4>
            <p className="text-sm text-green-600">{t('paymentMethods.security.pci.description')}</p>
          </div>
          <div className="text-center p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">{t('paymentMethods.security.ssl.title')}</h4>
            <p className="text-sm text-blue-600">{t('paymentMethods.security.ssl.description')}</p>
          </div>
          <div className="text-center p-6 bg-purple-50 border border-purple-200 rounded-lg">
            <h4 className="font-bold text-purple-800 mb-2">{t('paymentMethods.security.threeD.title')}</h4>
            <p className="text-sm text-purple-600">{t('paymentMethods.security.threeD.description')}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('paymentMethods.api.title')}</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-bold text-black mb-1">GET /api/billing/payment-methods</h5>
            <p className="text-gray-600 text-sm">{t('paymentMethods.api.endpoints.list')}</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-black mb-1">POST /api/billing/payment-methods</h5>
            <p className="text-gray-600 text-sm">{t('paymentMethods.api.endpoints.add')}</p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <h5 className="font-bold text-black mb-1">PUT /api/billing/payment-methods/:id</h5>
            <p className="text-gray-600 text-sm">{t('paymentMethods.api.endpoints.update')}</p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <h5 className="font-bold text-black mb-1">DELETE /api/billing/payment-methods/:id</h5>
            <p className="text-gray-600 text-sm">{t('paymentMethods.api.endpoints.remove')}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-black mb-6">{t('paymentMethods.currencies.title')}</h3>
        
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <h4 className="font-bold text-black mb-1">USD</h4>
            <p className="text-sm text-gray-600">{t('paymentMethods.currencies.usd')}</p>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <h4 className="font-bold text-black mb-1">EUR</h4>
            <p className="text-sm text-gray-600">{t('paymentMethods.currencies.eur')}</p>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <h4 className="font-bold text-black mb-1">TRY</h4>
            <p className="text-sm text-gray-600">{t('paymentMethods.currencies.try')}</p>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <h4 className="font-bold text-black mb-1">GBP</h4>
            <p className="text-sm text-gray-600">{t('paymentMethods.currencies.gbp')}</p>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}

export default PaymentMethodsPage