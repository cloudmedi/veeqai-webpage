import React from 'react'
import { useTranslation } from 'react-i18next'
import DocsLayout from '../../components/DocsLayout'
import PostmanGenerator from '../../components/PostmanGenerator'

const PostmanCollectionPage: React.FC = () => {
  const { t } = useTranslation()
  
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-6">{t('postmanCollection.title')}</h1>
        <p className="text-xl text-gray-700">
          {t('postmanCollection.description')}
        </p>
      </div>
      
      <PostmanGenerator baseUrl="https://api.veeq.ai" />
    </DocsLayout>
  )
}

export default PostmanCollectionPage