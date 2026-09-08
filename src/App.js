import "./styles.css";
import React, { useState } from "react";
import { NavBar, ServicesGrid, Footer, Icon } from "./components";
import copy from "./i18n";

function App() {
  const page = window.location.pathname.replace(/\/$/, "") || "/";
  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem("amt-language");
    return savedLanguage === "English" || savedLanguage === "Français" ? savedLanguage : "Français";
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const t = copy[language] || copy.Français;

  const handleLanguageChange = (nextLanguage) => {
    if (nextLanguage !== "English" && nextLanguage !== "Français") return;
    window.localStorage.setItem("amt-language", nextLanguage);
    setLanguage(nextLanguage);
  };

  document.documentElement.lang = language === "English" ? "en" : "fr";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`${t.contact.mailSubject} - ${formData.company || t.contact.mailClient}`);
    const body = encodeURIComponent(
      `${t.contact.mailName}: ${formData.name}\n${t.contact.mailEmail}: ${formData.email}\n${t.contact.mailCompany}: ${formData.company}\n\n${t.contact.mailMessage}:\n${formData.message}`
    );
    window.location.href = `mailto:contact@amtsyseng.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const navbarData = {
    logo: { src: "/logo_new.jpeg", alt: "AMT Systems-Engineering SARL" },
    nav: [
      { label: t.nav.home, href: "/" },
      { label: t.nav.about, href: "/about" },
      {
        label: t.nav.services,
        items: [
          { label: t.nav.services, href: "/services" },
          { label: t.nav.expertises, href: "/expertises" },
        ],
      },
      {
        label: t.nav.method,
        items: [
          { label: t.nav.organisation, href: "/organisation" },
          { label: t.nav.valueMethods, href: "/methode" },
        ],
      },
      {
        label: t.nav.resources,
        items: [
          { label: t.nav.downloads, href: "/ressources" },
          { label: t.nav.gallery, href: "/galerie" },
        ],
      },
      { label: t.nav.contact, href: "/contact" },
    ],
    languages: { current: language, options: ["English", "Français"], onSelect: handleLanguageChange },
  };

  const services = [
    { icon: "systems", title: "Systems Engineering", description: t.services.systems, href: "/contact", cta: t.services.more },
    { icon: "data", title: "Data Engineering & Analytics", description: t.services.data, href: "/contact", cta: t.services.more },
    { icon: "web", title: "Web & Mobile App Design", description: t.services.web, href: "/contact", cta: t.services.more },
    { icon: "proto", title: "Prototyping & Reverse Engineering", description: t.services.proto, href: "/contact", cta: t.services.more },
    { icon: "supply", title: "Procurement & Supply Management", description: t.services.supply, href: "/contact", cta: t.services.more },
    { icon: "ai", title: "AI-Integrated Smart Solutions", description: t.services.ai, href: "/contact", cta: t.services.more },
  ];

  const valueCreationMethods = [
    { icon: "01", title: t.methods.listen, text: t.methods.listenText },
    { icon: "02", title: t.methods.frame, text: t.methods.frameText },
    { icon: "03", title: t.methods.design, text: t.methods.designText },
    { icon: "04", title: t.methods.proto, text: t.methods.protoText },
    { icon: "05", title: t.methods.deploy, text: t.methods.deployText },
    { icon: "06", title: t.methods.improve, text: t.methods.improveText },
  ];

  const footerData = {
    logo: { src: "/logo_new.jpeg", alt: "AMT Systems-Engineering SARL" },
    about: t.footer.about,
    columns: [
      {
        title: t.footer.expertise,
        links: [
          { label: t.footer.systems, href: "/expertises" },
          { label: t.footer.consulting, href: "/services" },
          { label: t.footer.digital, href: "/services" },
          { label: t.footer.projects, href: "/organisation" },
          { label: t.footer.training, href: "/contact" },
        ],
      },
      {
        title: t.footer.navigation,
        links: [
          { label: t.nav.about, href: "/about" },
          { label: t.nav.services, href: "/services" },
          { label: t.nav.method, href: "/methode" },
          { label: t.nav.resources, href: "/ressources" },
          { label: t.nav.contact, href: "/contact" },
        ],
      },
    ],
    contact: {
      city: "Douala, Bonamoussadi, Terminus",
      country: t.footer.country,
      phone: "+237 681 249 814",
      whatsapp: "+237681249814",
      email: "contact@amtsyseng.com",
      rccm: "CM-DLA-01-2025-B12-00010",
      niu: "M012517522439N",
      bank: "AFRILAND FIRST BANK",
      account: "10005-00022-10415851001-07",
    },
    socials: [
      { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
      { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
      { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    ],
    languages: { current: language, options: ["English", "Français"], onSelect: handleLanguageChange },
    privacy: t.footer.privacy,
    terms: t.footer.terms,
  };

  return (
    <div className="page" id="top">
      <NavBar {...navbarData} />

      <main data-page={page}>
        <section className="hero" data-page="/">
          <div className="hero__media">
            <img src="/image_1.jpg" alt={t.hero.alt} />
            <div className="hero__veil" />
          </div>
          <div className="hero__content">
            <span className="eyebrow eyebrow--light">Systems Engineering · Douala</span>
            <h1>{t.hero.title}</h1>
            <p>{t.hero.text}</p>
            <div className="hero__actions">
              <a href="/contact" className="btn btn--primary">{t.hero.cta}</a>
              <a href="/services" className="btn btn--ghost">{t.hero.secondary}</a>
            </div>
          </div>
        </section>

        <section className="stats-bar" data-page="/" aria-label={t.stats.aria}>
          <div className="container stats-bar__grid">
            <article className="stats-bar__item">
              <strong>Douala</strong>
              <span>{t.stats.local}</span>
            </article>
            <article className="stats-bar__item">
              <strong>{t.stats.expertise}</strong>
              <span>{t.stats.expertiseText}</span>
            </article>
            <article className="stats-bar__item">
              <strong>{t.stats.since}</strong>
              <span>{t.stats.sinceText}</span>
            </article>
            <article className="stats-bar__item">
              <strong>{t.stats.source}</strong>
              <span>{t.stats.sourceText}</span>
            </article>
          </div>
        </section>

        <section className="home-statement" data-page="/" aria-label={t.statement.aria}>
          <div className="container home-statement__inner">
            <div className="home-statement__globe" aria-hidden="true">
              <div className="home-statement__orbit home-statement__orbit--one" />
              <div className="home-statement__orbit home-statement__orbit--two" />
              <div className="home-statement__mark">
                <img src="/logo_new.jpeg" alt="" />
              </div>
            </div>
            <div className="home-statement__copy">
              <p className="home-statement__line home-statement__line--first">{t.statement.first}</p>
              <p className="home-statement__line home-statement__line--second">We do it for you, and we do it well.</p>
            </div>
          </div>
        </section>

        <section className="section about" id="about" data-page="/about">
          <div className="container">
            <div className="section-title section-title--left">
              <span className="eyebrow">{t.about.eyebrow}</span>
              <h2>{t.about.title}</h2>
            </div>
            <div className="about__intro-grid">
              <article className="panel about__challenges">
                <span className="about__kicker">{t.about.context}</span>
                <h3>{t.about.challengesTitle}</h3>
                <p>{t.about.challengesText}</p>
                <ul className="about__challenges-list">
                  <li>{t.about.challenge1}</li>
                  <li>{t.about.challenge2}</li>
                  <li>{t.about.challenge3}</li>
                </ul>
                <p>
                  <strong>{t.about.responseLead}</strong>{t.about.response}
                </p>
              </article>
              <div className="about__cards about__direction">
                <article className="info-card">
                  <span className="info-card__icon"><Icon name="vision" /></span>
                  <h3>{t.about.vision}</h3>
                  <p>
                    {t.about.visionTextBefore}<strong>{t.about.visionStrong}</strong>{t.about.visionTextAfter}
                  </p>
                </article>
                <article className="info-card">
                  <span className="info-card__icon"><Icon name="mission" /></span>
                  <h3>{t.about.mission}</h3>
                  <p>
                    {t.about.missionTextBefore}<strong>{t.about.missionStrong}</strong>{t.about.missionTextAfter}
                  </p>
                </article>
              </div>
            </div>
            <div className="about__pillars">
              <article className="panel">
                <span className="about__kicker">{t.about.principles}</span>
                <h3>{t.about.valuesTitle}</h3>
                <ul className="about__list">
                  <li><strong>{t.about.value1Lead}</strong>{t.about.value1}</li>
                  <li><strong>{t.about.value2Lead}</strong>{t.about.value2}</li>
                  <li><strong>{t.about.value3Lead}</strong>{t.about.value3}</li>
                  <li><strong>{t.about.value4Lead}</strong>{t.about.value4}</li>
                  <li><strong>{t.about.value5Lead}</strong>{t.about.value5}</li>
                </ul>
              </article>
              <article className="panel panel--accent">
                <span className="about__kicker">{t.about.means}</span>
                <h3>{t.about.skillsTitle}</h3>
                <p>{t.about.skillsText}</p>
                <div className="about__skills">
                  <span>{t.about.skillSystems}</span>
                  <span>{t.about.skillHw}</span>
                  <span>{t.about.skillData}</span>
                  <span>{t.about.skillMech}</span>
                  <span>{t.about.skillProjects}</span>
                  <span>{t.about.skillLeadership}</span>
                </div>
              </article>
            </div>
            <div className="about__team">
              <div className="about__team-heading">
                <span className="about__kicker">{t.about.teamKicker}</span>
                <h3>{t.about.teamTitle}</h3>
                <p>{t.about.teamText}</p>
              </div>
              <div className="about__team-grid">
                <article className="team-card">
                  <span className="team-card__number">01</span>
                  <h4>Executive Management</h4>
                  <p>{t.about.exec}</p>
                </article>
                <article className="team-card">
                  <span className="team-card__number">02</span>
                  <h4>CTO</h4>
                  <p>{t.about.cto}</p>
                </article>
                <article className="team-card">
                  <span className="team-card__number">03</span>
                  <h4>CMO</h4>
                  <p>{t.about.cmo}</p>
                </article>
                <article className="team-card">
                  <span className="team-card__number">04</span>
                  <h4>Project Leaders</h4>
                  <p>{t.about.leaders}</p>
                </article>
                <article className="team-card">
                  <span className="team-card__number">05</span>
                  <h4>Associates</h4>
                  <p>{t.about.associates}</p>
                </article>
                <article className="team-card">
                  <span className="team-card__number">06</span>
                  <h4>External Partners</h4>
                  <p>{t.about.partners}</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--soft" id="services" data-page="/services">
          <div className="container">
            <ServicesGrid
              services={services}
              eyebrow={t.services.eyebrow}
              title={t.services.title}
              intro={t.services.intro}
            />
          </div>
        </section>

        <section className="section expertises" id="expertises" data-page="/expertises">
          <div className="container expertises__content">
            <div className="expertises__intro">
              <span className="eyebrow">{t.expertises.eyebrow}</span>
              <h2>{t.expertises.title}</h2>
              <p>{t.expertises.intro}</p>
            </div>
            <div className="expertises__list" aria-label={t.expertises.aria}>
              <article className="expertise-item">
                <span className="expertise-item__label">{t.expertises.systemsLabel}</span>
                <h3>{t.expertises.systemsTitle}</h3>
                <p>{t.expertises.systemsText}</p>
              </article>
              <article className="expertise-item">
                <span className="expertise-item__label">{t.expertises.digitalLabel}</span>
                <h3>{t.expertises.digitalTitle}</h3>
                <p>{t.expertises.digitalText}</p>
              </article>
              <article className="expertise-item">
                <span className="expertise-item__label">{t.expertises.dataLabel}</span>
                <h3>{t.expertises.dataTitle}</h3>
                <p>{t.expertises.dataText}</p>
              </article>
              <article className="expertise-item">
                <span className="expertise-item__label">{t.expertises.designLabel}</span>
                <h3>{t.expertises.designTitle}</h3>
                <p>{t.expertises.designText}</p>
              </article>
              <article className="expertise-item">
                <span className="expertise-item__label">{t.expertises.leadLabel}</span>
                <h3>{t.expertises.leadTitle}</h3>
                <p>{t.expertises.leadText}</p>
              </article>
              <article className="expertise-item">
                <span className="expertise-item__label">{t.expertises.impactLabel}</span>
                <h3>{t.expertises.impactTitle}</h3>
                <p>{t.expertises.impactText}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section projects" id="projects" data-page="/projets">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">{t.projects.eyebrow}</span>
              <h2>{t.projects.title}</h2>
            </div>
            <div className="coming-soon-placeholder">
              <span className="coming-soon-kicker">Portfolio</span>
              <h3>{t.projects.coming}</h3>
              <p>{t.projects.text}</p>
              <a href="/contact" className="btn btn--secondary">{t.projects.cta}</a>
            </div>
          </div>
        </section>

        <section className="section process" id="nos-procedes" data-page="/organisation">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">{t.organisation.eyebrow}</span>
              <h2>{t.organisation.title}</h2>
            </div>
            <p className="lede">{t.organisation.lede}</p>
            <div className="process-map" aria-label={t.organisation.aria}>
              <article className="process-map__zone process-map__zone--management">
                <span className="process-map__icon">{t.organisation.direction}</span>
                <h4>{t.organisation.exec}</h4>
                <p><strong>{t.organisation.execLead}</strong>{t.organisation.execText}</p>
              </article>
              <div className="process-map__connector" aria-hidden="true" />
              <article className="process-map__zone process-map__zone--acquisition">
                <span className="process-map__icon">{t.organisation.input}</span>
                <h4>{t.organisation.acquisition}</h4>
                <p>{t.organisation.acquisitionText}</p>
              </article>
              <div className="process-map__arrow" aria-hidden="true" />
              <article className="process-map__zone process-map__zone--development">
                <span className="process-map__icon">{t.organisation.delivery}</span>
                <h4>{t.organisation.development}</h4>
                <p>{t.organisation.developmentText}</p>
              </article>
              <div className="process-map__arrow" aria-hidden="true" />
              <article className="process-map__zone process-map__zone--delivery">
                <span className="process-map__icon">{t.organisation.output}</span>
                <h4>{t.organisation.marketing}</h4>
                <p>{t.organisation.marketingText}</p>
              </article>
            </div>
            <div className="process-map__support">
              <span className="process-map__support-label">{t.organisation.support}</span>
              <span>{t.organisation.hr}</span>
              <span>{t.organisation.quality}</span>
              <span>{t.organisation.accounting}</span>
              <span>{t.organisation.procurement}</span>
              <span>{t.organisation.it}</span>
            </div>
          </div>
        </section>

        <section className="section value-methods" id="creation-de-valeur" data-page="/methode">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">{t.methods.eyebrow}</span>
              <h2>{t.methods.title}</h2>
            </div>
            <p className="lede">{t.methods.lede}</p>
            <div className="value-methods__overview" aria-label="Customer centric approach">
              <span>{t.methods.listen}</span>
              <i aria-hidden="true" />
              <span>{t.methods.frame}</span>
              <i aria-hidden="true" />
              <span>{t.methods.design}</span>
              <i aria-hidden="true" />
              <span>{t.methods.proto}</span>
              <i aria-hidden="true" />
              <span>{t.methods.deploy}</span>
              <i aria-hidden="true" />
              <span>{t.methods.improve}</span>
            </div>
            <div className="value-methods__grid">
              {valueCreationMethods.map((method) => (
                <article className="value-method" key={method.icon}>
                  <span className="value-method__number">{method.icon}</span>
                  <h3>{method.title}</h3>
                  <p>{method.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section downloads" id="telechargements" data-page="/ressources">
          <div className="container downloads__layout">
            <div className="section-title section-title--left">
              <span className="eyebrow">{t.resources.eyebrow}</span>
              <h2>{t.resources.title}</h2>
              <p className="lede lede--left">{t.resources.lede}</p>
            </div>
            <article className="download-card">
              <span className="download-card__type">PDF</span>
              <h3>{t.resources.cardTitle}</h3>
              <p>{t.resources.cardText}</p>
              <a href="/AMT_bro_final.pdf" download className="btn btn--secondary">{t.resources.download}</a>
            </article>
          </div>
        </section>

        <section className="section gallery" id="photos" data-page="/galerie">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">{t.gallery.eyebrow}</span>
              <h2>{t.gallery.title}</h2>
            </div>
            <figure className="gallery__feature">
              <img src="/image_1.jpg" alt={t.gallery.alt} />
              <figcaption>
                <strong>{t.gallery.caption}</strong>
                <span>{t.gallery.captionText}</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section contact-wrap" id="contact" data-page="/contact">
          <div className="container contact-section">
            <div className="contact-section__info">
              <span className="eyebrow">{t.contact.eyebrow}</span>
              <h2>{t.contact.title}</h2>
              <p>{t.contact.text}</p>
              <ul className="contact-list">
                <li>
                  <span>{t.contact.location}</span>
                  {t.contact.locationValue}
                </li>
                <li>
                  <span>{t.contact.phone}</span>
                  <a href="tel:+237681249814">+237 681 249 814</a>
                </li>
                <li>
                  <span>WhatsApp</span>
                  <a href="https://wa.me/237681249814" target="_blank" rel="noreferrer">+237 681 249 814</a>
                </li>
                <li>
                  <span>Email</span>
                  <a href="mailto:contact@amtsyseng.com">contact@amtsyseng.com</a>
                </li>
              </ul>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <label className="field">
                  <span>{t.contact.name}</span>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
              </div>

              <label className="field">
                <span>{t.contact.company}</span>
                <input type="text" name="company" value={formData.company} onChange={handleChange} />
              </label>

              <label className="field">
                <span>{t.contact.message}</span>
                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
              </label>

              <button type="submit" className="btn btn--primary btn--full">{t.contact.submit}</button>
              {submitted && <p className="success-message">{t.contact.success}</p>}
            </form>
          </div>
        </section>
      </main>

      <Footer {...footerData} />
    </div>
  );
}

export default App;