import { motion } from "framer-motion";
import { useState } from "react";

export function CreativeAssetsSection() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section
      className="relative overflow-hidden bg-white text-brand-blue-900 py-16 md:py-20 lg:py-24 wst-fonts"
      data-mood="light"
    >
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE — TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col w-full pt-12 lg:pt-0"
          >
            {/* Section Tag */}
            <span className="text-xs sm:text-sm tracking-widest font-semibold uppercase pb-3 border-b border-brand-blue-200 text-brand-blue-700">
              everything in one place
            </span>

            {/* Main Heading */}
            <h2 className="font_2 text-brand-blue-900 max-w-[620px] leading-[1.05] mt-6">
              Your{" "}
              <span className="font-serif text-[calc(100%+6px)] italic text-primary">
                creative assets
              </span>
              , where they belong
            </h2>

            {/* Subheading */}
            <h5 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight text-brand-blue-800 mt-8 font-serif">
              No more "Where's that file?!" moments.
              <span className="text-brand-orange-500 font-normal">
                {" "}
                We’ve got you covered.
              </span>
            </h5>

            {/* Paragraph */}
            <p className="text-base md:text-lg leading-relaxed text-brand-blue-800 max-w-[640px] mt-6 font-sans">
              Superspace keeps all your designs, videos, and brand assets neatly
              organized, AI-tagged, and ridiculously easy to find. Spend less
              time digging through folders and more time creating.
            </p>
          </motion.div>

          {/* RIGHT SIDE — VIDEO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="-mx-4 sm:-mx-6 lg:mx-0 order-1 lg:order-2"
          >
            <div className="relative flex flex-col lg:rounded-[14px] overflow-hidden shadow-brand-xl ring-1 ring-brand-blue-100/60 bg-white">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] bg-brand.blue-800/5">
                {!videoError ? (
                  <video
                    autoPlay
                    playsInline
                    muted
                    loop
                    preload="metadata"
                    controls={false}
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    onError={() => setVideoError(true)}
                    poster="/generated_images/Brand_identity_system_8af1f13b.png"
                    aria-label="Creative assets organization demo"
                  >
                    <source
                      src="/videos/3135926-hd_1920_1080_30fps.mp4"
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <img
                    src="/generated_images/Brand_identity_system_8af1f13b.png"
                    alt="Creative assets organization"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                )}

                {/* Floating shapes */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/4 left-4 w-12 h-12 bg-primary/15 rounded-lg hidden lg:block"
                />

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-1/4 right-8 w-16 h-16 bg-primary/10 rounded-full hidden lg:block"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
