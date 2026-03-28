export default function Teachers() {
  const teachers = [
    {
      name: 'Арсен',
      role: 'Преподаватель по математике',
      experience: '5 лет опыта',
      hsk: 'HSK 6',
      bio: 'Один из сильнейших преподавателей, чьи студенты достигают одних из лучших результатов по математике на CSCA благодаря чёткой системе объяснения и практике.',
      image: '/images/teacherCSCA1.jpg',
    },
    {
      name: 'Роберт',
      role: 'Преподаватель физики и математики',
      experience: '3 года опыта',
      hsk: 'HSK 5',
      bio: 'Получивший максимальный результат (100/100) на CSCA. Отлично ориентируется в формате экзамена и эффективно готовит студентов. Действующий студент Zhejiang University — одного из лучших вузов Китая.',
      image: '/images/teacherCSCA2.jpg',
    },
    {
      name: 'Геннадий',
      role: 'Преподаватель по химии',
      experience: '7 лет опыта',
      hsk: 'HSK 6',
      bio: 'Призёр областных, а также республиканских олимпиад. Сильная академическая база и глубокое понимание предмета помогают ему эффективно готовить учеников.',
      image: '/images/teacherCSCA3.jpg',
    },
    {
      name: 'Лина',
      role: 'Преподаватель по гуманитарному и техническому китайскому языку',
      experience: '7 лет опыта',
      hsk: 'HSK 6',
      bio: 'Носитель языка с практическим опытом. Специализируется на работе с текстами и обучает стратегиям быстрого и точного поиска правильных ответов.',
      image: '/images/teacherCSCA4.jpg',
    },
    {
      name: 'Александр',
      role: 'Преподаватель по гуманитарному и техническому китайскому языку',
      experience: '4 года опыта',
      hsk: 'HSK 5',
      bio: 'Обучался в Китае, уровень HSK 6. Готовит к CSCA, делает упор на академическую лексику, развитие понимания сложных текстов и повышение скорости выполнения заданий.',
      image: '/images/teacherCSCA5.jpg',
    },
  ]

  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/images/teachers_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-crimson text-3xl md:text-5xl font-bold mb-4">
            Наши преподаватели по CSCA
          </h2>
          <div className="h-0.5 w-32 mx-auto bg-linear-to-r from-transparent via-vermillion to-transparent" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teachers.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Teacher image */}
              <div className="w-full h-56 border-b-4 border-gold">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover object-top"
                />
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
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}