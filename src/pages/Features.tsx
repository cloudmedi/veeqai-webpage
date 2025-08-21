import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'

const FeaturesPage: React.FC = () => {
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
              {/* Main Title */}
              <div className="text-center mb-8">
                <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
                  {t('features.mainTitle')}
                </h1>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
                  {t('features.mainDescription')}
                </p>
              </div>

              {/* Revolutionary AI Voice Technology */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 mb-12">
                
                {/* Text-to-Speech */}
                <div className="mb-16">
                  <h3 className="text-3xl font-bold text-black mb-6">{t('features.textToSpeech.title')}</h3>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    {t('features.textToSpeech.description')}
                  </p>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <div className="text-3xl font-bold text-black mb-2">12+</div>
                      <div className="text-gray-600">{t('features.textToSpeech.stat1')}</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-black mb-2">$2,400</div>
                      <div className="text-gray-600">{t('features.textToSpeech.stat2')}</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-black mb-2">2min</div>
                      <div className="text-gray-600">{t('features.textToSpeech.stat3')}</div>
                    </div>
                  </div>
                </div>

                {/* Music Generation */}
                <div className="mb-16">
                  <h3 className="text-3xl font-bold text-black mb-6">{t('features.musicGeneration.title')}</h3>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    {t('features.musicGeneration.description')}
                  </p>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <div className="text-3xl font-bold text-black mb-2">∞</div>
                      <div className="text-gray-600">{t('features.musicGeneration.stat1')}</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-black mb-2">$500</div>
                      <div className="text-gray-600">{t('features.musicGeneration.stat2')}</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-black mb-2">0</div>
                      <div className="text-gray-600">{t('features.musicGeneration.stat3')}</div>
                    </div>
                  </div>
                </div>

                {/* Voice Cloning */}
                <div className="mb-16">
                  <h3 className="text-3xl font-bold text-black mb-6">{t('features.voiceCloning.title')}</h3>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    {t('features.voiceCloning.description')}
                  </p>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <div className="text-3xl font-bold text-black mb-2">1x</div>
                      <div className="text-gray-600">{t('features.voiceCloning.stat1')}</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-black mb-2">24/7</div>
                      <div className="text-gray-600">{t('features.voiceCloning.stat2')}</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-black mb-2">100%</div>
                      <div className="text-gray-600">{t('features.voiceCloning.stat3')}</div>
                    </div>
                  </div>
                </div>

                {/* Voice Design */}
                <div className="mb-16">
                  <h3 className="text-3xl font-bold text-black mb-6">{t('features.voiceDesign.title')}</h3>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    {t('features.voiceDesign.description')}
                  </p>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <div className="text-3xl font-bold text-black mb-2">∞</div>
                      <div className="text-gray-600">{t('features.voiceDesign.stat1')}</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-black mb-2">$0</div>
                      <div className="text-gray-600">{t('features.voiceDesign.stat2')}</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-black mb-2">30sec</div>
                      <div className="text-gray-600">{t('features.voiceDesign.stat3')}</div>
                    </div>
                  </div>
                </div>

                {/* Voice Isolator */}
                <div>
                  <h3 className="text-3xl font-bold text-black mb-6">{t('features.voiceIsolator.title')}</h3>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    {t('features.voiceIsolator.description')}
                  </p>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <div className="text-3xl font-bold text-black mb-2">✓</div>
                      <div className="text-gray-600">{t('features.voiceIsolator.stat1')}</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-black mb-2">✓</div>
                      <div className="text-gray-600">{t('features.voiceIsolator.stat2')}</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-black mb-2">✓</div>
                      <div className="text-gray-600">{t('features.voiceIsolator.stat3')}</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Why Choose Veeq AI */}
              <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
                <div>
                  <div className="text-4xl font-bold text-black mb-2">10x</div>
                  <div className="text-gray-600">{t('features.whyChoose.stat1')}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-black mb-2">95%</div>
                  <div className="text-gray-600">{t('features.whyChoose.stat2')}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-black mb-2">24/7</div>
                  <div className="text-gray-600">{t('features.whyChoose.stat3')}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-black mb-2">∞</div>
                  <div className="text-gray-600">{t('features.whyChoose.stat4')}</div>
                </div>
              </div>

              {/* Success Stories & Use Cases */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-black mb-12 text-center">{t('features.successStories.title')}</h2>
                
                <div className="bg-white rounded-xl border border-gray-200 p-12">
                  <div className="grid md:grid-cols-2 gap-16 mb-12">
                    
                    {/* Content Creators */}
                    <div>
                      <h4 className="text-2xl font-bold text-black mb-6">{t('features.successStories.contentCreators.title')}</h4>
                      <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                        {t('features.successStories.contentCreators.description')}
                      </p>
                      
                      <div className="space-y-6">
                        <div className="border-l-4 border-black pl-6">
                          <h5 className="font-bold text-black mb-2">{t('features.successStories.contentCreators.useCase1.title')}</h5>
                          <p className="text-gray-600">{t('features.successStories.contentCreators.useCase1.description')}</p>
                        </div>
                        <div className="border-l-4 border-black pl-6">
                          <h5 className="font-bold text-black mb-2">{t('features.successStories.contentCreators.useCase2.title')}</h5>
                          <p className="text-gray-600">{t('features.successStories.contentCreators.useCase2.description')}</p>
                        </div>
                        <div className="border-l-4 border-black pl-6">
                          <h5 className="font-bold text-black mb-2">{t('features.successStories.contentCreators.useCase3.title')}</h5>
                          <p className="text-gray-600">{t('features.successStories.contentCreators.useCase3.description')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Businesses */}
                    <div>
                      <h4 className="text-2xl font-bold text-black mb-6">{t('features.successStories.businesses.title')}</h4>
                      <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                        {t('features.successStories.businesses.description')}
                      </p>
                      
                      <div className="space-y-6">
                        <div className="border-l-4 border-black pl-6">
                          <h5 className="font-bold text-black mb-2">{t('features.successStories.businesses.useCase1.title')}</h5>
                          <p className="text-gray-600">{t('features.successStories.businesses.useCase1.description')}</p>
                        </div>
                        <div className="border-l-4 border-black pl-6">
                          <h5 className="font-bold text-black mb-2">{t('features.successStories.businesses.useCase2.title')}</h5>
                          <p className="text-gray-600">{t('features.successStories.businesses.useCase2.description')}</p>
                        </div>
                        <div className="border-l-4 border-black pl-6">
                          <h5 className="font-bold text-black mb-2">{t('features.successStories.businesses.useCase3.title')}</h5>
                          <p className="text-gray-600">{t('features.successStories.businesses.useCase3.description')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Combined Stats */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                      <div className="text-2xl font-bold text-black mb-2">$3,200/month</div>
                      <div className="text-gray-600">{t('features.successStories.savings.creators')}</div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                      <div className="text-2xl font-bold text-black mb-2">$15,000/month</div>
                      <div className="text-gray-600">{t('features.successStories.savings.businesses')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scale Your Business */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-black mb-6 text-center">{t('features.scale.title')}</h2>
                <p className="text-xl text-gray-600 mb-12 text-center">
                  {t('features.scale.subtitle')}
                </p>
                
                <div className="bg-black rounded-2xl p-12">
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">{t('features.scale.creators.title')}</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-white pl-6">
                        <h4 className="font-bold text-white mb-2">{t('features.scale.creators.feature1.title')}</h4>
                        <p className="text-gray-300">{t('features.scale.creators.feature1.description')}</p>
                      </div>
                      <div className="border-l-4 border-white pl-6">
                        <h4 className="font-bold text-white mb-2">{t('features.scale.creators.feature2.title')}</h4>
                        <p className="text-gray-300">{t('features.scale.creators.feature2.description')}</p>
                      </div>
                      <div className="border-l-4 border-white pl-6">
                        <h4 className="font-bold text-white mb-2">{t('features.scale.creators.feature3.title')}</h4>
                        <p className="text-gray-300">{t('features.scale.creators.feature3.description')}</p>
                      </div>
                      <div className="border-l-4 border-white pl-6">
                        <h4 className="font-bold text-white mb-2">{t('features.scale.creators.feature4.title')}</h4>
                        <p className="text-gray-300">{t('features.scale.creators.feature4.description')}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">{t('features.scale.businesses.title')}</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-white pl-6">
                        <h4 className="font-bold text-white mb-2">{t('features.scale.businesses.feature1.title')}</h4>
                        <p className="text-gray-300">{t('features.scale.businesses.feature1.description')}</p>
                      </div>
                      <div className="border-l-4 border-white pl-6">
                        <h4 className="font-bold text-white mb-2">{t('features.scale.businesses.feature2.title')}</h4>
                        <p className="text-gray-300">{t('features.scale.businesses.feature2.description')}</p>
                      </div>
                      <div className="border-l-4 border-white pl-6">
                        <h4 className="font-bold text-white mb-2">{t('features.scale.businesses.feature3.title')}</h4>
                        <p className="text-gray-300">{t('features.scale.businesses.feature3.description')}</p>
                      </div>
                      <div className="border-l-4 border-white pl-6">
                        <h4 className="font-bold text-white mb-2">{t('features.scale.businesses.feature4.title')}</h4>
                        <p className="text-gray-300">{t('features.scale.businesses.feature4.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-800 rounded-xl p-6">
                      <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                      <div className="text-gray-300">{t('features.scale.stats.uptime')}</div>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-6">
                      <div className="text-3xl font-bold text-white mb-2">Unlimited</div>
                      <div className="text-gray-300">{t('features.scale.stats.generation')}</div>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-6">
                      <div className="text-3xl font-bold text-white mb-2">&lt; 2hrs</div>
                      <div className="text-gray-300">{t('features.scale.stats.support')}</div>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="text-center">
                <h2 className="text-4xl font-bold text-black mb-6">{t('features.finalCta.title')}</h2>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  {t('features.finalCta.description')}
                </p>
                
                <a
                  href="http://localhost:5173/register"
                  className="inline-block bg-black text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-gray-800 transition-colors mb-4"
                >
                  {t('features.finalCta.button')}
                </a>
                <div className="text-gray-600 text-lg">
                  {t('features.finalCta.offer')}
                </div>
                <div className="mt-6 text-sm text-gray-500">
                  {t('features.finalCta.setup')}
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

export default FeaturesPage