import React, { useState, useEffect } from 'react'
import { Check, Star, Zap, Shield, Crown, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { apiClient } from '../lib/api-client'

interface Plan {
  _id: string
  name: string
  displayName: string
  description: string
  pricing: {
    monthly: { amount: number; currency: string }
    yearly?: { amount: number; currency: string; discount?: number }
  }
  credits: {
    monthly: number
    rates: {
      tts: number
      music: { per30Seconds: number; per60Seconds: number }
      voiceClone: { creation: number; usage: number }
      voiceIsolator: { perMinute: number }
    }
  }
  features: { [key: string]: boolean }
  display: {
    order: number
    featured: boolean
    popular: boolean
    badge?: string
    color: string
    icon: string
  }
  status: 'active' | 'inactive' | 'deprecated'
  target: 'individual' | 'team' | 'enterprise' | 'all'
}

const PricingPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [plans, setPlans] = useState<Plan[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    fetchPlans()
    
    // Socket.IO connection for real-time updates
    let socket: any = null
    
    const initSocket = async () => {
      try {
        const { io } = await import('socket.io-client')
        socket = io('http://localhost:5000', {
          transports: ['websocket', 'polling']
        })
        
        socket.on('connect', () => {
          // Connected to backend
        })
        
        socket.on('plan_updated', (data: any) => {
          fetchPlans()
        })
        
        socket.on('disconnect', () => {
          // Disconnected from backend
        })
        
        socket.on('connect_error', (error: any) => {
          // Connection error, fail silently
        })
      } catch (error) {
        // Socket.IO initialization failed, fail silently
      }
    }
    
    initSocket()
    
    return () => {
      if (socket) {
        socket.disconnect()
      }
    }
  }, [])

  const fetchPlans = async () => {
    try {
      const response = await apiClient.get('/auth/plans')
      
      // Backend {success: true, data: [...]} formatında dönüyor
      const fetchedPlans = (response as any)?.data || response || []
      
      const activePlans = fetchedPlans
        .filter((plan: Plan) => plan.status === 'active')
        .sort((a: Plan, b: Plan) => a.display.order - b.display.order)
      setPlans(activePlans)
    } catch (error) {
      // Fallback to static plans if API fails
      setPlans(getStaticPlans())
    } finally {
      setLoading(false)
    }
  }

  // Translate plan names based on current language
  const translatePlanName = (name: string) => {
    const planTranslations: { [key: string]: string } = {
      'Free': 'Ücretsiz',
      'Starter': 'Başlangıç', 
      'Creator': 'İçerik Üretici',
      'Pro': 'Profesyonel',
      'Enterprise': 'Kurumsal'
    }
    return i18n.language === 'tr' ? (planTranslations[name] || name) : name
  }

  // Translate feature names
  const translateFeature = (feature: string) => {
    if (i18n.language !== 'tr') return feature
    
    const featureTranslations: { [key: string]: string } = {
      'Lifelike Text-to-Speech': 'Gerçekçi Metin Seslendirme',
      'AI Music Generation': 'AI Müzik Üretimi',
      'Voice Cloning': 'Ses Klonlama',
      'Voice Isolator': 'Ses Ayırıcı',
      'API Access': 'API Erişimi',
      'Commercial License': 'Ticari Lisans',
      'Priority Support': 'Öncelikli Destek',
      'Team Collaboration': 'Takım İşbirliği'
    }
    return featureTranslations[feature] || feature
  }

  // Translate service descriptions
  const translateFeatureDesc = (desc: string, rates?: any) => {
    if (i18n.language !== 'tr') {
      if (desc.includes('Natural voices')) {
        return 'Natural voice generation service'
      } else if (desc.includes('Custom music from prompts')) {
        return 'Custom music creation service from text prompts'
      } else if (desc.includes('Clone any voice')) {
        return 'Professional voice replication service'
      } else if (desc.includes('Separate vocals')) {
        return 'Vocal separation and audio enhancement service'
      } else if (desc.includes('Integrate into applications')) {
        return 'API integration service for developers'
      } else if (desc.includes('Use for commercial purposes')) {
        return 'Commercial usage rights for generated content'
      } else if (desc.includes('24/7 dedicated support')) {
        return '24/7 dedicated support team'
      }
      return desc
    }
    
    if (desc.includes('Natural voices')) {
      return 'Doğal ses üretim hizmeti'
    } else if (desc.includes('Custom music from prompts')) {
      return 'Metin açıklamalarından özel müzik oluşturma hizmeti'
    } else if (desc.includes('Clone any voice')) {
      return 'Profesyonel ses kopyalama hizmeti'
    } else if (desc.includes('Separate vocals')) {
      return 'Vokal ayrıştırma ve ses geliştirme hizmeti'
    } else if (desc.includes('Integrate into applications')) {
      return 'Geliştiriciler için API entegrasyon hizmeti'
    } else if (desc.includes('Use for commercial purposes')) {
      return 'Üretilen içerikler için ticari kullanım hakları'
    } else if (desc.includes('24/7 dedicated support')) {
      return '7/24 özel destek ekibi'
    }
    return desc
  }

  const getStaticPlans = (): Plan[] => [
    {
      _id: '1',
      name: 'free',
      displayName: 'Free',
      description: 'Try VeeqAI with 5K free credits',
      pricing: {
        monthly: { amount: 0, currency: 'USD' },
        yearly: { amount: 0, currency: 'USD' }
      },
      credits: {
        monthly: 5000,
        rates: {
          tts: 1,
          music: { per30Seconds: 200, per60Seconds: 400 },
          voiceClone: { creation: 2000, usage: 1 },
          voiceIsolator: { perMinute: 100 }
        }
      },
      features: {
        textToSpeech: true,
        musicGeneration: true,
        voiceCloning: false,
        voiceIsolator: false,
        apiAccess: false,
        commercialLicense: false,
        prioritySupport: false
      },
      display: {
        order: 1,
        featured: false,
        popular: false,
        badge: '',
        color: 'gray',
        icon: 'star'
      },
      status: 'active' as const,
      target: 'individual' as const
    },
    {
      _id: '2',
      name: 'starter',
      displayName: 'Starter',
      description: '67% more credits than ElevenLabs Starter',
      pricing: {
        monthly: { amount: 9, currency: 'USD' },
        yearly: { amount: 90, currency: 'USD', discount: 17 }
      },
      credits: {
        monthly: 50000,
        rates: {
          tts: 1,
          music: { per30Seconds: 200, per60Seconds: 400 },
          voiceClone: { creation: 2000, usage: 1 },
          voiceIsolator: { perMinute: 100 }
        }
      },
      features: {
        textToSpeech: true,
        musicGeneration: true,
        voiceCloning: true,
        voiceIsolator: false,
        apiAccess: true,
        commercialLicense: true,
        prioritySupport: true
      },
      display: {
        order: 2,
        featured: false,
        popular: true,
        badge: 'Most Popular',
        color: 'blue',
        icon: 'zap'
      },
      status: 'active' as const,
      target: 'individual' as const
    },
    {
      _id: '3',
      name: 'creator',
      displayName: 'Creator',
      description: '100% more credits than ElevenLabs Creator',
      pricing: {
        monthly: { amount: 19, currency: 'USD' },
        yearly: { amount: 190, currency: 'USD', discount: 17 }
      },
      credits: {
        monthly: 200000,
        rates: {
          tts: 1,
          music: { per30Seconds: 200, per60Seconds: 400 },
          voiceClone: { creation: 2000, usage: 1 },
          voiceIsolator: { perMinute: 100 }
        }
      },
      features: {
        textToSpeech: true,
        musicGeneration: true,
        voiceCloning: true,
        voiceIsolator: true,
        apiAccess: true,
        commercialLicense: true,
        prioritySupport: true
      },
      display: {
        order: 3,
        featured: false,
        popular: false,
        badge: '',
        color: 'purple',
        icon: 'crown'
      },
      status: 'active' as const,
      target: 'individual' as const
    },
    {
      _id: '4',
      name: 'pro',
      displayName: 'Professional',
      description: '50% cheaper than ElevenLabs Pro + 50% more credits',
      pricing: {
        monthly: { amount: 49, currency: 'USD' },
        yearly: { amount: 490, currency: 'USD', discount: 17 }
      },
      credits: {
        monthly: 750000,
        rates: {
          tts: 1,
          music: { per30Seconds: 200, per60Seconds: 400 },
          voiceClone: { creation: 2000, usage: 1 },
          voiceIsolator: { perMinute: 100 }
        }
      },
      features: {
        textToSpeech: true,
        musicGeneration: true,
        voiceCloning: true,
        voiceIsolator: true,
        apiAccess: true,
        commercialLicense: true,
        prioritySupport: true,
        unlimitedVoiceClones: true,
        dedicatedEndpoint: true,
        slaGuarantee: true
      },
      display: {
        order: 4,
        featured: false,
        popular: false,
        badge: 'Best Value',
        color: 'green',
        icon: 'shield'
      },
      status: 'active' as const,
      target: 'team' as const
    },
    {
      _id: '5',
      name: 'enterprise',
      displayName: 'Enterprise',
      description: 'Custom solutions for large organizations',
      pricing: {
        monthly: { amount: 199, currency: 'USD' },
        yearly: { amount: 1990, currency: 'USD', discount: 17 }
      },
      credits: {
        monthly: 3000000,
        rates: {
          tts: 1,
          music: { per30Seconds: 200, per60Seconds: 400 },
          voiceClone: { creation: 2000, usage: 1 },
          voiceIsolator: { perMinute: 100 }
        }
      },
      features: {
        textToSpeech: true,
        musicGeneration: true,
        voiceCloning: true,
        voiceIsolator: true,
        apiAccess: true,
        commercialLicense: true,
        prioritySupport: true,
        unlimitedVoiceClones: true,
        dedicatedEndpoint: true,
        slaGuarantee: true,
        ssoSupport: true,
        customDomain: true,
        dedicatedManager: true
      },
      display: {
        order: 5,
        featured: false,
        popular: false,
        badge: '',
        color: 'indigo',
        icon: 'shield'
      },
      status: 'active' as const,
      target: 'enterprise' as const
    }
  ]

  const getFaqs = () => {
    if (i18n.language === 'tr') {
      return [
        {
          question: 'Hizmet paketleri nedir ve nasıl çalışır?',
          answer: 'Hizmet paketleri kullanım tabanlı sistemimizdir. Her AI özelliği farklı hizmet miktarları içerir: Metin Seslendirme hizmeti, Müzik Üretim hizmeti, Ses Klonlama hizmeti ve Ses Ayırıcı hizmeti dahildir.'
        },
        {
          question: 'Kullanılmayan hizmetler sonraki aya devredilir mi?',
          answer: 'Evet! Kullanılmayan hizmet haklarınız otomatik olarak sonraki faturalama dönemine devredilir. 3 aya kadar hizmet hakları biriktirebilirsiniz, bu da VeeqAI\'ı nasıl kullandığınızda esneklik sağlar.'
        },
        {
          question: 'Aboneliğimi istediğim zaman iptal edebilir miyim?',
          answer: 'Kesinlikle! Aboneliğinizi hesap ayarlarından istediğiniz zaman iptal edebilirsiniz. Planınız mevcut faturalama döneminin sonuna kadar aktif kalacak ve kullanılmayan tüm hizmet haklarınızı saklayacaksınız.'
        },
        {
          question: 'Aylık ve yıllık faturalama arasındaki fark nedir?',
          answer: 'Yıllık faturalama size %17 indirim sağlar (2 ay ücretsiz eşdeğeri) ve yılda bir kez faturalandırılır. Aylık faturalama her ay tahsil edilir. Her iki seçenek de aynı özellikleri ve hizmet tahsislerini içerir.'
        },
        {
          question: 'İade sunuyor musunuz?',
          answer: 'Tüm ücretli planlar için 14 günlük para iade garantisi sunuyoruz. İlk 14 gün içinde VeeqAI\'dan memnun kalmazsanız, tam para iadesi için destek ekibimizle iletişime geçin.'
        },
        {
          question: 'Planımı yükseltebilir veya düşürebilir miyim?',
          answer: 'Evet, planınızı istediğiniz zaman değiştirebilirsiniz. Yükseltmeler orantılı faturalandırma ile anında yürürlüğe girer. Düşürmeler bir sonraki faturalama döneminin başında yürürlüğe girer.'
        },
        {
          question: 'API mevcut mu?',
          answer: 'Evet! API erişimi Başlangıç planından itibaren mevcuttur. Profesyonel plan, kurumsal uygulamalar için özel uç noktalar ve daha yüksek hız limitleri içerir.'
        },
        {
          question: 'Metin seslendirme için hangi diller destekleniyor?',
          answer: 'VeeqAI İngilizce, İspanyolca, Fransızca, Almanca, İtalyanca, Portekizce, Türkçe ve daha birçoğu dahil olmak üzere 29\'den fazla dili destekler. AI modellerimiz çeşitli çok dilli veri setleri üzerinde eğitilmiştir.'
        }
      ]
    } else {
      return [
        {
          question: 'What are service packages and how do they work?',
          answer: 'Service packages are our usage-based system. Each AI feature includes different service amounts: Text-to-Speech service, Music Generation service, Voice Cloning service, and Voice Isolator service are included.'
        },
        {
          question: 'Do unused services roll over to the next month?',
          answer: 'Yes! Unused service allowances automatically roll over to the next billing cycle. You can accumulate up to 3 months worth of service rights, giving you flexibility in how you use VeeqAI.'
        },
        {
          question: 'Can I cancel my subscription anytime?',
          answer: 'Absolutely! You can cancel your subscription at any time from your account settings. Your plan will remain active until the end of your current billing period, and you\'ll keep all unused service allowances.'
        },
        {
          question: 'What\'s the difference between monthly and yearly billing?',
          answer: 'Yearly billing gives you a 17% discount (equivalent to 2 months free) and is billed once per year. Monthly billing is charged every month. Both options include the same features and service allocations.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer a 14-day money-back guarantee for all paid plans. If you\'re not satisfied with VeeqAI within the first 14 days, contact our support team for a full refund.'
        },
        {
          question: 'Can I upgrade or downgrade my plan?',
          answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately with prorated billing. Downgrades take effect at the start of your next billing cycle.'
        },
        {
          question: 'Is there an API available?',
          answer: 'Yes! API access is available starting from the Starter plan. The Professional plan includes dedicated endpoints and higher rate limits for enterprise applications.'
        },
        {
          question: 'What languages are supported for text-to-speech?',
          answer: 'VeeqAI supports over 29 languages including English, Spanish, French, German, Italian, Portuguese, Turkish, and many more. Our AI models are trained on diverse multilingual datasets.'
        }
      ]
    }
  }


  const formatServiceAllowance = (credits: number, language: string = 'en') => {
    if (credits >= 1000000) {
      return language === 'tr' ? 'Sınırsız' : 'Unlimited'
    } else if (credits >= 500000) {
      return language === 'tr' ? 'Geniş Paket' : 'Premium Package'
    } else if (credits >= 100000) {
      return language === 'tr' ? 'İleri Paket' : 'Advanced Package'
    } else if (credits >= 10000) {
      return language === 'tr' ? 'Standart Paket' : 'Standard Package'
    } else if (credits >= 1000) {
      return language === 'tr' ? 'Başlangıç Paketi' : 'Starter Package'
    }
    return language === 'tr' ? 'Sınırlı Paket' : 'Limited Package'
  }

  const getPlanIcon = (iconType: string) => {
    switch (iconType) {
      case 'star':
        return Star
      case 'zap':
        return Zap
      case 'crown':
        return Crown
      case 'shield':
        return Shield
      default:
        return Star
    }
  }

  const getPrice = (plan: Plan) => {
    if (billingCycle === 'yearly' && plan.pricing.yearly) {
      return plan.pricing.yearly.amount
    }
    return plan.pricing.monthly.amount
  }

  const getMonthlyEquivalent = (plan: Plan) => {
    if (billingCycle === 'yearly' && plan.pricing.yearly && plan.pricing.yearly.amount > 0) {
      return (plan.pricing.yearly.amount / 12).toFixed(1)
    }
    return null
  }

  // Remove heavy loading screen, just show skeleton instead

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              {i18n.language === 'tr' ? 'Planınızı Seçin' : 'Choose Your Plan'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {i18n.language === 'tr' ? 'Esnek fiyatlandırma planlarımızla AI destekli ses üretiminin tüm potansiyelini açığa çıkarın' : 'Unlock the full potential of AI-powered audio creation with our flexible pricing plans'}
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center">
              <div className="bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    billingCycle === 'monthly'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {i18n.language === 'tr' ? 'Aylık' : 'Monthly'}
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    billingCycle === 'yearly'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {i18n.language === 'tr' ? 'Yıllık' : 'Yearly'}
                  <span className="ml-2 px-2 py-1 bg-gray-100 text-black text-xs rounded-full">
                    {i18n.language === 'tr' ? '%17 Tasarruf' : 'Save 17%'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Plans Grid */}
          {loading ? (
            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 animate-pulse">
                  <div className="text-center mb-8">
                    <div className="h-6 bg-gray-200 rounded mx-auto w-24 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mx-auto w-32"></div>
                  </div>
                  <div className="text-center mb-8">
                    <div className="h-12 bg-gray-200 rounded mx-auto w-20 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded mx-auto w-16"></div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 mb-8">
                    <div className="h-8 bg-gray-200 rounded mx-auto w-16 mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded mx-auto w-24"></div>
                  </div>
                  <div className="space-y-3 mb-8">
                    {[1, 2, 3, 4].map((j) => (
                      <div key={j} className="flex items-center">
                        <div className="w-4 h-4 bg-gray-200 rounded-full mr-3"></div>
                        <div className="h-4 bg-gray-200 rounded flex-1"></div>
                      </div>
                    ))}
                  </div>
                  <div className="h-12 bg-gray-200 rounded-xl"></div>
                </div>
              ))}
            </div>
          ) : plans.length > 0 ? (
            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
              {plans.map((plan, index) => {
              const price = getPrice(plan)
              const monthlyEquivalent = getMonthlyEquivalent(plan)
              const isFree = price === 0

              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg border flex flex-col ${
                    plan.display.popular
                      ? 'border-black border-2'
                      : 'border-gray-200'
                  }`}
                >
                  {/* Badge */}
                  {plan.display.badge && (
                    <div className="absolute -top-2 right-4 z-10">
                      <div className={`text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wide shadow-lg ${
                        plan.display.popular ? 'bg-orange-500' : 'bg-blue-500'
                      }`}>
                        {plan.display.badge}
                      </div>
                    </div>
                  )}

                  <div className="p-8 flex flex-col flex-grow">
                    {/* Plan Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {translatePlanName(plan.displayName)}
                      </h3>
                      <div className="h-5 flex items-center justify-center">
                        {plan.pricing.monthly.amount === 0 ? (
                          <p className="text-sm text-gray-500">
                            {i18n.language === 'tr' ? 'Sınırlı süre' : 'Limited-time'}
                          </p>
                        ) : monthlyEquivalent && (
                          <p className="text-sm text-gray-500">
                            ${monthlyEquivalent}/{i18n.language === 'tr' ? 'ay yıllık faturalandırma' : 'month billed annually'}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="text-center mb-8">
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-5xl font-bold text-gray-900">
                          ${price}
                        </span>
                        <span className="text-gray-500 ml-2">
                          /{billingCycle === 'yearly' ? (i18n.language === 'tr' ? 'yıl' : 'year') : (i18n.language === 'tr' ? 'ay' : 'month')}
                        </span>
                      </div>
                      <div className="h-6 flex items-center justify-center mt-1">
                        {billingCycle === 'yearly' && plan.pricing.yearly?.discount && (
                          <div className="text-sm text-black">
                            {i18n.language === 'tr' ? `Yıllık %${plan.pricing.yearly.discount} tasarruf` : `Save ${plan.pricing.yearly.discount}% annually`}
                          </div>
                        )}
                        {billingCycle === 'yearly' && !plan.pricing.yearly && plan.pricing.monthly.amount > 0 && (
                          <div className="text-sm text-gray-500">
                            {i18n.language === 'tr' ? 'Yıllık yakında gelecek' : 'Yearly coming soon'}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Credits */}
                    <div className="text-center mb-8 h-24 flex items-center justify-center">
                      <div className="bg-gray-50 rounded-lg p-4 w-full flex flex-col justify-center min-h-[80px] border border-gray-200">
                        <div className="text-3xl font-bold text-black mb-1 min-w-[60px] flex items-center justify-center">
                          {formatServiceAllowance(plan.credits.monthly, i18n.language)}
                        </div>
                        <div className="text-sm text-gray-600">
                          {billingCycle === 'yearly' ? (i18n.language === 'tr' ? 'yıllık hizmet' : 'yearly services') : (i18n.language === 'tr' ? 'aylık hizmet' : 'monthly services')}
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8 flex-grow">
                      {plan.features.textToSpeech && (
                        <div className="flex items-start">
                          <Check className="w-4 h-4 text-black mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-gray-900 text-sm font-medium">
                              {translateFeature('Lifelike Text-to-Speech')}
                            </div>
                            <div className="text-gray-600 text-xs">
                              {translateFeatureDesc('Natural voices', plan.credits.rates)}
                            </div>
                          </div>
                        </div>
                      )}
                      {plan.features.musicGeneration && (
                        <div className="flex items-start">
                          <Check className="w-4 h-4 text-black mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-gray-900 text-sm font-medium">
                              {translateFeature('AI Music Generation')}
                            </div>
                            <div className="text-gray-600 text-xs">
                              {translateFeatureDesc('Custom music from prompts', plan.credits.rates)}
                            </div>
                          </div>
                        </div>
                      )}
                      {plan.features.voiceCloning && (
                        <div className="flex items-start">
                          <Check className="w-4 h-4 text-black mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-gray-900 text-sm font-medium">
                              {translateFeature('Voice Cloning')}
                            </div>
                            <div className="text-gray-600 text-xs">
                              {translateFeatureDesc('Clone any voice', plan.credits.rates)}
                            </div>
                          </div>
                        </div>
                      )}
                      {plan.features.voiceIsolator && (
                        <div className="flex items-start">
                          <Check className="w-4 h-4 text-black mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-gray-900 text-sm font-medium">
                              {translateFeature('Voice Isolator')}
                            </div>
                            <div className="text-gray-600 text-xs">
                              {translateFeatureDesc('Separate vocals', plan.credits.rates)}
                            </div>
                          </div>
                        </div>
                      )}
                      {plan.features.apiAccess && (
                        <div className="flex items-start">
                          <Check className="w-4 h-4 text-black mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-gray-900 text-sm font-medium">
                              {translateFeature('API Access')}
                            </div>
                            <div className="text-gray-600 text-xs">
                              {translateFeatureDesc('Integrate into applications')}
                            </div>
                          </div>
                        </div>
                      )}
                      {plan.features.commercialLicense && (
                        <div className="flex items-start">
                          <Check className="w-4 h-4 text-black mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-gray-900 text-sm font-medium">
                              {translateFeature('Commercial License')}
                            </div>
                            <div className="text-gray-600 text-xs">
                              {translateFeatureDesc('Use for commercial purposes')}
                            </div>
                          </div>
                        </div>
                      )}
                      {plan.features.unlimitedVoiceClones && (
                        <div className="flex items-start">
                          <Check className="w-4 h-4 text-black mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-gray-900 text-sm font-medium">
                              Unlimited Voice Clones
                            </div>
                            <div className="text-gray-600 text-xs">
                              Create as many voices as needed
                            </div>
                          </div>
                        </div>
                      )}
                      {plan.features.dedicatedEndpoint && (
                        <div className="flex items-start">
                          <Check className="w-4 h-4 text-black mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-gray-900 text-sm font-medium">
                              Dedicated API Endpoint
                            </div>
                            <div className="text-gray-600 text-xs">
                              Higher rate limits and performance
                            </div>
                          </div>
                        </div>
                      )}
                      {plan.features.slaGuarantee && (
                        <div className="flex items-start">
                          <Check className="w-4 h-4 text-black mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-gray-900 text-sm font-medium">
                              SLA Guarantee
                            </div>
                            <div className="text-gray-600 text-xs">
                              99.9% uptime guarantee
                            </div>
                          </div>
                        </div>
                      )}
                      {plan.features.prioritySupport && (
                        <div className="flex items-start">
                          <Check className="w-4 h-4 text-black mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-gray-900 text-sm font-medium">
                              {translateFeature('Priority Support')}
                            </div>
                            <div className="text-gray-600 text-xs">
                              {translateFeatureDesc('24/7 dedicated support')}
                            </div>
                          </div>
                        </div>
                      )}
                      {plan.features.ssoSupport && (
                        <div className="flex items-start">
                          <Check className="w-4 h-4 text-black mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-gray-900 text-sm font-medium">
                              SSO Support
                            </div>
                            <div className="text-gray-600 text-xs">
                              Single sign-on integration
                            </div>
                          </div>
                        </div>
                      )}
                      {plan.features.customDomain && (
                        <div className="flex items-start">
                          <Check className="w-4 h-4 text-black mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-gray-900 text-sm font-medium">
                              Custom Domain
                            </div>
                            <div className="text-gray-600 text-xs">
                              White-label with your domain
                            </div>
                          </div>
                        </div>
                      )}
                      {plan.features.dedicatedManager && (
                        <div className="flex items-start">
                          <Check className="w-4 h-4 text-black mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-gray-900 text-sm font-medium">
                              Dedicated Manager
                            </div>
                            <div className="text-gray-600 text-xs">
                              Personal account manager
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <a
                        href={`https://app.veeq.ai${i18n.language === 'tr' ? '/tr' : ''}/register`}
                        className={`block w-full py-4 px-6 rounded-xl font-semibold text-sm text-center ${
                          plan.display.popular
                            ? 'bg-black text-white shadow-lg hover:bg-gray-800'
                            : isFree
                            ? 'bg-black text-white hover:bg-gray-800'
                            : 'bg-black text-white hover:bg-gray-800'
                        } transition-colors`}
                      >
                        {isFree 
                          ? (i18n.language === 'tr' ? 'Ücretsiz Başla' : 'Start Free') 
                          : (i18n.language === 'tr' ? 'Başla' : 'Get Started')
                        }
                      </a>
                    </div>
                  </div>
                </div>
              )
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600">{i18n.language === 'tr' ? 'Henüz plan bulunamadı' : 'No plans found'}</p>
            </div>
          )}

          {/* Comparison Table */}
          {plans.length > 0 && (
            <div className="mb-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {i18n.language === 'tr' ? 'Özellikleri Karşılaştır' : 'Compare Features'}
                </h2>
                <p className="text-gray-600">
                  {i18n.language === 'tr' ? 'Planlar arasındaki farkları görün ve size en uygun olanı seçin' : 'See the differences between plans and choose the one that fits you best'}
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-lg">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">{i18n.language === 'tr' ? 'Özellikler' : 'Features'}</th>
                      {plans.map((plan, index) => (
                        <th key={plan._id || index} className="text-center py-4 px-6 font-semibold text-gray-900 min-w-[120px]">
                          {translatePlanName(plan.displayName)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium text-gray-900">{billingCycle === 'yearly' ? (i18n.language === 'tr' ? 'Yıllık Hizmetler' : 'Yearly Services') : (i18n.language === 'tr' ? 'Aylık Hizmetler' : 'Monthly Services')}</td>
                      {plans.map((plan, index) => (
                        <td key={plan._id || index} className="py-4 px-6 text-center text-gray-700">
                          {formatServiceAllowance(plan.credits.monthly, i18n.language)}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium text-gray-900">{translateFeature('Lifelike Text-to-Speech')}</td>
                      {plans.map((plan, index) => (
                        <td key={plan._id || index} className="py-4 px-6 text-center">
                          {plan.features.textToSpeech ? (
                            <Check className="w-5 h-5 text-black mx-auto" />
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium text-gray-900">{translateFeature('AI Music Generation')}</td>
                      {plans.map((plan, index) => (
                        <td key={plan._id || index} className="py-4 px-6 text-center">
                          {plan.features.musicGeneration ? (
                            <Check className="w-5 h-5 text-black mx-auto" />
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium text-gray-900">{translateFeature('Voice Cloning')}</td>
                      {plans.map((plan, index) => (
                        <td key={plan._id || index} className="py-4 px-6 text-center">
                          {plan.features.voiceCloning ? (
                            <Check className="w-5 h-5 text-black mx-auto" />
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium text-gray-900">{translateFeature('Voice Isolator')}</td>
                      {plans.map((plan, index) => (
                        <td key={plan._id || index} className="py-4 px-6 text-center">
                          {plan.features.voiceIsolator ? (
                            <Check className="w-5 h-5 text-black mx-auto" />
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium text-gray-900">{translateFeature('API Access')}</td>
                      {plans.map((plan, index) => (
                        <td key={plan._id || index} className="py-4 px-6 text-center">
                          {plan.features.apiAccess ? (
                            <Check className="w-5 h-5 text-black mx-auto" />
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium text-gray-900">{translateFeature('Commercial License')}</td>
                      {plans.map((plan, index) => (
                        <td key={plan._id || index} className="py-4 px-6 text-center">
                          {plan.features.commercialLicense ? (
                            <Check className="w-5 h-5 text-black mx-auto" />
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium text-gray-900">{translateFeature('Priority Support')}</td>
                      {plans.map((plan, index) => (
                        <td key={plan._id || index} className="py-4 px-6 text-center">
                          {plan.features.prioritySupport ? (
                            <Check className="w-5 h-5 text-black mx-auto" />
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {i18n.language === 'tr' ? 'Sık Sorulan Sorular' : 'Frequently Asked Questions'}
              </h2>
              <p className="text-gray-600">
                {i18n.language === 'tr' ? 'Merak edilen konular hakkında detaylı bilgiler' : 'Get answers to the most common questions'}
              </p>
            </div>

            <div className="space-y-4">
              {getFaqs().map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                {i18n.language === 'tr' ? 'Hâlâ sorularınız mı var?' : 'Still have questions?'}
              </p>
              <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                {i18n.language === 'tr' ? 'Destek Ekibiyle İletişim' : 'Contact Support'}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PricingPage