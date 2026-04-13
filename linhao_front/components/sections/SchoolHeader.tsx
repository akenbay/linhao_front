import Image from 'next/image'

export default function SchoolHeader() {
  return (
    <section id="header" className="bg-cream min-h-screen flex flex-col items-center justify-center gap-8 px-6 pt-24 pb-16"
  style={{
    backgroundImage: "url('/images/schoolheader_bg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>

      {/* Logo */}
      <div className="relative w-60 h-60 rounded-full border-4 border-crimson overflow-hidden shadow-xl">
        <Image
          src="/images/logo.png"
          alt="School Logo"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* School name */}
      <div className="text-center">
        <h1 className="text-crimson font-serif text-5xl md:text-6xl lg:text-7xl tracking-wide">
          linhao.chinese
        </h1>
        <p className="text-vermillion font-serif text-2xl md:text-3xl mt-3 tracking-widest">
          Онлайн-Школа китайского языка
        </p>
        <p className="text-black font-serif text-2xl md:text-xl mt-3 tracking-widest">
          Подготовка к HSK и CSCA экзаменам
        </p>
        
      </div>

    </section>
  )
}