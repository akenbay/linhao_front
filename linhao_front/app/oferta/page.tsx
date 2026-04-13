export default function OfertaPage() {
  return (
    <main className="bg-cream min-h-screen">

      {/* Hero header */}
      <div className="bg-crimson px-6 py-16 text-center">
        <p className="text-gold/60 font-serif text-sm tracking-widest uppercase mb-3">ИП ЧЖАН · linhao.chinese</p>
        <h1 className="font-serif text-cream text-4xl md:text-5xl font-bold mb-2">Оферта и правила</h1>
        <div className="h-0.5 w-24 mx-auto mt-5" style={{ background: 'linear-gradient(90deg, transparent, #EEC537, transparent)' }} />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">

        {/* ── PART 1: ОФЕРТА ── */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-10 bg-crimson rounded-full" />
            <h2 className="font-serif text-crimson text-3xl font-bold">Публичная оферта</h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            Настоящий документ является официальным предложением (публичной офертой) Индивидуального предпринимателя <strong className="text-gray-700">ИП ЧЖАН (linhao.chinese)</strong>, БИН: 080215653688, именуемого в дальнейшем «Исполнитель», заключить договор на оказание образовательных услуг с любым физическим лицом, именуемым «Заказчик».
          </p>
          <p className="text-gray-500 text-sm mb-1">Контактные данные:</p>
          <p className="text-gray-700 text-sm font-medium mb-8">Email: linhao.chinesee@gmail.com</p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Акцепт настоящей оферты осуществляется путем оплаты услуг.
          </p>
        </div>

        {/* Sections */}
        {[
          {
            num: '1.2',
            title: 'Предмет договора',
            content: (
              <>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Исполнитель обязуется оказать образовательные услуги в форме онлайн-обучения китайскому языку, включая подготовку к экзаменам HSK и CSCA, а Заказчик обязуется оплатить данные услуги.
                </p>
                <Row label="Формат" items={['Групповые занятия', 'Индивидуальные занятия', 'Онлайн через платформу VOOV']} />
                <Row label="Программы" items={['Китайский язык с нуля', 'Подготовка к HSK', 'Подготовка к CSCA', 'Иные программы']} />
              </>
            ),
          },
          {
            num: '1.3',
            title: 'Порядок заключения договора',
            content: (
              <>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">Договор считается заключенным с момента оплаты.</p>
                <Row label="После оплаты" items={['Контакт ученика передается преподавателю', 'Преподаватель добавляет ученика в группу (WhatsApp / Telegram / WeChat)', 'Предоставляется информация по обучению']} />
              </>
            ),
          },
          {
            num: '1.4',
            title: 'Стоимость и порядок оплаты',
            content: (
              <>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">Стоимость зависит от курса, количества занятий и формата. Валюта: тенге.</p>
                <Row label="Способы оплаты" items={['Kaspi QR', 'Kaspi RED', 'Банковский перевод']} />
                <Row label="Условия" items={['100% предоплата', 'Либо рассрочка (если предусмотрена)']} />
                <p className="text-gray-400 text-xs mt-3">НДС применяется согласно законодательству РК.</p>
              </>
            ),
          },
          {
            num: '1.5',
            title: 'Порядок оказания услуг',
            content: (
              <Row label="" items={['Занятия проходят по расписанию группы', 'Длительность занятия: 60 минут', 'Формат: онлайн', 'Платформа: VOOV', 'Предоставляются материалы и домашние задания']} />
            ),
          },
          {
            num: '1.6',
            title: 'Права и обязанности сторон',
            content: (
              <>
                <Row label="Исполнитель обязан" items={['Проводить занятия по расписанию', 'Информировать об изменениях (по согласованию)', 'Обеспечивать качество обучения']} />
                <p className="text-gray-400 text-xs my-3">Материалы по CSCA не предоставляются в полном объеме.</p>
                <Row label="Исполнитель имеет право" items={['Ограничить доступ при нарушении правил', 'Не менять преподавателя после старта курса', 'Не переносить занятия (групповой формат)']} />
                <Row label="Заказчик обязан" items={['Посещать занятия', 'Соблюдать дисциплину', 'Не передавать доступ третьим лицам']} />
                <Row label="Заказчик имеет право" items={['Получать оплаченные услуги', 'Обращаться за поддержкой']} />
              </>
            ),
          },
          {
            num: '1.7',
            title: 'Политика возвратов',
            content: (
              <>
                <Row label="" items={['До начала курса — полный возврат', 'После начала курса — возврат не осуществляется']} />
                <p className="text-gray-500 text-sm mt-3">Срок возврата: 3–5 рабочих дней. Возврат осуществляется на карту или переводом.</p>
              </>
            ),
          },
          {
            num: '1.8',
            title: 'Ответственность',
            content: (
              <>
                <Row label="Исполнитель не несет ответственности за" items={['Результаты экзаменов (HSK, CSCA)', 'Набранные баллы', 'Успеваемость ученика']} />
                <p className="text-gray-500 text-sm mt-3">Результат зависит от ученика. Исполнитель также не отвечает за технические проблемы со стороны ученика.</p>
              </>
            ),
          },
          {
            num: '1.9',
            title: 'Персональные данные',
            content: (
              <p className="text-gray-500 text-sm leading-relaxed">Заказчик дает согласие на обработку персональных данных в соответствии с законодательством РК.</p>
            ),
          },
          {
            num: '1.10',
            title: 'Срок действия договора',
            content: (
              <p className="text-gray-500 text-sm leading-relaxed">Договор действует с момента оплаты до полного выполнения обязательств.</p>
            ),
          },
          {
            num: '1.11',
            title: 'Разрешение споров',
            content: (
              <p className="text-gray-500 text-sm leading-relaxed">Споры решаются путем переговоров, при невозможности — в суде по законодательству РК.</p>
            ),
          },
        ].map(({ num, title, content }) => (
          <Section key={num} num={num} title={title}>{content}</Section>
        ))}

        {/* Divider */}
        <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, transparent, #EEC537 40%, #EEC537 60%, transparent)' }} />

        {/* ── PART 2: ПРАВИЛА ── */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-10 bg-crimson rounded-full" />
            <h2 className="font-serif text-crimson text-3xl font-bold">Правила пользования сайтом</h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Настоящие правила регулируют использование сайта ИП ЧЖАН. Пользователь обязан соблюдать данные правила.
          </p>
        </div>

        {[
          {
            num: '2.2',
            title: 'Регистрация',
            content: <p className="text-gray-500 text-sm leading-relaxed">Пользователь обязан предоставлять достоверные данные и не передавать доступ третьим лицам.</p>,
          },
          {
            num: '2.3',
            title: 'Материалы',
            content: (
              <>
                <p className="text-gray-500 text-sm mb-3">Все материалы являются собственностью Исполнителя.</p>
                <Row label="Запрещено" items={['Копировать', 'Распространять', 'Передавать третьим лицам']} />
              </>
            ),
          },
          {
            num: '2.4',
            title: 'Ограничения',
            content: <Row label="Запрещено" items={['Нарушать работу сайта', 'Использовать чужие данные', 'Мешать обучению']} />,
          },
          {
            num: '2.5',
            title: 'Доступ',
            content: <p className="text-gray-500 text-sm leading-relaxed">Доступ предоставляется на период курса. Передача доступа запрещена.</p>,
          },
          {
            num: '2.6',
            title: 'Технические условия',
            content: <p className="text-gray-500 text-sm leading-relaxed">Пользователь самостоятельно обеспечивает интернет и устройство. Исполнитель не несет ответственности за технические проблемы пользователя.</p>,
          },
          {
            num: '2.7',
            title: 'Блокировка',
            content: <Row label="Исполнитель вправе ограничить доступ при" items={['Нарушении правил', 'Передаче аккаунта', 'Неуважительном поведении']} />,
          },
          {
            num: '2.8',
            title: 'Персональные данные',
            content: <p className="text-gray-500 text-sm leading-relaxed">Обработка данных осуществляется согласно политике конфиденциальности.</p>,
          },
          {
            num: '2.9',
            title: 'Изменения',
            content: <p className="text-gray-500 text-sm leading-relaxed">Исполнитель вправе изменять правила. Актуальная версия размещается на сайте.</p>,
          },
        ].map(({ num, title, content }) => (
          <Section key={num} num={num} title={title}>{content}</Section>
        ))}

      </div>

      {/* Footer strip */}
      <div className="bg-crimson px-6 py-8 text-center">
        <p className="text-cream/40 text-xs">© ИП ЧЖАН · linhao.chinese · linhao.chinesee@gmail.com</p>
      </div>

    </main>
  )
}

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-gold/30 pl-6">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-gold font-serif font-bold text-sm">{num}</span>
        <h3 className="font-serif text-crimson text-lg font-bold">{title}</h3>
      </div>
      {children}
    </div>
  )
}

function Row({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="mb-4">
      {label && <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2">{label}:</p>}
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-500">
            <span className="text-gold font-bold shrink-0 mt-0.5">✦</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
