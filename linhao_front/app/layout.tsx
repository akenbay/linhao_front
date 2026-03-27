import type { Metadata } from 'next'
import { Golos_Text, Noto_Serif_SC } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const racama = localFont({
  src: '../public/fonts/Racama-U.otf',
  variable: '--font-racama',
  display: 'swap',
})

const golosText = Golos_Text({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-golos',
})

const notoSerif = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-serif',
})

export const metadata: Metadata = {
  title: 'Chinese School — Learn Mandarin',
  description: 'Professional Chinese language school. Proven results, certified teachers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${racama.variable} `}>
        {children}
      </body>
    </html>
  )
}