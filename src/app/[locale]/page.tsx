"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Container from "@/components/ui/Container";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { siteContent } from "@/content/site-content";
import { isLocale, type Locale } from "@/lib/locale";

export default function HomePage() {
  const params = useParams<{ locale: string }>();
  const locale: Locale = isLocale(params.locale) ? params.locale : "fa";
  const t = siteContent[locale];
  const rtl = locale === "fa";

  return (
    <main className={`site-shell ${rtl ? "is-rtl" : "is-ltr"}`}>
      <header className="site-header">
        <Container className="header-inner">
          <Link href={`/${locale}`} className="brand" aria-label="RK Audio home">
            <span className="brand-mark">RK<span>•</span></span>
            <span className="brand-sub">AUDIO</span>
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            {t.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <div className="header-actions">
            <Link className="locale-switch" href={`/${locale === "fa" ? "en" : "fa"}`}>{locale === "fa" ? "EN" : "فا"}</Link>
            <a className="header-contact" href="#contact">{locale === "fa" ? "در تماس باش" : "Get in touch"} <ArrowIcon rtl={rtl} /></a>
          </div>
        </Container>
      </header>

      <section className="hero">
        <div className="hero-glow" />
        <Container className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="hero-description">{t.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#products">{t.primaryCta}<ArrowIcon rtl={rtl} /></a>
              <a className="button button-quiet" href="#story">{t.secondaryCta}</a>
            </div>
            <div className="hero-footnote"><span className="status-dot" />{t.note}</div>
          </div>
          <div className="hero-art" aria-label="RK Audio Spider speaker visual">
            <div className="art-ring ring-one" />
            <div className="art-ring ring-two" />
            <div className="art-number">02</div>
            <div className="art-placeholder">
              <div className="spider-symbol"><span /><span /><span /><span /><span /><span /><span /><span /><i /></div>
              <div className="art-label">SPIDER SERIES <b>•</b> RK AUDIO</div>
            </div>
            <div className="art-caption"><span>FIG. 01</span><span>FORM / SOUND / FEELING</span></div>
          </div>
        </Container>
        <div className="hero-bottom-line"><Container><span>RK AUDIO / EST. FOR THE LISTENER</span><span>DESIGN MEETS SOUND&nbsp; ↘</span></Container></div>
      </section>

      <section className="intro-section" id="story">
        <Container className="intro-grid">
          <p className="section-kicker"><span>01</span> / {t.introLabel}</p>
          <div><h2>{t.introTitle}</h2><p className="section-copy">{t.introText}</p></div>
          <div className="intro-stamp"><span>RK</span><small>DESIGNED<br />TO BE HEARD</small></div>
        </Container>
      </section>

      <section className="products-section" id="products">
        <Container>
          <div className="section-heading">
            <div><p className="section-kicker"><span>02</span> / {t.productsLabel}</p><h2>{t.productsTitle}</h2></div>
            <p className="section-copy">{t.productsText}</p>
          </div>
          <article className="product-card">
            <div className="product-visual">
              <div className="product-halo" />
              <div className="product-cabinet"><div className="cabinet-top" /><div className="cabinet-plate"><div className="mini-spider">✳</div><small>RK / SPIDER</small></div><div className="cabinet-speaker"><span /><i /></div><div className="cabinet-bottom">SPIDER 02</div></div>
              <span className="product-visual-index">02 — 01</span>
            </div>
            <div className="product-info">
              <div className="product-meta"><span>{t.productType}</span><span className="product-status">{t.productStatus}</span></div>
              <h3>{t.productName}</h3>
              <p>{t.productDescription}</p>
              <a className="text-link" href="#contact">{locale === "fa" ? "دربارهٔ این محصول" : "Explore the product"} <ArrowIcon rtl={rtl} /></a>
            </div>
          </article>
        </Container>
      </section>

      <section className="manifesto-section">
        <Container className="manifesto-inner">
          <p className="section-kicker"><span>03</span> / {t.storyLabel}</p>
          <h2>{t.storyTitle}</h2>
          <p>{t.storyText}</p>
          <div className="manifesto-mark">RK<span>•</span></div>
        </Container>
      </section>

      <footer className="site-footer" id="contact">
        <Container>
          <div className="footer-main"><div><p className="section-kicker"><span>04</span> / {t.contactLabel}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div><a className="footer-email" href="mailto:hello@rkaudio.example">hello@rkaudio.example <ArrowIcon rtl={rtl} /></a></div>
          <div className="footer-bottom"><Link href={`/${locale}`} className="brand"><span className="brand-mark">RK<span>•</span></span><span className="brand-sub">AUDIO</span></Link><span>{t.footer}</span><span>© {new Date().getFullYear()} RK AUDIO</span></div>
        </Container>
      </footer>
    </main>
  );
}
