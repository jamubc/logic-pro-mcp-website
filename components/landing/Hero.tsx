'use client'

import Link from 'next/link'
import { ArrowRight, Github, Music } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-logic-dark" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-logic-purple/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-logic-blue/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 flex justify-center">
              <Link href="/roadmap" className="group relative inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm ring-1 ring-gray-800 hover:ring-gray-700 transition-all">
                <span className="inline-flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-medium">Beta</span>
                  <span className="text-gray-300">Currently in development</span>
                </span>
                <span className="mx-2 h-4 w-px bg-gray-700" />
                <span className="font-semibold text-logic-blue group-hover:text-blue-400 transition-colors">
                  View roadmap <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white text-center">
              <div>Natural Language Music Production</div>
              <div className="text-orange-500 text-xl sm:text-2xl md:text-3xl mt-2">with Logic Pro + Logic Pro MCP</div>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Control Logic Pro with AI assistants. Create tracks, generate music, apply effects, 
              and manage projects using natural language. Beta testing coming soon.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/install"
                  className="group relative rounded-md bg-logic-blue px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-logic-blue transition-all flex items-center gap-2 overflow-hidden"
                >
                  <span className="relative z-10">Get Notified</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-logic-purple to-logic-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </Link>
              </motion.div>
              <motion.a
                href="https://github.com/jamubc/logic-pro-mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span className="relative">
                  View on GitHub
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                </span>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-16 flow-root sm:mt-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-xl bg-gray-900/50 p-2 ring-1 ring-inset ring-gray-800">
              <div className="rounded-lg bg-logic-dark p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Music className="w-5 h-5 text-logic-blue" />
                    <span className="text-sm font-medium text-gray-300">AI Assistant</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <span className="text-logic-blue">▶</span>
                    <p className="text-sm text-gray-300">Create a new track with a jazzy chord progression in C major</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-logic-green">✓</span>
                    <p className="text-sm text-gray-400">Created MIDI track "Jazz Chords" with Cmaj7 - Dm7 - G7 - Cmaj7 progression</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-logic-blue">▶</span>
                    <p className="text-sm text-gray-300">Add a warm vocal reverb to the lead vocal track</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-logic-green">✓</span>
                    <p className="text-sm text-gray-400">Applied ChromaVerb with "Vocal Hall" preset to track "Lead Vocals"</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  )
}