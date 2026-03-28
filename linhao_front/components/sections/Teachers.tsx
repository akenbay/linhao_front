export default function Teachers() {
  const teachers = [
    {
      name: 'Имя Преподавателя',
      role: 'Преподаватель китайского',
      experience: '5 лет опыта',
      hsk: 'HSK 6',
      bio: 'Краткое описание преподавателя. Специализация, методика, достижения.',
    },
    {
      name: 'Имя Преподавателя',
      role: 'Преподаватель китайского',
      experience: '3 года опыта',
      hsk: 'HSK 5',
      bio: 'Краткое описание преподавателя. Специализация, методика, достижения.',
    },
    {
      name: 'Имя Преподавателя',
      role: 'Преподаватель китайского',
      experience: '7 лет опыта',
      hsk: 'HSK 6',
      bio: 'Краткое описание преподавателя. Специализация, методика, достижения.',
    },
    {
      name: 'Имя Преподавателя',
      role: 'Преподаватель китайского',
      experience: '4 года опыта',
      hsk: 'HSK 5',
      bio: 'Краткое описание преподавателя. Специализация, методика, достижения.',
    },
  ]

  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/images/teachers_bg.png')", // PLACEHOLDER: replace with your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
     

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-crimson text-3xl md:text-5xl font-bold mb-4">
            Наши преподаватели по CSCA
          </h2>
          <div className="h-0.5 w-32 mx-auto bg-linear-to-r from-transparent via-vermillion to-transparent"/>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image placeholder */}
              <div className="w-full h-56 bg-crimson/10 flex items-center justify-center border-b-4 border-gold">
                {/*
                  PLACEHOLDER: Replace this div with:
                  <img src="/images/teacher-1.webp" alt={t.name} className="w-full h-full object-cover" />
                */}
                <div className="flex flex-col items-center gap-2 text-crimson/30">
                  <svg viewBox="0 0 24 24" className="w-16 h-16" fill="currentColor">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                  </svg>
                  <span className="text-xs font-medium">Фото преподавателя</span>
                </div>
              </div>

              {/* Text */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif text-crimson text-lg font-bold leading-tight mb-1">
                  {t.name}
                </h3>
                <p className="text-vermillion text-xs font-semibold tracking-wide mb-3">
                  {t.role}
                </p>

                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                  {t.bio}
                </p>

                {/* Tags */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-crimson/10 text-crimson text-xs px-3 py-1 rounded-full font-medium">
                    {t.hsk}
                  </span>
                  <span className="bg-gold/20 text-yellow-700 text-xs px-3 py-1 rounded-full font-medium">
                    {t.experience}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}