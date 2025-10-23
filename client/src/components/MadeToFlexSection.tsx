import React, { useRef, useState, MouseEvent } from "react";
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
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
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

const creativeServices = [
  {
    title: "Data Visualization",
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/e2c29563e6755f3453a95cabc446082744a9fcb8-176x112.png",
  },
  {
    title: "Graphic and Illustrations",
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/54bd5ffc9bf7d48b6a71ed6273bf99a1cb64f28f-176x112.png",
  },
  {
    title: "Interactive Report Elements",
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/0bc81e542706800ee746d3277944508789b5d525-176x112.png",
  },
  {
    title: "Copywriting and Editing",
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/af255a69fa05342b703e023e4242637961d98769-176x112.png",
  },
];

export const CreativeServicesSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="relative flex flex-col overflow-hidden bg-bor-background text-bor-foreground dark">
      <div className="mx-auto h-full w-full max-w-screen-2xl">
        <div className="mx-4 flex w-full flex-col justify-end gap-10 pt-11 pb-8 sm:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16 static min-h-[680px] md:gap-20 md:pt-14 md:pb-10 lg:gap-20 lg:pt-[88px] lg:pb-12 md:min-h-full">
          <div className="absolute inset-0 z-0 flex h-full w-full flex-col bg-bor-background max-md:max-h-[800px]">
            <img
              alt=""
              loading="lazy"
              className="hidden h-full w-full object-cover object-center md:block"
              src="https://cdn.sanity.io/images/k0dlbavy/production/2e6fc4afd008200fd365792091ceb4c629967f09-3840x1432.png?auto=format&fit=max&q=100&w=1920"
              width="1920"
              height="716"
            />
            <img
              alt=""
              loading="lazy"
              className="h-full w-full object-cover object-center md:hidden max-md:max-h-[800px]"
              src="https://cdn.sanity.io/images/k0dlbavy/production/c2081b809044e9c2b82381a3a585e8fbe4410b8c-720x1360.png?auto=format&fit=max&q=100&w=360"
              width="360"
              height="680"
            />
            <div className="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-bor-background to-transparent md:hidden"></div>
          </div>
          <div className="absolute inset-0 z-0 flex h-full w-full flex-col bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
          <div className="z-10 flex flex-col max-w-[850px] max-md:mt-[250px]">
            <span className="mb-2 font-semibold uppercase tracking-widest text-sm lg:mb-4">
              Creative services
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight xl:leading-none">
              <span className="font-serif text-[calc(100%+4px)] font-normal">
                eBooks &amp; report design
              </span>
            </h1>
            <p className="mt-4 max-w-[600px] text-base lg:mt-8 lg:text-lg">
              Supercharge your reports, eBooks and digital learning content with
              top global designers and an easy-to-use collaboration platform.
            </p>
            <div className="mt-4 flex w-full max-w-full flex-row gap-3 justify-stretch max-md:flex-col md:self-start lg:mt-8">
              <button className="group/button relative overflow-hidden rounded-md bg-blue-600 px-6 py-4 text-center font-semibold text-white text-sm leading-5 transition-shadow hover:bg-blue-700">
                <span className="block">Book a demo</span>
              </button>
            </div>
          </div>
          <div
            ref={sliderRef}
            className="relative -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-12 2xl:-mx-16 overflow-x-hidden select-none"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div
              className={`flex hover:animate-pause ${
                isDown ? "cursor-grabbing" : "cursor-grab animate-scroll"
              }`}
            >
              {[...creativeServices, ...creativeServices].map((item, index) => (
                <div key={index} className="flex-shrink-0 px-2">
                  <div className="flex h-[72px] flex-row items-center gap-4 rounded-lg bg-background/10 py-2 pl-2 pr-3 text-white backdrop-blur-sm">
                    <img
                      alt={item.title}
                      loading="lazy"
                      className="h-14 w-14 rounded-md object-cover pointer-events-none"
                      src={item.imageUrl}
                      width="88"
                      height="56"
                    />
                    <span className="text-sm">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
