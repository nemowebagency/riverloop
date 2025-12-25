import type { FC } from "react";
import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Chi Siamo", to: "/chi-siamo" },
  { label: "Formazione", to: "/formazione" },
  { label: "Sviluppo Software", to: "/sviluppo-software" },
  {
    label: "Esports",
    href: "https://esports.riverloop.it",
    external: true
  },
  { label: "Contattaci", to: "/contattaci", cta: true }
];

export const Navbar: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logoviola.webp"
            alt="Riverloop"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            if (item.cta) {
              return (
                <NavLink
                  key={item.label}
                  to={item.to ?? "/contattaci"}
                  className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              );
            }

            const baseClasses =
              "text-sm font-medium text-slate-600 hover:text-pink-600 transition-colors";

            return item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`${baseClasses} inline-flex items-center gap-1`}
              >
                {item.label}
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : (
              <NavLink
                key={item.label}
                to={item.to ?? "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-pink-600"
                      : "text-slate-600 hover:text-pink-600"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm shadow-slate-200 transition hover:border-riverloop-400 md:hidden"
          aria-label="Apri menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="container-page flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              if (item.cta) {
                return (
                  <NavLink
                    key={item.label}
                    to={item.to ?? "/contattaci"}
                    className="inline-flex w-full items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                );
              }

              const baseClasses =
                "flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-pink-600 transition-colors";

              return item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={baseClasses}
                >
                  <span>{item.label}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  className={({ isActive }) =>
                    `${baseClasses} ${isActive ? "text-pink-600 bg-slate-50" : ""}`
                  }
                  to={item.to ?? "/"}
                  onClick={() => setOpen(false)}
                >
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};


