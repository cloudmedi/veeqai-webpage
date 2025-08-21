import React from 'react'
import { useTranslation } from 'react-i18next'
import DocsLayout from '../../components/DocsLayout'
import ApiExplorer from '../../components/ApiExplorer'

const ApiExplorerPage: React.FC = () => {
  const { t } = useTranslation()
  
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-6">{t('apiExplorer.title')}</h1>
        <p className="text-xl text-gray-700">
          {t('apiExplorer.description')}
        </p>
      </div>
      
      <div className="grid gap-8">
        {/* Authentication Endpoint */}
        <ApiExplorer 
          endpoint={{
            id: 'get-user-info',
            method: 'GET',
            path: '/api/auth/me',
            title: t('apiExplorer.endpoints.getUserInfo.title'),
            description: t('apiExplorer.endpoints.getUserInfo.description'),
            parameters: [
              {
                name: 'Authorization',
                type: 'header',
                required: true,
                description: t('apiExplorer.endpoints.getUserInfo.params.authorization'),
                example: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
              }
            ]
          }}
        />
        
        {/* Music Generation Endpoint */}
        <ApiExplorer 
          endpoint={{
            id: 'generate-music',
            method: 'POST',
            path: '/api/music/generate',
            title: t('apiExplorer.endpoints.generateMusic.title'),
            description: t('apiExplorer.endpoints.generateMusic.description'),
            body: JSON.stringify({
              prompt: t('apiExplorer.endpoints.generateMusic.examplePrompt'),
              modelId: 'MODEL_ID',
              duration: 30,
              style: 'electronic',
              lyrics: ''
            }, null, 2),
            parameters: [
              {
                name: 'prompt',
                type: 'string',
                required: true,
                description: t('apiExplorer.endpoints.generateMusic.params.prompt.description'),
                example: t('apiExplorer.endpoints.generateMusic.params.prompt.example')
              },
              {
                name: 'modelId',
                type: 'string',
                required: true,
                description: t('apiExplorer.endpoints.generateMusic.params.modelId'),
                example: 'meta-musicgen-large'
              },
              {
                name: 'duration',
                type: 'number',
                required: false,
                description: t('apiExplorer.endpoints.generateMusic.params.duration'),
                example: '30'
              }
            ]
          }}
        />

        {/* Text-to-Speech Endpoint */}
        <ApiExplorer 
          endpoint={{
            id: 'generate-speech',
            method: 'POST',
            path: '/api/speech/generate',
            title: t('apiExplorer.endpoints.generateSpeech.title'),
            description: t('apiExplorer.endpoints.generateSpeech.description'),
            body: JSON.stringify({
              text: t('apiExplorer.endpoints.generateSpeech.exampleText'),
              voiceId: 'voice-1',
              voiceName: 'Professional Male',
              model: 'speech-2.5-hd',
              language: 'en'
            }, null, 2),
            parameters: [
              {
                name: 'text',
                type: 'string',
                required: true,
                description: t('apiExplorer.endpoints.generateSpeech.params.text.description'),
                example: t('apiExplorer.endpoints.generateSpeech.params.text.example')
              },
              {
                name: 'voiceId',
                type: 'string',
                required: true,
                description: t('apiExplorer.endpoints.generateSpeech.params.voiceId'),
                example: 'voice-1'
              },
              {
                name: 'language',
                type: 'string',
                required: false,
                description: t('apiExplorer.endpoints.generateSpeech.params.language'),
                example: 'en'
              }
            ]
          }}
        />
        
        {/* Get Available Models */}
        <ApiExplorer 
          endpoint={{
            id: 'get-models',
            method: 'GET',
            path: '/api/music/models',
            title: t('apiExplorer.endpoints.getModels.title'),
            description: t('apiExplorer.endpoints.getModels.description'),
            parameters: [
              {
                name: 'type',
                type: 'query',
                required: false,
                description: t('apiExplorer.endpoints.getModels.params.type'),
                example: 'music'
              }
            ]
          }}
        />
      </div>
    </DocsLayout>
  )
}

export default ApiExplorerPage