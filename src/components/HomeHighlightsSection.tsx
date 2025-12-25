import type { FC } from "react";
import { ShieldCheck, Users, Rocket } from "lucide-react";

export const HomeHighlightsSection: FC = () => {
  return (
    <section className="section-padding bg-slate-100/60">
      <div className="container-page space-y-10">
        <header className="max-w-3xl space-y-4">
          <span className="tag-pill">Perché Riverloop</span>
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Un unico partner per progetti, competenze e community.
            </h2>
            <p className="text-base md:text-lg text-slate-500">
              Non ci fermiamo al rilascio di un software o alla chiusura di un
              corso: costruiamo relazioni di lungo periodo con aziende, scuole e
              talenti.
            </p>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="card-surface border-slate-200 bg-white p-5">
            <Rocket className="mb-3 h-5 w-5 text-riverloop-500" />
            <h3 className="text-sm font-semibold text-slate-900">
              Approccio end‑to‑end
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Dall&apos;idea al go‑live: affianchiamo il tuo team in tutte le fasi,
              con un processo chiaro e iterativo.
            </p>
          </article>

          <article className="card-surface border-slate-200 bg-white p-5">
            <Users className="mb-3 h-5 w-5 text-riverloop-500" />
            <h3 className="text-sm font-semibold text-slate-900">
              Competenze ibride
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Sviluppatori, designer, formatori e staff Esports che lavorano
              insieme sugli stessi obiettivi.
            </p>
          </article>

          <article className="card-surface border-slate-200 bg-white p-5">
            <ShieldCheck className="mb-3 h-5 w-5 text-riverloop-500" />
            <h3 className="text-sm font-semibold text-slate-900">
              Qualità e affidabilità
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Processi strutturati, attenzione al dettaglio e supporto continuo
              dopo il rilascio o la fine del corso.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};


