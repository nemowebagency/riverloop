import type { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HomeAcademyPreview: FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-page space-y-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr,1fr] md:items-center">
          <div className="space-y-4">
            <span className="tag-pill">Riverloop Academy</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Formazione pensata per chi vuole crescere nel digitale.
            </h2>
            <p className="text-base md:text-lg text-slate-600">
              Dalla programmazione al design, dall&apos;AI al gaming: progettiamo
              percorsi formativi che uniscono pratica, mentoring e casi reali,
              ispirandoci alle migliori esperienze delle digital school.
            </p>
            <ul className="mt-3 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <li className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
                Corsi intensivi e moduli on-demand, per adattarsi ai tuoi ritmi.
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
                Docenti con esperienza concreta nello sviluppo e nel design.
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
                Progetti pratici, portfolio e supporto all&apos;inserimento.
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
                Possibilità di integrazione con percorsi Esports e gaming.
              </li>
            </ul>
            <Link
              to="/formazione"
              className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white mt-2"
            >
              Vai alla sezione Formazione
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="card-surface overflow-hidden border-slate-200 bg-white">
            <div
              className="h-44 bg-cover bg-center sm:h-56"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80')"
              }}
            />
            <div className="space-y-3 p-5 text-sm text-slate-700">
              <p className="text-xs font-medium uppercase tracking-wide text-pink-600">
                Per persone e aziende
              </p>
              <p>
                Attiviamo percorsi sia per singoli che per team aziendali:
                workshop, lezioni live, contenuti on-demand e supporto continuo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


