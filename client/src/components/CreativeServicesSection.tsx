import React, { useEffect, useRef, useState, MouseEvent, TouchEvent, KeyboardEvent } from "react";

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
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener?.("change", update);
    return () => mediaQuery.removeEventListener?.("change", update);
  }, []);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const touch = e.touches[0];
    setIsDown(true);
    setStartX(touch.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDown || !sliderRef.current) return;
    const touch = e.touches[0];
    const x = touch.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDown(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const step = 120;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      sliderRef.current.scrollBy({ left: step, behavior: "smooth" });
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      sliderRef.current.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col overflow-hidden bg-bor-background text-bor-foreground" data-mood="brand-dark" aria-label="Creative services hero">
      <div className="mx-auto h-full w-full max-w-screen-2xl">
        <div className="mx-4 flex w-full flex-col justify-end gap-10 pt-11 pb-8 sm:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16 static min-h-[680px] md:gap-20 md:pt-14 md:pb-10 lg:gap-20 lg:pt-[88px] lg:pb-12 md:min-h-full">
          {/* Background Images */}
          <div className="absolute inset-0 z-0 flex h-full w-full flex-col bg-bor-background max-md:max-h-[800px]">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              className="hidden h-full w-full object-cover object-center md:block"
              srcSet="https://cdn.sanity.io/images/k0dlbavy/production/2e6fc4afd008200fd365792091ceb4c629967f09-3840x1432.png?auto=format&fit=max&q=100&w=1280 1280w, https://cdn.sanity.io/images/k0dlbavy/production/2e6fc4afd008200fd365792091ceb4c629967f09-3840x1432.png?auto=format&fit=max&q=100&w=1920 1920w, https://cdn.sanity.io/images/k0dlbavy/production/2e6fc4afd008200fd365792091ceb4c629967f09-3840x1432.png?auto=format&fit=max&q=100&w=2560 2560w"
              sizes="(min-width: 1024px) 100vw, 0px"
              src="https://cdn.sanity.io/images/k0dlbavy/production/2e6fc4afd008200fd365792091ceb4c629967f09-3840x1432.png?auto=format&fit=max&q=100&w=1920"
            />
            <img
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center md:hidden max-md:max-h-[800px]"
              srcSet="https://cdn.sanity.io/images/k0dlbavy/production/c2081b809044e9c2b82381a3a585e8fbe4410b8c-720x1360.png?auto=format&fit=max&q=100&w=360 360w, https://cdn.sanity.io/images/k0dlbavy/production/c2081b809044e9c2b82381a3a585e8fbe4410b8c-720x1360.png?auto=format&fit=max&q=100&w=540 540w, https://cdn.sanity.io/images/k0dlbavy/production/c2081b809044e9c2b82381a3a585e8fbe4410b8c-720x1360.png?auto=format&fit=max&q=100&w=720 720w"
              sizes="100vw"
              src="https://cdn.sanity.io/images/k0dlbavy/production/c2081b809044e9c2b82381a3a585e8fbe4410b8c-720x1360.png?auto=format&fit=max&q=100&w=360"
            />
            <div className="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-bor-background to-transparent md:hidden"></div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-0 flex h-full w-full flex-col bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>

          {/* Content */}
          <div className="z-10 flex flex-col max-w-[850px] max-md:mt-[250px]">
            <span className="mb-2 font-semibold uppercase tracking-widest text-xs lg:mb-4 lg:text-sm text-gray-400">
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
              <button type="button" className="group/button relative overflow-hidden rounded-md bg-blue-600 px-6 py-4 text-center font-semibold text-white text-sm leading-5 transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1">
                <span className="block">Book a demo</span>
              </button>
            </div>
          </div>

          {/* Scrolling Services Carousel */}
          <div
            ref={sliderRef}
            className="relative -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-12 2xl:-mx-16 overflow-x-hidden select-none"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            role="region"
            aria-roledescription="carousel"
            aria-label="Creative services"
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            <div
              className={`flex hover:animate-pause ${
                isDown
                  ? "cursor-grabbing"
                  : `cursor-grab ${reducedMotion ? "" : "animate-scroll"}`
              }`}
            >
              {[...creativeServices, ...creativeServices].map((item, index) => (
                <div key={index} className="flex-shrink-0 px-2">
                  <div className="flex h-[72px] flex-row items-center gap-4 rounded-lg bg-background/10 py-2 pl-2 pr-3 text-white backdrop-blur-sm hover:bg-background/20 transition-all">
                    <img
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="h-14 w-14 rounded-md object-cover pointer-events-none select-none"
                      draggable={false}
                      srcSet={`${item.imageUrl}?w=56 56w, ${item.imageUrl}?w=72 72w, ${item.imageUrl}?w=112 112w, ${item.imageUrl}?w=176 176w`}
                      sizes="(max-width: 768px) 56px, (max-width: 1024px) 72px, 56px"
                      src={item.imageUrl}
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
