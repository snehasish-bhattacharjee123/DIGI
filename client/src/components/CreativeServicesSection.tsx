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
      <div className="absolute left-4 top-4 z-20 sm:left-6 sm:top-6">
        <div className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-sm sm:px-4 sm:py-2 sm:text-xs">
          Why us
        </div>
      </div>
      <div className="mx-auto h-full w-full max-w-screen-2xl">
        <div className="mx-4 flex w-full flex-col justify-end gap-8 pt-12 pb-10 sm:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16 static min-h-[620px] md:min-h-[760px] md:gap-16 md:pt-16 md:pb-12 lg:min-h-[860px] lg:gap-20 lg:pt-[104px] lg:pb-16">
          {/* Background Images */}
          <div className="absolute inset-0 z-0 flex h-full w-full flex-col bg-bor-background max-md:max-h-[800px]">
            <img
              alt=""
              loading="eager"
              decoding="async"
              className="hidden h-full w-full object-cover object-center md:block pointer-events-none select-none"
              fetchPriority="high"
              srcSet="/images/work/IMG_7935.JPG"
              sizes="(min-width: 1024px) 100vw, 0px"
              src="/images/work/IMG_7935.JPG?auto=format&fit=max&q=80&w=1920"
              aria-hidden="true"
            />
            <img
              alt=""
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover object-center md:hidden max-md:max-h-[800px] pointer-events-none select-none"
              fetchPriority="high"
              srcSet="https://cdn.sanity.io/images/k0dlbavy/production/c2081b809044e9c2b82381a3a585e8fbe4410b8c-720x1360.png?auto=format&fit=max&q=80&w=360 360w, https://cdn.sanity.io/images/k0dlbavy/production/c2081b809044e9c2b82381a3a585e8fbe4410b8c-720x1360.png?auto=format&fit=max&q=80&w=540 540w, https://cdn.sanity.io/images/k0dlbavy/production/c2081b809044e9c2b82381a3a585e8fbe4410b8c-720x1360.png?auto=format&fit=max&q=80&w=720 720w"
              sizes="100vw"
              src="https://cdn.sanity.io/images/k0dlbavy/production/c2081b809044e9c2b82381a3a585e8fbe4410b8c-720x1360.png?auto=format&fit=max&q=80&w=360"
              aria-hidden="true"
            />
            <div className="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-bor-background to-transparent md:hidden"></div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-0 flex h-full w-full flex-col bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

          {/* Content */}
          <div className="z-10 w-full max-md:mt-24">
            <div
              className="elementor-element elementor-element-4785a65 e-flex e-con-boxed e-con e-parent e-lazyloaded"
              data-id="4785a65"
              data-element_type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div className="e-con-inner flex w-full flex-col gap-10 md:flex-row md:items-start md:justify-between">
                <div
                  className="elementor-element elementor-element-359bbea e-con-full e-flex e-con e-child"
                  data-id="359bbea"
                  data-element_type="container"
                  data-settings='{"background_background":"classic"}'
                >
                  <div className="elementor-element elementor-element-521e1e0 elementor-widget-mobile__width-initial elementor-widget elementor-widget-hub_fancy_heading">
                    <div className="elementor-widget-container">
                      <div id="ld-fancy-heading-6940a1ba55e39" className="ld-fancy-heading pos-rel">
                        <h1 className="ld-fh-element d-inline-block pos-rel elementor-heading-title lqd-highlight-classic lqd-highlight-grow-left h1 is-in-view font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-bold tracking-tight text-white">
                          The{" "}
                          <mark className="lqd-highlight">
                            <span className="lqd-highlight-txt">creative extension</span>
                            <span className="lqd-highlight-inner" style={{ transitionDelay: "0ms" }} />
                          </mark>{" "}
                          to any creator's team.
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="elementor-element elementor-element-cb1daf4 elementor-widget elementor-widget-hub_fancy_heading">
                    <div className="elementor-widget-container">
                      <div id="ld-fancy-heading-6940a1ba56717" className="ld-fancy-heading pos-rel">
                        <p className="ld-fh-element d-inline-block pos-rel lqd-highlight-classic lqd-highlight-grow-left p mt-4 max-w-[760px] text-base sm:text-lg lg:mt-10 lg:text-xl text-white/90 leading-relaxed">
                          Crafting high-quality content consistently is tough work — but we're here to help. Our team of 75+ top creatives takes care of video editing, graphics and strategy to make your life easier, allowing you to focus on what you truly enjoy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="elementor-element elementor-element-c80da4b e-con-full elementor-hidden-mobile e-flex e-con e-child hidden md:block" data-id="c80da4b" data-element_type="container"></div>
              </div>
            </div>
          </div>

          {/* Scrolling Services Carousel */}
          <div
            ref={sliderRef}
            className="relative -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-12 2xl:-mx-16 overflow-x-hidden select-none touch-pan-x"
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
                <div key={index} className="flex-shrink-0 px-1 sm:px-2">
                  <div className="flex h-[64px] sm:h-[72px] flex-row items-center gap-3 sm:gap-4 rounded-lg bg-background/10 py-2 pl-2 pr-3 text-white backdrop-blur-sm hover:bg-background/20 transition-all">
                    <img
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="h-12 w-12 sm:h-14 sm:w-14 rounded-md object-cover pointer-events-none select-none"
                      draggable={false}
                      srcSet={`${item.imageUrl}?w=56 56w, ${item.imageUrl}?w=72 72w, ${item.imageUrl}?w=112 112w, ${item.imageUrl}?w=176 176w`}
                      sizes="(max-width: 768px) 56px, (max-width: 1024px) 72px, 56px"
                      src={item.imageUrl}
                    />
                    <span className="text-xs sm:text-sm">{item.title}</span>
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
