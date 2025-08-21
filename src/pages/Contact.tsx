import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const ContactPage: React.FC = () => {
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
                  {t('contact.title')}
                </h1>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
                  {t('contact.subtitle')}
                </p>
              </div>

              {/* Contact Information */}
              <div className="max-w-4xl mx-auto mb-12">
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl border border-gray-200 p-8">
                    <h3 className="text-2xl font-bold text-black mb-6">{t('contact.getInTouch.title')}</h3>
                    <p className="text-gray-700 mb-8">
                      {t('contact.getInTouch.description')}
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-gray-100 rounded-lg p-3">
                          <MapPin className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-2">{t('contact.address.title')}</h4>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            İkitelli OSB Giyim Sanatkarları Tic. Merkezi 1A Blok No:1 A Blok 1B026-A Başakşehir, İstanbul / Türkiye
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-gray-100 rounded-lg p-3">
                          <Phone className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-2">{t('contact.phone.title')}</h4>
                          <p className="text-gray-700">
                            <a href="tel:+902129632376" className="hover:text-black transition-colors">
                              +90 212 963 23 76
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-gray-100 rounded-lg p-3">
                          <Mail className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-2">{t('contact.email.title')}</h4>
                          <p className="text-gray-700">
                            <a href="mailto:support@veeq.ai" className="hover:text-black transition-colors">
                              support@veeq.ai
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-gray-100 rounded-lg p-3">
                          <Clock className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-2">{t('contact.businessHours.title')}</h4>
                          <div className="text-gray-700 text-sm space-y-1">
                            <p>{t('contact.businessHours.weekdays')}</p>
                            <p>{t('contact.businessHours.weekend')}</p>
                            <p className="text-xs text-gray-500 mt-2">{t('contact.businessHours.timezone')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                    <h3 className="text-xl font-bold text-black mb-6">{t('contact.quickHelp.title')}</h3>
                    <div className="space-y-4">
                      <a
                        href="/docs"
                        className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-black transition-colors"
                      >
                        <h4 className="font-semibold text-black mb-1">{t('contact.quickHelp.docs.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('contact.quickHelp.docs.description')}</p>
                      </a>
                      <a
                        href="/features"
                        className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-black transition-colors"
                      >
                        <h4 className="font-semibold text-black mb-1">{t('contact.quickHelp.features.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('contact.quickHelp.features.description')}</p>
                      </a>
                      <a
                        href="/pricing"
                        className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-black transition-colors"
                      >
                        <h4 className="font-semibold text-black mb-1">{t('contact.quickHelp.pricing.title')}</h4>
                        <p className="text-gray-600 text-sm">{t('contact.quickHelp.pricing.description')}</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Section */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12 text-center">
                <h2 className="text-3xl font-bold text-black mb-6">{t('contact.support.title')}</h2>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  {t('contact.support.description')}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-xl font-bold text-black mb-3">{t('contact.support.sales.title')}</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {t('contact.support.sales.description')}
                    </p>
                    <a
                      href="mailto:sales@veeq.ai"
                      className="inline-block bg-black text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors"
                    >
                      {t('contact.support.sales.button')}
                    </a>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-xl font-bold text-black mb-3">{t('contact.support.technical.title')}</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {t('contact.support.technical.description')}
                    </p>
                    <a
                      href="mailto:support@veeq.ai"
                      className="inline-block bg-gray-100 text-black px-6 py-2 rounded-lg font-semibold text-sm border border-gray-300 hover:bg-gray-200 transition-colors"
                    >
                      {t('contact.support.technical.button')}
                    </a>
                  </div>
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

export default ContactPage