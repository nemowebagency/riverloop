import type { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Users, BookOpen } from "lucide-react";

export const ServicesCtaSection: FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-slate-200">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')",
          backgroundAttachment: "fixed"
        }}
      />
      <div className="absolute inset-0 bg-slate-900/60" />
      <div className="container-page relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
              <GraduationCap className="h-4 w-4" />
              Formazione
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Investi nella crescita delle tue competenze digitali
            </h2>
            <p className="text-lg text-white/90">
              Scopri i nostri percorsi formativi pensati per professionisti,
              aziende e chi vuole entrare nel mondo tech. Corsi pratici,
              docenti esperti e supporto continuo.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Per aziende
                  </p>
                  <p className="mt-1 text-xs text-white/80">
                    Formazione su misura per il tuo team
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Per privati
                  </p>
                  <p className="mt-1 text-xs text-white/80">
                    Corsi intensivi e percorsi personalizzati
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/formazione"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-pink-600 shadow-lg transition hover:bg-slate-50 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-pink-500"
              >
                Esplora i corsi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contattaci"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 hover:-translate-y-0.5"
              >
                Richiedi informazioni
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex lg:justify-center">
            <div
              className="h-80 w-96 rounded-3xl bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

