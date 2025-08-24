import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid({ services = [] }) {
  return (
    <section className="services">
      <div className="services__head">
        <h2>We are a strategic technology company in Cameroon<br className="br-hidden" /> focusing on real results</h2>
        <p>
          We offer a complete Web development Services. We have expertise and knowledge to deliver digital solutions to clients across a wide range of sectors in Africa
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