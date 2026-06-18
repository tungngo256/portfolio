import Reveal from "@/components/Reveal";
import CopyEmail from "@/components/CopyEmail";

export default function Contact() {
  return (
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
  );
}
