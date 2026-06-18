import Reveal from "@/components/Reveal";
import Pill from "@/components/Pill";
import SectionTitle from "@/components/SectionTitle";

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

const cardBase =
  "rounded-2xl border border-line/10 bg-card/60 p-7 transition-transform duration-300 hover:scale-[1.02]";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-32">
      <SectionTitle eyebrow="About" title="A bit about me" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[minmax(0,1fr)]">
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

        <Reveal delay={80}>
          <div className={`${cardBase} flex h-full flex-col justify-between`}>
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
  );
}
