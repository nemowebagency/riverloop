import type { FC } from "react";
import { SectionShell } from "@/components/SectionShell";
import { SEO } from "@/components/SEO";

export const PrivacyPolicyPage: FC = () => {

  return (
    <>
      <SEO
        title="Privacy Policy - Riverloop | Informativa sulla Privacy e GDPR"
        description="Privacy Policy di Riverloop conforme al GDPR. Informazioni sul trattamento dei dati personali, diritti dell'interessato, sicurezza dei dati. Certificazione ISO 27001 per la sicurezza delle informazioni."
        keywords="privacy policy, GDPR, trattamento dati personali, sicurezza dati, diritti privacy, Riverloop privacy, ISO 27001"
        canonical="https://www.riverloop.it/privacy-policy"
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
            <span className="tag-pill">Privacy Policy</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Informativa sulla privacy e trattamento dei dati personali.
            </p>
          </div>
        </div>
      </section>

      <SectionShell eyebrow="Privacy" title="Informativa sulla Privacy">
        <div className="max-w-4xl space-y-8 text-slate-700">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              1. Titolare del Trattamento
            </h2>
            <p className="text-base leading-relaxed mb-2">
              Il Titolare del trattamento dei dati personali è:
            </p>
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
              2. Dati Raccolti
            </h2>
            <p className="text-base leading-relaxed mb-4">
              Riverloop raccoglie e tratta i seguenti tipi di dati personali:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4">
              <li><strong>Dati di identificazione:</strong> nome, cognome, email, numero di telefono</li>
              <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, pagine visitate</li>
              <li><strong>Dati forniti volontariamente:</strong> informazioni inserite nei form di contatto, richieste di preventivo</li>
              <li><strong>Dati di utilizzo:</strong> informazioni su come utilizzi il nostro sito web e i nostri servizi</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              3. Finalità del Trattamento
            </h2>
            <p className="text-base leading-relaxed mb-4">
              I dati personali vengono trattati per le seguenti finalità:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4">
              <li>Fornire i servizi richiesti (sviluppo software, formazione, consulenza)</li>
              <li>Rispondere alle richieste di informazioni e preventivi</li>
              <li>Gestire la registrazione e l'accesso alla piattaforma formativa</li>
              <li>Inviare comunicazioni relative ai servizi offerti</li>
              <li>Migliorare l'esperienza utente sul sito web</li>
              <li>Rispettare obblighi di legge e normativi</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              4. Base Giuridica del Trattamento
            </h2>
            <p className="text-base leading-relaxed">
              Il trattamento dei dati personali si basa su: esecuzione di un contratto, consenso dell'interessato, adempimento di obblighi di legge, legittimo interesse del titolare.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              5. Conservazione dei Dati
            </h2>
            <p className="text-base leading-relaxed">
              I dati personali vengono conservati per il tempo necessario alle finalità per cui sono stati raccolti, nel rispetto dei termini di legge applicabili. I dati di navigazione vengono conservati per un periodo massimo di 12 mesi.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              6. Diritti dell'Interessato
            </h2>
            <p className="text-base leading-relaxed mb-4">
              Ai sensi del Regolamento UE 2016/679 (GDPR), hai il diritto di:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4">
              <li>Accedere ai tuoi dati personali</li>
              <li>Richiedere la rettifica o la cancellazione dei dati</li>
              <li>Opporti al trattamento dei dati</li>
              <li>Richiedere la limitazione del trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
              <li>Proporre reclamo al Garante per la protezione dei dati personali</li>
            </ul>
            <p className="text-base leading-relaxed mt-4">
              Per esercitare i tuoi diritti, puoi contattarci all'indirizzo:{" "}
              <a href="mailto:amministrazione@riverloop.it" className="text-pink-600 hover:text-pink-700">
                amministrazione@riverloop.it
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              7. Sicurezza dei Dati
            </h2>
            <p className="text-base leading-relaxed">
              Riverloop adotta misure tecniche e organizzative appropriate per proteggere i dati personali da accesso non autorizzato, perdita, distruzione o alterazione. I nostri sistemi sono certificati ISO 27001 per la sicurezza delle informazioni.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              8. Comunicazione dei Dati
            </h2>
            <p className="text-base leading-relaxed">
              I dati personali potrebbero essere comunicati a: fornitori di servizi IT, partner commerciali, autorità competenti quando richiesto dalla legge. I dati non vengono mai venduti a terze parti per finalità di marketing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              9. Modifiche alla Privacy Policy
            </h2>
            <p className="text-base leading-relaxed">
              Riverloop si riserva il diritto di modificare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento.
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

