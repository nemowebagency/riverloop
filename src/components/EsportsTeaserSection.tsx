import type { FC } from "react";
import { useEffect } from "react";
import { SectionShell } from "./SectionShell";
import { ExternalLink, Trophy } from "lucide-react";

export const EsportsTeaserSection: FC = () => {
  useEffect(() => {
    document.title = "Esports - Riverloop";
  }, []);
  return (
    <SectionShell
      id="esports"
      eyebrow="Esports"
      title="Riverloop Esports: dove competizione e strategia incontrano il digital."
      subtitle="Un team dedicato, una community in crescita e progetti che uniscono brand, gaming e formazione."
    >
      <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center">
        <div className="space-y-5 text-sm text-slate-700">
          <p>
            Riverloop Esports è il lato competitivo del nostro ecosistema:
            un team che partecipa a tornei, crea contenuti e collabora con
            brand e community nel mondo gaming.
          </p>
          <p>
            Lavoriamo su percorsi di crescita per player, staff tecnico e
            content creator, con un approccio professionale e sostenibile al
            mondo Esports.
          </p>
          <ul className="mt-3 grid gap-3 text-xs text-slate-700 sm:grid-cols-2">
            <li className="rounded-2xl border border-slate-200 bg-white px-3 py-2">
              Team competitivi in titoli chiave e coaching dedicato.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white px-3 py-2">
              Attivazioni con brand, eventi e community tournament.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white px-3 py-2">
              Percorsi formativi su gaming, streaming ed Esports business.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white px-3 py-2">
              Integrazione con progetti software e digital experience.
            </li>
          </ul>

          <a
            href="https://esports.riverloop.it"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white mt-2"
          >
            Vai al sito Riverloop Esports
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="card-surface overflow-hidden border-slate-200 bg-white">
          <div
            className="relative h-44 bg-cover bg-center sm:h-56"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80')"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-100 backdrop-blur">
              <Trophy className="mr-1 h-3 w-3 text-pink-500" />
              Riverloop Esports Team
            </div>
          </div>
          <div className="p-5 text-xs text-slate-300">
            <p>
              Scopri roster, calendario, risultati e iniziative del team
              direttamente sul portale Esports dedicato.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};


