'use client'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'


export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const circumference = 2 * Math.PI * 47

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const onPlay       = () => setPlaying(true)
    const onPause      = () => setPlaying(false)
    const onEnded      = () => { setPlaying(false); setProgress(0) }
    const onTimeUpdate = () => {
      if (video.duration) setProgress(video.currentTime / video.duration)
    }
    video.addEventListener('play',       onPlay)
    video.addEventListener('pause',      onPause)
    video.addEventListener('ended',      onEnded)
    video.addEventListener('timeupdate', onTimeUpdate)
    return () => {
      video.removeEventListener('play',       onPlay)
      video.removeEventListener('pause',      onPause)
      video.removeEventListener('ended',      onEnded)
      video.removeEventListener('timeupdate', onTimeUpdate)
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    // Unmute on first interaction — browsers require muted for autoplay
    if (video.muted) video.muted = false
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }


  return (
    <section id="about"
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

            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                {/* Progress ring */}
                <svg
                  className="absolute -inset-3 -rotate-90 pointer-events-none"
                  style={{ width: 'calc(100% + 24px)', height: 'calc(100% + 24px)' }}
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle cx="50" cy="50" r="47" stroke="rgba(154,8,9,0.2)" strokeWidth="2.5" />
                  <circle
                    cx="50" cy="50" r="47"
                    stroke="#EEC537"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference * (1 - progress)}
                    style={{ transition: 'stroke-dashoffset 0.25s linear' }}
                  />
                </svg>

                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full shadow-[0_0_60px_rgba(237,197,55,0.25)] overflow-hidden">
                  <video
                    ref={videoRef}
                    src="https://res.cloudinary.com/dbmyngdiw/video/upload/v1776063772/hero_hlwdxl.mp4"
                    poster="https://res.cloudinary.com/dbmyngdiw/video/upload/so_0/v1776063772/hero_hlwdxl.jpg"
                    muted
                    playsInline
                    disablePictureInPicture
                    className="w-full h-full object-cover"
                  />
                  {/* Blocks native browser video overlay */}
                  <div className="absolute inset-0" />
                  {/* Play/pause button inside circle, bottom center */}
                  <button
                    onClick={togglePlay}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-all z-10 backdrop-blur-md border border-white/30"
                    style={{ background: 'rgba(255,255,255,0.2)' }}
                  >
                    {playing ? (
                      <span className="flex gap-1">
                        <span className="w-1.5 h-5 bg-gold rounded-full"/>
                        <span className="w-1.5 h-5 bg-gold rounded-full"/>
                      </span>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 18 18" fill="none" className="ml-1">
                        <path d="M5 3.5C5 2.7 5.9 2.2 6.6 2.7L15.1 8.2C15.7 8.6 15.7 9.4 15.1 9.8L6.6 15.3C5.9 15.8 5 15.3 5 14.5V3.5Z"
                          fill="#EEC537" strokeLinejoin="round" strokeLinecap="round"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full flex items-end justify-between">
              <div>
                <p className="font-serif text-vermillion text-lg leading-tight">Чжан Лина</p>
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