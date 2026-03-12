'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  // PLACEHOLDER: Navigation structure - customize menu items
  const navItems = [
    {
      label: 'About Us',
      href: '/about',
      submenu: [
        { label: 'Mission and History', href: '/about/mission' },
        { label: 'Leadership', href: '/about/leadership' },
        { label: 'Partners', href: '/about/partners' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      label: 'History',
      href: '/history',
      submenu: [
        { label: 'Timeline', href: '/history/timeline' },
        { label: 'Archive', href: '/history/archive' },
        { label: 'Historical Sites', href: '/history/sites' },
      ],
    },
    {
      label: 'Programs',
      href: '/programs',
      submenu: [
        { label: 'Lecture Series', href: '/programs/lectures' },
        { label: 'Events Calendar', href: '/programs/calendar' },
        { label: 'Past Programs', href: '/programs/past' },
      ],
    },
    {
      label: 'Get Involved',
      href: '/get-involved',
      submenu: [
        { label: 'Volunteer', href: '/get-involved/volunteer' },
        { label: 'Committees', href: '/get-involved/committees' },
        { label: 'Support Us', href: '/get-involved/support' },
      ],
    },
    {
      label: 'Resources',
      href: '/resources',
      submenu: [
        { label: 'Publications', href: '/resources/publications' },
        { label: 'Archives', href: '/resources/archives' },
        { label: 'Research Tools', href: '/resources/research' },
      ],
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  return (
    <nav className="bg-primary text-white" role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1 py-2 flex-1">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="block px-4 py-2 font-bold hover:bg-primary-dark rounded transition-colors"
                >
                  {item.label}
                </Link>
                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.label && (
                  <ul className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-b min-w-48 py-2 z-50">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.href}>
                        <Link
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Search Widget */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="px-3 py-1 rounded text-gray-800 text-sm w-40 focus:w-52 transition-all focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Search"
            />
            <button
              type="submit"
              className="p-2 hover:bg-primary-dark rounded transition-colors"
              aria-label="Submit search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          {/* Mobile Menu Button */}
          <div className="lg:hidden py-3 flex items-center justify-between w-full">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none p-2"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="px-3 py-1 rounded text-gray-800 text-sm w-32 focus:outline-none"
                aria-label="Search"
              />
            </form>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="lg:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 px-4 font-bold hover:bg-primary-dark rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {/* Mobile Submenu */}
                {item.submenu && (
                  <ul className="pl-6 space-y-1">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.href}>
                        <Link
                          href={subItem.href}
                          className="block py-1 px-4 text-sm hover:bg-primary-dark rounded"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
