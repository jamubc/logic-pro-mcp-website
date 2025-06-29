'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Github, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Docs', href: '/docs' },
    { name: 'Roadmap', href: '/roadmap' },
  ]

  return (
    <header className="fixed top-0 w-full bg-logic-dark/80 backdrop-blur-md z-50 border-b border-gray-800">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-logic-blue rounded-md flex items-center justify-center relative">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M7 6v12h10M7 18h10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <rect x="11" y="8" width="2" height="8" fill="white" opacity="0.8" />
                  <rect x="14" y="10" width="2" height="4" fill="white" opacity="0.6" />
                  <rect x="17" y="9" width="2" height="6" fill="white" opacity="0.4" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-white">Logic Pro MCP</span>
              <span className="ml-2 text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-medium">Beta</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-logic-blue'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://github.com/jamubc/logic-pro-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-logic-blue'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://github.com/jamubc/logic-pro-mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}