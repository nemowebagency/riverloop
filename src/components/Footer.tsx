import type { FC } from "react";
import { ExternalLink, Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page py-10 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4 md:max-w-sm">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logoviola.webp"
                alt="Riverloop"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-slate-400">
              Riverloop unisce sviluppo software, formazione professionale e
              consulenza in un ecosistema digitale completo, pensato per aziende e
              talenti.
            </p>
            <div className="flex items-center gap-4 pt-2 flex-wrap">
              <img
                src="/iso9001.png"
                alt="ISO 9001"
                className="h-12 w-auto opacity-80"
              />
              <img
                src="/iso27001.webp"
                alt="ISO 27001"
                className="h-12 w-auto opacity-80"
              />
              <div className="flex items-center gap-2">
                <img
                  src="/regione.png"
                  alt="Regione"
                  className="h-12 w-auto opacity-80"
                />
                <p className="text-xs text-slate-500">
                  Ente di formazione
                  <br />
                  Accreditato dalla
                  <br />
                  Regione Sicilia
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-3 md:flex-1 md:justify-end">
            <div>
              <h3 className="mb-3 font-semibold text-slate-900">Navigazione</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link to="/" className="hover:text-pink-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/chi-siamo" className="hover:text-pink-600 transition-colors">
                    Chi Siamo
                  </Link>
                </li>
                <li>
                  <Link to="/sviluppo-software" className="hover:text-pink-600 transition-colors">
                    Sviluppo Software
                  </Link>
                </li>
                <li>
                  <Link to="/formazione" className="hover:text-pink-600 transition-colors">
                    Formazione
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-slate-900">Link utili</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link to="/termini-e-condizioni" className="hover:text-pink-600 transition-colors">
                    Termini e condizioni
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-pink-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-policy" className="hover:text-pink-600 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <a href="/sitemap.xml" className="hover:text-pink-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-slate-900">Contatti</h3>
              <div className="space-y-3 text-slate-400">
                <div className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:amministrazione@riverloop.it"
                    className="hover:text-pink-600 transition-colors text-sm"
                  >
                    amministrazione@riverloop.it
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p>Tel: +39 3517326560</p>
                    <p>Ufficio: 091 700 0014</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://www.instagram.com/riverloopsrl/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Riverloop"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:border-pink-400 hover:text-pink-600 transition-colors"
                >
                  <FaInstagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/riverloopsrl/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook Riverloop"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:border-pink-400 hover:text-pink-600 transition-colors"
                >
                  <FaFacebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/riverloop"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Riverloop"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:border-pink-400 hover:text-pink-600 transition-colors"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/393517326560"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Riverloop"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:border-pink-400 hover:text-pink-600 transition-colors"
                >
                  <FaWhatsapp className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-slate-200 pt-6 text-xs text-slate-500 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p>© 2026 Riverloop. Tutti i diritti riservati.</p>
          <p className="text-slate-600">
            P.IVA 07225950828
          </p>
        </div>
      </div>
    </footer>
  );
};



