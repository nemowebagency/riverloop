import type { FC } from "react";
import { SectionShell } from "@/components/SectionShell";
import { SEO } from "@/components/SEO";

export const TerminiCondizioniPage: FC = () => {

  return (
    <>
      <SEO
        title="Termini e Condizioni - Riverloop | Condizioni Generali d'Uso"
        description="Termini e Condizioni d'uso del sito web Riverloop. Condizioni generali per l'utilizzo dei servizi di sviluppo software, formazione professionale e consulenza digitale."
        keywords="termini e condizioni, condizioni generali, uso sito web, Riverloop termini, servizi Riverloop"
        canonical="https://www.riverloop.it/termini-e-condizioni"
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
            <span className="tag-pill">Termini e Condizioni</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Termini e Condizioni
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Condizioni generali di utilizzo del sito web e dei servizi Riverloop.
            </p>
          </div>
        </div>
      </section>

      <SectionShell eyebrow="Termini" title="Termini e Condizioni d'Uso">
        <div className="max-w-4xl space-y-8 text-slate-700">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              1. Accettazione dei Termini
            </h2>
            <p className="text-base leading-relaxed">
              Accedendo e utilizzando il sito web di Riverloop (www.riverloop.it), accetti di essere vincolato da questi Termini e Condizioni. Se non accetti questi termini, ti preghiamo di non utilizzare il nostro sito web.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              2. Informazioni Aziendali
            </h2>
            <div className="bg-slate-50 rounded-lg p-4 text-base">
              <p className="font-semibold text-slate-900">Riverloop S.r.l.</p>
              <p>P.IVA: 07225950828</p>
              <p>Email: amministrazione@riverloop.it</p>
              <p>Tel: +39 3517326560</p>
              <p>Ufficio: 091 700 0014</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              3. Servizi Offerti
            </h2>
            <p className="text-base leading-relaxed mb-4">
              Riverloop offre i seguenti servizi:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4">
              <li><strong>Sviluppo Software:</strong> sviluppo di applicazioni web, mobile, software personalizzati</li>
              <li><strong>Formazione Professionale:</strong> corsi tech, certificazioni informatiche e linguistiche, formazione finanziata</li>
              <li><strong>Consulenza:</strong> consulenza tecnica e strategica per la trasformazione digitale</li>
              <li><strong>Intelligenza Artificiale e Blockchain:</strong> soluzioni innovative basate su AI e blockchain</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              4. Utilizzo del Sito Web
            </h2>
            <p className="text-base leading-relaxed mb-4">
              L'utente si impegna a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4">
              <li>Utilizzare il sito web in conformità con le leggi applicabili</li>
              <li>Non utilizzare il sito per scopi illegali o non autorizzati</li>
              <li>Non tentare di accedere a aree riservate del sito</li>
              <li>Non interferire con il funzionamento del sito</li>
              <li>Fornire informazioni accurate e aggiornate nei form di contatto</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              5. Proprietà Intellettuale
            </h2>
            <p className="text-base leading-relaxed">
              Tutti i contenuti del sito web, inclusi testi, immagini, loghi, grafiche e software, sono di proprietà di Riverloop o dei suoi licenzianti e sono protetti dalle leggi sul copyright e sulla proprietà intellettuale. È vietata la riproduzione, distribuzione o utilizzo non autorizzato di qualsiasi contenuto senza il previo consenso scritto di Riverloop.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              6. Limitazione di Responsabilità
            </h2>
            <p className="text-base leading-relaxed">
              Riverloop non garantisce che il sito web sia sempre disponibile, privo di errori o sicuro. Non ci assumiamo responsabilità per eventuali danni derivanti dall'utilizzo o dall'impossibilità di utilizzare il sito web, inclusi danni diretti, indiretti, incidentali o consequenziali.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              7. Link a Siti di Terze Parti
            </h2>
            <p className="text-base leading-relaxed">
              Il nostro sito web può contenere link a siti web di terze parti. Riverloop non è responsabile per il contenuto, le politiche sulla privacy o le pratiche di tali siti web esterni. Ti consigliamo di leggere i termini e le condizioni di qualsiasi sito web di terze parti che visiti.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              8. Modifiche ai Termini
            </h2>
            <p className="text-base leading-relaxed">
              Riverloop si riserva il diritto di modificare questi Termini e Condizioni in qualsiasi momento. Le modifiche entreranno in vigore immediatamente dopo la pubblicazione sul sito web. Ti consigliamo di consultare periodicamente questa pagina per essere informato su eventuali modifiche.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              9. Legge Applicabile e Foro Competente
            </h2>
            <p className="text-base leading-relaxed">
              Questi Termini e Condizioni sono governati dalla legge italiana. Qualsiasi controversia derivante da o in relazione a questi termini sarà di competenza esclusiva dei tribunali italiani.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              10. Contatti
            </h2>
            <p className="text-base leading-relaxed">
              Per domande o chiarimenti riguardanti questi Termini e Condizioni, puoi contattarci all'indirizzo email:{" "}
              <a href="mailto:amministrazione@riverloop.it" className="text-pink-600 hover:text-pink-700">
                amministrazione@riverloop.it
              </a>
            </p>
          </div>

          <div className="pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Ultimo aggiornamento: Gennaio 2026
            </p>
          </div>
        </div>
      </SectionShell>
    </>
  );
};

