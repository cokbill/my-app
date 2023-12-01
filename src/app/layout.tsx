import type { Metadata } from 'next'
import { Gabarito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Animeku | Next.js',
  description: '',
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en">
      <body className={`${gabarito.className}`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}