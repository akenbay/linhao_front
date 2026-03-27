// components/sections/HeroVideo.tsx
import Link from 'next/link'
import { WaveDivider, LanternSVG, MeanderBorder, CornerDecoration } from '@/components/ui/ChineseDecorations'

export default function HeroVideo() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-16" style={{ backgroundImage: "url('/images/hero_bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>

      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[28rem] font-serif text-white/5 leading-none">中</span>
      </div>

      {/* Two-column layout */}
      <div className="relative z-10 flex-1 flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center py-16">

          {/* LEFT — Hero text — NO background, original styling */}
          <div>
            <div className="inline-flex items-center gap-2 bg-crimson/20 border border-crimson/40 text-crimson px-4 py-1.5 rounded-sm text-sm font-medium mb-6">
              <span>✦</span>
              <span>Школа китайского языка</span>
              <span>✦</span>
            </div>

            <h1 className="text-vermillion font-serif text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Откройте мир<br/>
              <span className="text-vermillion">китайского языка</span>
            </h1>

            <p className="text-black/70 text-lg max-w-xl mb-10 leading-relaxed">
              Профессиональная школа китайского языка с подтверждёнными результатами.
              Более 500 выпускников. Сертифицированные преподаватели.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/programs"
                className="bg-crimson text-cream px-8 rounded-2xl py-4 text-base hover:bg-yellow-400  shadow-black/30 text-center">
                Посмотреть программы
              </Link>
              <a href="https://t.me/YourSchoolHandle"
                className="border-2 rounded-2xl text-crimson px-8 py-4 text-base hover:bg-gold hover:text-crimson transition-all duration-300 text-center">
                Написать в Telegram
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-crimson/20 pt-8 max-w-sm">
              {[
                { num: '500+', label: 'Выпускников' },
                { num: '5 лет', label: 'Опыта' },
                { num: '97%', label: 'Сдали HSK' },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <p className="text-crimson text-2xl font-serif font-bold">{s.num}</p>
                  <p className="text-black/50 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — White rounded rectangle with circle video + bottom corners */}
          <div className="bg-white rounded-2xl p-5 shadow-xl flex flex-col items-center gap-8">

            {/* Circle video */}
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-crimson shadow-[0_0_60px_rgba(237,197,55,0.25)] overflow-hidden">
                <video
                  src="/videos/IMG_3807.MP4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom row — Name (left) | Telegram (right) */}
            <div className="w-full flex items-end justify-between ">

              {/* Bottom-left: Name + title */}
              <div>
                <p className="font-serif text-vermillion  text-lg leading-tight">Имя Основателя</p>
                <p className="text-gray-400 text-sm mt-0.5">Основатель школы</p>
              </div>

              {/* Bottom-right: Telegram */}
              <a
                href="https://t.me/YourSchoolHandle"
                className="flex items-center gap-2  text-black px-5 py-2.5 text-lg "
              >
                @Telegram
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}