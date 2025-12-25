import type { FC } from "react";

export const AboutHero: FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(251,191,36,0.12),_transparent_60%)]" />
        <div className="absolute -right-40 top-10 h-64 w-64 rounded-full bg-gradient-to-br from-pink-400/40 via-pink-500/30 to-amber-300/40 blur-3xl" />
      </div>
      <div className="container-page relative flex flex-col items-center justify-center gap-6 py-12 md:py-16 text-center">
        <div className="max-w-3xl space-y-6">
          <span className="tag-pill">Chi Siamo</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
            Una grande famiglia
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Riverloop è più di una società di sviluppo e formazione: è una grande
            famiglia, dove passione e collaborazione creano opportunità per il futuro
            di tutti.
          </p>
        </div>
      </div>
    </section>
  );
};

