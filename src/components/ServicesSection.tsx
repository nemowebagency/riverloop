import type { FC } from "react";
import {
  Code2,
  Globe2,
  PenTool,
  GraduationCap,
  Briefcase
} from "lucide-react";
import { SectionShell } from "./SectionShell";

const services = [
  {
    title: "Sviluppo Software Applicativo",
    icon: Code2,
    description:
      "Progettiamo e realizziamo software personalizzati su misura per le esigenze di pubblici e privati.",
    tags: ["Custom development", "Integrazioni", "Scalabilità"]
  },
  {
    title: "Web Application",
    icon: Globe2,
    description:
      "Sviluppiamo app e web app performanti e sicure, orientate all'esperienza utente e all'alto traffico.",
    tags: ["Frontend & backend", "API", "Cloud ready"]
  },
  {
    title: "Grafica 2D e 3D",
    icon: PenTool,
    description:
      "Realizziamo grafiche, loghi, locandine, brand identity e assets 3D orientati ai videogiochi.",
    tags: ["Loghi", "Brand Identity", "Assets 3D"]
  },
  {
    title: "Formazione Professionale",
    icon: GraduationCap,
    description:
      "Corsi proprietari e gestione di percorsi formativi di terze parti, online e in presenza.",
    tags: ["Academy", "Docenti", "Upskilling"]
  },
  {
    title: "Formazione Finanziata",
    icon: GraduationCap,
    description:
      "Percorsi formativi finanziati da fondi pubblici e regionali per aziende e privati.",
    tags: ["Fondi", "Regionale", "Digitale"]
  },
  {
    title: "Consulenza",
    icon: Briefcase,
    description:
      "Supporto strategico e consulenza tecnica per guidare la tua trasformazione digitale e ottimizzare i processi aziendali.",
    tags: ["Strategia", "Tecnica", "Digitale"]
  }
];

export const ServicesSection: FC = () => {
  return (
    <SectionShell
      id="services"
      eyebrow="Servizi"
      title="Un unico partner per sviluppo, formazione e consulenza."
      subtitle="Soluzioni integrate per trasformare le tue idee in prodotti digitali, competenze e crescita."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-pink-400/60 hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600">{service.description}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
};


