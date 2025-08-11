  import React from "react";

export default function Footer({
  logo = { src: "", alt: "AMT Systems Engineering" },
  about,
  columns = [],
  contact = { city: "Douala", country: "Cameroon", phone: "+237 6 98 98 74 85", email: "amtsystemsengineering@gmail.com" },
  socials = [], // [{label, href}]
  languages = { options: ["English", "Français"], onSelect: () => {} },
  year = new Date().getFullYear(),
}) {
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
              <a key={i} href={s.href || "#"} className="footer__social" aria-label={s.label}>{s.label || "•"}</a>
            ))}
          </div>
          <hr className="footer__rule" />
        </div>

        {columns.map((col, i) => (
          <div key={i}>
            <h4 className="footer__title">{col.title}</h4>
            <ul className="footer__list">
              {col.links?.map((l, k) => (
                <li key={k}><a href={l.href || "#"}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="footer__title">Adress</h4>
          <ul className="footer__contact">
            <li>📍 {contact.city} - {contact.country}</li>
            <li>📞 {contact.phone}</li>
            <li>✉️ {contact.email}</li>
          </ul>
          <div className="footer__langs">
            {languages.options.map((lng) => (
              <button key={lng} className="footer__langbtn">{lng}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>©{year} <strong>AMT System Engineering</strong> is proudly Powered by <strong>AMT Team</strong></p>
        <div className="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}