import Reveal from "@/components/Reveal";
import Pill from "@/components/Pill";
import SectionTitle from "@/components/SectionTitle";

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

export default function Skills() {
  return (
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
  );
}
