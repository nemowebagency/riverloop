import type { FC } from "react";
import { AboutHero } from "@/components/AboutHero";
import { AboutIntroSection } from "@/components/AboutIntroSection";
import { AboutTimelineSection } from "@/components/AboutTimelineSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

export const AboutPage: FC = () => {
  return (
    <>
      <SEO
        title="Chi Siamo - Riverloop | Storia, Mission e Vision"
        description="Scopri la storia di Riverloop, un'azienda che unisce sviluppo software, formazione professionale e consulenza. Team multidisciplinare con anni di esperienza, certificazioni ISO 9001 e ISO 27001, accreditato dalla Regione Sicilia."
        keywords="Riverloop chi siamo, storia azienda, mission vision, team sviluppo software, formazione professionale, certificazioni ISO, Regione Sicilia"
        canonical="https://www.riverloop.it/chi-siamo"
        ogImage="https://www.riverloop.it/logoviola.webp"
      />
      <AboutHero />
      <AboutIntroSection />
      <AboutTimelineSection />
      <section className="relative overflow-hidden border-b border-slate-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="container-page relative py-16 md:py-20">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Cambia il tuo futuro ed entra nel mondo Riverloop
            </h2>
            <p className="text-base text-slate-600 mb-6 max-w-2xl mx-auto">
              Siamo pronti ad accompagnarti nel tuo percorso di crescita digitale.
              Contattaci per scoprire come possiamo aiutarti.
            </p>
            <Link
              to="/contattaci"
              className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Contattaci
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};


