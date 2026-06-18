import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

const cardBase =
  "rounded-2xl border border-line/10 bg-card/60 p-7 transition-transform duration-300 hover:scale-[1.02]";

export default function Credentials() {
  return (
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
  );
}
