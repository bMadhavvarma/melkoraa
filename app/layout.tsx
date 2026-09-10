import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { StoreProvider } from '@/lib/store-context'

export const metadata: Metadata = {
  title: 'MELKORAA — Individuality in Every Thread',
  description: 'Premium everyday essentials for those who choose progress over ordinary.',
  generator: 'v0.app',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f7f5f0', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body><StoreProvider>{children}</StoreProvider>{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
