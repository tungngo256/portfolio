import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden text-center"
    >
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
            className="rounded-full bg-accent-solid px-7 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
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
  );
}
