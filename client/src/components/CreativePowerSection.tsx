import React from "react";
import { Button } from "@/components/ui/button";

export const CreativePowerSection = () => {
  return (
    <section
      data-mood="light"
      className="bg-white text-bor-foreground light overflow-hidden z-0 relative"
    >
      <div className="max-w-layout mx-auto h-full w-full">
        <div className="max-w-container mx-container-overflow flex flex-[0_0_auto] flex-col w-full transition-colors pt-16 md:pt-20 lg:pt-32 pb-16 md:pb-20 lg:pb-32 gap-12 lg:gap-20">
          <div
            className="relative flex flex-[0_0_auto] bg-bor-background text-bor-foreground dark max-w-none mx-4 sm:mx-6 lg:mx-0 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 min-h-[500px] md:min-h-[400px] lg:min-h-[362px] xl:min-h-[394px]"
            data-mood="leaf"
          >
            <div className="absolute inset-0">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                role="presentation"
                src="https://cdn.sanity.io/images/k0dlbavy/production/b5ff21affe478e8dda825a4e319ab435d01893fa-964x1000.png?q=100&auto=format&fit=min"
                className="absolute inset-0 h-full w-full object-cover lg:hidden"
              />
              <img
                alt=""
                loading="lazy"
                decoding="async"
                role="presentation"
                src="https://cdn.sanity.io/images/k0dlbavy/production/b9426d5a44d0929a84439dc75b1ac1a94d997a0b-3592x1292.png?q=100&auto=format&fit=min"
                className="absolute inset-0 h-full w-full object-cover hidden lg:block"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-bor-background/70 to-bor-background/20" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full">
              <div className="py-10 lg:py-12 xl:py-16 px-4 md:px-8 lg:px-12 xl:px-16">
                <div className="flex max-w-full flex-[0_0_auto] flex-col gap-4 mb-6">
                  <span className="text-xs md:text-sm uppercase tracking-widest font-semibold">
                  Join 500+ brands
                </span>

                  <h4 className="font-heading box-border tracking-[0.1px] text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Get creative support
                  <br />
                    <span className="text-[calc(100%+4px)] font-extrabold tracking-tight">
                    you can trust
                  </span>
                </h4>

                  <p className="text-sm md:text-base lg:text-lg text-bor-foreground/80 max-w-prose">
                  If you’ve outgrown freelancers, feel held back by slow agencies, or need more creative
                  firepower without the headcount, Superside was built for you.
                </p>
                </div>

                <div className="flex max-w-full flex-[0_0_auto] flex-col justify-start items-start">
                  <div className="flex max-w-full flex-[0_0_auto] flex-row gap-3 w-fit md:w-auto">
                    <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                      <Button className="w-full md:w-auto px-6 py-4">Book a call</Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
