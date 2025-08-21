import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MusicGeneratorPage: React.FC = () => {
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
                  {t('musicGeneratorPage.hero.title')}
                </h1>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
                  {t('musicGeneratorPage.hero.subtitle')}
                </p>
                
                {/* Quick Stats */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="text-3xl font-bold text-black mb-2">{t('musicGeneratorPage.stats.licensingFees.value')}</div>
                    <div className="text-gray-600">{t('musicGeneratorPage.stats.licensingFees.label')}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="text-3xl font-bold text-black mb-2">{t('musicGeneratorPage.stats.generationTime.value')}</div>
                    <div className="text-gray-600">{t('musicGeneratorPage.stats.generationTime.label')}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="text-3xl font-bold text-black mb-2">{t('musicGeneratorPage.stats.unlimited.value')}</div>
                    <div className="text-gray-600">{t('musicGeneratorPage.stats.unlimited.label')}</div>
                  </div>
                </div>
              </div>

              {/* Problem Section */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
                <h2 className="text-3xl font-bold text-black mb-8 text-center">
                  {t('musicGeneratorPage.problemSection.title')}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-6">{t('musicGeneratorPage.problemSection.traditional.title')}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-600 font-bold">✗</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('musicGeneratorPage.problemSection.traditional.problem1.title')}</h4>
                          <p className="text-gray-600">{t('musicGeneratorPage.problemSection.traditional.problem1.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-600 font-bold">✗</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('musicGeneratorPage.problemSection.traditional.problem2.title')}</h4>
                          <p className="text-gray-600">{t('musicGeneratorPage.problemSection.traditional.problem2.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-600 font-bold">✗</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('musicGeneratorPage.problemSection.traditional.problem3.title')}</h4>
                          <p className="text-gray-600">{t('musicGeneratorPage.problemSection.traditional.problem3.description')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-black mb-6">{t('musicGeneratorPage.problemSection.veeqWay.title')}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('musicGeneratorPage.problemSection.veeqWay.benefit1.title')}</h4>
                          <p className="text-gray-600">{t('musicGeneratorPage.problemSection.veeqWay.benefit1.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('musicGeneratorPage.problemSection.veeqWay.benefit2.title')}</h4>
                          <p className="text-gray-600">{t('musicGeneratorPage.problemSection.veeqWay.benefit2.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('musicGeneratorPage.problemSection.veeqWay.benefit3.title')}</h4>
                          <p className="text-gray-600">{t('musicGeneratorPage.problemSection.veeqWay.benefit3.description')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-white rounded-xl p-8 border border-gray-200">
                  <h4 className="text-2xl font-bold text-black mb-4">
                    {t('musicGeneratorPage.problemSection.savingsHighlight.title')}
                  </h4>
                  <p className="text-gray-600">
                    {t('musicGeneratorPage.problemSection.savingsHighlight.description')}
                  </p>
                </div>
              </div>

              {/* Music Styles Section */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-black mb-8 text-center">
                  {t('musicGeneratorPage.musicStyles.title')}
                </h2>
                <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
                  {t('musicGeneratorPage.musicStyles.subtitle')}
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
                    <h3 className="text-2xl font-bold text-black mb-4">{t('musicGeneratorPage.musicStyles.contentCreator.title')}</h3>
                    <div className="space-y-3 text-left">
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('musicGeneratorPage.musicStyles.contentCreator.lofi.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('musicGeneratorPage.musicStyles.contentCreator.lofi.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('musicGeneratorPage.musicStyles.contentCreator.electronic.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('musicGeneratorPage.musicStyles.contentCreator.electronic.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('musicGeneratorPage.musicStyles.contentCreator.cinematic.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('musicGeneratorPage.musicStyles.contentCreator.cinematic.description')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
                    <h3 className="text-2xl font-bold text-black mb-4">{t('musicGeneratorPage.musicStyles.business.title')}</h3>
                    <div className="space-y-3 text-left">
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('musicGeneratorPage.musicStyles.business.corporate.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('musicGeneratorPage.musicStyles.business.corporate.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('musicGeneratorPage.musicStyles.business.motivational.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('musicGeneratorPage.musicStyles.business.motivational.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('musicGeneratorPage.musicStyles.business.ambient.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('musicGeneratorPage.musicStyles.business.ambient.description')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
                    <h3 className="text-2xl font-bold text-black mb-4">{t('musicGeneratorPage.musicStyles.entertainment.title')}</h3>
                    <div className="space-y-3 text-left">
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('musicGeneratorPage.musicStyles.entertainment.orchestral.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('musicGeneratorPage.musicStyles.entertainment.orchestral.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('musicGeneratorPage.musicStyles.entertainment.jazz.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('musicGeneratorPage.musicStyles.entertainment.jazz.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('musicGeneratorPage.musicStyles.entertainment.rock.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('musicGeneratorPage.musicStyles.entertainment.rock.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
                <h2 className="text-3xl font-bold text-black mb-12 text-center">
                  {t('musicGeneratorPage.howItWorks.title')}
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
                    <h3 className="text-xl font-bold text-black mb-4">{t('musicGeneratorPage.howItWorks.step1.title')}</h3>
                    <p className="text-gray-600">
                      {t('musicGeneratorPage.howItWorks.step1.description')}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
                    <h3 className="text-xl font-bold text-black mb-4">{t('musicGeneratorPage.howItWorks.step2.title')}</h3>
                    <p className="text-gray-600">
                      {t('musicGeneratorPage.howItWorks.step2.description')}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
                    <h3 className="text-xl font-bold text-black mb-4">{t('musicGeneratorPage.howItWorks.step3.title')}</h3>
                    <p className="text-gray-600">
                      {t('musicGeneratorPage.howItWorks.step3.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Success Stories */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-black mb-12 text-center">
                  {t('musicGeneratorPage.successStories.title')}
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{t('musicGeneratorPage.successStories.case1.title')}</h3>
                      <p className="text-gray-600">{t('musicGeneratorPage.successStories.case1.category')}</p>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      {t('musicGeneratorPage.successStories.case1.testimonial')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-black">{t('musicGeneratorPage.successStories.case1.stat1.value')}</div>
                        <div className="text-sm text-gray-600">{t('musicGeneratorPage.successStories.case1.stat1.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{t('musicGeneratorPage.successStories.case1.stat2.value')}</div>
                        <div className="text-sm text-gray-600">{t('musicGeneratorPage.successStories.case1.stat2.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{t('musicGeneratorPage.successStories.case2.title')}</h3>
                      <p className="text-gray-600">{t('musicGeneratorPage.successStories.case2.category')}</p>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      {t('musicGeneratorPage.successStories.case2.testimonial')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-black">{t('musicGeneratorPage.successStories.case2.stat1.value')}</div>
                        <div className="text-sm text-gray-600">{t('musicGeneratorPage.successStories.case2.stat1.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{t('musicGeneratorPage.successStories.case2.stat2.value')}</div>
                        <div className="text-sm text-gray-600">{t('musicGeneratorPage.successStories.case2.stat2.label')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison - Clean Version */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
                <h2 className="text-3xl font-bold text-black mb-12 text-center">
                  {t('musicGeneratorPage.comparison.title')}
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-xl font-bold text-black mb-8 text-center">{t('musicGeneratorPage.comparison.libraries.title')}</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('musicGeneratorPage.comparison.libraries.cost.value')}</div>
                        <div className="text-gray-600">{t('musicGeneratorPage.comparison.libraries.cost.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('musicGeneratorPage.comparison.libraries.rights.value')}</div>
                        <div className="text-gray-600">{t('musicGeneratorPage.comparison.libraries.rights.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('musicGeneratorPage.comparison.libraries.content.value')}</div>
                        <div className="text-gray-600">{t('musicGeneratorPage.comparison.libraries.content.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-xl font-bold text-black mb-8 text-center">{t('musicGeneratorPage.comparison.producers.title')}</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('musicGeneratorPage.comparison.producers.cost.value')}</div>
                        <div className="text-gray-600">{t('musicGeneratorPage.comparison.producers.cost.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('musicGeneratorPage.comparison.producers.time.value')}</div>
                        <div className="text-gray-600">{t('musicGeneratorPage.comparison.producers.time.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('musicGeneratorPage.comparison.producers.contracts.value')}</div>
                        <div className="text-gray-600">{t('musicGeneratorPage.comparison.producers.contracts.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black rounded-xl p-8">
                    <h3 className="text-xl font-bold text-white mb-8 text-center">{t('musicGeneratorPage.comparison.veeq.title')}</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{t('musicGeneratorPage.comparison.veeq.cost.value')}</div>
                        <div className="text-gray-300">{t('musicGeneratorPage.comparison.veeq.cost.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{t('musicGeneratorPage.comparison.veeq.time.value')}</div>
                        <div className="text-gray-300">{t('musicGeneratorPage.comparison.veeq.time.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{t('musicGeneratorPage.comparison.veeq.ownership.value')}</div>
                        <div className="text-gray-300">{t('musicGeneratorPage.comparison.veeq.ownership.label')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <div className="text-2xl font-bold text-black mb-2">
                    {t('musicGeneratorPage.comparison.savings.title')}
                  </div>
                  <div className="text-gray-600">
                    {t('musicGeneratorPage.comparison.savings.description')}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <h2 className="text-4xl font-bold text-black mb-6">
                  {t('musicGeneratorPage.cta.title')}
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  {t('musicGeneratorPage.cta.subtitle')}
                </p>
                
                <a
                  href={`https://app.veeq.ai${i18n.language === 'tr' ? '/tr' : ''}/register`}
                  className="inline-block bg-black text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-gray-800 transition-colors mb-6"
                >
                  {t('musicGeneratorPage.cta.button')}
                </a>
                <div className="text-gray-600 text-lg mb-4">
                  {t('musicGeneratorPage.cta.offer')}
                </div>
                <div className="text-sm text-gray-500">
                  {t('musicGeneratorPage.cta.promise')}
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

export default MusicGeneratorPage