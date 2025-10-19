import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
        mapTitle: "Google Map",
        namePlaceholder: "Your name",
        emailPlaceholder: "Email",
        messagePlaceholder: "Message",
        send: "Send",
        sentOk: "Message sent successfully!",
        sentError: "An error occurred while sending.",

        common: {
            heroTitle: "Innovative Solutions for Your Business",
            heroDesc: "AMT Systems-Engineering SARL welcomes you to this page. Discover a privileged partner in the support, research, and implementation of technological solutions and products that meet your needs.",
            getStarted: "Get Started",
            brandAlt: "AMT Systems Engineering",
        },
        home: { page: "home" },
        service: { page: "service" },
        contact: { page: "contact" },
        about: {
            heroTitle: "Innovative Solutions for Your Business",
            heroDesc: "We offer a complete Web development service. We deliver across sectors in Africa.",
            teamTitle: "Our Team",
        },
        reviews: {
            heroH1: "Your feedback matters",
            heroP: "Share your experience with AMT Systems Engineering. Thank you!",
            leaveReview: "Leave a review",
            allReviews: "All reviews",
            empty: "No reviews yet.",
            filterBy: "Filter by rating:",
            sortBy: "Sort:",
            sortNew: "Newest",
            sortTop: "Top rated",
            countSuffix: "reviews"
        },
        navbar: {
            home: "Home",
            about: "About Us",
            services: "Services",
            contact: "Contact",
            reviews: "Reviews",
            },
            aboutSection: {
            title: "About Us",
            desc:
                "From brand development, website and application development, eCommerce solutions, Content Management Systems (CMS), Search Engine Optimization (SEO) and digital marketing.",
            cta: "Learn more",
            },
            aboutUs: {
            heading: "Reasons to choose AMT Systems-Engineering LLC as your partner",
            cards: {
                deliver_title: "Delivering products",
                deliver_desc: "Delivering products is important, but excellence means more than fulfilling customers' explicit needs.",
                innovate_title: "Innovations",
                innovate_desc: "Creating sustainable value requires more than a technical resolution of challenges.",
                pm_title: "Project Management",
                pm_desc: "To achieve this, AMT Systems-Engineering SARL stays attentive to the real challenges customers face in their ecosystem.",
                it_title: "IT Consulting",
                it_desc: "A customer-centric, user-focused approach that prioritizes service and tailored solutions for all stakeholders.",
            },
            },
            servicesTexts: {
            items: [
                {
                title: "IT Solutions and Data Services",
                desc:
                    "The services performed by AMT Systems-Engineering SARL offer high-quality solutions by:\n" +
                    "• Designing web platforms and mobile applications for optimal performance.\n" +
                    "• Creating visual identities and branding solutions.\n" +
                    "• Collecting, analyzing data and deriving strategic insights for your business.\n" +
                    "All tailored to fit the unique needs of your business.",
                },
                {
                title: "Systems-Engineering and Prototyping",
                desc:
                    "Many business partners face unique challenges requiring tailored solutions. AMT Systems Engineering SARL works closely with customers to develop local, highly customized solutions addressing their specific needs. Our services include:\n" +
                    "• systems engineering\n" +
                    "• mechanical and electronic design\n" +
                    "• rapid prototyping\n" +
                    "All those supported by expertise in advanced engineering methods and simulation techniques.",
                },
                {
                title: "Technical, industrial procurement and supplies",
                desc:
                    "As companies and institutions increasingly focus on core competencies, the demand for outsourcing secondary activities like spare-part procurement continues to rise. AMT Systems Engineering SARL offers these services to its customers. Connecting our business partners with potential suppliers or managing supplies on their behalf is a key aspect of our operations.",
                },
            ],
            }
        },
    },
  fr: {
    translation: {
      mapTitle: "Carte Google",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "E-mail",
      messagePlaceholder: "Message",
      send: "Envoyer",
      sentOk: "Message envoyé avec succès !",
      sentError: "Une erreur est survenue lors de l’envoi.",

      common: {
        heroTitle: "Des solutions innovantes pour votre entreprise",
        heroDesc: "AMT Systems-Engineering SARL vous souhaite la bienvenue sur cette page.Decouvrez ainsi un partenaire privilégié dans l‘accompagnement, la recherche et la realisation  des solutions et produits technologiques qui correpondent à votre besoin.",
        getStarted: "Commencer",
        brandAlt: "AMT Systems Engineering",
    },
        home: { page: "home" },
        service: { page: "service" },
        contact: { page: "contact" },
        about: {
            heroTitle: "Des solutions innovantes pour votre entreprise",
            heroDesc: "Nous offrons un service complet de développement Web. Nous livrons dans de nombreux secteurs en Afrique.",
            teamTitle: "Notre équipe",
        },
        reviews: {
            heroH1: "Vos avis comptent",
            heroP: "Partagez votre expérience avec AMT Systems Engineering. Merci !",
            leaveReview: "Laisser un avis",
            allReviews: "Tous les avis",
            empty: "Aucun avis pour le moment.",
            filterBy: "Filtrer par note :",
            sortBy: "Trier :",
            sortNew: "Plus récents",
            sortTop: "Mieux notés",
            countSuffix: "avis"
        },
        navbar: {
            home: "Accueil",
            about: "À propos",
            services: "Services",
            contact: "Contact",
            reviews: "Avis",
            },
            aboutSection: {
            title: "À propos",
            desc:
                "Du développement de marque au développement d’applications web, e-commerce, CMS, SEO et marketing digital.",
            cta: "En savoir plus",
            },
            aboutUs: {
            heading: "Raisons pour lesquelles choisirs AMT Systems-Engineering SARL comme partenaire",
            cards: {
                deliver_title: "Livraison de produits",
                deliver_desc: "Livrer des produits est essentiel, mais l’excellence va au-delà des besoins explicites du client.",
                innovate_title: "Innovations",
                innovate_desc: "Créer de la valeur durable exige plus qu’une simple réponse technique.",
                pm_title: "Gestion de projet",
                pm_desc: "Pour y parvenir, AMT Systems-Engineering SARL reste à l’écoute des enjeux réels de ses clients.",
                it_title: "Conseil IT",
                it_desc: "Une approche centrée client et orientée usages, avec des solutions sur mesure pour tous les acteurs.",
            },
            },
            servicesTexts: {
            items: [
                {
                title: "Solutions IT et services de données",
                desc:
                    "Les services réalisés par AMT Systems-Engineering SARL offrent des solutions de haute qualité en :\n" +
                    "• Conception de plateformes web et d’applications mobiles pour des performances optimales.\n" +
                    "• Création d’identités visuelles et de solutions de branding.\n" +
                    "• Collecte et analyse des données afin de dégager des insights stratégiques pour votre entreprise.\n" +
                    "Le tout, entièrement adapté aux besoins uniques de votre activité.",
                },
                {
                title: "Ingénierie des systèmes et prototypage",
                desc:
                    "De nombreux partenaires rencontrent des défis spécifiques nécessitant des solutions sur mesure. AMT Systems Engineering SARL travaille en étroite collaboration avec ses clients pour développer des solutions locales, hautement personnalisées, répondant à leurs besoins. Nos services incluent :\n" +
                    "• ingénierie des systèmes\n" +
                    "• conception mécanique et électronique\n" +
                    "• prototypage rapide\n" +
                    "Le tout soutenu par une expertise en méthodes d’ingénierie avancées et en techniques de simulation.",
                },
                {
                title: "Approvisionnement technique et industriel, et fournitures",
                desc:
                    "À mesure que les entreprises et institutions se concentrent sur leurs compétences clés, l’externalisation des activités secondaires — comme l’approvisionnement en pièces de rechange — progresse. AMT Systems Engineering SARL propose ces services : mise en relation de nos partenaires avec des fournisseurs potentiels ou gestion des fournitures en leur nom, un volet essentiel de nos opérations.",
                },
            ],
            }

    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("lng") || "fr", // par défaut FR, et persiste le choix
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
