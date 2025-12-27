import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { FormazionePage } from "./pages/FormazionePage";
import { SviluppoSoftwarePage } from "./pages/SviluppoSoftwarePage";
import { ContactPage } from "./pages/ContactPage";
import { LavoraConNoiPage } from "./pages/LavoraConNoiPage";
import { CookiePolicyPage } from "./pages/CookiePolicyPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TerminiCondizioniPage } from "./pages/TerminiCondizioniPage";
import { FormatempPage } from "./pages/FormatempPage";
import { AccreditamentoRegioneSiciliaPage } from "./pages/AccreditamentoRegioneSiciliaPage";
import { EsportsTeaserSection } from "./components/EsportsTeaserSection";
import { ScrollToTop } from "./components/ScrollToTop";
import { CustomCursor } from "./components/CustomCursor";
import { CookieBanner } from "./components/CookieBanner";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { WhatsAppButton } from "./components/WhatsAppButton";

const App: FC = () => {
  return (
    <>
      <CustomCursor />
      <CookieBanner />
      <WhatsAppButton />
      <ScrollToTopButton />
      <MainLayout>
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-siamo" element={<AboutPage />} />
        <Route path="/formazione" element={<FormazionePage />} />
        <Route path="/sviluppo-software" element={<SviluppoSoftwarePage />} />
        <Route path="/contattaci" element={<ContactPage />} />
        <Route path="/lavora-con-noi" element={<LavoraConNoiPage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/termini-e-condizioni" element={<TerminiCondizioniPage />} />
        <Route path="/formatemp" element={<FormatempPage />} />
        <Route path="/accreditamento-regione-sicilia" element={<AccreditamentoRegioneSiciliaPage />} />
        {/* Piccola pagina teaser interna per Esports, la CTA va comunque al sito esterno */}
        <Route path="/esports" element={<EsportsTeaserSection />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default App;


