import type { FC } from "react";
import { Code2, GraduationCap, Globe2, Gamepad2 } from "lucide-react";
import { SectionShell } from "./SectionShell";

const reasons = [
  {
    title: "Sviluppo Software Su Misura",
    icon: Code2,
    description:
      "Offriamo software personalizzati per ottimizzare l'efficienza aziendale, utilizzando tecnologie avanzate per soluzioni scalabili e sicure."
  },
  {
    title: "Formazione di Alta Qualità",
    icon: GraduationCap,
    description:
      "Corsi pratici e flessibili, tenuti da esperti, per prepararti alle sfide del mondo del lavoro con supporto continuo."
  },
  {
    title: "Siti Web Professionali",
    icon: Globe2,
    description:
      "Creiamo siti web ottimizzati per SEO e performanti, migliorando la tua visibilità online e l'esperienza utente."
  },
  {
    title: "Sviluppo di Videogiochi",
    icon: Gamepad2,
    description:
      "Progettiamo videogiochi e esperienze interattive innovative, offrendo soluzioni coinvolgenti per il mercato gaming."
  }
];

export const AboutWhySection: FC = () => {
  return (
    <SectionShell
      eyebrow="Perché scegliere Riverloop"
      title="Soluzioni complete per il tuo futuro digitale"
      subtitle="Dallo sviluppo software alla formazione, fino alla creazione di siti web e videogiochi: un partner unico per la tua crescita."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {reasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <div
              key={reason.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-slate-600">{reason.description}</p>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
};

