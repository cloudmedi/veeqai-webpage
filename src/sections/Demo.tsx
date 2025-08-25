import React, { useState, useEffect } from 'react'
import { Play, Pause, Music } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'

interface FeaturedMusic {
  _id: string
  title: string
  prompt: string
  cdnUrl?: string
  audioUrl?: string
  duration?: number
  featured: {
    artwork?: {
      cdnUrl?: string
    }
  }
}

const Demo: React.FC = () => {
  const { t } = useTranslation()
  const [featuredMusic, setFeaturedMusic] = useState<FeaturedMusic[]>([])
  const [loading, setLoading] = useState(true)
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null)
  const [playingMusicId, setPlayingMusicId] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Fetch featured music from backend
  useEffect(() => {
    fetchFeaturedMusic()
  }, [])

  const fetchFeaturedMusic = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/public/discover?category=mood&subcategory=chill&limit=6')
      const data = await response.json()
      
      if (data.success && data.data) {
        setFeaturedMusic(data.data)
      }
    } catch (error) {
      console.error('Failed to fetch featured music:', error)
    } finally {
      setLoading(false)
    }
  }

  const handlePlayPause = (music: FeaturedMusic) => {
    const audioUrl = music.cdnUrl || music.audioUrl
    if (!audioUrl) return

    // If clicking the same music that's playing/paused
    if (playingMusicId === music._id && currentAudio) {
      if (currentAudio.paused) {
        currentAudio.play()
        setIsPlaying(true)
      } else {
        currentAudio.pause()
        setIsPlaying(false)
      }
      return
    }

    // Stop current audio if playing a different track
    if (currentAudio) {
      currentAudio.pause()
      currentAudio.currentTime = 0
    }

    // Create and play new audio
    const audio = new Audio(audioUrl)
    
    audio.addEventListener('ended', () => {
      setPlayingMusicId(null)
      setCurrentAudio(null)
      setIsPlaying(false)
    })

    audio.addEventListener('pause', () => setIsPlaying(false))
    audio.addEventListener('play', () => setIsPlaying(true))
    
    audio.play().catch(error => {
      console.error('Failed to play audio:', error)
      setPlayingMusicId(null)
      setCurrentAudio(null)
      setIsPlaying(false)
    })
    
    setCurrentAudio(audio)
    setPlayingMusicId(music._id)
  }

  const formatDuration = (seconds?: number) => {
    if (!seconds) return '0:30'
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <section className="px-6 pt-8 pb-16 lg:px-8 lg:pb-24 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('demo.header.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('demo.header.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t('demo.process.title')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{t('demo.process.step1.title')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{t('demo.process.step1.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{t('demo.process.step2.title')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{t('demo.process.step2.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{t('demo.process.step3.title')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{t('demo.process.step3.description')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-gray-500 dark:text-gray-400">{t('demo.promptExample.label')}:</div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-sm text-gray-900 dark:text-white">
                  "{t('demo.promptExample.text')}"
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  {t('demo.promptExample.processing')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('demo.samples.title')}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('demo.samples.description')}
            </p>
          </div>
          
          {/* Spotify-style playlist */}
          <div className="space-y-4">
            {loading ? (
              // Loading skeleton
              Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg animate-pulse">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  </div>
                  <div className="w-12 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              ))
            ) : featuredMusic.length > 0 ? (
              // Real featured music
              featuredMusic.slice(0, 6).map((music) => {
                const isCurrentMusic = playingMusicId === music._id
                const isCurrentlyPlaying = isCurrentMusic && isPlaying
                
                return (
                  <div 
                    key={music._id} 
                    className={`flex items-center gap-4 p-3 rounded-lg transition-all cursor-pointer ${
                      isCurrentMusic 
                        ? 'bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {/* Square Album Art */}
                    <div className="relative group">
                      <div className="w-16 h-16 rounded-lg overflow-hidden">
                        {music.featured?.artwork?.cdnUrl ? (
                          <img 
                            src={music.featured.artwork.cdnUrl} 
                            alt={music.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <Music className="w-6 h-6 text-white" />
                          </div>
                        )}
                      </div>
                      
                      {/* Play Button - visible when playing, on hover when paused/other tracks */}
                      <div className={`absolute inset-0 flex items-center justify-center transition-all bg-black/30 rounded-lg backdrop-blur-sm ${
                        isCurrentlyPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}>
                        <button 
                          onClick={() => handlePlayPause(music)}
                          className="bg-white rounded-full p-2 hover:scale-105 transition-transform shadow-lg"
                        >
                          {isCurrentlyPlaying ? (
                            <Pause className="w-4 h-4 text-black" />
                          ) : (
                            <Play className="w-4 h-4 text-black ml-0.5" />
                          )}
                        </button>
                      </div>
                      
                    </div>
                  
                  {/* Track Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className={`font-semibold truncate ${
                        isCurrentMusic ? 'text-purple-600 dark:text-purple-400' : 'text-gray-900 dark:text-white'
                      }`}>
                        {music.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">"{music.prompt}"</p>
                  </div>
                  
                  {/* Duration */}
                  <div className={`text-sm w-12 text-right ${
                    isCurrentMusic ? 'text-purple-600 dark:text-purple-400 font-medium' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {formatDuration(music.duration)}
                  </div>
                </div>
                )
              })
            ) : (
              // No content message
              <div className="text-center py-12">
                <Music className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
                <p className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {t('demo.samples.noContent')}
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  {t('demo.samples.checkBackLater')}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Hero-sized CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl border border-gray-200 p-16 lg:p-24 text-center min-h-[500px] flex flex-col justify-center">
          <h3 className="text-5xl lg:text-7xl font-bold text-black mb-8">
            {t('demo.cta.title')}
          </h3>
          <p className="text-2xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
            {t('demo.cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* Register button temporarily hidden
            <a
              href={`https://app.veeq.ai${i18n.language === 'tr' ? '/tr' : ''}/register`}
              className="inline-block bg-black text-white px-12 py-6 rounded-xl font-semibold text-xl hover:bg-gray-800 transition-colors"
            >
              {t('demo.cta.startButton')}
            </a>
            */}
            <a
              href="/features"
              className="inline-block bg-white text-black px-12 py-6 rounded-xl font-semibold text-xl border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              {t('demo.cta.exploreButton')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo