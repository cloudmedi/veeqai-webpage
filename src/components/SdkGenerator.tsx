import React, { useState } from 'react'
import { Download, Copy, Check, Code, FileText, Package } from 'lucide-react'

interface SdkGeneratorProps {
  baseUrl?: string
}

const SdkGenerator: React.FC<SdkGeneratorProps> = ({ baseUrl = 'https://api.veeq.ai' }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const languages = [
    { id: 'javascript', name: 'JavaScript/Node.js', icon: '📜' },
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'php', name: 'PHP', icon: '🐘' },
    { id: 'curl', name: 'cURL', icon: '🌐' },
    { id: 'go', name: 'Go', icon: '🔷' },
    { id: 'ruby', name: 'Ruby', icon: '💎' }
  ]

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const generateJavaScriptSDK = () => {
    return `// Veeq AI JavaScript/Node.js SDK
class VeeqAI {
  constructor(apiKey) {
    this.apiKey = apiKey
    this.baseUrl = '${baseUrl}/api'
  }

  async request(endpoint, method = 'GET', data = null) {
    const headers = {
      'Authorization': \`Bearer \${this.apiKey}\`,
      'Content-Type': 'application/json'
    }

    const config = {
      method,
      headers
    }

    if (data && method !== 'GET') {
      config.body = JSON.stringify(data)
    }

    const response = await fetch(\`\${this.baseUrl}\${endpoint}\`, config)
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`)
    }
    
    return await response.json()
  }

  // Authentication
  async getCurrentUser() {
    return await this.request('/auth/me')
  }

  // Music Generation
  async generateMusic(prompt, modelId, options = {}) {
    const data = {
      prompt,
      modelId,
      duration: options.duration || 30,
      style: options.style || '',
      lyrics: options.lyrics || ''
    }
    return await this.request('/music/generate', 'POST', data)
  }

  async getAvailableModels(type = 'all') {
    const endpoint = type === 'all' ? '/music/models' : \`/music/models?type=\${type}\`
    return await this.request(endpoint)
  }

  async getUserMusic(page = 1, limit = 10) {
    return await this.request(\`/music/my-music?page=\${page}&limit=\${limit}\`)
  }

  // Text-to-Speech
  async generateSpeech(text, voiceId, options = {}) {
    const data = {
      text,
      voiceId,
      voiceName: options.voiceName || '',
      model: options.model || 'speech-2.5-hd',
      language: options.language || 'en'
    }
    return await this.request('/speech/generate', 'POST', data)
  }

  async getAvailableVoices(language = 'all') {
    const endpoint = language === 'all' ? '/speech/voices/list' : \`/speech/voices/list?language=\${language}\`
    return await this.request(endpoint)
  }

  // Credits
  async getCreditInfo() {
    return await this.request('/music/credits/info')
  }

  async calculateCost(service, duration, modelId = null) {
    const data = { service, duration }
    if (modelId) data.modelId = modelId
    return await this.request('/music/credits/calculate', 'POST', data)
  }
}

// Usage Example:
const veeq = new VeeqAI('your-jwt-token-here')

// Generate music
veeq.generateMusic('Upbeat electronic dance music', 'meta-musicgen-large', {
  duration: 30,
  style: 'electronic'
}).then(result => {
  console.log('Music generation started:', result)
}).catch(error => {
  console.error('Error:', error)
})

// Generate speech
veeq.generateSpeech('Hello, welcome to Veeq AI!', 'voice-1', {
  language: 'en'
}).then(result => {
  console.log('Speech generated:', result)
}).catch(error => {
  console.error('Error:', error)
})

module.exports = VeeqAI`
  }

  const generatePythonSDK = () => {
    return `# Veeq AI Python SDK
import requests
import json
from typing import Optional, Dict, Any

class VeeqAI:
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.base_url = "${baseUrl}/api"
        self.session = requests.Session()
        self.session.headers.update({
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        })

    def _request(self, endpoint: str, method: str = 'GET', data: Optional[Dict] = None) -> Dict[str, Any]:
        url = f"{self.base_url}{endpoint}"
        
        try:
            if method == 'GET':
                response = self.session.get(url)
            elif method == 'POST':
                response = self.session.post(url, json=data)
            elif method == 'PUT':
                response = self.session.put(url, json=data)
            elif method == 'DELETE':
                response = self.session.delete(url)
            else:
                raise ValueError(f"Unsupported HTTP method: {method}")
            
            response.raise_for_status()
            return response.json()
            
        except requests.exceptions.RequestException as e:
            raise Exception(f"API request failed: {e}")

    # Authentication
    def get_current_user(self) -> Dict[str, Any]:
        """Get current user information and credit balance."""
        return self._request('/auth/me')

    # Music Generation
    def generate_music(self, prompt: str, model_id: str, duration: int = 30, 
                      style: str = '', lyrics: str = '') -> Dict[str, Any]:
        """Generate music from text prompt."""
        data = {
            'prompt': prompt,
            'modelId': model_id,
            'duration': duration,
            'style': style,
            'lyrics': lyrics
        }
        return self._request('/music/generate', 'POST', data)

    def get_available_models(self, model_type: str = 'all') -> Dict[str, Any]:
        """Get list of available AI models."""
        endpoint = '/music/models'
        if model_type != 'all':
            endpoint += f'?type={model_type}'
        return self._request(endpoint)

    def get_user_music(self, page: int = 1, limit: int = 10) -> Dict[str, Any]:
        """Get user's generated music library."""
        return self._request(f'/music/my-music?page={page}&limit={limit}')

    # Text-to-Speech
    def generate_speech(self, text: str, voice_id: str, voice_name: str = '',
                       model: str = 'speech-2.5-hd', language: str = 'en') -> Dict[str, Any]:
        """Generate speech from text."""
        data = {
            'text': text,
            'voiceId': voice_id,
            'voiceName': voice_name,
            'model': model,
            'language': language
        }
        return self._request('/speech/generate', 'POST', data)

    def get_available_voices(self, language: str = 'all') -> Dict[str, Any]:
        """Get list of available voices."""
        endpoint = '/speech/voices/list'
        if language != 'all':
            endpoint += f'?language={language}'
        return self._request(endpoint)

    # Credits
    def get_credit_info(self) -> Dict[str, Any]:
        """Get current credit balance and plan details."""
        return self._request('/music/credits/info')

    def calculate_cost(self, service: str, duration: int, model_id: Optional[str] = None) -> Dict[str, Any]:
        """Calculate cost for an operation."""
        data = {'service': service, 'duration': duration}
        if model_id:
            data['modelId'] = model_id
        return self._request('/music/credits/calculate', 'POST', data)

# Usage Example:
if __name__ == "__main__":
    # Initialize client
    veeq = VeeqAI('your-jwt-token-here')
    
    try:
        # Generate music
        music_result = veeq.generate_music(
            prompt='Upbeat electronic dance music',
            model_id='meta-musicgen-large',
            duration=30,
            style='electronic'
        )
        print("Music generation started:", music_result)
        
        # Generate speech
        speech_result = veeq.generate_speech(
            text='Hello, welcome to Veeq AI!',
            voice_id='voice-1',
            language='en'
        )
        print("Speech generated:", speech_result)
        
    except Exception as e:
        print(f"Error: {e}")`
  }

  const generatePHPSDK = () => {
    return `<?php
// Veeq AI PHP SDK
class VeeqAI {
    private $apiKey;
    private $baseUrl;
    
    public function __construct($apiKey) {
        $this->apiKey = $apiKey;
        $this->baseUrl = '${baseUrl}/api';
    }
    
    private function request($endpoint, $method = 'GET', $data = null) {
        $url = $this->baseUrl . $endpoint;
        
        $headers = [
            'Authorization: Bearer ' . $this->apiKey,
            'Content-Type: application/json'
        ];
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        
        switch ($method) {
            case 'POST':
                curl_setopt($ch, CURLOPT_POST, true);
                if ($data) {
                    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
                }
                break;
            case 'PUT':
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
                if ($data) {
                    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
                }
                break;
            case 'DELETE':
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
                break;
        }
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        if ($httpCode >= 400) {
            throw new Exception("HTTP Error: $httpCode");
        }
        
        return json_decode($response, true);
    }
    
    // Authentication
    public function getCurrentUser() {
        return $this->request('/auth/me');
    }
    
    // Music Generation
    public function generateMusic($prompt, $modelId, $options = []) {
        $data = [
            'prompt' => $prompt,
            'modelId' => $modelId,
            'duration' => $options['duration'] ?? 30,
            'style' => $options['style'] ?? '',
            'lyrics' => $options['lyrics'] ?? ''
        ];
        return $this->request('/music/generate', 'POST', $data);
    }
    
    public function getAvailableModels($type = 'all') {
        $endpoint = '/music/models';
        if ($type !== 'all') {
            $endpoint .= '?type=' . urlencode($type);
        }
        return $this->request($endpoint);
    }
    
    public function getUserMusic($page = 1, $limit = 10) {
        return $this->request("/music/my-music?page=$page&limit=$limit");
    }
    
    // Text-to-Speech
    public function generateSpeech($text, $voiceId, $options = []) {
        $data = [
            'text' => $text,
            'voiceId' => $voiceId,
            'voiceName' => $options['voiceName'] ?? '',
            'model' => $options['model'] ?? 'speech-2.5-hd',
            'language' => $options['language'] ?? 'en'
        ];
        return $this->request('/speech/generate', 'POST', $data);
    }
    
    public function getAvailableVoices($language = 'all') {
        $endpoint = '/speech/voices/list';
        if ($language !== 'all') {
            $endpoint .= '?language=' . urlencode($language);
        }
        return $this->request($endpoint);
    }
    
    // Credits
    public function getCreditInfo() {
        return $this->request('/music/credits/info');
    }
    
    public function calculateCost($service, $duration, $modelId = null) {
        $data = ['service' => $service, 'duration' => $duration];
        if ($modelId) {
            $data['modelId'] = $modelId;
        }
        return $this->request('/music/credits/calculate', 'POST', $data);
    }
}

// Usage Example:
try {
    $veeq = new VeeqAI('your-jwt-token-here');
    
    // Generate music
    $musicResult = $veeq->generateMusic(
        'Upbeat electronic dance music',
        'meta-musicgen-large',
        ['duration' => 30, 'style' => 'electronic']
    );
    echo "Music generation started: " . json_encode($musicResult) . "\\n";
    
    // Generate speech
    $speechResult = $veeq->generateSpeech(
        'Hello, welcome to Veeq AI!',
        'voice-1',
        ['language' => 'en']
    );
    echo "Speech generated: " . json_encode($speechResult) . "\\n";
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\\n";
}
?>`
  }

  const generateCurlExamples = () => {
    return `# Veeq AI cURL Examples

# Set your JWT token
JWT_TOKEN="your-jwt-token-here"
BASE_URL="${baseUrl}/api"

# Get current user information
curl -X GET "$BASE_URL/auth/me" \\
  -H "Authorization: Bearer $JWT_TOKEN" \\
  -H "Content-Type: application/json"

# Generate music
curl -X POST "$BASE_URL/music/generate" \\
  -H "Authorization: Bearer $JWT_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Upbeat electronic dance music",
    "modelId": "meta-musicgen-large",
    "duration": 30,
    "style": "electronic"
  }'

# Get available models
curl -X GET "$BASE_URL/music/models" \\
  -H "Authorization: Bearer $JWT_TOKEN" \\
  -H "Content-Type: application/json"

# Get user's music library
curl -X GET "$BASE_URL/music/my-music?page=1&limit=10" \\
  -H "Authorization: Bearer $JWT_TOKEN" \\
  -H "Content-Type: application/json"

# Generate speech
curl -X POST "$BASE_URL/speech/generate" \\
  -H "Authorization: Bearer $JWT_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Hello, welcome to Veeq AI!",
    "voiceId": "voice-1",
    "model": "speech-2.5-hd",
    "language": "en"
  }'

# Get available voices
curl -X GET "$BASE_URL/speech/voices/list" \\
  -H "Authorization: Bearer $JWT_TOKEN" \\
  -H "Content-Type: application/json"

# Get credit information
curl -X GET "$BASE_URL/music/credits/info" \\
  -H "Authorization: Bearer $JWT_TOKEN" \\
  -H "Content-Type: application/json"

# Calculate operation cost
curl -X POST "$BASE_URL/music/credits/calculate" \\
  -H "Authorization: Bearer $JWT_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "service": "music",
    "duration": 60,
    "modelId": "meta-musicgen-large"
  }'`
  }

  const generateGoSDK = () => {
    return `// Veeq AI Go SDK
package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
    "time"
)

type VeeqAI struct {
    APIKey  string
    BaseURL string
    Client  *http.Client
}

type MusicGenerateRequest struct {
    Prompt   string \`json:"prompt"\`
    ModelID  string \`json:"modelId"\`
    Duration int    \`json:"duration"\`
    Style    string \`json:"style"\`
    Lyrics   string \`json:"lyrics"\`
}

type SpeechGenerateRequest struct {
    Text      string \`json:"text"\`
    VoiceID   string \`json:"voiceId"\`
    VoiceName string \`json:"voiceName"\`
    Model     string \`json:"model"\`
    Language  string \`json:"language"\`
}

func NewVeeqAI(apiKey string) *VeeqAI {
    return &VeeqAI{
        APIKey:  apiKey,
        BaseURL: "${baseUrl}/api",
        Client: &http.Client{
            Timeout: 30 * time.Second,
        },
    }
}

func (v *VeeqAI) request(endpoint, method string, data interface{}) (map[string]interface{}, error) {
    url := v.BaseURL + endpoint
    
    var body io.Reader
    if data != nil && method != "GET" {
        jsonData, err := json.Marshal(data)
        if err != nil {
            return nil, err
        }
        body = bytes.NewBuffer(jsonData)
    }
    
    req, err := http.NewRequest(method, url, body)
    if err != nil {
        return nil, err
    }
    
    req.Header.Set("Authorization", "Bearer "+v.APIKey)
    req.Header.Set("Content-Type", "application/json")
    
    resp, err := v.Client.Do(req)
    if err != nil {
        return nil, err
    }
    defer resp.Body.Close()
    
    if resp.StatusCode >= 400 {
        return nil, fmt.Errorf("HTTP error: %d", resp.StatusCode)
    }
    
    var result map[string]interface{}
    if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
        return nil, err
    }
    
    return result, nil
}

func (v *VeeqAI) GetCurrentUser() (map[string]interface{}, error) {
    return v.request("/auth/me", "GET", nil)
}

func (v *VeeqAI) GenerateMusic(prompt, modelID string, duration int, style, lyrics string) (map[string]interface{}, error) {
    data := MusicGenerateRequest{
        Prompt:   prompt,
        ModelID:  modelID,
        Duration: duration,
        Style:    style,
        Lyrics:   lyrics,
    }
    return v.request("/music/generate", "POST", data)
}

func (v *VeeqAI) GetAvailableModels(modelType string) (map[string]interface{}, error) {
    endpoint := "/music/models"
    if modelType != "all" {
        endpoint += "?type=" + modelType
    }
    return v.request(endpoint, "GET", nil)
}

func (v *VeeqAI) GenerateSpeech(text, voiceID, voiceName, model, language string) (map[string]interface{}, error) {
    data := SpeechGenerateRequest{
        Text:      text,
        VoiceID:   voiceID,
        VoiceName: voiceName,
        Model:     model,
        Language:  language,
    }
    return v.request("/speech/generate", "POST", data)
}

func (v *VeeqAI) GetCreditInfo() (map[string]interface{}, error) {
    return v.request("/music/credits/info", "GET", nil)
}

// Usage Example
func main() {
    veeq := NewVeeqAI("your-jwt-token-here")
    
    // Generate music
    musicResult, err := veeq.GenerateMusic(
        "Upbeat electronic dance music",
        "meta-musicgen-large",
        30,
        "electronic",
        "",
    )
    if err != nil {
        fmt.Printf("Error generating music: %v\\n", err)
        return
    }
    fmt.Printf("Music generation started: %+v\\n", musicResult)
    
    // Generate speech
    speechResult, err := veeq.GenerateSpeech(
        "Hello, welcome to Veeq AI!",
        "voice-1",
        "",
        "speech-2.5-hd",
        "en",
    )
    if err != nil {
        fmt.Printf("Error generating speech: %v\\n", err)
        return
    }
    fmt.Printf("Speech generated: %+v\\n", speechResult)
}`
  }

  const generateRubySDK = () => {
    return `# Veeq AI Ruby SDK
require 'net/http'
require 'json'
require 'uri'

class VeeqAI
  def initialize(api_key)
    @api_key = api_key
    @base_url = '${baseUrl}/api'
  end

  private

  def request(endpoint, method = 'GET', data = nil)
    uri = URI(@base_url + endpoint)
    
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = uri.scheme == 'https'
    
    case method.upcase
    when 'GET'
      request = Net::HTTP::Get.new(uri)
    when 'POST'
      request = Net::HTTP::Post.new(uri)
      request.body = data.to_json if data
    when 'PUT'
      request = Net::HTTP::Put.new(uri)
      request.body = data.to_json if data
    when 'DELETE'
      request = Net::HTTP::Delete.new(uri)
    end
    
    request['Authorization'] = "Bearer #{@api_key}"
    request['Content-Type'] = 'application/json'
    
    response = http.request(request)
    
    raise "HTTP Error: #{response.code}" if response.code.to_i >= 400
    
    JSON.parse(response.body)
  end

  public

  # Authentication
  def get_current_user
    request('/auth/me')
  end

  # Music Generation
  def generate_music(prompt, model_id, options = {})
    data = {
      prompt: prompt,
      modelId: model_id,
      duration: options[:duration] || 30,
      style: options[:style] || '',
      lyrics: options[:lyrics] || ''
    }
    request('/music/generate', 'POST', data)
  end

  def get_available_models(type = 'all')
    endpoint = '/music/models'
    endpoint += "?type=#{type}" unless type == 'all'
    request(endpoint)
  end

  def get_user_music(page = 1, limit = 10)
    request("/music/my-music?page=#{page}&limit=#{limit}")
  end

  # Text-to-Speech
  def generate_speech(text, voice_id, options = {})
    data = {
      text: text,
      voiceId: voice_id,
      voiceName: options[:voice_name] || '',
      model: options[:model] || 'speech-2.5-hd',
      language: options[:language] || 'en'
    }
    request('/speech/generate', 'POST', data)
  end

  def get_available_voices(language = 'all')
    endpoint = '/speech/voices/list'
    endpoint += "?language=#{language}" unless language == 'all'
    request(endpoint)
  end

  # Credits
  def get_credit_info
    request('/music/credits/info')
  end

  def calculate_cost(service, duration, model_id = nil)
    data = { service: service, duration: duration }
    data[:modelId] = model_id if model_id
    request('/music/credits/calculate', 'POST', data)
  end
end

# Usage Example
begin
  veeq = VeeqAI.new('your-jwt-token-here')
  
  # Generate music
  music_result = veeq.generate_music(
    'Upbeat electronic dance music',
    'meta-musicgen-large',
    duration: 30,
    style: 'electronic'
  )
  puts "Music generation started: #{music_result}"
  
  # Generate speech
  speech_result = veeq.generate_speech(
    'Hello, welcome to Veeq AI!',
    'voice-1',
    language: 'en'
  )
  puts "Speech generated: #{speech_result}"
  
rescue => e
  puts "Error: #{e.message}"
end`
  }

  const getCodeForLanguage = () => {
    switch (selectedLanguage) {
      case 'javascript': return generateJavaScriptSDK()
      case 'python': return generatePythonSDK()
      case 'php': return generatePHPSDK()
      case 'curl': return generateCurlExamples()
      case 'go': return generateGoSDK()
      case 'ruby': return generateRubySDK()
      default: return generateJavaScriptSDK()
    }
  }

  const getDownloadFilename = () => {
    switch (selectedLanguage) {
      case 'javascript': return 'veeq-ai-sdk.js'
      case 'python': return 'veeq_ai_sdk.py'
      case 'php': return 'VeeqAI.php'
      case 'curl': return 'veeq-api-examples.sh'
      case 'go': return 'veeq_ai_sdk.go'
      case 'ruby': return 'veeq_ai_sdk.rb'
      default: return 'veeq-ai-sdk.js'
    }
  }

  const downloadCode = () => {
    const code = getCodeForLanguage()
    const filename = getDownloadFilename()
    const blob = new Blob([code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
          <Package className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-black">SDK Generator</h3>
          <p className="text-gray-600">Download ready-to-use SDK code for your preferred language</p>
        </div>
      </div>

      {/* Language Selection */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setSelectedLanguage(lang.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedLanguage === lang.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{lang.icon}</span>
              {lang.name}
            </button>
          ))}
        </div>
      </div>

      {/* Code Display */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-800">{languages.find(l => l.id === selectedLanguage)?.name}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => copyToClipboard(getCodeForLanguage(), selectedLanguage)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              {copiedCode === selectedLanguage ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>
            <button
              onClick={downloadCode}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-black hover:bg-gray-800 text-white rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
          <pre className="text-green-400 text-sm">
            <code>{getCodeForLanguage()}</code>
          </pre>
        </div>
      </div>

      {/* Installation Instructions */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-bold text-black mb-2">Installation & Usage</h4>
        {selectedLanguage === 'javascript' && (
          <div className="text-sm text-gray-600 space-y-2">
            <p>1. Save the code as <code className="bg-gray-200 px-1 rounded">veeq-ai-sdk.js</code></p>
            <p>2. Install in your project: <code className="bg-gray-200 px-1 rounded">npm install node-fetch</code> (for Node.js)</p>
            <p>3. Import and use: <code className="bg-gray-200 px-1 rounded">const VeeqAI = require('./veeq-ai-sdk.js')</code></p>
          </div>
        )}
        {selectedLanguage === 'python' && (
          <div className="text-sm text-gray-600 space-y-2">
            <p>1. Save the code as <code className="bg-gray-200 px-1 rounded">veeq_ai_sdk.py</code></p>
            <p>2. Install dependencies: <code className="bg-gray-200 px-1 rounded">pip install requests</code></p>
            <p>3. Import and use: <code className="bg-gray-200 px-1 rounded">from veeq_ai_sdk import VeeqAI</code></p>
          </div>
        )}
        {selectedLanguage === 'php' && (
          <div className="text-sm text-gray-600 space-y-2">
            <p>1. Save the code as <code className="bg-gray-200 px-1 rounded">VeeqAI.php</code></p>
            <p>2. Include in your project: <code className="bg-gray-200 px-1 rounded">require_once 'VeeqAI.php';</code></p>
            <p>3. Create instance: <code className="bg-gray-200 px-1 rounded">$veeq = new VeeqAI('your-token');</code></p>
          </div>
        )}
        {selectedLanguage === 'curl' && (
          <div className="text-sm text-gray-600 space-y-2">
            <p>1. Save the examples as <code className="bg-gray-200 px-1 rounded">veeq-api-examples.sh</code></p>
            <p>2. Make executable: <code className="bg-gray-200 px-1 rounded">chmod +x veeq-api-examples.sh</code></p>
            <p>3. Replace <code className="bg-gray-200 px-1 rounded">your-jwt-token-here</code> with your actual token</p>
          </div>
        )}
        {selectedLanguage === 'go' && (
          <div className="text-sm text-gray-600 space-y-2">
            <p>1. Save the code as <code className="bg-gray-200 px-1 rounded">veeq_ai_sdk.go</code></p>
            <p>2. Initialize module: <code className="bg-gray-200 px-1 rounded">go mod init veeq-ai-client</code></p>
            <p>3. Run: <code className="bg-gray-200 px-1 rounded">go run veeq_ai_sdk.go</code></p>
          </div>
        )}
        {selectedLanguage === 'ruby' && (
          <div className="text-sm text-gray-600 space-y-2">
            <p>1. Save the code as <code className="bg-gray-200 px-1 rounded">veeq_ai_sdk.rb</code></p>
            <p>2. Install dependencies: <code className="bg-gray-200 px-1 rounded">gem install json</code></p>
            <p>3. Run: <code className="bg-gray-200 px-1 rounded">ruby veeq_ai_sdk.rb</code></p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SdkGenerator