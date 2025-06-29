'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, Terminal, Package, Code2, ArrowRight, Sparkles } from 'lucide-react'

const installMethods = [
  {
    id: 'github',
    name: 'GitHub',
    icon: Code2,
    label: 'Beta Testing',
    code: `pip install git+https://github.com/jamubc/logic-pro-mcp.git`,
    description: 'Install beta version from GitHub'
  },
  {
    id: 'pypi',
    name: 'PyPI',
    icon: Package,
    label: 'Coming Soon',
    code: `pip install logic-pro-mcp`,
    description: 'Install stable release from PyPI package registry'
  }
]

const platforms = [
  {
    id: 'desktop',
    name: 'Claude Desktop',
    icon: 'CD',
    color: 'blue',
    config: `{
  "mcpServers": {
    "logic-pro": {
      "command": "python",
      "args": ["-m", "logic_pro_mcp"]
    }
  }
}`,
    steps: [
      'Install Logic Pro MCP via pip',
      'Open Claude Desktop settings',
      'Add the configuration to claude_desktop_config.json',
      'Restart Claude Desktop'
    ]
  },
  {
    id: 'code',
    name: 'Claude Code',
    icon: 'CC',
    color: 'purple',
    config: `claude mcp add logic-pro --python logic_pro_mcp`,
    steps: [
      'Install Logic Pro MCP via pip',
      'Run the Claude Code command',
      'Logic Pro MCP is ready to use'
    ]
  }
]

export function CodeExamples() {
  const [selectedMethod, setSelectedMethod] = useState('github')
  const [selectedPlatform, setSelectedPlatform] = useState('desktop')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const currentMethod = installMethods.find(m => m.id === selectedMethod)!
  const currentPlatform = platforms.find(p => p.id === selectedPlatform)!

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-logic-dark via-gray-900 to-logic-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-logic-purple" />
            <h2 className="text-base font-semibold text-logic-purple">Easy Integration</h2>
            <Sparkles className="w-5 h-5 text-logic-purple" />
          </div>
          <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get Started in Minutes
          </p>
          <p className="mt-4 text-lg text-gray-300">
            Install Logic Pro MCP and start creating music with AI
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-4xl">
          {/* Step 1: Installation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-logic-purple flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-white">Install Logic Pro MCP</h3>
            </div>

            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
              <div className="flex gap-2 mb-4">
                {installMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                      selectedMethod === method.id
                        ? 'bg-logic-purple text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    <method.icon className="w-4 h-4" />
                    {method.name}
                    {method.label && (
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        method.id === 'pypi' 
                          ? 'bg-orange-500/20 text-orange-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {method.label}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="relative">
                <div className="bg-logic-dark rounded-lg p-4 font-mono text-sm flex items-center justify-between">
                  <code className="text-gray-300">{currentMethod.code}</code>
                  <button
                    onClick={() => copyToClipboard(currentMethod.code)}
                    className="ml-4 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === currentMethod.code ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-500">{currentMethod.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Step 2: Configure Your Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-logic-purple flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-white">Configure Your Platform</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={`p-6 rounded-xl border transition-all text-left ${
                    selectedPlatform === platform.id
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-logic-purple'
                      : 'bg-gray-900/30 border-gray-800 hover:bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 bg-${platform.color}-500/20 rounded-lg flex items-center justify-center`}>
                      <span className={`text-${platform.color}-400 font-bold`}>{platform.icon}</span>
                    </div>
                    <span className="font-semibold text-white">{platform.name}</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    {platform.id === 'desktop' 
                      ? 'Full GUI integration for macOS users'
                      : 'CLI-based workflow for all platforms'
                    }
                  </p>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPlatform}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-gray-900/50 rounded-xl border border-gray-800 p-6"
              >
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Configuration</h4>
                  <div className="bg-logic-dark rounded-lg p-4 font-mono text-sm relative">
                    <pre className="text-gray-300 overflow-x-auto">{currentPlatform.config}</pre>
                    <button
                      onClick={() => copyToClipboard(currentPlatform.config)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === currentPlatform.config ? (
                        <Check className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Setup Steps</h4>
                  <ol className="space-y-2">
                    {currentPlatform.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-logic-purple">→</span>
                        <span className="text-sm text-gray-300">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Ready to Go */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center p-8 bg-gradient-to-r from-logic-purple/20 to-purple-900/20 rounded-xl border border-logic-purple/30"
          >
            <Terminal className="w-12 h-12 text-logic-purple mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">You're All Set!</h3>
            <p className="text-gray-300 mb-6">
              Start using natural language to control Logic Pro
            </p>
            <a
              href="/docs"
              className="inline-flex items-center gap-2 text-logic-purple hover:text-purple-400 transition-colors"
            >
              View Documentation
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}