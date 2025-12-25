import type { FC } from "react";
import { SectionShell } from "@/components/SectionShell";
import { SEO } from "@/components/SEO";

export const CookiePolicyPage: FC = () => {

  return (
    <>
      <SEO
        title="Cookie Policy - Riverloop | Informativa sull'Utilizzo dei Cookie"
        description="Cookie Policy di Riverloop: informazioni dettagliate sull'utilizzo dei cookie tecnici, di prestazioni e di funzionalità sul nostro sito web. Gestione dei cookie e privacy."
        keywords="cookie policy, informativa cookie, gestione cookie, privacy cookie, Riverloop cookie"
        canonical="https://www.riverloop.it/cookie-policy"
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
            <span className="tag-pill">Cookie Policy</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Cookie Policy
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Informazioni sull'utilizzo dei cookie sul nostro sito web.
            </p>
          </div>
        </div>
      </section>

      <SectionShell eyebrow="Informazioni" title="Cookie Policy di Riverloop">
        <div className="max-w-4xl space-y-8 text-slate-700">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              1. Cosa sono i Cookie
            </h2>
            <p className="text-base leading-relaxed">
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet, smartphone) quando visiti un sito web. I cookie permettono al sito di ricordare le tue azioni e preferenze per un determinato periodo di tempo, così non devi reinserirle ogni volta che torni sul sito o navighi da una pagina all'altra.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              2. Tipi di Cookie utilizzati
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Cookie Tecnici (Necessari)
                </h3>
                <p className="text-base leading-relaxed">
                  Questi cookie sono essenziali per il funzionamento del sito e non possono essere disattivati. Includono cookie che permettono di ricordare le tue preferenze di navigazione, come la lingua selezionata o la regione, e cookie di sicurezza.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Cookie di Prestazioni
                </h3>
                <p className="text-base leading-relaxed">
                  Questi cookie ci aiutano a capire come i visitatori interagiscono con il nostro sito web, raccogliendo informazioni in forma anonima. Ci permettono di migliorare il funzionamento del sito e l'esperienza utente.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Cookie di Funzionalità
                </h3>
                <p className="text-base leading-relaxed">
                  Questi cookie permettono al sito di ricordare le scelte che fai (come il tuo nome utente, la lingua o la regione) e forniscono funzionalità migliorate e più personali.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              3. Cookie di Terze Parti
            </h2>
            <p className="text-base leading-relaxed mb-4">
              Il nostro sito può utilizzare servizi di terze parti che impostano cookie sul tuo dispositivo. Questi includono:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4">
              <li>Google Analytics: per analizzare l'utilizzo del sito</li>
              <li>Social Media: per consentire la condivisione di contenuti sui social network</li>
              <li>Servizi di mappatura: per visualizzare mappe interattive</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              4. Gestione dei Cookie
            </h2>
            <p className="text-base leading-relaxed mb-4">
              Puoi gestire o eliminare i cookie in qualsiasi momento attraverso le impostazioni del tuo browser. Tuttavia, tieni presente che disabilitare alcuni cookie potrebbe limitare la funzionalità del sito.
            </p>
            <p className="text-base leading-relaxed">
              Per maggiori informazioni su come gestire i cookie nei principali browser:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mt-2">
              <li>Chrome: Impostazioni → Privacy e sicurezza → Cookie</li>
              <li>Firefox: Opzioni → Privacy e sicurezza → Cookie</li>
              <li>Safari: Preferenze → Privacy → Cookie</li>
              <li>Edge: Impostazioni → Privacy, ricerca e servizi → Cookie</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              5. Aggiornamenti della Cookie Policy
            </h2>
            <p className="text-base leading-relaxed">
              Riverloop si riserva il diritto di aggiornare questa Cookie Policy in qualsiasi momento. Ti consigliamo di consultare periodicamente questa pagina per essere informato su eventuali modifiche. La data dell'ultimo aggiornamento è indicata in fondo a questa pagina.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              6. Contatti
            </h2>
            <p className="text-base leading-relaxed">
              Per domande o richieste riguardanti l'utilizzo dei cookie sul nostro sito, puoi contattarci all'indirizzo email:{" "}
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

