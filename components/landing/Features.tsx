'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { categories, tools } from '@/lib/tools-data'
import { 
  Activity, Music, FolderTree, Layout, Zap, Save,
  ArrowRight, ChevronRight
} from 'lucide-react'

const iconMap: { [key: string]: any } = {
  Activity, Music, FolderTree, Layout, Zap, Save
}

export function Features() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-24 sm:py-32" ref={sectionRef}>
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
            <span className="text-blue-400">Currently in beta testing.</span>
          </p>
        </div>

        <motion.div 
          className="mx-auto mt-16 max-w-7xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(categories).map(([key, category], index) => {
              const Icon = iconMap[category.icon]
              const categoryTools = tools.filter(tool => tool.category === key)
              
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => setExpandedCategory(expandedCategory === key ? null : key)}
                  className="relative rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 hover:from-gray-800 hover:to-gray-700 transition-all cursor-pointer border border-gray-700 hover:border-logic-purple/50 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      className="rounded-lg bg-logic-purple/10 p-3 group-hover:bg-logic-purple/20 transition-colors"
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon className="h-5 w-5 text-logic-purple" />
                    </motion.div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">
                        {categoryTools.length} tools
                      </span>
                      <ChevronRight className={`h-4 w-4 text-gray-500 transition-transform ${
                        expandedCategory === key ? 'rotate-90' : ''
                      }`} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-logic-purple transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {category.description}
                  </p>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={false}
                    animate={{ height: expandedCategory === key ? 'auto' : '60px' }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    {categoryTools.map((tool, toolIndex) => (
                      <motion.div 
                        key={tool.name} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: expandedCategory === key || toolIndex < 2 ? 1 : 0,
                          x: expandedCategory === key || toolIndex < 2 ? 0 : -20
                        }}
                        transition={{ delay: toolIndex * 0.05 }}
                      >
                        <ArrowRight className="h-3 w-3 text-logic-purple mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-xs text-gray-300">{tool.description}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="rounded-xl bg-gradient-to-r from-logic-purple/20 to-purple-900/20 p-6 ring-1 ring-logic-purple/30">
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