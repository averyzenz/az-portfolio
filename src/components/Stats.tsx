import { stats } from "@/content";
import { Container } from "./Container";

export function Stats() {
  return (
    <section aria-label="At a glance" className="bg-blush">
      <Container>
        <ul className="grid gap-9 py-16 sm:grid-cols-2 sm:py-[72px] lg:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.value} data-reveal className="border-t-[1.5px] border-ink pt-[18px]">
              <p className="font-display font-bold leading-[0.9] tracking-[-0.04em] text-[clamp(64px,7vw,88px)]">
                {stat.value}
              </p>
              <p className="mt-3 text-[15px] leading-normal">{stat.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
