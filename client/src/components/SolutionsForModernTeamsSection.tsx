import React from "react";

export function SolutionsForModernTeamsSection() {
  return (
    <section className="bg-bor-background text-bor-foreground overflow-hidden relative" data-mood="brand-dark">
      <div className="max-w-screen-2xl mx-auto h-full w-full">
        <div className="mx-4 sm:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16 flex flex-col w-full transition-colors pt-11 md:pt-14 lg:pt-[88px] pb-11 md:pb-14 lg:pb-[88px] gap-12 lg:gap-20 p-0">
          <div className="lg:grid lg:items-center flex flex-col gap-10 md:gap-12 xl:min-h-[920px] lg:gap-0 lg:grid-rows-1 lg:grid-cols-2 xl:grid-cols-[7fr_5fr]">
            {/* Left column: content */}
            <div className="flex flex-col w-full pt-12 lg:py-12 xl:py-20 xl:h-full xl:flex xl:flex-col xl:justify-between lg:pr-12 xl:pr-20">
              <div className="flex flex-col gap-6 mb-6 lg:gap-8 lg:mb-8">
                <span className="text-bor-sm 768:text-bor-sm 1280:text-bor-base tracking-15 font-semibold uppercase pb-3 border-b border-solid">
                  SOLUTIONS FOR MODERN TEAMS
                </span>
                <div className="flex flex-col max-lg:max-w-[532px]">
                  <h3 className="font-heading tracking-[0.1px] text-bor-3xl md:text-bor-6xl lg:text-bor-7xl xl:text-bor-8xl">
                    Your shortcut to{" "}
                    <span className="font-serif text-[calc(100%+4px)] font-normal">
                      <em>AI’s creative advantage</em>
                    </span>
                  </h3>
                </div>
              </div>

              <div className="flex flex-col justify-start items-start gap-6 lg:gap-8">
                <div className="flex flex-col w-full max-w-[532px] lg:max-w-[600px]">
                  <p className="font-heading tracking-[0.1px] text-bor-1.5xl md:text-bor-3xl lg:text-bor-3xl xl:text-bor-4xl">
                    You're under pressure to do more: faster, cheaper, and with
                    fewer resources, while figuring out how to use AI safely and
                    effectively. That’s where we come in.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="w-full">
                  <div className="flex flex-col @container">
                    <div className="grid gap-x-16 gap-y-10 lg:gap-y-20 @lg:grid-cols-2 grid-cols-1">
                      {/* Card 1 */}
                      <div className="flex flex-col gap-4 lg:gap-8">
                        <div className="flex text-bor-foreground items-center justify-center self-start bg-bor-foreground/10 size-16 rounded-[10px] p-5">
                          <span aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M192,116a12,12,0,1,1-12-12A12,12,0,0,1,192,116ZM152,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm96,48v32a24,24,0,0,1-24,24h-2.36l-16.21,45.38A16,16,0,0,1,190.36,224H177.64a16,16,0,0,1-15.07-10.62L160.65,208h-57.3l-1.92,5.38A16,16,0,0,1,86.36,224H73.64a16,16,0,0,1-15.07-10.62L46,178.22a87.69,87.69,0,0,1-21.44-48.38A16,16,0,0,0,16,144a8,8,0,0,1-16,0,32,32,0,0,1,24.28-31A88.12,88.12,0,0,1,112,32H216a8,8,0,0,1,0,16H194.61a87.93,87.93,0,0,1,30.17,37c.43,1,.85,2,1.25,3A24,24,0,0,1,248,112Zm-16,0a8,8,0,0,0-8-8h-3.66a8,8,0,0,1-7.64-5.6A71.9,71.9,0,0,0,144,48H112A72,72,0,0,0,58.91,168.64a8,8,0,0,1,1.64,2.71L73.64,208H86.36l3.82-10.69A8,8,0,0,1,97.71,192h68.58a8,8,0,0,1,7.53,5.31L177.64,208h12.72l18.11-50.69A8,8,0,0,1,216,152h8a8,8,0,0,0,8-8Z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h6 className="font-heading tracking-[0.1px] text-bor-xl md:text-bor-2xl lg:text-bor-2xl xl:text-bor-2xl">
                            Saving time and money
                          </h6>
                          <p className="text-bor-base 1280:text-bor-lg opacity-60">
                            We know the ins and outs of working with AI, completing over 3,000 projects in 2024, saving customers over $3.5M in costs.
                          </p>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="flex flex-col gap-4 lg:gap-8">
                        <div className="flex text-bor-foreground items-center justify-center self-start bg-bor-foreground/10 size-16 rounded-[10px] p-5">
                          <span aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M192,40v64a8,8,0,0,1-2.34,5.66L136,163.31v49.38l18.34-18.35a8,8,0,0,1,11.32,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,212.69V163.31L66.34,109.66A8,8,0,0,1,64,104V40a8,8,0,0,1,16,0v60.69l48,48,48-48V40a8,8,0,0,1,16,0Z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h6 className="font-heading tracking-[0.1px] text-bor-xl md:text-bor-2xl lg:text-bor-2xl xl:text-bor-2xl">
                            Integrated human + AI workflow
                          </h6>
                          <p className="text-bor-base 1280:text-bor-lg opacity-60">
                            Nearly 100% of our creatives are AI-certified to move faster while staying aligned with brand and brief.
                          </p>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div className="flex flex-col gap-4 lg:gap-8">
                        <div className="flex text-bor-foreground items-center justify-center self-start bg-bor-foreground/10 size-16 rounded-[10px] p-5">
                          <span aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M248.67,114.66,160.48,58.5A15.91,15.91,0,0,0,136,71.84v37.3L56.48,58.5A15.91,15.91,0,0,0,32,71.84V184.16A15.92,15.92,0,0,0,56.48,197.5L136,146.86v37.3a15.92,15.92,0,0,0,24.48,13.34l88.19-56.16a15.8,15.8,0,0,0,0-26.68ZM48,183.94V72.07L135.82,128Zm104,0V72.07L239.82,128Z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h6 className="font-heading tracking-[0.1px] text-bor-xl md:text-bor-2xl lg:text-bor-2xl xl:text-bor-2xl">
                            Continuously future-proofing
                          </h6>
                          <p className="text-bor-base 1280:text-bor-lg opacity-60">
                            We push the limits of AI tools. When that’s not enough, our experts define custom workflows, models, and plugins to keep you competitive.
                          </p>
                        </div>
                      </div>

                      {/* Card 4 */}
                      <div className="flex flex-col gap-4 lg:gap-8">
                        <div className="flex text-bor-foreground items-center justify-center self-start bg-bor-foreground/10 size-16 rounded-[10px] p-5">
                          <span aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M230.33,141.06a24.43,24.43,0,0,0-21.24-4.23l-41.84,9.62A28,28,0,0,0,140,112H89.94a31.82,31.82,0,0,0-22.63,9.37L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9ZM164,96a36,36,0,0,0,5.9-.48,36,36,0,1,0,28.22-47A36,36,0,1,0,164,96Zm60-12a20,20,0,1,1-20-20A20,20,0,0,1,224,84ZM164,40a20,20,0,0,1,19.25,14.61,36,36,0,0,0-15,24.93A20.42,20.42,0,0,1,164,80a20,20,0,0,1,0-40Z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h6 className="font-heading tracking-[0.1px] text-bor-xl md:text-bor-2xl lg:text-bor-2xl xl:text-bor-2xl">
                            Transparency and control
                          </h6>
                          <p className="text-bor-base 1280:text-bor-lg opacity-60">
                            You decide how we use AI in the process, ensuring output aligns with expectations and legal requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: visual asset */}
            <div className="-mx-container-overflow lg:mx-0 order-1 lg:order-1 lg:h-full w-auto lg:-mr-layout-overflow">
              <div className="relative lg:h-full flex flex-col max-w-[1500px] w-full">
                <picture>
                  {/* Desktop */}
                  <source
                    media="(min-width: 1024px)"
                    srcSet="https://cdn.sanity.io/images/k0dlbavy/production/1f33887698410edfce822db5c8ef9259b61ee1d8-1792x2560.png?q=100&auto=format&w=4096&fit=min"
                  />
                  {/* Tablet */}
                  <source
                    media="(min-width: 768px)"
                    srcSet="https://cdn.sanity.io/images/k0dlbavy/production/1f33887698410edfce822db5c8ef9259b61ee1d8-1792x2560.png?q=100&auto=format&w=1280&fit=min"
                  />
                  {/* Mobile */}
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                    src="https://cdn.sanity.io/images/k0dlbavy/production/1f33887698410edfce822db5c8ef9259b61ee1d8-1792x2560.png?q=100&auto=format&fit=min"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionsForModernTeamsSection;

