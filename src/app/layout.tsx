import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { AuthClerkProvider } from '@/providers/clerk-provider'
import type { FC, ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <AuthClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AuthClerkProvider>
  )
}

export default RootLayout
