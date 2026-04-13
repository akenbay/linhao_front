'use client'
import Image from 'next/image'

const HSK_FEEDBACK = [
  '/images/hsk_feedback/1.jpg',
  '/images/hsk_feedback/2.jpg',
  '/images/hsk_feedback/3.jpg',
]

export default function AboutSection() {
  return (
    <section id="about1" className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* LEFT — Мини-группы: full-bleed photo with overlay */}
          <div
            className="relative rounded-3xl overflow-hidden min-h-115 flex flex-col justify-end"
            style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}
          >
            <Image
              src="/images/group_photo.jpg"
              alt="Мини-группа"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)' }}
            />
            {/* Text */}
            <div className="relative z-10 p-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gold bg-gold/15 border border-gold/30 px-3 py-1 rounded-full mb-4">
                Формат
              </span>
              <h3 className="font-serif text-white text-3xl font-bold leading-tight mb-2">
                Мини-группы<br />до 5 человек
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Максимум внимания каждому — всегда есть возможность задать вопрос и получить поддержку
              </p>
            </div>
          </div>

          {/* RIGHT — Результаты: stats + feedback screenshots */}
          <div
            className="rounded-3xl overflow-hidden flex flex-col min-h-115"
            style={{ background: 'linear-gradient(160deg, #9A0809 0%, #7a0606 100%)', boxShadow: '0 8px 40px rgba(154,8,9,0.25)' }}
          >
            {/* Stats */}
            <div className="p-8 flex flex-col gap-1">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gold bg-gold/15 border border-gold/30 px-3 py-1 rounded-full self-start mb-5">
                Результаты
              </span>

              <div className="flex gap-8">
                <div>
                  <p className="font-serif font-black text-gold text-5xl leading-none">200+</p>
                  <p className="text-white/50 text-xs mt-1.5 leading-snug">баллов из 300<br />на HSK</p>
                </div>
                <div className="w-px bg-white/10" />
                <div>
                  <p className="font-serif font-black text-gold text-5xl leading-none">60+</p>
                  <p className="text-white/50 text-xs mt-1.5 leading-snug">баллов<br />на HSKK</p>
                </div>
              </div>

              <p className="text-white/40 text-xs mt-5 leading-relaxed max-w-xs">
                Стабильный результат — наши ученики сдают HSK и HSKK выше среднего
              </p>
            </div>

            {/* Divider */}
            <div className="mx-8 h-px bg-white/10" />

            {/* Feedback screenshots — cards in a row */}
            <div className="flex gap-3 px-8 pb-8 pt-4">
              {HSK_FEEDBACK.map((src, i) => (
                <div key={i} className="flex-1 rounded-xl overflow-hidden border border-white/10 shadow-lg flex items-center justify-center p-2">
                  <Image
                    src={src}
                    alt={`Результат ${i + 1}`}
                    width={300}
                    height={400}
                    className="w-full object-contain"
                    sizes="20vw"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
