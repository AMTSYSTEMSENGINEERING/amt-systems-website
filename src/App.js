import './styles.css';
import React, { useEffect, useState } from "react";
import { NavBar, ServicesGrid, Footer, Icon } from "./components";

const englishTranslations = {
  "Accueil": "Home", "À propos": "About", "Méthode": "Approach", "Notre organisation": "Our organization",
  "Méthodes de création de valeur": "Value creation methods", "Ressources": "Resources", "Téléchargements": "Downloads",
  "Galerie": "Gallery", "Contact": "Contact", "Nous contacter": "Contact us", "Langue": "Language",
  "Ingénierie des systèmes au service de votre entreprise et de votre projet.": "Systems engineering for your business and your project.",
  "Depuis 2024, AMT Systems-Engineering SARL accompagne les entreprises, institutions et jeunes entrepreneurs dans la conception et le déploiement de solutions technologiques utiles à l’émergence locale.": "Since 2024, AMT Systems-Engineering SARL has supported companies, institutions and young entrepreneurs in designing and deploying technology solutions that contribute to local development.",
  "Comprendre les défis, développer les compétences et construire des solutions utiles à l’Afrique.": "Understand challenges, develop skills and build solutions that serve Africa.",
  "L’Afrique subsaharienne doit accélérer sa transformation tout en répondant à des besoins industriels, sociaux et économiques complexes.": "Sub-Saharan Africa must accelerate its transformation while addressing complex industrial, social and economic needs.",
  "AMT répond": "AMT responds", "par une approche intégrée : transformer les besoins en solutions et créer un pont": "through an integrated approach: turning needs into solutions and creating a bridge",
  "entre savoirs académiques, expertise locale et bonnes pratiques internationales.": "between academic knowledge, local expertise and international best practices.",
  "Positionner le continent africain comme": "Position the African continent as", "en faisant de l’ingénierie": "by making systems engineering",
  "des systèmes un moteur de transformation.": "a driver of transformation.", "adaptées au contexte africain,": "adapted to the African context,", "avec une expertise locale.": "with local expertise.",
  "Innovation": "Innovation", "utile et adaptée au contexte local": "useful and adapted to local realities", "Excellence": "Excellence", "rigueur et fiabilité": "rigor and reliability",
  "Intégrité": "Integrity", "et responsabilité": "and responsibility", "Collaboration": "Collaboration", "et transmission des savoirs": "and knowledge sharing", "Impact durable": "Sustainable impact", "et développement inclusif": "and inclusive development",
  "Ingénierie des systèmes": "Systems engineering", "Hardware & software": "Hardware & software", "Data & IA": "Data & AI", "Mécanique": "Mechanical engineering", "Projets": "Projects", "Leadership": "Leadership",
  "Systems Engineering": "Systems Engineering", "Ingénierie complète : exigences, architecture hardware/software, vérification et validation. Conception robuste de systèmes complexes.": "End-to-end engineering: requirements, hardware/software architecture, verification and validation. Robust design for complex systems.",
  "Acquisition, transformation, analyse et modélisation des données pour éclairer les opérations et les décisions stratégiques.": "Data acquisition, transformation, analysis and modeling to inform operations and strategic decisions.",
  "Applications web, mobiles et embarquées conçues pour vos processus métier et l’expérience de vos utilisateurs.": "Web, mobile and embedded applications designed for your business processes and user experience.",
  "Modélisation CAD, impression 3D, scan 3D, layout hardware et prototypage PCB. De l’idée au démonstrateur technique.": "CAD modeling, 3D printing, 3D scanning, hardware layout and PCB prototyping. From idea to technical demonstrator.",
  "Identification des besoins, gestion des fournisseurs et optimisation de la chaîne d’approvisionnement, avec un réseau d’associés.": "Requirements identification, supplier management and supply-chain optimization through a network of associates.",
  "Écosystème intégré : hardware, software, mécanique et intelligence artificielle, livré depuis une seule source.": "An integrated ecosystem of hardware, software, mechanics and artificial intelligence, delivered from a single source.",
  "AMT associe l'ingénierie des systèmes, le développement hardware et software, l'analyse de données, l'intelligence artificielle et l'ingénierie mécanique. Cette expertise multidisciplinaire nous permet de concevoir, réaliser et accompagner des solutions adaptées aux besoins concrets de nos clients.": "AMT combines systems engineering, hardware and software development, data analysis, artificial intelligence and mechanical engineering. This multidisciplinary expertise allows us to design, build and support solutions adapted to our clients' concrete needs.",
  "Analyse des exigences, architecture, vérification et validation de systèmes complexes.": "Requirements analysis, architecture, verification and validation of complex systems.", "Conception d'applications, systèmes embarqués, interfaces et composants électroniques.": "Design of applications, embedded systems, interfaces and electronic components.", "Acquisition, modélisation et valorisation des données pour éclairer la décision.": "Data acquisition, modeling and use to inform decisions.", "Modélisation, prototypage et intégration des éléments matériels dans la solution finale.": "Modeling, prototyping and integration of hardware into the final solution.", "Organisation, suivi et coordination pour faire progresser chaque projet avec rigueur.": "Organization, monitoring and coordination to move every project forward with rigor.", "Mobilisation des talents et création de valeur durable au sein des organisations.": "Mobilizing talent and creating lasting value within organizations.",
  "Nos projets de référence seront bientôt présentés ici : transformations numériques, innovations industrielles et déploiements technologiques.": "Our reference projects will be presented here soon: digital transformations, industrial innovations and technology deployments.",
  "Une organisation qui relie le pilotage, la relation client, la réalisation et les fonctions support autour d’un même objectif : livrer une solution utile et fiable.": "An organization that connects leadership, client relationships, delivery and support functions around one goal: delivering a useful and reliable solution.",
  "Stratégie": "Strategy", "finances et administration au service de l’ensemble de l’organisation.": "finance and administration serving the entire organization.", "Recueillir le besoin, comprendre le contexte et établir la relation avec le client.": "Gather the need, understand the context and build the client relationship.", "Concevoir, réaliser, vérifier et améliorer les solutions tout au long du projet.": "Design, build, verify and improve solutions throughout the project.", "Livrer la solution, accompagner son appropriation et maintenir la relation client.": "Deliver the solution, support its adoption and maintain the client relationship.",
  "Notre approche centrée client transforme un besoin réel en solution mesurable. Chaque étape alimente la suivante et les retours du terrain nourrissent l’amélioration continue.": "Our customer-centered approach turns a real need into a measurable solution. Each step informs the next, while field feedback drives continuous improvement.",
  "Consultez notre brochure pour découvrir la vision, les services et la démarche de création de valeur d’AMT.": "Read our brochure to discover AMT's vision, services and value creation approach.", "Présentation de l’entreprise, des expertises et de notre méthode de travail.": "An overview of the company, our expertise and our working method.", "Télécharger la brochure": "Download the brochure", "Ingénierie, prototypage et solutions numériques depuis Douala.": "Engineering, prototyping and digital solutions from Douala.",
  "Nous accompagnons les entreprises, institutions et jeunes talents dans la création de solutions technologiques adaptées à leur contexte et à leurs ambitions de croissance.": "We support companies, institutions and young talents in creating technology solutions adapted to their context and growth ambitions.", "Douala, Bonamoussadi, Terminus, Cameroun": "Douala, Bonamoussadi, Terminus, Cameroon", "Votre message a été préparé dans votre client email. Vous pouvez l’envoyer directement.": "Your message has been prepared in your email client. You can send it directly.",
  "Découvrir nos services": "Explore our services", "Ancrage local, Cameroun": "Local roots, Cameroon", "6 expertises": "6 areas of expertise",
  "Depuis 2024": "Since 2024", "Innovation utile et mesurable": "Useful, measurable innovation", "1 source": "One source",
  "De l’idée au déploiement": "From idea to deployment", "Systèmes, data, software, hardware": "Systems, data, software, hardware",
  "Des solutions locales pour un besoin local.": "Local solutions for local needs.", "Engagement AMT Systems-Engineering": "AMT Systems-Engineering commitment",
  "Le contexte": "The context", "Les défis de l’Afrique subsaharienne": "The challenges of sub-Saharan Africa",
  "Renforcer les compétences locales": "Strengthen local skills", "Adapter les technologies au terrain": "Adapt technologies to local realities", "Relier innovation et développement durable": "Connect innovation and sustainable development",
  "Notre vision": "Our vision", "Notre mission": "Our mission", "leader technologique": "technology leader", "solutions robustes et innovantes": "robust and innovative solutions",
  "Nos repères": "Our principles", "Les valeurs qui nous guident": "The values that guide us", "Les moyens d’agir": "Our capabilities", "Les compétences au service de la mission": "Skills serving the mission",
  "Notre force collective": "Our collective strength", "Une équipe au croisement de plusieurs expertises": "A team at the intersection of several areas of expertise",
  "Nos expertises": "Our expertise", "Des capacités complémentaires pour des solutions intégrées.": "Complementary capabilities for integrated solutions.",
  "Des missions structurées pour créer de la valeur durable.": "Structured engagements that create lasting value.", "Études de cas à venir": "Case studies coming soon", "Discutons de votre projet": "Let's discuss your project",
  "Nos procédés": "Our processes", "Management exécutif": "Executive management", "Réalisation": "Delivery", "Développement": "Development", "Sortie": "Output", "Marketing & livraison": "Marketing & delivery", "Direction": "Leadership", "Entrée": "Input",
  "Fonctions support & transverses": "Support and cross-functional functions", "Ressources humaines": "Human resources", "Contrôle qualité": "Quality control", "Comptabilité & inventaire": "Accounting & inventory", "Achats": "Procurement", "IT, administration & partenaires": "IT, administration & partners",
  "Écouter": "Listen", "Cadrer": "Frame", "Concevoir": "Design", "Prototyper": "Prototype", "Déployer": "Deploy", "Améliorer": "Improve",
  "L’équipe au travail": "The team at work", "Conception collaborative": "Collaborative design", "Construisons ensemble des solutions utiles et durables.": "Let's build useful and sustainable solutions together.",
  "Localisation": "Location", "Téléphone": "Phone", "Nom": "Name", "Entreprise": "Company", "Message": "Message", "Envoyer ma demande": "Send my request", "Confidentialité": "Privacy", "Conditions": "Terms"
};

function translatePage(language) {
  document.documentElement.lang = language === "English" ? "en" : "fr";
  if (language !== "English") return;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let node;
  while ((node = walker.nextNode())) textNodes.push(node);
  textNodes.forEach((textNode) => {
    const trimmed = textNode.nodeValue.trim();
    if (englishTranslations[trimmed]) textNode.nodeValue = textNode.nodeValue.replace(trimmed, englishTranslations[trimmed]);
  });
}

function App() {
  const page = window.location.pathname.replace(/\/$/, "") || "/";
  const [language, setLanguage] = useState("Français");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    translatePage(language);
  }, [language]);

  const handleLanguageChange = (nextLanguage) => setLanguage(nextLanguage);

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
      { label: "Accueil", href: "/" },
      { label: "À propos", href: "/about" },
      {
        label: "Services",
        items: [
          { label: "Services", href: "/services" },
          { label: "Expertises", href: "/expertises" },
        ],
      },
      {
        label: "Méthode",
        items: [
          { label: "Notre organisation", href: "/organisation" },
          { label: "Méthodes de création de valeur", href: "/methode" },
        ],
      },
      {
        label: "Ressources",
        items: [
          { label: "Téléchargements", href: "/ressources" },
          { label: "Galerie", href: "/galerie" },
        ],
      },
      { label: "Contact", href: "/contact" },
    ],
    languages: { current: language, options: ["English", "Français"], onSelect: handleLanguageChange },
  };

  const services = [
    {
      icon: "systems",
      title: "Systems Engineering",
      description:
        "Ingénierie complète : exigences, architecture hardware/software, vérification et validation. Conception robuste de systèmes complexes.",
      href: "/contact",
    },
    {
      icon: "data",
      title: "Data Engineering & Analytics",
      description:
        "Acquisition, transformation, analyse et modélisation des données pour éclairer les opérations et les décisions stratégiques.",
      href: "/contact",
    },
    {
      icon: "web",
      title: "Web & Mobile App Design",
      description:
        "Applications web, mobiles et embarquées conçues pour vos processus métier et l’expérience de vos utilisateurs.",
      href: "/contact",
    },
    {
      icon: "proto",
      title: "Prototyping & Reverse Engineering",
      description:
        "Modélisation CAD, impression 3D, scan 3D, layout hardware et prototypage PCB. De l’idée au démonstrateur technique.",
      href: "/contact",
    },
    {
      icon: "supply",
      title: "Procurement & Supply Management",
      description:
        "Identification des besoins, gestion des fournisseurs et optimisation de la chaîne d’approvisionnement, avec un réseau d’associés.",
      href: "/contact",
    },
    {
      icon: "ai",
      title: "AI-Integrated Smart Solutions",
      description:
        "Écosystème intégré : hardware, software, mécanique et intelligence artificielle, livré depuis une seule source.",
      href: "/contact",
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
          { label: "Ingénierie de systèmes", href: "/expertises" },
          { label: "Conseil stratégique", href: "/services" },
          { label: "Solutions numériques", href: "/services" },
          { label: "Pilotage de projets", href: "/organisation" },
          { label: "Formation et accompagnement", href: "/contact" },
        ],
      },
      {
        title: "Navigation",
        links: [
          { label: "À propos", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Méthode", href: "/methode" },
          { label: "Ressources", href: "/ressources" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
    contact: {
      city: "Douala, Bonamoussadi, Terminus",
      country: "Cameroun",
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
    languages: { options: ["English", "Français"], onSelect: handleLanguageChange },
  };

  return (
    <div className="page" id="top">
      <NavBar {...navbarData} />

      <main data-page={page}>
        <section className="hero" data-page="/">
          <div className="hero__media">
            <img src="/image_1.jpg" alt="Équipe AMT Systems-Engineering en session de conception" />
            <div className="hero__veil" />
          </div>
          <div className="hero__content">
            <span className="eyebrow eyebrow--light">Systems Engineering · Douala</span>
            <h1>Ingénierie des systèmes au service de votre entreprise et de votre projet.</h1>
            <p>
              Depuis 2024, AMT Systems-Engineering SARL accompagne les entreprises, institutions et jeunes entrepreneurs
              dans la conception et le déploiement de solutions technologiques utiles à l’émergence locale.
            </p>
            <div className="hero__actions">
              <a href="/contact" className="btn btn--primary">Nous contacter</a>
              <a href="/services" className="btn btn--ghost">Découvrir nos services</a>
            </div>
          </div>
        </section>

        <section className="stats-bar" data-page="/" aria-label="AMT en chiffres">
          <div className="container stats-bar__grid">
            <article className="stats-bar__item">
              <strong>Douala</strong>
              <span>Ancrage local, Cameroun</span>
            </article>
            <article className="stats-bar__item">
              <strong>6 expertises</strong>
              <span>Systèmes, data, software, hardware</span>
            </article>
            <article className="stats-bar__item">
              <strong>Depuis 2024</strong>
              <span>Innovation utile et mesurable</span>
            </article>
            <article className="stats-bar__item">
              <strong>1 source</strong>
              <span>De l’idée au déploiement</span>
            </article>
          </div>
        </section>

        <section className="home-statement" data-page="/" aria-label="Engagement AMT Systems-Engineering">
          <div className="container home-statement__inner">
            <div className="home-statement__globe" aria-hidden="true">
              <div className="home-statement__orbit home-statement__orbit--one" />
              <div className="home-statement__orbit home-statement__orbit--two" />
              <div className="home-statement__mark">
                <img src="/logo_new.jpeg" alt="" />
              </div>
            </div>
            <div className="home-statement__copy">
              <p className="home-statement__line home-statement__line--first">Des solutions locales pour un besoin local.</p>
              <p className="home-statement__line home-statement__line--second">We do it for you, and we do it well.</p>
            </div>
          </div>
        </section>

        <section className="section about" id="about" data-page="/about">
          <div className="container">
            <div className="section-title section-title--left">
              <span className="eyebrow">À propos</span>
              <h2>Comprendre les défis, développer les compétences et construire des solutions utiles à l’Afrique.</h2>
            </div>
            <div className="about__intro-grid">
              <article className="panel about__challenges">
                <span className="about__kicker">Le contexte</span>
                <h3>Les défis de l’Afrique subsaharienne</h3>
                <p>
                  L’Afrique subsaharienne doit accélérer sa transformation tout en répondant à des besoins
                  industriels, sociaux et économiques complexes.
                </p>
                <ul className="about__challenges-list">
                  <li>Renforcer les compétences locales</li>
                  <li>Adapter les technologies au terrain</li>
                  <li>Relier innovation et développement durable</li>
                </ul>
                <p>
                  <strong>AMT répond</strong> par une approche intégrée : transformer les besoins en solutions et créer un pont
                  entre savoirs académiques, expertise locale et bonnes pratiques internationales.
                </p>
              </article>
              <div className="about__cards about__direction">
                <article className="info-card">
                  <span className="info-card__icon"><Icon name="vision" /></span>
                  <h3>Notre vision</h3>
                  <p>
                    Positionner le continent africain comme <strong>leader technologique</strong> en faisant de l’ingénierie
                    des systèmes un moteur de transformation.
                  </p>
                </article>
                <article className="info-card">
                  <span className="info-card__icon"><Icon name="mission" /></span>
                  <h3>Notre mission</h3>
                  <p>
                    Concevoir et déployer des <strong>solutions robustes et innovantes</strong> adaptées au contexte africain,
                    avec une expertise locale.
                  </p>
                </article>
              </div>
            </div>
            <div className="about__pillars">
              <article className="panel">
                <span className="about__kicker">Nos repères</span>
                <h3>Les valeurs qui nous guident</h3>
                <ul className="about__list">
                  <li><strong>Innovation</strong> utile et adaptée au contexte local</li>
                  <li><strong>Excellence</strong>, rigueur et fiabilité</li>
                  <li><strong>Intégrité</strong> et responsabilité</li>
                  <li><strong>Collaboration</strong> et transmission des savoirs</li>
                  <li><strong>Impact durable</strong> et développement inclusif</li>
                </ul>
              </article>
              <article className="panel panel--accent">
                <span className="about__kicker">Les moyens d’agir</span>
                <h3>Les compétences au service de la mission</h3>
                <p>Pour atteindre cette vision, AMT rassemble et développe des compétences complémentaires.</p>
                <div className="about__skills">
                  <span>Ingénierie des systèmes</span>
                  <span>Hardware & software</span>
                  <span>Data & IA</span>
                  <span>Mécanique</span>
                  <span>Projets</span>
                  <span>Leadership</span>
                </div>
              </article>
            </div>
            <div className="about__team">
              <div className="about__team-heading">
                <span className="about__kicker">Notre force collective</span>
                <h3>Une équipe au croisement de plusieurs expertises</h3>
                <p>AMT s’appuie sur des profils complémentaires pour transformer chaque besoin en solution cohérente, réalisable et durable.</p>
              </div>
              <div className="about__team-grid">
                <article className="team-card">
                  <span className="team-card__number">01</span>
                  <h4>Executive Management</h4>
                  <p>Stratégie, finances et administration d’AMT.</p>
                </article>
                <article className="team-card">
                  <span className="team-card__number">02</span>
                  <h4>CTO</h4>
                  <p>Laboratoire, innovation et choix technologiques.</p>
                </article>
                <article className="team-card">
                  <span className="team-card__number">03</span>
                  <h4>CMO</h4>
                  <p>Marketing, communication et activités commerciales.</p>
                </article>
                <article className="team-card">
                  <span className="team-card__number">04</span>
                  <h4>Project Leaders</h4>
                  <p>Conception et pilotage de projets de bout en bout.</p>
                </article>
                <article className="team-card">
                  <span className="team-card__number">05</span>
                  <h4>Associates</h4>
                  <p>Développeurs et étudiants mettant en œuvre les projets.</p>
                </article>
                <article className="team-card">
                  <span className="team-card__number">06</span>
                  <h4>External Partners</h4>
                  <p>Experts internationaux pour renforcer nos compétences.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--soft" id="services" data-page="/services">
          <div className="container">
            <ServicesGrid services={services} />
          </div>
        </section>

        <section className="section expertises" id="expertises" data-page="/expertises">
          <div className="container expertises__content">
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

        <section className="section projects" id="projects" data-page="/projets">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">Projets</span>
              <h2>Des missions structurées pour créer de la valeur durable.</h2>
            </div>
            <div className="coming-soon-placeholder">
              <span className="coming-soon-kicker">Portfolio</span>
              <h3>Études de cas à venir</h3>
              <p>
                Nos projets de référence seront bientôt présentés ici : transformations numériques, innovations industrielles
                et déploiements technologiques.
              </p>
              <a href="/contact" className="btn btn--secondary">Discutons de votre projet</a>
            </div>
          </div>
        </section>

        <section className="section process" id="nos-procedes" data-page="/organisation">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">Notre organisation</span>
              <h2>Nos procédés</h2>
            </div>
            <p className="lede">
              Une organisation qui relie le pilotage, la relation client, la réalisation et les fonctions support autour
              d’un même objectif : livrer une solution utile et fiable.
            </p>
            <div className="process-map" aria-label="Paysage des procédés AMT">
              <article className="process-map__zone process-map__zone--management">
                <span className="process-map__icon">Direction</span>
                <h4>Management exécutif</h4>
                <p><strong>Stratégie</strong>, finances et administration au service de l’ensemble de l’organisation.</p>
              </article>
              <div className="process-map__connector" aria-hidden="true" />
              <article className="process-map__zone process-map__zone--acquisition">
                <span className="process-map__icon">Entrée</span>
                <h4>Marketing & acquisition</h4>
                <p>Recueillir le besoin, comprendre le contexte et établir la relation avec le client.</p>
              </article>
              <div className="process-map__arrow" aria-hidden="true" />
              <article className="process-map__zone process-map__zone--development">
                <span className="process-map__icon">Réalisation</span>
                <h4>Développement</h4>
                <p>Concevoir, réaliser, vérifier et améliorer les solutions tout au long du projet.</p>
              </article>
              <div className="process-map__arrow" aria-hidden="true" />
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
          </div>
        </section>

        <section className="section value-methods" id="creation-de-valeur" data-page="/methode">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">Méthode</span>
              <h2>Méthodes de création de valeur</h2>
            </div>
            <p className="lede">
              Notre approche centrée client transforme un besoin réel en solution mesurable. Chaque étape alimente la suivante
              et les retours du terrain nourrissent l’amélioration continue.
            </p>
            <div className="value-methods__overview" aria-label="Customer centric approach">
              <span>Écouter</span>
              <i aria-hidden="true" />
              <span>Cadrer</span>
              <i aria-hidden="true" />
              <span>Concevoir</span>
              <i aria-hidden="true" />
              <span>Prototyper</span>
              <i aria-hidden="true" />
              <span>Déployer</span>
              <i aria-hidden="true" />
              <span>Améliorer</span>
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
              <span className="eyebrow">Ressources</span>
              <h2>Téléchargements</h2>
              <p className="lede lede--left">
                Consultez notre brochure pour découvrir la vision, les services et la démarche de création de valeur d’AMT.
              </p>
            </div>
            <article className="download-card">
              <span className="download-card__type">PDF</span>
              <h3>Brochure AMT Systems-Engineering</h3>
              <p>Présentation de l’entreprise, des expertises et de notre méthode de travail.</p>
              <a href="/AMT_bro_final.pdf" download className="btn btn--secondary">Télécharger la brochure</a>
            </article>
          </div>
        </section>

        <section className="section gallery" id="photos" data-page="/galerie">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">Galerie</span>
              <h2>L’équipe au travail</h2>
            </div>
            <figure className="gallery__feature">
              <img src="/image_1.jpg" alt="Session de travail AMT Systems-Engineering SARL" />
              <figcaption>
                <strong>Conception collaborative</strong>
                <span>Ingénierie, prototypage et solutions numériques depuis Douala.</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section contact-wrap" id="contact" data-page="/contact">
          <div className="container contact-section">
            <div className="contact-section__info">
              <span className="eyebrow">Contact</span>
              <h2>Construisons ensemble des solutions utiles et durables.</h2>
              <p>
                Nous accompagnons les entreprises, institutions et jeunes talents dans la création de solutions
                technologiques adaptées à leur contexte et à leurs ambitions de croissance.
              </p>
              <ul className="contact-list">
                <li>
                  <span>Localisation</span>
                  Douala, Bonamoussadi, Terminus, Cameroun
                </li>
                <li>
                  <span>Téléphone</span>
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
              {submitted && (
                <p className="success-message">
                  Votre message a été préparé dans votre client email. Vous pouvez l’envoyer directement.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <Footer {...footerData} />
    </div>
  );
}

export default App;
