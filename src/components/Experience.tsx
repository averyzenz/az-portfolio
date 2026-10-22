import { experience } from "@/content";
import { imageSrc } from "@/lib/images";
import { Container } from "./Container";
import { ExperienceTabs } from "./ExperienceTabs";

export function Experience() {
  const chapters = experience.chapters.map((c) => ({ ...c, src: imageSrc(c.photo.file) }));
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <Container className="py-20 sm:py-[100px]">
        <ExperienceTabs heading={experience.heading} label={experience.label} chapters={chapters} />
      </Container>
    </section>
  );
}
