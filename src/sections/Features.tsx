import React, { useState } from 'react'
import { Play, Pause, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Features: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const { t } = useTranslation()

  return (
    <section className="min-h-screen bg-white">
      <div className="container mx-auto px-4 lg:px-8 pt-8 pb-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
              {t('features.mainTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              {t('features.mainSubtitle')}
            </p>
          </div>

          {/* AI Voice & Speech */}
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
            <h3 className="text-3xl font-bold text-black mb-8">{t('features.voiceSection.title')}</h3>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {t('features.voiceSection.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mb-8">
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-black mb-2">{t('features.voiceSection.features.textToSpeech.title')}</h4>
                  <p className="text-gray-600">{t('features.voiceSection.features.textToSpeech.description')}</p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-black mb-2">{t('features.voiceSection.features.voiceCloning.title')}</h4>
                  <p className="text-gray-600">{t('features.voiceSection.features.voiceCloning.description')}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-black mb-2">{t('features.voiceSection.features.multiLanguage.title')}</h4>
                  <p className="text-gray-600">{t('features.voiceSection.features.multiLanguage.description')}</p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-black mb-2">{t('features.voiceSection.features.brandConsistency.title')}</h4>
                  <p className="text-gray-600">{t('features.voiceSection.features.brandConsistency.description')}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-black mb-2">✓ {t('features.voiceSection.benefits.textToSpeech.title')}</div>
                <div className="text-gray-600">{t('features.voiceSection.benefits.textToSpeech.subtitle')}</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-black mb-2">✓ {t('features.voiceSection.benefits.voiceCloning.title')}</div>
                <div className="text-gray-600">{t('features.voiceSection.benefits.voiceCloning.subtitle')}</div>
              </div>
            </div>
          </div>

          {/* AI Music & Audio */}
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
            <h3 className="text-3xl font-bold text-black mb-8">{t('features.musicSection.title')}</h3>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {t('features.musicSection.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mb-8">
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-black mb-2">{t('features.musicSection.features.musicCreation.title')}</h4>
                  <p className="text-gray-600">{t('features.musicSection.features.musicCreation.description')}</p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-black mb-2">{t('features.musicSection.features.audioEnhancement.title')}</h4>
                  <p className="text-gray-600">{t('features.musicSection.features.audioEnhancement.description')}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-black mb-2">{t('features.musicSection.features.copyrightFree.title')}</h4>
                  <p className="text-gray-600">{t('features.musicSection.features.copyrightFree.description')}</p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-black mb-2">{t('features.musicSection.features.professionalQuality.title')}</h4>
                  <p className="text-gray-600">{t('features.musicSection.features.professionalQuality.description')}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-black mb-2">✓ {t('features.musicSection.benefits.musicGeneration.title')}</div>
                <div className="text-gray-600">{t('features.musicSection.benefits.musicGeneration.subtitle')}</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-black mb-2">✓ {t('features.musicSection.benefits.audioProcessing.title')}</div>
                <div className="text-gray-600">{t('features.musicSection.benefits.audioProcessing.subtitle')}</div>
              </div>
            </div>
          </div>

          {/* Business & Scale */}
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
            <h3 className="text-3xl font-bold text-black mb-8">{t('features.businessSection.title')}</h3>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {t('features.businessSection.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mb-8">
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-black mb-2">{t('features.businessSection.features.teamCollaboration.title')}</h4>
                  <p className="text-gray-600">{t('features.businessSection.features.teamCollaboration.description')}</p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-black mb-2">{t('features.businessSection.features.apiIntegration.title')}</h4>
                  <p className="text-gray-600">{t('features.businessSection.features.apiIntegration.description')}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-black mb-2">{t('features.businessSection.features.prioritySupport.title')}</h4>
                  <p className="text-gray-600">{t('features.businessSection.features.prioritySupport.description')}</p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-black mb-2">{t('features.businessSection.features.advancedAnalytics.title')}</h4>
                  <p className="text-gray-600">{t('features.businessSection.features.advancedAnalytics.description')}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-black mb-2">✓ {t('features.businessSection.benefits.teamCollaboration.title')}</div>
                <div className="text-gray-600">{t('features.businessSection.benefits.teamCollaboration.subtitle')}</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-black mb-2">✓ {t('features.businessSection.benefits.enterpriseFeatures.title')}</div>
                <div className="text-gray-600">{t('features.businessSection.benefits.enterpriseFeatures.subtitle')}</div>
              </div>
            </div>
          </div>

          {/* Why Choose Veeq AI */}
          <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
            <div>
              <div className="text-4xl font-bold text-black mb-2">10x</div>
              <div className="text-gray-600">{t('features.stats.faster')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">95%</div>
              <div className="text-gray-600">{t('features.stats.cheaper')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">24/7</div>
              <div className="text-gray-600">{t('features.stats.available')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">∞</div>
              <div className="text-gray-600">{t('features.stats.unlimited')}</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="/features"
                className="inline-block bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-colors border border-gray-300"
              >
                {t('features.cta.seeAllFeatures')}
              </a>
              <a
                href="http://localhost:5173/register"
                className="inline-block bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors"
              >
                {t('features.cta.startFreeTrial')}
              </a>
            </div>
            <div className="text-gray-600 text-lg">
              {t('features.cta.freeCreditsInfo')}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features