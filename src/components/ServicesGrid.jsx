import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid({ services = [] }) {
  return (
    <section className="services">
      <div className="section-title">
        <span className="eyebrow">Nos services</span>
        <h2>Les expertises qui répondent à vos défis</h2>
      </div>
      <div className="services__head">
        <p>
          AMT propose une gamme complète de services d'ingénierie des systèmes et de transformation digitale. Nous aidons les organisations africaines à relever leurs défis par des solutions technologiques robustes, innovantes et adaptées au contexte local.
        </p>
      </div>
      <div className="services__grid">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />)
        )}
      </div>
    </section>
  );
}