import { research } from "@/content";
import { Container } from "./Container";
import { Rich } from "./Rich";

export function Research() {
  return (
    <section id="research" aria-labelledby="research-heading" className="on-dark bg-ink text-paper">
      <Container className="flex flex-col gap-10 py-20 sm:py-[100px]">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow text-blush">{research.label}</p>
            <h2
              id="research-heading"
              className="mt-2 font-display font-medium leading-none text-[clamp(44px,6vw,64px)]"
            >
              {research.heading}
            </h2>
          </div>
          <p className="max-w-[420px] text-[16px] leading-[1.6] text-mist">{research.intro}</p>
        </div>
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {research.notes.map((note) => (
            <li key={note.href} data-reveal>
              <article className="flex h-full min-h-[280px] flex-col gap-3.5 border border-line-dark p-6 sm:p-7">
                <div className="flex justify-between gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-blush">
                  <span>{note.type}</span>
                  <span>
                    <Rich text={note.date} />
                  </span>
                </div>
                <h3 className="font-display text-[28px] font-medium leading-[1.15] sm:text-[30px]">
                  <Rich text={note.title} />
                </h3>
                <p className="text-[15px] leading-[1.6] text-mist">
                  <Rich text={note.summary} />
                </p>
                <a
                  href={note.href}
                  target="_blank"
                  rel="noopener"
                  className="mt-auto inline-flex min-h-11 items-center self-start text-[13px] font-semibold uppercase tracking-[0.12em] text-blush underline underline-offset-4 hover:text-paper"
                >
                  {note.linkLabel}
                </a>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
