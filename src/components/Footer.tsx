import { contact, profile } from "@/content";
import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer id="contact" className="on-dark bg-ink text-paper">
      <Container className="flex flex-col gap-9 pt-20 pb-12 sm:pt-24 sm:pb-[52px]">
        <h2
          data-reveal
          className="font-display font-bold leading-[0.9] tracking-[-0.04em] text-[clamp(72px,10vw,112px)]"
        >
          {contact.heading} <em className="font-medium text-blush">{contact.accent}</em>
        </h2>
        <p className="text-[18px] leading-normal text-mist">{contact.line}</p>
        <div className="flex flex-wrap gap-3.5">
          <ButtonLink href={`mailto:${profile.email}`} variant="solid-light">
            {contact.buttons.email}
          </ButtonLink>
          <ButtonLink href={profile.resume} target="_blank" rel="noopener" variant="outline-light">
            {contact.buttons.resume}
          </ButtonLink>
          <ButtonLink href={profile.linkedin} target="_blank" rel="noopener noreferrer" variant="outline-light">
            {contact.buttons.linkedin}
          </ButtonLink>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-[#444444] pt-[22px] text-[13px] text-[#bdbdbd]">
          <span>
            {profile.name} · {profile.school}
          </span>
          <a href={`mailto:${profile.email}`} className="hover:text-blush">
            {profile.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
