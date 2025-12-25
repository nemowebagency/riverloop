import type { FC } from "react";
import { SectionShell } from "@/components/SectionShell";
import { Mail, Phone, ExternalLink, UserPlus, Clock, LogIn, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

export const LavoraConNoiPage: FC = () => {
  return (
    <>
      <SEO
        title="Lavora con Noi - Riverloop | Diventa Docente o Collaboratore"
        description="Diventa docente Riverloop! Registrati sulla nostra piattaforma per insegnare corsi tech, informatica e lingue. Processo semplice: registrazione, approvazione, accesso al portale. Supporto continuo per docenti e collaboratori."
        keywords="lavora con Riverloop, diventa docente, insegnare corsi tech, collaboratore Riverloop, registrazione docente, piattaforma formazione, lavoro formazione"
        canonical="https://www.riverloop.it/lavora-con-noi"
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
            <span className="tag-pill">Lavora con noi</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Diventa un docente Riverloop
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Entra a far parte del nostro team di esperti e contribuisci a
              formare i professionisti del futuro digitale.
            </p>
          </div>
        </div>
      </section>

      {/* Come accedere al portale */}
      <section className="section-padding">
        <div className="container-page space-y-10">
          <header className="space-y-4 fade-in-up">
            <span className="tag-pill">Accesso</span>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                  Come accedere al portale
                </h2>
                <p className="text-base md:text-lg text-slate-600">
                  Segui questi semplici passi per iniziare
                </p>
              </div>
              <div className="flex justify-end">
                <a
                  href="https://hub.riverloop.it/auth/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white whitespace-nowrap"
                >
                  Registrati adesso
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </header>
          <div className="fade-in-up">
            <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <UserPlus className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Registrati
            </h3>
            <p className="text-sm text-slate-600">
              Se sei un nuovo utente, clicca su "Prima registrazione" e completa
              il modulo con i tuoi dati.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Attendi l'approvazione
            </h3>
            <p className="text-sm text-slate-600">
              I docenti devono attendere l'approvazione dell'amministratore. Gli
              studenti possono accedere subito.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <LogIn className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Accedi e gestisci
            </h3>
            <p className="text-sm text-slate-600">
              Una volta approvato, accedi con le tue credenziali per gestire
              corsi, calendario e progressi.
            </p>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporto */}
      <SectionShell
        eyebrow="Supporto"
        title="Stai riscontrando dei problemi? Contattaci"
        subtitle="Siamo pronti a supportarti in ogni fase del processo di registrazione e accesso al portale."
        noTopPadding={true}
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30">
              <HelpCircle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              Il nostro team è qui per aiutarti
            </h3>
            <p className="text-base text-slate-600">
              Se hai difficoltà durante la registrazione, l'accesso o la gestione
              del tuo account, non esitare a contattarci. Il nostro team di supporto
              è disponibile per assisterti e risolvere qualsiasi problema tu possa
              incontrare.
            </p>
            <p className="text-base text-slate-600">
              Siamo qui per garantirti un'esperienza fluida e senza intoppi nel
              tuo percorso con Riverloop.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Contattaci
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 flex-shrink-0">
                  <Mail className="h-6 w-6" />
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
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">
                    Telefono
                  </p>
                  <a
                    href="tel:+393517326560"
                    className="text-sm text-slate-600 hover:text-pink-600 transition-colors"
                  >
                    +39 3517326560
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Ufficio: 091 700 0014
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200">
              <Link
                to="/contattaci"
                className="inline-flex items-center justify-center w-full rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Vai alla pagina contatti
              </Link>
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  );
};

