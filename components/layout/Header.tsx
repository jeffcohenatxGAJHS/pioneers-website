'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Placeholder slides - replace with actual images
  const slides = [
    { id: 1, alt: 'Slide 1 placeholder', citation: 'Photo Credit 1' },
    { id: 2, alt: 'Slide 2 placeholder', citation: 'Photo Credit 2' },
    { id: 3, alt: 'Slide 3 placeholder', citation: 'Photo Credit 3' },
  ]

  // Auto-advance slideshow every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <header className="w-full bg-sky-50 sticky top-0 z-50 shadow-sm">
      {/* Banner Section */}
      <div className="py-6 px-4">
        <div className="max-w-6xl mx-auto flex items-end justify-between gap-8">
          {/* Logo and Mission Statement */}
          <div className="flex flex-col items-center">
            <Link href="/" className="hover:opacity-90">
              {/* PLACEHOLDER: Logo - Replace with actual logo */}
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-bold text-3xl mb-2">
                P
              </div>
            </Link>
            {/* Mission Statement */}
            <div className="border-2 border-primary p-3 max-w-xs text-center">
              <p className="text-sm text-gray-700">
                {/* PLACEHOLDER: Mission Statement */}
                Mission statement goes here. Describe your organization&apos;s purpose and goals.
              </p>
            </div>
          </div>

          {/* Slideshow Banner */}
          <div className="flex-1 max-w-md relative">
            <div className="relative h-48 bg-gray-200 rounded overflow-hidden">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {/* PLACEHOLDER: Replace with actual images */}
                  <span className="text-gray-600 text-lg">{slide.alt}</span>
                </div>
              ))}
            </div>
            {/* Photo Citation */}
            <p className="text-xs text-gray-500 mt-1 text-right">
              {slides[currentSlide].citation}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <Navigation />
    </header>
  )
}
