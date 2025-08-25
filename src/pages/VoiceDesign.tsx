import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import Header from '../components/Header'
import Footer from '../components/Footer'

const VoiceDesignPage: React.FC = () => {
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
                  {t('voiceDesign.hero.title')}
                </h1>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
                  {t('voiceDesign.hero.subtitle')}
                </p>
                
                {/* Quick Stats */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="text-3xl font-bold text-black mb-2">{t('voiceDesign.stats.textOnly.title')}</div>
                    <div className="text-gray-600">{t('voiceDesign.stats.textOnly.description')}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="text-3xl font-bold text-black mb-2">{t('voiceDesign.stats.time.title')}</div>
                    <div className="text-gray-600">{t('voiceDesign.stats.time.description')}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="text-3xl font-bold text-black mb-2">{t('voiceDesign.stats.unlimited.title')}</div>
                    <div className="text-gray-600">{t('voiceDesign.stats.unlimited.description')}</div>
                  </div>
                </div>
              </div>

              {/* Problem Section */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
                <h2 className="text-3xl font-bold text-black mb-8 text-center">
                  {t('voiceDesign.problem.title')}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-6">{t('voiceDesign.problem.limitedOptions.title')}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-600 font-bold">✗</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceDesign.problem.limitedOptions.generic.title')}</h4>
                          <p className="text-gray-600">{t('voiceDesign.problem.limitedOptions.generic.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-600 font-bold">✗</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceDesign.problem.limitedOptions.noFit.title')}</h4>
                          <p className="text-gray-600">{t('voiceDesign.problem.limitedOptions.noFit.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-600 font-bold">✗</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceDesign.problem.limitedOptions.expensive.title')}</h4>
                          <p className="text-gray-600">{t('voiceDesign.problem.limitedOptions.expensive.description')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-black mb-6">{t('voiceDesign.solution.title')}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceDesign.solution.infinite.title')}</h4>
                          <p className="text-gray-600">{t('voiceDesign.solution.infinite.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceDesign.solution.brandMatch.title')}</h4>
                          <p className="text-gray-600">{t('voiceDesign.solution.brandMatch.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceDesign.solution.instant.title')}</h4>
                          <p className="text-gray-600">{t('voiceDesign.solution.instant.description')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-white rounded-xl p-8 border border-gray-200">
                  <h4 className="text-2xl font-bold text-black mb-4">
                    {t('voiceDesign.example.description')}
                  </h4>
                  <p className="text-gray-600">
                    {t('voiceDesign.example.explanation')}
                  </p>
                </div>
              </div>

              {/* Voice Characteristics Section */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-black mb-8 text-center">
                  {t('voiceDesign.characteristics.title')}
                </h2>
                <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
                  {t('voiceDesign.characteristics.subtitle')}
                </p>

                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-2xl font-bold text-black mb-6">{t('voiceDesign.characteristics.basic.title')}</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceDesign.characteristics.basic.age.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceDesign.characteristics.basic.age.options')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceDesign.characteristics.basic.gender.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceDesign.characteristics.basic.gender.options')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceDesign.characteristics.basic.accent.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceDesign.characteristics.basic.accent.options')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceDesign.characteristics.basic.pace.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceDesign.characteristics.basic.pace.options')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-2xl font-bold text-black mb-6">{t('voiceDesign.characteristics.personality.title')}</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceDesign.characteristics.personality.emotional.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceDesign.characteristics.personality.emotional.options')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceDesign.characteristics.personality.energy.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceDesign.characteristics.personality.energy.options')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceDesign.characteristics.personality.style.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceDesign.characteristics.personality.style.options')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceDesign.characteristics.personality.traits.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceDesign.characteristics.personality.traits.options')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
                  <h3 className="text-2xl font-bold text-black mb-6 text-center">{t('voiceDesign.examples.title')}</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <h4 className="font-bold text-black mb-2">{t('voiceDesign.examples.corporate.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('voiceDesign.examples.corporate.description')}</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-black mb-2">{t('voiceDesign.examples.teacher.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('voiceDesign.examples.teacher.description')}</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-black mb-2">{t('voiceDesign.examples.narrator.title')}</h4>
                      <p className="text-gray-600 text-sm">{t('voiceDesign.examples.narrator.description')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
                <h2 className="text-3xl font-bold text-black mb-12 text-center">
                  {t('voiceDesign.howItWorks.title')}
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
                    <h3 className="text-xl font-bold text-black mb-4">{t('voiceDesign.howItWorks.step1.title')}</h3>
                    <p className="text-gray-600">
                      {t('voiceDesign.howItWorks.step1.description')}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
                    <h3 className="text-xl font-bold text-black mb-4">{t('voiceDesign.howItWorks.step2.title')}</h3>
                    <p className="text-gray-600">
                      {t('voiceDesign.howItWorks.step2.description')}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
                    <h3 className="text-xl font-bold text-black mb-4">{t('voiceDesign.howItWorks.step3.title')}</h3>
                    <p className="text-gray-600">
                      {t('voiceDesign.howItWorks.step3.description')}
                    </p>
                  </div>
                </div>

                <div className="mt-12 text-center bg-white rounded-xl p-8 border border-gray-200">
                  <h4 className="text-xl font-bold text-black mb-4">{t('voiceDesign.tips.title')}</h4>
                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div>
                      <h5 className="font-bold text-black mb-2">{t('voiceDesign.tips.specific.title')}</h5>
                      <p className="text-gray-600 text-sm">{t('voiceDesign.tips.specific.description')}</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-black mb-2">{t('voiceDesign.tips.context.title')}</h5>
                      <p className="text-gray-600 text-sm">{t('voiceDesign.tips.context.description')}</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-black mb-2">{t('voiceDesign.tips.iterate.title')}</h5>
                      <p className="text-gray-600 text-sm">{t('voiceDesign.tips.iterate.description')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-black mb-12 text-center">
                  {t('voiceDesign.useCases.title')}
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{t('voiceDesign.useCases.brandDesigner.title')}</h3>
                      <p className="text-gray-600">{t('voiceDesign.useCases.brandDesigner.subtitle')}</p>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      {t('voiceDesign.useCases.brandDesigner.quote')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceDesign.useCases.brandDesigner.stat1.number')}</div>
                        <div className="text-sm text-gray-600">{t('voiceDesign.useCases.brandDesigner.stat1.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceDesign.useCases.brandDesigner.stat2.number')}</div>
                        <div className="text-sm text-gray-600">{t('voiceDesign.useCases.brandDesigner.stat2.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{t('voiceDesign.useCases.gameDeveloper.title')}</h3>
                      <p className="text-gray-600">{t('voiceDesign.useCases.gameDeveloper.subtitle')}</p>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      {t('voiceDesign.useCases.gameDeveloper.quote')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceDesign.useCases.gameDeveloper.stat1.number')}</div>
                        <div className="text-sm text-gray-600">{t('voiceDesign.useCases.gameDeveloper.stat1.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceDesign.useCases.gameDeveloper.stat2.number')}</div>
                        <div className="text-sm text-gray-600">{t('voiceDesign.useCases.gameDeveloper.stat2.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{t('voiceDesign.useCases.elearning.title')}</h3>
                      <p className="text-gray-600">{t('voiceDesign.useCases.elearning.subtitle')}</p>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      {t('voiceDesign.useCases.elearning.quote')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceDesign.useCases.elearning.stat1.number')}</div>
                        <div className="text-sm text-gray-600">{t('voiceDesign.useCases.elearning.stat1.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceDesign.useCases.elearning.stat2.number')}</div>
                        <div className="text-sm text-gray-600">{t('voiceDesign.useCases.elearning.stat2.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{t('voiceDesign.useCases.podcast.title')}</h3>
                      <p className="text-gray-600">{t('voiceDesign.useCases.podcast.subtitle')}</p>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      {t('voiceDesign.useCases.podcast.quote')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceDesign.useCases.podcast.stat1.number')}</div>
                        <div className="text-sm text-gray-600">{t('voiceDesign.useCases.podcast.stat1.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceDesign.useCases.podcast.stat2.number')}</div>
                        <div className="text-sm text-gray-600">{t('voiceDesign.useCases.podcast.stat2.label')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
                <h2 className="text-3xl font-bold text-black mb-12 text-center">
                  {t('voiceDesign.comparison.title')}
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-xl font-bold text-black mb-8 text-center">{t('voiceDesign.comparison.casting.title')}</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('voiceDesign.comparison.casting.time.number')}</div>
                        <div className="text-gray-600">{t('voiceDesign.comparison.casting.time.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('voiceDesign.comparison.casting.cost.number')}</div>
                        <div className="text-gray-600">{t('voiceDesign.comparison.casting.cost.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('voiceDesign.comparison.casting.talent.number')}</div>
                        <div className="text-gray-600">{t('voiceDesign.comparison.casting.talent.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-xl font-bold text-black mb-8 text-center">{t('voiceDesign.comparison.libraries.title')}</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('voiceDesign.comparison.libraries.voices.number')}</div>
                        <div className="text-gray-600">{t('voiceDesign.comparison.libraries.voices.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('voiceDesign.comparison.libraries.uniqueness.number')}</div>
                        <div className="text-gray-600">{t('voiceDesign.comparison.libraries.uniqueness.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('voiceDesign.comparison.libraries.control.number')}</div>
                        <div className="text-gray-600">{t('voiceDesign.comparison.libraries.control.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black rounded-xl p-8">
                    <h3 className="text-xl font-bold text-white mb-8 text-center">{t('voiceDesign.comparison.veeq.title')}</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{t('voiceDesign.comparison.veeq.time.number')}</div>
                        <div className="text-gray-300">{t('voiceDesign.comparison.veeq.time.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{t('voiceDesign.comparison.veeq.combinations.number')}</div>
                        <div className="text-gray-300">{t('voiceDesign.comparison.veeq.combinations.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{t('voiceDesign.comparison.veeq.control.number')}</div>
                        <div className="text-gray-300">{t('voiceDesign.comparison.veeq.control.label')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <div className="text-2xl font-bold text-black mb-2">
                    {t('voiceDesign.comparison.conclusion.title')}
                  </div>
                  <div className="text-gray-600">
                    {t('voiceDesign.comparison.conclusion.subtitle')}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <h2 className="text-4xl font-bold text-black mb-6">
                  {t('voiceDesign.cta.title')}
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  {t('voiceDesign.cta.subtitle')}
                </p>
                
                {/* Temporarily commented out - Coming Soon
                <a
                  href={`https://app.veeq.ai${i18n.language === 'tr' ? '/tr' : ''}/register`}
                  className="inline-block bg-black text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-gray-800 transition-colors mb-6"
                >
                  {t('voiceDesign.cta.button')}
                </a>
                */}
                <div className="inline-block bg-gray-400 text-white px-12 py-6 rounded-xl font-bold text-xl cursor-not-allowed mb-6">
                  Coming Soon
                </div>
                <div className="text-gray-600 text-lg mb-4">
                  {t('voiceDesign.cta.features')}
                </div>
                <div className="text-sm text-gray-500">
                  {t('voiceDesign.cta.promise')}
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

export default VoiceDesignPage