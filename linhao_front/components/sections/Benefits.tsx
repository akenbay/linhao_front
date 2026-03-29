'use client'

const benefits = [
  { hanzi: '事业', title: 'Карьера',     desc: 'Китайские компании ищут сотрудников со знанием языка' },
  { hanzi: '商业', title: 'Бизнес',      desc: 'Казахстан — ключевой партнёр Китая в Центральной Азии' },
  { hanzi: '学习', title: 'Образование', desc: 'Стипендии и топовые университеты Китая' },
  { hanzi: '文化', title: 'Культура',    desc: '1.4 млрд носителей и богатейшая цивилизация' },
  { hanzi: '旅行', title: 'Путешествия', desc: 'Свободно перемещайся по всему Китаю' },
  { hanzi: '未来', title: 'Будущее',     desc: '2-я экономика мира с растущим влиянием' },
]

export default function WhyChinese() {
  return (
    <section className="relative bg-[#05080f] py-24 overflow-hidden">

      <style>{`
        @keyframes sway {
          0%, 100% { transform: rotate(-3deg); }
          50%       { transform: rotate(3deg); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.82; }
        }
        .lantern-sway { transform-origin: top center; animation: sway 4s ease-in-out infinite; }
        .lantern-glow { animation: flicker 3s ease-in-out infinite; }
      `}</style>

      {/* Moon glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(180,20,20,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-24">
          <p className="text-red-400/70 font-serif text-xl tracking-widest mb-3">为什么</p>
          <h2 className="font-serif text-white text-4xl md:text-6xl font-bold mb-5">
            Почему именно китайский язык?
          </h2>
          <div className="h-0.5 w-40 mx-auto bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          <p className="text-white/50 text-lg md:text-xl mt-5">
            6 причин, которые изменят твою жизнь
          </p>
        </div>

      </div>

      {/* Rope + Lanterns — full screen width, outside max-w container */}
      <div className="relative w-full px-8">

        {/* Full-width rope */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: '1px',
            height: '3px',
            background: 'linear-gradient(to right, transparent, #92400e 3%, #a16207 50%, #92400e 97%, transparent)',
          }}
        />

        {/* Lanterns spaced across full width */}
        <div className="flex justify-between items-start">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="lantern-sway flex flex-col items-center"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3.5 + i * 0.3}s`,
              }}
            >
              {/* Top cord */}
              <div
                className="w-px h-16"
                style={{ background: 'linear-gradient(to bottom, #d97706, #92400e)' }}
              />

              {/* Top cap */}
              <div
                className="w-24 h-5 rounded-sm"
                style={{
                  background: 'linear-gradient(to right, #78350f, #d97706, #78350f)',
                  boxShadow: '0 0 10px rgba(217,119,6,0.6)',
                }}
              />

              {/* Lantern body */}
              <div
                className="lantern-glow relative flex flex-col items-center justify-center text-center"
                style={{
                  width: '160px',
                  height: '220px',
                  padding: '0 14px',
                  background: 'radial-gradient(ellipse at 40% 35%, #ef4444 0%, #b91c1c 45%, #7f1d1d 100%)',
                  borderRadius: '42% 42% 42% 42% / 50% 50% 50% 50%',
                  boxShadow: `
                    0 0 40px 14px rgba(220,38,38,0.55),
                    0 0 90px 35px rgba(220,38,38,0.2),
                    inset 0 0 30px rgba(255,180,180,0.1)
                  `,
                  animationDelay: `${i * 0.7}s`,
                }}
              >
                <div className="absolute inset-0 flex justify-around items-stretch px-3 opacity-20 pointer-events-none">
                  {[0,1,2,3].map(j => (
                    <div key={j} className="w-px"
                      style={{ background: 'linear-gradient(to bottom, transparent, #fca5a5, transparent)' }}
                    />
                  ))}
                </div>

                <p className="text-4xl font-bold leading-none mb-3"
                  style={{ color: '#fde68a', textShadow: '0 0 14px rgba(251,191,36,0.95)' }}>
                  {b.hanzi}
                </p>
                <p className="text-white font-semibold text-sm leading-tight mb-2">{b.title}</p>
                <p className="text-red-100/70 text-[11px] leading-snug">{b.desc}</p>
              </div>

              {/* Bottom cap */}
              <div
                className="w-24 h-5 rounded-sm"
                style={{
                  background: 'linear-gradient(to right, #78350f, #d97706, #78350f)',
                  boxShadow: '0 0 10px rgba(217,119,6,0.6)',
                }}
              />

              {/* Tassel cord */}
              <div className="w-px h-8"
                style={{ background: 'linear-gradient(to bottom, #d97706, #92400e88)' }}
              />

              {/* Tassel fringe */}
              <div className="flex gap-1">
                {[0,1,2,3,4].map(j => (
                  <div key={j} className="w-px h-8 rounded-full"
                    style={{ background: 'linear-gradient(to bottom, #ef4444, transparent)' }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}