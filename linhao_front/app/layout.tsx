import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const racama = localFont({
  src: '../public/fonts/Racama-U.otf',
  variable: '--font-racama',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chinese School — Learn Mandarin',
  description: 'Professional Chinese language school. Proven results, certified teachers.',
  icons: {
    icon: '/images/logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${racama.variable} `}>
        {children}
      </body>
    </html>
  )
}