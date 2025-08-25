import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AboutPage: React.FC = () => {
  const { t } = useTranslation()
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="min-h-screen bg-white pt-20">
          <div className="container mx-auto px-4 lg:px-8 py-16">
            <div className="max-w-6xl mx-auto">
              
              {/* Hero Section */}
              <div className="text-center mb-12">
                <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
                  {t('about.title')}
                </h1>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
                  {t('about.subtitle')}
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                  <h2 className="text-3xl font-bold text-black mb-6">{t('about.mission.title')}</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {t('about.mission.description')}
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-black pl-4">
                      <h4 className="font-bold text-black mb-1">{t('about.mission.democratize.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('about.mission.democratize.description')}</p>
                    </div>
                    <div className="border-l-4 border-black pl-4">
                      <h4 className="font-bold text-black mb-1">{t('about.mission.removeBarriers.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('about.mission.removeBarriers.description')}</p>
                    </div>
                    <div className="border-l-4 border-black pl-4">
                      <h4 className="font-bold text-black mb-1">{t('about.mission.empowerInnovation.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('about.mission.empowerInnovation.description')}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                  <h2 className="text-3xl font-bold text-black mb-6">{t('about.vision.title')}</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {t('about.vision.description')}
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-black pl-4">
                      <h4 className="font-bold text-black mb-1">{t('about.vision.globalCommunication.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('about.vision.globalCommunication.description')}</p>
                    </div>
                    <div className="border-l-4 border-black pl-4">
                      <h4 className="font-bold text-black mb-1">{t('about.vision.creativeFreedom.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('about.vision.creativeFreedom.description')}</p>
                    </div>
                    <div className="border-l-4 border-black pl-4">
                      <h4 className="font-bold text-black mb-1">{t('about.vision.industryTransformation.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('about.vision.industryTransformation.description')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Who We Are Section */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-black mb-8 text-center">
                  {t('about.team.title')}
                </h2>
                <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
                  {t('about.team.subtitle')}
                </p>

                <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-8">
                  <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                      {t('about.team.description')}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-black mb-4">{t('about.team.expertise.title')}</h3>
                        <div className="space-y-3">
                          <div className="border-l-4 border-black pl-4">
                            <h4 className="font-bold text-black mb-1">{t('about.team.expertise.ai.title')}</h4>
                            <p className="text-gray-600 text-sm">{t('about.team.expertise.ai.description')}</p>
                          </div>
                          <div className="border-l-4 border-black pl-4">
                            <h4 className="font-bold text-black mb-1">{t('about.team.expertise.audio.title')}</h4>
                            <p className="text-gray-600 text-sm">{t('about.team.expertise.audio.description')}</p>
                          </div>
                          <div className="border-l-4 border-black pl-4">
                            <h4 className="font-bold text-black mb-1">{t('about.team.expertise.content.title')}</h4>
                            <p className="text-gray-600 text-sm">{t('about.team.expertise.content.description')}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-black mb-4">{t('about.team.background.title')}</h3>
                        <div className="space-y-3">
                          <div className="border-l-4 border-black pl-4">
                            <h4 className="font-bold text-black mb-1">{t('about.team.background.tech.title')}</h4>
                            <p className="text-gray-600 text-sm">{t('about.team.background.tech.description')}</p>
                          </div>
                          <div className="border-l-4 border-black pl-4">
                            <h4 className="font-bold text-black mb-1">{t('about.team.background.academic.title')}</h4>
                            <p className="text-gray-600 text-sm">{t('about.team.background.academic.description')}</p>
                          </div>
                          <div className="border-l-4 border-black pl-4">
                            <h4 className="font-bold text-black mb-1">{t('about.team.background.creative.title')}</h4>
                            <p className="text-gray-600 text-sm">{t('about.team.background.creative.description')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Values */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-black mb-8 text-center">{t('about.values.title')}</h2>
                <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
                  {t('about.values.subtitle')}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-2xl font-bold text-black mb-4">{t('about.values.innovation.title')}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {t('about.values.innovation.description')}
                    </p>
                    <div className="text-sm text-gray-600">
                      {t('about.values.innovation.tagline')}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-2xl font-bold text-black mb-4">{t('about.values.userCentric.title')}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {t('about.values.userCentric.description')}
                    </p>
                    <div className="text-sm text-gray-600">
                      {t('about.values.userCentric.tagline')}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-2xl font-bold text-black mb-4">{t('about.values.speed.title')}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {t('about.values.speed.description')}
                    </p>
                    <div className="text-sm text-gray-600">
                      {t('about.values.speed.tagline')}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-2xl font-bold text-black mb-4">{t('about.values.accessibility.title')}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {t('about.values.accessibility.description')}
                    </p>
                    <div className="text-sm text-gray-600">
                      {t('about.values.accessibility.tagline')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Story */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
                <h2 className="text-3xl font-bold text-black mb-8 text-center">{t('about.story.title')}</h2>
                
                <div className="max-w-4xl mx-auto">
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    {t('about.story.paragraph1')}
                  </p>
                  
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    {t('about.story.paragraph2')}
                  </p>

                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('about.story.paragraph3')}
                  </p>
                </div>
              </div>

              {/* Connect With Us */}
              <div className="text-center">
                <h2 className="text-4xl font-bold text-black mb-6">{t('about.connect.title')}</h2>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  {t('about.connect.description')}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <h3 className="text-xl font-bold text-black mb-4">{t('about.connect.tryPlatform.title')}</h3>
                    <p className="text-gray-600 mb-6">
                      {t('about.connect.tryPlatform.description')}
                    </p>
                    {/* Temporarily commented out - Coming Soon
                    <a
                      href={`https://app.veeq.ai${i18n.language === 'tr' ? '/tr' : ''}/register`}
                      className="inline-block bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                    >
                      {t('about.connect.tryPlatform.button')}
                    </a>
                    */}
                    <div className="inline-block bg-gray-400 text-white px-8 py-3 rounded-xl font-semibold cursor-not-allowed">
                      Coming Soon
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <h3 className="text-xl font-bold text-black mb-4">{t('about.connect.learnMore.title')}</h3>
                    <p className="text-gray-600 mb-6">
                      {t('about.connect.learnMore.description')}
                    </p>
                    <a
                      href="/features"
                      className="inline-block bg-gray-100 text-black px-8 py-3 rounded-xl font-semibold border border-gray-300 hover:bg-gray-200 transition-colors"
                    >
                      {t('about.connect.learnMore.button')}
                    </a>
                  </div>
                </div>
                
                <div className="text-gray-600 text-lg">
                  {t('about.connect.joinCreators')}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage