import React from 'react'
import { useTranslation } from 'react-i18next'
import DocsLayout from '../../components/DocsLayout'
import OpenAPIGenerator from '../../components/OpenAPIGenerator'

const OpenApiSpecPage: React.FC = () => {
  const { t } = useTranslation()
  
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-6">{t('openApiSpec.title')}</h1>
        <p className="text-xl text-gray-700">
          {t('openApiSpec.description')}
        </p>
      </div>
      
      <OpenAPIGenerator baseUrl="https://api.veeq.ai" />
    </DocsLayout>
  )
}

export default OpenApiSpecPage