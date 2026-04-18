'use client'

import { Check } from 'lucide-react'
import ContactButtons from '@/components/ContactButtons'

const programs = [
  {
    char: '汉',
    title: 'Курс мандарин',
    subtitle: 'Разговорный китайский',
    price: '45 000',
    period: 'за 8 уроков',
    bg: 'from-crimson via-[#7a0606] to-[#3d0303]',
    bullets: [
      'Тоны, пиньинь и произношение',
      'Разговорные диалоги и аудирование',
      '2 занятия в неделю',
      'Чат поддержки с преподавателем',
    ],
  },
  {
    char: '语',
    title: 'HSK 2–6',
    subtitle: 'Подготовка к экзамену',
    price: '49 900',
    period: 'за 8 уроков',
    bg: 'from-[#0f0f0f] via-[#1a1a1a] to-[#0a0a0a]',
    bullets: [
      'Расширенная грамматика и письмо',
      'Разбор структуры экзамена HSK',
      '2 занятия в неделю',
      'Полная подготовка к HSK 2–6',
    ],
  },
]

export default function Programs() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-14">
          <p className="text-crimson font-serif text-base tracking-widest uppercase mb-3 opacity-60">课程</p>
          <h2 className="font-serif text-crimson text-3xl md:text-5xl font-bold mb-5">
            Цены на курсы
          </h2>
          <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-transparent via-crimson to-transparent" />
        </div>

        {/* Ticket stack */}
        <div className="flex flex-col gap-6">
          {programs.map((p, i) => (
            <div
              key={i}
              className="relative flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              {/* TOP / LEFT — colored identity */}
              <div className={`relative bg-gradient-to-br ${p.bg} lg:w-72 flex-shrink-0 flex flex-row lg:flex-col justify-between lg:justify-center items-center lg:items-start px-8 py-6 lg:py-8 overflow-hidden`}>
                {/* Char watermark */}
                <span
                  className="absolute right-2 lg:-right-2 top-1/2 -translate-y-1/2 font-serif font-bold text-white/10 select-none pointer-events-none leading-none"
                  style={{ fontSize: '7rem' }}
                >
                  {p.char}
                </span>
                <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-white/5 -translate-y-10 translate-x-10" />

                {/* Text */}
                <div className="relative z-10">
                  <span className="text-white/60 text-xs uppercase tracking-widest font-medium block mb-1 lg:mb-2">
                    {p.subtitle}
                  </span>
                  <h3 className="font-serif font-bold text-white text-xl lg:text-2xl leading-tight">
                    {p.title}
                  </h3>
                </div>

                {/* Price — visible only on mobile inside header */}
                <div className="relative z-10 text-right lg:hidden">
                  <p className="font-serif font-black text-gold text-3xl leading-none whitespace-nowrap">
                    {p.price} ₸
                  </p>
                  <p className="text-white/50 text-xs mt-1">{p.period}</p>
                </div>
              </div>

              {/* MIDDLE — bullets */}
              <div className="flex-1 bg-white flex items-center px-8 lg:px-10 py-7 lg:py-8 border-t lg:border-t-0 lg:border-l border-gray-100">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 w-full">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                      <Check size={15} className="text-crimson mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT — price + CTA (hidden on mobile, shown on desktop) */}
              <div className="hidden lg:flex w-52 flex-shrink-0 bg-white flex-col items-center justify-center px-8 py-8 gap-5 border-l border-gray-100">
                <div className="text-center">
                  <p className="font-serif font-black text-crimson text-4xl leading-none whitespace-nowrap">
                    {p.price} ₸
                  </p>
                  <p className="text-gray-400 text-xs mt-2">{p.period}</p>
                </div>
                <ContactButtons variant="crimson" />
              </div>

              {/* CTA — mobile only, full width at bottom */}
              <div className="lg:hidden bg-white px-8 pb-7 pt-2 border-t border-gray-100">
                <ContactButtons variant="crimson" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}