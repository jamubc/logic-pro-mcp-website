'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Sparkles, Music2, Mic2, Piano } from 'lucide-react'

const demoCommands = [
  {
    id: 'jazz',
    icon: Piano,
    command: 'Create a jazzy chord progression in C major',
    response: [
      '🎵 Creating jazz chord progression...',
      '✓ Created MIDI track "Jazz Chords"',
      '✓ Generated: Cmaj7 - Dm7 - G7 - Cmaj7',
      '✓ Added jazz voicings with 7th extensions',
      '✓ Set tempo to 120 BPM with swing feel'
    ]
  },
  {
    id: 'vocals',
    icon: Mic2,
    command: 'Add professional vocal processing to lead vocals',
    response: [
      '🎤 Applying vocal processing chain...',
      '✓ Added Channel EQ (gentle high-frequency boost)',
      '✓ Inserted Compressor (3:1 ratio, -15dB threshold)',
      '✓ Added ChromaVerb on Send 1 (15% mix)',
      '✓ Applied Tape Delay on Send 2 (10% mix)',
      '✓ Enabled built-in Gate on channel strip'
    ]
  },
  {
    id: 'bass',
    icon: Music2,
    command: 'Generate a funky bass line that follows the chords',
    response: [
      '🎸 Generating funky bass line...',
      '✓ Created MIDI track "Funky Bass"',
      '✓ Analyzed chord progression from "Jazz Chords"',
      '✓ Generated syncopated rhythm pattern',
      '✓ Added ghost notes and slides',
      '✓ Applied Retro Synth with "Woofer Bass" preset'
    ]
  }
]

export function InteractiveDemo() {
  const [activeCommand, setActiveCommand] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)

  useEffect(() => {
    const currentDemo = demoCommands[activeCommand]
    setIsTyping(true)
    setDisplayedLines([])
    setCurrentLineIndex(0)

    const typeNextLine = (index: number) => {
      if (index < currentDemo.response.length) {
        setDisplayedLines(prev => [...prev, currentDemo.response[index]])
        setCurrentLineIndex(index + 1)
      } else {
        setIsTyping(false)
        // Auto-advance to next command after a delay
        setTimeout(() => {
          setActiveCommand((prev) => (prev + 1) % demoCommands.length)
        }, 3000)
      }
    }

    // Start typing animation
    const initialDelay = setTimeout(() => typeNextLine(0), 500)

    return () => {
      clearTimeout(initialDelay)
    }
  }, [activeCommand])

  useEffect(() => {
    if (currentLineIndex > 0 && currentLineIndex < demoCommands[activeCommand].response.length) {
      const timer = setTimeout(() => {
        const currentDemo = demoCommands[activeCommand]
        setDisplayedLines(prev => [...prev, currentDemo.response[currentLineIndex]])
        setCurrentLineIndex(prev => prev + 1)
      }, 400)

      return () => clearTimeout(timer)
    } else if (currentLineIndex === demoCommands[activeCommand].response.length) {
      setIsTyping(false)
      // Auto-advance to next command
      const timer = setTimeout(() => {
        setActiveCommand((prev) => (prev + 1) % demoCommands.length)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [currentLineIndex, activeCommand])

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-logic-dark via-gray-900 to-logic-dark opacity-50" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-logic-purple" />
            <h2 className="text-base font-semibold text-logic-purple">Interactive Demo</h2>
            <Sparkles className="w-5 h-5 text-logic-purple" />
          </div>
          <p className="text-3xl font-bold text-white sm:text-4xl">
            See Logic Pro MCP in Action
          </p>
          <p className="mt-4 text-lg text-gray-300">
            Watch how natural language transforms into professional music production
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Command Selection */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                Try These Commands
              </h3>
              {demoCommands.map((demo, index) => {
                const Icon = demo.icon
                return (
                  <motion.button
                    key={demo.id}
                    onClick={() => setActiveCommand(index)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      activeCommand === index
                        ? 'bg-logic-purple/20 border-logic-purple text-white'
                        : 'bg-gray-900/50 border-gray-800 text-gray-300 hover:bg-gray-800/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className={`w-5 h-5 mt-0.5 ${
                        activeCommand === index ? 'text-logic-purple' : 'text-gray-500'
                      }`} />
                      <span className="text-sm font-medium">{demo.command}</span>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Terminal Display */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
              >
                <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-mono text-gray-300">Logic Pro MCP</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                </div>

                <div className="p-6 font-mono text-sm">
                  <div className="mb-4">
                    <span className="text-logic-purple">$</span>
                    <span className="text-gray-300 ml-2">
                      {demoCommands[activeCommand].command}
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCommand}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-2"
                    >
                      {displayedLines.map((line, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="text-gray-400"
                        >
                          {line}
                        </motion.div>
                      ))}
                      {isTyping && (
                        <span className="inline-block w-2 h-4 bg-logic-purple animate-pulse" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Logic Pro UI Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-lg border border-orange-500/20"
              >
                <p className="text-sm text-orange-400 font-medium mb-2">
                  Logic Pro responds in real-time
                </p>
                <p className="text-xs text-gray-400">
                  Your AI assistant executes commands directly in Logic Pro, creating tracks, 
                  applying effects, and generating music based on your natural language input.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}