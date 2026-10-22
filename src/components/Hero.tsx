import { hero } from "@/content";
import { hasResearch, hasResume, imageSrc } from "@/lib/files";
import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";
import { Photo } from "./Photo";

export function Hero() {
  const resume = hasResume();
  const primary = resume ? hero.primaryCta : hero.primaryCtaFallback;
  const secondary = hasResearch() ? hero.secondaryCta : hero.secondaryCtaFallback;
  return (
    <section aria-labelledby="hero-name">
      <Container className="grid pt-2 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
        <div className="flex flex-col justify-end gap-6 pt-8 pb-12 lg:py-14 lg:pr-10">
          <p className="eyebrow hero-fade text-rose">{hero.label}</p>
          <h1
            id="hero-name"
            className="font-display font-bold leading-[0.8] tracking-[-0.05em] text-[clamp(72px,14vw,176px)]"
          >
            <span className="hero-rise block" style={{ animationDelay: "120ms" }}>
              {hero.firstName}
            </span>
            <span className="hero-rise block" style={{ animationDelay: "260ms" }}>
              {hero.lastName}
            </span>
          </h1>
          <div className="hero-fade flex flex-wrap gap-3" style={{ animationDelay: "450ms" }}>
            <ButtonLink href={primary.href} {...(resume && { target: "_blank", rel: "noopener" })}>
              {primary.label}
            </ButtonLink>
            <ButtonLink href={secondary.href} variant="outline">
              {secondary.label}
            </ButtonLink>
          </div>
        </div>
        <div className="hero-reveal flex items-end justify-center bg-blush pt-10 lg:min-h-[640px] lg:pt-0">
          <div
            className="hero-fade relative aspect-[4/5] w-[82%] max-w-[420px] lg:aspect-auto lg:h-[88%] lg:max-w-none"
            style={{ animationDelay: "600ms" }}
          >
            <Photo
              src={imageSrc(hero.photo.file)}
              alt={hero.photo.alt}
              placeholder={hero.photo.placeholder}
              sizes="(min-width: 1024px) 400px, 82vw"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
