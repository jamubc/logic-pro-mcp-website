'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

const examples = [
  {
    title: 'Install via PyPI (Coming Soon)',
    language: 'bash',
    code: `# Install from PyPI
pip install logic-pro-mcp

# Or install from GitHub
pip install git+https://github.com/jamubc/logic-pro-mcp.git`
  },
  {
    title: 'Claude Desktop Configuration',
    language: 'json',
    code: `{
  "mcpServers": {
    "logic-pro": {
      "command": "python",
      "args": ["-m", "logic_pro_mcp"]
    }
  }
}`
  },
  {
    title: 'Claude Code Configuration',
    language: 'bash',
    code: `# Add Logic Pro MCP to Claude Code
claude mcp add logic-pro \\
  --python logic_pro_mcp`
  },
]

export function CodeExamples() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = (code: string, index: number) => {
    navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <section className="py-24 sm:py-32 bg-logic-gray/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-logic-purple">
            Easy Integration
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get Started in Minutes
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Available for Claude Desktop and Claude Code. Install from PyPI or GitHub.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl bg-logic-dark border border-gray-800"
              >
                <div className="flex items-center justify-between p-4 border-b border-gray-800">
                  <h3 className="text-sm font-medium text-white">{example.title}</h3>
                  <button
                    onClick={() => copyToClipboard(example.code, index)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedIndex === index ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="rounded-2xl bg-gradient-to-r from-logic-purple/10 to-purple-900/10 p-8">
            <h3 className="text-xl font-bold text-white mb-4">Supported Platforms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-logic-dark/50 rounded-lg p-6 border border-gray-800">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-400 font-bold">CD</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Claude Desktop</h4>
                </div>
                <p className="text-gray-300 text-sm">Full support for Claude Desktop app on macOS. Configure once and use Logic Pro tools in every conversation.</p>
                <div className="mt-4">
                  <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">✓ Available Now</span>
                </div>
              </div>
              <div className="bg-logic-dark/50 rounded-lg p-6 border border-gray-800">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-purple-400 font-bold">CC</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Claude Code</h4>
                </div>
                <p className="text-gray-300 text-sm">Use Logic Pro MCP with Claude Code CLI for advanced music production workflows and automation.</p>
                <div className="mt-4">
                  <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">✓ Available Now</span>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-logic-blue/10 to-blue-900/10 rounded-lg border border-blue-900/20">
              <p className="text-sm text-gray-300">
                <span className="text-logic-blue font-semibold">Coming Soon:</span> Official PyPI package for easy installation with pip. Currently available via GitHub repository.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}