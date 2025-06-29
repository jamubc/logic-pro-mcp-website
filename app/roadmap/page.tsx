'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import { CheckCircle, Circle, ArrowRight, Sparkles } from 'lucide-react'

const roadmapItems = [
  {
    phase: 'Phase 1: Foundation',
    status: 'completed',
    items: [
      { title: 'Basic MCP Server', description: 'Core server implementation with MCP protocol', done: true },
      { title: 'AppleScript Integration', description: 'Bridge to Logic Pro via AppleScript', done: true },
      { title: 'Transport Controls', description: 'Play, stop, record, timeline navigation', done: true },
      { title: 'Track Management', description: 'Create and manage MIDI/audio tracks', done: true },
    ]
  },
  {
    phase: 'Phase 2: Music Generation',
    status: 'completed',
    items: [
      { title: 'Music Theory Engine', description: 'Scales, chords, and progression algorithms', done: true },
      { title: 'MIDI Generation', description: 'Create melodies, chords, and bass lines', done: true },
      { title: 'Advanced Patterns', description: 'Jazz, blues, pop progressions', done: true },
      { title: 'Humanization', description: 'Natural velocity and timing variations', done: true },
    ]
  },
  {
    phase: 'Phase 3: Professional Features',
    status: 'in-progress',
    items: [
      { title: 'Effects Processing', description: 'Apply EQ, compression, reverb chains', done: true },
      { title: 'Project Templates', description: 'Genre-specific project setups', done: true },
      { title: 'Mix Bus Processing', description: 'Professional mixing chains', done: true },
      { title: 'Semantic Effects', description: 'Natural language effect descriptions', done: false },
    ]
  },
  {
    phase: 'Phase 4: Advanced Integration',
    status: 'planned',
    items: [
      { title: 'OSC Protocol', description: 'Real-time parameter control', done: false },
      { title: 'Plugin Control', description: 'Direct plugin parameter manipulation', done: false },
      { title: 'Audio Analysis', description: 'Tempo detection, key analysis', done: false },
      { title: 'MIDI Learn', description: 'Map AI commands to MIDI controllers', done: false },
    ]
  },
  {
    phase: 'Phase 5: AI Enhancement',
    status: 'planned',
    items: [
      { title: 'Style Transfer', description: 'Apply musical styles to existing tracks', done: false },
      { title: 'Arrangement Assistant', description: 'AI-powered song arrangement', done: false },
      { title: 'Mix Assistant', description: 'Automated mixing suggestions', done: false },
      { title: 'Mastering Tools', description: 'AI-assisted mastering chain', done: false },
    ]
  },
]

export default function RoadmapPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Product Roadmap
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Track our progress as we build the most comprehensive AI-powered 
              music production tool for Logic Pro.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-6xl relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <svg className="w-full h-full" viewBox="0 0 1000 800" preserveAspectRatio="none">
                <path
                  d="M 100 100 Q 500 100 500 200 T 900 200 Q 900 300 500 300 T 100 400 Q 100 500 500 500 T 900 600"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-logic-purple"
                />
              </svg>
            </div>
            
            {roadmapItems.map((phase, phaseIndex) => {
              const isEven = phaseIndex % 2 === 0
              const alignment = isEven ? 'items-start' : 'items-end'
              const textAlign = isEven ? 'text-left' : 'text-right'
              const margin = isEven ? 'mr-auto' : 'ml-auto'
              
              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: phaseIndex * 0.1 }}
                  className={`mb-16 flex ${alignment} relative`}
                >
                  <div className={`max-w-2xl ${margin}`}>
                    <div className={`flex items-center mb-6 ${isEven ? '' : 'flex-row-reverse'}`}>
                      <div className={`w-12 h-12 rounded-full ${isEven ? 'mr-4' : 'ml-4'} flex items-center justify-center relative ${
                        phase.status === 'completed' ? 'bg-green-500' :
                        phase.status === 'in-progress' ? 'bg-logic-purple' :
                        'bg-gray-700'
                      }`}>
                        <span className="text-white font-bold">{phaseIndex + 1}</span>
                        {phaseIndex < roadmapItems.length - 1 && (
                          <div className={`absolute ${isEven ? '-right-4' : '-left-4'} top-1/2 transform -translate-y-1/2`}>
                            <ArrowRight className={`w-6 h-6 text-gray-600 ${!isEven ? 'rotate-180' : ''}`} />
                          </div>
                        )}
                      </div>
                      <div className={textAlign}>
                        <h2 className="text-2xl font-bold text-white">{phase.phase}</h2>
                        {phase.status === 'in-progress' && (
                          <span className="text-sm text-logic-purple font-medium">In Progress</span>
                        )}
                      </div>
                    </div>
                    
                    <div className={`bg-logic-gray/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800`}>
                      <div className="space-y-3">
                        {phase.items.map((item, itemIndex) => (
                          <motion.div
                            key={item.title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: phaseIndex * 0.1 + itemIndex * 0.05 }}
                            className={`flex items-start ${isEven ? '' : 'flex-row-reverse'}`}
                          >
                            <div className={`${isEven ? 'mr-3' : 'ml-3'} mt-1`}>
                              {item.done ? (
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              ) : (
                                <Circle className="w-4 h-4 text-gray-600" />
                              )}
                            </div>
                            <div className={`flex-1 ${textAlign}`}>
                              <h3 className={`font-medium text-sm ${item.done ? 'text-white' : 'text-gray-400'}`}>
                                {item.title}
                              </h3>
                              <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mx-auto mt-16 max-w-2xl"
          >
            <div className="rounded-2xl bg-gradient-to-r from-logic-purple/20 to-purple-900/20 p-8 text-center">
              <Sparkles className="w-12 h-12 text-logic-purple mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Have a Feature Request?
              </h3>
              <p className="text-gray-300 mb-6">
                We're building this tool for the music production community. 
                Your feedback shapes our roadmap.
              </p>
              <a
                href="https://github.com/jamubc/logic-pro-mcp/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-logic-purple px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 transition-colors"
              >
                Submit Feature Request
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}