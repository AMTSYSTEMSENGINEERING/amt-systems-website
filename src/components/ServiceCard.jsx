import React from "react";
import Icon from "./Icon";

export default function ServiceCard({ icon = "systems", title, description, href = "#" }) {
  return (
    <article className="card">
      <div className="card__icon" aria-hidden="true">
        <Icon name={icon} />
      </div>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{description}</p>
      <a className="card__cta" href={href}>En savoir plus</a>
    </article>
  );
}