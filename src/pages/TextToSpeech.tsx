import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'

const TextToSpeechPage: React.FC = () => {
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
                  {t('textToSpeechPage.hero.title')}
                </h1>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
                  {t('textToSpeechPage.hero.subtitle')}
                </p>
                
                {/* Quick Stats */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="text-3xl font-bold text-black mb-2">{t('textToSpeechPage.stats.monthlySavings.value')}</div>
                    <div className="text-gray-600">{t('textToSpeechPage.stats.monthlySavings.label')}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="text-3xl font-bold text-black mb-2">{t('textToSpeechPage.stats.creationTime.value')}</div>
                    <div className="text-gray-600">{t('textToSpeechPage.stats.creationTime.label')}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="text-3xl font-bold text-black mb-2">{t('textToSpeechPage.stats.languages.value')}</div>
                    <div className="text-gray-600">{t('textToSpeechPage.stats.languages.label')}</div>
                  </div>
                </div>
              </div>

              {/* Problem Section */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
                <h2 className="text-3xl font-bold text-black mb-8 text-center">
                  {t('textToSpeechPage.problemSection.title')}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-6">{t('textToSpeechPage.problemSection.traditional.title')}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-600 font-bold">✗</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('textToSpeechPage.problemSection.traditional.problem1.title')}</h4>
                          <p className="text-gray-600">{t('textToSpeechPage.problemSection.traditional.problem1.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-600 font-bold">✗</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('textToSpeechPage.problemSection.traditional.problem2.title')}</h4>
                          <p className="text-gray-600">{t('textToSpeechPage.problemSection.traditional.problem2.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-600 font-bold">✗</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('textToSpeechPage.problemSection.traditional.problem3.title')}</h4>
                          <p className="text-gray-600">{t('textToSpeechPage.problemSection.traditional.problem3.description')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-black mb-6">{t('textToSpeechPage.problemSection.veeqWay.title')}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('textToSpeechPage.problemSection.veeqWay.benefit1.title')}</h4>
                          <p className="text-gray-600">{t('textToSpeechPage.problemSection.veeqWay.benefit1.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('textToSpeechPage.problemSection.veeqWay.benefit2.title')}</h4>
                          <p className="text-gray-600">{t('textToSpeechPage.problemSection.veeqWay.benefit2.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('textToSpeechPage.problemSection.veeqWay.benefit3.title')}</h4>
                          <p className="text-gray-600">{t('textToSpeechPage.problemSection.veeqWay.benefit3.description')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-white rounded-xl p-8 border border-gray-200">
                  <h4 className="text-2xl font-bold text-black mb-4">
                    {t('textToSpeechPage.problemSection.savingsHighlight.title')}
                  </h4>
                  <p className="text-gray-600">
                    {t('textToSpeechPage.problemSection.savingsHighlight.description')}
                  </p>
                </div>
              </div>

              {/* Voice Types Section */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-black mb-8 text-center">
                  {t('textToSpeechPage.voiceTypes.title')}
                </h2>
                <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
                  {t('textToSpeechPage.voiceTypes.subtitle')}
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-2xl font-bold text-black mb-4 text-center">{t('textToSpeechPage.voiceTypes.categories.educational.title')}</h3>
                    <div className="space-y-3">
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('textToSpeechPage.voiceTypes.categories.educational.voice1.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('textToSpeechPage.voiceTypes.categories.educational.voice1.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('textToSpeechPage.voiceTypes.categories.educational.voice2.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('textToSpeechPage.voiceTypes.categories.educational.voice2.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('textToSpeechPage.voiceTypes.categories.educational.voice3.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('textToSpeechPage.voiceTypes.categories.educational.voice3.description')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-2xl font-bold text-black mb-4 text-center">{t('textToSpeechPage.voiceTypes.categories.business.title')}</h3>
                    <div className="space-y-3">
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('textToSpeechPage.voiceTypes.categories.business.voice1.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('textToSpeechPage.voiceTypes.categories.business.voice1.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('textToSpeechPage.voiceTypes.categories.business.voice2.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('textToSpeechPage.voiceTypes.categories.business.voice2.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('textToSpeechPage.voiceTypes.categories.business.voice3.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('textToSpeechPage.voiceTypes.categories.business.voice3.description')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-2xl font-bold text-black mb-4 text-center">{t('textToSpeechPage.voiceTypes.categories.entertainment.title')}</h3>
                    <div className="space-y-3">
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('textToSpeechPage.voiceTypes.categories.entertainment.voice1.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('textToSpeechPage.voiceTypes.categories.entertainment.voice1.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('textToSpeechPage.voiceTypes.categories.entertainment.voice2.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('textToSpeechPage.voiceTypes.categories.entertainment.voice2.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black">{t('textToSpeechPage.voiceTypes.categories.entertainment.voice3.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('textToSpeechPage.voiceTypes.categories.entertainment.voice3.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
                <h2 className="text-3xl font-bold text-black mb-12 text-center">
                  {t('textToSpeechPage.howItWorks.title')}
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
                    <h3 className="text-xl font-bold text-black mb-4">{t('textToSpeechPage.howItWorks.step1.title')}</h3>
                    <p className="text-gray-600">
                      {t('textToSpeechPage.howItWorks.step1.description')}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
                    <h3 className="text-xl font-bold text-black mb-4">{t('textToSpeechPage.howItWorks.step2.title')}</h3>
                    <p className="text-gray-600">
                      {t('textToSpeechPage.howItWorks.step2.description')}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
                    <h3 className="text-xl font-bold text-black mb-4">{t('textToSpeechPage.howItWorks.step3.title')}</h3>
                    <p className="text-gray-600">
                      {t('textToSpeechPage.howItWorks.step3.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-black mb-12 text-center">
                  {t('textToSpeechPage.useCases.title')}
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{t('textToSpeechPage.useCases.case1.title')}</h3>
                      <p className="text-gray-600">{t('textToSpeechPage.useCases.case1.category')}</p>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      {t('textToSpeechPage.useCases.case1.testimonial')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-black">{t('textToSpeechPage.useCases.case1.stat1.value')}</div>
                        <div className="text-sm text-gray-600">{t('textToSpeechPage.useCases.case1.stat1.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{t('textToSpeechPage.useCases.case1.stat2.value')}</div>
                        <div className="text-sm text-gray-600">{t('textToSpeechPage.useCases.case1.stat2.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{t('textToSpeechPage.useCases.case2.title')}</h3>
                      <p className="text-gray-600">{t('textToSpeechPage.useCases.case2.category')}</p>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      {t('textToSpeechPage.useCases.case2.testimonial')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-black">{t('textToSpeechPage.useCases.case2.stat1.value')}</div>
                        <div className="text-sm text-gray-600">{t('textToSpeechPage.useCases.case2.stat1.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{t('textToSpeechPage.useCases.case2.stat2.value')}</div>
                        <div className="text-sm text-gray-600">{t('textToSpeechPage.useCases.case2.stat2.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{t('textToSpeechPage.useCases.case3.title')}</h3>
                      <p className="text-gray-600">{t('textToSpeechPage.useCases.case3.category')}</p>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      {t('textToSpeechPage.useCases.case3.testimonial')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-black">{t('textToSpeechPage.useCases.case3.stat1.value')}</div>
                        <div className="text-sm text-gray-600">{t('textToSpeechPage.useCases.case3.stat1.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{t('textToSpeechPage.useCases.case3.stat2.value')}</div>
                        <div className="text-sm text-gray-600">{t('textToSpeechPage.useCases.case3.stat2.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{t('textToSpeechPage.useCases.case4.title')}</h3>
                      <p className="text-gray-600">{t('textToSpeechPage.useCases.case4.category')}</p>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      {t('textToSpeechPage.useCases.case4.testimonial')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-black">{t('textToSpeechPage.useCases.case4.stat1.value')}</div>
                        <div className="text-sm text-gray-600">{t('textToSpeechPage.useCases.case4.stat1.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{t('textToSpeechPage.useCases.case4.stat2.value')}</div>
                        <div className="text-sm text-gray-600">{t('textToSpeechPage.useCases.case4.stat2.label')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison - Clean Version */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
                <h2 className="text-3xl font-bold text-black mb-12 text-center">
                  {t('textToSpeechPage.comparison.title')}
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-xl font-bold text-black mb-8 text-center">{t('textToSpeechPage.comparison.freelance.title')}</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('textToSpeechPage.comparison.freelance.cost.value')}</div>
                        <div className="text-gray-600">{t('textToSpeechPage.comparison.freelance.cost.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('textToSpeechPage.comparison.freelance.time.value')}</div>
                        <div className="text-gray-600">{t('textToSpeechPage.comparison.freelance.time.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('textToSpeechPage.comparison.freelance.availability.value')}</div>
                        <div className="text-gray-600">{t('textToSpeechPage.comparison.freelance.availability.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-xl font-bold text-black mb-8 text-center">{t('textToSpeechPage.comparison.studios.title')}</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('textToSpeechPage.comparison.studios.cost.value')}</div>
                        <div className="text-gray-600">{t('textToSpeechPage.comparison.studios.cost.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('textToSpeechPage.comparison.studios.booking.value')}</div>
                        <div className="text-gray-600">{t('textToSpeechPage.comparison.studios.booking.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('textToSpeechPage.comparison.studios.revisions.value')}</div>
                        <div className="text-gray-600">{t('textToSpeechPage.comparison.studios.revisions.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black rounded-xl p-8">
                    <h3 className="text-xl font-bold text-white mb-8 text-center">{t('textToSpeechPage.comparison.veeq.title')}</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{t('textToSpeechPage.comparison.veeq.cost.value')}</div>
                        <div className="text-gray-300">{t('textToSpeechPage.comparison.veeq.cost.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{t('textToSpeechPage.comparison.veeq.speed.value')}</div>
                        <div className="text-gray-300">{t('textToSpeechPage.comparison.veeq.speed.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{t('textToSpeechPage.comparison.veeq.revisions.value')}</div>
                        <div className="text-gray-300">{t('textToSpeechPage.comparison.veeq.revisions.label')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <div className="text-2xl font-bold text-black mb-2">
                    {t('textToSpeechPage.comparison.savings.title')}
                  </div>
                  <div className="text-gray-600">
                    {t('textToSpeechPage.comparison.savings.subtitle')}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <h2 className="text-4xl font-bold text-black mb-6">
                  {t('textToSpeechPage.cta.title')}
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  {t('textToSpeechPage.cta.subtitle')}
                </p>
                
                <a
                  href="http://localhost:5173/register"
                  className="inline-block bg-black text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-gray-800 transition-colors mb-6"
                >
                  {t('textToSpeechPage.cta.button')}
                </a>
                <div className="text-gray-600 text-lg mb-4">
                  {t('textToSpeechPage.cta.offer')}
                </div>
                <div className="text-sm text-gray-500">
                  {t('textToSpeechPage.cta.promise')}
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

export default TextToSpeechPage