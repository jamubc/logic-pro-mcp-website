import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowRight, Book, Rocket, Code, Settings } from 'lucide-react'

const docCategories = [
  {
    title: 'Getting Started',
    description: 'Quick setup guide to get you running in minutes',
    icon: Rocket,
    href: '/docs/getting-started',
    items: ['Installation', 'Configuration', 'First Commands']
  },
  {
    title: 'Tool Reference',
    description: 'Complete reference for all 30+ available tools',
    icon: Code,
    href: '/docs/tools',
    items: ['Status Tools', 'Creation Tools', 'Effects Processing']
  },
  {
    title: 'Examples',
    description: 'Real-world examples and workflows',
    icon: Book,
    href: '/docs/examples',
    items: ['Creating Tracks', 'Music Generation', 'Mixing Workflows']
  },
  {
    title: 'Advanced',
    description: 'Advanced configuration and customization',
    icon: Settings,
    href: '/docs/advanced',
    items: ['Custom Templates', 'Extending Tools', 'Troubleshooting']
  },
]

export default function DocsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Documentation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Everything you need to master AI-powered music production with Logic Pro.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {docCategories.map((category) => {
                const Icon = category.icon
                return (
                  <div
                    key={category.title}
                    className="relative rounded-2xl bg-logic-gray p-8 hover:bg-gray-800/50 transition-all hover:scale-[1.02]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="rounded-lg bg-logic-purple/10 p-3 w-fit mb-4">
                          <Icon className="h-6 w-6 text-logic-purple" />
                        </div>
                        <h2 className="text-xl font-semibold text-white mb-2">
                          {category.title}
                        </h2>
                        <p className="text-gray-400 mb-4">
                          {category.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {category.items.map((item) => (
                            <li key={item} className="flex items-center text-sm text-gray-300">
                              <ArrowRight className="h-4 w-4 text-logic-purple mr-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={category.href}
                          className="inline-flex items-center text-logic-purple hover:text-purple-400 font-medium transition-colors"
                        >
                          View Documentation
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="rounded-2xl bg-gradient-to-r from-logic-purple/20 to-purple-900/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="https://github.com/your-repo/logic-pro-mcp/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GitHub README →
                </a>
                <a
                  href="https://modelcontextprotocol.io/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  MCP Protocol Docs →
                </a>
                <a
                  href="https://www.apple.com/logic-pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Logic Pro Official →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}