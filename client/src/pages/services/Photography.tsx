import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Camera,
  Building2,
  Users,
  Package,
  ImageIcon,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Target,
  Aperture,
  Lightbulb,
  Eye,
  ArrowUpRight
} from "lucide-react";
import ScrollSections, { ScrollSectionsProps } from "@/components/ScrollSections";
import { clientLogos } from "@/data/portfolio-assets";
import { FreshAdsFuelSection } from "@/components/FreshAdsFuelSection";
import { TechEnabledSection } from "@/components/TechEnabledSection";
import { VersatileDesignsSection } from "@/components/VersatileDesignsSection";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { CreativePowerSection } from "@/components/CreativePowerSection";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { GlobalTeamSection } from "@/components/GlobalTeamSection";
import { StatsSection } from "@/components/StatsSection";
import { FaqSection } from "@/components/FaqSection";

export default function Photography() {
  const services = [
    {
      icon: Building2,
      title: "Corporate Photography",
      description: "Professional corporate headshots, team photos, and office environment photography that showcases your company culture.",
    },
    {
      icon: Package,
      title: "Product Photography",
      description: "High-quality product images that highlight details, textures, and features to drive e-commerce sales.",
    },
    {
      icon: Users,
      title: "Event Photography",
      description: "Comprehensive event coverage capturing key moments, networking, and atmosphere at your corporate events.",
    },
    {
      icon: ImageIcon,
      title: "Lifestyle Photography",
      description: "Authentic lifestyle imagery that tells your brand story and connects emotionally with your audience.",
    },
    {
      icon: Sparkles,
      title: "Creative & Conceptual",
      description: "Artistic photography for advertising campaigns, editorial content, and creative brand projects.",
    },
    {
      icon: Camera,
      title: "Commercial Photography",
      description: "Full-service commercial photography for advertising, marketing materials, and brand campaigns.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "Discuss your vision, goals, and requirements. Develop a detailed shot list and creative direction for the project.",
    },
    {
      step: "02",
      title: "Pre-Production",
      description: "Location scouting, talent coordination, prop sourcing, and logistics planning to ensure smooth execution.",
    },
    {
      step: "03",
      title: "Photo Shoot",
      description: "Professional photography session with expert lighting, composition, and direction to capture the perfect shots.",
    },
    {
      step: "04",
      title: "Photo Selection",
      description: "Review all images and select the best shots for editing and final delivery based on your needs.",
    },
    {
      step: "05",
      title: "Post-Production",
      description: "Expert retouching, color correction, and enhancement to ensure every image looks its absolute best.",
    },
    {
      step: "06",
      title: "Delivery & Usage Rights",
      description: "Receive high-resolution images in all required formats with clear usage rights and licensing.",
    },
  ];

  const benefits = [
    "Build trust with professional, high-quality imagery",
    "Increase conversion rates with compelling visuals",
    "Stand out from competitors with unique photography",
    "Create consistent visual brand identity",
    "Engage audiences across all marketing channels",
    "Reduce stock photo costs with custom content",
    "Showcase products and services authentically",
    "Generate versatile assets for multiple campaigns",
  ];

  const portfolioItems = [
    {
      title: "Tech Startup Brand Shoot",
      category: "Corporate",
      description: "Complete corporate photography package for Series B tech company",
      metrics: "150+ images delivered, 12+ months of content",
    },
    {
      title: "E-commerce Product Line",
      category: "Product Photography",
      description: "500+ product images for fashion e-commerce brand",
      metrics: "85% increase in product page conversions",
    },
    {
      title: "Annual Conference Coverage",
      category: "Event Photography",
      description: "3-day conference with 1,000+ attendees fully documented",
      metrics: "300+ images, 95% client satisfaction",
    },
    {
      title: "Lifestyle Campaign",
      category: "Lifestyle",
      description: "Multi-location lifestyle shoot for wellness brand",
      metrics: "Used across 20+ marketing campaigns",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Professional Photography Services | Corporate & Product Photography | DIGI</title>
        <meta
          name="description"
          content="Professional photography services including corporate headshots, product photography, event coverage, and lifestyle imagery. High-quality visuals that elevate your brand."
        />
        <meta
          name="keywords"
          content="photography services, corporate photography, product photography, event photography, commercial photography, professional photographer"
        />
      </Helmet>

      <div className="min-h-screen bg-brand-beige-100">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,117,31,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(194,240,135,0.05),transparent_50%)]" />

          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/30 mb-6">
                <Aperture className="w-4 h-4 text-brand-orange-500" />
                <span className="text-sm font-medium text-brand-orange-500">Photography Services</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Capture Your Brand's Story
                <span className="block text-brand-orange-500">with Professional Photography</span>
              </h1>

              <p className="text-xl text-brand-beige-100/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                High-quality photography that showcases your products, people, and brand personality
                to create lasting impressions and drive business results.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book a Session
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-blue-900 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  View Portfolio
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        

       {/* <clientLogos/> */}
       <FreshAdsFuelSection/>


        {/* Client Results Statistics Section */}
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


        <VersatileDesignsSection/>

        <GlobalTeamSection/>

        <StatsSection/>

        <FaqSection/>



        

       

        <Footer />
      </div>
    </>
  );
}
