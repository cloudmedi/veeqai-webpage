export const apiEndpoints = [
  // Authentication Endpoints
  {
    id: 'auth-register',
    method: 'POST' as const,
    path: '/api/auth/register',
    title: 'Kullanıcı Kaydı',
    description: 'Yeni kullanıcı hesabı oluşturun ve JWT token alın.',
    category: 'authentication',
    tags: ['auth', 'signup'],
    authentication: false,
    requestBody: {
      required: true,
      contentType: 'application/json',
      schema: 'RegisterRequest',
      example: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'securepassword123'
      }, null, 2)
    },
    responses: [
      {
        status: 201,
        description: 'User created successfully',
        body: JSON.stringify({
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          user: {
            id: 'user_12345',
            name: 'John Doe',
            email: 'john@example.com',
            credits: 5000,
            voiceSlots: {
              used: 0,
              total: 10
            }
          }
        }, null, 2)
      },
      {
        status: 400,
        description: 'Validation error',
        body: JSON.stringify({
          success: false,
          error: 'User already exists',
          code: 'USER_EXISTS'
        }, null, 2)
      }
    ],
    parameters: [
      {
        name: 'name',
        type: 'string',
        required: true,
        description: 'Full name of the user',
        example: 'John Doe'
      },
      {
        name: 'email',
        type: 'string',
        required: true,
        description: 'Valid email address',
        example: 'john@example.com'
      },
      {
        name: 'password',
        type: 'string',
        required: true,
        description: 'Password (minimum 6 characters)',
        example: 'securepassword123'
      }
    ]
  },
  {
    id: 'auth-login',
    method: 'POST' as const,
    path: '/api/auth/login',
    title: 'Kullanıcı Girişi',
    description: 'Kullanıcı kimlik doğrulaması yapın ve JWT token alın.',
    category: 'authentication',
    tags: ['auth', 'login'],
    authentication: false,
    requestBody: {
      required: true,
      contentType: 'application/json',
      schema: 'LoginRequest',
      example: JSON.stringify({
        email: 'john@example.com',
        password: 'securepassword123'
      }, null, 2)
    },
    responses: [
      {
        status: 200,
        description: 'Login successful',
        body: JSON.stringify({
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          user: {
            id: 'user_12345',
            name: 'John Doe',
            email: 'john@example.com',
            credits: 4850,
            voiceSlots: {
              used: 2,
              total: 10
            }
          }
        }, null, 2)
      },
      {
        status: 401,
        description: 'Invalid credentials',
        body: JSON.stringify({
          success: false,
          error: 'Invalid credentials',
          code: 'INVALID_CREDENTIALS'
        }, null, 2)
      }
    ]
  },
  {
    id: 'auth-me',
    method: 'GET' as const,
    path: '/api/auth/me',
    title: 'Mevcut Kullanıcıyı Al',
    description: 'Mevcut kullanıcı bilgileri ve kredi bakiyesini alın.',
    category: 'authentication',
    tags: ['auth', 'user'],
    authentication: true,
    responses: [
      {
        status: 200,
        description: 'User information retrieved',
        body: JSON.stringify({
          user: {
            id: 'user_12345',
            name: 'John Doe',
            email: 'john@example.com',
            credits: 4850,
            voiceSlots: {
              used: 2,
              total: 10
            },
            subscription: {
              plan: 'free',
              status: 'active'
            }
          }
        }, null, 2)
      }
    ]
  },
  
  // Music Generation Endpoints
  {
    id: 'music-generate',
    method: 'POST' as const,
    path: '/api/music/generate',
    title: 'Müzik Üret',
    description: 'AI modelleri kullanarak metin komutlarından orijinal müzik oluşturun.',
    category: 'music',
    tags: ['music', 'generate', 'ai'],
    authentication: true,
    credits: 10,
    rateLimit: '10 requests/minute',
    requestBody: {
      required: true,
      contentType: 'application/json',
      schema: 'MusicGenerateRequest',
      example: JSON.stringify({
        prompt: 'Upbeat electronic dance music with synthesizers',
        modelId: 'meta-musicgen-large',
        duration: 30,
        style: 'electronic',
        lyrics: ''
      }, null, 2)
    },
    parameters: [
      {
        name: 'prompt',
        type: 'string',
        required: true,
        description: 'Text description of the music to generate',
        example: 'Upbeat electronic dance music'
      },
      {
        name: 'modelId',
        type: 'string',
        required: true,
        description: 'ID of the AI model to use for generation',
        example: 'meta-musicgen-large'
      },
      {
        name: 'duration',
        type: 'number',
        required: false,
        description: 'Duration in seconds (10-120)',
        example: '30',
        default: '30'
      },
      {
        name: 'style',
        type: 'string',
        required: false,
        description: 'Musical style or genre',
        example: 'electronic'
      },
      {
        name: 'lyrics',
        type: 'string',
        required: false,
        description: 'Lyrics for the music (if supported by model)',
        example: ''
      }
    ],
    responses: [
      {
        status: 200,
        description: 'Music generation started',
        body: JSON.stringify({
          success: true,
          data: {
            _id: 'music_67890',
            title: 'Upbeat electronic dance music',
            prompt: 'Upbeat electronic dance music with synthesizers',
            audioUrl: null,
            status: 'processing',
            duration: 30,
            createdAt: '2024-01-15T10:30:00Z',
            credits: {
              consumed: 10,
              remaining: 4840,
              utilizationPercent: 0.2
            }
          },
          message: 'Music generation started successfully'
        }, null, 2)
      },
      {
        status: 402,
        description: 'Insufficient credits',
        body: JSON.stringify({
          success: false,
          error: 'Insufficient credits',
          code: 'INSUFFICIENT_CREDITS',
          details: {
            required: 10,
            available: 5
          }
        }, null, 2)
      }
    ]
  },
  {
    id: 'music-models',
    method: 'GET' as const,
    path: '/api/music/models',
    title: 'Mevcut Modelleri Al',
    description: 'Retrieve list of available AI models for music generation.',
    category: 'music',
    tags: ['music', 'models'],
    authentication: true,
    parameters: [
      {
        name: 'type',
        type: 'string',
        required: false,
        description: 'Filter by model type',
        example: 'music',
        enum: ['music', 'tts', 'all']
      }
    ],
    responses: [
      {
        status: 200,
        description: 'Models retrieved successfully',
        body: JSON.stringify({
          success: true,
          data: [
            {
              _id: 'model_123',
              name: 'musicgen-large',
              displayName: 'Meta MusicGen Large',
              description: 'High-quality music generation model by Meta',
              type: 'music',
              provider: {
                name: 'replicate'
              },
              pricing: {
                baseCost: 10
              },
              status: 'active'
            }
          ]
        }, null, 2)
      }
    ]
  },
  {
    id: 'music-my-music',
    method: 'GET' as const,
    path: '/api/music/my-music',
    title: 'Kullanıcı Müziklerini Al',
    description: 'Retrieve user\'s generated music library with pagination.',
    category: 'music',
    tags: ['music', 'library'],
    authentication: true,
    parameters: [
      {
        name: 'page',
        type: 'number',
        required: false,
        description: 'Page number for pagination',
        example: '1',
        default: '1'
      },
      {
        name: 'limit',
        type: 'number',
        required: false,
        description: 'Number of items per page',
        example: '10',
        default: '10'
      },
      {
        name: 'status',
        type: 'string',
        required: false,
        description: 'Filter by status',
        example: 'completed',
        enum: ['processing', 'completed', 'failed', 'all']
      }
    ],
    responses: [
      {
        status: 200,
        description: 'Music library retrieved',
        body: JSON.stringify({
          success: true,
          data: [
            {
              _id: 'music_67890',
              title: 'Upbeat Electronic Track',
              prompt: 'Upbeat electronic dance music',
              audioUrl: 'https://cdn.veeq.ai/audio/music_67890.mp3',
              duration: 30,
              status: 'completed',
              plays: 5,
              likes: [],
              createdAt: '2024-01-15T10:30:00Z'
            }
          ],
          pagination: {
            page: 1,
            limit: 10,
            total: 25,
            pages: 3
          }
        }, null, 2)
      }
    ]
  },
  
  // Text-to-Speech Endpoints
  {
    id: 'speech-generate',
    method: 'POST' as const,
    path: '/api/speech/generate',
    title: 'Konuşma Üret',
    description: 'Convert text to natural-sounding speech using AI voices.',
    category: 'speech',
    tags: ['tts', 'speech', 'voice'],
    authentication: true,
    credits: 5,
    rateLimit: '20 requests/minute',
    requestBody: {
      required: true,
      contentType: 'application/json',
      schema: 'SpeechGenerateRequest',
      example: JSON.stringify({
        text: 'Hello, welcome to Veeq AI. This is a sample text-to-speech generation.',
        voiceId: 'voice-1',
        voiceName: 'Professional Male',
        model: 'speech-2.5-hd',
        language: 'en'
      }, null, 2)
    },
    parameters: [
      {
        name: 'text',
        type: 'string',
        required: true,
        description: 'Text to convert to speech (max 5000 characters)',
        example: 'Hello, welcome to Veeq AI'
      },
      {
        name: 'voiceId',
        type: 'string',
        required: true,
        description: 'ID of the voice to use',
        example: 'voice-1'
      },
      {
        name: 'voiceName',
        type: 'string',
        required: false,
        description: 'Name of the voice (for reference)',
        example: 'Professional Male'
      },
      {
        name: 'model',
        type: 'string',
        required: false,
        description: 'TTS model to use',
        example: 'speech-2.5-hd',
        enum: ['speech-2.5-hd', 'speech-1.0', 'custom'],
        default: 'speech-2.5-hd'
      },
      {
        name: 'language',
        type: 'string',
        required: false,
        description: 'Language code',
        example: 'en',
        enum: ['en', 'es', 'fr', 'de', 'it', 'pt', 'zh'],
        default: 'en'
      }
    ],
    responses: [
      {
        status: 200,
        description: 'Speech generated successfully',
        body: JSON.stringify({
          speech: {
            id: 'speech_98765',
            text: 'Hello, welcome to Veeq AI...',
            voiceName: 'Professional Male',
            fileUrl: 'https://cdn.veeq.ai/speech/speech_98765.mp3',
            duration: 12,
            createdAt: '2024-01-15T10:30:00Z'
          },
          creditsRemaining: 4995,
          voiceSlotsRemaining: 9
        }, null, 2)
      },
      {
        status: 400,
        description: 'Text too long',
        body: JSON.stringify({
          success: false,
          error: 'Text exceeds maximum length of 5000 characters',
          code: 'TEXT_TOO_LONG'
        }, null, 2)
      }
    ]
  },
  {
    id: 'speech-voices',
    method: 'GET' as const,
    path: '/api/speech/voices/list',
    title: 'Mevcut Sesleri Al',
    description: 'Retrieve list of available voice models for text-to-speech.',
    category: 'speech',
    tags: ['tts', 'voices'],
    authentication: true,
    parameters: [
      {
        name: 'language',
        type: 'string',
        required: false,
        description: 'Filter by language',
        example: 'en',
        enum: ['en', 'es', 'fr', 'de', 'it', 'pt', 'zh', 'all']
      },
      {
        name: 'type',
        type: 'string',
        required: false,
        description: 'Filter by voice type',
        example: 'male',
        enum: ['male', 'female', 'neutral', 'all']
      }
    ],
    responses: [
      {
        status: 200,
        description: 'Voices retrieved successfully',
        body: JSON.stringify([
          {
            id: 'voice-1',
            name: 'Trustworthy Man',
            language: 'en',
            type: 'male',
            description: 'Professional male voice with clear articulation'
          },
          {
            id: 'voice-2',
            name: 'Graceful Lady',
            language: 'en',
            type: 'female',
            description: 'Elegant female voice with warm tone'
          }
        ], null, 2)
      }
    ]
  },
  
  // Credits & Billing Endpoints
  {
    id: 'credits-info',
    method: 'GET' as const,
    path: '/api/music/credits/info',
    title: 'Kredi Bilgilerini Al',
    description: 'Check user\'s current credit balance and plan details.',
    category: 'credits',
    tags: ['credits', 'billing'],
    authentication: true,
    responses: [
      {
        status: 200,
        description: 'Credit information retrieved',
        body: JSON.stringify({
          success: true,
          data: {
            available: 4990,
            used: 10,
            total: 5000,
            utilizationPercent: 0.2,
            plan: {
              id: 'free',
              name: 'Free Plan',
              credits: {
                monthly: 5000
              }
            }
          }
        }, null, 2)
      }
    ]
  },
  {
    id: 'credits-calculate',
    method: 'POST' as const,
    path: '/api/music/credits/calculate',
    title: 'İşlem Maliyetini Hesapla',
    description: 'Estimate credit cost before making a request.',
    category: 'credits',
    tags: ['credits', 'cost'],
    authentication: true,
    requestBody: {
      required: true,
      contentType: 'application/json',
      schema: 'CostCalculateRequest',
      example: JSON.stringify({
        service: 'music',
        duration: 60,
        modelId: 'meta-musicgen-large'
      }, null, 2)
    },
    parameters: [
      {
        name: 'service',
        type: 'string',
        required: true,
        description: 'Service type',
        example: 'music',
        enum: ['music', 'speech', 'voice-cloning']
      },
      {
        name: 'duration',
        type: 'number',
        required: false,
        description: 'Duration in seconds (for music/speech)',
        example: '60'
      },
      {
        name: 'modelId',
        type: 'string',
        required: false,
        description: 'Specific model ID for accurate pricing',
        example: 'meta-musicgen-large'
      }
    ],
    responses: [
      {
        status: 200,
        description: 'Cost calculated successfully',
        body: JSON.stringify({
          success: true,
          data: {
            service: 'music',
            parameters: {
              duration: 60,
              modelId: 'meta-musicgen-large'
            },
            cost: 20,
            available: 4990,
            hasEnoughCredits: true,
            shortfall: 0
          }
        }, null, 2)
      }
    ]
  }
]