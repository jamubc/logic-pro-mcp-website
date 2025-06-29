'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

const examples = [
  {
    title: 'Claude Desktop Configuration',
    language: 'json',
    code: `{
  "mcpServers": {
    "logic-pro": {
      "command": "python",
      "args": ["/path/to/logic-pro-mcp/server.py"],
      "cwd": "/path/to/logic-pro-mcp"
    }
  }
}`
  },
  {
    title: 'Create a Jazz Chord Progression',
    language: 'text',
    code: `User: Create a jazz chord progression in G major

AI: I'll create a jazz chord progression in G major for you.

✓ Created MIDI track "Jazz Chords G"
✓ Generated: Gmaj7 - Bm7 - Em7 - Am7 - D7 - Gmaj7
✓ Added jazz voicings with 7th extensions
✓ Set tempo to 120 BPM`
  },
  {
    title: 'Apply Vocal Processing',
    language: 'text',
    code: `User: Add professional vocal processing to the lead vocal track

AI: I'll apply a complete vocal chain to your lead vocal track.

✓ Added Channel EQ with gentle high-frequency boost
✓ Inserted Compressor (Ratio 3:1, Threshold -15dB)
✓ Added ChromaVerb on Send 1 (15% mix)
✓ Applied Tape Delay on Send 2 (10% mix)
✓ Enabled Channel Strip's built-in Gate`
  }
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
            Configure Claude Desktop, install the server, and start creating music with AI.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
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
            <h3 className="text-xl font-bold text-white mb-4">Quick Start Steps</h3>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-logic-purple rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  1
                </span>
                <div>
                  <p className="font-medium">Install Dependencies</p>
                  <p className="text-sm text-gray-400 mt-1">Python 3.10+ and Logic Pro on macOS</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-logic-purple rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  2
                </span>
                <div>
                  <p className="font-medium">Clone Repository</p>
                  <p className="text-sm text-gray-400 mt-1">git clone logic-pro-mcp</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-logic-purple rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  3
                </span>
                <div>
                  <p className="font-medium">Configure Claude</p>
                  <p className="text-sm text-gray-400 mt-1">Add to Claude Desktop config</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-logic-purple rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  4
                </span>
                <div>
                  <p className="font-medium">Start Creating</p>
                  <p className="text-sm text-gray-400 mt-1">Open Logic Pro and chat with AI</p>
                </div>
              </li>
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  )
}