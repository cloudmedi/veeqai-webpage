import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Mic, Music, Users, Paintbrush, Scissors } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import Logo from './Logo'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  // Helper function to generate language-aware paths
  const getPath = (path: string) => {
    if (i18n.language === 'tr') {
      return `/tr${path}`
    }
    return path
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <Link 
              to={getPath("/")} 
              className=""
              onClick={() => {
                setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 10)
              }}
            >
              <Logo variant="black" width={120} height={40} />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to={getPath("/features")} 
              className="text-gray-700 hover:text-black transition-colors"
              onClick={() => {
                setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 10)
              }}
            >
              {t('nav.features')}
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors">
                {t('nav.products')}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-[700px] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="grid grid-cols-2 gap-4 p-6">
                  <Link to={getPath("/text-to-speech")} className="block p-3 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => { setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 10) }}>
                    <div className="flex items-start gap-3">
                      <Mic className="w-5 h-5 text-black mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-black mb-1">{t('nav.dropdown.textToSpeech')}</div>
                        <div className="text-xs text-gray-600">{t('nav.dropdown.textToSpeechDesc')}</div>
                      </div>
                    </div>
                  </Link>
                  <Link to={getPath("/music-generator")} className="block p-3 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => { setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 10) }}>
                    <div className="flex items-start gap-3">
                      <Music className="w-5 h-5 text-black mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-black mb-1">{t('nav.dropdown.musicGenerator')}</div>
                        <div className="text-xs text-gray-600">{t('nav.dropdown.musicGeneratorDesc')}</div>
                      </div>
                    </div>
                  </Link>
                  <Link to={getPath("/voice-cloning")} className="block p-3 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => { setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 10) }}>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-black mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-black mb-1">{t('nav.dropdown.voiceCloning')}</div>
                        <div className="text-xs text-gray-600">{t('nav.dropdown.voiceCloningDesc')}</div>
                      </div>
                    </div>
                  </Link>
                  <Link to={getPath("/voice-design")} className="block p-3 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => { setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 10) }}>
                    <div className="flex items-start gap-3">
                      <Paintbrush className="w-5 h-5 text-black mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-black mb-1">{t('nav.dropdown.voiceDesign')}</div>
                        <div className="text-xs text-gray-600">{t('nav.dropdown.voiceDesignDesc')}</div>
                      </div>
                    </div>
                  </Link>
                  <Link to={getPath("/voice-isolator")} className="block p-3 hover:bg-gray-50 rounded-lg transition-colors col-span-2" onClick={() => { setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 10) }}>
                    <div className="flex items-start gap-3">
                      <Scissors className="w-5 h-5 text-black mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-black mb-1">{t('nav.dropdown.voiceIsolator')}</div>
                        <div className="text-xs text-gray-600">{t('nav.dropdown.voiceIsolatorDesc')}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              to={getPath("/pricing")} 
              className="text-gray-700 hover:text-black transition-colors"
              onClick={() => {
                setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 10)
              }}
            >
              {t('nav.pricing')}
            </Link>
            <Link 
              to={getPath("/docs")} 
              className="text-gray-700 hover:text-black transition-colors"
              onClick={() => {
                setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 10)
              }}
            >
              {t('nav.docs')}
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <a href="http://localhost:5173/login" className="text-gray-700  hover:text-black transition-colors font-medium">
              {t('nav.signIn')}
            </a>
            <a href="http://localhost:5173/register" className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              {t('nav.signUp')}
            </a>
          </div>

          <button 
            className="lg:hidden p-2 text-gray-700 "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white ">
            <div className="py-4 space-y-2">
              <Link 
                to={getPath("/features")} 
                className="block px-4 py-2 text-gray-700  hover:text-black hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => {
                  setIsMenuOpen(false)
                  setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 10)
                }}
              >
                {t('nav.features')}
              </Link>
              <div className="px-4 py-2">
                <div className="text-gray-700  font-medium mb-2">{t('nav.products')}</div>
                <div className="pl-4 space-y-2">
                  <Link to={getPath("/text-to-speech")} className="block py-3" onClick={() => { setIsMenuOpen(false); setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 10) }}>
                    <div className="flex items-start gap-3">
                      <Mic className="w-4 h-4 text-black mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-black text-sm">{t('nav.dropdown.textToSpeech')}</div>
                        <div className="text-xs text-gray-600 mt-0.5">{t('nav.dropdown.textToSpeechDesc')}</div>
                      </div>
                    </div>
                  </Link>
                  <Link to={getPath("/music-generator")} className="block py-3" onClick={() => { setIsMenuOpen(false); setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 10) }}>
                    <div className="flex items-start gap-3">
                      <Music className="w-4 h-4 text-black mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-black text-sm">{t('nav.dropdown.musicGenerator')}</div>
                        <div className="text-xs text-gray-600 mt-0.5">{t('nav.dropdown.musicGeneratorDesc')}</div>
                      </div>
                    </div>
                  </Link>
                  <Link to={getPath("/voice-cloning")} className="block py-3" onClick={() => { setIsMenuOpen(false); setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 10) }}>
                    <div className="flex items-start gap-3">
                      <Users className="w-4 h-4 text-black mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-black text-sm">{t('nav.dropdown.voiceCloning')}</div>
                        <div className="text-xs text-gray-600 mt-0.5">{t('nav.dropdown.voiceCloningDesc')}</div>
                      </div>
                    </div>
                  </Link>
                  <Link to={getPath("/voice-design")} className="block py-3" onClick={() => { setIsMenuOpen(false); setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 10) }}>
                    <div className="flex items-start gap-3">
                      <Paintbrush className="w-4 h-4 text-black mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-black text-sm">{t('nav.dropdown.voiceDesign')}</div>
                        <div className="text-xs text-gray-600 mt-0.5">{t('nav.dropdown.voiceDesignDesc')}</div>
                      </div>
                    </div>
                  </Link>
                  <Link to={getPath("/voice-isolator")} className="block py-3" onClick={() => { setIsMenuOpen(false); setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 10) }}>
                    <div className="flex items-start gap-3">
                      <Scissors className="w-4 h-4 text-black mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-black text-sm">{t('nav.dropdown.voiceIsolator')}</div>
                        <div className="text-xs text-gray-600 mt-0.5">{t('nav.dropdown.voiceIsolatorDesc')}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <Link 
                to={getPath("/pricing")} 
                className="block px-4 py-2 text-gray-700  hover:text-black hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => {
                  setIsMenuOpen(false)
                  setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 10)
                }}
              >
                {t('nav.pricing')}
              </Link>
              <Link 
                to={getPath("/docs")} 
                className="block px-4 py-2 text-gray-700  hover:text-black hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => {
                  setIsMenuOpen(false)
                  setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 10)
                }}
              >
                {t('nav.docs')}
              </Link>
              <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-4 space-y-2">
                <div className="px-4 mb-4">
                  <LanguageSwitcher />
                </div>
                <a href="http://localhost:5173/login" className="block w-full text-left px-4 py-2 text-gray-700  hover:text-black hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  {t('nav.signIn')}
                </a>
                <div className="px-4">
                  <a href="http://localhost:5173/register" className="block bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors w-full text-center">
                    {t('nav.signUp')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header