import { toolkit } from "@/content";
import { Container } from "./Container";

export function Toolkit() {
  return (
    <section id="toolkit" aria-labelledby="toolkit-heading" className="on-dark bg-ink text-paper">
      <Container className="flex flex-col gap-12 py-20 sm:py-24">
        <div>
          <p className="eyebrow text-blush">{toolkit.label}</p>
          <h2
            id="toolkit-heading"
            className="mt-2 font-display font-medium leading-none text-[clamp(40px,5vw,56px)]"
          >
            {toolkit.heading}
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {toolkit.groups.map((group) => (
            <div key={group.title} className="border-t border-line-dark pt-5">
              <h3 className="eyebrow text-blush">{group.title}</h3>
              <ul className="mt-4">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-[#262626] py-3 text-[16px] leading-snug text-mist last:border-b-0"
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
