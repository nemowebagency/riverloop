import type { FC } from "react";
import { SectionShell } from "./SectionShell";

const timelineEvents = [
  {
    date: "2024",
    period: "Maggio",
    title: "La nascita di Riverloop",
    description:
      "Riverloop nasce dall'idea di Claudio Marfia e Giuseppe Buscio per portare innovazione tech al Sud Italia. Dopo mesi di pianificazione, diventa una realtà concreta e inizia con la formazione informatica, stringendo le prime partnership."
  },
  {
    date: "2024",
    period: "Seconda metà",
    title: "Espansione nei servizi",
    description:
      "Riverloop si afferma nella formazione e avvia un reparto di sviluppo web. L'arrivo di una grande commessa per una piattaforma SaaS segna l'ingresso nello sviluppo software. L'azienda copre tre aree chiave: formazione, sviluppo e consulenza tech."
  },
  {
    date: "2025",
    period: "Gennaio",
    title: "I primi dipendenti",
    description:
      "Riverloop assume i primi due dipendenti, segnando un momento importante nella crescita dell'azienda. Questo passo rappresenta la transizione da un progetto imprenditoriale a una realtà strutturata, con un team dedicato che permette di ampliare le capacità operative e di rispondere con maggiore efficacia alle esigenze dei clienti."
  },
  {
    date: "2025",
    period: "Seconda metà di gennaio",
    title: "Espansione del team",
    description:
      "Riverloop arriva a ben 10 dipendenti, consolidando la propria struttura organizzativa. Questa rapida crescita riflette la fiducia dei clienti e il successo delle iniziative avviate. Il team si diversifica con competenze complementari, coprendo sviluppo software, formazione, design e consulenza, creando un ecosistema completo di servizi digitali."
  },
  {
    date: "2026",
    period: "Gennaio",
    title: "Riverloop oggi",
    description:
      "Attualmente Riverloop conta 10 dipendenti e più di 400 collaboratori esperti, con un numero di corsi erogati pari a 800. Questi numeri testimoniano la crescita costante e l'impatto positivo nel settore della formazione e dello sviluppo software. L'azienda continua a investire in innovazione, qualità e nella creazione di valore per clienti e studenti, posizionandosi come punto di riferimento nel panorama tecnologico italiano."
  }
];

export const AboutTimelineSection: FC = () => {
  return (
    <SectionShell
      eyebrow="La storia di Riverloop"
      title="I passi che hanno portato Riverloop dal giorno della sua fondazione fino a oggi"
      subtitle="Segui la timeline per scoprire la nostra crescita e i traguardi raggiunti."
    >
      <div className="space-y-8">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className="grid gap-6 md:grid-cols-[200px,1fr] lg:grid-cols-[250px,1fr]"
          >
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wide text-pink-600">
                {event.date}
              </span>
              <span className="text-sm font-medium text-slate-900 mt-1">
                {event.period}
              </span>
            </div>
            <div className="relative pl-6 md:pl-8">
              {index !== timelineEvents.length - 1 && (
                <div className="absolute left-0 top-8 bottom-0 w-0.5 bg-slate-200" />
              )}
              <div className="absolute left-0 top-8 h-3 w-3 -translate-x-1.5 rounded-full bg-pink-500 ring-4 ring-white" />
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-slate-600">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
};

