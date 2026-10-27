"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/components/ui/ArrowIcon";
import Container from "@/components/ui/Container";
import type { HomeContent } from "@/content/home-content";
import type { Locale } from "@/lib/locale";

export function SpiderShowcase({ locale, content }: { locale: Locale; content: HomeContent["showcase"] }) {
  const rtl = locale === "fa";
  return <section id="spider2" className="spider-showcase" aria-labelledby="spider-showcase-title">
    <Container>
      <header className="spider-showcase__header">
        <div><p className="section-eyebrow"><span className="section-eyebrow__line" aria-hidden="true" />{content.eyebrow}</p>
          <p className="spider-showcase__model" lang="en">{content.model}</p>
          <h2 id="spider-showcase-title" className="spider-showcase__title">{content.title}</h2></div>
        <div className="spider-showcase__introduction"><p>{content.description}</p>
          <Link href={content.productPageHref} className="text-link"><span>{content.productPageLabel}</span><ArrowIcon rtl={rtl} /></Link></div>
      </header>
      <div className="spider-showcase__visual">
        <div className="spider-showcase__ambient" aria-hidden="true" />
        <div className="spider-showcase__height-line" aria-hidden="true"><span>620 mm</span></div>
        <figure className="spider-showcase__figure">
          <Image className="spider-showcase__image" src={content.image.src} alt={content.image.alt} width={900} height={1100} sizes="(max-width: 767px) 90vw, 680px" />
          <figcaption className="spider-showcase__caption">{content.dimensionsLabel}</figcaption>
        </figure>
        <div className="spider-showcase__width-line" aria-hidden="true"><span>280 mm</span></div>
        <span className="spider-showcase__depth" aria-hidden="true">300 mm</span>
      </div>
      <dl className="specification-grid">{content.specifications.map((spec) => <div key={spec.label} className="specification-item"><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl>
      <p className="spider-showcase__disclaimer">{content.disclaimer}</p>
    </Container>
  </section>;
}
