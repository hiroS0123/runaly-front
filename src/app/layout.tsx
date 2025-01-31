import '@/ui/globals.css'

import { jaJP } from '@clerk/localizations'
import { ClerkProvider, SignedIn } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

import Header from '@/ui/layout/Header'

import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Runaly',
  description: '陸上競技動作分析アプリ',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={jaJP}>
      <html lang='ja'>
        <body className={inter.className}>
          <SignedIn>
            <Header />
          </SignedIn>
          <main>
            {/* <main className='mx-auto flex min-h-screen max-w-5xl flex-col place-content-center justify-between'> */}
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
