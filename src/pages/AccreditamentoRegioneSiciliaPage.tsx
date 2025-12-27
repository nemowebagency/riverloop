import type { FC } from "react";
import { SectionShell } from "@/components/SectionShell";
import { SEO } from "@/components/SEO";
import {
  CheckCircle2,
  Award,
  Building2,
  BookOpen,
  Briefcase,
  Users,
  FileText,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const AccreditamentoRegioneSiciliaPage: FC = () => {
  return (
    <>
      <SEO
        title="Accreditamento Regione Sicilia - Riverloop | Ente di Formazione Accreditato"
        description="Riverloop è un ente di formazione accreditato dalla Regione Sicilia. Offriamo corsi in presenza su vari settori professionali, con certificazioni riconosciute a livello regionale."
        keywords="accreditamento regione sicilia, ente formazione, corsi in presenza, formazione regionale, certificazioni riconosciute, Riverloop"
        canonical="https://www.riverloop.it/accreditamento-regione-sicilia"
        ogImage="https://www.riverloop.it/logoviola.webp"
      />
      
      {/* Hero Section */}
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
            <span className="tag-pill">Accreditamento</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Ente di formazione accreditato dalla Regione Sicilia
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Riverloop ha ottenuto l'accreditamento dalla Regione Sicilia, ampliando la nostra offerta formativa con corsi in presenza su vari settori professionali.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <img
                src="/regione.png"
                alt="Regione Sicilia"
                className="h-16 w-auto opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cos'è l'accreditamento */}
      <SectionShell
        eyebrow="L'accreditamento"
        title="Cosa significa essere accreditati dalla Regione Sicilia"
        subtitle="L'accreditamento regionale ci permette di svolgere attività formative riconosciute e certificate, garantendo qualità e professionalità."
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Riconoscimento ufficiale
            </h3>
            <p className="text-base text-slate-600 mb-4">
              L'<strong className="text-slate-900">accreditamento dalla Regione Sicilia</strong> è un riconoscimento ufficiale che attesta la qualità e la professionalità dell'ente formativo. Questo accreditamento certifica che Riverloop rispetta gli standard qualitativi richiesti dalla Regione per lo svolgimento di attività formative.
            </p>
            <p className="text-base text-slate-600">
              Essere un ente accreditato significa poter erogare corsi di formazione riconosciuti a livello regionale, con certificazioni valide per il curriculum e per il riconoscimento delle competenze acquisite.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Riverloop e l'accreditamento
            </h3>
            <p className="text-base text-slate-600 mb-4">
              <strong className="text-slate-900">Riverloop ha ottenuto l'accreditamento dalla Regione Sicilia</strong>, ampliando significativamente la nostra offerta formativa. Questo ci permette di svolgere <strong className="text-slate-900">corsi in presenza</strong> su <strong className="text-slate-900">vari settori professionali</strong>, raggiungendo un pubblico più ampio con percorsi formativi riconosciuti.
            </p>
            <p className="text-base text-slate-600">
              L'accreditamento regionale testimonia il nostro impegno nel garantire formazione di alta qualità, con programmi strutturati, docenti qualificati e certificazioni riconosciute.
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
              <img
                src="/regione.png"
                alt="Regione Sicilia - Ente accreditato"
                className="h-12 w-auto opacity-90"
              />
              <div className="text-sm">
                <p className="font-semibold text-slate-900">
                  Ente di formazione
                </p>
                <p className="text-slate-600">
                  Accreditato dalla Regione Sicilia
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Vantaggi */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="section-padding relative">
          <div className="container-page space-y-10">
            <header className="max-w-3xl space-y-4 fade-in-up">
              <span className="tag-pill bg-white/20 backdrop-blur-sm text-white border-white/30">
                Vantaggi
              </span>
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                  I vantaggi dell'accreditamento regionale
                </h2>
                <p className="text-base md:text-lg text-white/90">
                  Essere un ente accreditato dalla Regione Sicilia offre numerosi vantaggi per studenti e partecipanti ai corsi.
                </p>
              </div>
            </header>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 fade-in-up">
              <div className="rounded-3xl border border-white/20 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Corsi in presenza
                </h3>
                <p className="text-sm text-slate-600">
                  Formazione diretta e interattiva con docenti qualificati e strutture adeguate per un apprendimento efficace e coinvolgente.
                </p>
              </div>

              <div className="rounded-3xl border border-white/20 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Vari settori professionali
                </h3>
                <p className="text-sm text-slate-600">
                  Percorsi formativi diversificati su più ambiti professionali, per rispondere alle esigenze del mercato del lavoro siciliano.
                </p>
              </div>

              <div className="rounded-3xl border border-white/20 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Certificazioni riconosciute
                </h3>
                <p className="text-sm text-slate-600">
                  Attestati validi per il riconoscimento delle competenze acquisite, riconosciuti a livello regionale e nazionale.
                </p>
              </div>

              <div className="rounded-3xl border border-white/20 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Qualità garantita
                </h3>
                <p className="text-sm text-slate-600">
                  Standard qualitativi elevati, con programmi formativi strutturati e monitorati dalla Regione Sicilia.
                </p>
              </div>

              <div className="rounded-3xl border border-white/20 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Docenti qualificati
                </h3>
                <p className="text-sm text-slate-600">
                  Team di formatori esperti e certificati, selezionati per garantire la massima qualità didattica.
                </p>
              </div>

              <div className="rounded-3xl border border-white/20 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Riconoscimento regionale
                </h3>
                <p className="text-sm text-slate-600">
                  Certificazioni e attestati riconosciuti dalla Regione Sicilia, validi per concorsi pubblici e inserimento lavorativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo formativo */}
      <SectionShell
        eyebrow="Il nostro approccio"
        title="Come funzionano i corsi accreditati"
        subtitle="I nostri corsi in presenza seguono un processo formativo strutturato e monitorato, garantendo qualità e risultati."
      >
        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                <span className="text-2xl font-bold text-pink-500">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Progettazione
              </h3>
              <p className="text-sm text-slate-600">
                Sviluppo di programmi formativi strutturati e allineati agli standard regionali.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                <span className="text-2xl font-bold text-pink-500">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Selezione
              </h3>
              <p className="text-sm text-slate-600">
                Ricerca e selezione di studenti e docenti qualificati per garantire la qualità.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                <span className="text-2xl font-bold text-pink-500">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Erogazione
              </h3>
              <p className="text-sm text-slate-600">
                Svolgimento dei corsi in presenza con supporto didattico e monitoraggio continuo.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                <span className="text-2xl font-bold text-pink-500">4</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Certificazione
              </h3>
              <p className="text-sm text-slate-600">
                Rilascio di attestati e certificazioni riconosciute dalla Regione Sicilia.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* CTA */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80')",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="container-page relative py-16 md:py-20">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Vuoi saperne di più sui nostri corsi accreditati?
            </h2>
            <p className="text-base text-slate-600 mb-6 max-w-2xl mx-auto">
              Contattaci per scoprire i corsi disponibili accreditati dalla Regione Sicilia e per ricevere informazioni su come partecipare ai nostri percorsi formativi in presenza.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contattaci"
                className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Contattaci
              </Link>
              <Link
                to="/formazione"
                className="inline-flex items-center justify-center rounded-full border border-pink-300 bg-white px-6 py-3 text-sm font-semibold text-pink-600 shadow shadow-pink-200 transition hover:border-pink-400 hover:text-pink-700 hover:-translate-y-0.5"
              >
                Vai alla formazione
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

