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
      "Websites are a reflection of the brands, which can help convert website visitors into customers. All that is done under the digital marketing strategy ultimately directs guests to your website. A well-designed and managed website can be used as an effective marketing tool that will help generate authentic leads. Fonts, graphics, layouts, interface and much more are what need to be restructured so that your website serves as an extension of your voice.",
    link: "/services/website-design-development",
    image: "/assets/images/devlop-design.webp",
    imageAlt: "Website Design and Development Services",
  },
  {
    id: "email-marketing",
    number: "02",
    category: "Design & Development",
    title: "Email Marketing",
    description:
      "Whoever said email was a dying medium did not know how to use it to their benefit. A smartly designed email will always help you win over current and potential customers. Wish them during festival season, send them coupons and keep them updated with company news to encourage customer loyalty. The idea is to promote your business and the right words can get you your next lead.",
    link: "/services/email-marketing",
    image: "/assets/images/email-marketing.webp",
    imageAlt: "Email Marketing Services",
  },
  {
    id: "social-media",
    number: "03",
    category: "Content & Design",
    title: "Social Media",
    description:
      "In today's world, social media strategies are driving business strategies. Social listening has changed the way people make their decisions. Be where your customers are! People talk and they will talk – about your product. Brands have their own identity and customers should be able to connect to their brands as and when they require. Get your brand on social media now. This is no passing trend!",
    link: "/services/social-media-marketing",
    image: "/assets/images/social-media.webp",
    imageAlt: "Social Media Marketing Services",
  },
  {
    id: "orm",
    number: "04",
    category: "Strategy",
    title: "ORM",
    description:
      "How often do you enter a search online and form an opinion based on what you have read? Your potential and current customers do exactly the same and ORM is ahead of it. ORM is about crafting and formulating online strategies that will influence the public perception of a brand. By establishing an online presence, you can get into conversations and leave a positive impression of your brand for your customers to see. Choose the ORM way!",
    link: "/services/online-reputation-management",
    image: "/assets/images/orm.jpg",
    imageAlt: "Online Reputation Management Services",
  },
  {
    id: "video-marketing",
    number: "05",
    category: "Filming & Editing",
    title: "Video Marketing",
    description:
      "Video Marketing is just the right medium to truly convey your brand's messaging, while picking up some sentiment along the way. It's the ideal way to increase awareness about your product, increase engagement on various channels and communicate with your online customers in a witty way. An engaging video can really help build strong customer rapport. Get creative and make your product or service stand out!",
    link: "/services/video-marketing",
    image: "/assets/images/video-marketing.webp",
    imageAlt: "Video Marketing Services",
  },
  {
    id: "programmatic-advertising",
    number: "06",
    category: "Strategy & Marketing",
    title: "Programmatic Advertising",
    description:
      "You can't expect even the best ads to reach their true potential if they don't target the right audience. This is where the power of Programmatic Advertising comes in! Transform your targeting strategy by analysing many user signals to ensure that ads serve the right person, in the right place, at the right time. Optimise your budgets by paying only for your best users. Jump on the bandwagon and put your brand on the map.",
    link: "/services/programmatic-advertising",
    image: "/assets/images/programmatic-advertising-thumb.webp",
    imageAlt: "Programmatic Advertising Services",
  },
  {
    id: "sem",
    number: "07",
    category: "Strategy & Marketing",
    title: "Search Engine Marketing",
    description:
      "From a 10-year-old to a 60-year-old, everyone is online. Whether it is for maths tuitions or the tastiest pickle, everyone is looking for products and services online. The SEM team knows how to build brand awareness and increase sales across platforms that are most visited by your customers. The team has many years of experience in generating relevant leads through PPC or search engine marketing techniques.",
    link: "/services/search-engine-marketing",
    image: "/assets/images/search-engine-marketing-thumb.webp",
    imageAlt: "Search Engine Marketing Services",
  },
  {
    id: "content-marketing",
    number: "08",
    category: "Strategy & Marketing",
    title: "Content Marketing",
    description:
      "In the digital world, content marketing is that friend who goes shopping with you and convinces you that a particular product or service is good for you. If your friend sounds genuine, you go ahead and buy the product or service, or else you look for something else. True, right?",
    link: "/services/content-marketing",
    image: "/assets/images/content-marketing-thumb.jpg",
    imageAlt: "Content Marketing Services",
  },
  {
    id: "seo",
    number: "09",
    category: "Strategy & Marketing",
    title: "Search Engine Optimisation",
    description:
      "On average, Google processes over 8.5 billion searches every day. How does a brand stand out in the market and reach out to its audience without spending much? The answer is different SEO (Search Engine Optimisation) techniques. That is because a website with a high ranking is more likely to attract more organic traffic and boost revenues. Best SEO agencies offer SEO specialist services to do just that. The SEO team uses on-page and off-page techniques to gain popularity and rank high on search engines.",
    link: "/services/search-engine-optimization",
    image: "/assets/images/search-engine-optimization-thumb.webp",
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
    [0, 1],
  );

  return (
    <div className="h-1 w-12 bg-white/20 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-primary"
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
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(servicesData.length - 1) * 100}%`],
  );

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <>
      {/* Spacer to create scroll distance - this is the "pin-spacer" equivalent */}
      <div
        ref={containerRef}
        className="relative bg-bor-background"
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
              style={{ x }}
              className="flex h-full w-full items-center"
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
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative aspect-[3/2]">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            {/* Number + Category */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white font-serif text-2xl font-light">
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
            <p className="text-lg text-bor-foreground/70 leading-relaxed">
              {service.description}
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href={service.link}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary/90 hover:gap-3 transition-all duration-300 group"
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
      className="grid grid-cols-1 gap-8"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <div className="relative aspect-[4/3]">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 md:space-y-6">
        {/* Number + Category */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-white font-serif text-xl md:text-2xl font-light">
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
        <p className="text-base md:text-lg text-bor-foreground/70 leading-relaxed">
          {service.description}
        </p>

        {/* CTA Button */}
        <div className="pt-2">
          <a
            href={service.link}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary/90 hover:gap-3 transition-all duration-300 group"
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
