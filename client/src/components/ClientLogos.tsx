import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

// === Brand Arrays ===
const clientsTop = [
  "Parle",
  "ASR Doctors Clinic",
  "Naksha",
  "MKT Rugs",
  "Dhruwo Cabs",
  "Kulina Entertainment",
  "Mehakleen",
];

const clientsBottom = [
  "Celestial Guidance",
  "KODC",
  "RedOchre",
  "Viracocha Little Learners",
  "The Smash",
  "Teamax",
  "Transformation & Strength",
];

const ClientLogos: React.FC = () => {
  useEffect(() => {
    // Destroy any existing Splide instances
    document.querySelectorAll(".splide").forEach((el) => {
      const instance = (el as any).splide;
      if (instance) instance.destroy(true);
    });

    // Top slider - Left → Right
    const topSplide = new Splide("#splide-top", {
      type: "loop",
      drag: "free",
      arrows: false,
      pagination: false,
      perPage: 5,
      gap: "1rem",
      autoScroll: {
        speed: 1.1,
        pauseOnHover: true,
      },
      breakpoints: {
        1536: { perPage: 5, gap: "2.5rem" },
        1280: { perPage: 4, gap: "2rem" },
        1024: { perPage: 4, gap: "1.5rem" },
        768: { perPage: 4, gap: "1rem" },
        480: { perPage: 3, gap: "0.5rem" },
      },
    });
    topSplide.mount({ AutoScroll });

    // Bottom slider - Right → Left
    const bottomSplide = new Splide("#splide-bottom", {
      type: "loop",
      drag: "free",
      arrows: false,
      pagination: false,
      perPage: 5,
      gap: "3rem",
      autoScroll: {
        speed: -1.3,
        pauseOnHover: true,
      },
      breakpoints: {
        1536: { perPage: 5, gap: "2.5rem" },
        1280: { perPage: 4, gap: "2rem" },
        1024: { perPage: 4, gap: "1.5rem" },
        768: { perPage: 4, gap: "1rem" },
        480: { perPage: 3, gap: "0.5rem" },
      },
    });
    bottomSplide.mount({ AutoScroll });

    // Cleanup
    return () => {
      topSplide.destroy(true);
      bottomSplide.destroy(true);
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-[1680px] mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
          <p className="text-xs sm:text-sm md:text-base font-semibold text-brand-blue-700 uppercase tracking-wider">
            Trusted by leading brands
          </p>
        </div>

        {/* === Top Scroller === */}
        <div
          id="splide-top"
          className="splide client-logo-slider gradient-mask-horizontal"
          aria-label="Top client logo scroller"
        >
          <div className="splide__track">
            <ul className="splide__list">
              {clientsTop.map((client, index) => (
                <li
                  key={`top-${index}`}
                  className="splide__slide flex justify-center items-center"
                >
                  <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 hover:text-brand-blue-700 hover:scale-110 transition-all duration-300 whitespace-nowrap">
                    {client}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* === Bottom Scroller === */}
        <div
          id="splide-bottom"
          className="splide client-logo-slider mt-10 gradient-mask-horizontal"
          aria-label="Bottom client logo scroller"
        >
          <div className="splide__track">
            <ul className="splide__list">
              {clientsBottom.map((client, index) => (
                <li
                  key={`bottom-${index}`}
                  className="splide__slide flex justify-center items-center"
                >
                  <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 hover:text-brand-blue-700 hover:scale-110 transition-all duration-300 whitespace-nowrap">
                    {client}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Gradient Mask Styles */}
      <style>{`
        .gradient-mask-horizontal {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }
        .splide__slide {
          transition: transform 0.3s ease;
        }
        .splide__slide:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
