import React from "react";
import { ServicesGrid } from "../components";

export default function Home() {
  const services = [
    {
      icon: "🖥️",
      title: "IT Solutions and Data Services",
      description:
        "The Services performed by AMT Systems‑Engineering SARL offer high‑quality solutions by: Designing Web platforms and Mobile Applications for Optimal Performance, Creating Visual Identities and Branding Solutions, Collecting, Analyzing Data and deriving strategic Insights for your business, All tailored to fit the unique needs of your business.",
      href: "#",
    },
    {
      icon: "📈",
      title: "Systems‑Engineering and Prototyping",
      description:
        "Many business partners face unique challenges requiring tailored solutions. AMT Systems Engineering SARL works closely with customers to develop local, highly customized solutions addressing their specific needs. Our services include: systems engineering, mechanical and electronic design, rapid prototyping. All those supported by expertise in advanced engineering methods and simulation techniques.",
      href: "#",
    },
    {
      icon: "🛍️",
      title: "Technical, industrial procurement and supplies",
      description:
        "As companies and institutions increasingly focus on core competencies, the demand for outsourcing secondary activities like spare part procurement continues to rise. AMT Systems Engineering SARL offers these services to its customers. Connecting our business partners with potential suppliers or managing supplies on their behalf is a key aspect of our operations.",
      href: "#",
    },
  ];

  return <ServicesGrid services={services} />;
}
