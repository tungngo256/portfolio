import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

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
    image: "/spon-score.webp",
  },
  {
    name: "Spon Live",
    blurb: "Live sports schedule platform with multi-league filtering",
    tags: ["Next.js", "ISR", "Zustand", "React Query"],
    metric: "SSR/ISR for indexable pages",
    image: "/spon-live.webp",
  },
  {
    name: "Generative NFT Art",
    blurb:
      "Generative art for NFTs at Autonomous Inc — algorithmic visuals in code",
    tags: ["p5.js", "JavaScript", "Canvas", "Generative"],
    metric: "Live sketch · p5.js editor",
    href: "https://editor.p5js.org/tungngo256/sketches/V-qxCc1y_",
    image: "/nft-demo.webp",
  },
  {
    name: "Internship Recruitment Platform",
    blurb:
      "Built an internship recruitment platform at R2S — accessible, responsive UI across all devices",
    tags: ["React.js", "Redux", "Ant Design", "SCSS"],
    metric: "Responsive & accessible across all devices",
    image: "/r2s.webp",
  },
  {
    name: "BoostPTE",
    blurb: "English learning platform (live product)",
    tags: ["React", "Redux", "Ant Design"],
    metric: "7 features shipped on a live product",
    image: "/boostpte.webp",
  },
  {
    name: "Company Website Re-build",
    blurb:
      "Rebuilt the company website at Horus — researched libraries and developed 3 key features",
    tags: ["React.js", "MUI", "Redux", "SCSS"],
    metric: "3 key features delivered",
    image: "/horus-vn.webp",
  },
];

export default function Projects() {
  const cardClass =
    "group flex h-full flex-col rounded-2xl border border-line/10 bg-card/60 p-7 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg";

  return (
    <section id="projects" className="scroll-mt-20 py-32">
      <SectionTitle eyebrow="Projects" title="Selected work" />

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {PROJECTS.map((p, i) => {
          const inner = (
            <>
              {p.image && (
                <div className="relative mb-5 -mx-7 -mt-7 aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <Image
                    src={p.image}
                    alt={`${p.name} preview`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                <p className="text-sm font-medium text-accent">{p.metric}</p>
              </div>
            </>
          );

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
  );
}
