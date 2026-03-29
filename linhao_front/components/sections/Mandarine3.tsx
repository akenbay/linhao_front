'use client'

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
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-8">

          {/* LEFT — Author card */}
          <div
            className="shrink-0 w-full lg:w-72 rounded-3xl flex flex-col items-center justify-center text-center p-8 gap-4"
            style={{
              background: 'white',
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}
          >
            {/* Author image placeholder */}
            <div
              className="w-28 h-28 rounded-full overflow-hidden border-4 border-crimson/20 shrink-0"
              style={{ background: '#f3f4f6' }}
            >
              {/* Replace src with actual author image */}
              <img
                src="/images/author.jpg"
                alt="Чжан Лина"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none'
                }}
              />
              {/* Fallback initials */}
              <div className="w-full h-full flex items-center justify-center text-crimson font-serif font-bold text-2xl">
                ЧЛ
              </div>
            </div>

            <div>
              <p className="font-serif font-bold text-crimson text-lg leading-tight">Чжан Лина</p>
              <p className="font-sans text-gray-400 text-xs mt-1">Китаевед · HSK 5</p>
            </div>

            <div className="h-px w-full bg-gray-100" />

            <p className="font-serif font-black text-crimson text-3xl leading-none">MANDARINE</p>
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-crimson/30" />
              <p className="text-crimson font-bold text-lg tracking-widest">3.0</p>
              <div className="h-px w-6 bg-crimson/30" />
            </div>
            <p className="text-gray-400 text-xs tracking-widest">中文 · КИТАЙСКИЙ</p>

            <div className="h-px w-full bg-gray-100" />

            <p className="text-gray-600 text-sm leading-relaxed">
              Нихао! Спасибо за интерес к курсу 🇨🇳❤️
            </p>
            <span className="text-4xl">🍊</span>
          </div>

          {/* RIGHT — Course info with floating tangerines */}
          <div
            className="relative flex-1 rounded-3xl p-10 lg:p-12 flex flex-col justify-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fed7aa 100%)',
              border: '1px solid rgba(249,115,22,0.15)',
            }}
          >
            {/* Floating tangerines inside this div only */}
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

            {/* Content on top */}
            <div className="relative z-10">
              <h2 className="font-serif font-bold text-crimson text-4xl md:text-5xl leading-tight mb-3">
                Китайский с нуля 🇨🇳
              </h2>

              <p className="font-sans text-gray-500 italic text-sm mb-6">
                Авторский курс от китаеведа Чжан Лины
              </p>

              <div className="h-px w-full bg-orange-200 mb-6" />

              <p className="font-sans text-gray-700 text-sm leading-relaxed mb-8">
                Интенсив-курс направлен на быстрое и качественное изучение{' '}
                <strong className="text-gray-900">с 0 до HSK 1</strong> — «без воды»,
                по строгим стандартам китайской методики преподавания{' '}
                <strong className="text-gray-900">BLCU</strong> (Beijing Language and Culture University).
              </p>

              <p className="font-sans font-bold text-crimson text-xs tracking-widest uppercase mb-4">
                На курсе вы научитесь:
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Тональность, пиньинь и произношение',
                  'Базовые темы HSK 1',
                  'Аудирование, чтение и письменность',
                  'Говорение — в подарок 🎁',
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-crimson font-serif font-bold text-lg shrink-0">测</span>
                    <span className="font-sans text-gray-900 text-sm">{text}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-crimson text-cream font-bold text-sm px-7 py-3.5 rounded-xl hover:opacity-90 transition-all active:scale-95">
                Записаться на курс
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}