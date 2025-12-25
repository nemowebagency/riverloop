import type { FC, FormEvent } from "react";
import { SectionShell } from "@/components/SectionShell";
import { Mail, Phone, Building2 } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SEO } from "@/components/SEO";

const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // In un progetto reale qui potresti collegare un API o un servizio esterno
};

export const ContactPage: FC = () => {

  return (
    <>
      <SEO
        title="Contattaci - Riverloop | Richiedi Preventivo per Software, Formazione e Consulenza"
        description="Contatta Riverloop per software, formazione e consulenza. Operiamo in tutta Italia e all'estero. Email: amministrazione@riverloop.it | Tel: +39 3517326560 | Ufficio: 091 700 0014. Seguici su Instagram, Facebook, LinkedIn e WhatsApp."
        keywords="contatti Riverloop, preventivo software, preventivo formazione, consulenza digitale, contatti azienda, email Riverloop, telefono Riverloop"
        canonical="https://www.riverloop.it/contattaci"
        ogImage="https://www.riverloop.it/logoviola.webp"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(251,191,36,0.12),_transparent_60%)]" />
          <div className="absolute -right-40 top-10 h-64 w-64 rounded-full bg-gradient-to-br from-pink-400/40 via-pink-500/30 to-amber-300/40 blur-3xl" />
        </div>
        <div className="container-page relative flex flex-col items-center justify-center gap-6 py-12 md:py-16 text-center">
          <div className="max-w-3xl space-y-6">
            <span className="tag-pill">Contattaci</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Contattaci per software, formazione e consulenza
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Che tu stia cercando sviluppo software, percorsi formativi o consulenza digitale, il primo passo è una conversazione. Siamo qui per aiutarti a raggiungere i tuoi obiettivi.
            </p>
          </div>
        </div>
      </section>

      {/* Form e Contatti */}
      <SectionShell
        eyebrow="Scrivici"
        title="Invia la tua richiesta"
        subtitle="Compila il form qui sotto e ti risponderemo al più presto."
      >
        <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-start">
          {/* Form */}
          <div className="card-surface border-slate-200 bg-white p-6">
            <form
              className="space-y-4 text-sm"
              onSubmit={handleContactSubmit}
              aria-label="Form di contatto commerciale"
            >
              <div>
                <label
                  htmlFor="cont-nome"
                  className="mb-1 block text-xs font-medium text-slate-900"
                >
                  Nome
                </label>
                <input
                  id="cont-nome"
                  name="nome"
                  type="text"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
                  placeholder="Il tuo nome"
                />
              </div>
              <div>
                <label
                  htmlFor="cont-email"
                  className="mb-1 block text-xs font-medium text-slate-900"
                >
                  Email
                </label>
                <input
                  id="cont-email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
                  placeholder="nome@email.it"
                />
              </div>
              <div>
                <label
                  htmlFor="cont-messaggio"
                  className="mb-1 block text-xs font-medium text-slate-900"
                >
                  Messaggio
                </label>
                <textarea
                  id="cont-messaggio"
                  name="messaggio"
                  rows={4}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
                  placeholder="Raccontaci del tuo progetto..."
                />
              </div>
              <button
                type="submit"
                className="w-full justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Invia richiesta
              </button>
            </form>
          </div>

          {/* Contatti */}
          <div className="space-y-6">
            <div className="card-surface border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">
                Contatti
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:amministrazione@riverloop.it"
                      className="text-sm text-slate-600 hover:text-pink-600 transition-colors"
                    >
                      amministrazione@riverloop.it
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">
                      Telefono
                    </p>
                    <a
                      href="tel:+393517326560"
                      className="text-sm text-slate-600 hover:text-pink-600 transition-colors block"
                    >
                      +39 3517326560
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 flex-shrink-0">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">
                      Ufficio
                    </p>
                    <a
                      href="tel:0917000014"
                      className="text-sm text-slate-600 hover:text-pink-600 transition-colors block"
                    >
                      091 700 0014
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* CTA Social */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="container-page relative py-16 md:py-20">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 text-center shadow-lg max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Seguici sui social
            </h2>
            <p className="text-base text-slate-600 mb-6 max-w-2xl mx-auto">
              Resta aggiornato sulle nostre attività, progetti e iniziative. Operiamo in tutta Italia e anche all'estero, portando innovazione e formazione digitale ovunque ci sia bisogno.
            </p>
            <div className="flex justify-center gap-3 mt-8">
              <a
                href="https://www.instagram.com/riverloopsrl/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Riverloop"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:border-pink-400 hover:text-pink-600 hover:bg-pink-50 transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/riverloopsrl/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Riverloop"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:border-pink-400 hover:text-pink-600 hover:bg-pink-50 transition-colors"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/riverloop"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Riverloop"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:border-pink-400 hover:text-pink-600 hover:bg-pink-50 transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/393517326560"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Riverloop"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:border-pink-400 hover:text-pink-600 hover:bg-pink-50 transition-colors"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
