import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.json'
import tr from './locales/tr.json'

const resources = {
  en: {
    translation: en
  },
  tr: {
    translation: tr
  }
}

// Coğrafi konum bazlı dil tespiti
const detectUserLanguage = (): string => {
  // 1. URL'den dil kontrolü (/tr, /en gibi)
  const pathLang = window.location.pathname.split('/')[1]
  if (pathLang === 'tr' || pathLang === 'en') {
    return pathLang
  }

  // 2. LocalStorage'dan dil kontrolü
  const savedLang = localStorage.getItem('language')
  if (savedLang) {
    return savedLang
  }

  // 3. Tarayıcı dili ve coğrafi konum kontrolü
  const browserLang = navigator.language.toLowerCase()
  if (browserLang.startsWith('tr')) {
    return 'tr'
  }

  // 4. Timezone bazlı Türkiye tespiti
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  if (timezone === 'Europe/Istanbul') {
    return 'tr'
  }

  // Default: İngilizce
  return 'en'
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: detectUserLanguage(),
    fallbackLng: 'en',
    debug: true,
    
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupFromPathIndex: 0,
      checkWhitelist: true
    },
    
    interpolation: {
      escapeValue: false
    },
    
    react: {
      useSuspense: false
    }
  })

// Dil değiştiğinde URL'i güncelle
i18n.on('languageChanged', (lng) => {
  const currentPath = window.location.pathname
  const pathParts = currentPath.split('/')
  
  // Mevcut dil prefix'ini kaldır
  if (pathParts[1] === 'tr' || pathParts[1] === 'en') {
    pathParts.splice(1, 1)
  }
  
  // Yeni dil prefix'ini ekle (sadece Türkçe için)
  if (lng === 'tr') {
    pathParts.splice(1, 0, 'tr')
  }
  
  const newPath = pathParts.join('/') || '/'
  
  // URL'i güncelle (sayfa yenilenmeden)
  window.history.replaceState(null, '', newPath)
  
  // LocalStorage'a kaydet
  localStorage.setItem('language', lng)
})

export default i18n