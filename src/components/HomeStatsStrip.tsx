import type { FC } from "react";

export const HomeStatsStrip: FC = () => {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="container-page py-6 md:py-7">
        <div className="grid items-center gap-6 text-xs md:grid-cols-[1.2fr,2fr] md:text-sm">
          <p className="font-medium text-slate-800">
            Riverloop è il partner digitale per aziende, enti di formazione e
            realtà Esports che vogliono fare un salto di qualità.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-riverloop-600">
                Soluzioni su misura
              </p>
              <p className="mt-1 text-slate-600">
                Software, web app e gestionali progettati sui tuoi processi.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-riverloop-600">
                Percorsi formativi
              </p>
              <p className="mt-1 text-slate-600">
                Corsi proprietari, master di terze parti e coordinamento docenti.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-riverloop-600">
                Community Esports
              </p>
              <p className="mt-1 text-slate-600">
                Team competitivo e progetti per brand e talenti nel gaming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


