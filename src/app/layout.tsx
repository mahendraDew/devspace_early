import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from "@vercel/analytics/react"
import Header from './header'
import { Footer } from './footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '_devspace',
  description: 'a pair programming platform'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div>
            <Header />
          </div>
          {children}
          <Analytics />
          <div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
