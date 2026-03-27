export default function Students() {
  const students = [
    {
      name: 'Алия Махмутова',
      result: 'Сдала HSK 3 за 8 месяцев',
      duration: '8 месяцев',
      level: 'HSK 3',
      quote: 'До школы я думала, что китайский — это невозможно. Сейчас я переписываюсь с партнёрами из Шанхая без переводчика. Методика преподавания здесь совершенно другая — живая, интересная и результативная.',
    },
    {
      name: 'Дмитрий Ковалёв',
      result: 'Прошёл собеседование на китайском',
      duration: '12 месяцев',
      level: 'HSK 4',
      quote: 'Программа полностью изменила мою карьеру. Меня взяли в международную компанию именно из-за знания языка. Преподаватели не просто учат — они вдохновляют идти дальше.',
    },
    {
      name: 'Сабина Рахимова',
      result: 'Переехала работать в Пекин',
      duration: '18 месяцев',
      level: 'HSK 5',
      quote: 'Я поехала в Китай через год после начала обучения. Язык открыл передо мной совершенно новый мир — культуру, людей, возможности. Это лучшее решение в моей жизни.',
    },
    {
      name: 'Арман Сейтжанов',
      result: 'Открыл бизнес с китайскими партнёрами',
      duration: '10 месяцев',
      level: 'HSK 3',
      quote: 'Знание языка дало мне прямой доступ к поставщикам. Я экономлю на переводчиках и строю доверие с партнёрами напрямую. Школа дала мне инструмент, который работает каждый день.',
    },
  ]

  return (
    <section className="bg-cream py-24 px-6" style={{
        backgroundImage: "url('/images/students_bg.png')", // PLACEHOLDER: replace with your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-crimson text-3xl md:text-5xl font-bold mb-4">
            Истории наших студентов
          </h2>
          <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-transparent via-vermillion to-transparent"/>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {students.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="w-full h-72 bg-crimson/5 border-b-4 border-gold flex flex-col items-center justify-center gap-3">
                {/*
                  PLACEHOLDER: Replace with:
                  <img src="/images/student-1.webp" alt={s.name} className="w-full h-full object-cover" />
                */}
                <svg viewBox="0 0 24 24" className="w-16 h-16 text-crimson/20" fill="currentColor">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
                <span className="text-crimson/30 text-xs tracking-widest uppercase">Фото студента</span>
              </div>

              {/* Content */}
              <div className="p-8">

                {/* Name + badges */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-crimson text-xl font-bold">{s.name}</h3>
                    <p className="text-vermillion text-sm font-medium mt-1">{s.result}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0 ml-4">
                    <span className="bg-crimson text-cream text-xs px-3 py-1 rounded-full font-medium">
                      {s.level}
                    </span>
                    <span className="bg-gold/20 text-yellow-700 text-xs px-3 py-1 rounded-full">
                      {s.duration}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 mb-5"/>

                {/* Quote */}
                <blockquote>
                  <p className="text-gray-500 text-sm leading-relaxed italic">
                    «{s.quote}»
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}