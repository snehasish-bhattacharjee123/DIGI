import { motion } from "framer-motion";

export function FreshAdsFuelSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full pt-12 lg:pt-0"
          >
            <div className="flex flex-col gap-6 mb-6 lg:gap-8 lg:mb-8">
              {/* Label */}
              <span className="text-sm md:text-sm lg:text-base tracking-wider font-semibold uppercase pb-3 border-b border-border text-blue-600">
                Fresh ads fuel performance
              </span>

              {/* Main Heading */}
              <div className="flex flex-col max-w-[532px]">
                <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
                  <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
                    Tired of ad fatigue?{" "}
                  </span>
                  <span className="font-sans text-blue-900">
                    It's time to refresh your ad production
                  </span>
                </h2>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-6 lg:gap-8">
              {/* Subheading */}
              <div className="flex flex-col w-full max-w-[532px] lg:max-w-[600px]">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-green-700">
                  Ads lose effectiveness quickly. If it's not your audience
                  getting bored, it's the algorithm.
                </h3>
              </div>

              {/* Description */}
              <div className="flex flex-col w-full max-w-[532px] lg:max-w-[600px]">
                <p className="text-base md:text-base lg:text-lg text-blue-700/80 leading-relaxed">
                  You know it has a direct impact on your ROI but tight
                  deadlines, limited resources, and talent gaps make it hard to
                  keep up with the demand for compelling creative. That's what
                  DIGITELLER is for.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="-mx-4 sm:-mx-6 lg:mx-0 lg:order-1 order-1"
          >
            <div className="flex flex-col lg:rounded-[10px] lg:overflow-hidden">
              <div className="w-full">
                <div className="mx-auto flex h-full w-full flex-col gap-3 max-w-full">
                  {/* Mobile Image */}
                  <div className="md:hidden">
                    <img
                      alt="Fresh Ad Production"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-contain"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        minHeight: "330px",
                      }}
                      src="https://cdn.sanity.io/images/k0dlbavy/production/6b180e1603c162f27bab33829c8a24f7a225f372-1044x1044.png?q=100&auto=format&w=828&fit=min"
                    />
                  </div>

                  {/* Tablet Image */}
                  <div className="max-md:hidden lg:hidden">
                    <img
                      alt="Fresh Ad Production"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-contain"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        minHeight: "400px",
                      }}
                      src="https://cdn.sanity.io/images/k0dlbavy/production/6b180e1603c162f27bab33829c8a24f7a225f372-1044x1044.png?q=100&auto=format&w=1280&fit=min"
                    />
                  </div>

                  {/* Desktop Image */}
                  <div className="relative max-lg:hidden">
                    <img
                      alt="Fresh Ad Production"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-contain"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        minHeight: "500px",
                      }}
                      src="https://cdn.sanity.io/images/k0dlbavy/production/6b180e1603c162f27bab33829c8a24f7a225f372-1044x1044.png?q=100&auto=format&w=1920&fit=min"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
