import { statement } from "@/content";
import { Container } from "./Container";

export function Statement() {
  return (
    <section aria-label={statement.label}>
      <Container className="flex flex-col gap-6 pt-20 pb-16 sm:pt-[110px] sm:pb-[90px]">
        <div className="flex flex-col gap-6">
          <p className="eyebrow text-rose">{statement.label}</p>
          <p className="max-w-[1080px] font-display font-medium leading-[1.08] tracking-[-0.02em] text-[clamp(36px,5.2vw,64px)]">
            {statement.lead} <em className="text-rose">{statement.accent}</em>
          </p>
        </div>
      </Container>
    </section>
  );
}
