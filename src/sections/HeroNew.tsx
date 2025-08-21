import React, { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, Download, Sparkles, Globe, Zap, Shield } from 'lucide-react'

const HeroNew: React.FC = () => {
  const [text, setText] = useState("Experience the most realistic and versatile AI audio. Create voiceovers, audiobooks, podcasts, and more.")
  const [selectedVoice, setSelectedVoice] = useState("Rachel")
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeTab, setActiveTab] = useState("create")

  const voices = [
    { name: "Rachel", accent: "American", type: "Young Adult" },
    { name: "Drew", accent: "British", type: "Middle Aged" },
    { name: "Clyde", accent: "American", type: "War Veteran" },
    { name: "Paul", accent: "British", type: "News" },
    { name: "Domi", accent: "American", type: "Young Adult" },
    { name: "Dave", accent: "British-Essex", type: "Young Adult" },
    { name: "Fin", accent: "Irish", type: "Old Man" },
    { name: "Sarah", accent: "American", type: "Soft" },
  ]

  return (
    <section className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">AI Voice Technology</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Create the most realistic speech with AI
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Convert text to lifelike speech, featuring celebrity clones, synthetic voices, and our cutting-edge speech model.
            </p>
          </div>

          {/* TTS Demo Card */}
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-800 p-8 lg:p-10 mb-12">
            {/* Tab Switcher */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setActiveTab("create")}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === "create" 
                    ? "bg-white text-black" 
                    : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
              >
                Create
              </button>
              <button
                onClick={() => setActiveTab("clone")}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === "clone" 
                    ? "bg-white text-black" 
                    : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
              >
                Clone a Voice
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Side - Text Input */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-3">
                    Text to convert
                  </label>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full h-40 bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none resize-none"
                    placeholder="Enter text to convert to speech..."
                  />
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">{text.length} characters</span>
                    <span className="text-xs text-gray-500">~{Math.ceil(text.length / 150)} credits</span>
                  </div>
                </div>

                {/* Voice Selection Grid */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-3">
                    Choose a voice
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {voices.map((voice) => (
                      <button
                        key={voice.name}
                        onClick={() => setSelectedVoice(voice.name)}
                        className={`p-3 rounded-lg border transition-all ${
                          selectedVoice === voice.name
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-gray-700 bg-gray-800/30 hover:border-gray-600"
                        }`}
                      >
                        <div className="text-left">
                          <div className="font-medium text-white">{voice.name}</div>
                          <div className="text-xs text-gray-500">{voice.accent} • {voice.type}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Audio Player & Settings */}
              <div className="space-y-6">
                {/* Settings */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Model
                    </label>
                    <select className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-blue-500 focus:outline-none">
                      <option>Eleven Multilingual v2</option>
                      <option>Eleven Turbo v2</option>
                      <option>Eleven English v1</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Language
                    </label>
                    <select className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-blue-500 focus:outline-none">
                      <option>🇺🇸 English</option>
                      <option>🇹🇷 Turkish</option>
                      <option>🇪🇸 Spanish</option>
                      <option>🇫🇷 French</option>
                      <option>🇩🇪 German</option>
                    </select>
                  </div>
                </div>

                {/* Voice Settings Sliders */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-400">Stability</label>
                      <span className="text-sm text-gray-500">50%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full w-1/2"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-400">Clarity + Similarity</label>
                      <span className="text-sm text-gray-500">75%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>

                {/* Generate Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-3">
                  <Volume2 className="w-5 h-5" />
                  Generate Speech
                </button>

                {/* Audio Player Preview */}
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                      </button>
                      <div>
                        <div className="text-sm font-medium">{selectedVoice} Voice</div>
                        <div className="text-xs text-gray-500">Ready to generate</div>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Waveform Placeholder */}
                  <div className="h-16 bg-gray-900/50 rounded-lg flex items-center justify-center">
                    <div className="flex items-center gap-1">
                      {[...Array(30)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-gray-600 rounded-full"
                          style={{
                            height: `${Math.random() * 32 + 8}px`,
                            opacity: 0.3 + Math.random() * 0.7
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-900/30 rounded-2xl p-6 border border-gray-800">
              <Globe className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">29 Languages</h3>
              <p className="text-gray-400 text-sm">Generate speech in multiple languages with perfect pronunciation</p>
            </div>
            <div className="bg-gray-900/30 rounded-2xl p-6 border border-gray-800">
              <Zap className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Ultra Fast</h3>
              <p className="text-gray-400 text-sm">Generate hours of audio in seconds with our optimized models</p>
            </div>
            <div className="bg-gray-900/30 rounded-2xl p-6 border border-gray-800">
              <Shield className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-400 text-sm">Your data is encrypted and never used for training</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <a href="http://localhost:5173/register" className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors mr-4">
              Get Started Free
            </a>
            <a href="/pricing" className="inline-block border border-gray-700 text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors">
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroNew