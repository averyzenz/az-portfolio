import { research } from "@/content";
import { hasResearch } from "@/lib/files";
import { Container } from "./Container";
import { Rich } from "./Rich";

export function Research() {
  if (!hasResearch()) return null;
  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="on-dark bg-ink text-paper"
    >
      <Container className="flex flex-col gap-10 py-20 sm:py-[100px]">
        <div className="flex flex-wrap items-end justify-between gap-5">
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
            <li key={note.href}>
              <article className="flex h-full min-h-[280px] flex-col gap-3.5 border border-line-dark p-6 sm:p-7">
                <div className="flex justify-between gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-blush">
                  <span>{note.type}</span>
                  <span>
                    <Rich text={note.date} />
                  </span>
                </div>
                {note.award && (
                  <p className="self-start border border-blush px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-blush">
                    <span aria-hidden="true">✦ </span>
                    {note.award}
                  </p>
                )}
                <h3 className="font-display text-[24px] font-medium leading-[1.2] sm:text-[26px]">
                  <Rich text={note.title} />
                </h3>
                {note.source && <p className="-mt-1 text-[13px] italic text-mist">{note.source}</p>}
                <p className="text-[15px] leading-[1.6] text-mist">
                  <Rich text={note.summary} />
                </p>
                <a
                  href={note.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex min-h-11 items-center self-start text-[13px] font-semibold uppercase tracking-[0.12em] text-blush underline underline-offset-4 hover:text-paper"
                >
                  {note.linkLabel}
                  <span aria-hidden="true">&nbsp;↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
