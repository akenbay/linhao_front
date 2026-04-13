'use client'

const links = [
  { href: '#header',     label: 'Главная' },
  { href: '#about',    label: 'О нас' },
  { href: '#benefits', label: 'Почему китайский?' },
  { href: '#csca',     label: 'CSCA' },
  { href: '#mandarin', label: 'Китайский с нуля' },
  { href: '#reviews',  label: 'Отзывы' },
]

const legalLinks = [
  { href: '/oferta',  label: 'Оферта и правила' },
]

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith('#')) return
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-10">

        {/* Top — brand + links + contacts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-10 sm:mb-14">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <p className="text-crimson font-serif text-sm tracking-widest uppercase mb-2 opacity-60">中文学校</p>
            <h3 className="font-serif text-crimson text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              linhao.chinese
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Онлайн-подготовка к CSCA и курсы китайского языка для казахстанских абитуриентов. Официальный партнёр тест-центра CSCA.
            </p>
            <a
              href="https://t.me/YourSchoolHandle"
              className="inline-flex items-center gap-2 mt-5 sm:mt-6 bg-crimson text-cream text-sm font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/>
              </svg>
              Написать нам
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 sm:mb-5 font-medium">Разделы</p>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => scrollTo(e, l.href)}
                    className="text-gray-500 hover:text-crimson text-sm transition-colors cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 sm:mb-5 font-medium">Контакты</p>
            <ul className="flex flex-col gap-3 sm:gap-4">
              {[
                { label: 'Telegram',  value: '@YourSchoolHandle', href: 'https://t.me/YourSchoolHandle' },
                { label: 'Instagram', value: '@YourSchoolHandle', href: '#' },
                { label: 'Email',     value: 'info@school.kz',    href: 'mailto:info@school.kz' },
              ].map((c) => (
                <li key={c.label}>
                  <p className="text-gray-400 text-xs mb-1">{c.label}</p>
                  <a href={c.href} className="text-gray-600 hover:text-crimson text-sm transition-colors">
                    {c.value}
                  </a>
                </li>
              ))}
              <li>
                <p className="text-gray-400 text-xs mb-1">Казахстан</p>
                <p className="text-gray-600 text-sm">Онлайн по всему миру</p>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent mb-5 sm:mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} linhao.chinese. Все права защищены.
          </p>

          {/* ── Legal links ── */}
          <div className="flex items-center gap-4">
            {legalLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-400 hover:text-crimson text-xs transition-colors underline underline-offset-2"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a href="https://t.me/YourSchoolHandle" className="text-gray-400 hover:text-crimson transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-crimson transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

    </footer>
  )
}