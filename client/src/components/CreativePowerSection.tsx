import React from "react";

export const CreativePowerSection = () => {
  return (
    <section className="flex max-w-full flex-col bg-bor-background text-bor-foreground dark overflow-hidden relative">
      <div className="max-w-layout mx-auto h-full w-full">
        <div className="max-w-container mx-container-overflow flex flex-col w-full transition-colors pt-12 md:pt-16 lg:pt-24 pb-16 md:pb-20 lg:pb-32 gap-12 lg:gap-20">
          <div className="flex flex-col-reverse lg:flex-row relative lg:min-h-[362px] xl:min-h-[394px] lg:grid lg:grid-cols-2 rounded-md overflow-hidden min-h-[500px] md:min-h-0 lg:h-auto justify-start bg-bor-background text-bor-foreground dark">
            <div className="z-1 py-10 lg:py-12 xl:py-16 px-4 md:px-8 lg:px-12 xl:px-16">
              <div className="flex max-w-full flex-col gap-4 mb-6">
                <h3 className="font-heading box-border tracking-[0.1px] text-3xl md:text-6xl lg:text-7xl xl:text-8xl">
                  Now imagine this{" "}
                  <span className="font-serif text-[calc(100%+4px)] font-normal italic">
                    creative power
                  </span>{" "}
                  behind your next project
                </h3>
                <p className="text-base md:text-lg">
                  This is just one of many creative services—what you do with
                  them is up to you. Let's chat.
                </p>
              </div>
              <div className="flex max-w-full flex-col justify-start items-start">
                <div className="flex max-w-full flex-row gap-3 w-fit max-md:w-full">
                  <button className="group/button overflow-hidden rounded-md font-semibold text-center inline-block bg-bor-primary text-bor-foreground-inverted text-sm leading-5 transition-shadow px-6 py-4 opacity-100">
                    <div className="relative">
                      <span
                        className="block"
                        aria-disabled="false"
                        style={{ transform: "none" }}
                      >
                        Book a demo
                      </span>
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                        aria-disabled="false"
                        style={{ transform: "translateY(200%)" }}
                      >
                        Book a demo
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:m-0 h-[200px] md:h-[400px] lg:h-full lg:flex-1 relative overflow-hidden lg:rounded-none md:hidden lg:flex rounded-md lg:absolute lg:inset-0 max-lg:absolute max-lg:inset-0 max-lg:h-full">
              <div className="w-full h-full relative">
                <div className="mx-auto flex h-full w-full flex-col gap-3 max-w-full">
                  {/* Mobile Image */}
                  <div className="md:hidden">
                    <img
                      alt="Creative power visual"
                      loading="lazy"
                      src="https://cdn.sanity.io/images/k0dlbavy/production/430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png?q=100&auto=format&fit=min"
                      className="object-cover absolute inset-0 h-full w-full"
                    />
                  </div>
                  {/* Tablet Image */}
                  <div className="hidden md:block lg:hidden">
                    <img
                      alt="Creative power visual"
                      loading="lazy"
                      src="https://cdn.sanity.io/images/k0dlbavy/production/430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png?q=100&auto=format&fit=min"
                      className="object-cover absolute inset-0 h-full w-full"
                    />
                  </div>
                  {/* Desktop Image */}
                  <div className="relative hidden lg:block h-full">
                    <img
                      alt="Creative power visual"
                      loading="lazy"
                      src="https://cdn.sanity.io/images/k0dlbavy/production/30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png?q=100&auto=format&fit=min"
                      className="object-cover absolute inset-0 h-full w-full"
                    />
                  </div>
                </div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative w-48 h-48 lg:w-64 lg:h-64">
                    <svg
                      className="w-full h-full animate-spin-slow"
                      viewBox="0 0 100 100"
                    >
                      <defs>
                        <path
                          id="circlePath"
                          fill="none"
                          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        />
                      </defs>
                      <text fill="white">
                        <textPath
                          href="#circlePath"
                          className="text-xs font-semibold uppercase tracking-widest"
                        >
                          Creative Services • Creative Services •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
