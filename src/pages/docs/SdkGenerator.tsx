import React from 'react'
import { useTranslation } from 'react-i18next'
import DocsLayout from '../../components/DocsLayout'
import SdkGenerator from '../../components/SdkGenerator'

const SdkGeneratorPage: React.FC = () => {
  const { t } = useTranslation()
  
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-6">{t('sdkGenerator.title')}</h1>
        <p className="text-xl text-gray-700">
          {t('sdkGenerator.description')}
        </p>
      </div>
      
      <SdkGenerator baseUrl="https://api.veeq.ai" />
    </DocsLayout>
  )
}

export default SdkGeneratorPage