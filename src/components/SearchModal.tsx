import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X, FileText, Code, Hash, CreditCard } from 'lucide-react'
import { searchDocumentation, SearchResult } from '../utils/searchIndex'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      setQuery('')
      setResults([])
      setSelectedIndex(0)
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchDocumentation(query)
      setResults(searchResults)
      setSelectedIndex(0)
    } else {
      setResults([])
    }
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && results.length > 0) {
      e.preventDefault()
      handleResultClick(results[selectedIndex])
    }
  }

  const handleResultClick = (result: SearchResult) => {
    navigate(result.path)
    onClose()
  }

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'page':
        return <FileText className="w-4 h-4" />
      case 'code':
        return <Code className="w-4 h-4" />
      case 'endpoint':
        return <Hash className="w-4 h-4" />
      case 'section':
        return <CreditCard className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'page':
        return 'text-blue-600 bg-blue-100'
      case 'code':
        return 'text-green-600 bg-green-100'
      case 'endpoint':
        return 'text-purple-600 bg-purple-100'
      case 'section':
        return 'text-orange-600 bg-orange-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-start justify-center min-h-screen pt-16 px-4">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
        
        <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl">
          {/* Search Input */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-200">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search documentation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 text-lg outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {query.trim() === '' ? (
              <div className="p-8 text-center text-gray-500">
                <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p className="text-lg font-medium mb-2">Search Documentation</p>
                <p className="text-sm">
                  Search for API endpoints, guides, code examples, and more.
                </p>
              </div>
            ) : results.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <p className="text-lg font-medium mb-2">No results found</p>
                <p className="text-sm">
                  Try different keywords or check your spelling.
                </p>
              </div>
            ) : (
              <div className="py-2">
                {results.map((result, index) => (
                  <div
                    key={result.id}
                    className={`flex items-start gap-3 p-3 mx-2 rounded-lg cursor-pointer transition-colors ${
                      index === selectedIndex
                        ? 'bg-gray-100'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleResultClick(result)}
                  >
                    <div className={`p-2 rounded ${getTypeColor(result.type)}`}>
                      {getResultIcon(result.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-black truncate">
                          {result.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(result.type)}`}>
                          {result.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {result.content}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {result.section} • {result.path}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-3 text-xs text-gray-400 border-t border-gray-200 bg-gray-50 rounded-b-xl">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-white border border-gray-200 rounded">↑</kbd>
                <kbd className="px-2 py-1 bg-white border border-gray-200 rounded">↓</kbd>
                to navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-white border border-gray-200 rounded">↵</kbd>
                to select
              </span>
            </div>
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white border border-gray-200 rounded">esc</kbd>
              to close
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchModal