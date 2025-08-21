import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Landing from './pages/Landing'
import FeaturesPage from './pages/Features'
import PricingPage from './pages/Pricing'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import MusicGeneratorPage from './pages/MusicGenerator'
import TextToSpeechPage from './pages/TextToSpeech'
import VoiceCloningPage from './pages/VoiceCloning'
import VoiceDesignPage from './pages/VoiceDesign'
import VoiceIsolatorPage from './pages/VoiceIsolator'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'

// Documentation Pages
import IntroductionPage from './pages/docs/Introduction'
import AuthenticationPage from './pages/docs/Authentication'
import QuickStartPage from './pages/docs/QuickStart'
import ApiExplorerPage from './pages/docs/ApiExplorer'
import EndpointsPage from './pages/docs/Endpoints'
import SdkGeneratorPage from './pages/docs/SdkGenerator'
import PostmanCollectionPage from './pages/docs/PostmanCollection'
import OpenApiSpecPage from './pages/docs/OpenApiSpec'
import ErrorHandlingPage from './pages/docs/ErrorHandling'
import RateLimitsPage from './pages/docs/RateLimits'
import HelpPage from './pages/docs/Help'
import PaymentMethodsPage from './pages/docs/PaymentMethods'
import StripeIntegrationPage from './pages/docs/StripeIntegration'
import IyzicoIntegrationPage from './pages/docs/IyzicoIntegration'
import BillingManagementPage from './pages/docs/BillingManagement'

import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Immediately scroll to top without smooth behavior
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    
    // Also force scroll after a small delay for any edge cases
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 10)
    
    return () => clearTimeout(timer)
  }, [pathname])

  return null
}

function LanguageRouter() {
  const { i18n } = useTranslation()
  const location = useLocation()
  
  useEffect(() => {
    const pathLang = location.pathname.split('/')[1]
    if (pathLang === 'tr') {
      if (i18n.language !== 'tr') {
        i18n.changeLanguage('tr')
      }
    } else if (pathLang !== 'tr' && i18n.language === 'tr') {
      // TR dili seçiliyse ve URL'de /tr yoksa ekle
      const newPath = '/tr' + location.pathname
      window.history.replaceState(null, '', newPath)
    }
  }, [location, i18n])
  
  return null
}

function App() {
  const { i18n } = useTranslation()
  
  return (
    <Router future={{ v7_startTransition: true }}>
      <ScrollToTop />
      <LanguageRouter />
      <div className="App">
        <Routes>
          {/* Turkish routes */}
          <Route path="/tr" element={<Landing />} />
          <Route path="/tr/features" element={<FeaturesPage />} />
          <Route path="/tr/pricing" element={<PricingPage />} />
          <Route path="/tr/about" element={<AboutPage />} />
          <Route path="/tr/contact" element={<ContactPage />} />
          
          {/* Turkish Documentation Routes */}
          <Route path="/tr/docs" element={<IntroductionPage />} />
          <Route path="/tr/docs/authentication" element={<AuthenticationPage />} />
          <Route path="/tr/docs/quick-start" element={<QuickStartPage />} />
          <Route path="/tr/docs/api-explorer" element={<ApiExplorerPage />} />
          <Route path="/tr/docs/endpoints" element={<EndpointsPage />} />
          <Route path="/tr/docs/sdk-generator" element={<SdkGeneratorPage />} />
          <Route path="/tr/docs/postman" element={<PostmanCollectionPage />} />
          <Route path="/tr/docs/openapi" element={<OpenApiSpecPage />} />
          <Route path="/tr/docs/error-handling" element={<ErrorHandlingPage />} />
          <Route path="/tr/docs/rate-limits" element={<RateLimitsPage />} />
          <Route path="/tr/docs/help" element={<HelpPage />} />
          <Route path="/tr/docs/payment-methods" element={<PaymentMethodsPage />} />
          <Route path="/tr/docs/stripe-integration" element={<StripeIntegrationPage />} />
          <Route path="/tr/docs/iyzico-integration" element={<IyzicoIntegrationPage />} />
          <Route path="/tr/docs/billing-management" element={<BillingManagementPage />} />
          
          {/* Turkish Product Pages */}
          <Route path="/tr/music-generator" element={<MusicGeneratorPage />} />
          <Route path="/tr/text-to-speech" element={<TextToSpeechPage />} />
          <Route path="/tr/voice-cloning" element={<VoiceCloningPage />} />
          <Route path="/tr/voice-design" element={<VoiceDesignPage />} />
          <Route path="/tr/voice-isolator" element={<VoiceIsolatorPage />} />
          
          {/* Turkish Legal Pages */}
          <Route path="/tr/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/tr/terms-of-service" element={<TermsOfService />} />
          <Route path="/tr/cookie-policy" element={<CookiePolicy />} />
          
          {/* English routes (default) */}
          <Route path="/" element={<Landing />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Documentation Routes */}
          <Route path="/docs" element={<IntroductionPage />} />
          <Route path="/docs/authentication" element={<AuthenticationPage />} />
          <Route path="/docs/quick-start" element={<QuickStartPage />} />
          <Route path="/docs/api-explorer" element={<ApiExplorerPage />} />
          <Route path="/docs/endpoints" element={<EndpointsPage />} />
          <Route path="/docs/sdk-generator" element={<SdkGeneratorPage />} />
          <Route path="/docs/postman" element={<PostmanCollectionPage />} />
          <Route path="/docs/openapi" element={<OpenApiSpecPage />} />
          <Route path="/docs/error-handling" element={<ErrorHandlingPage />} />
          <Route path="/docs/rate-limits" element={<RateLimitsPage />} />
          <Route path="/docs/help" element={<HelpPage />} />
          <Route path="/docs/payment-methods" element={<PaymentMethodsPage />} />
          <Route path="/docs/stripe-integration" element={<StripeIntegrationPage />} />
          <Route path="/docs/iyzico-integration" element={<IyzicoIntegrationPage />} />
          <Route path="/docs/billing-management" element={<BillingManagementPage />} />
          
          {/* Product Pages */}
          <Route path="/music-generator" element={<MusicGeneratorPage />} />
          <Route path="/text-to-speech" element={<TextToSpeechPage />} />
          <Route path="/voice-cloning" element={<VoiceCloningPage />} />
          <Route path="/voice-design" element={<VoiceDesignPage />} />
          <Route path="/voice-isolator" element={<VoiceIsolatorPage />} />
          
          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App