import React from 'react'
import { Check, Star, Zap } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Pricing: React.FC = () => {
  const { t } = useTranslation()

  const plans = [
    {
      name: t('pricing.plans.free.name'),
      price: t('pricing.plans.free.price'),
      period: t('pricing.plans.free.period'),
      credits: t('pricing.plans.free.credits'),
      description: t('pricing.plans.free.description'),
      features: t('pricing.plans.free.features', { returnObjects: true }) as string[],
      popular: false,
      cta: t('pricing.plans.free.cta')
    },
    {
      name: t('pricing.plans.starter.name'),
      price: t('pricing.plans.starter.price'),
      period: t('pricing.plans.starter.period'),
      credits: t('pricing.plans.starter.credits'),
      description: t('pricing.plans.starter.description'),
      features: t('pricing.plans.starter.features', { returnObjects: true }) as string[],
      popular: true,
      cta: t('pricing.plans.starter.cta')
    },
    {
      name: t('pricing.plans.creator.name'),
      price: t('pricing.plans.creator.price'),
      period: t('pricing.plans.creator.period'),
      credits: t('pricing.plans.creator.credits'),
      description: t('pricing.plans.creator.description'),
      features: t('pricing.plans.creator.features', { returnObjects: true }) as string[],
      popular: false,
      cta: t('pricing.plans.creator.cta')
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular 
                  ? 'border-primary scale-105 lg:scale-110' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    {t('pricing.mostPopular')}
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <div className="text-primary font-semibold mb-2">
                    {plan.credits}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-primary-600'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('pricing.creditSystem.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('pricing.creditSystem.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold text-gray-900 dark:text-white">{t('pricing.creditSystem.textToSpeech')}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{t('pricing.creditSystem.textToSpeechDesc')}</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold text-gray-900 dark:text-white">{t('pricing.creditSystem.musicGeneration')}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{t('pricing.creditSystem.musicGenerationDesc')}</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold text-gray-900 dark:text-white">{t('pricing.creditSystem.voiceCloning')}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{t('pricing.creditSystem.voiceCloningDesc')}</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold text-gray-900 dark:text-white">{t('pricing.creditSystem.voiceIsolator')}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{t('pricing.creditSystem.voiceIsolatorDesc')}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {t('pricing.enterprise.description')}
          </p>
          <button className="btn-secondary">
            {t('pricing.enterprise.cta')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Pricing