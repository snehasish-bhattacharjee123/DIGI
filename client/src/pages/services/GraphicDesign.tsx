import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import ScrollSections, { ScrollSectionsProps } from "@/components/ScrollSections";
import { clientLogos } from "@/data/portfolio-assets";
import { FreshAdsFuelSection } from "@/components/FreshAdsFuelSection";
import { TechEnabledSection } from "@/components/TechEnabledSection";
import { VersatileDesignsSection } from "@/components/VersatileDesignsSection";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { CreativePowerSection } from "@/components/CreativePowerSection";
import { ErrorBoundary } from "@/components/ErrorBoundary";


import {
  Image,
  Layout,
  FileText,
  Presentation,
  Newspaper,
  Package2,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import ClientLogos from "@/components/ClientLogos";

export default function GraphicDesign() {
  const services = [
    {
      icon: Image,
      title: "Social Media Graphics",
      description: "Eye-catching visuals for Instagram, Facebook, LinkedIn, and all social platforms.",
    },
    {
      icon: Layout,
      title: "Marketing Materials",
      description: "Brochures, flyers, posters, and print materials that drive engagement and conversions.",
    },
    {
      icon: Presentation,
      title: "Presentation Design",
      description: "Professional slide decks that captivate audiences and communicate your message effectively.",
    },
    {
      icon: FileText,
      title: "Infographics",
      description: "Data visualization and infographics that make complex information easy to understand.",
    },
    {
      icon: Newspaper,
      title: "Digital Ads",
      description: "Display ads, banners, and paid social creatives optimized for maximum impact.",
    },
    {
      icon: Package2,
      title: "Packaging Design",
      description: "Product packaging that stands out on shelves and tells your brand story.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Brief & Requirements",
      description: "Understanding your goals, target audience, brand guidelines, and project specifications.",
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Creating initial design concepts exploring different creative directions and styles.",
    },
    {
      step: "03",
      title: "Design Execution",
      description: "Crafting polished designs with attention to typography, color, composition, and details.",
    },
    {
      step: "04",
      title: "Review & Refinement",
      description: "Incorporating your feedback and refining designs until they're perfect.",
    },
    {
      step: "05",
      title: "Final Delivery",
      description: "Providing all final files in required formats, ready for print or digital use.",
    },
  ];

  const benefits = [
    "Fast turnaround times without compromising quality",
    "Unlimited revisions until you're satisfied",
    "Files delivered in all necessary formats",
    "Print-ready and web-optimized outputs",
    "Consistent brand application across all designs",
    "Scalable solutions that grow with your needs",
    "Dedicated designer assigned to your projects",
    "Rights and ownership transferred to you",
  ];

  const portfolioItems = [
    {
      title: "Fashion Brand Campaign",
      category: "Social Media",
      result: "500K+ engagements",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop",
    },
    {
      title: "Tech Conference Materials",
      category: "Marketing Collateral",
      result: "Used across 12 events",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
    },
    {
      title: "Product Launch Packaging",
      category: "Packaging Design",
      result: "Design award winner",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Graphic Design Services - DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Professional graphic design services for all your visual content needs. From social media graphics to print materials, we create designs that captivate."
        />
      </Helmet>
      <Navigation />

      

      {/* Hero Section */}
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

      {/* <ErrorBoundary>
                <ScrollSections/>
              </ErrorBoundary> */}

              <ErrorBoundary>
                <ClientLogos/>
              </ErrorBoundary>

              <ErrorBoundary>
                <FreshAdsFuelSection/>
              </ErrorBoundary>

              <ErrorBoundary>
                <TechEnabledSection/>
              </ErrorBoundary>

              <ErrorBoundary>
                <VersatileDesignsSection/>
              </ErrorBoundary>

              <ErrorBoundary>
                <HowWeWorkSection/>
              </ErrorBoundary>

              <ErrorBoundary>
                <FreshAdsFuelSection/>
              </ErrorBoundary>

              <ErrorBoundary>
                <CreativePowerSection/>
              </ErrorBoundary>

      {/* Services Section */}
      

      {/* Process Section */}
      

      {/* Benefits Section */}
      

      {/* Portfolio Section */}
      

      {/* CTA Section */}
      

      <Footer />
    </>
  );
}
