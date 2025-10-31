import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

import {
  Play,
  ExternalLink,
  Eye,
  Filter,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

export default function OurWork() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "branding", label: "Branding" },
    { id: "social", label: "Social Media" },
    { id: "video", label: "Video Production" },
    { id: "web", label: "Web Design" },
    { id: "graphics", label: "Graphic Design" },
  ];

  const projects = [
    {
      id: 1,
      title: "TechCorp Brand Redesign",
      category: "branding",
      client: "TechCorp International",
      description:
        "Complete brand identity overhaul including logo, guidelines, and marketing collateral",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
      tags: ["Branding", "Identity", "Print"],
      results: "+250% brand recognition",
    },
    {
      id: 2,
      title: "Fashion Campaign 2024",
      category: "social",
      client: "Luxe Fashion",
      description:
        "Multi-platform social media campaign reaching millions of engaged users",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop",
      tags: ["Social Media", "Content", "Strategy"],
      results: "5M+ impressions",
    },
    {
      id: 3,
      title: "Product Launch Video",
      category: "video",
      client: "InnovateTech",
      description:
        "High-impact product launch video with 3D animations and storytelling",
      image:
        "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&auto=format&fit=crop",
      tags: ["Video", "Animation", "Production"],
      results: "2M+ views in 48hrs",
      isVideo: true,
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      category: "web",
      client: "ShopHub",
      description:
        "Modern, conversion-optimized e-commerce website with seamless UX",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      tags: ["Web Design", "UX/UI", "Development"],
      results: "+180% conversions",
    },
    {
      id: 5,
      title: "Restaurant Branding Suite",
      category: "branding",
      client: "Gourmet Bistro",
      description:
        "Full branding package including logo, menu design, and interior graphics",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
      tags: ["Branding", "Print", "Packaging"],
      results: "Featured in design awards",
    },
    {
      id: 6,
      title: "Instagram Campaign Series",
      category: "social",
      client: "FitLife Wellness",
      description:
        "30-day Instagram content series driving engagement and community growth",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
      tags: ["Social Media", "Content", "Photography"],
      results: "+300% engagement rate",
    },
    {
      id: 7,
      title: "Corporate Documentary",
      category: "video",
      client: "Global Enterprises",
      description:
        "Professional corporate documentary highlighting company culture and values",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop",
      tags: ["Video", "Documentary", "Production"],
      results: "Used in recruitment drive",
      isVideo: true,
    },
    {
      id: 8,
      title: "Marketing Collateral Design",
      category: "graphics",
      client: "Summit Consulting",
      description:
        "Complete suite of marketing materials including brochures, presentations, and infographics",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop",
      tags: ["Graphic Design", "Print", "Presentation"],
      results: "Improved sales materials",
    },
    {
      id: 9,
      title: "SaaS Platform Interface",
      category: "web",
      client: "CloudSync",
      description: "Clean, intuitive dashboard design for B2B SaaS platform",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      tags: ["Web Design", "UX/UI", "Dashboard"],
      results: "+95% user satisfaction",
    },
  ];

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

  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop",
      alt: "Digital Marketing Services",
    },
    {
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&auto=format&fit=crop",
      alt: "Brand Strategy",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&auto=format&fit=crop",
      alt: "Digital Experiences",
    },
    {
      src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1600&auto=format&fit=crop",
      alt: "Creative Services",
    },
    {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600&auto=format&fit=crop",
      alt: "Customer Relations",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&auto=format&fit=crop",
      alt: "Communications",
    },
  ];

  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })],
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Our Work - Portfolio | DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Explore our portfolio of award-winning creative projects. From branding to video production, see how we've helped brands tell their stories."
        />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-white text-foreground pt-16 md:pt-20 lg:pt-32 pb-6 md:pb-6 lg:pb-8 overflow-hidden">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-center items-center gap-4 lg:gap-8 max-w-[1064px] mx-auto"
          >
            {/* Label */}
            <span className="text-xs md:text-xs lg:text-sm tracking-widest font-semibold uppercase text-muted-foreground">
              our work
            </span>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-tight">
              Creative that{" "}
              <span className="font-serif text-[calc(100%+4px)] font-normal italic">
                works
              </span>
            </h1>

            {/* Subtitle */}
            <div className="flex flex-col gap-4 lg:gap-8 items-center w-full">
              <h6 className="text-xl md:text-2xl lg:text-2xl font-normal tracking-tight leading-relaxed lg:max-w-[600px] max-w-xl opacity-80">
                We help the world's leading brands create standout ads and
                campaigns at speed—from concept to execution to results.
              </h6>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-brand-beige-100 sticky top-20 z-40 border-b border-brand-gray-300 shadow-brand">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex items-center gap-3 mb-4 lg:mb-0">
            <Filter className="w-5 h-5 text-brand-gray-600" />
            <span className="text-sm font-semibold text-brand-gray-700 uppercase tracking-wide">
              Filter by:
            </span>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-brand-orange text-white shadow-brand-lg scale-105"
                    : "bg-white text-brand-gray-700 hover:bg-brand-gray-100 border border-brand-gray-300 hover:border-brand-orange/50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results Statistics Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-white border-b">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Optional Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
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
                  <p className="text-base lg:text-lg text-muted-foreground">
                    Increase in CTR for PointCard
                  </p>
                  <a
                    href="/case-studies/pointcard"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-brand-green transition-colors"
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
                  <p className="text-base lg:text-lg text-muted-foreground">
                    Reduction in cost per asset for Amazon
                  </p>
                  <a
                    href="/case-studies/amazon"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-brand-green transition-colors"
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
                  <p className="text-base lg:text-lg text-muted-foreground">
                    Design time saved for Thomson Reuters
                  </p>
                  <a
                    href="/case-studies/thomson-reuters"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-brand-green transition-colors"
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

      {/* Portfolio Work Grid */}
      <section className="py-16 md:py-20 lg:py-28 bg-white">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
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
                      <h5 className="box-border tracking-[0.1px] text-2xl md:text-3xl lg:text-4xl font-serif italic">
                        {item.title}
                      </h5>
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <p className="text-sm md:text-sm lg:text-base truncate w-full text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accelerate Business Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-brand-beige-50 to-white">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="font-serif italic text-brand-orange">
                  Accelerate
                </span>{" "}
                your business with us
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Learn more about our range of our services.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Whether you need transformational{" "}
                <span className="font-serif italic text-brand-green">
                  brand
                </span>{" "}
                <span className="font-serif italic text-brand-green">
                  strategy,
                </span>{" "}
                <span className="font-serif italic text-brand-green">
                  communications,
                </span>{" "}
                <span className="font-serif italic text-brand-green">
                  digital
                </span>{" "}
                <span className="font-serif italic text-brand-green">
                  experiences
                </span>{" "}
                or more valuable relationships with your customers - we are
                ready to take your brief.
              </p>
              <div className="pt-4">
                <a href="/services">
                  <Button variant="cta" size="lg" className="text-lg px-8">
                    See All Services
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Right Column - Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className="flex-[0_0_100%] min-w-0 relative"
                    >
                      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Navigation */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <button
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-brand-blue-900" />
                </button>
                <button
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-brand-blue-900" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-brand-beige-100">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white border border-brand-gray-300 rounded-2xl overflow-hidden hover:border-brand-orange/50 transition-all duration-300 hover:shadow-brand-xl hover:scale-[1.02]"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden bg-brand-gray-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900 via-brand-blue-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Video Play Icon */}
                    {project.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-brand-lg">
                          <Play
                            className="w-8 h-8 text-white ml-1"
                            fill="white"
                          />
                        </div>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-blue-900/70">
                      <div className="flex gap-3">
                        <button className="bg-white text-brand-blue-900 p-3 rounded-full hover:bg-brand-orange hover:text-white transition-colors duration-300 shadow-brand">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="bg-white text-brand-blue-900 p-3 rounded-full hover:bg-brand-orange hover:text-white transition-colors duration-300 shadow-brand">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="text-sm text-brand-orange font-semibold mb-2 uppercase tracking-wide">
                      {project.client}
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue-900 mb-3 group-hover:text-brand-orange transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-brand-gray-700 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-brand-beige-100 text-brand-gray-700 text-xs rounded-full border border-brand-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="pt-4 border-t border-brand-gray-300">
                      <div className="text-xs text-brand-gray-600 mb-1 uppercase tracking-wide">
                        Results
                      </div>
                      <div className="text-brand-green font-semibold">
                        {project.results}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-brand-gray-600 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}

          {/* Load More Button */}
          {filteredProjects.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 text-lg"
              >
                Load More Projects
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-blue-900">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Awards Won" },
              { number: "30+", label: "Countries Served" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green mb-2">
                  {stat.number}
                </div>
                <div className="text-brand-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-brand-beige-100">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-6xl text-brand-orange mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl text-brand-blue-900 font-light mb-8 leading-relaxed">
              Digiteller Creative transformed our brand identity and helped us
              stand out in a crowded market. Their creativity and attention to
              detail is unmatched.
            </blockquote>
            <div className="text-brand-gray-700">
              <div className="font-semibold text-brand-blue-900 mb-1 text-lg">
                Sarah Johnson
              </div>
              <div className="text-sm">CEO, TechCorp International</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-brand-beige-50 to-brand-beige-100">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 border border-brand-orange/30 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,117,31,0.1),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-beige-100 mb-6">
                Ready to Create Your{" "}
                <span className="text-brand-orange">Success Story?</span>
              </h2>
              <p className="text-xl text-brand-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help your brand achieve similar results
                and make an impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/917998596948"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="cta" size="lg" className="text-lg px-8">
                    Start Your Project
                  </Button>
                </a>
                <a href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-brand-beige-100 text-brand-beige-100 hover:bg-brand-beige-100 hover:text-brand-blue-900 text-lg px-8"
                  >
                    Get in Touch
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
