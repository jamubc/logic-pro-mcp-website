'use client'

import Link from 'next/link'
import { ArrowRight, Github, Music } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-gray-800 hover:ring-gray-700">
                Announcing 30+ tools for Logic Pro control.{' '}
                <Link href="/docs" className="font-semibold text-logic-purple">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              AI-Powered Music Production with{' '}
              <span className="text-logic-purple">Logic Pro</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Control Logic Pro with AI assistants. Create tracks, generate music, apply effects, 
              and manage projects using natural language. The first comprehensive MCP server for 
              professional music production.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/docs"
                className="rounded-md bg-logic-purple px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-logic-purple transition-colors flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://github.com/your-repo/logic-pro-mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
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
                    <Music className="w-5 h-5 text-logic-purple" />
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
                    <span className="text-logic-purple">▶</span>
                    <p className="text-sm text-gray-300">Create a new track with a jazzy chord progression in C major</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-green-400">✓</span>
                    <p className="text-sm text-gray-400">Created MIDI track "Jazz Chords" with Cmaj7 - Dm7 - G7 - Cmaj7 progression</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-logic-purple">▶</span>
                    <p className="text-sm text-gray-300">Add a warm vocal reverb to the lead vocal track</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-green-400">✓</span>
                    <p className="text-sm text-gray-400">Applied ChromaVerb with "Vocal Hall" preset to track "Lead Vocals"</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-logic-purple to-purple-900 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  )
}