import Link from 'next/link'
import { Github, Twitter, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-logic-gray-light border-t border-gray-700">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8">
          <div>
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/#features" className="text-sm text-gray-400 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm text-gray-400 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-sm text-gray-400 hover:text-white">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://github.com/jamubc/logic-pro-mcp"
                  className="text-sm text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://modelcontextprotocol.io"
                  className="text-sm text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MCP Protocol
                </a>
              </li>
              <li>
                <a
                  href="https://claude.ai"
                  className="text-sm text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Claude AI
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 md:mt-0">
          <div className="flex space-x-6">
            <a
              href="https://github.com/your-repo/logic-pro-mcp"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/logicpromcp"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="mailto:hello@logicpromcp.dev"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Logic Pro MCP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}