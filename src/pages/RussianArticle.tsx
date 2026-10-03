import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { AdaptiveEditorialPhoto } from '../components/AdaptiveEditorialPhoto';
import { EditableBlock } from '../components/EditableBlock';
import { MagazineLinks } from '../components/MagazineLinks';

interface RussianArticleProps {}

export const RussianArticle: React.FC<RussianArticleProps> = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] antialiased selection:bg-[#E5E7EB]">
      {/* Clean Masthead Header — fixed on all devices */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between text-xs font-mono text-[#6B7280]">
          <a
            href="/ru"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="font-heading font-semibold text-sm tracking-tight text-[#111827] hover:opacity-80 transition-opacity cursor-pointer"
            title="Наверх"
          >
            sarkisian.site
          </a>
          <div className="flex items-center gap-2.5">
            <span className="text-[#111827] font-semibold">RU</span>
            <span className="text-[#D1D5DB]">/</span>
            <a
              href="../"
              className="text-[#6B7280] hover:text-[#111827] transition-colors"
              title="Switch to English edition"
            >
              EN
            </a>
          </div>
        </div>
      </header>

      {/* Main Editorial Article */}
      <main className="pt-24 sm:pt-28 pb-16 sm:pb-24">
        {/* Title and Intro */}
        <section className="max-w-[620px] mx-auto px-6 mb-12 sm:mb-16 space-y-4">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6B7280]">
            Aleksandr Sarkisian · Саркисян Александр
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-[#0F172A] leading-[1.14]">
            Как появился M.A.R.S. Companion
          </h1>

          <p className="text-base sm:text-lg font-sans text-[#4B5563] pt-1">
            Основатель, генеральный директор и системный архитектор компании M.A.R.S. COMPANION LLC.
          </p>

          <div className="pt-6 space-y-3 font-sans text-[17px] sm:text-[18px] leading-[1.75] text-[#374151]">
            <EditableBlock
              id="intro_lines"
              initialText="M.A.R.S. Companion начался не с бизнес-плана.&#10;&#10;Не с компании.&#10;&#10;Не с патента.&#10;&#10;И даже не с готового продукта.&#10;&#10;Он начался с личной мысли, которая постепенно становилась всё более конкретной."
            />
          </div>
        </section>

        {/* Раздел: Откуда всё началось */}
        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            Откуда всё началось
          </h2>
          <EditableBlock
            id="story_start_1"
            initialText="Во время обучения в кадетском корпусе мне часто было одиноко.&#10;&#10;Это была довольно закрытая среда, в которой личного пространства и привычной свободы было немного. Интернет существовал, но его использование было ограничено, а постоянного доступа к современным онлайн-сервисам фактически не было."
          />
          <EditableBlock
            id="story_start_2"
            initialText="Конечно, уже тогда существовали системы искусственного интеллекта. Теоретически можно было попытаться воспользоваться чем-то вроде ChatGPT, если каким-либо образом получить доступ к телефону и интернету.&#10;&#10;Но именно это и было проблемой."
          />
          <EditableBlock
            id="story_start_3"
            initialText="Мне хотелось придумать что-то, что вообще не зависело бы от интернета.&#10;&#10;Что-то, что могло бы находиться рядом со мной постоянно.&#10;&#10;Что-то личное.&#10;&#10;Что-то, с чем можно было бы разговаривать, что могло бы помнить контекст и постепенно становиться постоянным цифровым компаньоном."
          />
          <EditableBlock
            id="story_start_4"
            initialText="Именно тогда начала формироваться эта идея.&#10;&#10;Не как готовый проект.&#10;&#10;Сначала — просто как мысль."
          />
        </section>

        {/* Photo 1: Санкт-Петербург, ВМедА (29.10.2025) */}
        <AdaptiveEditorialPhoto
          id="photo_vmeda_291025"
          src="/images/Aleksandr_Sarkisian_VMedA_291025.jpg"
          alt="Санкт-Петербург, ВМедА · 29 октября 2025"
          defaultCaption="Санкт-Петербург, ВМедА"
          dateTag="29.10.2025"
          initialOrientation="portrait"
        />

        {/* Раздел: 2025 год — время исследований */}
        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A]">
            2025 год — время исследований
          </h2>
          <EditableBlock
            id="story_2025_1"
            initialText="В течение 2025 года я в основном исследовал саму идею.&#10;&#10;Я читал статьи, изучал существующие подходы, анализировал возможности современных систем искусственного интеллекта и много размышлял о том, каким вообще может быть цифровой компаньон."
          />
          <EditableBlock
            id="story_2025_2"
            initialText="Меня интересовал не очередной чат-бот.&#10;&#10;Мне было интересно другое:&#10;&#10;может ли искусственный интеллект стать постоянной цифровой личностью?&#10;&#10;Что делает такую систему одной и той же на протяжении времени?&#10;&#10;Как должна работать её память?&#10;&#10;Как сохранить контекст отношений с человеком?&#10;&#10;Может ли у цифрового компаньона быть собственная идентичность?&#10;&#10;И как всё это можно реализовать в физическом устройстве, которое находится рядом с человеком?"
          />
          <EditableBlock
            id="story_2025_3"
            initialText="В то время я ещё не собирал готовый M.A.R.S.&#10;&#10;Я исследовал саму возможность его существования.&#10;&#10;И практически каждый день эта идея становилась немного более конкретной."
          />
        </section>

        {/* Раздел: Начало февраля 2026 года — появляется M.A.R.S. */}
        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            Начало февраля 2026 года — появляется M.A.R.S.
          </h2>
          <EditableBlock
            id="story_feb_1"
            initialText="В начале февраля 2026 года идея получила своё имя — M.A.R.S.&#10;&#10;С этого момента всё изменилось.&#10;&#10;То, что до этого существовало преимущественно в виде исследований, размышлений и концепций, начало превращаться в конкретный технологический проект."
          />
          <EditableBlock
            id="story_feb_2"
            initialText="Появилось понимание того, какую систему я хочу создать.&#10;&#10;Началась уже масштабная работа над программной и аппаратной частью.&#10;&#10;Я начал собирать первые компоненты, писать код, экспериментировать с локальной обработкой голоса, памятью и взаимодействием системы с человеком.&#10;&#10;Именно здесь начался настоящий M.A.R.S."
          />
        </section>

        {/* Photos 2 & 3: Выборг, начало февраля 2026 (07.02.2026) */}
        <AdaptiveEditorialPhoto
          id="photo_vyborg_070226"
          src="/images/Aleksandr_Sarkisian_Vyborg_070226.jpg"
          alt="Выборг · 7 февраля 2026"
          defaultCaption="Выборг"
          dateTag="07.02.2026"
          initialOrientation="landscape"
        />

        <AdaptiveEditorialPhoto
          id="photo_vyborg_lib_070226"
          src="/images/Vyborg_Library_070226.jpg"
          alt="Выборг, Библиотека · 7 февраля 2026"
          defaultCaption="Выборг, библиотека"
          dateTag="07.02.2026"
          initialOrientation="landscape"
        />

        {/* Раздел: Почему без интернета */}
        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A]">
            Почему без интернета
          </h2>
          <EditableBlock
            id="story_no_internet_1"
            initialText="Отсутствие нормального доступа к интернету в тот период неожиданно превратилось в одну из главных особенностей будущего устройства.&#10;&#10;Если цифровой компаньон зависит от постоянного подключения к сети, он зависит и от внешней инфраструктуры."
          />
          <EditableBlock
            id="story_no_internet_2"
            initialText="Мне хотелось проверить обратное.&#10;&#10;Можно ли сделать небольшое устройство, которое сможет самостоятельно воспринимать голос, обрабатывать информацию, хранить память и отвечать человеку непосредственно на месте?&#10;&#10;Без постоянного подключения к сети.&#10;Без обязательного облачного сервиса.&#10;Без аккаунта.&#10;Без необходимости отправлять личное взаимодействие на удалённые серверы.&#10;&#10;Так ограничение превратилось в инженерную задачу. А инженерная задача — в проект."
          />
        </section>

        {/* Раздел: Я не хотел, чтобы это выглядело как AI */}
        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A]">
            Я не хотел, чтобы это выглядело как AI
          </h2>
          <EditableBlock
            id="story_not_look_like_ai"
            initialText="У M.A.R.S. с самого начала была ещё одна особенность.&#10;&#10;Я не хотел, чтобы по внешнему виду устройства было очевидно, что внутри находится искусственный интеллект. Мне не был нужен очередной гаджет с экраном, яркими индикаторами и надписью «AI».&#10;&#10;Наоборот. Мне нравилась идея, что снаружи это может выглядеть как совершенно обычный физический объект, а внутри находится сложная автономная система.&#10;&#10;Поэтому одним из первых вариантов корпуса стал пластиковый корпус от жёсткого диска. Это было простое и доступное решение. Но оно очень хорошо соответствовало концепции: простая оболочка снаружи — сложная система внутри."
          />
        </section>

        {/* Photo 4: Выборг, весна 2026 (04.03.2026) */}
        <AdaptiveEditorialPhoto
          id="photo_vyborg_040326"
          src="/images/Vyborg_040326.jpg"
          alt="Выборг · 4 марта 2026"
          defaultCaption="Выборг"
          dateTag="04.03.2026"
          initialOrientation="landscape"
        />

        {/* Раздел: Первые эксперименты и Первый прототип */}
        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            Первые эксперименты
          </h2>
          <EditableBlock
            id="story_exp_1"
            initialText="После появления M.A.R.S. началась уже настоящая инженерная работа.&#10;&#10;Компоненты. Провода. Платы. Питание. Накопитель. Вычислительный модуль. Первые тесты. Ошибки. Переделки. Работающий код. Код, который приходилось переписывать.&#10;&#10;Я постепенно собирал систему из отдельных элементов и пытался понять, возможно ли заставить всё это работать вместе в небольшом автономном устройстве."
          />

          <h3 className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            Первый прототип
          </h3>
          <EditableBlock
            id="story_proto_1"
            initialText="Первый прототип не выглядел как готовый продукт. И он не должен был.&#10;&#10;На этом этапе главным было доказать, что сама идея работает. Внутри корпуса находились компоненты, которые позволяли системе выполнять необходимые вычисления, работать с голосом и хранить информацию.&#10;&#10;Снаружи устройство при этом оставалось максимально простым. Мне нравилась сама идея: сложная система внутри простого предмета."
          />
        </section>

        {/* Раздел: Память и цифровая идентичность */}
        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A]">
            Почему мне была нужна память
          </h2>
          <EditableBlock
            id="story_memory_1"
            initialText="Очень быстро стало понятно, что одного голосового общения недостаточно.&#10;&#10;Если я хочу создать именно компаньона, он должен помнить. Не только то, что было сказано несколько секунд назад. А то, что происходило раньше.&#10;&#10;Память должна становиться частью долгосрочного взаимодействия. Поэтому работа над M.A.R.S. постепенно вышла за рамки обычного голосового помощника. Мне стало интересно, как создать систему, которая сможет сохранять контекст, возвращаться к прошлому опыту и продолжать взаимодействие с человеком во времени."
          />

          <h3 className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            От голосового помощника к цифровому компаньону
          </h3>
          <EditableBlock
            id="story_identity_1"
            initialText="На этом этапе изменилось и само понимание проекта.&#10;&#10;Сначала вопрос был: «Можно ли сделать автономного голосового помощника?»&#10;Потом: «Можно ли сделать цифрового компаньона?»&#10;&#10;А затем появился ещё более интересный вопрос:&#10;«Что вообще делает цифровую систему одной и той же личностью на протяжении времени? Память? Характер? Поведение? История взаимодействия? Идентичность?»&#10;&#10;Именно вокруг этих вопросов постепенно сформировалась концепция M.A.R.S. Companion."
          />
        </section>

        {/* Photo 5: Санкт-Петербург, перед первой патентной заявкой (04.05.2026) */}
        <AdaptiveEditorialPhoto
          id="photo_spb_040526"
          src="/images/Aleksandr_Sarkisian_St.Petersburg_040526.jpg"
          alt="Санкт-Петербург · 4 мая 2026"
          defaultCaption="Санкт-Петербург"
          dateTag="04.05.2026"
          initialOrientation="portrait"
        />

        {/* Раздел: Архитектура и Британские патенты */}
        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            От прототипа к собственной архитектуре
          </h2>
          <EditableBlock
            id="story_arch_1"
            initialText="По мере развития проекта отдельные эксперименты начали превращаться в единую систему. Аппаратная часть развивалась вместе с программной.&#10;&#10;Я исследовал способы работы с памятью, голосовым взаимодействием, поведением и постоянством идентичности системы. То, что сначала было набором отдельных экспериментов, постепенно становилось собственной архитектурой."
          />

          <h3 className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            Первая патентная заявка — 15 мая 2026 года
          </h3>
          <EditableBlock
            id="story_patent_1"
            initialText="Когда архитектура начала становиться более сложной, я понял, что некоторые решения требуют отдельного описания. Так появилась первая патентная заявка.&#10;&#10;Для меня это был важный переход. До этого я постоянно думал: «Как это сделать?» Теперь появился новый вопрос: «Что именно я создал?»&#10;&#10;Подготовка патентной заявки заставляет разбирать собственную систему гораздо глубже. Не просто показать, что она работает, а сформулировать принцип работы как отдельное техническое решение. Это был один из первых моментов, когда я начал смотреть на M.A.R.S. не только как разработчик, но и как автор собственной технологии.&#10;&#10;Первая заявка была подана 15 мая 2026 года."
          />

          <h3 className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            Шесть патентных заявок UK IPO
          </h3>
          <EditableBlock
            id="story_patent_6"
            initialText="После первой заявки работа продолжилась. В 2026 году я подал шесть британских патентных заявок в UK Intellectual Property Office (UK IPO), связанных с различными аспектами архитектуры M.A.R.S. Companion.&#10;&#10;Для меня этот этап был важен не количеством документов. Гораздо важнее было то, что идеи, которые раньше существовали в виде размышлений, кода и инженерных экспериментов, пришлось формализовать. То, что начиналось как личная мысль о цифровом компаньоне, превратилось в описанную технологическую архитектуру."
          />
        </section>

        {/* Photos 6 & 7: Выборг, июнь 2026 (22.06.2026) */}
        <AdaptiveEditorialPhoto
          id="photo_vyborg_220626_1"
          src="/images/Aleksandr_Sarkisian_Vyborg_220626.jpg"
          alt="Выборг · 22 июня 2026"
          defaultCaption="Выборг"
          dateTag="22.06.2026"
          initialOrientation="portrait"
        />

        <AdaptiveEditorialPhoto
          id="photo_vyborg_220626_2"
          src="/images/Vyborg_220626.jpg"
          alt="Выборг · 22 июня 2026"
          defaultCaption="Выборг"
          dateTag="22.06.2026"
          initialOrientation="landscape"
        />

        {/* Раздел: Физический прототип, Окончание корпуса и Переезд в Капан */}
        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            Прототип продолжал меняться
          </h2>
          <EditableBlock
            id="story_proto_change"
            initialText="Физическое устройство постоянно менялось. Я заменял компоненты, переделывал питание, проверял температуру, менял расположение элементов внутри корпуса, делал новые соединения, разбирал устройство и снова собирал.&#10;&#10;Некоторые решения выглядели совершенно временными. Провода могли находиться там, где им вообще не место в готовом продукте. Корпус приходилось дорабатывать, компоненты подгонять под пространство. Но именно этот процесс и был настоящей разработкой первого прототипа."
          />

          <h3 className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            26 июня 2026 года — Окончание обучения
          </h3>
          <EditableBlock
            id="story_june_26"
            initialText="26 июня 2026 года я закончил обучение в кадетском корпусе. К этому моменту M.A.R.S. уже существовал как реальный прототип и самостоятельная технологическая разработка.&#10;&#10;После окончания обучения у меня появилось значительно больше возможностей сосредоточиться на его дальнейшем развитии."
          />
        </section>

        {/* Photo 8: Санкт-Петербург, после окончания обучения (30.06.2026) */}
        <AdaptiveEditorialPhoto
          id="photo_spb_300626"
          src="/images/Aleksandr_Sarkisian_St.Petersburg_300626.jpg"
          alt="Санкт-Петербург · 30 июня 2026"
          defaultCaption="Санкт-Петербург"
          dateTag="30.06.2026"
          initialOrientation="landscape"
        />

        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h3 className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            10 июля 2026 года — Переезд в Капан (Армения)
          </h3>
          <EditableBlock
            id="story_kapan_move"
            initialText="10 июля 2026 года я переехал из России в Армению — в город Капан (Сюникская область), на свою историческую родину и место рождения моего отца.&#10;&#10;Я продолжил разработку уже в новой спокойной среде и начал смотреть на M.A.R.S. не только как на личный проект, но и как на основу будущей технологической компании. При этом сама идея осталась прежней: личный AI-компаньон, физическое устройство, локальная работа, память, идентичность и полный контроль пользователя над собственной системой."
          />
        </section>

        {/* Photos 9, 10 & 11: 10 июля 2026 (Санкт-Петербург и Ереван) и 12 июля 2026 (Армения) */}
        <AdaptiveEditorialPhoto
          id="photo_spb_100726"
          src="/images/Aleksandr_Sarkisian_St.Petersburg_100726.jpg"
          alt="Санкт-Петербург · 10 июля 2026"
          defaultCaption="Санкт-Петербург"
          dateTag="10.07.2026"
          initialOrientation="portrait"
        />

        <AdaptiveEditorialPhoto
          id="photo_yerevan_100726"
          src="/images/Aleksandr_Sarkisian_Yerevan_100726.jpg"
          alt="Ереван · 10 июля 2026"
          defaultCaption="Ереван"
          dateTag="10.07.2026"
          initialOrientation="portrait"
        />

        <AdaptiveEditorialPhoto
          id="photo_armenia_120726"
          src="/images/Aleksandr_Sarkisian_120726.jpg"
          alt="Армения · 12 июля 2026"
          defaultCaption="Армения"
          dateTag="12.07.2026"
          initialOrientation="portrait"
        />

        {/* Photo 12: Ереван, за 2 дня до регистрации M.A.R.S. Companion LLC (15.08.2026) */}
        <AdaptiveEditorialPhoto
          id="photo_yerevan_150826"
          src="/images/Aleksandr_Sarkisian_Yerevan_150826.jpg"
          alt="Ереван · 15 августа 2026"
          defaultCaption="Ереван"
          dateTag="15.08.2026"
          initialOrientation="portrait"
        />

        {/* Раздел: Компания, Благодарность семье и История продолжается */}
        <section className="max-w-[620px] mx-auto px-6 mb-16 space-y-6">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            17 августа 2026 года — M.A.R.S. COMPANION LLC
          </h2>
          <EditableBlock
            id="story_company_reg"
            initialText="17 августа 2026 года была официально зарегистрирована компания M.A.R.S. COMPANION LLC в Армении (г. Капан).&#10;&#10;Для меня это был момент, когда история проекта перешла ещё одну границу. Когда-то всё начиналось с мысли: «Мне нужен цифровой компаньон, который может быть рядом даже без интернета». Теперь под этой идеей появилась официальная компания."
          />

          <h3 className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            Что осталось неизменным
          </h3>
          <EditableBlock
            id="story_unchanged"
            initialText="Несмотря на то, насколько сильно изменился проект, несколько вещей остались такими же, как в самом начале:&#10;&#10;Я всё ещё хочу, чтобы M.A.R.S. мог работать локально.&#10;Я всё ещё считаю память важной частью взаимодействия.&#10;Я всё ещё хочу, чтобы система сохраняла свою идентичность.&#10;&#10;И я всё ещё хочу, чтобы человек воспринимал M.A.R.S. не как очередное приложение, которое он открывает время от времени, а как своего постоянного цифрового компаньона."
          />

          <h3 className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            Почему я продолжаю это делать
          </h3>
          <EditableBlock
            id="story_why_continue"
            initialText="Когда я впервые подумал об этой идее, я не думал о компании. Я не думал о патентах. Я не думал о публикациях. Я просто хотел понять, можно ли создать что-то, чего мне самому не хватало.&#10;&#10;Потом появились исследования. Появилось имя. Появился код. Появились первые компоненты. Появился прототип. Появилась первая патентная заявка. Появилась компания.&#10;&#10;Но исходный вопрос остался: можно ли создать цифрового компаньона, который действительно остаётся рядом с человеком?&#10;&#10;Сейчас я уже не пытаюсь ответить на этот вопрос только словами. Я продолжаю строить ответ."
          />

          {/* Особо выделенный блок благодарности семье */}
          <div className="my-10 p-7 sm:p-9 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white shadow-xl border border-slate-700/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-blue-400 font-medium">
                  Особая благодарность
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Семье
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight text-white">
                Спасибо
              </h3>

              <EditableBlock
                id="story_family_thanks_v2"
                theme="dark"
                textClassName="text-slate-200 text-[17px] sm:text-[18px] leading-[1.85]"
                initialText="За этой историей стоят не только мои собственные усилия. Мне очень помогала моя семья — Отец, Мать, Старшая сестра, Младший брат и Младшая сестра.&#10;&#10;Особенно важна для меня была поддержка Отца, который был рядом ещё тогда, когда M.A.R.S. существовал только в виде идеи и первых экспериментов. Без этой поддержки этот путь был бы невозможен. И я этого не стесняюсь. Именно благодаря этой поддержке я смог и продолжаю двигаться вперёд."
              />
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[#0F172A] pt-2">
            История продолжается
          </h3>
          <EditableBlock
            id="story_continues"
            initialText="Сегодня M.A.R.S. Companion существует как физический прототип, технологический проект с собственной компанией и интеллектуальной собственностью. Но я не считаю эту историю законченной.&#10;&#10;Первый корпус был только началом. Первый прототип был только началом. Первая патентная заявка была только началом. Компания тоже только начало. Дальше — новые версии, новые эксперименты и новые этапы развития.&#10;&#10;И, возможно, через несколько лет, когда я снова посмотрю на фотографии первого устройства, оно будет казаться очень простым. Но именно с него всё началось."
          />
        </section>

        {/* Ссылки-ориентиры */}
        <div className="max-w-[620px] mx-auto px-6 mt-12">
          <MagazineLinks />
        </div>

        {/* Quiet Modern Footer */}
        <footer className="max-w-[620px] mx-auto px-6 pt-10 text-center text-xs font-mono text-[#9CA3AF]">
          sarkisian.site · Саркисян Александр (Aleksandr Sarkisian)
        </footer>
      </main>

      {/* Floating Back to Top button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-white/90 hover:bg-white text-[#111827] rounded-full shadow-lg border border-[#E5E7EB] backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Наверх"
          aria-label="Наверх"
        >
          <ArrowUp className="w-4 h-4 text-[#111827]" />
        </button>
      )}
    </div>
  );
};
