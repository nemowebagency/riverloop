import type { FC } from "react";
import { Code2, GraduationCap, Globe2, Gamepad2 } from "lucide-react";
import { SectionShell } from "./SectionShell";

const features = [
  {
    title: "Software",
    icon: Code2,
    description: "Software su misura, con tecnologie all'avanguardia"
  },
  {
    title: "Supporto",
    icon: GraduationCap,
    description: "Offriamo assistenza e aggiornamenti costanti"
  },
  {
    title: "Siti web",
    icon: Globe2,
    description: "Siti web ottimizzati per il business e il branding"
  },
  {
    title: "Innovazione",
    icon: Code2,
    description: "Tecnologie all'avanguardia per soluzioni moderne"
  },
  {
    title: "Esperienza",
    icon: GraduationCap,
    description: "Team di esperti con anni di esperienza nel settore tech"
  }
];

export const AboutFeaturesSection: FC = () => {
  return (
    <SectionShell
      eyebrow="Un'azienda sempre in crescita"
      title="Riverloop è un'azienda che offre corsi di formazione in ambito informatico e si occupa di sviluppo software e web."
      subtitle=""
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
};

