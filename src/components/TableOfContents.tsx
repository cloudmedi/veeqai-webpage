import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

interface Heading {
  id: string
  text: string
  level: number
}

const TableOfContents: React.FC = () => {
  const { t } = useTranslation()
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Immediately clear headings when route changes
    setHeadings([])
    setIsLoaded(false)
    
    // Wait for DOM to update after route change
    const timeout = setTimeout(() => {
      // Get all h1, h2, h3 elements from main content only (not sidebar)
      const mainContent = document.querySelector('main .container')
      if (!mainContent) {
        setIsLoaded(true)
        return
      }
      
      const headingElements = mainContent.querySelectorAll('h1, h2, h3')
      const headingsData: Heading[] = []

      headingElements.forEach((element, index) => {
        // Create ID if it doesn't exist
        if (!element.id) {
          const text = element.textContent || ''
          element.id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || `heading-${index}`
        }

        headingsData.push({
          id: element.id,
          text: element.textContent || '',
          level: parseInt(element.tagName.charAt(1))
        })
      })
      
      setHeadings(headingsData)
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timeout)
  }, [location.pathname])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-100px 0px -66%',
        threshold: 0
      }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 120 // Header + padding offset
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  // Always show the card, even when empty
  const showContent = isLoaded && headings.length >= 2

  return (
    <div className="hidden xl:block fixed top-[9rem] right-8 w-64">
      <div>
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">{t('tableOfContents.title')}</h4>
          {showContent && (
            <nav className="space-y-1">
              {headings.map((heading) => (
                <button
                  key={heading.id}
                  onClick={() => handleClick(heading.id)}
                  className={`block text-left w-full px-2 py-1 text-sm rounded transition-colors ${
                    activeId === heading.id
                      ? 'text-black bg-gray-100 font-medium'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  } ${
                    heading.level === 2 ? 'ml-0' : heading.level === 3 ? 'ml-4' : 'ml-0'
                  }`}
                >
                  {heading.text}
                </button>
              ))}
            </nav>
          )}
        </div>
      </div>
    </div>
  )
}

export default TableOfContents