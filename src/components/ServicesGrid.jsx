import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid({
  services = [],
  eyebrow = "Nos services",
  title = "Les expertises qui répondent à vos défis",
  intro = "AMT propose une gamme complète de services d'ingénierie des systèmes et de transformation digitale. Nous aidons les organisations africaines à relever leurs défis par des solutions technologiques robustes, innovantes et adaptées au contexte local.",
}) {
  return (
    <section className="services">
      <div className="section-title">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <div className="services__head">
        <p>{intro}</p>
      </div>
      <div className="services__grid">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />)
        )}
      </div>
    </section>
  );
}