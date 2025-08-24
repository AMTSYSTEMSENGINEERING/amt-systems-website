import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout commun
import { NavBar, Footer } from "./components";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ReviewsPage from "./pages/ReviewsPage"; 

export default function App() {
  const navbarData = {
    logo: { src: "/logo192.png", alt: "AMT Systems Engineering" },
    nav: [
      { label: "Home", href: "/" },              
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Reviews", href: "/reviews" },  
    ],
    languages: { current: "Français", options: ["English", "Français"], onSelect: (lng) => console.log(lng) },
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
    contact: { city: "Douala", country: "Cameroon", phone: "+237 6 98 98 74 85", email: "amtsystemsengineering@gmail.com" },
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<ReviewsPage />} />
        </Routes>

        <Footer {...footerData} />
      </div>
    </BrowserRouter>
  );
}
