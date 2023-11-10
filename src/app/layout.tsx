import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './components/header/page'
import { Footer } from './components/footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KomKor',
  description: 'Зручний сервіс',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
