import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import DocsLayout from '../../components/DocsLayout'

const IntroductionPage: React.FC = () => {
  const { t } = useTranslation()
  
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-6">
          {t('introduction.title')}
        </h1>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-black mb-3">{t('introduction.subtitle')}</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t('introduction.welcome')}
          </p>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <p className="font-medium text-orange-800">
            {t('introduction.promise')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <a 
            href="http://localhost:5173/register"
            className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            {t('introduction.getApiKey')}
          </a>
          <Link
            to="/docs/quick-start"
            className="flex items-center justify-center gap-2 bg-gray-100 text-black px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-200 transition-colors"
          >
            {t('introduction.quickStart')}
          </Link>
        </div>
      </div>
      
      {/* What We Offer */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-3xl font-bold text-black">{t('introduction.whatWeOffer.title')}</h2>
        </div>
        
        <p className="text-gray-700 text-lg mb-8">
          {t('introduction.whatWeOffer.description')}
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-black mb-4">{t('introduction.whatWeOffer.musicGeneration.title')}</h3>
            <p className="text-gray-600">{t('introduction.whatWeOffer.musicGeneration.description')}</p>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-black mb-4">{t('introduction.whatWeOffer.voiceChanging.title')}</h3>
            <p className="text-gray-600">{t('introduction.whatWeOffer.voiceChanging.description')}</p>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-black mb-4">{t('introduction.whatWeOffer.textToSpeech.title')}</h3>
            <p className="text-gray-600">{t('introduction.whatWeOffer.textToSpeech.description')}</p>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-black mb-4">{t('introduction.whatWeOffer.audioProcessing.title')}</h3>
            <p className="text-gray-600">{t('introduction.whatWeOffer.audioProcessing.description')}</p>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}

export default IntroductionPage