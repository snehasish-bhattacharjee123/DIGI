import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

import {
  ArrowUpRight,
  Play,
  Palette,
  BookOpen,
  FileText,
  Package,
  Target,
  Lightbulb,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ScrollSectionsProps } from "@/components/ScrollSections";
import ClientLogos from "@/components/ClientLogos";
import { FreshAdsFuelSection } from "@/components/FreshAdsFuelSection";
import { MadeToFlexSection } from "@/components/MadeToFlexSection";
import  {StatsSection}  from "@/components/StatsSection";
import { CreativePowerSection } from "@/components/CreativePowerSection";
import { FaqSection } from "@/components/FaqSection";
import { GlobalTeamSection } from "@/components/GlobalTeamSection";



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

export default function BrandIdentity() {
  const services = [
    {
      icon: Palette,
      title: "Logo Design",
      description: "Memorable and versatile logos that capture your brand essence and work across all mediums.",
    },
    {
      icon: BookOpen,
      title: "Brand Guidelines",
      description: "Comprehensive brand standards documenting logo usage, colors, typography, and visual style.",
    },
    {
      icon: FileText,
      title: "Brand Messaging",
      description: "Compelling brand voice, taglines, and messaging frameworks that resonate with your audience.",
    },
    {
      icon: Package,
      title: "Brand Collateral",
      description: "Business cards, letterheads, presentations, and all materials needed for consistent branding.",
    },
    {
      icon: Layers,
      title: "Visual Identity System",
      description: "Complete visual language including patterns, icons, imagery style, and graphic elements.",
    },
    {
      icon: Target,
      title: "Brand Strategy",
      description: "Strategic positioning, brand architecture, and market differentiation strategies.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "We dive deep into your business, industry, competitors, and target audience to understand your unique positioning.",
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Define your brand's core values, personality, positioning, and messaging framework.",
    },
    {
      step: "03",
      title: "Creative Exploration",
      description: "Multiple design concepts exploring different visual directions for your brand identity.",
    },
    {
      step: "04",
      title: "Refinement & Testing",
      description: "Refine chosen direction, test across applications, and ensure scalability and versatility.",
    },
    {
      step: "05",
      title: "Guidelines & Delivery",
      description: "Complete brand guidelines, asset library, and all files ready for implementation.",
    },
    {
      step: "06",
      title: "Launch Support",
      description: "Ongoing support during rollout to ensure consistent and impactful brand implementation.",
    },
  ];

  const benefits = [
    "Stand out in a crowded marketplace",
    "Build trust and credibility instantly",
    "Create emotional connections with customers",
    "Increase brand recognition and recall",
    "Command premium pricing",
    "Attract top talent to your organization",
    "Streamline marketing efforts with consistency",
    "Future-proof your brand for growth",
  ];

  const portfolioItems = [
    {
      title: "Tech Startup Rebrand",
      industry: "Technology",
      result: "250% increase in brand recognition",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
    },
    {
      title: "Luxury Restaurant Identity",
      industry: "Hospitality",
      result: "Featured in design awards",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
    },
    {
      title: "E-Commerce Brand Launch",
      industry: "Retail",
      result: "Successful market entry in 6 countries",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Brand Identity Design Services - DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Professional brand identity design services. Create a memorable brand with custom logos, guidelines, and comprehensive visual identity systems."
        />
      </Helmet>
      <Navigation />

      <ErrorBoundary>
                <FreshAdsFuelSection/>
              </ErrorBoundary>

       <ErrorBoundary>
                <MadeToFlexSection/>
              </ErrorBoundary>

              <ErrorBoundary>
                <StatsSection/>
              </ErrorBoundary>    

              <ErrorBoundary>
                <CreativePowerSection/>
              </ErrorBoundary>   

              <ErrorBoundary>
                <FaqSection/>
              </ErrorBoundary>

              <ErrorBoundary>
                <GlobalTeamSection/>
              </ErrorBoundary>

      {/* Hero Section */}
      {/* <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_50%)]" />

        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
                <span className="text-primary font-semibold">Brand Identity</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Create a Brand Identity That <span className="text-primary">Stands Out</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                Your brand identity is more than just a logo—it's the complete visual and emotional
                experience that sets you apart. We craft memorable brand identities that capture your
                essence and resonate with your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
                    Start Your Brand Journey
                  </Button>
                </a>
                <a href="#portfolio">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                    View Portfolio
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl border border-primary/30 flex items-center justify-center">
                <Palette className="w-32 h-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      


{/* Port Folio Grid Section  */}

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


      <Footer />
    </>
  );
}
