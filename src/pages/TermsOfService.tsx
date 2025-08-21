import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'

const TermsOfService: React.FC = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('termsOfService.title')}</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>{t('termsOfService.lastUpdated')}:</strong> {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. {t('termsOfService.agreement.title')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('termsOfService.agreement.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. {t('termsOfService.services.title')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('termsOfService.services.intro')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>{t('termsOfService.services.tts')}</li>
                  <li>{t('termsOfService.services.cloning')}</li>
                  <li>{t('termsOfService.services.music')}</li>
                  <li>{t('termsOfService.services.isolation')}</li>
                  <li>{t('termsOfService.services.api')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. {t('termsOfService.account.title')}</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    {t('termsOfService.account.responsibility')}
                  </p>
                  <p className="text-gray-700">
                    {t('termsOfService.account.accuracy')}
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. {t('termsOfService.acceptableUse.title')}</h2>
                <p className="text-gray-700 mb-4">{t('termsOfService.acceptableUse.intro')}</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>{t('termsOfService.acceptableUse.laws')}</li>
                  <li>{t('termsOfService.acceptableUse.consent')}</li>
                  <li>{t('termsOfService.acceptableUse.misleading')}</li>
                  <li>{t('termsOfService.acceptableUse.impersonate')}</li>
                  <li>{t('termsOfService.acceptableUse.harassment')}</li>
                  <li>{t('termsOfService.acceptableUse.intellectual')}</li>
                  <li>{t('termsOfService.acceptableUse.reverse')}</li>
                  <li>{t('termsOfService.acceptableUse.resell')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. {t('termsOfService.rights.title')}</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <strong>{t('termsOfService.rights.yourContent.title')}:</strong> {t('termsOfService.rights.yourContent.content')}
                  </p>
                  <p className="text-gray-700">
                    <strong>{t('termsOfService.rights.generated.title')}:</strong> {t('termsOfService.rights.generated.content')}
                  </p>
                  <p className="text-gray-700">
                    <strong>{t('termsOfService.rights.voiceConsent.title')}:</strong> {t('termsOfService.rights.voiceConsent.content')}
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. {t('termsOfService.payment.title')}</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    {t('termsOfService.payment.credits')}
                  </p>
                  <p className="text-gray-700">
                    {t('termsOfService.payment.processing')}
                  </p>
                  <p className="text-gray-700">
                    {t('termsOfService.payment.pricing')}
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. {t('termsOfService.availability.title')}</h2>
                <p className="text-gray-700">
                  {t('termsOfService.availability.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. {t('termsOfService.intellectualProperty.title')}</h2>
                <p className="text-gray-700">
                  {t('termsOfService.intellectualProperty.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. {t('termsOfService.privacy.title')}</h2>
                <p className="text-gray-700">
                  {t('termsOfService.privacy.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. {t('termsOfService.disclaimers.title')}</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <strong>{t('termsOfService.disclaimers.service.title')}:</strong> {t('termsOfService.disclaimers.service.content')}
                  </p>
                  <p className="text-gray-700">
                    <strong>{t('termsOfService.disclaimers.liability.title')}:</strong> {t('termsOfService.disclaimers.liability.content')}
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. {t('termsOfService.indemnification.title')}</h2>
                <p className="text-gray-700">
                  {t('termsOfService.indemnification.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. {t('termsOfService.termination.title')}</h2>
                <p className="text-gray-700">
                  {t('termsOfService.termination.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. {t('termsOfService.governingLaw.title')}</h2>
                <p className="text-gray-700">
                  {t('termsOfService.governingLaw.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. {t('termsOfService.changes.title')}</h2>
                <p className="text-gray-700">
                  {t('termsOfService.changes.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. {t('termsOfService.contact.title')}</h2>
                <p className="text-gray-700">
                  {t('termsOfService.contact.intro')}
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>VEMLO YAZILIM BİLGİ İLETİŞİM TEKNOLOJİLERİ REKLAM PAZARLAMA LİMİTED ŞİRKETİ</strong><br />
                    {t('termsOfService.contact.address')}: İkitelli OSB Giyim Sanatkarları 1A Blok Sk. Giyim Sanatkarları Tic. Merkezi 1A Blok No:1 A Blok 1B026-A Başakşehir, İstanbul<br />
                    {t('termsOfService.contact.phone')}: +90 212 963 23 76<br />
                    {t('termsOfService.contact.email')}: support@veeq.ai<br />
                    {t('termsOfService.contact.subject')}: {t('termsOfService.contact.subjectText')}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default TermsOfService