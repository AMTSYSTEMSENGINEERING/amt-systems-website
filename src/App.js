import './App.css';
import React, { useState } from "react";
import { NavBar, ServicesGrid, Footer } from "./components";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Demande de contact - ${formData.company || "Client"}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nEntreprise: ${formData.company}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:contact@amtsyseng.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const navbarData = {
    logo: { src: "/logo_new.jpeg", alt: "AMT Systems-Engineering SARL" },
    nav: [
      { label: "Accueil", href: "#top" },
      { label: "À propos", href: "#about" },
      {
        label: "Services",
        items: [
          { label: "Services", href: "#services" },
          { label: "Expertises", href: "#expertises" },
        ],
      },
      {
        label: "Méthode",
        items: [
          { label: "Notre organisation", href: "#nos-procedes" },
          { label: "Méthodes de création de valeur", href: "#creation-de-valeur" },
        ],
      },
      {
        label: "Galerie",
        items: [
          { label: "Téléchargements", href: "#telechargements" },
          { label: "Photos", href: "#photos" },
        ],
      },
      { label: "Contact", href: "#contact" },
    ],
    languages: { current: "Français", options: ["English", "Français"], onSelect: (lng) => console.log(lng) },
  };

  const services = [
    {
      icon: "🔧",
      title: "Systems-Engineering Services",
      description:
        "Ingénierie complète : Requirement engineering, Architecture Design (HW/SW), Verification & Validation. Conception robuste et innovante de systèmes complexes.",
      href: "#contact",
    },
    {
      icon: "💾",
      title: "Data Engineering & Analytics",
      description:
        "Data acquisition & transformation, Data analysis, Data modeling. Transformez vos données en insights pour optimiser vos opérations et stratégies.",
      href: "#contact",
    },
    {
      icon: "🌐",
      title: "Web & Mobile App Design",
      description:
        "Mobile App Design, Embedded SW Design, Web App Design. Solutions numériques adaptées à vos besoins métier et utilisateurs.",
      href: "#contact",
    },
    {
      icon: "🔬",
      title: "Prototyping & Reverse Engineering",
      description:
        "CAD-modelling, 3D-Printing & 3D scanning, HW-Layout design & PCB prototyping. De l'idée au prototype en passant par l'innovation technologique.",
      href: "#contact",
    },
    {
      icon: "📦",
      title: "Procurement & Supply Management",
      description:
        "Customer needs identification, Supplier relationship management, Inventory & Supply Chain Optimization. Sourcing global avec associates mondiaux.",
      href: "#contact",
    },
    {
      icon: "🤖",
      title: "AI-Integrated Smart Solutions",
      description:
        "Cross-domain ecosystem unique : Hardware + Software + Mechanical + AI. Intégration IT pour solutions innovantes et intelligentes from a single source.",
      href: "#contact",
    },
  ];

  const galleryItems = [
    { title: "Brochure AMT", img: "/gallery-1.png", downloadFile: "/AMT_bro_final.pdf" },
    { title: "Systèmes & performance", img: "/gallery-2.png", downloadFile: "/AMT_bro_final.pdf" },
    { title: "Innovation locale", img: "/gallery-3.png", downloadFile: "/AMT_bro_final.pdf" },
  ];

  const projects = [
    {
      tag: "Transformation numérique",
      title: "Modernisation de systèmes d’information",
      description: "Refonte de l’architecture de gestion pour améliorer la performance, la fiabilité et la traçabilité des processus internes.",
      metric: "+38% de performance opérationnelle",
      image: "/gallery-1.png",
    },
    {
      tag: "Pilotage de projets",
      title: "Accompagnement stratégique d’une structure",
      description: "Mise en place d’un cadre de gouvernance et de suivi de projets pour optimiser la décision et accélérer la mise en œuvre.",
      metric: "Plan de mise en œuvre structuré",
      image: "/gallery-2.png",
    },
    {
      tag: "Innovation locale",
      title: "Solutions orientées développement durable",
      description: "Conception de modèles de solutions technologiques alignés sur les besoins de croissance locale, sociale et économique.",
      metric: "Impact socio-économique mesurable",
      image: "/gallery-3.png",
    },
  ];

  const valueCreationMethods = [
    { icon: "01", title: "Écouter", text: "Comprendre les attentes, contraintes et priorités des utilisateurs et des parties prenantes." },
    { icon: "02", title: "Cadrer", text: "Clarifier le besoin, les résultats attendus, le périmètre et les critères de réussite." },
    { icon: "03", title: "Concevoir", text: "Co-construire une solution réaliste, adaptée au contexte et techniquement robuste." },
    { icon: "04", title: "Prototyper", text: "Rendre la solution concrète rapidement afin de valider les choix essentiels." },
    { icon: "05", title: "Déployer", text: "Mettre en œuvre, accompagner les équipes et assurer une adoption opérationnelle." },
    { icon: "06", title: "Améliorer", text: "Mesurer les résultats, recueillir les retours et faire évoluer la solution durablement." },
  ];

  const footerData = {
    logo: { src: "/logo_new.jpeg", alt: "AMT Systems-Engineering SARL" },
    about:
      "AMT Systems-Engineering SARL est une structure basée à Douala, au Cameroun, engagée dans la promotion de l’ingénierie des systèmes comme facteur de développement, d’innovation et d’entrepreneuriat.",
    columns: [
      {
        title: "Expertises",
        links: [
          { label: "Ingénierie de systèmes" },
          { label: "Conseil stratégique" },
          { label: "Solutions numériques" },
          { label: "Pilotage de projets" },
          { label: "Formation et accompagnement" },
        ],
      },
      {
        title: "Focus",
        links: [
          { label: "Innovation locale" },
          { label: "Entrepreneuriat" },
          { label: "Performance durable" },
          { label: "Développement technologique" },
          { label: "Accompagnement institutionnel" },
        ],
      },
    ],
    contact: { city: "Douala", country: "Cameroun", phone: "+237 6 98 98 74 85", email: "contact@amtsyseng.com" },
    socials: [
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
    languages: { options: ["English", "Français"], onSelect: (lng) => console.log(lng) },
  };

  return (
    <div className="page" id="top">
      <NavBar {...navbarData} />

      <main className="landing">
        <section className="hero">
          <div className="hero__content">
            <h1>AMT Systems-Engineering SARL</h1>
            <img className="hero__banner" src="/image_1.jpg" alt="AMT Systems-Engineering SARL expertise" />
            <div className="hero__details-grid">
              <div className="hero__details-copy">
                <h2>Ingénierie des systèmes au service de votre entreprise et votre projet.</h2>
                <p>
                  Basée à Douala, au Cameroun, AMT Systems-Engineering SARL accompagne depuis 2024 les entreprises,
                  institutions et jeunes entrepreneurs dans la conception, l’innovation et la mise en œuvre de solutions 
                  technologiques utiles à l’émergence locale. </p>
                  <p>AMT Systems-Engineering SARL combine expertise en ingénierie de systèmes, solutions numériques et intégration 
                  IT pour créer des écosystèmes technologiques robustes, innovants et adaptés au contexte africain. de ce fait
                  elle se positionne  dans sa mission comme un partenaire de choix dans le landerneau industriel et technologique de l'afrique sub-saharienne
                </p>
              </div>
              <aside className="hero__info-box">
                <span className="hero__info-label">AMT en bref</span>
                <div className="hero__info-item">
                  <strong>Localisation</strong>
                  <span>Douala, Cameroun</span>
                </div>
                <div className="hero__info-item">
                  <strong>Expertises</strong>
                  <span>Systems Engineering, IT & Data, innovation</span>
                </div>
                <div className="hero__info-item">
                  <strong>Pour</strong>
                  <span>Entreprises, institutions et jeunes talents</span>
                </div>
                <a href="#contact" className="hero__info-link">Parlons de votre projet →</a>
              </aside>
            </div>
            <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">Nous contacter</a>
            <a href="#services" className="btn btn--secondary">Nos services</a>
            </div>
          </div>

        </section>

        <section className="about" id="about">
          <div className="section-title">
            <span className="eyebrow">À propos</span>
            <h2>Comprendre les défis, développer les compétences et construire des solutions utiles à l'Afrique.</h2>
          </div>
          <div className="about__intro-grid">
            <article className="about__text about__challenges">
              <span className="about__kicker">🌍 Le contexte</span>
              <h3>Les défis de l'Afrique subsaharienne</h3>
              <p>
                L'Afrique subsaharienne doit accélérer sa transformation tout en répondant à des besoins <strong>industriels, sociaux et économiques</strong> complexes.
              </p>
              <div className="about__challenges-list">
                <span>🏗️ Renforcer les compétences locales</span>
                <span>⚙️ Adapter les technologies au terrain</span>
                <span>♻️ Relier innovation & développement durable</span>
              </div>
              <p>
                <strong>AMT répond</strong> par une approche intégrée : transformer les besoins en solutions et créer un pont entre savoirs académiques, expertise locale et bonnes pratiques internationales.
              </p>
            </article>
            <div className="about__cards about__direction">
              <article className="info-card info-card--vision">
                <span className="info-card__icon">🎯 🌟</span>
                <h3>Notre vision</h3>
                <p>Positionner le continent africain comme <strong>leader technologique</strong> en faisant de l'ingénierie des systèmes un moteur de transformation.</p>
              </article>
              <article className="info-card info-card--mission">
                <span className="info-card__icon">🚀 💡</span>
                <h3>Notre mission</h3>
                <p>Concevoir et déployer des <strong>solutions robustes et innovantes</strong> adaptées au contexte africain, avec expertise locale.</p>
              </article>
            </div>
          </div>
          <div className="about__pillars">
            <article className="about__pillar">
              <span className="about__kicker">Nos repères</span>
              <h3>Les valeurs qui nous guident</h3>
              <ul className="about__list">
                <li>💚 <strong>Innovation</strong> utile et adaptée au contexte local</li>
                <li>✓ <strong>Excellence</strong>, rigueur et fiabilité</li>
                <li>🤝 <strong>Intégrité</strong> et responsabilité</li>
                <li>👥 <strong>Collaboration</strong> et transmission des savoirs</li>
                <li>🌱 <strong>Impact durable</strong> et développement inclusif</li>
              </ul>
            </article>
            <article className="about__pillar about__pillar--accent">
              <span className="about__kicker">Les moyens d'agir</span>
              <h3>Les compétences au service de la mission</h3>
              <p>Pour atteindre cette vision, AMT rassemble et développe des compétences complémentaires :</p>
              <div className="about__skills">
                <span>🔧 Ingénierie des systèmes</span>
                <span>💻 Hardware & software</span>
                <span>📊 Data & IA</span>
                <span>⚙️ Mécanique</span>
                <span>📋 Projets</span>
                <span>🎯 Leadership</span>
              </div>
            </article>
          </div>
          <div className="about__team">
            <div className="about__team-heading">
              <span className="about__kicker">Notre force collective</span>
              <h3>Une équipe au croisement de plusieurs expertises</h3>
              <p>AMT s'appuie sur des profils complémentaires pour transformer chaque besoin en solution cohérente, réalisable et durable.</p>
            </div>
            <div className="about__team-grid">
              <article className="team-card">
                <span className="team-card__icon">👔</span>
                <span className="team-card__number">01</span>
                <h4>Executive Management</h4>
                <p>Stratégie, finances et administration d'AMT.</p>
                <a href="#contact" className="team-card__link">Contacter →</a>
              </article>
              <article className="team-card">
                <span className="team-card__icon">🔬</span>
                <span className="team-card__number">02</span>
                <h4>CTO</h4>
                <p>Laboratoire, innovation et choix technologiques.</p>
                <a href="#contact" className="team-card__link">Contacter →</a>
              </article>
              <article className="team-card">
                <span className="team-card__icon">📢</span>
                <span className="team-card__number">03</span>
                <h4>CMO</h4>
                <p>Marketing, communication et activités commerciales.</p>
                <a href="#contact" className="team-card__link">Contacter →</a>
              </article>
              <article className="team-card">
                <span className="team-card__icon">🎯</span>
                <span className="team-card__number">04</span>
                <h4>Project Leaders</h4>
                <p>Conception et pilotage de projets de bout en bout.</p>
                <a href="#contact" className="team-card__link">Contacter →</a>
              </article>
              <article className="team-card">
                <span className="team-card__icon">💻</span>
                <span className="team-card__number">05</span>
                <h4>Associates</h4>
                <p>Développeurs et étudiants mettant en place les projets.</p>
                <a href="#contact" className="team-card__link">Contacter →</a>
              </article>
              <article className="team-card">
                <span className="team-card__icon">🌐</span>
                <span className="team-card__number">06</span>
                <h4>External Partners</h4>
                <p>Experts du monde entier pour renforcer nos compétences.</p>
                <a href="#contact" className="team-card__link">Contacter →</a>
              </article>
            </div>
          </div>
        </section>

        <section className="services-wrapper" id="services">
          <ServicesGrid services={services} />
        </section>

        <section className="expertises" id="expertises">
          <div className="expertises__content">
            <div className="expertises__intro">
              <span className="eyebrow">Nos expertises</span>
              <h2>Des capacités complémentaires pour des solutions intégrées.</h2>
              <p>
                AMT associe l'ingénierie des systèmes, le développement hardware et software, l'analyse de données,
                l'intelligence artificielle et l'ingénierie mécanique. Cette expertise multidisciplinaire nous permet
                de concevoir, réaliser et accompagner des solutions adaptées aux besoins concrets de nos clients.
              </p>
            </div>
            <div className="expertises__list" aria-label="Capacités AMT">
              <article className="expertise-item">
                <span className="expertise-item__label">Systèmes</span>
                <h3>Ingénierie des systèmes</h3>
                <p>Analyse des exigences, architecture, vérification et validation de systèmes complexes.</p>
              </article>
              <article className="expertise-item">
                <span className="expertise-item__label">Numérique</span>
                <h3>Hardware & software</h3>
                <p>Conception d'applications, systèmes embarqués, interfaces et composants électroniques.</p>
              </article>
              <article className="expertise-item">
                <span className="expertise-item__label">Données</span>
                <h3>Data & intelligence artificielle</h3>
                <p>Acquisition, modélisation et valorisation des données pour éclairer la décision.</p>
              </article>
              <article className="expertise-item">
                <span className="expertise-item__label">Conception</span>
                <h3>Ingénierie mécanique</h3>
                <p>Modélisation, prototypage et intégration des éléments matériels dans la solution finale.</p>
              </article>
              <article className="expertise-item">
                <span className="expertise-item__label">Pilotage</span>
                <h3>Gestion de projets</h3>
                <p>Organisation, suivi et coordination pour faire progresser chaque projet avec rigueur.</p>
              </article>
              <article className="expertise-item">
                <span className="expertise-item__label">Impact</span>
                <h3>Leadership & entrepreneuriat</h3>
                <p>Mobilisation des talents et création de valeur durable au sein des organisations.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="section-title">
            <span className="eyebrow">Projets</span>
            <h2>Des missions structurées pour créer de la valeur durable.</h2>
          </div>
          <div className="projects__grid">
            <div className="coming-soon-placeholder">
              <span className="coming-soon-icon">🚀</span>
              <h3>Coming Soon</h3>
              <p>Nos projets de référence seront très bientôt accessibles ici. Des transformations numériques, des innovations industrielles et des succès technologiques qui témoignent de notre expertise.</p>
              <a href="#contact" className="btn btn--secondary">Discutons de votre projet</a>
            </div>
          </div>
        </section>

        <section className="process" id="nos-procedes">
          <div className="section-title">
            <span className="eyebrow">Notre organisation</span>
            <h2>Nos procédés</h2>
          </div>
          <p className="process__intro">Une organisation qui relie le pilotage, la relation client, la réalisation et les fonctions support autour d'un même objectif : livrer une solution utile et fiable.</p>
          <div className="process-map" aria-label="Paysage des procédés AMT">
            <article className="process-map__zone process-map__zone--management">
              <span className="process-map__icon">Direction</span>
              <h4>Management exécutif</h4>
              <p><strong>Stratégie</strong>, finances et administration au service de l'ensemble de l'organisation.</p>
            </article>
            <div className="process-map__connector process-map__connector--management" aria-hidden="true">↓</div>
            <article className="process-map__zone process-map__zone--acquisition">
              <span className="process-map__icon">Entrée</span>
              <h4>Marketing & acquisition</h4>
              <p>Recueillir le besoin, comprendre le contexte et établir la relation avec le client.</p>
            </article>
            <div className="process-map__arrow process-map__arrow--input" aria-hidden="true">→</div>
            <article className="process-map__zone process-map__zone--development">
              <span className="process-map__icon">Réalisation</span>
              <h4>Développement</h4>
              <p>Concevoir, réaliser, vérifier et améliorer les solutions tout au long du projet.</p>
            </article>
            <div className="process-map__arrow process-map__arrow--output" aria-hidden="true">→</div>
            <article className="process-map__zone process-map__zone--delivery">
              <span className="process-map__icon">Sortie</span>
              <h4>Marketing & livraison</h4>
              <p>Livrer la solution, accompagner son appropriation et maintenir la relation client.</p>
            </article>
          </div>
          <div className="process-map__support">
            <span className="process-map__support-label">Fonctions support & transverses</span>
            <span>Ressources humaines</span>
            <span>Contrôle qualité</span>
            <span>Comptabilité & inventaire</span>
            <span>Achats</span>
            <span>IT, administration & partenaires</span>
          </div>
        </section>

        <section className="value-methods" id="creation-de-valeur">
          <div className="section-title">
            <span className="eyebrow">Méthode</span>
            <h2>Méthodes de création de valeur</h2>
          </div>
          <p className="value-methods__intro">Notre approche centrée client transforme un besoin réel en solution mesurable. Chaque étape alimente la suivante et les retours du terrain nourrissent l'amélioration continue.</p>
          <div className="value-methods__overview" aria-label="Customer centric approach">
            <span>Écouter</span><i aria-hidden="true">→</i><span>Cadrer</span><i aria-hidden="true">→</i><span>Concevoir</span><i aria-hidden="true">→</i><span>Prototyper</span><i aria-hidden="true">→</i><span>Déployer</span><i aria-hidden="true">→</i><span>Améliorer</span>
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
        </section>

        <section className="downloads" id="telechargements">
          <div className="section-title">
            <span className="eyebrow">Ressources</span>
            <h2>Téléchargements</h2>
          </div>
          <div className="downloads__grid">
            <article className="download-card">
              <span className="download-card__type">PDF</span>
              <h3>Brochure AMT Systems-Engineering</h3>
              <p>Découvrez notre vision, nos services, nos capacités et notre démarche de création de valeur.</p>
              <a href="/AMT_bro_final.pdf" download className="download-card__link">Télécharger la brochure</a>
            </article>
          </div>
        </section>

        <section className="gallery" id="photos">
          <div className="section-title">
            <span className="eyebrow">Galerie</span>
            <h2>Photos</h2>
          </div>
          <div className="gallery__grid">
            {galleryItems.map((item) => (
              <figure className="gallery__item" key={item.title}>
                <img src={item.img} alt={item.title} />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-section__info">
            <span className="eyebrow">Contact</span>
            <h2>Construisons ensemble des solutions utiles et durables.</h2>
            <p>
              Nous accompagnons les entreprises, institutions et jeunes talents dans la création de solutions technologiques adaptées à leur contexte et à leurs ambitions de croissance.
            </p>
            <ul className="contact-list">
              <li>📍 Douala, Cameroun</li>
              <li>📞 +237 6 98 98 74 85</li>
              <li>✉️ amtsystemsengineering@gmail.com</li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <label className="field">
                <span>Nom</span>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </label>
              <label className="field">
                <span>Email</span>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>
            </div>

            <label className="field">
              <span>Entreprise</span>
              <input type="text" name="company" value={formData.company} onChange={handleChange} />
            </label>

            <label className="field">
              <span>Message</span>
              <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
            </label>

            <button type="submit" className="btn btn--primary btn--full">Envoyer ma demande</button>
            {submitted && <p className="success-message">Votre message a été préparé dans votre client email. Vous pouvez l’envoyer directement.</p>}
          </form>
        </section>
      </main>

      <Footer {...footerData} />
    </div>
  );
}

export default App;
