import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PrivacyPolicy: React.FC = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('privacyPolicy.title')}</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>{t('privacyPolicy.lastUpdated')}:</strong> {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. {t('privacyPolicy.introduction.title')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacyPolicy.introduction.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. {t('privacyPolicy.informationWeCollect.title')}</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{t('privacyPolicy.informationWeCollect.personal.title')}</h3>
                    <p className="text-gray-700">
                      {t('privacyPolicy.informationWeCollect.personal.content')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{t('privacyPolicy.informationWeCollect.voice.title')}</h3>
                    <p className="text-gray-700">
                      {t('privacyPolicy.informationWeCollect.voice.content')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{t('privacyPolicy.informationWeCollect.usage.title')}</h3>
                    <p className="text-gray-700">
                      {t('privacyPolicy.informationWeCollect.usage.content')}
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. {t('privacyPolicy.howWeUse.title')}</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>{t('privacyPolicy.howWeUse.item1')}</li>
                  <li>{t('privacyPolicy.howWeUse.item2')}</li>
                  <li>{t('privacyPolicy.howWeUse.item3')}</li>
                  <li>{t('privacyPolicy.howWeUse.item4')}</li>
                  <li>{t('privacyPolicy.howWeUse.item5')}</li>
                  <li>{t('privacyPolicy.howWeUse.item6')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. {t('privacyPolicy.dataSharing.title')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('privacyPolicy.dataSharing.intro')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>{t('privacyPolicy.dataSharing.providers.title')}:</strong> {t('privacyPolicy.dataSharing.providers.content')}</li>
                  <li><strong>{t('privacyPolicy.dataSharing.legal.title')}:</strong> {t('privacyPolicy.dataSharing.legal.content')}</li>
                  <li><strong>{t('privacyPolicy.dataSharing.business.title')}:</strong> {t('privacyPolicy.dataSharing.business.content')}</li>
                  <li><strong>{t('privacyPolicy.dataSharing.consent.title')}:</strong> {t('privacyPolicy.dataSharing.consent.content')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. {t('privacyPolicy.dataSecurity.title')}</h2>
                <p className="text-gray-700">
                  {t('privacyPolicy.dataSecurity.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. {t('privacyPolicy.dataRetention.title')}</h2>
                <p className="text-gray-700">
                  {t('privacyPolicy.dataRetention.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. {t('privacyPolicy.yourRights.title')}</h2>
                <p className="text-gray-700 mb-4">{t('privacyPolicy.yourRights.intro')}</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>{t('privacyPolicy.yourRights.access')}</li>
                  <li>{t('privacyPolicy.yourRights.delete')}</li>
                  <li>{t('privacyPolicy.yourRights.object')}</li>
                  <li>{t('privacyPolicy.yourRights.portability')}</li>
                  <li>{t('privacyPolicy.yourRights.withdraw')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. {t('privacyPolicy.internationalTransfers.title')}</h2>
                <p className="text-gray-700">
                  {t('privacyPolicy.internationalTransfers.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. {t('privacyPolicy.childrenPrivacy.title')}</h2>
                <p className="text-gray-700">
                  {t('privacyPolicy.childrenPrivacy.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. {t('privacyPolicy.changes.title')}</h2>
                <p className="text-gray-700">
                  {t('privacyPolicy.changes.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. {t('privacyPolicy.contact.title')}</h2>
                <p className="text-gray-700">
                  {t('privacyPolicy.contact.intro')}
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>VEMLO YAZILIM BİLGİ İLETİŞİM TEKNOLOJİLERİ REKLAM PAZARLAMA LİMİTED ŞİRKETİ</strong><br />
                    {t('privacyPolicy.contact.address')}: İkitelli OSB Giyim Sanatkarları 1A Blok Sk. Giyim Sanatkarları Tic. Merkezi 1A Blok No:1 A Blok 1B026-A Başakşehir, İstanbul<br />
                    {t('privacyPolicy.contact.phone')}: +90 212 963 23 76<br />
                    {t('privacyPolicy.contact.email')}: support@veeq.ai<br />
                    {t('privacyPolicy.contact.subject')}: {t('privacyPolicy.contact.subjectText')}
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

export default PrivacyPolicy