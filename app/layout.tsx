import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Amit - A Full Stack Web Developer',
  description: 'A fullstack web developer skilled in MERN Stack stands for MongoDb , Express Js , React Js , Node Js. He knows how to build responsive things for the web. ',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-bg text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
