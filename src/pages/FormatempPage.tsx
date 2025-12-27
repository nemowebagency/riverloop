import type { FC } from "react";
import { SectionShell } from "@/components/SectionShell";
import { SEO } from "@/components/SEO";
import {
  CheckCircle2,
  Users,
  Award,
  Handshake,
  Target,
  BookOpen,
  Building2,
  FileText
} from "lucide-react";

export const FormatempPage: FC = () => {
  return (
    <>
      <SEO
        title="Formatemp - Riverloop | Formazione Finanziata"
        description="Riverloop è iscritta al Fondo Formatemp, offrendo percorsi formativi finanziati per l'inserimento e la riqualificazione professionale. Scopri i vantaggi della formazione finanziata."
        keywords="Formatemp, formazione finanziata, fondo formatemp, corsi finanziati, riqualificazione professionale, inserimento lavoro, Riverloop"
        canonical="https://www.riverloop.it/formatemp"
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
            <span className="tag-pill">Formatemp</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Fondo Formatemp: formazione finanziata per il tuo futuro
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Riverloop è iscritta al Fondo Formatemp, offrendo percorsi formativi completamente finanziati per l'inserimento e la riqualificazione professionale.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <img
                src="/Logo-FormaTemp-ente-iscritto.png"
                alt="Fondo Formatemp"
                className="h-16 w-auto opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cos'è Formatemp */}
      <SectionShell
        eyebrow="Il Fondo"
        title="Cos'è il Fondo Formatemp"
        subtitle="Il Fondo Formatemp è uno strumento di welfare aziendale che finanzia percorsi formativi per favorire l'inserimento e la riqualificazione professionale."
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Un fondo per la formazione
            </h3>
            <p className="text-base text-slate-600 mb-4">
              Il <strong className="text-slate-900">Fondo Formatemp</strong> è un fondo interprofessionale per la formazione continua, istituito dalle organizzazioni sindacali e datoriali. Il fondo finanzia percorsi formativi per lavoratori e persone in cerca di occupazione, favorendo l'inserimento lavorativo e la riqualificazione professionale.
            </p>
            <p className="text-base text-slate-600">
              Grazie al Fondo Formatemp, è possibile accedere a corsi di formazione completamente finanziati, senza costi diretti per i partecipanti, permettendo a tutti di migliorare le proprie competenze e aumentare le opportunità professionali.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <Handshake className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Riverloop e Formatemp
            </h3>
            <p className="text-base text-slate-600 mb-4">
              <strong className="text-slate-900">Riverloop è iscritta al Fondo Formatemp</strong> come ente di formazione accreditato. Questo ci permette di offrire percorsi formativi completamente finanziati, rivolti a persone che vogliono immettersi nel mondo del lavoro o che necessitano di riqualificarsi professionalmente.
            </p>
            <p className="text-base text-slate-600 mb-4">
              La nostra iscrizione al Fondo Formatemp testimonia il nostro impegno nel garantire formazione di qualità accessibile a tutti, contribuendo alla crescita professionale e all'inserimento lavorativo nel settore digitale e tecnologico.
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
              <img
                src="/Logo-FormaTemp-ente-iscritto.png"
                alt="Fondo Formatemp - Ente iscritto"
                className="h-12 w-auto opacity-90"
              />
              <p className="text-sm text-slate-600">
                Ente iscritto al Fondo Formatemp
              </p>
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
              "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')",
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
                  Perché scegliere la formazione finanziata con Formatemp
                </h2>
                <p className="text-base md:text-lg text-white/90">
                  I percorsi formativi finanziati dal Fondo Formatemp offrono numerosi vantaggi per chi vuole crescere professionalmente.
                </p>
              </div>
            </header>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 fade-in-up">
              <div className="rounded-3xl border border-white/20 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Nessun costo
                </h3>
                <p className="text-sm text-slate-600">
                  I corsi sono completamente finanziati dal Fondo Formatemp, senza costi diretti per i partecipanti.
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
                  Al termine dei corsi si ottengono attestati e certificazioni valide per il curriculum e riconosciute a livello nazionale.
                </p>
              </div>

              <div className="rounded-3xl border border-white/20 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Alta qualità
                </h3>
                <p className="text-sm text-slate-600">
                  Docenti esperti e programmi formativi strutturati per garantire un apprendimento efficace e duraturo.
                </p>
              </div>

              <div className="rounded-3xl border border-white/20 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Supporto completo
                </h3>
                <p className="text-sm text-slate-600">
                  Assistenza durante tutto il percorso formativo, dalla selezione al completamento del corso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A chi è rivolto */}
      <SectionShell
        eyebrow="Destinatari"
        title="A chi è rivolta la formazione finanziata"
        subtitle="I percorsi formativi finanziati dal Fondo Formatemp sono dedicati a diverse categorie di persone che vogliono migliorare le proprie competenze professionali."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Persone in cerca di occupazione
            </h3>
            <p className="text-sm text-slate-600">
              Per chi vuole immettersi nel mondo del lavoro acquisendo competenze digitali e tecnologiche richieste dal mercato.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Lavoratori in riqualificazione
            </h3>
            <p className="text-sm text-slate-600">
              Per chi vuole aggiornare le proprie competenze o riqualificarsi professionalmente per nuove opportunità lavorative.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Aziende e organizzazioni
            </h3>
            <p className="text-sm text-slate-600">
              Per aziende che vogliono formare i propri dipendenti attraverso percorsi finanziati dal Fondo Formatemp.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* Cosa offriamo */}
      <SectionShell
        eyebrow="I nostri servizi"
        title="Cosa offriamo con Formatemp"
        subtitle="Riverloop gestisce corsi formativi finanziati dal Fondo Formatemp, occupandosi di tutti gli aspetti organizzativi e didattici."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <Handshake className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Gestione completa dei corsi
            </h3>
            <p className="text-base text-slate-600 mb-4">
              Ci occupiamo della <strong className="text-slate-900">gestione completa dei corsi</strong> finanziati dal Fondo Formatemp, dalla ricerca e selezione degli studenti alla ricerca e selezione dei docenti qualificati.
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>Ricerca e selezione studenti</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>Ricerca e selezione docenti qualificati</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>Organizzazione e gestione didattica</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>Supporto amministrativo e burocratico</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>Monitoraggio e valutazione dei risultati</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Fornitura parco docenti
            </h3>
            <p className="text-base text-slate-600 mb-4">
              Offriamo anche la <strong className="text-slate-900">fornitura del nostro parco docenti</strong>, che vanta circa <strong className="text-slate-900">500 docenti</strong> con esperienza in vari settori professionali, pronti a supportare i corsi formativi finanziati.
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>Circa 500 docenti qualificati e certificati</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>Esperienza in vari settori professionali</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>Selezione mirata in base alle esigenze del corso</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>Supporto continuo durante tutto il percorso formativo</span>
              </li>
            </ul>
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
              Vuoi saperne di più sulla formazione finanziata?
            </h2>
            <p className="text-base text-slate-600 mb-6 max-w-2xl mx-auto">
              Contattaci per scoprire i corsi disponibili finanziati dal Fondo Formatemp e per ricevere informazioni su come partecipare ai nostri percorsi formativi.
            </p>
            <a
              href="/contattaci"
              className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Contattaci
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

