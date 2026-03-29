'use client'

const plans = [
  {
    label: '1 предмет',
    subjects: [
      'Математика, химия, физика или гуманитарный/технический китайский',
    ],
    lessons: 8,
    price: '55 000',
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
    price: '95 000',
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
    <section className="bg-cream py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden mb-12">
          {/* Image placeholder — replace src with your actual image */}
          <img
            src="/images/maneki.png"
            alt=""
            className="absolute right-0 top-0 h-full w-auto object-cover object-left pointer-events-none select-none opacity-90"
            aria-hidden="true"
          />
          {/* Fade so image blends into white on the left */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to right, white 40%, transparent 75%)' }}
          />
          <div className="relative z-10 px-12 lg:px-16 py-10">
            <p className="text-crimson font-serif text-base tracking-widest uppercase mb-2 opacity-60">价格</p>
            <h2 className="font-serif text-crimson text-3xl md:text-5xl font-bold">
              Стоимость подготовки к CSCA
            </h2>
          </div>
        </div>

        {/* Cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-end gap-5">
          {plans.map((plan, i) => {
            const isFeatured = plan.featured

            return (
              <div
                key={i}
                style={{ height: isFeatured ? 570 : 540 }}
                className={`
                  rounded-3xl overflow-hidden flex flex-col
                  ${isFeatured
                    ? 'bg-crimson shadow-2xl shadow-crimson/30'
                    : 'bg-white shadow-lg'
                  }
                `}
              >
                {/* Badge */}
                <div className="px-9 pt-10 mb-5 h-12 flex items-center">
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
                <div className="px-9 mb-5 h-14 flex items-start">
                  <h3 className={`font-serif font-bold text-xl leading-snug ${
                    isFeatured ? 'text-cream' : 'text-gray-900'
                  }`}>
                    {plan.label}
                  </h3>
                </div>

                {/* Price */}
                <div className="px-9 mb-5">
                  <p className={`font-serif font-black text-5xl leading-none whitespace-nowrap ${
                    isFeatured ? 'text-gold' : 'text-crimson'
                  }`}>
                    {plan.price}
                  </p>
                  <p className={`text-sm mt-2 ${isFeatured ? 'text-cream/60' : 'text-gray-400'}`}>
                    тенге / месяц
                  </p>
                </div>

                {/* Divider */}
                <div className={`mx-9 mb-5 h-px ${isFeatured ? 'bg-cream/20' : 'bg-gray-100'}`} />

                {/* Lessons */}
                <div className="px-9 mb-5 flex items-center gap-3">
                  <span className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-base shrink-0 ${
                    isFeatured ? 'bg-cream/15 text-cream' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {plan.lessons}
                  </span>
                  <p className={`text-sm ${isFeatured ? 'text-cream/70' : 'text-gray-400'}`}>
                    уроков в месяц
                  </p>
                </div>

                {/* Subjects */}
                <ul className="px-9 mb-6 flex flex-col gap-2.5 flex-1 overflow-hidden">
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

                {/* CTA */}
                <div className="px-9 pb-10 mt-auto">
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