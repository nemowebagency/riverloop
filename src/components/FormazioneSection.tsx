import type { FC, FormEvent } from "react";
import { SectionShell } from "./SectionShell";

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // In un progetto reale qui potresti collegare un API, un servizio esterno (es. Formspree) o inviare i dati al backend.
  // Per ora manteniamo il comportamento base, evitando refresh della pagina.
};

export const FormazioneSection: FC = () => {
  return (
    <SectionShell
      id="formazione"
      eyebrow="Formazione"
      title="Formazione professionale progettata da chi vive il digitale ogni giorno."
      subtitle="Creiamo percorsi formativi proprietari, gestiamo corsi di terze parti e coordiniamo docenti per portare valore reale a studenti e aziende."
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-6 text-sm text-slate-700">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Corsi proprietari
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Progettiamo percorsi formativi su competenze digitali chiave:
              sviluppo software, web, design, gaming ed Esports management.
              I programmi sono modulari e adattabili a diverse realtà.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Corsi di terze parti
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Gestiamo e coordiniamo corsi progettati da partner, curando
              organizzazione, didattica, docenti e tutorship, per garantire
              continuità e qualità.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Coordinamento docenti
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Selezioniamo figure con esperienza reale sul campo, li
              accompagniamo nella progettazione dei moduli e monitoriamo
              costantemente la soddisfazione degli studenti.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Form reclutamento docenti */}
          <div className="card-surface border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-900">
              Diventa docente Riverloop
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              Compila il form per proporre la tua candidatura come docente o
              formatore.
            </p>
            <form
              className="mt-4 space-y-4 text-sm"
              onSubmit={handleSubmit}
              aria-label="Form di reclutamento docenti"
            >
              <div>
                <label
                  htmlFor="doc-nome"
                  className="mb-1 block text-xs font-medium text-slate-900"
                >
                  Nome
                </label>
                <input
                  id="doc-nome"
                  name="nome"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
                  placeholder="Il tuo nome completo"
                />
              </div>
              <div>
                <label
                  htmlFor="doc-email"
                  className="mb-1 block text-xs font-medium text-slate-900"
                >
                  Email
                </label>
                <input
                  id="doc-email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
                  placeholder="nome@azienda.it"
                />
              </div>
              <div>
                <label
                  htmlFor="doc-competenze"
                  className="mb-1 block text-xs font-medium text-slate-900"
                >
                  Competenze
                </label>
                <textarea
                  id="doc-competenze"
                  name="competenze"
                  required
                  rows={3}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
                  placeholder="Ambiti di specializzazione, esperienza, tecnologie..."
                />
              </div>
              <div>
                <label
                  htmlFor="doc-link"
                  className="mb-1 block text-xs font-medium text-slate-900"
                >
                  Link CV/Portfolio
                </label>
                <input
                  id="doc-link"
                  name="link"
                  type="url"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
                  placeholder="https://..."
                />
              </div>
              <button
                type="submit"
                className="w-full justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Invia candidatura docenti
              </button>
            </form>
          </div>

          {/* Form iscrizione studenti */}
          <div className="card-surface border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-900">
              Iscriviti come studente
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              Lascia i tuoi dati e ti contatteremo quando saranno disponibili i
              corsi nella tua area di interesse.
            </p>
            <form
              className="mt-4 space-y-4 text-sm"
              onSubmit={handleSubmit}
              aria-label="Form di iscrizione studenti"
            >
              <div>
                <label
                  htmlFor="stud-nome"
                  className="mb-1 block text-xs font-medium text-slate-900"
                >
                  Nome
                </label>
                <input
                  id="stud-nome"
                  name="nome"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
                  placeholder="Il tuo nome completo"
                />
              </div>
              <div>
                <label
                  htmlFor="stud-email"
                  className="mb-1 block text-xs font-medium text-slate-900"
                >
                  Email
                </label>
                <input
                  id="stud-email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
                  placeholder="nome@email.it"
                />
              </div>
              <div>
                <label
                  htmlFor="stud-area"
                  className="mb-1 block text-xs font-medium text-slate-900"
                >
                  Area di interesse
                </label>
                <select
                  id="stud-area"
                  name="area"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-riverloop-400 focus:outline-none focus:ring-1 focus:ring-riverloop-400"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Seleziona un&apos;area
                  </option>
                  <option value="dev">Sviluppo software</option>
                  <option value="web">Web &amp; frontend</option>
                  <option value="design">UX/UI &amp; grafica</option>
                  <option value="esports">Gaming &amp; Esports</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full justify-center rounded-full border border-pink-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow shadow-pink-200 transition hover:border-pink-400 hover:text-pink-600 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Richiedi informazioni sui corsi
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};


