import type { FC } from "react";
import { SectionShell } from "@/components/SectionShell";
import { SEO } from "@/components/SEO";
import {
  Code2,
  Globe2,
  Smartphone,
  Gamepad2,
  Building2,
  Briefcase,
  Users,
  Server,
  Database,
  Palette,
  Workflow,
  Shield,
  CheckCircle2,
  Zap,
  Brain,
  Link as LinkIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const SviluppoSoftwarePage: FC = () => {
  return (
    <>
      <SEO
        title="Sviluppo Software - Riverloop | Web, Mobile, Videogiochi, AI e Blockchain"
        description="Sviluppo software personalizzato per aziende, enti pubblici e privati. Creiamo applicazioni web, app mobile, videogiochi, software gestionali, soluzioni AI e blockchain. Stack tecnologico moderno: React, Node.js, MongoDB, PostgreSQL, Python, TensorFlow."
        keywords="sviluppo software, sviluppo web, app mobile, videogiochi, software gestionali, intelligenza artificiale, blockchain, React, Node.js, MongoDB, PostgreSQL, sviluppo applicazioni, software personalizzato"
        canonical="https://www.riverloop.it/sviluppo-software"
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
            <span className="tag-pill">Sviluppo Software</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Soluzioni software su misura per ogni esigenza
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Dallo sviluppo web alle app mobile, dai videogiochi ai software gestionali: creiamo soluzioni digitali innovative per aziende, enti pubblici e privati.
            </p>
          </div>
        </div>
      </section>

      {/* Servizi principali */}
      <SectionShell
        eyebrow="I nostri servizi"
        title="Soluzioni digitali complete e personalizzate"
        subtitle="Dalla progettazione allo sviluppo, fino alla manutenzione e all'evoluzione: accompagniamo i nostri clienti in ogni fase del percorso digitale."
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
              Applicazioni software personalizzate costruite su misura per le tue esigenze. Soluzioni integrate con i tuoi sistemi esistenti e orientate ai processi reali della tua organizzazione.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <Globe2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Sviluppo Web
            </h3>
            <p className="text-sm text-slate-600">
              Siti web e web app moderne, responsive e sicure. Piattaforme scalabili che crescono con il tuo business, ottimizzate per performance e SEO.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <Smartphone className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              App Mobile
            </h3>
            <p className="text-sm text-slate-600">
              Applicazioni mobile native e cross-platform per iOS e Android. Soluzioni intuitive che offrono un'esperienza utente ottimale su ogni dispositivo.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <Gamepad2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Sviluppo Videogiochi
            </h3>
            <p className="text-sm text-slate-600">
              Giochi per PC, console e mobile. Dalla progettazione alle meccaniche di gioco, fino allo sviluppo completo con motori grafici all'avanguardia.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <Workflow className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Software Gestionali
            </h3>
            <p className="text-sm text-slate-600">
              Soluzioni gestionali per vendite, operations e back-office. Dashboard chiare con KPI in evidenza per prendere decisioni basate sui dati.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
              <Palette className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              UX/UI Design
            </h3>
            <p className="text-sm text-slate-600">
              Design system, interfacce pulite e asset grafici 2D/3D. Progettiamo esperienze utente intuitive che migliorano l'engagement e la soddisfazione degli utenti.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* Per chi sviluppiamo */}
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
        <div className="container-page relative py-16 md:py-24">
          <div className="space-y-10">
            <header className="max-w-3xl space-y-4 fade-in-up">
              <span className="tag-pill bg-white/20 backdrop-blur-sm text-white border-white/30">Per chi lavoriamo</span>
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                  Soluzioni per aziende, enti pubblici e privati
                </h2>
                <p className="text-base md:text-lg text-white/90">
                  Sviluppiamo software e applicazioni per organizzazioni di ogni dimensione, con particolare attenzione alle specifiche esigenze di ogni settore.
                </p>
              </div>
            </header>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-3xl border border-white/20 bg-white/95 backdrop-blur-sm p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Enti Pubblici
                </h3>
                <p className="text-sm text-slate-600">
                  Soluzioni digitali per la pubblica amministrazione: piattaforme per servizi al cittadino, sistemi gestionali, portali informativi e applicazioni per la digitalizzazione dei processi pubblici.
                </p>
              </div>

              <div className="rounded-3xl border border-white/20 bg-white/95 backdrop-blur-sm p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Aziende Private
                </h3>
                <p className="text-sm text-slate-600">
                  Software personalizzati per PMI e grandi imprese: soluzioni ERP, CRM, e-commerce, intranet aziendali e applicazioni per l'ottimizzazione dei processi aziendali.
                </p>
              </div>

              <div className="rounded-3xl border border-white/20 bg-white/95 backdrop-blur-sm p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Privati e Professionisti
                </h3>
                <p className="text-sm text-slate-600">
                  Piccoli software personalizzati, consulenza tecnologica e supporto per privati e professionisti che vogliono iniziare il proprio progetto digitale o ottimizzare i propri processi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Il nostro processo */}
      <SectionShell
        eyebrow="Il nostro processo"
        title="Come lavoriamo insieme"
        subtitle="Un metodo strutturato che garantisce qualità, trasparenza e risultati misurabili in ogni fase del progetto."
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 text-lg font-semibold">
              01
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Discovery</h3>
            <p className="text-sm text-slate-600">
              Analisi degli obiettivi, raccolta requisiti e definizione della roadmap di progetto. Comprendiamo le tue esigenze per proporre la soluzione migliore.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 text-lg font-semibold">
              02
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Design</h3>
            <p className="text-sm text-slate-600">
              Wireframe, UX/UI e definizione dell'architettura tecnica e funzionale. Progettiamo l'esperienza utente e la struttura del software.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 text-lg font-semibold">
              03
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Development</h3>
            <p className="text-sm text-slate-600">
              Cicli iterativi di sviluppo, demo frequenti e validazione continua con il cliente. Lavoriamo in modo agile per garantire la massima qualità.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-1 ring-pink-500/30 text-lg font-semibold">
              04
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Release & Support</h3>
            <p className="text-sm text-slate-600">
              Go-live, monitoraggio e miglioramenti continui in base ai feedback e ai dati reali. Ti supportiamo anche dopo il lancio.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* Tecnologie e competenze */}
      <SectionShell
        eyebrow="Tecnologie"
        title="Stack tecnologico moderno e scalabile"
        subtitle="Utilizziamo le tecnologie più avanzate e affidabili del mercato per garantire performance, sicurezza e scalabilità."
        noTopPadding={true}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/* Backend */}
          <div className="group rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 transition hover:border-pink-300 hover:shadow-lg">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-2 ring-pink-500/20">
                <Server className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "MongoDB", "PostgreSQL", "API REST", "GraphQL", "Nest.js"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition group-hover:ring-pink-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="group rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 transition hover:border-pink-300 hover:shadow-lg">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-2 ring-pink-500/20">
                <Globe2 className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Tailwind CSS", "Bootstrap", "Postman"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition group-hover:ring-pink-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="group rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 transition hover:border-pink-300 hover:shadow-lg">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-2 ring-pink-500/20">
                <Smartphone className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Mobile</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React Native", "Flutter", "Swift", "Kotlin"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition group-hover:ring-pink-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="group rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 transition hover:border-pink-300 hover:shadow-lg">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-2 ring-pink-500/20">
                <Database className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Database</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["PostgreSQL", "MySQL", "MongoDB", "Redis"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition group-hover:ring-pink-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Innovazione: AI e Blockchain */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="container-page relative py-16 md:py-24">
          <div className="space-y-10">
            <header className="max-w-3xl space-y-4 fade-in-up text-center mx-auto">
              <span className="tag-pill bg-white/20 backdrop-blur-sm text-white border-white/30">Innovazione</span>
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                  Tecnologie all'avanguardia per il futuro digitale
                </h2>
                <p className="text-base md:text-lg text-white/90">
                  Siamo all'avanguardia nell'implementazione di soluzioni basate su intelligenza artificiale e blockchain. 
                  Trasformiamo tecnologie innovative in strumenti concreti per il successo della vostra azienda.
                </p>
              </div>
            </header>
          </div>
        </div>
      </section>

      {/* AI Model & Software */}
      <SectionShell
        eyebrow="AI Model & Software"
        title="Soluzioni basate sull'intelligenza artificiale"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:items-stretch">
          <div className="space-y-6">
            <p className="text-base text-slate-600">
              Cercate di sviluppare soluzioni basate sull'<strong>intelligenza artificiale</strong>? Siamo il partner ideale per trasformare le vostre idee in <strong>applicazioni intelligenti</strong> e innovative. Il nostro team di esperti in <strong>AI</strong> crea <strong>modelli avanzati</strong> e <strong>soluzioni personalizzate</strong>, ottimizzando i <strong>processi aziendali</strong> e migliorando l'<strong>efficienza operativa</strong>.
            </p>
            <p className="text-base text-slate-600">
              Offriamo tecnologie all'avanguardia per il <strong>machine learning</strong>, il <strong>deep learning</strong> e l'<strong>elaborazione del linguaggio naturale</strong>, progettate per rispondere alle specifiche esigenze del vostro business. Con il nostro supporto, l'<strong>intelligenza artificiale</strong> diventa uno <strong>strumento strategico</strong> per il successo e l'<strong>innovazione</strong> della vostra azienda.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 flex flex-col">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-2 ring-pink-500/20">
                <Brain className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Il nostro stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Python", "PyTorch", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Keras", "TensorFlow", "Colab", "Tableau"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Blockchain Solution */}
      <SectionShell
        eyebrow="Blockchain Solution"
        title="Soluzioni blockchain innovative e sicure"
        noTopPadding={true}
      >
        <div className="grid gap-8 md:grid-cols-2 lg:items-stretch">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 order-2 md:order-1 flex flex-col">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500 ring-2 ring-pink-500/20">
                <LinkIcon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Il nostro stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Ethereum", "Solana", "Web3.js", "Solana/web3.js", "Solidity", "Rust", "IPFS", "Solana SPL Token"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <p className="text-base text-slate-600">
              Affidandovi a Riverloop, potete trasformare la vostra visione <strong>blockchain</strong> in una realtà <strong>sicura</strong> e <strong>innovativa</strong>.
            </p>
            <p className="text-base text-slate-600">
              Offriamo supporto nella creazione di <strong>piattaforme blockchain personalizzate</strong>, garantendo <strong>sicurezza</strong>, <strong>tracciabilità</strong> e <strong>affidabilità</strong>, per sfruttare appieno il potenziale della tecnologia e rivoluzionare la gestione di <strong>dati</strong> e <strong>transazioni</strong>.
            </p>
            <p className="text-base text-slate-600">
              Sviluppiamo <strong>smart contract</strong> su piattaforme leader come <strong>Ethereum</strong> e <strong>Solana</strong>, creando <strong>soluzioni decentralizzate</strong> che garantiscono <strong>trasparenza</strong>, <strong>immutabilità</strong> e riduzione dei <strong>costi operativi</strong>. La nostra expertise copre l'intero <strong>ecosistema blockchain</strong>, dalla <strong>progettazione iniziale</strong> fino all'<strong>implementazione</strong> e alla <strong>manutenzione continua</strong>.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* CTA */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="container-page relative py-16 md:py-20">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 text-center shadow-lg max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Pronto a iniziare il tuo progetto?
            </h2>
            <p className="text-base text-slate-600 mb-6 max-w-2xl mx-auto">
              Contattaci per una consulenza gratuita e scopri come possiamo trasformare le tue idee in soluzioni software innovative e performanti.
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
