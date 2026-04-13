'use client'
import Image from 'next/image'

const plans = [
  {
    label: '1 предмет',
    subjects: [
      'Математика, химия, физика или гуманитарный/технический китайский',
    ],
    lessons: 8,
    price: '56 000',
    badge: null,
    featured: false,
  },
  {
    label: '1 предмет + китайский',
    subjects: [
      'Один из: математика, химия, физика',
      '+ китайский язык',
    ],
    lessons: 16,
    price: '96 000',
    badge: null,
    featured: false,
  },
  {
    label: '2 предмета + китайский',
    subjects: [
      'Два из: математика, химия, физика',
      '+ китайский язык',
    ],
    lessons: 24,
    price: '141 000',
    badge: '⭐ Выгодно',
    featured: true,
  },
  {
    label: '3 предмета + китайский',
    subjects: [
      'Математика, химия, физика',
      '+ китайский язык',
    ],
    lessons: 32,
    price: '180 000',
    badge: '🔥 Максимум',
    featured: false,
  },
]

export default function PricingCSCA() {
  return (
    <section className="bg-cream py-16 lg:py-28 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="relative rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden mb-8 lg:mb-12"
          style={{ background: 'linear-gradient(135deg, #fff 0%, #fff5f0 60%, #ffe8df 100%)' }}
        >
          {/* Fiery glow backdrop */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(244,64,39,0.08) 0%, transparent 60%)' }}
          />
          <Image
            src="/images/maneki.png"
            alt=""
            width={400}
            height={400}
            className="absolute right-0 top-0 h-full w-auto object-cover object-left pointer-events-none select-none opacity-90 hidden lg:block"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            style={{ background: 'linear-gradient(to right, #fff5f0 38%, transparent 72%)' }}
          />
          {/* Decorative Chinese char */}
          <span className="absolute right-[38%] top-1/2 -translate-y-1/2 text-[7rem] font-black text-vermillion/6 select-none pointer-events-none hidden lg:block leading-none">
            強
          </span>
          <div className="relative z-10 px-7 sm:px-12 lg:px-16 py-8 lg:py-11 lg:max-w-[60%]">
            {/* Intensiv badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-black px-4 py-1.5 rounded-full text-white tracking-widest uppercase shadow-lg shadow-vermillion/40"
                style={{ background: 'linear-gradient(90deg, #F44027, #c0392b)' }}
              >
                🔥 Интенсив
              </span>
              <span className="text-vermillion/30 text-sm font-bold tracking-widest uppercase">· 冲刺备考 ·</span>
            </div>
            <p className="text-vermillion font-serif text-sm lg:text-base tracking-widest uppercase mb-2 opacity-50">价格</p>
            <h2 className="font-serif text-crimson text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Стоимость интенсивной подготовки к CSCA
            </h2>
            <p className="text-vermillion/60 text-sm mt-3 font-medium">Быстрый темп · Максимальный результат</p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 lg:items-end">
          {plans.map((plan, i) => {
            const isFeatured = plan.featured

            return (
              <div
                key={i}
                className={`
                  rounded-2xl lg:rounded-3xl overflow-hidden flex flex-col
                  ${isFeatured
                    ? 'bg-crimson shadow-2xl shadow-crimson/30 lg:h-[570px] lg:pb-10 lg:pt-10'
                    : 'bg-white shadow-lg lg:h-[540px]'
                  }
                `}
              >
                {/* Badge */}
                <div className="px-7 lg:px-9 pt-7 lg:pt-10 mb-4 lg:mb-5 h-10 lg:h-12 flex items-center">
                  {plan.badge ? (
                    <span className={`inline-flex text-xs font-bold px-3 py-1 rounded-full border ${
                      isFeatured
                        ? 'text-crimson bg-gold border-gold/40'
                        : 'text-crimson bg-red-50 border-crimson/20'
                    }`}>
                      {plan.badge}
                    </span>
                  ) : null}
                </div>

                {/* Plan label */}
                <div className="px-7 lg:px-9 mb-4 lg:mb-5">
                  <h3 className={`font-serif font-bold text-lg lg:text-xl leading-snug ${
                    isFeatured ? 'text-cream' : 'text-gray-900'
                  }`}>
                    {plan.label}
                  </h3>
                </div>

                {/* Price */}
                <div className="px-7 lg:px-9 mb-4 lg:mb-5">
                  <p className={`font-serif font-black text-4xl lg:text-5xl leading-none ${
                    isFeatured ? 'text-gold' : 'text-crimson'
                  }`}>
                    {plan.price}
                  </p>
                  <p className={`text-sm mt-2 ${isFeatured ? 'text-cream/60' : 'text-gray-400'}`}>
                    тенге / месяц
                  </p>
                </div>

                {/* Divider */}
                <div className={`mx-7 lg:mx-9 mb-4 lg:mb-5 h-px ${isFeatured ? 'bg-cream/20' : 'bg-gray-100'}`} />

                {/* Lessons */}
                <div className="px-7 lg:px-9 mb-4 lg:mb-5 flex items-center gap-3">
                  <span className={`w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center font-bold text-sm lg:text-base shrink-0 ${
                    isFeatured ? 'bg-cream/15 text-cream' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {plan.lessons}
                  </span>
                  <p className={`text-sm ${isFeatured ? 'text-cream/70' : 'text-gray-400'}`}>
                    уроков в месяц
                  </p>
                </div>

                {/* Subjects */}
                <ul className="px-7 lg:px-9 mb-5 lg:mb-6 flex flex-col gap-2.5 flex-1">
                  {plan.subjects.map((s, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className={`font-serif font-bold text-base shrink-0 mt-0.5 ${
                        isFeatured ? 'text-gold' : 'text-crimson'
                      }`}>
                        ✦
                      </span>
                      <p className={`text-sm leading-snug ${isFeatured ? 'text-cream/80' : 'text-gray-700'}`}>
                        {s}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Group size note */}
                <div className="px-7 lg:px-9 mb-4 flex items-center gap-2">
                  <span className={`text-xs ${isFeatured ? 'text-cream/50' : 'text-gray-400'}`}>👥</span>
                  <p className={`text-xs ${isFeatured ? 'text-cream/50' : 'text-gray-400'}`}>
                    Мини-группы от 2–5 человек
                  </p>
                </div>

                {/* CTA */}
                <div className="px-7 lg:px-9 pb-7 lg:pb-10 mt-auto">
                  <a
                    href="https://t.me/YourSchoolHandle"
                    className={`block text-center font-bold text-sm px-5 py-4 rounded-xl transition-colors ${
                      isFeatured
                        ? 'bg-gold text-crimson hover:bg-yellow-400'
                        : 'bg-crimson text-cream hover:opacity-90'
                    }`}
                  >
                    Записаться
                  </a>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}