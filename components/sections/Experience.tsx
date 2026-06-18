import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

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

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-32">
      <SectionTitle eyebrow="Experience" title="Where I've worked" />

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-0 top-2 hidden h-full w-px bg-line/10 sm:block" />

        <div className="space-y-14">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.company} delay={i * 60}>
              <div className="relative sm:pl-10">
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
                    <p key={role} className="text-sm font-medium text-accent">
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
  );
}
