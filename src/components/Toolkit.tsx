import { toolkit } from "@/content";
import { Container } from "./Container";

export function Toolkit() {
  return (
    <section id="toolkit" aria-labelledby="toolkit-heading" className="bg-blush text-ink">
      <Container className="flex flex-col gap-12 py-20 sm:py-24">
        <div>
          <p className="eyebrow text-rose">{toolkit.label}</p>
          <h2
            id="toolkit-heading"
            className="mt-2 font-display font-medium leading-none text-[clamp(40px,5vw,56px)]"
          >
            {toolkit.heading}
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {toolkit.groups.map((group) => (
            <div key={group.title} className="border-t-[1.5px] border-ink pt-5">
              <h3 className="eyebrow text-rose">{group.title}</h3>
              <ul className="mt-4">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-ink/15 py-3 text-[16px] leading-snug text-ink last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
