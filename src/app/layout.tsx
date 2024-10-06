import type { Metadata } from 'next'
import '../styles/globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: process.env.PAGE_NAME ?? '',
    template: `%s - ${process.env.PAGE_NAME ?? ''}`,
  },
  description: process.env.PAGE_DESCRIPTION ?? '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="scroll-auto" lang="en">
      <body
        className={`${inter.className} ${inter.variable} ${roboto_mono.variable} min-h-screen bg-white antialiased dark:bg-neutral-800 dark:text-white`}
      >
        {/* WIP: <Navigation /> */}
        <main className={'mb-24'}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
