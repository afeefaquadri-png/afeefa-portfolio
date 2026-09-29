import ProcessDiagram from "@/components/ProcessDiagram";
import Projects from "@/components/Projects";
import Reveal from "@/components/Reveal";
import ThemeToggle from "@/components/ThemeToggle";
import { euronWork, links, stages, toolkit } from "@/data/content";

function SectionHead({ tag, title, note }: { tag: string; title: string; note?: string }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent">
        <span className="inline-block h-2.5 w-2.5 rounded-full border-2 border-accent" />
        {tag}
        <span className="h-px flex-1 bg-ink/15" />
      </div>
      <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">{title}</h2>
      {note && <p className="mt-4 max-w-2xl text-lg text-ink-soft">{note}</p>}
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 bg-paper/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#top" className="font-display text-2xl">
            Afeefa<span className="text-accent">.</span>
          </a>
          <div className="flex items-center gap-0.5 text-[13px] sm:gap-1 sm:text-sm">
            <a href="#now" className="rounded-full px-2 py-2 text-ink-soft hover:text-ink sm:px-3">Now</a>
            <a href="#projects" className="rounded-full px-2 py-2 text-ink-soft hover:text-ink sm:px-3">Projects</a>
            <a href="#contact" className="rounded-full px-2 py-2 text-ink-soft hover:text-ink sm:px-3">Contact</a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Hero */}
        <section className="pb-16 pt-12 md:pb-24 md:pt-20">
          <div>
            <p className="mb-6 font-mono text-xs tracking-[0.2em] text-ink-soft">
              DWG NO. AAS-2026 · PROCESS FLOW OF ONE CAREER
            </p>
            <h1 className="font-display text-[3.4rem] leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
              Chemical engineer
              <br />
              <span className="italic text-ink-soft">by training.</span>
              <br />
              AI developer
              <br />
              <span className="italic text-accent">by practice.</span>
            </h1>
          </div>
          <div>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              I&apos;m Afeefa Albeena Sheikh, an AI Developer at{" "}
              <span className="text-ink">Euron Systems</span>. I build RAG systems, multi-agent tools and the
              web and mobile products they live inside. Below is how I got here, drawn the way I was first taught
              to draw anything: as a process.
            </p>
          </div>

          <Reveal delay={240} className="mt-14 md:mt-20">
            <ProcessDiagram />
            <p className="mt-6 text-center font-mono text-[11px] tracking-widest text-ink-faint">
              TAP ANY UNIT TO JUMP TO IT
            </p>
          </Reveal>
        </section>

        {/* Story */}
        <section id="story" className="scroll-mt-20 py-16 md:py-24">
          <SectionHead
            tag="STREAM 01 · FEED"
            title="I didn't come from computer science."
            note="I studied Chemical Engineering and worked in industry before moving into AI. I didn't want to only use AI tools. I wanted to understand and build the systems underneath them."
          />
          <ol className="relative grid gap-4 md:grid-cols-4">
            <span aria-hidden className="absolute left-0 right-0 top-[26px] hidden h-[3px] bg-flow/25 md:block" />
            {stages.map((s, i) => (
              <li key={s.tag}>
                <Reveal delay={i * 100}>
                  <div className="relative mb-5 hidden md:block">
                    <span
                      className={`relative z-10 flex h-[54px] w-[54px] items-center justify-center rounded-full font-mono text-[10px] tracking-wider ${
                        i === stages.length - 1 ? "bg-accent text-paper" : "bg-paper-2 text-ink-soft"
                      }`}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <div className="rounded-2xl bg-card/70 p-5">
                    <p className="mb-1 font-mono text-[11px] tracking-wider text-accent md:hidden">{s.tag}</p>
                    <p className="font-mono text-xs text-ink-faint">{s.when}</p>
                    <h3 className="mt-1 text-lg font-semibold leading-snug">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        {/* Why the background matters */}
        <section className="py-16 md:py-24">
          <Reveal>
            <div className="grid items-center gap-10 rounded-3xl bg-panel px-6 py-12 text-panel-ink md:grid-cols-[1.1fr_1fr] md:px-14 md:py-16">
              <div>
                <p className="mb-4 font-mono text-xs tracking-[0.2em] text-panel-accent">WHY IT STILL MATTERS</p>
                <p className="font-display text-3xl leading-tight md:text-5xl">
                  A problem often shows up far from where it started.
                </p>
                <p className="mt-6 max-w-lg text-[17px] leading-relaxed opacity-80">
                  Process engineering teaches you that, and that things tend to break at the handoff between
                  stages. It turned out to be most of debugging. When a screen goes blank or a payment fails,
                  I stop looking at where it hurts and start tracing upstream.
                </p>
              </div>
              <UpstreamSketch />
            </div>
          </Reveal>
        </section>

        {/* Now */}
        <section id="now" className="scroll-mt-20 py-16 md:py-24">
          <SectionHead
            tag="STREAM 02 · PRODUCT"
            title="Now: AI Developer at Euron Systems."
            note="Euron Systems is an AI-native EdTech platform that helps academies launch their own branded learning platform on web and mobile. Day to day, I build features, fix production bugs and ship mobile releases."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {euronWork.map((w, i) => (
              <Reveal key={w.label} delay={i * 80}>
                <div className="flex h-full gap-5 rounded-2xl bg-card/70 p-6">
                  <span className="font-mono text-sm text-accent">0{i + 1}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{w.label}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{w.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 py-16 md:py-24">
          <SectionHead
            tag="STREAM 03 · OUTPUT"
            title="Things I built to learn."
            note="My own AI projects. Most of them broke at least once on the way, which is where the learning happened."
          />
          <Reveal>
            <Projects />
          </Reveal>
        </section>

        {/* Toolkit */}
        <section className="py-16 md:py-24">
          <SectionHead tag="STREAM 04 · EQUIPMENT LIST" title="What I work with." />
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {toolkit.map((t, i) => (
              <Reveal key={t.group} delay={i * 80}>
                <p className="mb-3 font-mono text-xs tracking-[0.2em] text-ink-faint">{t.group.toUpperCase()}</p>
                <p className="text-xl leading-relaxed md:text-2xl">
                  {t.items.map((item, j) => (
                    <span key={item}>
                      <span className="transition-colors hover:text-accent">{item}</span>
                      {j < t.items.length - 1 && <span className="mx-1 text-ink-faint"> / </span>}{" "}
                    </span>
                  ))}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 pb-16 pt-16 md:pb-24 md:pt-24">
          <Reveal>
            <p className="mb-4 font-mono text-xs tracking-[0.2em] text-accent">STREAM 05 · OUTLET</p>
            <h2 className="font-display text-5xl leading-[1] md:text-8xl">
              Say hello<span className="text-accent">.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              Want to talk about AI, a project, or moving into tech from another field? My inbox is open.
            </p>
            <a
              href={`mailto:${links.email}`}
              className="mt-10 inline-block break-all font-display text-3xl underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent md:text-5xl"
            >
              {links.email}
            </a>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-85">
                LinkedIn
              </a>
              <a href={links.github} target="_blank" rel="noreferrer" className="rounded-full bg-paper-2 px-5 py-2.5 text-sm font-medium transition-colors hover:text-accent">
                GitHub
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-4 pb-10 font-mono text-[11px] tracking-wider text-ink-faint md:px-8">
        <span>AFEEFA ALBEENA SHEIKH · CHANDRAPUR, MAHARASHTRA</span>
        <span>REV. 2026 · DRAWN IN NEXT.JS</span>
      </footer>
    </>
  );
}

// Symptom downstream, cause upstream: a tiny sketch of how bugs travel.
function UpstreamSketch() {
  return (
    <svg viewBox="0 0 360 220" className="w-full" aria-hidden>
      <path d="M20 110 H340" stroke="currentColor" strokeOpacity="0.25" strokeWidth="8" fill="none" />
      <path d="M20 110 H340" stroke="var(--flow)" strokeWidth="2.5" fill="none" className="pipe-flow" />
      {[70, 180, 290].map((x) => (
        <rect key={x} x={x - 22} y="82" width="44" height="56" rx="10" fill="var(--panel)" stroke="currentColor" strokeWidth="2" />
      ))}
      <circle cx="70" cy="110" r="7" fill="var(--panel-accent)" />
      <circle cx="70" cy="110" r="16" fill="none" stroke="var(--panel-accent)" strokeWidth="1.5" className="animate-ping" style={{ transformBox: "fill-box", transformOrigin: "center", animationDuration: "2s" }} />
      <text x="70" y="170" textAnchor="middle" fontFamily="var(--font-plex-mono)" fontSize="11" fill="var(--panel-accent)" letterSpacing="1.5">CAUSE</text>
      <text x="290" y="170" textAnchor="middle" fontFamily="var(--font-plex-mono)" fontSize="11" fill="currentColor" opacity="0.6" letterSpacing="1.5">SYMPTOM</text>
      <path d="M270 62 C 220 34, 130 34, 86 66" stroke="var(--panel-accent)" strokeWidth="1.5" strokeDasharray="4 5" fill="none" />
      <path d="M86 66 l2 -11 M86 66 l11 -2" stroke="var(--panel-accent)" strokeWidth="1.5" fill="none" />
      <text x="180" y="14" textAnchor="middle" fontFamily="var(--font-plex-mono)" fontSize="11" fill="currentColor" opacity="0.6" letterSpacing="1.5">TRACE UPSTREAM</text>
    </svg>
  );
}
