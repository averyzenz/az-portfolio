import { nav, profile } from "@/content";
import { Container } from "./Container";

export function Header() {
  return (
    <header>
      <Container className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-3 py-5 sm:flex sm:justify-between">
        <a
          href="#top"
          className="font-display text-[26px] font-bold tracking-[-0.02em]"
          aria-label={`${profile.name}, back to top`}
        >
          {profile.wordmark}
        </a>
        <nav aria-label="Primary" className="contents sm:flex sm:items-center sm:gap-7">
          <ul className="col-span-2 row-start-2 flex gap-6 text-[12px] font-semibold uppercase tracking-[0.14em] sm:gap-7 sm:text-[13px]">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-11 items-center hover:text-rose">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener"
            className="col-start-2 row-start-1 inline-flex min-h-11 items-center bg-ink px-[18px] text-[13px] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-rose"
          >
            Resume
          </a>
        </nav>
      </Container>
    </header>
  );
}
