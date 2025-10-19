export const getNavbarData = (t) => ({
  logo: { src: "/logo192.png", alt: "AMT Systems Engineering" },
  nav: [
    { label: t("navbar.home"), href: "/" },
    { label: t("navbar.about"), href: "/aboutus" },
    {
      label: "Services" || t("nav.services"), 
      href: "/services",
      items: [
        { label: "Our approach", href: "/services" },
        { label: "IT data services", href: "/services" },
        { label: "System - Engineering", href: "/services" },
        { label: "Technical procurement", href: "/services" },
        { label: "Projects", href: "/services" },
      ],
    },
    { label: t("navbar.contact"), href: "/contact" },
    { label: t("navbar.reviews"), href: "/reviews" },
    {
      label: "Galerie" || t("nav.gallery"), href: "/galerie",
      items: [
        { label: "Presse", href: "/galerie" },
        { label: "References", href: "/galerie" },
      ],
    },
  ],
});

export const getFooterData = (t) => ({
  logo: { src: "/logo192.png", alt: "AMT Systems Engineering" },
  about: "We do it for you and well",
  columns: [
    {
      links: [
        { label: "Impressum" },
      ],
    },
  ],
  contact: {
    city: "Douala",
    country: "Cameroon",
    phone: "+237 6 98 98 74 85",
    email: "amtsystemsengineering@gmail.com",
  },
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
  ],
});

export const getServices = (t) =>
  t("servicesTexts.items", { returnObjects: true });
