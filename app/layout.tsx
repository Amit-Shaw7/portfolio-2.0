import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const font = Roboto_Mono({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amit',
  description: 'A fullstack web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-bg text-white ${font.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
