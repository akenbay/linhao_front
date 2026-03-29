'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#hero',      label: 'Главная' },
  { href: '#about',     label: 'О нас' },
  { href: '#benefits',  label: 'Почему китайский?' },
  { href: '#csca',      label: 'CSCA' },
  { href: '#mandarin',   label: 'Китайский с нуля' },
  { href: '#reviews',   label: 'Отзывы' },
]

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string, onClose?: () => void) {
  if (!href.startsWith('#')) return
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  onClose?.()
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop */}
      <nav className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center px-8 h-20 gap-2">

        {/* Block 1 — Logo */}
        <div className="bg-crimson/40 backdrop-blur-md border border-gold/30 rounded-xl px-4 h-12 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
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
        <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl px-5 h-12 flex items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, '#hero')}
            className="text-black font-sans text-base tracking-wide whitespace-nowrap drop-shadow-sm"
          >
            linhao.chinese
          </a>
        </div>

        {/* Block 3 — Nav links */}
        <div className="flex-1 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl px-6 h-12 flex items-center justify-evenly shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              className="text-black/80 hover:text-vermillion transition-colors text-sm font-medium whitespace-nowrap cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Block 4 — CTA */}
        <div className="bg-crimson/70 backdrop-blur-md border border-gold/30 rounded-xl h-12 flex items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
          <a
            href="https://t.me/YourSchoolHandle"
            className="px-5 h-full flex items-center text-white text-sm font-medium hover:bg-white/10 rounded-xl transition-colors whitespace-nowrap"
          >
            Написать нам
          </a>
        </div>

      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-5 right-4 z-50 md:hidden bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-2 text-white"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="fixed top-20 left-4 right-4 z-40 md:hidden bg-crimson/40 backdrop-blur-md border border-gold/30 rounded-xl px-6 py-5 flex flex-col gap-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => scrollTo(e, l.href, () => setOpen(false))}
              className="text-white/80 hover:text-gold transition-colors font-medium text-base cursor-pointer"
            >
              {l.label}
            </a>
          ))}
          <div className="h-px bg-white/20" />
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