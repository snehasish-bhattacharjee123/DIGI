import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Service {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  link: string;
  image: string;
  imageAlt: string;
}

const servicesData: Service[] = [
  {
    id: "websites",
    number: "01",
    category: "Design & Development",
    title: "Websites",
    description:
      "Websites are a reflection of the brands, which can help convert website visitors into customers. A well-designed and managed website can be used as an effective marketing tool that will help generate authentic leads.",
    link: "/services/website-design-development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Website Design and Development Services",
  },
  {
    id: "email-marketing",
    number: "02",
    category: "Design & Development",
    title: "Email Marketing",
    description:
      "Smartly designed emails help you win over customers. Send greetings, coupons, or updates to build loyalty and engagement.",
    link: "/services/email-marketing",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Email Marketing Services",
  },
  {
    id: "social-media",
    number: "03",
    category: "Content & Design",
    title: "Social Media",
    description:
      "Be where your customers are! Social media strategies are essential for brand connection and visibility.",
    link: "/services/social-media-marketing",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7bdf073ba1?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Social Media Marketing Services",
  },
  {
    id: "orm",
    number: "04",
    category: "Strategy",
    title: "ORM",
    description:
      "Online Reputation Management (ORM) is about shaping how your brand is perceived online through proactive engagement.",
    link: "/services/online-reputation-management",
    image:
      "https://images.unsplash.com/photo-1612832021084-0e2c4a9f1df9?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Online Reputation Management Services",
  },
  {
    id: "video-marketing",
    number: "05",
    category: "Filming & Editing",
    title: "Video Marketing",
    description:
      "Video is the ideal medium to convey your brand message, increase engagement, and build trust creatively.",
    link: "/services/video-marketing",
    image:
      "https://images.unsplash.com/photo-1585314062604-1f0ec3f2b1ca?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Video Marketing Services",
  },
  {
    id: "programmatic-advertising",
    number: "06",
    category: "Strategy & Marketing",
    title: "Programmatic Advertising",
    description:
      "Leverage data-driven ad automation to reach the right audience at the right time, maximizing ROI.",
    link: "/services/programmatic-advertising",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Programmatic Advertising Services",
  },
  {
    id: "sem",
    number: "07",
    category: "Strategy & Marketing",
    title: "Search Engine Marketing",
    description:
      "Boost visibility and sales through paid search campaigns designed to capture intent and convert leads.",
    link: "/services/search-engine-marketing",
    image:
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Search Engine Marketing Services",
  },
  {
    id: "content-marketing",
    number: "08",
    category: "Strategy & Marketing",
    title: "Content Marketing",
    description:
      "Create compelling content that informs, engages, and persuades — helping customers connect to your brand.",
    link: "/services/content-marketing",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Content Marketing Services",
  },
  {
    id: "seo",
    number: "09",
    category: "Strategy & Marketing",
    title: "Search Engine Optimisation",
    description:
      "Enhance your brand visibility through expert SEO techniques that drive traffic and improve rankings.",
    link: "/services/search-engine-optimization",
    image:
      "https://images.unsplash.com/photo-1554774853-b414d2a2b090?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Search Engine Optimization Services",
  },
];

// Progress Indicator Component
function ProgressIndicator({
  scrollYProgress,
  index,
  total,
}: {
  scrollYProgress: any;
  index: number;
  total: number;
}) {
  const scaleX = useTransform(
    scrollYProgress,
    [index / total, (index + 1) / total],
    [0, 1]
  );

  return (
    <div className="h-1 w-12 bg-white/20 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-bor-orange"
        style={{ scaleX, transformOrigin: "left" }}
      />
    </div>
  );
}

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate horizontal scroll based on number of services
  // Each service takes up 100vw, so total width is services.length * 100vw
  const totalSlides = servicesData.length;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(totalSlides - 1) * 100}vw`]
  );

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <>
      {/* Spacer to create scroll distance - this is the "pin-spacer" equivalent */}
      <div
        ref={containerRef}
        className="hidden lg:block relative bg-bor-background"
        style={{ height: `${servicesData.length * 100}vh` }}
      >
        {/* Sticky/Pinned Container - stays fixed while user scrolls */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="relative h-full w-full">
            {/* Header - appears at start */}
            <motion.div
              style={{ opacity: headerOpacity }}
              className="absolute top-16 md:top-24 left-0 right-0 z-10 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1680px] mx-auto"
            >
              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-bor-gray mb-3 block">
                OUR SERVICES
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-bor-foreground">
                What we{" "}
                <span className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal">
                  <em>offer</em>
                </span>
              </h2>
            </motion.div>

            {/* Horizontal Scrolling Container */}
            <motion.div
              style={{ x, width: `${totalSlides * 100}vw` }}
              className="flex h-full items-center"
            >
              {servicesData.map((service, index) => (
                <ServiceItem key={service.id} service={service} index={index} />
              ))}
            </motion.div>

            {/* Progress Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {servicesData.map((service, index) => (
                <ProgressIndicator
                  key={service.id}
                  scrollYProgress={scrollYProgress}
                  index={index}
                  total={servicesData.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet View - Traditional Vertical Scroll */}
      <div className="lg:hidden bg-bor-background text-bor-foreground py-16 md:py-24">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-bor-gray mb-3 block">
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              What we{" "}
              <span className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal">
                <em>offer</em>
              </span>
            </h2>
          </div>

          {/* Services List */}
          <div className="space-y-16 md:space-y-20">
            {servicesData.map((service, index) => (
              <ServiceItemMobile
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Desktop Horizontal Scroll Item
function ServiceItem({ service, index }: { service: Service; index: number }) {
  return (
    <div className="hidden lg:flex flex-shrink-0 w-screen h-full items-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="max-w-[1680px] mx-auto w-full">
        <div className="grid grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="absolute -inset-10 bg-bor-orange/15 blur-3xl rounded-[2.5rem]" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10 bg-white/5 transition-transform duration-300 hover:-translate-y-1">
              <div className="relative aspect-[3/2]">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            {/* Number + Category */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-bor-foreground ring-1 ring-white/15 font-serif text-2xl font-light">
                {service.number}
              </span>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-bor-gray">
                {service.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-bor-foreground">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-lg text-bor-foreground/70 leading-relaxed max-w-prose">
              {service.description}
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href={service.link}
                className="inline-flex items-center gap-2 px-6 py-3 bg-bor-orange text-bor-black font-semibold text-sm rounded-lg hover:bg-bor-orange/90 hover:gap-3 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bor-orange focus-visible:ring-offset-2 focus-visible:ring-offset-bor-background"
              >
                Know More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6l6 6-6 6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile Vertical Scroll Item
function ServiceItemMobile({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"
    >
      {/* Image */}
      <div className="relative">
        <div className="absolute -inset-8 bg-bor-orange/15 blur-3xl rounded-[2.5rem]" />
        <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-white/10 bg-white/5">
          <div className="relative aspect-[4/3]">
            <img
              src={service.image}
              alt={service.imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-transparent" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 md:space-y-6">
        {/* Number + Category */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 text-bor-foreground ring-1 ring-white/15 font-serif text-xl md:text-2xl font-light">
            {service.number}
          </span>
          <span className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-bor-gray">
            {service.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg text-bor-foreground/70 leading-relaxed max-w-prose">
          {service.description}
        </p>

        {/* CTA Button */}
        <div className="pt-2">
          <a
            href={service.link}
            className="inline-flex items-center gap-2 px-6 py-3 bg-bor-orange text-bor-black font-semibold text-sm rounded-lg hover:bg-bor-orange/90 hover:gap-3 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bor-orange focus-visible:ring-offset-2 focus-visible:ring-offset-bor-background"
          >
            Know More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-6-6l6 6-6 6"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
