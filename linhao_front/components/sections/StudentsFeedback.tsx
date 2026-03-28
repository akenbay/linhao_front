export default function StudentFeedback() {
  const screenshots = [
    { src: '/images/studentf1.jpg',  rotate: '-rotate-1' },
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
  ]

  const col1 = [screenshots[0], screenshots[3], screenshots[6], screenshots[9]]
  const col2 = [screenshots[1], screenshots[4], screenshots[7], screenshots[10]]
  const col3 = [screenshots[2], screenshots[5], screenshots[8]]
  const cols = [col1, col2, col3]

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

        {/* 3-column masonry */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {cols.map((col, ci) => (
            <div key={ci} className={`flex flex-col gap-5 ${ci === 1 ? 'mt-10' : ''}`}>
              {col.map((s, i) => (
                <div
                  key={i}
                  className={`
                    ${s.rotate} hover:rotate-0 hover:scale-105
                    transition-all duration-300 cursor-pointer
                    rounded-2xl overflow-hidden shadow-2xl border border-white/5
                  `}
                >
                  <img
                    src={s.src}
                    alt="Отзыв"
                    className="w-full h-auto block"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-cream/30 text-xs mt-10">
          Все отзывы — реальные скриншоты из Telegram и Instagram
        </p>

      </div>
    </section>
  )
}