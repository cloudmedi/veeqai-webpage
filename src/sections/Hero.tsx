import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Play, Pause, Download, Mic, FileText, MessageSquare, Languages, Users, Sparkles } from 'lucide-react'

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [selectedTab, setSelectedTab] = useState('text-to-speech')
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(t('hero.languages.english'))
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const [text, setText] = useState(t('hero.sampleText'))
  
  // Typewriter effect for title
  const words = [
    { text: t('hero.typewriter.voiceovers'), color: 'text-blue-600' },
    { text: t('hero.typewriter.soundtracks'), color: 'text-purple-600' },
    { text: t('hero.typewriter.podcasts'), color: 'text-green-600' },
    { text: t('hero.typewriter.commercials'), color: 'text-red-600' },
    { text: t('hero.typewriter.stories'), color: 'text-pink-600' }
  ]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedWord, setDisplayedWord] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentWord = words[currentWordIndex].text
    
    if (isTyping) {
      if (displayedWord.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayedWord(currentWord.slice(0, displayedWord.length + 1))
        }, 80 + Math.random() * 40) // 80-120ms arası değişken hız
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2500) // Biraz daha uzun bekleme
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayedWord.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedWord(displayedWord.slice(0, -1))
        }, 30 + Math.random() * 20) // 30-50ms arası değişken silme hızı
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
          setIsTyping(true)
        }, 500) // Kelimeler arası geçiş
        return () => clearTimeout(timeout)
      }
    }
  }, [currentWordIndex, displayedWord, isTyping, words])
  
  const tabs = [
    { id: 'text-to-speech', label: t('hero.tabs.textToSpeech'), icon: Mic },
    { id: 'music-generation', label: t('hero.tabs.musicGeneration'), icon: Sparkles },
    { id: 'voice-cloning', label: t('hero.tabs.voiceCloning'), icon: Users },
    { id: 'voice-design', label: t('hero.tabs.voiceDesign'), icon: MessageSquare },
    { id: 'voice-isolator', label: t('hero.tabs.voiceIsolator'), icon: FileText }
  ]

  const voices = [
    { name: t('hero.voices.professional.name'), initial: 'P', bgColor: 'bg-gray-800', tag: t('hero.voices.professional.tag') },
    { name: t('hero.voices.friendly.name'), initial: 'F', bgColor: 'bg-black', tag: t('hero.voices.friendly.tag') },
    { name: t('hero.voices.podcast.name'), initial: 'P', bgColor: 'bg-gray-700', tag: t('hero.voices.podcast.tag') },
    { name: t('hero.voices.storyteller.name'), initial: 'S', bgColor: 'bg-gray-900', tag: t('hero.voices.storyteller.tag') },
    { name: t('hero.voices.marketing.name'), initial: 'M', bgColor: 'bg-gray-600', tag: t('hero.voices.marketing.tag') },
    { name: t('hero.voices.news.name'), initial: 'N', bgColor: 'bg-black', tag: t('hero.voices.news.tag') }
  ]

  const languages = [
    { code: 'en', flag: '🇺🇸', name: t('hero.languages.english') },
    { code: 'tr', flag: '🇹🇷', name: t('hero.languages.turkish') },
    { code: 'es', flag: '🇪🇸', name: t('hero.languages.spanish') },
    { code: 'fr', flag: '🇫🇷', name: t('hero.languages.french') },
    { code: 'de', flag: '🇩🇪', name: t('hero.languages.german') },
    { code: 'it', flag: '🇮🇹', name: t('hero.languages.italian') },
    { code: 'pt', flag: '🇵🇹', name: t('hero.languages.portuguese') },
    { code: 'pl', flag: '🇵🇱', name: t('hero.languages.polish') }
  ]

  return (
    <section className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              <div>{t('hero.title.prefix')}</div>
              <div>
                <span className={words[currentWordIndex].color}>
                  {displayedWord}
                </span>
                <span className="animate-[pulse_1s_ease-in-out_infinite] text-black opacity-75">|</span>
                {' '}{t('hero.title.suffix')}
              </div>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
              {t('hero.subtitle')}
            </p>
            
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href={`https://app.veeq.ai${i18n.language === 'tr' ? '/tr' : ''}/register`}
                className="inline-block bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors"
              >
                {t('hero.cta.startCreating')}
              </a>
              <a
                href="/features"
                className="inline-block bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-colors border border-gray-300"
              >
                {t('hero.cta.exploreFeatures')}
              </a>
            </div>
          </div>

          {/* Product Showcase */}
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 lg:p-12 mb-16">
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedTab === tab.id
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-600 hover:text-black hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Text Input Area */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-12">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-black">{t('hero.tryItYourself')}</h3>
                <div className="relative">
                  <button 
                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <span className="text-sm">🇺🇸</span>
                    <span className="text-sm font-medium">{selectedLanguage}</span>
                  </button>
                  {showLanguageDropdown && (
                    <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                      <div className="py-1">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setSelectedLanguage(lang.name)
                              setShowLanguageDropdown(false)
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-3"
                          >
                            <span>{lang.flag}</span>
                            <span className="text-sm">{lang.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full h-24 p-4 border border-gray-200 rounded-lg resize-none outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-colors"
                placeholder={t('hero.textareaPlaceholder')}
              />
              
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-500">
                  {text.length} {t('hero.charactersCount')}
                </div>
                <button className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  <Sparkles className="w-4 h-4" />
                  {t('hero.generateAudio')}
                </button>
              </div>
            </div>

            {/* Voice Selection */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-black mb-6">{t('hero.chooseVoice')}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {voices.map((voice, index) => (
                  <button
                    key={index}
                    className="p-4 bg-white rounded-xl border border-gray-200 hover:border-black transition-colors text-center group"
                  >
                    <div className={`w-12 h-12 rounded-full ${voice.bgColor} flex items-center justify-center mx-auto mb-3`}>
                      <span className="text-white font-bold text-lg">{voice.initial}</span>
                    </div>
                    <div className="text-sm font-medium text-black mb-1">{voice.name}</div>
                    <div className="text-xs text-gray-500">{voice.tag}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Audio Player Mockup */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  {isPlaying ? 
                    <Pause className="w-5 h-5 text-white" /> : 
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  }
                </button>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-black rounded-full w-1/3 transition-all"></div>
                </div>
                <div className="text-sm text-gray-500">0:45 / 2:15</div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Download className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="mt-12">
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 lg:p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-black mb-2">10x</div>
                  <div className="text-gray-600">{t('hero.stats.faster')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black mb-2">95%</div>
                  <div className="text-gray-600">{t('hero.stats.cheaper')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black mb-2">12+</div>
                  <div className="text-gray-600">{t('hero.stats.languages')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black mb-2">24/7</div>
                  <div className="text-gray-600">{t('hero.stats.available')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero