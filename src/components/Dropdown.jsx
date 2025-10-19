import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Dropdown({ label, items = [], align = "left" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <div className="dd" ref={ref}>
      <button className="dd__btn" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{label}</span>
        <span className={`dd__chev ${open ? "dd__chev--up" : ""}`}>▾</span>
      </button>

      {open && (
        <ul className={`dd__menu ${align === "right" ? "dd__menu--right" : ""}`} role="menu">
          {items.map((it, i) => {
            const href = it.href || "#";
            const isInternal = typeof href === "string" && href.startsWith("/");
            return (
              <li key={i} role="none">
                {isInternal ? (
                  <NavLink
                    to={href}
                    role="menuitem"
                    className="dd__item"
                    onClick={handleClick}
                  >
                    {it.label}
                  </NavLink>
                ) : (
                  <a
                    role="menuitem"
                    className="dd__item"
                    href={href}
                    onClick={handleClick}
                    target={it.external ? "_blank" : undefined}
                    rel={it.external ? "noreferrer noopener" : undefined}
                  >
                    {it.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
