import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import Header from '../components/Header'
import Footer from '../components/Footer'

const VoiceIsolatorPage: React.FC = () => {
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
                  {t('voiceIsolatorPage.hero.title')}
                </h1>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
                  {t('voiceIsolatorPage.hero.subtitle')}
                </p>
                
                {/* Quick Stats */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="text-3xl font-bold text-black mb-2">{t('voiceIsolatorPage.stats.aiPowered.title')}</div>
                    <div className="text-gray-600">{t('voiceIsolatorPage.stats.aiPowered.description')}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="text-3xl font-bold text-black mb-2">{t('voiceIsolatorPage.stats.processingTime.title')}</div>
                    <div className="text-gray-600">{t('voiceIsolatorPage.stats.processingTime.description')}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="text-3xl font-bold text-black mb-2">{t('voiceIsolatorPage.stats.quality.title')}</div>
                    <div className="text-gray-600">{t('voiceIsolatorPage.stats.quality.description')}</div>
                  </div>
                </div>
              </div>

              {/* Problem Section */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
                <h2 className="text-3xl font-bold text-black mb-8 text-center">
                  {t('voiceIsolatorPage.problem.title')}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-6">{t('voiceIsolatorPage.problem.common.title')}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-600 font-bold">✗</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.problem.common.noise.title')}</h4>
                          <p className="text-gray-600">{t('voiceIsolatorPage.problem.common.noise.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-600 font-bold">✗</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.problem.common.echo.title')}</h4>
                          <p className="text-gray-600">{t('voiceIsolatorPage.problem.common.echo.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-600 font-bold">✗</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.problem.common.calls.title')}</h4>
                          <p className="text-gray-600">{t('voiceIsolatorPage.problem.common.calls.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-600 font-bold">✗</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.problem.common.studio.title')}</h4>
                          <p className="text-gray-600">{t('voiceIsolatorPage.problem.common.studio.description')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-black mb-6">{t('voiceIsolatorPage.problem.solution.title')}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.problem.solution.removeNoise.title')}</h4>
                          <p className="text-gray-600">{t('voiceIsolatorPage.problem.solution.removeNoise.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.problem.solution.eliminateEcho.title')}</h4>
                          <p className="text-gray-600">{t('voiceIsolatorPage.problem.solution.eliminateEcho.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.problem.solution.enhanceVoice.title')}</h4>
                          <p className="text-gray-600">{t('voiceIsolatorPage.problem.solution.enhanceVoice.description')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.problem.solution.saveThousands.title')}</h4>
                          <p className="text-gray-600">{t('voiceIsolatorPage.problem.solution.saveThousands.description')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-white rounded-xl p-8 border border-gray-200">
                  <h4 className="text-2xl font-bold text-black mb-4">
                    {t('voiceIsolatorPage.problem.highlight.title')}
                  </h4>
                  <p className="text-gray-600">
                    {t('voiceIsolatorPage.problem.highlight.description')}
                  </p>
                </div>
              </div>

              {/* What We Fix Section */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-black mb-8 text-center">
                  {t('voiceIsolatorPage.fixProblems.title')}
                </h2>
                <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
                  {t('voiceIsolatorPage.fixProblems.subtitle')}
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-2xl font-bold text-black mb-4 text-center">{t('voiceIsolatorPage.fixProblems.backgroundNoise.title')}</h3>
                    <div className="space-y-3">
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.fixProblems.backgroundNoise.traffic.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceIsolatorPage.fixProblems.backgroundNoise.traffic.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.fixProblems.backgroundNoise.ac.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceIsolatorPage.fixProblems.backgroundNoise.ac.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.fixProblems.backgroundNoise.office.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceIsolatorPage.fixProblems.backgroundNoise.office.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.fixProblems.backgroundNoise.home.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceIsolatorPage.fixProblems.backgroundNoise.home.description')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-2xl font-bold text-black mb-4 text-center">{t('voiceIsolatorPage.fixProblems.roomAcoustics.title')}</h3>
                    <div className="space-y-3">
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.fixProblems.roomAcoustics.echo.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceIsolatorPage.fixProblems.roomAcoustics.echo.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.fixProblems.roomAcoustics.bathroom.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceIsolatorPage.fixProblems.roomAcoustics.bathroom.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.fixProblems.roomAcoustics.untreated.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceIsolatorPage.fixProblems.roomAcoustics.untreated.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.fixProblems.roomAcoustics.outdoor.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceIsolatorPage.fixProblems.roomAcoustics.outdoor.description')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-2xl font-bold text-black mb-4 text-center">{t('voiceIsolatorPage.fixProblems.technicalIssues.title')}</h3>
                    <div className="space-y-3">
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.fixProblems.technicalIssues.phone.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceIsolatorPage.fixProblems.technicalIssues.phone.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.fixProblems.technicalIssues.videoCalls.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceIsolatorPage.fixProblems.technicalIssues.videoCalls.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.fixProblems.technicalIssues.poorMics.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceIsolatorPage.fixProblems.technicalIssues.poorMics.description')}</p>
                      </div>
                      <div className="border-l-4 border-black pl-4">
                        <h4 className="font-bold text-black mb-1">{t('voiceIsolatorPage.fixProblems.technicalIssues.interference.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('voiceIsolatorPage.fixProblems.technicalIssues.interference.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
                <h2 className="text-3xl font-bold text-black mb-12 text-center">
                  {t('voiceIsolatorPage.howItWorks.title')}
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
                    <h3 className="text-xl font-bold text-black mb-4">{t('voiceIsolatorPage.howItWorks.step1.title')}</h3>
                    <p className="text-gray-600">
                      {t('voiceIsolatorPage.howItWorks.step1.description')}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
                    <h3 className="text-xl font-bold text-black mb-4">{t('voiceIsolatorPage.howItWorks.step2.title')}</h3>
                    <p className="text-gray-600">
                      {t('voiceIsolatorPage.howItWorks.step2.description')}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
                    <h3 className="text-xl font-bold text-black mb-4">{t('voiceIsolatorPage.howItWorks.step3.title')}</h3>
                    <p className="text-gray-600">
                      {t('voiceIsolatorPage.howItWorks.step3.description')}
                    </p>
                  </div>
                </div>

                <div className="mt-12 text-center bg-white rounded-xl p-8 border border-gray-200">
                  <h4 className="text-xl font-bold text-black mb-4">{t('voiceIsolatorPage.howItWorks.formats.title')}</h4>
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div>
                      <h5 className="font-bold text-black mb-1">{t('voiceIsolatorPage.howItWorks.formats.mp3.title')}</h5>
                      <p className="text-gray-600 text-sm">{t('voiceIsolatorPage.howItWorks.formats.mp3.description')}</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-black mb-1">{t('voiceIsolatorPage.howItWorks.formats.wav.title')}</h5>
                      <p className="text-gray-600 text-sm">{t('voiceIsolatorPage.howItWorks.formats.wav.description')}</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-black mb-1">{t('voiceIsolatorPage.howItWorks.formats.m4a.title')}</h5>
                      <p className="text-gray-600 text-sm">{t('voiceIsolatorPage.howItWorks.formats.m4a.description')}</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-black mb-1">{t('voiceIsolatorPage.howItWorks.formats.flac.title')}</h5>
                      <p className="text-gray-600 text-sm">{t('voiceIsolatorPage.howItWorks.formats.flac.description')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Stories */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-black mb-12 text-center">
                  {t('voiceIsolatorPage.successStories.title')}
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{t('voiceIsolatorPage.successStories.case1.title')}</h3>
                      <p className="text-gray-600">{t('voiceIsolatorPage.successStories.case1.subtitle')}</p>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      {t('voiceIsolatorPage.successStories.case1.quote')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceIsolatorPage.successStories.case1.stat1.number')}</div>
                        <div className="text-sm text-gray-600">{t('voiceIsolatorPage.successStories.case1.stat1.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceIsolatorPage.successStories.case1.stat2.number')}</div>
                        <div className="text-sm text-gray-600">{t('voiceIsolatorPage.successStories.case1.stat2.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{t('voiceIsolatorPage.successStories.case2.title')}</h3>
                      <p className="text-gray-600">{t('voiceIsolatorPage.successStories.case2.subtitle')}</p>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      {t('voiceIsolatorPage.successStories.case2.quote')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceIsolatorPage.successStories.case2.stat1.number')}</div>
                        <div className="text-sm text-gray-600">{t('voiceIsolatorPage.successStories.case2.stat1.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceIsolatorPage.successStories.case2.stat2.number')}</div>
                        <div className="text-sm text-gray-600">{t('voiceIsolatorPage.successStories.case2.stat2.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{t('voiceIsolatorPage.successStories.case3.title')}</h3>
                      <p className="text-gray-600">{t('voiceIsolatorPage.successStories.case3.subtitle')}</p>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      {t('voiceIsolatorPage.successStories.case3.quote')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceIsolatorPage.successStories.case3.stat1.number')}</div>
                        <div className="text-sm text-gray-600">{t('voiceIsolatorPage.successStories.case3.stat1.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceIsolatorPage.successStories.case3.stat2.number')}</div>
                        <div className="text-sm text-gray-600">{t('voiceIsolatorPage.successStories.case3.stat2.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{t('voiceIsolatorPage.successStories.case4.title')}</h3>
                      <p className="text-gray-600">{t('voiceIsolatorPage.successStories.case4.subtitle')}</p>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      {t('voiceIsolatorPage.successStories.case4.quote')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceIsolatorPage.successStories.case4.stat1.number')}</div>
                        <div className="text-sm text-gray-600">{t('voiceIsolatorPage.successStories.case4.stat1.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{t('voiceIsolatorPage.successStories.case4.stat2.number')}</div>
                        <div className="text-sm text-gray-600">{t('voiceIsolatorPage.successStories.case4.stat2.label')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
                <h2 className="text-3xl font-bold text-black mb-12 text-center">
                  {t('voiceIsolatorPage.comparison.title')}
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-xl font-bold text-black mb-8 text-center">{t('voiceIsolatorPage.comparison.manual.title')}</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('voiceIsolatorPage.comparison.manual.time.value')}</div>
                        <div className="text-gray-600">{t('voiceIsolatorPage.comparison.manual.time.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('voiceIsolatorPage.comparison.manual.cost.value')}</div>
                        <div className="text-gray-600">{t('voiceIsolatorPage.comparison.manual.cost.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('voiceIsolatorPage.comparison.manual.quality.value')}</div>
                        <div className="text-gray-600">{t('voiceIsolatorPage.comparison.manual.quality.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-xl font-bold text-black mb-8 text-center">{t('voiceIsolatorPage.comparison.software.title')}</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('voiceIsolatorPage.comparison.software.learning.value')}</div>
                        <div className="text-gray-600">{t('voiceIsolatorPage.comparison.software.learning.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('voiceIsolatorPage.comparison.software.cost.value')}</div>
                        <div className="text-gray-600">{t('voiceIsolatorPage.comparison.software.cost.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">{t('voiceIsolatorPage.comparison.software.artifacts.value')}</div>
                        <div className="text-gray-600">{t('voiceIsolatorPage.comparison.software.artifacts.label')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black rounded-xl p-8">
                    <h3 className="text-xl font-bold text-white mb-8 text-center">{t('voiceIsolatorPage.comparison.veeq.title')}</h3>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{t('voiceIsolatorPage.comparison.veeq.speed.value')}</div>
                        <div className="text-gray-300">{t('voiceIsolatorPage.comparison.veeq.speed.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{t('voiceIsolatorPage.comparison.veeq.setup.value')}</div>
                        <div className="text-gray-300">{t('voiceIsolatorPage.comparison.veeq.setup.label')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{t('voiceIsolatorPage.comparison.veeq.quality.value')}</div>
                        <div className="text-gray-300">{t('voiceIsolatorPage.comparison.veeq.quality.label')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <div className="text-2xl font-bold text-black mb-2">
                    {t('voiceIsolatorPage.comparison.conclusion.title')}
                  </div>
                  <div className="text-gray-600">
                    {t('voiceIsolatorPage.comparison.conclusion.subtitle')}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <h2 className="text-4xl font-bold text-black mb-6">
                  {t('voiceIsolatorPage.cta.title')}
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  {t('voiceIsolatorPage.cta.subtitle')}
                </p>
                
                {/* Temporarily commented out - Coming Soon
                <a
                  href={`https://app.veeq.ai${i18n.language === 'tr' ? '/tr' : ''}/register`}
                  className="inline-block bg-black text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-gray-800 transition-colors mb-6"
                >
                  {t('voiceIsolatorPage.cta.button')}
                </a>
                */}
                <div className="inline-block bg-gray-400 text-white px-12 py-6 rounded-xl font-bold text-xl cursor-not-allowed mb-6">
                  Coming Soon
                </div>
                <div className="text-gray-600 text-lg mb-4">
                  {t('voiceIsolatorPage.cta.offer')}
                </div>
                <div className="text-sm text-gray-500">
                  {t('voiceIsolatorPage.cta.promise')}
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

export default VoiceIsolatorPage