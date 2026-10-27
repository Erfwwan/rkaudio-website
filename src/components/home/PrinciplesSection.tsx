import Container from "@/components/ui/Container";
import type { HomeContent } from "@/content/home-content";

export function PrinciplesSection({ content }: { content: HomeContent["principles"] }) {
  return <section id="principles" className="principles-section" aria-labelledby="principles-title">
    <Container>
      <header className="principles-section__header">
        <p className="section-eyebrow"><span className="section-eyebrow__line" aria-hidden="true" />{content.eyebrow}</p>
        <h2 id="principles-title" className="principles-section__title">{content.title}</h2>
      </header>
      <ol className="principles-grid">{content.items.map((principle) => <li key={principle.number} className="principle-card">
        <div className="principle-card__header"><span className="principle-card__number">{principle.number}</span><span className="principle-card__indicator" aria-hidden="true" /></div>
        <h3 className="principle-card__title">{principle.title}</h3>
        <p className="principle-card__english-title" lang="en">{principle.englishTitle}</p>
        <p className="principle-card__description">{principle.description}</p>
      </li>)}</ol>
    </Container>
  </section>;
}
