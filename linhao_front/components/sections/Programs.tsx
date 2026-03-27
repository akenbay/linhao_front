import { Check } from 'lucide-react'

const programs = [
  {
    char: '零',
    title: 'Начинающий',
    subtitle: 'С нуля до базового',
    price: '9 900 ₸',
    period: 'в месяц',
    color: 'from-crimson to-[#7a0606]',
    bullets: [
      'Тоны, пиньинь и произношение',
      '150 базовых иероглифов',
      '2 занятия в неделю',
      'Чат поддержки с преподавателем',
    ],
  },
  {
    char: '初',
    title: 'Элементарный',
    subtitle: 'Уровень HSK 1–2',
    price: '12 900 ₸',
    period: 'в месяц',
    color: 'from-vermillion to-[#c73015]',
    bullets: [
      'Разговорные диалоги и аудирование',
      '300 иероглифов',
      '3 занятия в неделю',
      'Еженедельные разговорные практики',
    ],
  },
  {
    char: '中',
    title: 'Средний',
    subtitle: 'Уровень HSK 3–4',
    price: '14 900 ₸',
    period: 'в месяц',
    color: 'from-[#b8860b] to-[#8B6914]',
    bullets: [
      'Расширенная грамматика и письмо',
      '600 иероглифов',
      '3 занятия в неделю',
      'Индивидуальная сессия 1× в месяц',
    ],
  },
  {
    char: '高',
    title: 'Продвинутый',
    subtitle: 'Уровень HSK 5–6',
    price: '19 900 ₸',
    period: 'в месяц',
    color: 'from-[#1a1a2e] to-[#16213e]',
    bullets: [
      'Деловой китайский и переговоры',
      '1200+ иероглифов',
      '4 занятия в неделю',
      'Полная подготовка к экзамену HSK',
    ],
  },
]

export default function Programs() {
  return (
    <section className="relative bg-cream py-24 px-6 overflow-hidden" style={{
        backgroundImage: "url('/images/programs_bg.png')", // PLACEHOLDER: replace with your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-crimson text-3xl md:text-5xl font-bold mb-4">
            Наши программы
          </h2>
          <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-transparent via-vermillion to-transparent"/>
        </div>

        {/* Gift cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Top — gift card header */}
              <div className={`relative bg-gradient-to-br ${p.color} p-6 flex flex-col gap-3`}>

                {/* Decorative circles (gift card feel) */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-8 translate-x-8"/>
                <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-white/5 translate-y-6 -translate-x-6"/>

                {/* Chinese character watermark */}
                <span className="absolute bottom-2 right-4 text-7xl font-serif text-white/10 leading-none select-none">
                  {p.char}
                </span>

                {/* Badge */}
                <span className="relative z-10 self-start bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium tracking-wide">
                  {p.subtitle}
                </span>

                {/* Title */}
                <h3 className="relative z-10 text-white font-serif text-2xl font-bold">
                  {p.title}
                </h3>

                {/* Price */}
                <div className="relative z-10 mt-1">
                  <span className="text-gold text-3xl font-bold font-serif">{p.price}</span>
                  <span className="text-white/60 text-sm ml-1">{p.period}</span>
                </div>

                {/* Dashed divider — gift card tear line */}
                <div className="relative z-10 mt-3 flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-cream -ml-9"/>
                  <div className="flex-1 border-t-2 border-dashed border-white/30"/>
                  <div className="w-4 h-4 rounded-full bg-cream -mr-9"/>
                </div>
              </div>

              {/* Bottom — bullet points */}
              <div className="bg-white flex-1 p-6 flex flex-col gap-5">
                <ul className="flex flex-col gap-3 flex-1">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                      <Check size={16} className="text-vermillion mt-0.5 shrink-0"/>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://t.me/YourSchoolHandle"
                  className="block text-center bg-crimson text-cream py-3 rounded-xl text-sm font-semibold hover:bg-vermillion transition-colors duration-300 mt-2"
                >
                  Записаться
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}