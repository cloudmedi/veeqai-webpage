export interface SearchResult {
  id: string
  title: string
  content: string
  path: string
  section: string
  type: 'page' | 'section' | 'code' | 'endpoint'
  score?: number
}

export interface SearchIndex {
  pages: SearchResult[]
}

// Create search index with all documentation content
export const searchIndex: SearchIndex = {
  pages: [
    // Introduction Page
    {
      id: 'intro-main',
      title: 'Introduction',
      content: 'Veeq AI Public API Documentation Welcome to Veeq AI — your gateway to cutting-edge AI audio technology. Our API empowers developers, artists, and creators to generate, transform, and remix audio in revolutionary ways. Whether you\'re building the next-gen AI music tool, automating voice workflows, or just experimenting with creative audio conversions — we\'ve got you covered.',
      path: '/docs',
      section: 'Getting Started',
      type: 'page'
    },
    {
      id: 'intro-music',
      title: 'Music Generation (MusicAI)',
      content: 'Turn text prompts into full-length songs. Generate music from text descriptions using advanced AI models.',
      path: '/docs',
      section: 'Getting Started',
      type: 'section'
    },
    {
      id: 'intro-voice',
      title: 'Voice Changing',
      content: 'Convert any voice into a new one — ideal for character work, privacy, or creativity. Transform voices with AI.',
      path: '/docs',
      section: 'Getting Started',
      type: 'section'
    },
    {
      id: 'intro-tts',
      title: 'Text-to-Speech (TTS)',
      content: 'Convert text to expressive voice using custom voice profiles. Generate speech from text with natural voices.',
      path: '/docs',
      section: 'Getting Started',
      type: 'section'
    },
    {
      id: 'intro-audio',
      title: 'Audio Processing',
      content: 'De-noise, de-echo, and de-reverb your recordings. Clean and enhance audio quality.',
      path: '/docs',
      section: 'Getting Started',
      type: 'section'
    },

    // Authentication Page
    {
      id: 'auth-main',
      title: 'Authentication',
      content: 'Authentication Veeq AI API uses JSON Web Tokens (JWT) for authentication. You need to obtain an API key and use it to generate access tokens.',
      path: '/docs/authentication',
      section: 'Getting Started',
      type: 'page'
    },
    {
      id: 'auth-jwt',
      title: 'JWT Token Authentication',
      content: 'JWT authentication bearer token API key security authorization',
      path: '/docs/authentication',
      section: 'Getting Started',
      type: 'section'
    },

    // Quick Start Page
    {
      id: 'quickstart-main',
      title: 'Quick Start',
      content: 'Quick Start Guide Get started with Veeq AI API in minutes. This guide will walk you through making your first API call.',
      path: '/docs/quick-start',
      section: 'Getting Started',
      type: 'page'
    },
    {
      id: 'quickstart-install',
      title: 'Installation',
      content: 'npm install curl python javascript sdk installation setup',
      path: '/docs/quick-start',
      section: 'Getting Started',
      type: 'code'
    },

    // API Explorer
    {
      id: 'explorer-main',
      title: 'API Explorer',
      content: 'API Explorer Interactive API testing tool. Test API endpoints directly from your browser with real-time responses.',
      path: '/docs/api-explorer',
      section: 'Getting Started',
      type: 'page'
    },

    // Endpoints
    {
      id: 'endpoints-main',
      title: 'All Endpoints',
      content: 'API Endpoints Complete reference of all Veeq AI API endpoints. Music generation, text-to-speech, voice cloning, audio processing.',
      path: '/docs/endpoints',
      section: 'API Reference',
      type: 'page'
    },
    {
      id: 'endpoint-music',
      title: 'POST /api/music/generate',
      content: 'Generate music from text prompts. Create songs, melodies, and audio tracks using AI.',
      path: '/docs/endpoints',
      section: 'API Reference',
      type: 'endpoint'
    },
    {
      id: 'endpoint-tts',
      title: 'POST /api/tts/generate',
      content: 'Text-to-speech conversion. Convert text to natural sounding speech with custom voices.',
      path: '/docs/endpoints',
      section: 'API Reference',
      type: 'endpoint'
    },
    {
      id: 'endpoint-voice-clone',
      title: 'POST /api/voice/clone',
      content: 'Clone and transform voices. Change voice characteristics and create new voice profiles.',
      path: '/docs/endpoints',
      section: 'API Reference',
      type: 'endpoint'
    },
    {
      id: 'endpoint-audio-process',
      title: 'POST /api/audio/process',
      content: 'Process and enhance audio. Remove noise, echo, reverb and improve audio quality.',
      path: '/docs/endpoints',
      section: 'API Reference',
      type: 'endpoint'
    },

    // Payment Methods
    {
      id: 'payment-main',
      title: 'Payment Methods',
      content: 'Payment Methods Manage payment methods and billing information for your Veeq AI account. Credit cards, debit cards, Turkish payment methods.',
      path: '/docs/payment-methods',
      section: 'Billing & Payments',
      type: 'page'
    },
    {
      id: 'payment-cards',
      title: 'Credit & Debit Cards',
      content: 'Visa Mastercard American Express credit card debit card payment',
      path: '/docs/payment-methods',
      section: 'Billing & Payments',
      type: 'section'
    },
    {
      id: 'payment-turkish',
      title: 'Turkish Payment Methods',
      content: 'iyzico BKM Express 3D Secure Turkish Lira TRY payment methods Turkey',
      path: '/docs/payment-methods',
      section: 'Billing & Payments',
      type: 'section'
    },

    // Stripe Integration
    {
      id: 'stripe-main',
      title: 'Stripe Integration',
      content: 'Stripe Integration Integrate Stripe payments for international users with our comprehensive API. Payment intents, webhooks, credit cards.',
      path: '/docs/stripe-integration',
      section: 'Billing & Payments',
      type: 'page'
    },
    {
      id: 'stripe-setup',
      title: 'Setup Stripe',
      content: 'npm install stripe @stripe/stripe-js @stripe/react-stripe-js setup installation',
      path: '/docs/stripe-integration',
      section: 'Billing & Payments',
      type: 'code'
    },
    {
      id: 'stripe-payment-intent',
      title: 'Create Payment Intent',
      content: 'payment intent create payment stripe checkout credit card processing',
      path: '/docs/stripe-integration',
      section: 'Billing & Payments',
      type: 'section'
    },
    {
      id: 'stripe-webhook',
      title: 'Webhook Handling',
      content: 'webhook stripe payment_intent.succeeded invoice.payment_succeeded callback',
      path: '/docs/stripe-integration',
      section: 'Billing & Payments',
      type: 'section'
    },

    // iyzico Integration
    {
      id: 'iyzico-main',
      title: 'iyzico Integration',
      content: 'iyzico Integration Integrate iyzico payments for Turkish users with full local payment method support. Turkish Lira, 3D Secure, installments.',
      path: '/docs/iyzico-integration',
      section: 'Billing & Payments',
      type: 'page'
    },
    {
      id: 'iyzico-setup',
      title: 'Setup iyzico',
      content: 'npm install iyzipay setup installation Turkish payment gateway',
      path: '/docs/iyzico-integration',
      section: 'Billing & Payments',
      type: 'code'
    },
    {
      id: 'iyzico-payment',
      title: 'Create Payment',
      content: 'iyzico payment create checkout Turkish Lira TRY installment 3D Secure',
      path: '/docs/iyzico-integration',
      section: 'Billing & Payments',
      type: 'section'
    },

    // Billing Management
    {
      id: 'billing-main',
      title: 'Billing Management',
      content: 'Billing Management Manage subscriptions, invoices, and billing information through our API. Credits, usage, plans, invoices.',
      path: '/docs/billing-management',
      section: 'Billing & Payments',
      type: 'page'
    },
    {
      id: 'billing-subscription',
      title: 'Subscription Management',
      content: 'subscription plan upgrade cancel resume billing management API endpoints',
      path: '/docs/billing-management',
      section: 'Billing & Payments',
      type: 'section'
    },
    {
      id: 'billing-invoices',
      title: 'Invoice Management',
      content: 'invoices billing invoice download PDF payment history',
      path: '/docs/billing-management',
      section: 'Billing & Payments',
      type: 'section'
    },
    {
      id: 'billing-credits',
      title: 'Credits & Usage',
      content: 'credits usage statistics monthly allowance overage credits purchase',
      path: '/docs/billing-management',
      section: 'Billing & Payments',
      type: 'section'
    },

    // Tools & SDKs
    {
      id: 'sdk-main',
      title: 'SDK Generator',
      content: 'SDK Generator Generate SDKs in multiple programming languages. Python, JavaScript, PHP, Ruby, Go, Java.',
      path: '/docs/sdk-generator',
      section: 'Tools & SDKs',
      type: 'page'
    },
    {
      id: 'postman-main',
      title: 'Postman Collection',
      content: 'Postman Collection Import Veeq AI API collection into Postman for easy testing and development.',
      path: '/docs/postman',
      section: 'Tools & SDKs',
      type: 'page'
    },
    {
      id: 'openapi-main',
      title: 'OpenAPI Spec',
      content: 'OpenAPI Specification Swagger documentation API specification JSON YAML format.',
      path: '/docs/openapi',
      section: 'Tools & SDKs',
      type: 'page'
    },

    // Support
    {
      id: 'errors-main',
      title: 'Error Handling',
      content: 'Error Handling API errors, status codes, error messages and troubleshooting guide.',
      path: '/docs/error-handling',
      section: 'Support',
      type: 'page'
    },
    {
      id: 'limits-main',
      title: 'Rate Limits',
      content: 'Rate Limits API rate limiting, request limits, throttling, quotas and best practices.',
      path: '/docs/rate-limits',
      section: 'Support',
      type: 'page'
    },
    {
      id: 'help-main',
      title: 'Get Help',
      content: 'Get Help Support, contact information, community, documentation and troubleshooting resources.',
      path: '/docs/help',
      section: 'Support',
      type: 'page'
    }
  ]
}

// Simple text search function
export const searchDocumentation = (query: string): SearchResult[] => {
  if (!query.trim()) return []
  
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 1)
  
  return searchIndex.pages
    .map(page => {
      let score = 0
      const titleLower = page.title.toLowerCase()
      const contentLower = page.content.toLowerCase()
      
      searchTerms.forEach(term => {
        // Title matches are worth more
        if (titleLower.includes(term)) {
          score += titleLower === term ? 100 : 50
        }
        
        // Content matches
        if (contentLower.includes(term)) {
          score += 10
        }
        
        // Exact phrase bonus
        if (titleLower.includes(query.toLowerCase())) {
          score += 200
        }
        if (contentLower.includes(query.toLowerCase())) {
          score += 50
        }
      })
      
      return { ...page, score }
    })
    .filter(page => page.score! > 0)
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, 10) // Limit to top 10 results
}