import type { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket } from "lucide-react";

export const HomeCtaSection: FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-slate-200">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-pink-500/80" />
      <div className="container-page relative py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-[2fr,1fr] md:items-center">
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Pronto a trasformare le tue idee in realtà?
            </h2>
            <p className="mt-3 text-base text-white/90">
              Contattaci per una consulenza gratuita e scopri come possiamo
              aiutarti a raggiungere i tuoi obiettivi digitali.
            </p>
            <Link
              to="/contattaci"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-pink-600 shadow-lg transition hover:bg-slate-50 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-pink-500"
            >
              Contattaci
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="hidden md:flex md:justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <Rocket className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

