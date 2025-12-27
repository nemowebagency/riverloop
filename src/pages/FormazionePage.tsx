import type { FC } from "react";
import { SectionShell } from "@/components/SectionShell";
import { SEO } from "@/components/SEO";
import {
  GraduationCap,
  Award,
  Users,
  Building2,
  CheckCircle2,
  Code2,
  Globe2,
  Palette,
  BookOpen,
  Briefcase,
  FileText,
  Languages,
  Handshake,
  Target,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const FormazionePage: FC = () => {
  return (
    <>
      <SEO
        title="Formazione Professionale - Riverloop | Corsi Tech, Certificazioni, Formazione Finanziata"
        description="Corsi tech professionali, certificazioni informatiche (Pekit, Eipass) e linguistiche (British Institutes), formazione finanziata con Formatemp e APL. Corsi in presenza accreditati dalla Regione Sicilia. Gestione corsi con 15 studenti e pool di 500 docenti esperti."
        keywords="formazione professionale, corsi tech, certificazioni informatiche, Pekit, Eipass, certificazioni linguistiche, British Institutes, formazione finanziata, Formatemp, Regione Sicilia, corsi programmazione, sviluppo software"
        canonical="https://www.riverloop.it/formazione"
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
            <span className="tag-pill">Formazione</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Formazione che prepara al futuro digitale
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Corsi tech, certificazioni informatiche e linguistiche, formazione
              finanziata: un ecosistema completo per la crescita professionale.
            </p>
          </div>
        </div>
      </section>

      {/* Formazione Professionale Tech */}
      <SectionShell
        eyebrow="I nostri corsi"
        title="Formazione professionale in ambito tecnologico"
        subtitle="Creiamo corsi proprietari pensati per formare professionisti pronti al mercato del lavoro digitale."
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Sviluppo Software
            </h3>
            <p className="text-sm text-slate-600">
              Corsi su linguaggi di programmazione moderni, framework e best
              practices per lo sviluppo di applicazioni software professionali.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <Globe2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Web Development
            </h3>
            <p className="text-sm text-slate-600">
              Percorsi formativi su sviluppo web frontend e backend, creazione di
              siti e applicazioni web moderne e responsive.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <Palette className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Design & UX/UI
            </h3>
            <p className="text-sm text-slate-600">
              Formazione su design grafico, user experience e user interface per
              creare prodotti digitali intuitivi e accattivanti.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div
              className="h-48 bg-cover bg-center rounded-2xl mb-4"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80')"
              }}
            />
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Metodologia didattica
            </h3>
            <p className="text-sm text-slate-600">
              I nostri corsi sono strutturati con un approccio pratico e
              orientato all'applicazione immediata. Combiniamo teoria e pratica
              per garantire un apprendimento efficace e duraturo.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div
              className="h-48 bg-cover bg-center rounded-2xl mb-4"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')"
              }}
            />
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Supporto continuo
            </h3>
            <p className="text-sm text-slate-600">
              Offriamo supporto durante e dopo il corso, con materiali
              aggiuntivi, sessioni di approfondimento e assistenza per
              l'inserimento nel mondo del lavoro.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* Certificazioni */}
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
                Certificazioni
              </span>
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                  Certificazioni informatiche e linguistiche riconosciute
                </h2>
                <p className="text-base md:text-lg text-white/90">
                  Grazie alle nostre collaborazioni con partner di eccellenza,
                  offriamo percorsi per ottenere certificazioni valide a livello
                  nazionale e internazionale.
                </p>
              </div>
            </header>
            <div className="grid gap-8 lg:grid-cols-2 fade-in-up">
              <div className="rounded-3xl border border-white/20 bg-white/95 backdrop-blur-sm p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 flex-shrink-0">
                    <FileText className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Certificazioni Informatiche
                    </h3>
                    <p className="text-sm text-slate-600">
                      In collaborazione con <strong>Pekit</strong> e{" "}
                      <strong>Eipass</strong>
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Offriamo percorsi formativi per ottenere certificazioni
                  informatiche riconosciute a livello nazionale. Le certificazioni
                  <strong> Pekit</strong> e <strong>Eipass</strong> attestano
                  competenze digitali fondamentali e avanzate, utili per il mondo
                  del lavoro e per la crescita professionale.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>Certificazioni base e avanzate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>Riconoscimento nazionale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>Valide per concorsi pubblici</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/20 bg-white/95 backdrop-blur-sm p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 flex-shrink-0">
                    <Languages className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Certificazioni Linguistiche
                    </h3>
                    <p className="text-sm text-slate-600">
                      In collaborazione con <strong>British Institutes</strong>
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Grazie alla partnership con British Institutes, proponiamo corsi
                  per ottenere certificazioni linguistiche riconosciute
                  internazionalmente. Perfette per arricchire il proprio curriculum
                  e migliorare le competenze comunicative.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>Certificazioni per tutti i livelli</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>Riconoscimento internazionale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>Preparazione mirata agli esami</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formazione Finanziata */}
      <SectionShell
        eyebrow="Formazione Finanziata"
        title="Formazione finanziata per l'inserimento e la riqualificazione professionale"
        subtitle="Dedicata a chi vuole immettersi nel mondo del lavoro o riqualificarsi, con percorsi formativi accessibili grazie ai fondi pubblici."
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 flex flex-col">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              A chi è dedicata
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              La formazione finanziata è dedicata a persone che vogliono{" "}
              <strong className="text-slate-900">
                immettersi nel mondo del lavoro
              </strong>{" "}
              o che necessitano di{" "}
              <strong className="text-slate-900">riqualificarsi</strong> per
              acquisire nuove competenze e migliorare le proprie opportunità
              professionali.
            </p>
            <p className="text-sm text-slate-600 mb-4 flex-grow">
              Grazie ai fondi pubblici e alle collaborazioni con le{" "}
              <strong>APL (Agenzie per il Lavoro)</strong> e il{" "}
              <strong>Fondo Formatemp</strong>, questi percorsi formativi sono
              accessibili senza costi diretti per i partecipanti.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-3">
                <img
                  src="/Logo-FormaTemp-ente-iscritto.png"
                  alt="Fondo Formatemp"
                  className="h-12 w-auto opacity-90"
                />
              </div>
              <Link
                to="/formatemp"
                className="inline-flex items-center text-sm font-semibold text-pink-600 hover:text-pink-700 transition-colors"
              >
                Approfondisci
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 flex flex-col">
            <div
              className="h-64 bg-cover bg-center rounded-2xl mb-6 flex-shrink-0"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')"
              }}
            />
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Perché scegliere la formazione finanziata
            </h3>
            <p className="text-sm text-slate-600 flex-grow">
              Un'opportunità per acquisire competenze professionali di alta
              qualità, ottenere certificazioni riconosciute e migliorare le
              proprie prospettive lavorative, tutto senza costi diretti.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* I nostri servizi - Formazione Finanziata */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="section-padding relative">
          <div className="container-page space-y-10">
            {/* Servizi offerti */}
            <div className="fade-in-up">
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6 text-center">
                Cosa offriamo noi di Riverloop
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl border border-dashed border-white/40 bg-white/20 backdrop-blur-sm p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/30 flex-shrink-0">
                      <Handshake className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      Gestione completa dei corsi
                    </h4>
                  </div>
                  <p className="text-sm text-white/90 mb-4">
                    Ci offriamo di gestire corsi con{" "}
                    <strong className="text-white">decine di studenti</strong>,
                    occupandoci della <strong className="text-white">ricerca
                    sia di studenti sia dei docenti</strong>. Gestiamo
                    l'intero processo formativo dall'inizio alla fine.
                  </p>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                      <span>Ricerca e selezione studenti</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                      <span>Ricerca e selezione docenti</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                      <span>Organizzazione e gestione completa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                      <span>Supporto amministrativo</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-dashed border-white/40 bg-white/20 backdrop-blur-sm p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/30 flex-shrink-0">
                      <Users className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      Fornitura parco docenti
                    </h4>
                  </div>
                  <p className="text-sm text-white/90 mb-4">
                    Oppure forniamo soltanto il nostro{" "}
                    <strong className="text-white">parco docenti</strong> che
                    vanta circa <strong className="text-white">500 docenti</strong>{" "}
                    con esperienza in vari settori professionali.
                  </p>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                      <span>Circa 500 docenti qualificati</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                      <span>Esperienza in vari settori professionali</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                      <span>Selezione mirata in base alle esigenze</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                      <span>Supporto continuo durante i corsi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vantaggi */}
            <div className="rounded-2xl border border-dashed border-white/40 bg-white/20 backdrop-blur-sm p-6 fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 text-white" />
                <h4 className="text-lg font-semibold text-white">
                  Vantaggi della formazione finanziata
                </h4>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div>
                  <p className="text-sm font-semibold text-white mb-1">
                    Nessun costo
                  </p>
                  <p className="text-xs text-white/90">
                    Percorsi formativi completamente finanziati
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">
                    Alta qualità
                  </p>
                  <p className="text-xs text-white/90">
                    Docenti esperti e programmi strutturati
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">
                    Certificazioni
                  </p>
                  <p className="text-xs text-white/90">
                    Attestati riconosciuti e validi per il CV
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">
                    Supporto completo
                  </p>
                  <p className="text-xs text-white/90">
                    Assistenza durante tutto il percorso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditamento Regione Sicilia */}
      <SectionShell
        eyebrow="Accreditamento"
        title="Accreditamento Regione Sicilia"
        subtitle="Abbiamo ottenuto l'accreditamento dalla Regione Sicilia, ampliando la nostra offerta formativa con corsi in presenza su vari settori professionali."
      >
        <div className="space-y-10">
          {/* Header con logo */}
          <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr] lg:items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 flex-shrink-0">
                  <Building2 className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Ente di formazione accreditato
                  </h3>
                  <p className="text-sm text-slate-600">
                    Regione Sicilia
                  </p>
                </div>
              </div>
              <p className="text-base text-slate-600">
                L'accreditamento ottenuto dalla Regione Sicilia ci permette di
                svolgere <strong className="text-slate-900">corsi in presenza</strong> su{" "}
                <strong className="text-slate-900">vari settori professionali</strong>,
                ampliando significativamente la nostra offerta formativa e
                permettendoci di raggiungere un pubblico più ampio con percorsi
                riconosciuti a livello regionale.
              </p>
              <Link
                to="/accreditamento-regione-sicilia"
                className="inline-flex items-center text-sm font-semibold text-pink-600 hover:text-pink-700 transition-colors mt-4"
              >
                Approfondisci
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center justify-center gap-4 rounded-3xl border border-slate-200 bg-white p-6">
              <img
                src="/regione.png"
                alt="Regione Sicilia"
                className="h-20 w-auto opacity-90"
              />
              <div className="text-sm">
                <p className="font-semibold text-slate-900">
                  Ente di formazione
                </p>
                <p className="text-slate-600">
                  Accreditato dalla<br />Regione Sicilia
                </p>
              </div>
            </div>
          </div>

          {/* Vantaggi e caratteristiche */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Corsi in presenza
              </h4>
              <p className="text-sm text-slate-600">
                Formazione diretta e interattiva con docenti qualificati e
                strutture adeguate per un apprendimento efficace.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                <Briefcase className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Vari settori professionali
              </h4>
              <p className="text-sm text-slate-600">
                Percorsi formativi diversificati su più ambiti professionali,
                per rispondere alle esigenze del mercato del lavoro.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Certificazioni riconosciute
              </h4>
              <p className="text-sm text-slate-600">
                Attestati validi per il riconoscimento delle competenze acquisite,
                riconosciuti a livello regionale.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* CTA Docenti */}
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
              Vuoi diventare un docente Riverloop?
            </h2>
            <p className="text-base text-slate-600 mb-6 max-w-2xl mx-auto">
              Consulta la nostra pagina{" "}
              <strong className="text-slate-900">Lavora con noi</strong> per
              scoprire come entrare a far parte del nostro team di formatori e
              contribuire a formare la prossima generazione di professionisti
              digitali.
            </p>
            <Link
              to="/lavora-con-noi"
              className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Lavora con noi
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
