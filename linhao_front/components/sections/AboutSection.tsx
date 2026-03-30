export default function AboutSection() {
  return (
    <section id="about1" className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* ── MIDDLE COLUMN ── */}
          <div className="flex flex-col gap-4">

            {/* Card 4 — Results — Blog post style */}
            <div className="bg-[#fdf6ee] rounded-3xl overflow-hidden border border-gold/20 flex flex-col flex-1">

              {/* Text content */}
              <div className="p-6 flex flex-col gap-3">
                {/* Tag */}
                <span className="inline-block self-start text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full">
                  Результаты
                </span>
                <h3 className="font-serif text-crimson text-xl font-bold leading-snug">
                  Доводим до результата
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Средний балл сдачи HSK наших учеников: 193/200 за HSK 1, 186/200 за HSK 2 и 252/300 за HSK 3
                </p>
              </div>

              {/* Image placeholder */}
              <div className="mt-auto w-full h-44 bg-gold/10 flex flex-col items-center justify-center gap-2 border-t border-gold/15">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-gold/40" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <span className="text-gold/50 text-xs font-medium">Фото — скоро</span>
              </div>

            </div>

          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-4">

            {/* Card 2 — Mini groups — Blog post style */}
            <div className="bg-[#fdf6ee] rounded-3xl overflow-hidden border border-gold/20 flex flex-col flex-1">

              {/* Text content */}
              <div className="p-6 flex flex-col gap-3">
                {/* Tag */}
                <span className="inline-block self-start text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full">
                  Формат
                </span>
                <h3 className="font-serif text-crimson text-xl font-bold leading-snug">
                  Мини-группы<br />до 5 человек
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Учёба в компактных группах — максимум внимания каждому. Всегда есть возможность задать вопрос и получить поддержку
                </p>
              </div>

              {/* Image placeholder */}
              <div className="mt-auto w-full h-44 bg-crimson/5 flex flex-col items-center justify-center gap-2 border-t border-gold/15">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-crimson/25" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <span className="text-crimson/30 text-xs font-medium">Фото — скоро</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}