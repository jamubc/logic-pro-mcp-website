import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Logic Pro MCP - AI-Powered Music Production',
  description: 'Control Logic Pro with AI. 30+ tools for track creation, music generation, effects processing, and project management.',
  keywords: 'Logic Pro, MCP, AI, Music Production, DAW, Model Context Protocol',
  authors: [{ name: 'Logic Pro MCP Team' }],
  openGraph: {
    title: 'Logic Pro MCP - AI-Powered Music Production',
    description: 'Control Logic Pro with AI assistants',
    type: 'website',
    url: 'https://logicpromcp.dev',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logic Pro MCP',
    description: 'AI-powered music production with Logic Pro',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}