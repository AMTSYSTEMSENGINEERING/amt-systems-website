import React, { useState } from "react";
import Dropdown from "./Dropdown";

export default function NavBar({
  logo = { src: "", alt: "AMT Systems-Engineering SARL" },
  nav = [],
  languages = { current: "Français", options: ["English", "Français"], onSelect: () => {} },
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="/" aria-label={logo.alt}>
          {logo.src ? <img src={logo.src} alt={logo.alt} /> : <div className="nav__logo-fallback" />}
        </a>

        <nav className="nav__links nav__links--desktop">
          {nav.map((item, i) => (
            <div key={i} className="nav__linkwrap">
              {item.items ? (
                <Dropdown label={item.label} items={item.items} />
              ) : (
                <a className="nav__link" href={item.href || "#top"}>{item.label}</a>
              )}
            </div>
          ))}
          <Dropdown
            label={languages.current === "English" ? "EN" : "FR"}
            align="right"
            items={languages.options.map((lng) => ({ label: lng, value: lng, href: "#" }))}
            onSelect={languages.onSelect}
          />
          <a className="nav__cta" href="/contact">{languages.current === "English" ? "Contact us" : "Nous contacter"}</a>
        </nav>

        <button className="nav__burger" aria-label={languages.current === "English" ? "Toggle menu" : "Ouvrir le menu"} onClick={() => setOpen((v) => !v)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {nav.map((item, i) => (
            <div key={i} className="nav__mobile-group">
              {item.items ? (
                <details>
                  <summary className="nav__mobile-summary">{item.label}</summary>
                  <div className="nav__mobile-sub">
                    {item.items.map((sub, k) => (
                      <a key={k} className="nav__mobile-link" href={sub.href || "#top"} onClick={() => setOpen(false)}>{sub.label}</a>
                    ))}
                  </div>
                </details>
              ) : (
                <a className="nav__mobile-link" href={item.href || "#top"} onClick={() => setOpen(false)}>{item.label}</a>
              )}
            </div>
          ))}
          <a className="nav__cta nav__cta--mobile" href="/contact" onClick={() => setOpen(false)}>{languages.current === "English" ? "Contact us" : "Nous contacter"}</a>
          <div className="nav__mobile-langs">
            <div className="nav__mobile-langs-title">{languages.current === "English" ? "Language" : "Langue"}</div>
            {languages.options.map((lng) => (
              <button key={lng} type="button" className={`nav__mobile-lang ${lng === languages.current ? "is-active" : ""}`} onClick={() => languages.onSelect(lng)}>{lng}</button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}