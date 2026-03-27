'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/',         label: 'Главная' },
  { href: '/programs', label: 'Программы' },
  { href: '/about',    label: 'О нас' },
  { href: '/results',  label: 'Результаты' },
  { href: '/contact',  label: 'Контакты' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop */}
<nav className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center px-8 h-20 gap-2">

  {/* Block 1 — Logo icon */}
  <div className="bg-crimson/95 backdrop-blur-sm border border-gold/30 rounded-xl px-4 h-12 flex items-center justify-center">
    <Link href="/">
       <img
      src="/images/logo.png"
      alt="logo"
      width={32}
      height={32}
      className="object-contain"
    />
    </Link>
  </div>

  {/* Block 2 — School name */}
<div className="bg-white/95 backdrop-blur-sm border border-gold/30 rounded-xl px-5 h-12 flex items-center">
  <Link href="/" className="text-black font-sans text-base tracking-wide whitespace-nowrap">
    linhao.chinese
  </Link>
</div>

{/* Block 3 — Nav links — now flex-1 so it fills the gap */}
<div className="flex-1 bg-white/95 backdrop-blur-sm border border-gold/30 rounded-xl px-6 h-12 flex items-center justify-center gap-6">
  {links.map(l => (
    <Link
      key={l.href}
      href={l.href}
      className="text-black/75 hover:text-crimson transition-colors text-sm font-medium whitespace-nowrap"
    >
      {l.label}
    </Link>
  ))}
</div>

  {/* Block 4 — CTA */}
  <div className="bg-crimson rounded-xl h-12 flex items-center">
    <a
      href="https://t.me/YourSchoolHandle"
      className="px-5 h-full flex items-center text-cream text-sm hover:bg-yellow-400 rounded-xl transition-colors whitespace-nowrap"
    >
      Написать нам
    </a>
  </div>

</nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="fixed top-20 left-4 right-4 z-40 md:hidden bg-crimson/98 backdrop-blur-sm border border-gold/30 rounded-xl px-6 py-5 flex flex-col gap-4">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream/80 hover:text-gold transition-colors font-medium text-base"
            >
              {l.label}
            </Link>
          ))}
          <div className="h-px bg-gold/20" />
          <a
            href="https://t.me/YourSchoolHandle"
            className="bg-gold text-crimson px-5 py-2.5 rounded-lg font-bold text-sm text-center hover:bg-yellow-400 transition-colors"
          >
            Написать нам
          </a>
        </div>
      )}
    </>
  )
}