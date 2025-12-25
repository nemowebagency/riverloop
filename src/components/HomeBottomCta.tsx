import type { FC } from "react";
import { Link } from "react-router-dom";

export const HomeBottomCta: FC = () => {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="container-page py-10 md:py-12">
        <div className="grid gap-6 md:grid-cols-[2fr,1fr] md:items-center">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-riverloop-500">
              Contattaci senza impegno
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Vuoi avviare un nuovo progetto o costruire un percorso formativo?
            </h2>
            <p className="text-sm md:text-base text-slate-500">
              Raccontaci la tua idea, il contesto e gli obiettivi: ti
              risponderemo con una proposta concreta o con il percorso migliore
              per te, il tuo team o i tuoi studenti.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link to="/contattaci" className="btn-primary w-full md:w-auto">
              Parla con Riverloop
            </Link>
            <p className="text-xs text-slate-400 md:text-right">
              Nessun vincolo: è una prima call esplorativa per capire se siamo
              il partner giusto per te.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


