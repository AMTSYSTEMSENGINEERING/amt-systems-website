import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid({ services = [] }) {
  return (
    <section className="services">
      <div className="services__head">
        <h1>
          <strong>AMT „African Machinery Technologies“ Systems engineering SARL</strong>{" "}
          <span>is a company for technology solutions and services</span>, acting as a strategic and local partner for your business
        </h1>

        <p className="home-hero__line">
          We offer <strong>IT</strong>, <strong>Data</strong> and <strong>Procurement</strong> Services.
        </p>
        <p className="home-hero__line">
          We implement Systems‑Engineering approaches and deliver smart Prototypes
        </p>
        <p className="home-hero__line">
          We continuously strive for excellence in project management and stay focused on our customer satisfaction.
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