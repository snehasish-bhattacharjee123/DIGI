import { motion } from "framer-motion";
import { VideoPlayer } from "@/components/VideoPlayer";
import { LiquidButton } from "@/components/LiquidButton";

export function NewEraSection() {
  return (
    <section className="relative bg-white text-brand-blue-900 py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background subtle texture */}
      <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-5 pointer-events-none" />

      <div className="relative max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ==== Video Section ==== */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-brand-blue-200/30">
              <VideoPlayer
                src="https://cdn.sanity.io/files/k0dlbavy/production/2f6d02ab9a1fab4e8a4222bc8a7346ca7e261227.mp4"
                className="aspect-video"
              />
            </div>
          </motion.div>

          {/* ==== Text + CTA Section ==== */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col space-y-6">
              {/* Subtitle */}
              <span className="font-semibold uppercase pb-3 border-b border-brand-blue-200 text-sm tracking-[0.2em] text-brand-green-600 w-fit">
                A new era of creative work
              </span>

              {/* Headline */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-2xl text-brand-blue-900">
                Creative Solutions That Drive{" "}
                <span className="relative text-brand-green-600">
                  Real Growth
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-brand-green-400/50 rounded-full"></span>
                </span>
              </h2>

              {/* Paragraph 1 */}
              <p className="text-lg md:text-xl text-brand-blue-700 leading-relaxed max-w-xl">
                DIGITELLER CREATIVE is your dedicated, on-call creative partner
                — expanding your production capacity and amplifying your team’s
                creative impact.
              </p>

              {/* Paragraph 2 */}
              <p className="text-base text-brand-blue-600 leading-relaxed max-w-lg">
                Think of us as an extension of your vision — freeing you to
                focus on strategy, storytelling, and meaningful innovation.
              </p>

              {/* Button */}
              <div className="pt-4">
                <LiquidButton
                  label="Book a demo"
                  color="#0d123c" // brand blue from your theme
                  duration={1000}
                  className="shadow-lg hover:shadow-brand-blue-400/40 transition-shadow duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
