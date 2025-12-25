import type { FC } from "react";
import { useEffect, useRef } from "react";

const partners = [
  "AccademiaDelGusto.png",
  "ales.png",
  "AndreaAsaro.png",
  "BarBonventre.png",
  "BeYou.png",
  "BonifatoCalcio.png",
  "CarlaFerroni.png",
  "DueCLimited.png",
  "FigliDItalia.png",
  "HolidaySicily.png",
  "LivingLab.png",
  "MangiareSicano.png",
  "Riverloop.png",
  "Scopeltour.png",
  "SimoneGrasso.png",
  "SocialSail.png"
];

const partnerAltTexts: Record<string, string> = {
  "AccademiaDelGusto.png": "Logo del partner Accademia del Gusto",
  "ales.png": "Logo del partner Alessandro Accomando",
  "AndreaAsaro.png": "Logo del partner Andrea Asaro",
  "BarBonventre.png": "Logo del partner Bar Bonventre",
  "BeYou.png": "Logo del partner BeYou",
  "BonifatoCalcio.png": "Logo del partner Bonifato",
  "CarlaFerroni.png": "Logo del partner Carla Ferroni",
  "DueCLimited.png": "Logo del partner DueCLimited",
  "FigliDItalia.png": "Logo del partner Figli d'Italia",
  "HolidaySicily.png": "Logo del partner Holiday Sicily",
  "LivingLab.png": "Logo del partner Livinglab",
  "MangiareSicano.png": "Logo del partner Mangiare Sicano",
  "Riverloop.png": "Logo del partner Riverloop",
  "Scopeltour.png": "Logo del partner Scopeltour",
  "SimoneGrasso.png": "Logo del partner Simone Grasso",
  "SocialSail.png": "Logo del partner Social Sail"
};

export const PartnersSection: FC = () => {
  const partnersWrapperRef = useRef<HTMLDivElement>(null);

  // Auto-scroll partners carousel (infinite left scroll)
  useEffect(() => {
    const wrapper = partnersWrapperRef.current;
    if (!wrapper) return;

    let animationId: number;
    let currentOffset = 0;
    const partnersCount = partners.length;

    const updateCardWidth = () => {
      const isMobile = window.innerWidth < 768;
      return isMobile ? window.innerWidth / 3 : window.innerWidth / 6;
    };

    const getOneSetWidth = () => {
      const cardWidth = updateCardWidth();
      return partnersCount * cardWidth;
    };

    const animate = () => {
      const wrapper = partnersWrapperRef.current;
      if (!wrapper) {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        return;
      }

      currentOffset -= 1;
      const oneSetWidth = getOneSetWidth();

      if (Math.abs(currentOffset) >= oneSetWidth) {
        currentOffset = 0;
      }

      wrapper.style.transform = `translate3d(${currentOffset}px, 0, 0)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      currentOffset = 0;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="py-10 md:py-14 bg-slate-50">
      <div className="container-page mb-12">
        <div className="text-center space-y-4">
          <span className="tag-pill">Collaborazioni</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            I nostri partner
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="relative">
          <div
            ref={partnersWrapperRef}
            className="flex items-center"
            style={{
              willChange: "transform",
              transition: "none"
            }}
          >
            {/* Triple the partners array for seamless infinite scroll */}
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-32 w-[calc(100vw/3)] md:w-[calc(100vw/6)]"
              >
                <img
                  src={`/partner/${partner}`}
                  alt={partnerAltTexts[partner] || partner.replace(".png", "")}
                  className="max-h-16 md:max-h-20 max-w-full object-contain px-4 md:px-8 opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

