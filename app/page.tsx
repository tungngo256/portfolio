import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import CopyEmail from "@/components/CopyEmail";

/* ---------- Content data (from CV) ---------- */

const SKILL_GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["HTML5", "CSS3", "JavaScript ES6", "TypeScript"],
  },
  {
    label: "Frameworks",
    items: ["ReactJS", "Next.js (SSR/SSG/ISR/CSR)", "Vue.js"],
  },
  { label: "State", items: ["Redux", "Zustand", "Pinia", "React Query"] },
  {
    label: "UI",
    items: ["TailwindCSS", "Shadcn UI", "MUI", "Ant Design", "Bootstrap"],
  },
  {
    label: "Performance",
    items: [
      "Core Web Vitals",
      "LCP / INP / CLS",
      "Code-splitting",
      "Lazy loading",
    ],
  },
  {
    label: "SEO",
    items: [
      "Meta tags",
      "Structured data",
      "Sitemap",
      "Canonical",
      "Lighthouse",
    ],
  },
  { label: "Tools", items: ["Git", "Webpack", "REST API", "Postman", "Figma"] },
];

const EXPERIENCE = [
  {
    company: "Circle Lab",
    note: "formerly Nexus Zone",
    location: "Ho Chi Minh City",
    duration: "Dec 2023 – Present",
    roles: [
      "Mid Front-End Developer (Oct 2024 – Present)",
      "FE Developer & Team Leader (Dec 2023 – Sep 2024)",
    ],
    bullets: [
      "Built Spon Score — sports scoring platform serving ~2,000 users",
      "Built Spon Live — multi-league live sports platform with SSR/ISR",
      "Technical SEO: lifted Lighthouse SEO score from 40s → 92",
      "Core Web Vitals: Performance 71 · Accessibility 81 · Best Practices 73",
      "Led a 5-member frontend team — code review, architecture decisions",
    ],
  },
  {
    company: "Autonomous Inc",
    location: "Ho Chi Minh City",
    duration: "May 2023 – Dec 2023",
    roles: ["Front-End Developer"],
    bullets: [
      "Generative NFT art with p5.js and JavaScript",
      "NFT game feature development across cross-functional teams",
    ],
  },
  {
    company: "R2S Company",
    location: "Ho Chi Minh City",
    duration: "Jan 2022 – May 2023",
    roles: ["Front-End Developer"],
    bullets: [
      "Built an internship recruitment platform — responsive & accessible",
      "Shipped 7 features + bug fixes on BoostPTE, a live English-learning product",
    ],
  },
  {
    company: "Horus Co. Ltd",
    location: "Ho Chi Minh City",
    duration: "Jun 2019 – Feb 2020",
    roles: ["Front-End Developer"],
    bullets: ["Company website rebuild — delivered 3 key features"],
  },
];

const PROJECTS: {
  name: string;
  blurb: string;
  tags: string[];
  metric: string;
  href?: string;
  image?: string;
}[] = [
  {
    name: "Spon Score",
    blurb: "Sports scoring platform · ~2,000 users",
    tags: ["Next.js", "TypeScript", "SSR", "SEO"],
    metric: "Lighthouse SEO: 92",
    image: "/spon-score.jpg",
  },
  {
    name: "Spon Live",
    blurb: "Live sports schedule platform with multi-league filtering",
    tags: ["Next.js", "ISR", "Zustand", "React Query"],
    metric: "SSR/ISR for indexable pages",
    image: "/spon-live.png",
  },
  {
    name: "Generative NFT Art",
    blurb:
      "Generative art for NFTs at Autonomous Inc — algorithmic visuals in code",
    tags: ["p5.js", "JavaScript", "Canvas", "Generative"],
    metric: "Live sketch · p5.js editor",
    href: "https://editor.p5js.org/tungngo256/sketches/V-qxCc1y_",
    image: "/nft-demo.png",
  },
  {
    name: "Internship Recruitment Platform",
    blurb:
      "Built an internship recruitment platform at R2S — accessible, responsive UI across all devices",
    tags: ["React.js", "Redux", "Ant Design", "SCSS"],
    metric: "Responsive & accessible across all devices",
    image: "/r2s.png",
  },
  {
    name: "BoostPTE",
    blurb: "English learning platform (live product)",
    tags: ["React", "Redux", "Ant Design"],
    metric: "7 features shipped on a live product",
    image: "/boostpte.svg",
  },
  {
    name: "Company Website Re-build",
    blurb:
      "Rebuilt the company website at Horus — researched libraries and developed 3 key features",
    tags: ["React.js", "MUI", "Redux", "SCSS"],
    metric: "3 key features delivered",
    image: "/horus-vn.png",
  },
];

const ABOUT_TAGS = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Zustand",
  "React Query",
  "SEO",
  "Core Web Vitals",
];

/* ---------- Small presentational helpers ---------- */

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line/10 bg-card/60 px-3 py-1.5 text-sm text-fg/90">
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-16 text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}

const cardBase =
  "rounded-2xl border border-line/10 bg-card/60 p-7 transition-transform duration-300 hover:scale-[1.02]";

/* ---------- Page ---------- */

export default function Home() {
  return (
    <>
      <Nav />

      <main className="mx-auto max-w-6xl px-6">
        {/* ===== SECTION 1 — HERO ===== */}
        <section
          id="hero"
          className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden text-center"
        >
          {/* Subtle animated gradient background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <div className="absolute left-1/2 top-1/3 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 animate-gradient-drift rounded-full bg-accent/10 blur-[120px]" />
            <div className="absolute left-1/4 top-2/3 h-[30rem] w-[30rem] -translate-x-1/2 animate-gradient-drift rounded-full bg-accent/5 blur-[120px] [animation-delay:-6s]" />
          </div>

          <Reveal>
            <h1 className="text-5xl font-thin tracking-tight sm:text-7xl lg:text-8xl">
              Ngo Huu Thanh Tung (Corbin)
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg font-medium tracking-wide text-muted sm:text-xl">
              Front-End Developer
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-muted">
              Building fast, accessible, and beautiful web experiences.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-line/20 px-7 py-3 text-sm font-medium text-fg transition-all duration-300 hover:scale-[1.03] hover:border-accent/50"
              >
                Contact
              </a>
            </div>
          </Reveal>
        </section>

        {/* ===== SECTION 2 — ABOUT (bento grid) ===== */}
        <section id="about" className="scroll-mt-20 py-32">
          <SectionTitle eyebrow="About" title="A bit about me" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[minmax(0,1fr)]">
            {/* Card 1 — Bio (large, 2 cols) */}
            <Reveal className="md:col-span-2">
              <div className={`${cardBase} h-full`}>
                <p className="text-lg leading-relaxed text-fg/90">
                  <span className="font-medium">~4 years</span> building
                  production-grade web apps. Specialized in{" "}
                  <span className="font-medium">React, Next.js</span>, and{" "}
                  <span className="font-medium">SEO &amp; Core Web Vitals</span>{" "}
                  optimization. Led a 5-member frontend team across 3 projects.
                </p>
              </div>
            </Reveal>

            {/* Card 2 — Location */}
            <Reveal delay={80}>
              <div
                className={`${cardBase} flex h-full flex-col justify-between`}
              >
                <span className="text-3xl" aria-hidden="true">
                  📍
                </span>
                <div className="mt-6">
                  <p className="text-sm text-muted">Based in</p>
                  <p className="mt-1 text-lg font-medium">
                    Ho Chi Minh City, Vietnam
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 3 — Tools */}
            <Reveal delay={120}>
              <div className={`${cardBase} h-full`}>
                <p className="mb-4 text-sm text-muted">Languages &amp; tools</p>
                <div className="flex flex-wrap gap-2">
                  {ABOUT_TAGS.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Card 4 — Currently */}
            <Reveal delay={160} className="md:col-span-2">
              <div
                className={`${cardBase} flex h-full items-center justify-between gap-4`}
              >
                <div>
                  <p className="text-sm text-muted">Currently at</p>
                  <p className="mt-1 text-xl font-semibold">Circle Lab</p>
                  <p className="mt-1 text-sm text-muted">Dec 2023 – Present</p>
                </div>
                <span className="relative flex h-3 w-3" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== SECTION 3 — SKILLS ===== */}
        <section id="skills" className="scroll-mt-20 py-32">
          <SectionTitle eyebrow="Skills" title="Tools of the trade" />

          <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {SKILL_GROUPS.map((group, i) => (
              <Reveal key={group.label} delay={i * 60}>
                <div>
                  <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-muted">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===== SECTION 4 — EXPERIENCE (timeline) ===== */}
        <section id="experience" className="scroll-mt-20 py-32">
          <SectionTitle eyebrow="Experience" title="Where I've worked" />

          <div className="relative mx-auto max-w-3xl">
            {/* Timeline rail */}
            <div className="absolute left-0 top-2 hidden h-full w-px bg-line/10 sm:block" />

            <div className="space-y-14">
              {EXPERIENCE.map((job, i) => (
                <Reveal key={job.company} delay={i * 60}>
                  <div className="relative sm:pl-10">
                    {/* Node */}
                    <span className="absolute left-[-4px] top-2 hidden h-2.5 w-2.5 rounded-full bg-accent sm:block" />

                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-xl font-semibold">
                        {job.company}
                        {job.note && (
                          <span className="ml-2 text-sm font-normal text-muted">
                            ({job.note})
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-muted">
                        {job.location} · {job.duration}
                      </p>
                    </div>

                    <div className="mt-2 space-y-0.5">
                      {job.roles.map((role) => (
                        <p
                          key={role}
                          className="text-sm font-medium text-accent"
                        >
                          {role}
                        </p>
                      ))}
                    </div>

                    <ul className="mt-4 space-y-2">
                      {job.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-3 text-sm leading-relaxed text-fg/85"
                        >
                          <span
                            className="mt-2 h-1 w-1 flex-none rounded-full bg-muted"
                            aria-hidden="true"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 5 — PROJECTS ===== */}
        <section id="projects" className="scroll-mt-20 py-32">
          <SectionTitle eyebrow="Projects" title="Selected work" />

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {PROJECTS.map((p, i) => {
              const inner = (
                <>
                  {p.image && (
                    <div className="mb-5 -mx-7 -mt-7 overflow-hidden rounded-t-2xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image}
                        alt={`${p.name} preview`}
                        loading="lazy"
                        className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    {p.href && (
                      <svg
                        className="h-4 w-4 flex-none text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.blurb}
                  </p>

                  <div className="mt-auto pt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line/10 px-2.5 py-1 text-xs text-fg/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-line/10 pt-4">
                    <p className="text-sm font-medium text-accent">
                      {p.metric}
                    </p>
                  </div>
                </>
              );

              const cardClass =
                "group flex h-full flex-col rounded-2xl border border-line/10 bg-card/60 p-7 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg";

              return (
                <Reveal key={p.name} delay={i * 80}>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${cardClass} hover:border-accent/40`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <article className={cardClass}>{inner}</article>
                  )}
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ===== SECTION 6 — CERTIFICATIONS & EDUCATION ===== */}
        <section id="education" className="scroll-mt-20 py-32">
          <SectionTitle
            eyebrow="Credentials"
            title="Certifications & Education"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className={`${cardBase} h-full`}>
                <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.15em] text-muted">
                  Certifications
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between gap-4">
                    <span className="font-medium">TOEIC 610/990</span>
                    <span className="text-sm text-muted">ETS</span>
                  </li>
                  <li className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-2 font-medium">
                      Scrum Agile Certificate
                      <svg
                        className="h-4 w-4 text-accent"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-sm text-muted">AxonActive</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className={`${cardBase} h-full`}>
                <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.15em] text-muted">
                  Education
                </h3>
                <p className="text-lg font-medium">
                  HCMC University of Technology
                </p>
                <p className="mt-2 text-sm text-muted">
                  Major: Computer Science &amp; Engineering
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== SECTION 7 — CONTACT ===== */}
        <section id="contact" className="scroll-mt-20 py-32">
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s work together
            </h2>

            <div className="mt-10 flex flex-col items-center gap-4 text-base">
              <a
                href="tel:+84901626007"
                className="flex items-center gap-3 text-fg/90 transition-colors hover:text-accent"
              >
                <span aria-hidden="true">📞</span> 0901 626 007
              </a>
              <a
                href="mailto:tungngo256@gmail.com"
                className="flex items-center gap-3 text-fg/90 transition-colors hover:text-accent"
              >
                <span aria-hidden="true">✉️</span> tungngo256@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/tung-ngo-260714242/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-fg/90 transition-colors hover:text-accent"
              >
                <span aria-hidden="true">in</span> LinkedIn
              </a>
              <p className="flex items-center gap-3 text-muted">
                <span aria-hidden="true">📍</span> Ho Chi Minh City, Vietnam
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <CopyEmail />
            </div>
          </Reveal>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="border-t border-line/10 py-10 text-center text-sm text-muted">
          © {new Date().getFullYear()} Ngo Huu Thanh Tung · Built with Next.js
          &amp; Tailwind CSS
        </footer>
      </main>
    </>
  );
}
