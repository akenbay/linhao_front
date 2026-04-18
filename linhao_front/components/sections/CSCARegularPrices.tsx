'use client'

const plans = [
  {
    label: 'Китайский язык',
    chinese: '语言',
    subjects: ['Гуманитарный / технический китайский'],
    lessons: 12,
    price: '66 000',
    badge: null,
    featured: false,
  },
  {
    label: 'Математика',
    chinese: '数学',
    subjects: ['Преподаватель — Арсен'],
    lessons: 16,
    price: '88 000',
    badge: null,
    featured: false,
  },
  {
    label: 'Физика',
    chinese: '物理',
    subjects: ['Преподаватель — Роберт'],
    lessons: 10,
    price: '55 000',
    badge: null,
    featured: false,
  },
  {
    label: 'Математика',
    chinese: '数学',
    subjects: ['Преподаватель — Роберт'],
    lessons: 12,
    price: '66 000',
    badge: null,
    featured: false,
  },
  {
    label: 'Математика',
    chinese: '数学',
    subjects: ['Преподаватель — Избасар'],
    lessons: 14,
    price: '77 000',
    badge: null,
    featured: false,
  },
  {
    label: 'Химия',
    chinese: '化学',
    subjects: ['Подготовка к CSCA'],
    lessons: 12,
    price: '66 000',
    badge: null,
    featured: false,
  },
]

export default function CSCARegularPrices() {
  return (
    <section
      className="py-16 lg:py-28 px-4 lg:px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #160808 0%, #1f0b0b 100%)' }}
    >
      {/* Large watermark characters */}
      <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-[22rem] font-black text-white/[0.015] select-none pointer-events-none leading-none">
        學
      </span>
      <span className="absolute -left-8 bottom-0 text-[16rem] font-black text-white/[0.015] select-none pointer-events-none leading-none">
        道
      </span>

      {/* Top gold divider */}
      <div className="gold-divider mb-16" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full border border-gold/40 text-gold bg-gold/10 mb-6 tracking-widest uppercase">
            📖 Обычная программа
          </span>

          {/* Decorative Chinese divider */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-gold/50" />
            <span className="text-gold/25 text-5xl font-black select-none leading-none">普</span>
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-gold/50" />
          </div>

          <h2 className="font-serif text-cream text-2xl sm:text-3xl md:text-5xl font-bold mb-3">
            Обычная подготовка к CSCA
          </h2>
          <p className="text-cream/40 text-sm tracking-wide">
            Спокойный темп · Глубокое понимание
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:items-end">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? 'ring-1 ring-gold/60 lg:h-[570px] lg:pb-10 lg:pt-10'
                  : 'ring-1 ring-white/10 lg:h-[540px]'
              }`}
              style={{
                background: plan.featured
                  ? 'linear-gradient(160deg, #7a0606 0%, #9A0809 50%, #7a0606 100%)'
                  : 'linear-gradient(160deg, #1f0a0a 0%, #2c0e0e 100%)',
              }}
            >
              {/* Top accent line */}
              <div className={`h-0.5 w-full ${plan.featured ? 'bg-gold' : 'bg-white/10'}`} />

              {/* Chinese character watermark */}
              <span className="absolute right-5 top-5 text-7xl font-black opacity-[0.07] text-white select-none pointer-events-none leading-none">
                {plan.chinese}
              </span>

              {/* Badge */}
              <div className="px-6 pt-6 mb-3 h-10 flex items-center">
                {plan.badge ? (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold/20 text-gold border border-gold/30 tracking-wide">
                    {plan.badge}
                  </span>
                ) : null}
              </div>

              {/* Label */}
              <div className="px-6 mb-3">
                <h3 className={`font-serif font-bold text-xl leading-snug ${plan.featured ? 'text-cream' : 'text-cream/90'}`}>
                  {plan.label}
                </h3>
              </div>

              {/* Price */}
              <div className="px-6 mb-4">
                <p className="font-serif font-black text-3xl lg:text-4xl leading-none text-gold">
                  {plan.price}
                </p>
                <p className="text-cream/40 text-sm mt-2">тенге</p>
              </div>

              {/* Divider */}
              <div className={`mx-6 mb-4 h-px ${plan.featured ? 'bg-white/20' : 'bg-white/10'}`} />

              {/* Lessons */}
              <div className="px-6 mb-4 flex items-center gap-3">
                <span className={`w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                  plan.featured ? 'bg-white/15 text-cream' : 'bg-white/10 text-cream/70'
                }`}>
                  {plan.lessons}
                </span>
                <p className="text-cream/50 text-sm">уроков</p>
              </div>

              {/* Subjects */}
              <ul className="px-6 mb-5 lg:mb-6 flex flex-col gap-2.5 flex-1">
                {plan.subjects.map((s, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span className="text-gold font-bold shrink-0 mt-0.5 text-base">✦</span>
                    <p className={`text-sm leading-snug ${plan.featured ? 'text-cream/80' : 'text-cream/60'}`}>
                      {s}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Group size note */}
              <div className="px-6 mb-4 flex items-center gap-2">
                <span className="text-xs text-cream/50">👥</span>
                <p className="text-xs text-cream/50">Мини-группы от 2–5 человек</p>
              </div>

              {/* CTA */}
              <div className="px-6 pb-7 lg:pb-10 mt-auto">
                <a
                  href="https://t.me/YourSchoolHandle"
                  className={`block text-center font-bold text-sm px-5 py-4 rounded-xl transition-colors ${
                    plan.featured
                      ? 'bg-gold text-crimson hover:bg-yellow-400'
                      : 'bg-gold/10 text-gold border border-gold/30 hover:bg-gold hover:text-crimson'
                  }`}
                >
                  Записаться
                </a>
              </div>

              {/* Bottom accent line */}
              <div className={`h-0.5 w-full ${plan.featured ? 'bg-gold' : 'bg-white/10'}`} />
            </div>
          ))}
        </div>

      </div>

      {/* Bottom gold divider */}
      <div className="gold-divider mt-16" />
    </section>
  )
}
