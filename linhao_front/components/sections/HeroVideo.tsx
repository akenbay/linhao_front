'use client'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'


export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)


  useEffect(() => {
    const unlock = () => {
      if (videoRef.current) {
        videoRef.current.muted = false
      }
    }
    document.addEventListener('click', unlock, { once: true })
    return () => document.removeEventListener('click', unlock)
  }, [])


  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setPlaying(!playing)
  }


  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden pt-16"
      style={{ backgroundImage: "url('/images/hero_bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[28rem] font-serif text-white/5 leading-none">中</span>
      </div>


      <div className="relative z-10 flex-1 flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center py-16">


          {/* LEFT — formerly RIGHT (video card) */}
          <div className="bg-white rounded-2xl p-5 shadow-xl flex flex-col items-center gap-8">

            <div className="w-full flex items-end justify-between">
              <div>
                <p className="font-serif text-vermillion text-lg leading-tight">你好</p>
              </div>
              <div>
                <p className="font-serif text-vermillion text-lg leading-tight">Привет!</p>
              </div>
            </div>

            <div className="relative group">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-crimson shadow-[0_0_60px_rgba(237,197,55,0.25)] overflow-hidden">
                <video
                  ref={videoRef}
                  src="/videos/IMG_3807.MP4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-full flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                <button
                  onClick={togglePlay}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-14 h-14 bg-white/90 rounded-full flex items-center justify-center hover:bg-white shadow-lg"
                >
                  {playing ? (
                    <span className="flex gap-1.5">
                      <span className="w-1.5 h-6 bg-crimson rounded-sm"/>
                      <span className="w-1.5 h-6 bg-crimson rounded-sm"/>
                    </span>
                  ) : (
                    <span className="w-0 h-0 ml-1.5" style={{
                      borderTop: '11px solid transparent',
                      borderBottom: '11px solid transparent',
                      borderLeft: '18px solid #990808'
                    }}/>
                  )}
                </button>
              </div>
            </div>

            <div className="w-full flex items-end justify-between">
              <div>
                <p className="font-serif text-vermillion text-lg leading-tight">Имя Основателя</p>
                <p className="text-gray-400 text-sm mt-0.5">Основатель школы</p>
              </div>
              <a
                href="https://t.me/YourSchoolHandle"
                className="flex items-center gap-2 text-black px-5 py-2.5 text-lg hover:text-crimson transition-colors"
              >
                @Telegram
              </a>
            </div>

          </div>


          {/* RIGHT — formerly LEFT (text content) */}
          <div>
            <div className="inline-flex items-center gap-2 bg-crimson/20 border border-crimson/40 text-crimson px-4 py-1.5 rounded-sm text-sm font-medium mb-6">
              <span>✦</span>
              <span>Школа китайского языка</span>
              <span>✦</span>
            </div>

            <h1 className="text-vermillion font-serif text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              О нас:<br/>
             
            </h1>

            <p className="text-black/70 text-lg max-w-xl mb-10 leading-relaxed">
              Китайский язык для нас — это как второй родной язык, и мы влюбляем в культуру и язык Китая! 
            </p>
            <p className="text-black/70 text-lg max-w-xl mb-10 leading-relaxed">
              В школе работает команда преподавателей с профильным образованием и опытом подготовки к экзаменам. Все педагоги владеют китайским языком на уровне HSK 5+ и объясняют материал доступно и системно.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/programs"
                className="bg-crimson text-cream px-8 rounded-2xl py-4 text-base hover:bg-yellow-400 shadow-black/30 text-center transition-colors duration-300">
                Посмотреть программы
              </Link>
              <a href="https://t.me/YourSchoolHandle"
                className="border-2 border-crimson rounded-2xl text-crimson px-8 py-4 text-base hover:bg-gold hover:border-gold transition-all duration-300 text-center">
                Написать в Telegram
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-crimson/20 pt-8 max-w-sm">
              {[
                { num: '200+', label: 'Студентов поступившие в Китай' },
                { num: '96%', label: 'Успешно сдали HSK' },
                { num: '87%',  label: 'Успешно сдали CSCA' },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <p className="text-gold text-2xl font-serif font-bold">{s.num}</p>
                  <p className="text-gold/50 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}