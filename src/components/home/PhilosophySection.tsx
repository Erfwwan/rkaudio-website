import Container from "@/components/ui/Container";
import type { HomeContent } from "@/content/home-content";

export function PhilosophySection({ content }: { content: HomeContent["philosophy"] }) {
  return <section id="philosophy" className="philosophy-section" aria-labelledby="philosophy-title">
    <Container className="philosophy-section__container">
      <p className="section-eyebrow"><span className="section-eyebrow__line" aria-hidden="true" />{content.eyebrow}</p>
      <h2 id="philosophy-title" className="philosophy-section__title">{content.title}</h2>
      <p className="philosophy-section__description">{content.description}</p>
      <div className="philosophy-section__divider" aria-hidden="true" />
      <p className="philosophy-section__statement">{content.statement}</p>
    </Container>
  </section>;
}
