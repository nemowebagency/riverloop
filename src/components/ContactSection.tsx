import type { FC, FormEvent } from "react";
import { SectionShell } from "./SectionShell";
import { Mail, Phone } from "lucide-react";

const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

export const ContactSection: FC = () => {
  return (
    <SectionShell
      id="contattaci"
      eyebrow="Contattaci"
      title="Parliamo del tuo prossimo progetto."
      subtitle="Che tu stia cercando un partner per lo sviluppo software, un percorso formativo o una collaborazione Esports, il primo passo è una conversazione."
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-start">
        <div className="card-surface border-slate-200 bg-white p-6">
          <form
            className="space-y-4 text-sm"
            onSubmit={handleContactSubmit}
            aria-label="Form di contatto commerciale"
          >
            <div>
              <label
                htmlFor="cont-nome"
                className="mb-1 block text-xs font-medium text-slate-900"
              >
                Nome
              </label>
              <input
                id="cont-nome"
                name="nome"
                type="text"
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
                placeholder="Il tuo nome o quello della tua azienda"
              />
            </div>
            <div>
              <label
                htmlFor="cont-email"
                className="mb-1 block text-xs font-medium text-slate-900"
              >
                Email
              </label>
              <input
                id="cont-email"
                name="email"
                type="email"
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
                placeholder="nome@azienda.it"
              />
            </div>
            <div>
              <label
                htmlFor="cont-messaggio"
                className="mb-1 block text-xs font-medium text-slate-900"
              >
                Messaggio
              </label>
              <textarea
                id="cont-messaggio"
                name="messaggio"
                rows={4}
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
                placeholder="Raccontaci del tuo progetto, delle tue esigenze o delle idee che vuoi esplorare."
              />
            </div>
            <button
              type="submit"
              className="w-full justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Invia richiesta commerciale
            </button>
          </form>
        </div>

        <div className="space-y-5 text-sm text-slate-700">
          <div className="rounded-2xl border border-dashed border-pink-500/40 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-pink-600">
              Call to action
            </p>
            <p className="mt-2 text-sm text-slate-800">
              Portaci il tuo brief, anche grezzo: ti aiuteremo a trasformarlo in
              un percorso chiaro, con fasi, tempi e risultati misurabili.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-700">
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3">
              <Mail className="mt-1 h-4 w-4 text-pink-500" />
              <div>
                <p className="text-xs font-semibold text-slate-900">Email</p>
                <p className="text-xs text-slate-600">
                  Inserisci la tua domanda nel form: ti risponderemo con una
                  proposta o con le informazioni che ti servono.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3">
              <Phone className="mt-1 h-4 w-4 text-pink-500" />
              <div>
                <p className="text-xs font-semibold text-slate-900">
                  Call conoscitiva
                </p>
                <p className="text-xs text-slate-600">
                  Se preferisci, possiamo organizzare una call per approfondire
                  contesto e obiettivi prima di definire un preventivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};


