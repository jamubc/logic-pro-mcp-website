'use client'

import { motion } from 'framer-motion'
import { categories, tools } from '@/lib/tools-data'
import { 
  Activity, Music, FolderTree, Layout, Zap, Save,
  ArrowRight
} from 'lucide-react'

const iconMap: { [key: string]: any } = {
  Activity, Music, FolderTree, Layout, Zap, Save
}

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-logic-purple">
            Comprehensive Control
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            30+ Tools for Professional Music Production
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            From basic transport control to advanced music theory generation, 
            control every aspect of Logic Pro with natural language.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(categories).map(([key, category], index) => {
              const Icon = iconMap[category.icon]
              const categoryTools = tools.filter(tool => tool.category === key)
              
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative rounded-2xl bg-logic-gray p-8 hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="rounded-lg bg-logic-purple/10 p-3">
                      <Icon className="h-6 w-6 text-logic-purple" />
                    </div>
                    <span className="text-sm text-gray-400">
                      {categoryTools.length} tools
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {categoryTools.slice(0, 3).map((tool) => (
                      <div key={tool.name} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-logic-purple mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{tool.description}</span>
                      </div>
                    ))}
                    {categoryTools.length > 3 && (
                      <p className="text-sm text-gray-500 italic">
                        +{categoryTools.length - 3} more tools
                      </p>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="rounded-2xl bg-gradient-to-r from-logic-purple/20 to-purple-900/20 p-8 ring-1 ring-logic-purple/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Music Theory Engine
            </h3>
            <p className="text-gray-300 mb-6">
              Our advanced music theory engine generates intelligent chord progressions, 
              melodic lines, and bass patterns based on established musical principles. 
              No more random MIDI notes – create music that sounds professional and musical.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-left">
                <h4 className="font-semibold text-logic-purple mb-2">Chord Progressions</h4>
                <ul className="space-y-1 text-gray-400">
                  <li>• Pop, Jazz, Blues patterns</li>
                  <li>• Circle of fifths</li>
                  <li>• Modal interchange</li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-logic-purple mb-2">Melody Generation</h4>
                <ul className="space-y-1 text-gray-400">
                  <li>• Scale-aware melodies</li>
                  <li>• Contour patterns</li>
                  <li>• Rhythm variations</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}