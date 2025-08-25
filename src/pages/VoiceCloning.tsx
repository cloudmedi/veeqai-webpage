import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import Header from '../components/Header'
import Footer from '../components/Footer'

const VoiceCloningPage: React.FC = () => {
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
                  {t('voiceCloningPage.hero.title')}
                </h1>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
                  {t('voiceCloningPage.hero.subtitle')}
                </p>
                
                {/* Quick Stats */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="text-3xl font-bold text-black mb-2">{t('voiceCloningPage.stats.sampleTime.value')}</div>
                    <div className="text-gray-600">{t('voiceCloningPage.stats.sampleTime.label')}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="text-3xl font-bold text-black mb-2">{t('voiceCloningPage.stats.accuracy.value')}</div>
                    <div className="text-gray-600">{t('voiceCloningPage.stats.accuracy.label')}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="text-3xl font-bold text-black mb-2">{t('voiceCloningPage.stats.unlimited.value')}</div>
                    <div className="text-gray-600">{t('voiceCloningPage.stats.unlimited.label')}</div>
                  </div>
                </div>
              </div>

              {/* Problem Section */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
                <h2 className="text-3xl font-bold text-black mb-8 text-center">
                  {t('voiceCloningPage.problemSection.title')}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-6">{t('voiceCloningPage.problemSection.traditional.title')}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-600 font-bold">✗</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceCloningPage.problemSection.traditional.problem1.title')}</h4>
                          <p className="text-gray-600">{t('voiceCloningPage.problemSection.traditional.problem1.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-600 font-bold">✗</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceCloningPage.problemSection.traditional.problem2.title')}</h4>
                          <p className="text-gray-600">{t('voiceCloningPage.problemSection.traditional.problem2.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-600 font-bold">✗</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceCloningPage.problemSection.traditional.problem3.title')}</h4>
                          <p className="text-gray-600">{t('voiceCloningPage.problemSection.traditional.problem3.description')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-black mb-6">{t('voiceCloningPage.problemSection.veeqWay.title')}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceCloningPage.problemSection.veeqWay.benefit1.title')}</h4>
                          <p className="text-gray-600">{t('voiceCloningPage.problemSection.veeqWay.benefit1.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceCloningPage.problemSection.veeqWay.benefit2.title')}</h4>
                          <p className="text-gray-600">{t('voiceCloningPage.problemSection.veeqWay.benefit2.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceCloningPage.problemSection.veeqWay.benefit3.title')}</h4>
                          <p className="text-gray-600">{t('voiceCloningPage.problemSection.veeqWay.benefit3.description')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-white rounded-xl p-8 border border-gray-200">
                  <h4 className="text-2xl font-bold text-black mb-4">
                    {t('voiceCloningPage.problemSection.savingsHighlight.title')}
                  </h4>
                  <p className="text-gray-600">
                    {t('voiceCloningPage.problemSection.savingsHighlight.description')}
                  </p>
                </div>
              </div>

              {/* Use Cases Section */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-black mb-8 text-center">
                  {t('voiceCloningPage.useCases.title')}
                </h2>
                <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
                  {t('voiceCloningPage.useCases.subtitle')}
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-2xl font-bold text-black mb-4 text-center">{t('voiceCloningPage.useCases.personalBranding.title')}</h3>
                    <div className="space-y-3">
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('voiceCloningPage.useCases.personalBranding.use1.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceCloningPage.useCases.personalBranding.use1.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('voiceCloningPage.useCases.personalBranding.use2.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceCloningPage.useCases.personalBranding.use2.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('voiceCloningPage.useCases.personalBranding.use3.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceCloningPage.useCases.personalBranding.use3.description')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-2xl font-bold text-black mb-4 text-center">{t('voiceCloningPage.useCases.contentCreation.title')}</h3>
                    <div className="space-y-3">
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('voiceCloningPage.useCases.contentCreation.use1.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceCloningPage.useCases.contentCreation.use1.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('voiceCloningPage.useCases.contentCreation.use2.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceCloningPage.useCases.contentCreation.use2.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('voiceCloningPage.useCases.contentCreation.use3.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceCloningPage.useCases.contentCreation.use3.description')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-2xl font-bold text-black mb-4 text-center">{t('voiceCloningPage.useCases.professionalServices.title')}</h3>
                    <div className="space-y-3">
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('voiceCloningPage.useCases.professionalServices.use1.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceCloningPage.useCases.professionalServices.use1.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('voiceCloningPage.useCases.professionalServices.use2.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceCloningPage.useCases.professionalServices.use2.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('voiceCloningPage.useCases.professionalServices.use3.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceCloningPage.useCases.professionalServices.use3.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
                <h2 className="text-3xl font-bold text-black mb-12 text-center">
                  {t('voiceCloningPage.howItWorks.title')}
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
                    <h3 className="text-xl font-bold text-black mb-4">{t('voiceCloningPage.howItWorks.step1.title')}</h3>
                    <p className="text-gray-600">
                      {t('voiceCloningPage.howItWorks.step1.description')}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
                    <h3 className="text-xl font-bold text-black mb-4">{t('voiceCloningPage.howItWorks.step2.title')}</h3>
                    <p className="text-gray-600">
                      {t('voiceCloningPage.howItWorks.step2.description')}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
                    <h3 className="text-xl font-bold text-black mb-4">{t('voiceCloningPage.howItWorks.step3.title')}</h3>
                    <p className="text-gray-600">
                      {t('voiceCloningPage.howItWorks.step3.description')}
                    </p>
                  </div>
                </div>

                <div className="mt-12 text-center bg-white rounded-xl p-8 border border-gray-200">
                  <h4 className="text-xl font-bold text-black mb-4">{t('voiceCloningPage.howItWorks.qualityTips.title')}</h4>
                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div>
                      <h5 className="font-bold text-black mb-2">{t('voiceCloningPage.howItWorks.qualityTips.tip1.title')}</h5>
                      <p className="text-gray-600 text-sm">{t('voiceCloningPage.howItWorks.qualityTips.tip1.description')}</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-black mb-2">{t('voiceCloningPage.howItWorks.qualityTips.tip2.title')}</h5>
                      <p className="text-gray-600 text-sm">{t('voiceCloningPage.howItWorks.qualityTips.tip2.description')}</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-black mb-2">{t('voiceCloningPage.howItWorks.qualityTips.tip3.title')}</h5>
                      <p className="text-gray-600 text-sm">{t('voiceCloningPage.howItWorks.qualityTips.tip3.description')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Stories */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-black mb-12 text-center">
                  {t('voiceCloningPage.successStories.title')}
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{t('voiceCloningPage.successStories.case1.title')}</h3>
                      <p className="text-gray-600">{t('voiceCloningPage.successStories.case1.category')}</p>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      {t('voiceCloningPage.successStories.case1.testimonial')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceCloningPage.successStories.case1.stat1.value')}</div>
                        <div className="text-sm text-gray-600">{t('voiceCloningPage.successStories.case1.stat1.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceCloningPage.successStories.case1.stat2.value')}</div>
                        <div className="text-sm text-gray-600">{t('voiceCloningPage.successStories.case1.stat2.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{t('voiceCloningPage.successStories.case2.title')}</h3>
                      <p className="text-gray-600">{t('voiceCloningPage.successStories.case2.category')}</p>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      {t('voiceCloningPage.successStories.case2.testimonial')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceCloningPage.successStories.case2.stat1.value')}</div>
                        <div className="text-sm text-gray-600">{t('voiceCloningPage.successStories.case2.stat1.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceCloningPage.successStories.case2.stat2.value')}</div>
                        <div className="text-sm text-gray-600">{t('voiceCloningPage.successStories.case2.stat2.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{t('voiceCloningPage.successStories.case3.title')}</h3>
                      <p className="text-gray-600">{t('voiceCloningPage.successStories.case3.category')}</p>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      {t('voiceCloningPage.successStories.case3.testimonial')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceCloningPage.successStories.case3.stat1.value')}</div>
                        <div className="text-sm text-gray-600">{t('voiceCloningPage.successStories.case3.stat1.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceCloningPage.successStories.case3.stat2.value')}</div>
                        <div className="text-sm text-gray-600">{t('voiceCloningPage.successStories.case3.stat2.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{t('voiceCloningPage.successStories.case4.title')}</h3>
                      <p className="text-gray-600">{t('voiceCloningPage.successStories.case4.category')}</p>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      {t('voiceCloningPage.successStories.case4.testimonial')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceCloningPage.successStories.case4.stat1.value')}</div>
                        <div className="text-sm text-gray-600">{t('voiceCloningPage.successStories.case4.stat1.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceCloningPage.successStories.case4.stat2.value')}</div>
                        <div className="text-sm text-gray-600">{t('voiceCloningPage.successStories.case4.stat2.label')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
                <h2 className="text-3xl font-bold text-black mb-12 text-center">
                  {t('voiceCloningPage.comparison.title')}
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-xl font-bold text-black mb-8 text-center">{t('voiceCloningPage.comparison.voiceActors.title')}</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('voiceCloningPage.comparison.voiceActors.cost.value')}</div>
                        <div className="text-gray-600">{t('voiceCloningPage.comparison.voiceActors.cost.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('voiceCloningPage.comparison.voiceActors.availability.value')}</div>
                        <div className="text-gray-600">{t('voiceCloningPage.comparison.voiceActors.availability.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('voiceCloningPage.comparison.voiceActors.risk.value')}</div>
                        <div className="text-gray-600">{t('voiceCloningPage.comparison.voiceActors.risk.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-xl font-bold text-black mb-8 text-center">{t('voiceCloningPage.comparison.synthesizers.title')}</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('voiceCloningPage.comparison.synthesizers.quality.value')}</div>
                        <div className="text-gray-600">{t('voiceCloningPage.comparison.synthesizers.quality.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('voiceCloningPage.comparison.synthesizers.voices.value')}</div>
                        <div className="text-gray-600">{t('voiceCloningPage.comparison.synthesizers.voices.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('voiceCloningPage.comparison.synthesizers.emotion.value')}</div>
                        <div className="text-gray-600">{t('voiceCloningPage.comparison.synthesizers.emotion.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black rounded-xl p-8">
                    <h3 className="text-xl font-bold text-white mb-8 text-center">{t('voiceCloningPage.comparison.veeq.title')}</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{t('voiceCloningPage.comparison.veeq.accuracy.value')}</div>
                        <div className="text-gray-300">{t('voiceCloningPage.comparison.veeq.accuracy.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{t('voiceCloningPage.comparison.veeq.availability.value')}</div>
                        <div className="text-gray-300">{t('voiceCloningPage.comparison.veeq.availability.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{t('voiceCloningPage.comparison.veeq.content.value')}</div>
                        <div className="text-gray-300">{t('voiceCloningPage.comparison.veeq.content.label')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <div className="text-2xl font-bold text-black mb-2">
                    {t('voiceCloningPage.comparison.savingsHighlight.title')}
                  </div>
                  <div className="text-gray-600">
                    {t('voiceCloningPage.comparison.savingsHighlight.description')}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <h2 className="text-4xl font-bold text-black mb-6">
                  {t('voiceCloningPage.cta.title')}
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  {t('voiceCloningPage.cta.subtitle')}
                </p>
                
                {/* Temporarily commented out - Coming Soon
                <a
                  href={`https://app.veeq.ai${i18n.language === 'tr' ? '/tr' : ''}/register`}
                  className="inline-block bg-black text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-gray-800 transition-colors mb-6"
                >
                  {t('voiceCloningPage.cta.button')}
                </a>
                */}
                <div className="inline-block bg-gray-400 text-white px-12 py-6 rounded-xl font-bold text-xl cursor-not-allowed mb-6">
                  Coming Soon
                </div>
                <div className="text-gray-600 text-lg mb-4">
                  {t('voiceCloningPage.cta.offer')}
                </div>
                <div className="text-sm text-gray-500">
                  {t('voiceCloningPage.cta.promise')}
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

export default VoiceCloningPage