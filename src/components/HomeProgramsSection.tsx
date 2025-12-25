import type { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, GraduationCap, Gamepad2 } from "lucide-react";

export const HomeProgramsSection: FC = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-page space-y-10">
        <header className="max-w-3xl space-y-4">
          <span className="tag-pill">Percorsi Riverloop</span>
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Scegli il percorso che allinea tecnologia, formazione ed Esports.
            </h2>
            <p className="text-base md:text-lg text-slate-500">
              Che tu sia un&apos;azienda, un ente formativo o un talento in
              crescita, puoi combinare sviluppo software, Academy e progetti
              Esports in un unico ecosistema.
            </p>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="card-surface flex flex-col justify-between">
            <div className="space-y-4 p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-riverloop-50 text-riverloop-500 ring-1 ring-riverloop-100">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">
                Sviluppo Software
              </h3>
              <p className="text-sm text-slate-500">
                Progetta applicazioni, web app e gestionali che supportino
                davvero i tuoi processi e la tua crescita.
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-500">
                <li>• Analisi di business e UX</li>
                <li>• Sviluppo end-to-end</li>
                <li>• Manutenzione ed evolutive</li>
              </ul>
            </div>
            <div className="border-t border-slate-100 bg-slate-50 px-5 py-3">
              <Link
                to="/sviluppo-software"
                className="inline-flex items-center text-xs font-semibold text-riverloop-600 hover:text-riverloop-700"
              >
                Scopri i servizi di sviluppo
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </article>

          <article className="card-surface flex flex-col justify-between">
            <div className="space-y-4 p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">
                Formazione & Academy
              </h3>
              <p className="text-sm text-slate-500">
                Corsi proprietari e percorsi di terze parti, coordinati da
                Riverloop, per portare competenze digitali dove servono.
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-500">
                <li>• Corsi intensivi e moduli on-demand</li>
                <li>• Coordinamento docenti e mentoring</li>
                <li>• Programmi per scuole, aziende e privati</li>
              </ul>
            </div>
            <div className="border-t border-slate-100 bg-slate-50 px-5 py-3">
              <Link
                to="/formazione"
                className="inline-flex items-center text-xs font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Vai alla sezione Formazione
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </article>

          <article className="card-surface flex flex-col justify-between">
            <div className="space-y-4 p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-fuchsia-50 text-fuchsia-600 ring-1 ring-fuchsia-100">
                <Gamepad2 className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">
                Esports & Community
              </h3>
              <p className="text-sm text-slate-500">
                Riverloop Esports per team competitivi, contenuti e progetti
                branded nel mondo gaming.
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-500">
                <li>• Team e staff dedicati</li>
                <li>• Tornei, eventi e attivazioni brand</li>
                <li>• Percorsi per player e content creator</li>
              </ul>
            </div>
            <div className="border-t border-slate-100 bg-slate-50 px-5 py-3">
              <a
                href="https://esports.riverloop.it"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-xs font-semibold text-fuchsia-700 hover:text-fuchsia-800"
              >
                Vai al sito Riverloop Esports
                <ArrowRight className="ml-1 h-3 w-3" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};


