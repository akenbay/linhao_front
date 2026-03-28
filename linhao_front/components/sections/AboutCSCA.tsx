export default function AboutDiagnostic() {
  const items = [
    {
      title: 'Мы — одни из первых, кто системно готовит к CSCA и доводит до результата.',
      desc: '',
    },
    {
      title: 'Официальное партнёрство с тест-центром CSCA даёт нам доступ к актуальным требованиям экзамена.',
      desc: '',
    },
    {
      title: 'Наши преподаватели — эксперты в своих предметах с результатами 100/100, выпускники и студенты университетов Лиги C9 в Китае.',
      desc: '',
    },
    {
      title: 'Мы не просто «объясняем темы» — мы готовим к экзамену по стратегии: \n понятно, структурно и с фокусом на баллы.',
      desc: '',
    },
    {
      title: 'Результат: более 100 наших учеников уже сдали CSCA на 80+ баллов и поступили в университеты Китая.',
      desc: '',
    },
  ]

  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          {/* Card title */}
          <div className="px-10 lg:px-14 py-8 border-b border-gray-100">
            <h2 className="font-serif text-crimson text-2xl md:text-4xl font-bold">
              Подготовка к CSCA
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              1 месяц • 2 раза в неделю • Онлайн
            </p>
          </div>

          {/* Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT — result + CTA */}
            <div className="p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="font-sans font-bold text-crimson text-xl uppercase tracking-wide mb-6">
                  О CSCA:
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  CSCA (China Scholastic Competency Assessment) — это стандартизированный вступительный экзамен для иностранных абитуриентов, поступающих на программы бакалавриата в университеты Китая.
                </p>
              </div>

              <div className="bg-crimson rounded-2xl p-8 mt-10">
                <h4 className="font-serif text-cream text-xl font-bold mb-2">
                  Запишитесь прямо сейчас
                </h4>
                <p className="text-cream/70 text-sm mb-6">
                  И уже через 1 месяц вы начнёте произносить фразы правильно — если следовать плану
                </p>
                <a
                  href="https://t.me/YourSchoolHandle"
                  className="inline-block bg-gold text-crimson font-bold text-sm px-6 py-3 rounded-xl hover:bg-yellow-400 transition-colors"
                >
                  Записаться на сессию
                </a>
              </div>
            </div>

            {/* RIGHT — list */}
            <div className="p-10 lg:p-14">
              <h3 className="font-serif text-crimson text-xl font-bold leading-tight mb-8">
                Если цель — сдать CSCA и поступить в Китай, вы в правильном месте.
              </h3>
              <ul className="flex flex-col gap-8">
                {items.map((item, i) => (
                  <li key={i}>
                    <div className="flex items-start gap-3 mb-1">
                      <span className="text-crimson font-serif font-bold text-lg shrink-0">测</span>
                      <h3 className="font-sans font-bold text-gray-900 text-sm leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed pl-7">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}