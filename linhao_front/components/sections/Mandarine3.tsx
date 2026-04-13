'use client'
import { useState } from 'react'
import Image from 'next/image'

const TANGERINES = [
  { size: 120, top: '5%',  left: '3%',  blur: 8,  opacity: 0.25, rotate: -15 },
  { size: 80,  top: '15%', left: '18%', blur: 4,  opacity: 0.35, rotate: 20  },
  { size: 160, top: '60%', left: '2%',  blur: 12, opacity: 0.2,  rotate: 10  },
  { size: 60,  top: '75%', left: '22%', blur: 3,  opacity: 0.4,  rotate: -25 },
  { size: 140, top: '10%', right: '4%', blur: 10, opacity: 0.22, rotate: 30  },
  { size: 90,  top: '35%', right: '8%', blur: 5,  opacity: 0.32, rotate: -10 },
  { size: 70,  top: '70%', right: '3%', blur: 3,  opacity: 0.4,  rotate: 15  },
  { size: 110, top: '45%', left: '10%', blur: 7,  opacity: 0.28, rotate: -20 },
  { size: 55,  top: '20%', right: '22%',blur: 2,  opacity: 0.45, rotate: 5   },
  { size: 130, top: '80%', right: '18%',blur: 9,  opacity: 0.22, rotate: -8  },
  { size: 75,  top: '50%', right: '28%',blur: 4,  opacity: 0.35, rotate: 22  },
  { size: 50,  top: '88%', left: '45%', blur: 2,  opacity: 0.4,  rotate: -30 },
]

export default function MandarineCourse() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="mandarin" className="bg-cream pt-8 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-10">

          {/* LEFT — Author card */}
          <div
            className="shrink-0 w-full lg:w-96 rounded-3xl flex flex-col items-center justify-center text-center p-12 gap-6"
            style={{
              background: 'white',
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
            }}
          >
            {/* Author image */}
            <div
              className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-crimson/20 shrink-0 flex items-center justify-center"
              style={{ background: '#f3f4f6' }}
            >
              {imgError ? (
                <span className="text-crimson font-serif font-bold text-4xl">ЧЛ</span>
              ) : (
                <Image
                  src="/images/teacherCSCA4.jpg"
                  alt="Чжан Лина"
                  fill
                  className="object-cover"
                  sizes="176px"
                  onError={() => setImgError(true)}
                />
              )}
            </div>

            <div>
              <p className="font-serif font-bold text-crimson text-2xl leading-tight">Чжан Лина</p>
              <p className="font-sans text-gray-400 text-sm mt-2">Китаевед · HSK 5</p>
            </div>

            <div className="h-px w-full bg-gray-100" />

            <p className="font-serif font-black text-crimson text-5xl leading-none">MANDARINE</p>
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-crimson/30" />
              <p className="text-crimson font-bold text-2xl tracking-widest">3.0</p>
              <div className="h-px w-8 bg-crimson/30" />
            </div>
            <p className="text-gray-400 text-sm tracking-widest">中文 · КИТАЙСКИЙ</p>

            <div className="h-px w-full bg-gray-100" />

            
            <span className="text-6xl">🍊</span>
          </div>

          {/* RIGHT — Course info with floating tangerines */}
          <div
            className="relative flex-1 rounded-3xl p-12 lg:p-16 flex flex-col justify-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fed7aa 100%)',
              border: '1px solid rgba(249,115,22,0.15)',
            }}
          >
            {TANGERINES.map((t, i) => (
              <div
                key={i}
                className="absolute pointer-events-none select-none"
                style={{
                  top: t.top,
                  left: 'left' in t ? t.left : undefined,
                  right: 'right' in t ? t.right : undefined,
                  fontSize: t.size,
                  lineHeight: 1,
                  filter: `blur(${t.blur}px)`,
                  opacity: t.opacity,
                  transform: `rotate(${t.rotate}deg)`,
                }}
              >
                🍊
              </div>
            ))}

            <div className="relative z-10">
              {/* Key claim badge */}
              <div className="inline-flex items-center gap-3 mb-8 relative">
                {/* Left lantern knot */}
                <span className="text-crimson/40 text-xl select-none">✦</span>
                <div
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-crimson/25"
                  style={{ background: 'linear-gradient(90deg, rgba(154,8,9,0.07) 0%, rgba(154,8,9,0.12) 100%)' }}
                >
                  <span className="font-serif text-crimson/50 text-base font-bold tracking-widest select-none">零</span>
                  <p className="font-serif font-bold text-crimson text-sm md:text-base tracking-wide">
                    с 0 до HSK 1 всего за <span className="text-xl font-black">8</span> уроков
                  </p>
                  <span className="font-serif text-crimson/50 text-base font-bold tracking-widest select-none">一</span>
                </div>
                <span className="text-crimson/40 text-xl select-none">✦</span>
              </div>

              <h2 className="font-serif font-bold text-crimson text-5xl md:text-6xl leading-tight mb-4">
                Китайский с нуля 🇨🇳
              </h2>

              <p className="font-sans text-gray-500 italic text-base mb-8">
                Авторский курс от китаеведа Чжан Лины
              </p>

              <div className="h-px w-full bg-orange-200 mb-8" />

              <p className="font-sans text-gray-700 text-base leading-relaxed mb-10">
                Интенсив-курс направлен на быстрое и качественное изучение с 0 до HSK 1 — «без воды», по строгим стандартам китайской методики преподавания BLCU (Beijing Language and Culture University) всего за 8 уроков !!
              </p>

              <p className="font-sans font-bold text-crimson text-sm tracking-widest uppercase mb-5">
                На курсе вы научитесь:
              </p>

              <ul className="space-y-4 mb-12">
                {[
                  'Тональность, пиньинь и произношение',
                  'Базовые темы HSK 1',
                  'Аудирование, чтение и письменность',
                  'Говорение — в подарок 🎁',
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-crimson font-serif font-bold text-2xl shrink-0">测</span>
                    <span className="font-sans text-gray-900 text-base">{text}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-crimson text-cream font-bold text-base px-10 py-4 rounded-xl hover:opacity-90 transition-all active:scale-95">
                Записаться на курс
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}