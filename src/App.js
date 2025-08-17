// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Composants réutilisables
import { NavBar, ServicesGrid, Footer } from "./components";

// Page Avis
import ReviewsPage from "./pages/ReviewsPage";

function HomePage() {
  const services = [
    {
      icon: "🖥️",
      title: "Web & Mobile app",
      description:
        "If your site isn’t mobile-friendly or responsive, you're missing key traffic. We provide responsive web design and mobile app development services.",
      href: "#",
    },
    {
      icon: "📈",
      title: "SEO & Digital Marketing",
      description:
        "If you need to connect with your target audience, we have the digital marketing package for you! We deliver winning campaigns that integrate full SEO and PPC strategies.",
      href: "#",
    },
    {
      icon: "🛍️",
      title: "E-Commerce Platforms",
      description:
        "We're ready to create a cutting-edge, high performance, fully secure e-Commerce website for your business.",
      href: "#",
    },
  ];

  return <ServicesGrid services={services} />;
}

export default function App() {
  const navbarData = {
    logo: { src: "/logo192.png", alt: "AMT Systems Engineering" },
    nav: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "#" },
      {
        label: "Services",
        items: [
          { label: "Website Creation", href: "#" },
          { label: "Custom Website Development", href: "#" },
          { label: "Web Portal Development", href: "#" },
          { label: "Software Development", href: "#" },
        ],
      },
      { label: "Blog", items: [{ label: "Latest", href: "#" }] },
      { label: "Contact", href: "#" },
      // 🔥 Nouveau lien vers la page d’avis
      { label: "Reviews", href: "/reviews" },
    ],
    languages: {
      current: "Français",
      options: ["English", "Français"],
      onSelect: (lng) => console.log(lng),
    },
  };

  const footerData = {
    logo: { src: "/logo192.png", alt: "AMT Systems Engineering" },
    about:
      "At AMT, We boast of the best and most experienced team of professional website designers and developers. This is why we build websites that are not only beautiful but also responsive and Search Engine Friendly.",
    columns: [
      {
        title: "Web & Mobile App",
        links: [
          { label: "Website Creation" },
          { label: "Custom website Development" },
          { label: "Web Portal Development" },
          { label: "Software Development" },
          { label: "CMS Website Development" },
          { label: "Progressive Web Applications" },
          { label: "Mobile Applications Development" },
          { label: "E-Commerce Development" },
        ],
      },
      {
        title: "SEO & Digital Marketing",
        links: [
          { label: "Digital Marketing" },
          { label: "Local SEO Services" },
          { label: "Social Media Optimization" },
          { label: "Lead Generation" },
          { label: "Pay Per Click (PPC)" },
          { label: "Bulk SMS" },
          { label: "Branding And Design" },
          { label: "Corporate Identity" },
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
    languages: { options: ["English", "Français"], onSelect: (lng) => console.log(lng) },
  };

  return (
    <BrowserRouter>
      <div className="page">
        <NavBar {...navbarData} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
        </Routes>

        <Footer {...footerData} />
      </div>
    </BrowserRouter>
  );
}
