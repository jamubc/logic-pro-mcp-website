'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Bell } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-8">
            <Bell className="w-12 h-12 text-logic-purple mx-auto" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Music Production?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Logic Pro MCP is coming soon. Be among the first to experience 
            AI-powered music production when we launch.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/install"
              className="rounded-md bg-logic-purple px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-logic-purple transition-colors flex items-center gap-2"
            >
              Get Installation Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/roadmap"
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
            >
              View roadmap <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}