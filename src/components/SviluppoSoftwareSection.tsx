import type { FC } from "react";
import { SectionShell } from "./SectionShell";
import { Boxes, LayoutDashboard, Palette, Workflow } from "lucide-react";

const services = [
  {
    title: "Software personalizzati",
    description:
      "Applicazioni costruite su misura, integrate con i tuoi sistemi e orientate ai processi reali.",
    icon: Boxes
  },
  {
    title: "Applicazioni web",
    description:
      "Web app moderne, responsive e sicure, pensate per scalare con il tuo business.",
    icon: LayoutDashboard
  },
  {
    title: "Gestionali",
    description:
      "Soluzioni gestionali per vendite, operation e back-office, con dashboard chiare e KPI in evidenza.",
    icon: Workflow
  },
  {
    title: "UX/UI & grafica 2D/3D",
    description:
      "Design system, interfacce pulite e asset 2D/3D per prodotti e campagne digitali.",
    icon: Palette
  }
];

const steps = [
  {
    step: "01",
    title: "Discovery",
    body: "Analisi degli obiettivi, raccolta requisiti e definizione della roadmap di progetto."
  },
  {
    step: "02",
    title: "Design",
    body: "Wireframe, UX/UI e definizione dell'architettura tecnica e funzionale."
  },
  {
    step: "03",
    title: "Development",
    body: "Cicli iterativi di sviluppo, demo frequenti e validazione continua con il cliente."
  },
  {
    step: "04",
    title: "Release & evolutive",
    body: "Go-live, monitoraggio e miglioramenti continui in base ai feedback e ai dati reali."
  }
];

export const SviluppoSoftwareSection: FC = () => {
  return (
    <SectionShell
      id="sviluppo-software"
      eyebrow="Sviluppo Software"
      title="Servizi digitali per prodotti che crescono nel tempo."
      subtitle="Dallo sviluppo di applicazioni custom alle web app scalabili, fino alla progettazione di interfacce e asset grafici."
    >
      <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-start">
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <Icon className="mb-3 h-5 w-5 text-pink-500" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="text-sm font-semibold text-slate-900">
            Il nostro processo di lavoro
          </h3>
          <ol className="space-y-3 text-sm text-slate-700">
            {steps.map((step) => (
              <li
                key={step.step}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-3"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-pink-500/10 text-xs font-semibold text-pink-600 ring-1 ring-pink-500/40">
                  {step.step}
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-600">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </SectionShell>
  );
};


