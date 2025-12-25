import type { FC } from "react";
import { Link } from "react-router-dom";
import { Code2, GraduationCap, Briefcase } from "lucide-react";

export const HomeTracksSection: FC = () => {
  return (
    <section className="section-padding border-b border-slate-200 bg-slate-50">
      <div className="container-page space-y-10">
        <header className="max-w-3xl space-y-4">
          <span className="tag-pill">I nostri settori</span>
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Tre anime, un unico ecosistema digitale.
            </h2>
            <p className="text-base md:text-lg text-slate-600">
              Sviluppo software, formazione professionale ed Esports lavorano
              insieme per accompagnare aziende e talenti in un percorso completo.
            </p>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div
              className="h-40 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80')"
              }}
            />
            <div className="flex flex-col flex-1 p-5">
              <div className="space-y-4 flex-1">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30">
                  <Code2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  Sviluppo Software
                </h3>
                <p className="text-sm text-slate-600">
                  Dall&apos;MVP a piattaforme complesse: progettiamo e sviluppiamo
                  software su misura, web app e gestionali.
                </p>
                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                  <li>• Analisi, design, sviluppo e rilascio</li>
                  <li>• UX/UI e grafica 2D/3D integrate</li>
                  <li>• Integrazione con i tuoi sistemi esistenti</li>
                </ul>
              </div>
              <div className="mt-4">
                <Link
                  to="/sviluppo-software"
                  className="inline-flex items-center justify-center rounded-full border border-pink-300 bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow shadow-pink-200 transition hover:border-pink-400 hover:text-pink-600 hover:-translate-y-0.5"
                >
                  Scopri i servizi di sviluppo
                </Link>
              </div>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div
              className="h-40 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')"
              }}
            />
            <div className="flex flex-col flex-1 p-5">
              <div className="space-y-4 flex-1">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  Formazione
                </h3>
                <p className="text-sm text-slate-600">
                  Corsi proprietari e percorsi di terze parti gestiti end-to-end:
                  programmi concreti, pensati per l&apos;inserimento nel mondo tech.
                </p>
                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                  <li>• Creazione di corsi e master</li>
                  <li>• Coordinamento docenti e tutoring</li>
                  <li>• Percorsi per aziende, scuole e privati</li>
                </ul>
              </div>
              <div className="mt-4">
                <Link
                  to="/formazione"
                  className="inline-flex items-center justify-center rounded-full border border-pink-300 bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow shadow-pink-200 transition hover:border-pink-400 hover:text-pink-600 hover:-translate-y-0.5"
                >
                  Esplora l&apos;offerta formativa
                </Link>
              </div>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div
              className="h-40 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80')"
              }}
            />
            <div className="flex flex-col flex-1 p-5">
              <div className="space-y-4 flex-1">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  Consulenza
                </h3>
                <p className="text-sm text-slate-600">
                  Supporto strategico e consulenza tecnica per guidare la tua
                  trasformazione digitale e ottimizzare i processi aziendali.
                </p>
                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                  <li>• Analisi e strategia digitale</li>
                  <li>• Consulenza tecnica e architetturale</li>
                  <li>• Supporto nella scelta delle tecnologie</li>
                </ul>
              </div>
              <div className="mt-4">
                <Link
                  to="/contattaci"
                  className="inline-flex items-center justify-center rounded-full border border-pink-300 bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow shadow-pink-200 transition hover:border-pink-400 hover:text-pink-600 hover:-translate-y-0.5"
                >
                  Richiedi una consulenza
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};


