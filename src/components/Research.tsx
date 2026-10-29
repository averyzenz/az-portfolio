import { research } from "@/content";
import { hasResearch } from "@/lib/files";
import { Container } from "./Container";
import { ResearchCards } from "./ResearchCards";

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
        <ResearchCards notes={research.notes} />
      </Container>
    </section>
  );
}
