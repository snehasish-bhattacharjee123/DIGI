import { motion } from "framer-motion";
import { VideoPlayer } from "@/components/VideoPlayer";
import { LiquidButton } from "@/components/LiquidButton";

export function NewEraSection() {
  return (
    <section
      className="relative section-padding bg-white text-brand-blue-900 overflow-hidden font-sans"
      data-mood="light"
    >
      {/* Soft noise background */}
      <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-10 pointer-events-none" />

      <div className="relative max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ============================
           *  VIDEO SIDE
           * ============================ */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-brand-xl ring-1 ring-brand-blue-200/30 bg-black">
              <VideoPlayer
                src="https://cdn.sanity.io/files/k0dlbavy/production/2f6d02ab9a1fab4e8a4222bc8a7346ca7e261227.mp4"
                className="aspect-video"
              />
            </div>
          </motion.div>

          {/* ============================
           *  TEXT SIDE
           * ============================ */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col space-y-7">
              {/* Subtitle */}
              <span className="font-semibold uppercase pb-2 border-b border-brand-blue-200 text-xs tracking-[0.25em] text-brand-green-600 w-fit">
                A new era of creative work
              </span>

              {/* Heading */}
              <h2 className="font-serif fluid-title text-brand-blue-900 max-w-2xl leading-[1.05]">
                Creative Solutions That Drive{" "}
                <span className="relative text-brand-green-600">
                  Real Growth
                  <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-brand-green-400/40 rounded-full"></span>
                </span>
              </h2>

              {/* Paragraph 1 */}
              <p className="fluid-text text-brand-blue-700 max-w-xl leading-relaxed font-sans font-medium">
                DIGITELLER CREATIVE is your dedicated, on-call creative partner
                — expanding your production capacity and amplifying your team’s
                creative impact.
              </p>

              {/* Paragraph 2 */}
              <p className="text-base md:text-lg text-brand-blue-600 max-w-lg leading-relaxed font-sans">
                Think of us as an extension of your vision — freeing you to
                focus on strategy, storytelling, and meaningful innovation.
              </p>

              {/* CTA */}
              <LiquidButton
                label="Book a demo"
                color="#0d123c" // background & border for hover effect
                textColor="#0d123c" // deep blue text normally
                duration={1000}
                className="shadow-brand hover:shadow-brand-lg hover-elevate transition-all"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
