import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { AdaptiveEditorialPhoto } from '../components/AdaptiveEditorialPhoto';
import { EditableBlock } from '../components/EditableBlock';
import { MagazineLinksEn } from '../components/MagazineLinksEn';

interface EnglishArticleProps {}

export const EnglishArticle: React.FC<EnglishArticleProps> = () => {
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
            href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="font-heading font-semibold text-sm tracking-tight text-[#111827] hover:opacity-80 transition-opacity cursor-pointer"
            title="Back to top"
          >
            sarkisian.site
          </a>
          <div className="flex items-center gap-2.5">
            <span className="text-[#111827] font-semibold">EN</span>
            <span className="text-[#D1D5DB]">/</span>
            <a
              href="/ru"
              className="text-[#6B7280] hover:text-[#111827] transition-colors"
              title="Перейти на русскую версию"
            >
              RU
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
            How M.A.R.S. Companion Came to Be
          </h1>

          <p className="text-base sm:text-lg font-sans text-[#4B5563] pt-1">
            Founder, CEO, and System Architect at M.A.R.S. COMPANION LLC.
          </p>

          <div className="pt-6 space-y-3 font-sans text-[17px] sm:text-[18px] leading-[1.75] text-[#374151]">
            <EditableBlock
              id="intro_lines_en"
              initialText="M.A.R.S. Companion did not begin with a business plan.&#10;&#10;Not with a company.&#10;&#10;Not with a patent.&#10;&#10;Nor even with a finished product.&#10;&#10;It began as a personal thought that gradually grew into something tangible."
            />
          </div>
        </section>

        {/* Section: Where It All Began */}
        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            Where It All Began
          </h2>
          <EditableBlock
            id="story_start_1_en"
            initialText="During my time at the cadet military corps, I often felt alone.&#10;&#10;It was a fairly secluded environment with very little personal space or customary freedom. The internet existed, but access was restricted, and having regular access to modern online services was virtually impossible."
          />
          <EditableBlock
            id="story_start_2_en"
            initialText="Naturally, artificial intelligence systems already existed back then. In theory, one could have tried using something like ChatGPT if one somehow managed to get hold of a phone and a connection.&#10;&#10;Yet that was precisely the problem."
          />
          <EditableBlock
            id="story_start_3_en"
            initialText="I wanted to create something entirely free from reliance on the internet.&#10;&#10;Something that could remain beside me at all times.&#10;&#10;Something personal.&#10;&#10;Something I could talk to, that could remember context, and gradually become an enduring digital companion."
          />
          <EditableBlock
            id="story_start_4_en"
            initialText="That was when the idea began taking shape.&#10;&#10;Not as a full-fledged project.&#10;&#10;At first — simply as a thought."
          />
        </section>

        {/* Photo 1: Saint Petersburg, VMedA (29.10.2025) */}
        <AdaptiveEditorialPhoto
          id="photo_vmeda_291025_en"
          src="/images/Aleksandr_Sarkisian_VMedA_291025.jpg"
          alt="Saint Petersburg, Military Medical Academy · October 29, 2025"
          defaultCaption="Saint Petersburg, Military Medical Academy (VMedA)"
          dateTag="29.10.2025"
          initialOrientation="portrait"
        />

        {/* Section: 2025 — A Year of Exploration */}
        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A]">
            2025 — A Year of Exploration
          </h2>
          <EditableBlock
            id="story_2025_1_en"
            initialText="Throughout 2025, I was primarily exploring the concept itself.&#10;&#10;I read papers, analyzed existing approaches, studied the capabilities of modern AI architectures, and spent hours thinking about what a true digital companion could actually be."
          />
          <EditableBlock
            id="story_2025_2_en"
            initialText="I was not interested in building yet another chatbot.&#10;&#10;I was drawn to something fundamentally different:&#10;&#10;Can an artificial intelligence become an enduring digital persona?&#10;&#10;What makes such a system remain the same entity over time?&#10;&#10;How should its memory operate?&#10;&#10;How do you preserve the ongoing context of a human relationship?&#10;&#10;Can a digital companion possess its own continuous identity?&#10;&#10;And how can all of this be implemented in a physical device that sits right beside a person?"
          />
          <EditableBlock
            id="story_2025_3_en"
            initialText="At that time, I was not yet assembling the finished M.A.R.S.&#10;&#10;I was investigating the very possibility of its existence.&#10;&#10;And with nearly every passing day, the idea became a little more concrete."
          />
        </section>

        {/* Section: Early February 2026 — M.A.R.S. Is Born */}
        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            Early February 2026 — M.A.R.S. Is Born
          </h2>
          <EditableBlock
            id="story_feb_1_en"
            initialText="In early February 2026, the idea was given its name: M.A.R.S.&#10;&#10;From that moment on, everything changed.&#10;&#10;What had previously existed predominantly as research, notes, and concepts began transforming into a tangible engineering project."
          />
          <EditableBlock
            id="story_feb_2_en"
            initialText="A clear vision emerged of the system I set out to build.&#10;&#10;Extensive work began on both hardware and software.&#10;&#10;I started sourcing the first components, writing code, and experimenting with local voice processing, on-device memory, and human-machine interaction.&#10;&#10;This was where the real M.A.R.S. began."
          />
        </section>

        {/* Photos 2 & 3: Vyborg, early February 2026 (07.02.2026) */}
        <AdaptiveEditorialPhoto
          id="photo_vyborg_070226_en"
          src="/images/Aleksandr_Sarkisian_Vyborg_070226.jpg"
          alt="Vyborg · February 7, 2026"
          defaultCaption="Vyborg"
          dateTag="07.02.2026"
          initialOrientation="landscape"
        />

        <AdaptiveEditorialPhoto
          id="photo_vyborg_lib_070226_en"
          src="/images/Vyborg_Library_070226.jpg"
          alt="Vyborg, Alvar Aalto Library · February 7, 2026"
          defaultCaption="Vyborg, Library"
          dateTag="07.02.2026"
          initialOrientation="landscape"
        />

        {/* Section: Why Offline */}
        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A]">
            Why Offline
          </h2>
          <EditableBlock
            id="story_no_internet_1_en"
            initialText="The lack of regular internet access during that period unexpectedly turned into one of the device's defining attributes.&#10;&#10;If a digital companion relies on continuous network connectivity, it inherently relies on external infrastructure."
          />
          <EditableBlock
            id="story_no_internet_2_en"
            initialText="I wanted to prove the opposite.&#10;&#10;Could one build a compact device capable of perceiving voice, processing information, retaining memory, and responding to a human directly on the device itself?&#10;&#10;Without constant network connectivity.&#10;Without mandatory cloud services.&#10;Without an account.&#10;Without routing personal interaction through remote servers.&#10;&#10;Thus, a constraint transformed into an engineering problem. And the engineering problem became the project."
          />
        </section>

        {/* Section: I Didn't Want It to Look Like AI */}
        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A]">
            I Didn't Want It to Look Like AI
          </h2>
          <EditableBlock
            id="story_not_look_like_ai_en"
            initialText="From the outset, M.A.R.S. carried another defining trait.&#10;&#10;I didn't want the exterior of the device to advertise that there was artificial intelligence inside. I had no desire for another gadget with a bright screen, blinking LEDs, and an 'AI' label.&#10;&#10;Quite the contrary. I loved the idea that on the outside, it could appear as a completely ordinary physical object, while housing a complex autonomous system within.&#10;&#10;That was why one of the earliest enclosure choices was a plastic external hard drive enclosure. It was simple, accessible, and fit the philosophy perfectly: an unpretentious shell on the outside — a complex system on the inside."
          />
        </section>

        {/* Photo 4: Vyborg, spring 2026 (04.03.2026) */}
        <AdaptiveEditorialPhoto
          id="photo_vyborg_040326_en"
          src="/images/Vyborg_040326.jpg"
          alt="Vyborg · March 4, 2026"
          defaultCaption="Vyborg"
          dateTag="04.03.2026"
          initialOrientation="landscape"
        />

        {/* Section: Early Experiments and The First Prototype */}
        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            Early Experiments
          </h2>
          <EditableBlock
            id="story_exp_1_en"
            initialText="Once M.A.R.S. had a name, authentic engineering began.&#10;&#10;Components. Wires. Circuit boards. Power delivery. Storage. Computing modules. Early tests. Failures. Rebuilds. Code that worked. Code that had to be scrapped and rewritten.&#10;&#10;Step by step, I assembled the system piece by piece, determining whether it was possible to make it all work cohesively inside a compact, autonomous device."
          />

          <h3 className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            The First Prototype
          </h3>
          <EditableBlock
            id="story_proto_1_en"
            initialText="The first prototype did not look like a finished product. Nor was it meant to.&#10;&#10;At this stage, the primary objective was to prove that the fundamental concept worked. Inside the enclosure were the components enabling the system to perform computations, process speech, and retain information.&#10;&#10;Externally, the device remained understated. I embraced that dichotomy: a sophisticated architecture contained within a modest everyday object."
          />
        </section>

        {/* Section: Memory & Digital Identity */}
        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A]">
            Why I Needed Memory
          </h2>
          <EditableBlock
            id="story_memory_1_en"
            initialText="It became evident very early on that voice interaction alone was not enough.&#10;&#10;If I was building a true companion, it had to remember. Not just what was spoken seconds earlier, but what took place days and weeks before.&#10;&#10;Memory had to form the bedrock of a lasting relationship. Consequently, the work on M.A.R.S. moved far beyond conventional voice assistants. I grew fascinated by how to construct a system capable of retaining context, recalling shared history, and maintaining an evolving dialogue with a human over time."
          />

          <h3 className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            From Voice Assistant to Digital Companion
          </h3>
          <EditableBlock
            id="story_identity_1_en"
            initialText="At this juncture, the very scope of the project evolved.&#10;&#10;At first, the question was: 'Can one build an autonomous voice assistant?'&#10;Then: 'Can one build a digital companion?'&#10;&#10;And then an even deeper question arose:&#10;'What truly makes a digital system remain the same persona over time? Memory? Character? Demeanor? Shared history? Identity?'&#10;&#10;It was around these fundamental questions that the architecture of M.A.R.S. Companion gradually crystallized."
          />
        </section>

        {/* Photo 5: Saint Petersburg, before first patent filing (04.05.2026) */}
        <AdaptiveEditorialPhoto
          id="photo_spb_040526_en"
          src="/images/Aleksandr_Sarkisian_St.Petersburg_040526.jpg"
          alt="Saint Petersburg · May 4, 2026"
          defaultCaption="Saint Petersburg"
          dateTag="04.05.2026"
          initialOrientation="portrait"
        />

        {/* Section: Architecture & British Patent Filings */}
        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            From Prototype to Proprietary Architecture
          </h2>
          <EditableBlock
            id="story_arch_1_en"
            initialText="As the project developed, individual experiments converged into a unified framework. Hardware and software evolved in tandem.&#10;&#10;I researched novel ways to handle memory, acoustic interaction, autonomous behavior, and persona permanence. What had started as disjointed experiments matured into a proprietary architecture."
          />

          <h3 className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            First Patent Application — May 15, 2026
          </h3>
          <EditableBlock
            id="story_patent_1_en"
            initialText="As the architecture grew in complexity, I recognized that certain mechanisms warranted distinct technical documentation. Thus came the first patent application.&#10;&#10;For me, this marked a profound milestone. Previously, I had constantly asked myself: 'How do I build this?' Now, a new question took hold: 'What exactly have I created?'&#10;&#10;Drafting a patent application forces you to dissect your own system with far greater rigor — not merely demonstrating that it works, but codifying its core principles as an original technical solution. It was among the first moments I looked upon M.A.R.S. not solely as a developer, but as the creator of an original technology.&#10;&#10;The first application was filed on May 15, 2026."
          />

          <h3 className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            Six Patent Applications at the UK IPO
          </h3>
          <EditableBlock
            id="story_patent_6_en"
            initialText="Following that first filing, development accelerated. In 2026, I filed six British patent applications with the UK Intellectual Property Office (UK IPO), encompassing key facets of the M.A.R.S. Companion architecture.&#10;&#10;To me, this milestone was not about counting certificates. Far more important was that concepts previously existing only in reflections, source code, and workshop trials had to be rigorously formalized. What started as an intimate thought about a digital companion had become an officially documented technological architecture."
          />
        </section>

        {/* Photos 6 & 7: Vyborg, June 2026 (22.06.2026) */}
        <AdaptiveEditorialPhoto
          id="photo_vyborg_220626_1_en"
          src="/images/Aleksandr_Sarkisian_Vyborg_220626.jpg"
          alt="Vyborg · June 22, 2026"
          defaultCaption="Vyborg"
          dateTag="22.06.2026"
          initialOrientation="portrait"
        />

        <AdaptiveEditorialPhoto
          id="photo_vyborg_220626_2_en"
          src="/images/Vyborg_220626.jpg"
          alt="Vyborg · June 22, 2026"
          defaultCaption="Vyborg"
          dateTag="22.06.2026"
          initialOrientation="landscape"
        />

        {/* Section: Physical Prototype, Graduation, Relocation */}
        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            The Prototype Kept Evolving
          </h2>
          <EditableBlock
            id="story_proto_change_en"
            initialText="The physical device underwent continuous revision. I swapped components, reworked power rails, monitored thermal profiles, reconfigured layouts inside the enclosure, soldered new connections, tore the device down, and rebuilt it again.&#10;&#10;Some implementations looked entirely temporary. Wires ran where they would never belong in a commercial product. Enclosures had to be carved out, and parts wedged into tight spaces. But that exact hands-on process was the true birth of the first prototype."
          />

          <h3 className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            June 26, 2026 — Graduation
          </h3>
          <EditableBlock
            id="story_june_26_en"
            initialText="On June 26, 2026, I completed my education at the naval cadet military corps. By that time, M.A.R.S. already existed as a functioning physical prototype and an independent technological innovation.&#10;&#10;Following graduation, I gained the freedom to dedicate myself entirely to its further advancement."
          />
        </section>

        {/* Photo 8: Saint Petersburg, after graduation (30.06.2026) */}
        <AdaptiveEditorialPhoto
          id="photo_spb_300626_en"
          src="/images/Aleksandr_Sarkisian_St.Petersburg_300626.jpg"
          alt="Saint Petersburg · June 30, 2026"
          defaultCaption="Saint Petersburg"
          dateTag="30.06.2026"
          initialOrientation="landscape"
        />

        <section className="max-w-[620px] mx-auto px-6 mb-14 space-y-5">
          <h3 className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            July 10, 2026 — Relocating to Kapan (Armenia)
          </h3>
          <EditableBlock
            id="story_kapan_move_en"
            initialText="On July 10, 2026, I moved from Russia to Armenia — to the city of Kapan (Syunik Province), my ancestral homeland and the birthplace of my father.&#10;&#10;I continued development in this peaceful new setting, beginning to see M.A.R.S. not merely as a personal endeavor, but as the cornerstone of a future technology company. Yet the core thesis remained untouched: a personal AI companion, a dedicated physical device, local execution, enduring memory, authentic identity, and uncompromising user sovereignty over their own system."
          />
        </section>

        {/* Photos 9, 10 & 11: July 10 & 12, 2026 */}
        <AdaptiveEditorialPhoto
          id="photo_spb_100726_en"
          src="/images/Aleksandr_Sarkisian_St.Petersburg_100726.jpg"
          alt="Saint Petersburg · July 10, 2026"
          defaultCaption="Saint Petersburg"
          dateTag="10.07.2026"
          initialOrientation="portrait"
        />

        <AdaptiveEditorialPhoto
          id="photo_yerevan_100726_en"
          src="/images/Aleksandr_Sarkisian_Yerevan_100726.jpg"
          alt="Yerevan · July 10, 2026"
          defaultCaption="Yerevan"
          dateTag="10.07.2026"
          initialOrientation="portrait"
        />

        <AdaptiveEditorialPhoto
          id="photo_armenia_120726_en"
          src="/images/Aleksandr_Sarkisian_120726.jpg"
          alt="Armenia · July 12, 2026"
          defaultCaption="Armenia"
          dateTag="12.07.2026"
          initialOrientation="portrait"
        />

        {/* Photo 12: Yerevan, two days prior to incorporation (15.08.2026) */}
        <AdaptiveEditorialPhoto
          id="photo_yerevan_150826_en"
          src="/images/Aleksandr_Sarkisian_Yerevan_150826.jpg"
          alt="Yerevan · August 15, 2026"
          defaultCaption="Yerevan"
          dateTag="15.08.2026"
          initialOrientation="portrait"
        />

        {/* Section: Incorporation, Acknowledgement, Looking Ahead */}
        <section className="max-w-[620px] mx-auto px-6 mb-16 space-y-6">
          <h2 className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            August 17, 2026 — M.A.R.S. COMPANION LLC
          </h2>
          <EditableBlock
            id="story_company_reg_en"
            initialText="On August 17, 2026, M.A.R.S. COMPANION LLC was officially incorporated in Armenia (Kapan).&#10;&#10;For me, this marked another threshold crossed. What once started with the quiet thought — 'I need a digital companion who can be beside me even without the internet' — now stood backed by an officially registered company."
          />

          <h3 className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            What Remained Unchanged
          </h3>
          <EditableBlock
            id="story_unchanged_en"
            initialText="Despite how profoundly the project has evolved, several principles remain as steadfast as on day one:&#10;&#10;I still demand that M.A.R.S. operate fully locally.&#10;I still believe memory is the vital soul of authentic interaction.&#10;I still insist that the system preserve an enduring identity.&#10;&#10;And I still aspire for people to perceive M.A.R.S. not as an ephemeral app opened occasionally, but as a lifelong digital companion."
          />

          <h3 className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[#0F172A] pt-4">
            Why I Continue Doing This
          </h3>
          <EditableBlock
            id="story_why_continue_en"
            initialText="When I first pondered this idea, I wasn't thinking of companies. I wasn't thinking of patents. I wasn't thinking of publications. I simply wanted to discover whether I could create something I personally yearned for.&#10;&#10;Then came the research. Then the name. Then the code. Then the initial components. Then the working prototype. Then the first patent filing. Then the company.&#10;&#10;Yet the original inquiry endures: can we create a digital companion who truly stays beside a human being?&#10;&#10;Today, I no longer attempt to answer that question with words alone. I continue building the answer."
          />

          {/* Special Family Acknowledgement Block */}
          <div className="my-10 p-7 sm:p-9 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white shadow-xl border border-slate-700/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-blue-400 font-medium">
                  Special Acknowledgement
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Family
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight text-white">
                Thank You
              </h3>

              <EditableBlock
                id="story_family_thanks_v2_en"
                theme="dark"
                textClassName="text-slate-200 text-[17px] sm:text-[18px] leading-[1.85]"
                initialText="Behind this journey stand far more than my own efforts alone. My family offered invaluable support — Father, Mother, Elder Sister, Younger Brother, and Younger Sister.&#10;&#10;Most vital to me was the steadfast support of my Father, who stood by me even when M.A.R.S. existed only as a nascent thought and rough experiments. Without this backing, this path would have been impossible. And I state this with proud gratitude. It is precisely because of that support that I was able to press forward, and continue doing so today."
              />
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[#0F172A] pt-2">
            The Story Continues
          </h3>
          <EditableBlock
            id="story_continues_en"
            initialText="Today, M.A.R.S. Companion exists as a physical prototype, an ambitious technological endeavor backed by its own company and proprietary intellectual property. Yet I do not consider this chapter complete.&#10;&#10;The first enclosure was merely the start. The first prototype was merely the start. The first patent application was merely the start. Even the company is only the beginning. Ahead lie new iterations, bolder experiments, and next frontiers.&#10;&#10;And perhaps, years from now, when I look back at photos of that first device, it will seem remarkably modest. But that is where everything began."
          />
        </section>

        {/* References */}
        <div className="max-w-[620px] mx-auto px-6 mt-12">
          <MagazineLinksEn />
        </div>

        {/* Quiet Modern Footer */}
        <footer className="max-w-[620px] mx-auto px-6 pt-10 text-center text-xs font-mono text-[#9CA3AF]">
          sarkisian.site · Aleksandr Sarkisian
        </footer>
      </main>

      {/* Floating Back to Top button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-white/90 hover:bg-white text-[#111827] rounded-full shadow-lg border border-[#E5E7EB] backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Back to top"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 text-[#111827]" />
        </button>
      )}
    </div>
  );
};
