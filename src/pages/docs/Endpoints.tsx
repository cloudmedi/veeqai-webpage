import React from 'react'
import { useTranslation } from 'react-i18next'
import DocsLayout from '../../components/DocsLayout'
import ApiReference from '../../components/ApiReference'
import { apiEndpoints } from '../../data/apiEndpoints'

const EndpointsPage: React.FC = () => {
  const { t } = useTranslation()
  
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-6">{t('endpoints.title')}</h1>
        <p className="text-xl text-gray-700">
          {t('endpoints.description')}
        </p>
      </div>
      
      <ApiReference endpoints={apiEndpoints} />
    </DocsLayout>
  )
}

export default EndpointsPage