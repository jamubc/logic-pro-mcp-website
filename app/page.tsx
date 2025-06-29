import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/landing/Hero'
import { InteractiveDemo } from '@/components/landing/InteractiveDemo'
import { Features } from '@/components/landing/Features'
import { CTA } from '@/components/landing/CTA'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <InteractiveDemo />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  )
}