import React from 'react'
import { Link } from 'react-router-dom'
import { Twitter, Github, Linkedin, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation()
  
  const getPath = (path: string) => {
    return i18n.language === 'tr' ? `/tr${path}` : path
  }

  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Logo variant="white" width={120} height={40} />
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              {t('footer.description', 'The most realistic AI voice platform. Create lifelike speech with text-to-speech, voice cloning, and music generation.')}
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('nav.products', 'Products')}</h3>
            <ul className="space-y-2">
              <li><Link to={getPath('/text-to-speech')} className="text-gray-400 hover:text-white transition-colors">{t('nav.dropdown.textToSpeech')}</Link></li>
              <li><Link to={getPath('/music-generator')} className="text-gray-400 hover:text-white transition-colors">{t('nav.dropdown.musicGenerator')}</Link></li>
              <li><Link to={getPath('/voice-cloning')} className="text-gray-400 hover:text-white transition-colors">{t('nav.dropdown.voiceCloning')}</Link></li>
              <li><Link to={getPath('/voice-design')} className="text-gray-400 hover:text-white transition-colors">{t('nav.dropdown.voiceDesign')}</Link></li>
              <li><Link to={getPath('/voice-isolator')} className="text-gray-400 hover:text-white transition-colors">{t('nav.dropdown.voiceIsolator')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.company.title')}</h3>
            <ul className="space-y-2">
              <li><Link to={getPath('/about')} className="text-gray-400 hover:text-white transition-colors">{t('footer.company.about')}</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.company.blog')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.company.careers')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.company.press')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.partners', 'Partners')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.resources.support', 'Support')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.helpCenter', 'Help Center')}</a></li>
              <li><Link to={getPath('/docs')} className="text-gray-400 hover:text-white transition-colors">{t('footer.resources.docs')}</Link></li>
              <li><Link to={getPath('/docs/endpoints')} className="text-gray-400 hover:text-white transition-colors">{t('footer.apiReference', 'API Reference')}</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.community', 'Community')}</a></li>
              <li><Link to={getPath('/contact')} className="text-gray-400 hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4 md:mb-0">
              <span>{t('footer.copyright')}</span>
              <div className="h-4 w-px bg-gray-600"></div>
              <div className="flex items-center space-x-3">
                <a 
                  href="https://www.iyzico.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img 
                    src="/iyzico-logo.png" 
                    alt="Powered by iyzico" 
                    className="h-5 opacity-60 hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </a>
                <div className="h-4 w-px bg-gray-600"></div>
                <a 
                  href="https://stripe.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img 
                    src="/stripe-logo.svg" 
                    alt="Powered by Stripe" 
                    className="h-5 opacity-60 hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to={getPath('/privacy-policy')} className="text-gray-400 hover:text-white transition-colors">{t('footer.legal.privacy')}</Link>
              <Link to={getPath('/terms-of-service')} className="text-gray-400 hover:text-white transition-colors">{t('footer.legal.terms')}</Link>
              <Link to={getPath('/cookie-policy')} className="text-gray-400 hover:text-white transition-colors">{t('footer.legal.cookies')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer