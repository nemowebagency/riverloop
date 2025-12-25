import type { FC } from "react";
import { Hero } from "@/components/Hero";
import { PartnersSection } from "@/components/PartnersSection";
import { HomeTracksSection } from "@/components/HomeTracksSection";
import { HomeCtaSection } from "@/components/HomeCtaSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ServicesCtaSection } from "@/components/ServicesCtaSection";
import { WhySection } from "@/components/WhySection";
import { SEO } from "@/components/SEO";

export const HomePage: FC = () => {
  return (
    <>
      <SEO
        title="Riverloop - Sviluppo Software, Formazione e Consulenza Digitale"
        description="Riverloop offre soluzioni complete per lo sviluppo software, formazione professionale e consulenza digitale. Sviluppiamo applicazioni web, mobile, software personalizzati, corsi tech e certificazioni. Servizi per aziende, enti pubblici e privati in tutta Italia."
        keywords="sviluppo software, formazione professionale, consulenza digitale, sviluppo web, app mobile, corsi tech, certificazioni informatiche, formazione finanziata, intelligenza artificiale, blockchain, Riverloop"
        canonical="https://www.riverloop.it/"
        ogImage="https://www.riverloop.it/logoviola.webp"
      />
      <Hero />
      <HomeTracksSection />
      <HomeCtaSection />
      <ServicesSection />
      <ServicesCtaSection />
      <WhySection />
      <PartnersSection />
    </>
  );
};

