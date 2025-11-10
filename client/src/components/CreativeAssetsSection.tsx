import { motion } from "framer-motion";
import { useState } from "react";

export function CreativeAssetsSection() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-bor-background text-bor-foreground py-16 md:py-20 lg:py-24" data-mood="brand-dark">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE — Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col w-full pt-12 lg:pt-0"
          >
            {/* Header Section */}
            <div className="flex flex-col gap-6 mb-6 lg:gap-8 lg:mb-8">
              <span className="text-xs sm:text-sm tracking-widest font-semibold uppercase pb-3 border-b border-bor-foreground/20">
                everything in one place
              </span>

              <div className="flex flex-col max-w-[532px]">
                <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                  Your{" "}
                  <span className="font-serif text-[calc(100%+4px)] font-normal italic">
                    creative assets
                  </span>
                  , where they belong
                </h2>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="flex flex-col w-full max-w-[532px] lg:max-w-[600px]">
                <h5 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight leading-tight">
                  No more "Where's that file?!" moments. We've got you covered.
                </h5>
              </div>

              <div className="flex flex-col w-full">
                <p className="text-base md:text-lg text-bor-foreground/80 leading-relaxed">
                  Superspace keeps all your designs, videos, and brand assets
                  neatly organized, AI-tagged, and ridiculously easy to find.
                  Spend less time digging through folders and more time
                  creating.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE — Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="-mx-4 sm:-mx-6 lg:mx-0 order-1"
          >
            <div className="relative flex flex-col lg:rounded-[10px] overflow-hidden shadow-2xl">
              {/* Video Container */}
              <div className="relative w-full aspect-square lg:aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10">
                {!videoError ? (
                  <video
                    autoPlay
                    playsInline
                    muted
                    loop
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    onError={() => setVideoError(true)}
                    poster="/generated_images/Brand_identity_system_8af1f13b.png"
                  >
                    <source
                      src="/videos/creative-assets-demo.mp4"
                      type="video/mp4"
                    />
                    {/* <source
                      src="https://cdn.sanity.io/files/k0dlbavy/production/4bed24c39e66cce6ae66b49f043002ad47e03388.mp4"
                      type="video/mp4"
                    /> */}
                    {/* Browser doesn't support video */}
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  /* Fallback Image if video fails */
                  <img
                    src="/generated_images/Brand_identity_system_8af1f13b.png"
                    alt="Creative assets organization"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                )}

                {/* Overlay gradient for depth */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" /> */}

                {/* Top Badge - AI Powered */}
                {/* <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-semibold text-bor-foreground uppercase tracking-wider">
                      AI-Powered
                    </span>
                  </div>
                </motion.div> */}

                {/* Bottom Badge - Organized */}
                {/* <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-white/20"
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-semibold text-bor-foreground">
                      📁 Organized & Tagged
                    </p>
                    <p className="text-xs text-bor-foreground/60">
                      Instant Search & Retrieval
                    </p>
                  </div>
                </motion.div> */}

                {/* Floating Elements for Visual Interest */}
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
                  className="absolute top-1/4 left-4 w-12 h-12 bg-primary/20 rounded-lg backdrop-blur-sm hidden lg:block"
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
                  className="absolute bottom-1/4 right-8 w-16 h-16 bg-primary/10 rounded-full backdrop-blur-sm hidden lg:block"
                />
              </div>

              {/* Info Bar Below Video */}
              {/* <div className="hidden md:flex items-center justify-between p-4 bg-bor-background/50 backdrop-blur-sm border-t border-bor-foreground/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold">AI</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-bor-foreground">
                      Smart Organization
                    </p>
                    <p className="text-xs text-bor-foreground/60">
                      Automatic tagging & categorization
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-bor-foreground/60">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Live Demo</span>
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
