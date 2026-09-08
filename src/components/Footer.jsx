import React from "react";
import Icon from "./Icon";

export default function Footer({
  logo = { src: "", alt: "AMT Systems-Engineering SARL" },
  about,
  columns = [],
  contact = { city: "Douala, Bonamoussadi, Terminus", country: "Cameroun", phone: "+237 681 249 814", whatsapp: "+237681249814", email: "contact@amtsyseng.com" },
  socials = [],
  languages = { options: ["English", "Français"], onSelect: () => {} },
  year = new Date().getFullYear(),
}) {
  const isEnglish = languages.current === "English";

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <div className="footer__brand">
            {logo?.src ? <img src={logo.src} alt={logo.alt} /> : <div className="footer__logo-fallback" />}
          </div>
          {about && <p className="footer__about">{about}</p>}
          <div className="footer__socials">
            {socials.map((s, i) => (
              <a key={i} href={s.href || "#top"} className="footer__social" aria-label={s.label} target="_blank" rel="noreferrer">
                <Icon name={s.icon || "web"} />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col, i) => (
          <div key={i}>
            <h4 className="footer__title">{col.title}</h4>
            <ul className="footer__list">
              {col.links?.map((l, k) => (
                <li key={k}><a href={l.href || "#top"}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="footer__title">{isEnglish ? "Contact" : "Contact"}</h4>
          <ul className="footer__contact">
            <li>{contact.city}, {contact.country}</li>
            <li><a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a></li>
            <li><a href={`https://wa.me/${contact.whatsapp?.replace("+", "") || contact.phone.replace(/\s/g, "").replace("+", "")}`} target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
          </ul>
          <div className="footer__langs">
            {languages.options.map((lng) => (
              <button key={lng} className="footer__langbtn" type="button" onClick={() => languages.onSelect(lng)}>{lng}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__company">
        <div>
          <span>RCCM</span>
          <strong>{contact.rccm}</strong>
        </div>
        <div>
          <span>{contact.bank}</span>
          <strong>{contact.account}</strong>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {year} AMT Systems-Engineering SARL</p>
        <div className="footer__legal">
          <a href="/contact">{isEnglish ? "Privacy" : "Confidentialité"}</a>
          <a href="/contact">{isEnglish ? "Terms" : "Conditions"}</a>
        </div>
      </div>
    </footer>
  );
}