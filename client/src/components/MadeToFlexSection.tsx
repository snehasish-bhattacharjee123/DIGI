import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

const cardData = [
  {
    title: (
      <>
        Top{" "}
        <em className="font-serif font-normal not-italic">
          global creative talent
        </em>
      </>
    ),
    description:
      "We're not restricted by borders. Top-tier talent, powered by AI means consistently high-quality work for your brand.",
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/71dc609798d4610f6a3a3b2759e07075e0692331-1050x1200.png",
  },
  {
    title: (
      <>
        <em className="font-serif font-normal not-italic">Ultra-fast</em>{" "}
        turnaround times
      </>
    ),
    description:
      "With dedicated project managers, collaborative online tools and the expert use of AI, projects can be completed in as little as 12 hours.",
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/fcd887306fb2cd40740214fecf88069f9ff51111-1050x1200.png",
  },
  {
    title: (
      <>
        <em className="font-serif font-normal not-italic">Flexible</em>{" "}
        subscription model
      </>
    ),
    description:
      "Access a broad range of services, pivot as needed and work more efficiently with AI-enhanced creative, so that you never waste a dollar.",
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/e7cb5871b7cc27d276a749bc86e848cf9056ca16-1050x1200.png",
  },
];

export function MadeToFlexSection() {
  return (
    <section className="bg-bor-background text-white py-20 md:py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
          <span className="text-sm font-semibold uppercase tracking-widest text-bor-gray">
            made to flex
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Supertalented. Superfast. Super responsive. Work with a global team
            that’s purposefully{" "}
            <em className="font-serif font-normal not-italic">
              made to keep up with you.
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="group relative h-[600px] flex flex-col rounded-lg overflow-hidden bg-background/5 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative flex-grow h-2/3">
                <img
                  src={card.imageUrl}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between h-1/3">
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <p className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel Section */}
        <div className="mt-20 lg:mt-32">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
}
