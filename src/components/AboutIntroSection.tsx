import type { FC } from "react";
import { SectionShell } from "./SectionShell";

export const AboutIntroSection: FC = () => {
  return (
    <SectionShell
      eyebrow="Innovazione e formazione"
      title="Una società specializzata in alta tecnologia"
      subtitle=""
    >
      <div className="space-y-16">
        {/* Prima sezione: testo a sinistra, immagine a destra */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-stretch">
          <div className="space-y-4 text-sm md:text-base text-slate-600">
            <p>
              Riverloop è una società di <strong className="text-slate-900">consulenza</strong> e{" "}
              <strong className="text-slate-900">formazione</strong> specializzata in alta tecnologia,
              nata come ramo distaccato dell'ente professionale siciliano{" "}
              <strong className="text-slate-900">Associazione Ted Formazione Professionale</strong>,
              che vanta 10 sedi in tutta la Sicilia.
            </p>
            <p>
              I professionisti che fanno parte di Riverloop vantano anni di esperienza nel settore
              della formazione professionale. Ci dedichiamo a fornire corsi avanzati e consulenza su
              una vasta gamma di tematiche tecnologiche, con un focus particolare sullo{" "}
              <strong className="text-slate-900">sviluppo software</strong> e la realizzazione di{" "}
              <strong className="text-slate-900">siti web</strong>.
            </p>
          </div>
          <div className="card-surface overflow-hidden border-slate-200 bg-white h-full">
            <div
              className="h-full min-h-[300px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80')"
              }}
            />
          </div>
        </div>

        {/* Seconda sezione: immagine a sinistra, testo a destra */}
        <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:items-stretch">
          <div className="card-surface overflow-hidden border-slate-200 bg-white h-full">
            <div
              className="h-full min-h-[300px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80')"
              }}
            />
          </div>
          <div className="space-y-4 text-sm md:text-base text-slate-600">
            <p>
              Offriamo, tramite la nostra piattaforma e-learning avanzata, corsi sia asincroni che
              sincroni, guidati da esperti del settore. Le nostre soluzioni formative si rivolgono a
              singoli professionisti e aziende, accompagnandoli nel miglioramento delle proprie
              competenze e nell'adozione delle più moderne tecnologie.
            </p>
            <p>
              In aggiunta, il nostro team di sviluppatori si occupa della creazione di software su
              misura e della realizzazione di siti web <strong className="text-slate-900">innovativi</strong>, contribuendo così a
              far crescere le imprese nel mondo digitale.
            </p>
            <p>
              Siamo impegnati ad aiutare i nostri clienti a raggiungere l'eccellenza tecnologica,
              attraverso una formazione mirata e soluzioni su misura.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

