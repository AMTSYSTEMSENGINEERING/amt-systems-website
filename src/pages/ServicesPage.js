import React from "react";
import ServicesGrid from "../components/ServicesGrid";
import { services } from "../data/SiteData";

export default function HomePage() {
  return(
    <div>
      <ServicesGrid services={services} /> 
    </div>
  )
}