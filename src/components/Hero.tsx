import type { FC, FormEvent } from "react";
import { ArrowRight, Code2, GraduationCap, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // In un progetto reale qui potresti collegare un API o un servizio esterno
};

export const Hero: FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(251,191,36,0.12),_transparent_60%)]" />
        <div className="absolute -right-40 top-10 h-64 w-64 rounded-full bg-gradient-to-br from-riverloop-400/40 via-riverloop-500/30 to-amber-300/40 blur-3xl" />
      </div>

      <div className="container-page relative flex min-h-[calc(100vh-4rem)] flex-col items-start justify-center gap-12 py-16 md:py-24 lg:py-28">
        <div className="grid w-full items-center gap-10 md:grid-cols-[1.8fr,1fr]">
          <div className="max-w-xl space-y-6 fade-in-up">
            <span className="tag-pill">
              Percorsi digitali per aziende, scuole e talenti
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              <span className="block">Riverloop, il tuo</span>
              <span className="block text-pink-500">hub per sviluppo</span>
              <span className="block text-pink-500">e formazione</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600">
              Progettiamo software su misura e costruiamo percorsi formativi
              professionali. Un unico partner per far crescere il tuo ecosistema
              digitale.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                to="/sviluppo-software"
                className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Scopri i servizi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/formazione"
                className="inline-flex items-center justify-center rounded-full border border-pink-300 bg-white px-6 py-3 text-sm font-semibold text-pink-600 shadow shadow-pink-200 transition hover:border-pink-400 hover:text-pink-700 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Esplora la formazione
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-pink-500" />
                <span className="text-sm font-medium text-slate-700">
                  Sviluppo
                </span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-pink-500" />
                <span className="text-sm font-medium text-slate-700">
                  Formazione
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-pink-500" />
                <span className="text-sm font-medium text-slate-700">
                  Consulenza
                </span>
              </div>
            </div>
          </div>

          {/* Right-side contact form */}
          <div className="fade-in-up">
            <div className="card-surface max-w-md p-5 md:p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Contattaci
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Raccontaci il tuo progetto o la tua richiesta e ti risponderemo al più presto.
              </p>
              <form
                className="mt-5 space-y-4"
                onSubmit={handleContactSubmit}
                aria-label="Form di contatto rapido"
              >
                <div>
                  <label
                    htmlFor="hero-nome"
                    className="mb-1 block text-xs font-medium text-slate-900"
                  >
                    Nome
                  </label>
                  <input
                    id="hero-nome"
                    name="nome"
                    type="text"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="hero-email"
                    className="mb-1 block text-xs font-medium text-slate-900"
                  >
                    Email
                  </label>
                  <input
                    id="hero-email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
                    placeholder="nome@email.it"
                  />
                </div>
                <div>
                  <label
                    htmlFor="hero-messaggio"
                    className="mb-1 block text-xs font-medium text-slate-900"
                  >
                    Messaggio
                  </label>
                  <textarea
                    id="hero-messaggio"
                    name="messaggio"
                    rows={3}
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
          </div>
        </div>
      </div>
    </section>
  );
};


