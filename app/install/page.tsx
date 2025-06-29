'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CodeExamples } from '@/components/landing/CodeExamples'

export default function InstallPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <CodeExamples />
      </main>
      <Footer />
    </>
  )
}