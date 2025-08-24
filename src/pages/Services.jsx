import React from "react";
import { ServicesGrid } from "../components";

export default function Services() {
  const services = [
    { icon: "🖥️", title: "Website Creation", description: "Modern, fast and accessible websites.", href: "#" },
    { icon: "⚙️", title: "Custom Development", description: "Tailor‑made apps & integrations.", href: "#" },
    { icon: "🛒", title: "E‑Commerce", description: "Secure shops with smooth checkout.", href: "#" },
    { icon: "📱", title: "Mobile Apps", description: "iOS/Android cross‑platform apps.", href: "#" },
    { icon: "🚀", title: "PWAs", description: "Installable, offline‑ready web apps.", href: "#" },
    { icon: "🔌", title: "Web Portals", description: "Dashboards & multi‑tenant portals.", href: "#" },
  ];
  return <ServicesGrid services={services} />;
}
