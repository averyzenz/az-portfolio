import { about } from "@/content";
import { imageSrc } from "@/lib/files";
import { Container } from "./Container";
import { Photo } from "./Photo";
import { Rich } from "./Rich";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <Container className="grid gap-12 py-20 sm:pt-[100px] sm:pb-20 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-14">
        <div className="flex flex-col gap-[18px]">
          <p className="eyebrow text-rose">{about.label}</p>
          <h2 id="about-heading" className="font-display text-[clamp(36px,4.4vw,44px)] font-medium leading-[1.1]">
            {about.heading}
          </h2>
          {about.bio.map((para) => (
            <p key={para} className="text-[17px] leading-[1.7] text-body">
              <Rich text={para} />
            </p>
          ))}
          {about.links.length > 0 && (
            <ul className="mt-2 border-t border-ink/15">
              {about.links.map((link) => (
                <li key={link.href} className="border-b border-ink/15 py-4">
                  <p className="eyebrow text-rose">{link.label}</p>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block font-display text-[22px] leading-snug font-medium underline-offset-4 hover:text-rose hover:underline"
                  >
                    {link.title}
                    <span aria-hidden="true">&nbsp;↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <p className="mt-1 text-[14px] text-body">{link.source}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <ul className="grid grid-cols-3 gap-2.5 self-center sm:gap-3.5">
          {about.photos.map((p) => (
            <li key={p.file} className="group relative aspect-[3/4] overflow-hidden">
              <Photo
                src={imageSrc(p.file)}
                alt={p.alt}
                placeholder={p.placeholder}
                tone={p.tone}
                labelPosition="bottom"
                className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(min-width: 1024px) 230px, 33vw"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
