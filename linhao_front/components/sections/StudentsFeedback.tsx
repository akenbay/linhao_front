'use client'

import { useState } from 'react'

export default function StudentFeedback() {
  const screenshots = [
    { src: '/images/studentf1.jpg',  rotate: '-rotate-1' },
    { src: '/images/studentf2.jpg',  rotate: '-rotate-1' },
    { src: '/images/studentf3.jpg',  rotate: '-rotate-2' },
    { src: '/images/studentf4.jpg',  rotate: 'rotate-1'  },
    { src: '/images/studentf5.jpg',  rotate: 'rotate-2'  },
    { src: '/images/studentf6.jpg',  rotate: '-rotate-1' },
    { src: '/images/studentf7.jpg',  rotate: '-rotate-1' },
    { src: '/images/studentf8.jpg',  rotate: 'rotate-2'  },
    { src: '/images/studentf9.jpg',  rotate: '-rotate-2' },
    { src: '/images/studentf10.jpg', rotate: 'rotate-1'  },
    { src: '/images/studentf11.jpg', rotate: 'rotate-2'  },
    { src: '/images/studentf12.jpg', rotate: '-rotate-1' },
    { src: '/images/studentf13.jpg', rotate: '-rotate-1' },
    { src: '/images/studentf14.jpg',  rotate: 'rotate-2'  },
    { src: '/images/studentf15.jpg',  rotate: '-rotate-2' },
    { src: '/images/studentf16.jpg', rotate: 'rotate-1'  },
    { src: '/images/studentf17.jpg', rotate: 'rotate-2'  },
  ]

  const [current, setCurrent] = useState(0)
  const total = screenshots.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const getIndex = (offset: number) => (current + offset + total) % total

  return (
    <section className="bg-[#0f0c0a] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-14">
          <p className="text-gold/70 font-serif text-lg tracking-widest mb-2">反馈</p>
          <h2 className="font-serif text-cream text-3xl md:text-5xl font-bold mb-4">
            Что говорят студенты
          </h2>
          <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent"/>
          <p className="text-cream/40 text-sm mt-4">Скриншоты реальных отзывов</p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-4 md:gap-6 h-[480px] md:h-[560px]">

          <button
            onClick={prev}
            className="z-10 shrink-0 w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-cream flex items-center justify-center transition"
          >
            ‹
          </button>

          <div className="flex items-center gap-4 md:gap-6 w-full justify-center h-full">
            {[-1, 0, 1].map((offset) => {
              const s = screenshots[getIndex(offset)]
              const isActive = offset === 0
              return (
                <div
                  key={offset}
                  onClick={() => offset !== 0 && setCurrent(getIndex(offset))}
                  className={`
                    transition-all duration-500 cursor-pointer rounded-2xl overflow-hidden
                    border shadow-2xl shrink-0 h-full
                    ${isActive
                      ? 'w-56 md:w-80 scale-100 opacity-100 border-gold/30 z-10'
                      : 'w-36 md:w-52 scale-90 opacity-40 border-white/5 z-0'
                    }
                    ${isActive ? '' : s.rotate}
                  `}
                >
                  <img
                    src={s.src}
                    alt="Отзыв"
                    className="w-full h-full object-contain bg-black/20"
                  />
                </div>
              )
            })}
          </div>

          <button
            onClick={next}
            className="z-10 shrink-0 w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-cream flex items-center justify-center transition"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-gold w-4' : 'bg-white/20 w-1.5'
              }`}
            />
          ))}
        </div>

        <p className="text-center text-cream/30 text-xs mt-6">
          Все отзывы — реальные скриншоты из Telegram и Instagram
        </p>

      </div>
    </section>
  )
}