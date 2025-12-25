import type { FC } from "react";
import { SectionShell } from "./SectionShell";

export const AboutSection: FC = () => {
  return (
    <SectionShell
      id="chi-siamo"
      eyebrow="Chi Siamo"
      title="Riverloop è un laboratorio digitale dove tecnologia, formazione ed Esports si incontrano."
      subtitle="Un team multidisciplinare che progetta esperienze, non solo prodotti."
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Mission</h3>
            <p className="mt-2 text-sm text-slate-600">
              Abilitare aziende e persone a crescere nel digitale, fornendo
              strumenti concreti: software affidabile, percorsi formativi
              strutturati e community dinamiche nel mondo Esports.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Vision</h3>
            <p className="mt-2 text-sm text-slate-600">
              Immaginiamo un ecosistema in cui sviluppo, apprendimento e gioco
              competitivo siano parte di un unico flusso: il &quot;loop&quot;
              di Riverloop, dove ogni progetto genera nuove opportunità.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Valori</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <span className="font-medium text-slate-900">Trasparenza</span>
                : processi chiari, comunicazione costante, obiettivi condivisi.
              </li>
              <li>
                <span className="font-medium text-slate-900">Qualità</span>: cura
                del dettaglio tecnico e dell&apos;esperienza utente finale.
              </li>
              <li>
                <span className="font-medium text-slate-900">Crescita</span>:
                formazione continua, mentoring e supporto alle nuove
                generazioni.
              </li>
              <li>
                <span className="font-medium text-slate-900">Community</span>:
                collaborazione e condivisione con partner, docenti e player.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-5">
          <div className="card-surface overflow-hidden border-slate-200 bg-white">
            <div
              className="h-44 bg-cover bg-center sm:h-56"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80')"
              }}
            />
            <div className="p-5 text-sm text-slate-700">
              <p>
                Lavoriamo in team snelli e multidisciplinari, con un forte focus
                sulla collaborazione e sulla responsabilità condivisa. Ogni
                membro del team porta competenze specifiche e una visione
                comune: creare esperienze digitali che abbiano impatto reale.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-pink-500/40 bg-slate-50 p-4 text-xs text-slate-600">
            <p className="font-medium text-slate-900">
              Pronti a costruire il prossimo progetto insieme?
            </p>
            <p className="mt-1">
              Raccontaci la tua idea: ti aiuteremo a trasformarla in un percorso
              concreto, dall&apos;MVP al go-live.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};


