import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Monitor,
  Layers,
  Users,
  Zap,
  Target,
  ArrowUpRight,
  CheckCircle2,
  MousePointer,
} from "lucide-react";
import { CreativeServicesSection } from "@/components/CreativeServicesSection";
import { clientLogos } from "@/data/portfolio-assets";
import { FreshAdsFuelSection } from "@/components/FreshAdsFuelSection";
import { MadeToFlexSection } from "@/components/MadeToFlexSection";
import { TechEnabledSection } from "@/components/TechEnabledSection";
import { VersatileDesignsSection } from "@/components/VersatileDesignsSection";
import { StatsSection } from "@/components/StatsSection";
import { FaqSection } from "@/components/FaqSection";

const workItems = [
  {
    title: "Reddit",
    description: "Motion Design, Social Media Creative",
    image:
      "https://cdn.sanity.io/images/k0dlbavy/production/471b659c9c1a439b648b36efe6440a40bb18b5a8-770x793.png?q=100&auto=format",
    href: "/our-work/reddit",
    colSpan: "md:col-span-2 lg:col-span-3",
  },
  {
    title: "Pernod Ricard",
    description: "eBook & Digital Reports, Video Production",
    image:
      "https://cdn.sanity.io/images/k0dlbavy/production/16206485112a4d21f06779ee540680dd6367e7f8-544x601.png?q=100&auto=format",
    href: "/our-work/pernod-ricard--video-production",
    colSpan: "md:col-span-2 lg:col-span-3",
  },
  {
    title: "Forter",
    description: "Motion Design, Illustration Design, Video Production",
    image:
      "https://cdn.sanity.io/images/k0dlbavy/production/118d5b9c92a54d1490595dade8e339ed0ee44263-1596x792.png?q=100&auto=format",
    href: "/customer-stories/forter",
    colSpan: "md:col-span-4 lg:col-span-6",
  },
  {
    title: "Amazon Pharmacy",
    description: "Ad Creative, Social Media Creative",
    image:
      "https://cdn.sanity.io/images/k0dlbavy/production/89e4fbafccedc64d13ad5d384a2c324f667261f3-1920x1921.png?q=100&auto=format",
    href: "/our-work/amazon-pharmacy",
    colSpan: "md:col-span-4 lg:col-span-6",
  },
  {
    title: "Bolt",
    description: "Motion Design, Illustration Design",
    image:
      "https://cdn.sanity.io/files/k0dlbavy/production/9ef48fc5551e1e172ceca6555ce758868360a4e4.mp4",
    href: "/our-work/bolt",
    colSpan: "md:col-span-2 lg:col-span-3",
    isVideo: true,
  },
  {
    title: "Thomson Reuters",
    description: "Video Production",
    image:
      "https://cdn.sanity.io/images/k0dlbavy/production/fb332bb04ad7f0c9baed6e504743a419f35881fc-1920x1920.png?q=100&auto=format",
    href: "/customer-stories/thomson-reuters",
    colSpan: "md:col-span-2 lg:col-span-3",
  },
  {
    title: "GoHenry",
    description: "Concept Creation, Ad Creative, Social Media Creative",
    image:
      "https://cdn.sanity.io/images/k0dlbavy/production/182033b54a1c1533e578cae98b9d8afe0b37f0f9-770x793.png?q=100&auto=format",
    href: "/our-work/go-henry",
    colSpan: "md:col-span-2 lg:col-span-3",
  },
  {
    title: "Roland",
    description: "Ad Creative, Social Media Creative",
    image:
      "https://cdn.sanity.io/images/k0dlbavy/production/395487e55ab305cfa434951ab846288dc6a6253e-1920x1921.png?q=100&auto=format",
    href: "/our-work/roland",
    colSpan: "md:col-span-2 lg:col-span-3",
  },
  {
    title: "Oyster",
    description: "Illustration Design, eBook & Digital Reports",
    image:
      "https://cdn.sanity.io/images/k0dlbavy/production/fa22d279fc4548d1273e1ce4d5f122934fbf43c2-1197x595.png?q=100&auto=format",
    href: "/our-work/oyster",
    colSpan: "md:col-span-4 lg:col-span-6",
  },
  {
    title: "Marqeta",
    description: "Video Production, Motion Design",
    image:
      "https://cdn.sanity.io/images/k0dlbavy/production/ff6978d90fada0339a7ba4a6b6ae8b17ecb1f298-1197x594.png?q=100&auto=format",
    href: "/our-work/marqeta",
    colSpan: "md:col-span-4 lg:col-span-6",
  },
  {
    title: "Picsart",
    description: "Ad Creative, Social Media Creative",
    image:
      "https://cdn.sanity.io/images/k0dlbavy/production/9af01379a600431bb39dfe16414223195a1528a8-578x594.png?q=100&auto=format",
    href: "/our-work/picsart",
    colSpan: "md:col-span-2 lg:col-span-3",
  },
  {
    title: "Otto",
    description: "Illustration Design, Motion Design",
    image:
      "https://cdn.sanity.io/images/k0dlbavy/production/70eb3d604fd991bd01801f3cd14b52aca6db9b50-578x594.png?q=100&auto=format",
    href: "/our-work/otto-illustration",
    colSpan: "md:col-span-2 lg:col-span-3",
  },
  {
    title: "Imperfect Foods",
    description: "Ad Creative, Social Media Creative",
    image:
      "https://cdn.sanity.io/images/k0dlbavy/production/a49bc047ec9c1345e4804e9a93249e37e5bb23c0-1197x594.png?q=100&auto=format",
    href: "/our-work/imperfect-foods",
    colSpan: "md:col-span-2 lg:col-span-3",
  },
  {
    title: "Outbrain",
    description: "Ad Creative, Motion Design",
    image:
      "https://cdn.sanity.io/images/k0dlbavy/production/4a298145427dfa38ef5e8e12063b7be792dcbc78-1197x594.png?q=100&auto=format",
    href: "/our-work/outbrain",
    colSpan: "md:col-span-2 lg:col-span-3",
  },
  {
    title: "Antler",
    description: "Brand Identity, Motion Design, Social Media Creative",
    image:
      "https://cdn.sanity.io/images/k0dlbavy/production/29923e6d3adbfb3a3c255b86aa07051ce34e4329-1596x793.png?q=100&auto=format",
    href: "/our-work/antler",
    colSpan: "md:col-span-4 lg:col-span-6",
  },
  {
    title: "Suzanne Kalan",
    description: "Video Production, Social Media Creative",
    image:
      "https://cdn.sanity.io/images/k0dlbavy/production/949b744cbd41c850b62a42470b41efd75b7d1c70-1197x594.png?q=100&auto=format",
    href: "/our-work/suzanne-kalan",
    colSpan: "md:col-span-2 lg:col-span-3",
  },
];

export default function UiUxDesign() {
  const services = [
    {
      icon: Monitor,
      title: "Web Design & UI",
      description:
        "Beautiful, modern web interfaces that engage users and drive conversions on desktop and mobile.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description:
        "Intuitive iOS and Android app designs optimized for touch interactions and mobile-first experiences.",
    },
    {
      icon: Users,
      title: "User Research",
      description:
        "In-depth user research, personas, and journey mapping to understand your audience deeply.",
    },
    {
      icon: Target,
      title: "UX Strategy",
      description:
        "Comprehensive UX strategy aligning user needs with business goals for maximum impact.",
    },
    {
      icon: MousePointer,
      title: "Interaction Design",
      description:
        "Engaging micro-interactions, animations, and transitions that delight users.",
    },
    {
      icon: Layers,
      title: "Design Systems",
      description:
        "Scalable design systems with reusable components ensuring consistency across products.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Research & Discovery",
      description:
        "User research, competitive analysis, and stakeholder interviews to understand requirements and opportunities.",
    },
    {
      step: "02",
      title: "Information Architecture",
      description:
        "Structuring content and features into logical flows, sitemaps, and navigation patterns.",
    },
    {
      step: "03",
      title: "Wireframing",
      description:
        "Low-fidelity wireframes to explore layouts, hierarchy, and user flows without visual distractions.",
    },
    {
      step: "04",
      title: "Visual Design",
      description:
        "High-fidelity mockups bringing your brand to life with colors, typography, and imagery.",
    },
    {
      step: "05",
      title: "Prototyping",
      description:
        "Interactive prototypes to test and validate designs before development begins.",
    },
    {
      step: "06",
      title: "User Testing",
      description:
        "Usability testing with real users to identify issues and optimize the experience.",
    },
  ];

  const benefits = [
    "Increase user engagement and retention",
    "Reduce bounce rates and cart abandonment",
    "Improve conversion rates significantly",
    "Decrease customer support requests",
    "Build user trust and credibility",
    "Stay ahead of competitors",
    "Reduce development costs with clear specifications",
    "Create accessible experiences for all users",
  ];

  const portfolioItems = [
    {
      title: "E-Commerce Platform Redesign",
      category: "Web & Mobile",
      result: "+180% conversion rate",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    },
    {
      title: "SaaS Dashboard Design",
      category: "Web Application",
      result: "+95% user satisfaction",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    },
    {
      title: "Mobile Banking App",
      category: "iOS & Android",
      result: "4.8★ App Store rating",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <Helmet>
        <title>UI/UX Design Services - DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Expert UI/UX design services creating beautiful, intuitive digital experiences. User research, wireframing, prototyping, and visual design."
        />
      </Helmet>
      <Navigation />

      <section className="py-16 md:py-20 lg:py-28 bg-white">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Optional Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-blue-900">
              <span className="font-serif italic text-brand-green">
                Real Results
              </span>{" "}
              for Real Brands
            </h2>
          </motion.div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Stat 1 - PointCard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative pb-8 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-border"
            >
              <div className="flex flex-col-reverse lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
                {/* Description */}
                <div className="flex flex-col gap-3 max-w-[500px]">
                  <p className="text-base lg:text-lg text-brand-blue-900/70">
                    Increase in CTR for PointCard
                  </p>
                  <a
                    href="/case-studies/pointcard"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-brand-blue-900 hover:text-brand-green transition-colors"
                  >
                    <span className="relative">
                      PointCard case study
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-current group-hover:w-full transition-all duration-500"></span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
                {/* Number */}
                <p className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-brand-green leading-none">
                  240%
                </p>
              </div>
            </motion.div>

            {/* Stat 2 - Amazon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative pb-8 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-border"
            >
              <div className="flex flex-col-reverse lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
                {/* Description */}
                <div className="flex flex-col gap-3 max-w-[500px]">
                  <p className="text-base lg:text-lg text-brand-blue-900/70">
                    Reduction in cost per asset for Amazon
                  </p>
                  <a
                    href="/case-studies/amazon"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-brand-blue-900 hover:text-brand-green transition-colors"
                  >
                    <span className="relative">
                      Amazon case study
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-current group-hover:w-full transition-all duration-500"></span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
                {/* Number */}
                <p className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-brand-green leading-none">
                  50%
                </p>
              </div>
            </motion.div>

            {/* Stat 3 - Thomson Reuters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative pb-8 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-border"
            >
              <div className="flex flex-col-reverse lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
                {/* Description */}
                <div className="flex flex-col gap-3 max-w-[500px]">
                  <p className="text-base lg:text-lg text-brand-blue-900/70">
                    Design time saved for Thomson Reuters
                  </p>
                  <a
                    href="/case-studies/thomson-reuters"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-brand-blue-900 hover:text-brand-green transition-colors"
                  >
                    <span className="relative">
                      Thomson Reuters case study
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-current group-hover:w-full transition-all duration-500"></span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
                {/* Number */}
                <p className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-brand-green leading-none">
                  ~90%
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <clientLogos/> */}
      <FreshAdsFuelSection />
      <MadeToFlexSection />

      <section className="py-16 md:py-20 lg:py-28 bg-gray-50">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-blue-900">
              <span className="font-serif italic text-brand-green">
                Featured
              </span>{" "}
              Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-y-12">
            {workItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`col-span-full row-span-1 ${item.colSpan} group`}
              >
                <a href={item.href} className="flex flex-col lg:gap-6 gap-3">
                  <div className="overflow-hidden rounded-[10px]">
                    <div className="relative h-[180px] lg:h-[396px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />
                      {item.isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transform transition-transform group-hover:scale-110">
                            <Play className="w-6 h-6 text-brand-blue-900 ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex max-w-full flex-col gap-1 lg:gap-2 select-none justify-start items-start">
                    <div className="flex max-w-full flex-row gap-3 items-center">
                      <h5 className="box-border tracking-[0.1px] text-2xl md:text-3xl lg:text-4xl font-serif italic text-brand-blue-900">
                        {item.title}
                      </h5>
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-brand-blue-900" />
                    </div>
                    <p className="text-sm md:text-sm lg:text-base truncate w-full text-brand-blue-900/70">
                      {item.description}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CreativeServicesSection />
      <StatsSection />
      <TechEnabledSection />

      <FaqSection />

      <Footer />
    </>
  );
}
