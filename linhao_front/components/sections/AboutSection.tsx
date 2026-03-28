export default function AboutSection() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* ── LEFT COLUMN — Big hero card ── */}
          <div className="bg-vermillion rounded-3xl p-8 flex flex-col justify-between min-h-125">

            {/* Text */}
            <div>
              <h2 className="font-serif text-cream text-2xl md:text-3xl font-bold leading-snug mb-5">
                О нас:
              </h2>
              <p className="text-cream/80 text-sm leading-relaxed mb-6">
                Китайский язык для нас — это как второй родной язык, и мы влюбляем в культуру и язык Китая!
              </p>
              <p className="text-cream/80 text-sm leading-relaxed mb-6">
                В школе работает команда преподавателей с профильным образованием и опытом подготовки к экзаменам. Все педагоги владеют китайским языком на уровне HSK 5+ и объясняют материал доступно и системно.
              </p>
              <a
                href="/about"
                className="text-cream font-semibold text-sm underline underline-offset-4 hover:text-gold transition-colors"
              >
                Познакомиться с преподавателями →
              </a>
            </div>

            {/* Bottom student circle row */}
            <div className="flex items-center gap-3 mt-8">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="w-20 h-20 rounded-full bg-cream/20 border-2 border-cream/40 flex items-center justify-center overflow-hidden shrink-0"
                >
                  {/* PLACEHOLDER: replace with <img src="/images/graduate-n.webp" className="w-full h-full object-cover" /> */}
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-cream/40" fill="currentColor">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
              ))}
              <div className="w-20 h-20 rounded-full bg-cream/10 border-2 border-dashed border-cream/30 flex items-center justify-center shrink-0">
                <span className="text-cream/50 text-2xl font-bold">+</span>
              </div>
            </div>

          </div>

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