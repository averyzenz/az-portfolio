import { hero } from "@/content";
import { imageSrc } from "@/lib/images";
import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";
import { Photo } from "./Photo";
import { Rich } from "./Rich";

export function Hero() {
  return (
    <section aria-labelledby="hero-name">
      <Container className="grid pt-2 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
        <div className="flex flex-col justify-end gap-6 pt-8 pb-12 lg:py-14 lg:pr-10">
          <p className="eyebrow text-rose">{hero.label}</p>
          <h1
            id="hero-name"
            className="font-display font-bold leading-[0.8] tracking-[-0.05em] text-[clamp(72px,14vw,176px)]"
          >
            {hero.firstName}
            <br />
            {hero.lastName}
          </h1>
          <p className="max-w-[560px] text-[18px] leading-[1.55] text-[#2b2b2b] sm:text-[20px]">
            <Rich text={hero.intro} />
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={hero.primaryCta.href} target="_blank" rel="noopener">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
        <div className="flex items-end justify-center bg-blush pt-10 lg:min-h-[640px] lg:pt-0">
          <div className="relative aspect-[4/5] w-[82%] max-w-[420px] lg:aspect-auto lg:h-[88%] lg:max-w-none">
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
