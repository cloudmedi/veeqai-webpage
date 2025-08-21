import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CookiePolicy: React.FC = () => {
  const { t } = useTranslation()
  
  useEffect(() => {
    // Smooth scroll to top only on fresh page loads
    if (!document.referrer || !document.referrer.includes(window.location.origin)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('cookiePolicy.title')}</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>{t('cookiePolicy.lastUpdated')}:</strong> {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. {t('cookiePolicy.whatAreCookies.title')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('cookiePolicy.whatAreCookies.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. {t('cookiePolicy.typesOfCookies.title')}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">{t('cookiePolicy.typesOfCookies.essential.title')}</h3>
                    <p className="text-gray-700 mb-2">
                      {t('cookiePolicy.typesOfCookies.essential.description')}
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <strong>{t('cookiePolicy.typesOfCookies.purpose')}:</strong> {t('cookiePolicy.typesOfCookies.essential.purpose')}<br />
                        <strong>{t('cookiePolicy.typesOfCookies.examples')}:</strong> {t('cookiePolicy.typesOfCookies.essential.examples')}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">{t('cookiePolicy.typesOfCookies.performance.title')}</h3>
                    <p className="text-gray-700 mb-2">
                      {t('cookiePolicy.typesOfCookies.performance.description')}
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <strong>{t('cookiePolicy.typesOfCookies.purpose')}:</strong> {t('cookiePolicy.typesOfCookies.performance.purpose')}<br />
                        <strong>{t('cookiePolicy.typesOfCookies.examples')}:</strong> {t('cookiePolicy.typesOfCookies.performance.examples')}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">{t('cookiePolicy.typesOfCookies.functional.title')}</h3>
                    <p className="text-gray-700 mb-2">
                      {t('cookiePolicy.typesOfCookies.functional.description')}
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <strong>{t('cookiePolicy.typesOfCookies.purpose')}:</strong> {t('cookiePolicy.typesOfCookies.functional.purpose')}<br />
                        <strong>{t('cookiePolicy.typesOfCookies.examples')}:</strong> {t('cookiePolicy.typesOfCookies.functional.examples')}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">{t('cookiePolicy.typesOfCookies.marketing.title')}</h3>
                    <p className="text-gray-700 mb-2">
                      {t('cookiePolicy.typesOfCookies.marketing.description')}
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <strong>{t('cookiePolicy.typesOfCookies.purpose')}:</strong> {t('cookiePolicy.typesOfCookies.marketing.purpose')}<br />
                        <strong>{t('cookiePolicy.typesOfCookies.examples')}:</strong> {t('cookiePolicy.typesOfCookies.marketing.examples')}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. {t('cookiePolicy.thirdParty.title')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('cookiePolicy.thirdParty.intro')}
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-gray-900">{t('cookiePolicy.thirdParty.googleAnalytics.title')}</h4>
                    <p className="text-sm text-gray-600">{t('cookiePolicy.thirdParty.googleAnalytics.description')}</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-gray-900">{t('cookiePolicy.thirdParty.paymentProcessors.title')}</h4>
                    <p className="text-sm text-gray-600">{t('cookiePolicy.thirdParty.paymentProcessors.description')}</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-gray-900">{t('cookiePolicy.thirdParty.customerSupport.title')}</h4>
                    <p className="text-sm text-gray-600">{t('cookiePolicy.thirdParty.customerSupport.description')}</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-medium text-gray-900">{t('cookiePolicy.thirdParty.cdnServices.title')}</h4>
                    <p className="text-sm text-gray-600">{t('cookiePolicy.thirdParty.cdnServices.description')}</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. {t('cookiePolicy.duration.title')}</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{t('cookiePolicy.duration.session.title')}</h3>
                    <p className="text-gray-700">
                      {t('cookiePolicy.duration.session.description')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{t('cookiePolicy.duration.persistent.title')}</h3>
                    <p className="text-gray-700">
                      {t('cookiePolicy.duration.persistent.description')}
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. {t('cookiePolicy.managing.title')}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">{t('cookiePolicy.managing.browserSettings.title')}</h3>
                    <p className="text-gray-700 mb-4">
                      {t('cookiePolicy.managing.browserSettings.intro')}
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li><strong>Chrome:</strong> {t('cookiePolicy.managing.browserSettings.chrome')}</li>
                      <li><strong>Firefox:</strong> {t('cookiePolicy.managing.browserSettings.firefox')}</li>
                      <li><strong>Safari:</strong> {t('cookiePolicy.managing.browserSettings.safari')}</li>
                      <li><strong>Edge:</strong> {t('cookiePolicy.managing.browserSettings.edge')}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">{t('cookiePolicy.managing.cookieBanner.title')}</h3>
                    <p className="text-gray-700">
                      {t('cookiePolicy.managing.cookieBanner.description')}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">{t('cookiePolicy.managing.accountSettings.title')}</h3>
                    <p className="text-gray-700">
                      {t('cookiePolicy.managing.accountSettings.description')}
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. {t('cookiePolicy.impact.title')}</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <p className="text-yellow-800">
                    <strong>{t('cookiePolicy.impact.important')}:</strong> {t('cookiePolicy.impact.warning')}
                  </p>
                </div>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>{t('cookiePolicy.impact.essential')}</li>
                  <li>{t('cookiePolicy.impact.performance')}</li>
                  <li>{t('cookiePolicy.impact.functional')}</li>
                  <li>{t('cookiePolicy.impact.marketing')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. {t('cookiePolicy.mobileApps.title')}</h2>
                <p className="text-gray-700">
                  {t('cookiePolicy.mobileApps.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. {t('cookiePolicy.updates.title')}</h2>
                <p className="text-gray-700">
                  {t('cookiePolicy.updates.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. {t('cookiePolicy.contact.title')}</h2>
                <p className="text-gray-700">
                  {t('cookiePolicy.contact.intro')}
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>VEMLO YAZILIM BİLGİ İLETİŞİM TEKNOLOJİLERİ REKLAM PAZARLAMA LİMİTED ŞİRKETİ</strong><br />
                    {t('cookiePolicy.contact.address')}: İkitelli OSB Giyim Sanatkarları 1A Blok Sk. Giyim Sanatkarları Tic. Merkezi 1A Blok No:1 A Blok 1B026-A Başakşehir, İstanbul<br />
                    {t('cookiePolicy.contact.phone')}: +90 212 963 23 76<br />
                    {t('cookiePolicy.contact.email')}: support@veeq.ai<br />
                    {t('cookiePolicy.contact.subject')}: {t('cookiePolicy.contact.subjectText')}
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. {t('cookiePolicy.additionalResources.title')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('cookiePolicy.additionalResources.intro')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li><a href="https://www.allaboutcookies.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">All About Cookies</a></li>
                  <li><a href="https://www.youronlinechoices.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Your Online Choices</a></li>
                  <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CookiePolicy