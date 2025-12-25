import type { FC } from "react";
import { ShieldCheck, Users, Rocket } from "lucide-react";
import { SectionShell } from "./SectionShell";

const pillars = [
  {
    title: "Approccio end-to-end",
    icon: Rocket,
    description:
      "Dall'analisi strategica al rilascio in produzione, con un team che segue il ciclo di vita completo."
  },
  {
    title: "Competenze ibride",
    icon: Users,
    description:
      "Sviluppatori, designer, formatori e consulenti: un mix unico per progetti ad alto impatto."
  },
  {
    title: "Qualità e affidabilità",
    icon: ShieldCheck,
    description:
      "Processi strutturati, attenzione al dettaglio e cura dell'esperienza utente finale."
  }
];

export const WhySection: FC = () => {
  return (
    <SectionShell
      id="perche-riverloop"
      eyebrow="Perché Riverloop"
      title="Non solo software: costruiamo ecosistemi digitali."
      subtitle="Riverloop nasce per mettere in connessione tecnologia, formazione e consulenza, creando progetti che durano nel tempo."
    >
      <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center">
        <div className="space-y-6">
          <p className="text-sm md:text-base text-slate-600">
            Ogni progetto per noi è un percorso condiviso. Partiamo dagli
            obiettivi di business, costruiamo una roadmap chiara e lavoriamo
            per rilasci incrementali che generano valore reale fin dalle prime
            fasi.
          </p>
          <p className="text-sm md:text-base text-slate-600">
            Crediamo in un rapporto di collaborazione trasparente, dove
            aziende e talenti crescono insieme su basi solide:
            competenze, passione e visione a lungo termine.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <Icon className="mb-3 h-5 w-5 text-pink-500" />
                  <p className="text-xs font-semibold text-slate-900">
                    {pillar.title}
                  </p>
                  <p className="mt-2 text-xs text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card-surface overflow-hidden border-slate-200 bg-white">
          <div
            className="h-40 bg-cover bg-center sm:h-48 md:h-52"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80')"
            }}
          />
          <div className="space-y-3 p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-pink-600">
              Partnership a lungo termine
            </p>
            <p className="text-sm text-slate-700">
              Ci piace costruire relazioni durature, non progetti spot.
              Riverloop diventa il tuo team esteso per innovazione e crescita
              continua.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};


