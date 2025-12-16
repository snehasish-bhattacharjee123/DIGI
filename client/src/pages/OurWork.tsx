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
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from "react";

const ServicesSectionLazy = lazy(() =>
  import("@/components/ServicesSection").then((m) => ({ default: m.ServicesSection }))
);
const CreativeAssetsSectionLazy = lazy(() =>
  import("@/components/CreativeAssetsSection").then((m) => ({
    default: m.CreativeAssetsSection,
  }))
);

export default function OurWork() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredServiceTile, setHoveredServiceTile] = useState<string | null>(
    null
  );

  const [renderDeferredSections, setRenderDeferredSections] = useState(false);
  const [activeFeaturedVideoIndex, setActiveFeaturedVideoIndex] = useState(0);

  const prefersReducedMotion = useReducedMotion();
  const revealViewport = { once: true, margin: "-120px" };
  const revealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const revealTransition = { duration: 0.7, ease: revealEase };
  const revealUpInitial = { opacity: 0, y: 24 };
  const revealUpWhileInView = { opacity: 1, y: 0 };

  const marketingServices = [
    {
      id: "digital-marketing",
      title: "Digital Marketing & Customer Acquisition",
      description:
        "The modern customer is always online. If you have an exciting product, they are looking for you. We ensure that tailor-made content reaches the right audience. From the blogs they read, the posts they engage with to the websites they frequent, acquiring new customers in the digital space with the right message is simple, quick and easy!",
    },
    {
      id: "omni-channel",
      title: "Omnichannel Strategy & Solutions",
      description:
        "A crisp copy on the right platform is the recipe to brand success. The first impression means a whole lot more in the digital space. Your customers make up their minds the instant they see your website, the minute they engage with your brand on any platform. We, the most accomplished online marketing consultant in India ensure that your customers are delighted, every step along the way.",
    },
    {
      id: "digital-media",
      title: "Digital Media Distribution and Solutions",
      description:
        "As the best known digital marketing consultant, we've cracked the code to finding the right partners who will amplify your offering to the right people. With our strategic alliances with media houses, we're able to get the right buzz going around your offering!",
    },
  ] as const;

  type MarketingServiceId = (typeof marketingServices)[number]["id"];

  const [activeMarketingService, setActiveMarketingService] =
    useState<MarketingServiceId>("digital-marketing");

  const activeMarketingServiceData = useMemo(() => {
    return (
      marketingServices.find((service) => service.id === activeMarketingService) ??
      marketingServices[0]
    );
  }, [activeMarketingService, marketingServices]);

  const getResponsiveImgSrc = useCallback((url: string, width: number) => {
    if (!url) return url;
    if (url.startsWith("/")) return url;
    if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) return url;
    if (url.includes("w=")) return url.replace(/w=\d+/i, `w=${width}`);
    return `${url}${url.includes("?") ? "&" : "?"}w=${width}`;
  }, []);

  const getResponsiveImgSrcSet = useCallback(
    (url: string, widths: number[]) => {
      if (!url) return "";
      if (url.startsWith("/")) return "";
      return widths.map((w) => `${getResponsiveImgSrc(url, w)} ${w}w`).join(", ");
    },
    [getResponsiveImgSrc]
  );

  const getWorkItemSizes = useCallback((colSpan: string) => {
    if (colSpan.includes("lg:col-span-6")) {
      return "(min-width: 1024px) 50vw, 100vw";
    }
    if (colSpan.includes("lg:col-span-3")) {
      return "(min-width: 1024px) 25vw, 100vw";
    }
    return "(min-width: 1024px) 33vw, 100vw";
  }, []);

  useEffect(() => {
    const win = window as any;
    const reveal = () => setRenderDeferredSections(true);

    if (typeof win?.requestIdleCallback === "function") {
      const handle = win.requestIdleCallback(reveal, { timeout: 2000 });
      return () => win.cancelIdleCallback?.(handle);
    }

    const timeout = window.setTimeout(reveal, 1200);
    return () => window.clearTimeout(timeout);
  }, []);

  const serviceTiles = [
    {
      id: "content",
      title: "Video Editing",
      imageSrc:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1600&auto=format&fit=crop",
      imageAlt:
        "content marketing |content marketing strategy | digital marketing content",
      bgClass: "bg-[#F04438]",
    },
    {
      id: "conversion",
      title: "Performence Marketing",
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop",
      imageAlt:
        "conversion in digital marketing | Top digital marketing agency in Bangalore",
      bgClass: "bg-[#16A34A]",
    },
    {
      id: "conversation",
      title: "Graphi Designing",
      imageSrc:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&auto=format&fit=crop",
      imageAlt:
        "Homepage banner conversions | Digital marketing agency in bangalore",
      bgClass: "bg-[#F59E0B]",
    },
    
  ];

  const categories = [
    { id: "all", label: "All Work" },
    { id: "branding", label: "Branding" },
    { id: "social", label: "Social Media" },
    { id: "video", label: "Video Production" },
    { id: "web", label: "Web Design" },
    { id: "graphics", label: "Graphic Design" },
  ];

  // Testimonials content
  const testimonials = [
    {
      quote:
        "Digiteller Creative transformed our brand identity and helped us stand out in a crowded market. Their creativity and attention to detail is unmatched.",
      name: "Sarah Johnson",
      title: "CEO, TechCorp International",
    },
    {
      quote:
        "Share something positive a past client has said and encourage potential clients to get onboard...",
      name: "Halit Keigad",
      title: "Marketing Lead, Finly",
    },
  ];

  const clientResultStats = [
    {
      brand: "PointCard",
      metric: "Increase in CTR",
      value: "240%",
      copy:
        "A modular experimentation engine helped PointCard turn one hero concept into hundreds of winners, unlocking a 240% jump in click-throughs.",
      signal: "Paid media lift",
      href: "/case-studies/pointcard",
      glow: "bg-brand-green/10",
      delay: 0.1,
    },
    {
      brand: "Amazon",
      metric: "Reduction in cost per asset",
      value: "50%",
      copy:
        "Centralized creative ops and reusable design kits cut Amazon’s per-asset cost in half while scaling global launches.",
      signal: "Production efficiency",
      href: "/case-studies/amazon",
      glow: "bg-brand-orange/10",
      delay: 0.2,
    },
    {
      brand: "Thomson Reuters",
      metric: "Design time saved",
      value: "~90%",
      copy:
        "An embedded sprint team automated repetitive formats so Thomson Reuters’ strategists shipped concepts nearly 90% faster.",
      signal: "Speed to market",
      href: "/case-studies/thomson-reuters",
      glow: "bg-brand-blue-500/10",
      delay: 0.3,
    },
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

  type WorkItem = {
    title: string;
    description: string;
    image: string;
    videoSrc?: string;
    href: string;
    colSpan: string;
    isVideo?: boolean;
    poster?: string;
  };

  type FeaturedVideoItem = {
    title: string;
    description: string;
    src: string;
    poster: string;
    href: string;
  };

  const featuredVideos: FeaturedVideoItem[] = [
    {
      title: "Digiteller Graphics Reel",
      description: "Motion graphics & design highlights",
      src: "/videos/Digiteller Graphics Reel Final.mp4",
      poster: "/images/work/DSC09150.jpg",
      href: "/our-work",
    },
    {
      title: "Motion Graphic Animation",
      description: "Animated storytelling & kinetic typography",
      src: "/videos/7048309_Animation_Motion_Graphic_3840x2160.mp4",
      poster: "/images/work/IMG_20251210_205642.jpg",
      href: "/our-work",
    },
    {
      title: "Product Video Snippet",
      description: "High-energy edits for performance creatives",
      src: "/videos/3135926-hd_1920_1080_30fps.mp4",
      poster: "/images/work/DSC09150.jpg",
      href: "/our-work",
    },
    {
      title: "Bolt",
      description: "Motion design preview",
      src: "https://cdn.sanity.io/files/k0dlbavy/production/9ef48fc5551e1e172ceca6555ce758868360a4e4.mp4",
      poster: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1600&auto=format&fit=crop",
      href: "/our-work/bolt",
    },
    {
      title: "Improvise",
      description: "Animated creative preview",
      src: "/images/work/zomatoanim.mp4",
      poster: "/images/work/DSC09150.jpg",
      href: "/our-work/improvise",
    },
  ];

  const workItems: WorkItem[] = [
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
      poster:
        "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1600&auto=format&fit=crop",
      href: "/our-work/bolt",
      colSpan: "md:col-span-2 lg:col-span-3",
      isVideo: true,
    },
    {
      title: "Improvise",
      description: "Motion Design, Video Production",
      image: "/images/work/zomatoanim.mp4",
      poster: "/images/work/DSC09150.jpg",
      href: "/our-work/improvise",
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
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  // Testimonials carousel setup
  const [tEmblaRef, tEmblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [tCanPrev, setTCanPrev] = useState(false);
  const [tCanNext, setTCanNext] = useState(false);
  const tScrollPrev = useCallback(() => {
    if (tEmblaApi) tEmblaApi.scrollPrev();
  }, [tEmblaApi]);
  const tScrollNext = useCallback(() => {
    if (tEmblaApi) tEmblaApi.scrollNext();
  }, [tEmblaApi]);
  const tOnSelect = useCallback(() => {
    if (!tEmblaApi) return;
    setTCanPrev(tEmblaApi.canScrollPrev());
    setTCanNext(tEmblaApi.canScrollNext());
  }, [tEmblaApi]);
  useEffect(() => {
    if (!tEmblaApi) return;
    tOnSelect();
    tEmblaApi.on("select", tOnSelect);
    tEmblaApi.on("reInit", tOnSelect);
  }, [tEmblaApi, tOnSelect]);

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
    setActiveFeaturedVideoIndex(emblaApi.selectedScrollSnap());
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
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
      </Helmet>
      <Navigation theme="white" />

      <main id="main-content" role="main" className="wst-fonts overflow-x-hidden">

     
      {/* <section className="relative bg-white text-brand-blue-900 pt-24 md:pt-20 lg:pt-32 pb-12 md:pb-16 lg:pb-20 overflow-hidden">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-center items-center gap-4 lg:gap-8 max-w-[1064px] mx-auto"
          >
         
            <span className="text-xs md:text-xs lg:text-sm tracking-widest font-semibold uppercase text-brand-orange">
              our work
            </span>

            
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-tight text-brand-blue-900">
              Creative that{" "}
              <span className="text-[calc(100%+4px)] font-extrabold text-brand-orange">
                works
              </span>
            </h1>

            
            <div className="flex flex-col gap-4 lg:gap-8 items-center w-full">
              <h6 className="text-xl md:text-2xl lg:text-2xl font-normal tracking-tight leading-relaxed lg:max-w-[600px] max-w-xl text-brand-blue-700">
                We help the world's leading brands create standout ads and
                campaigns at speed—from concept to execution to results.
              </h6>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Service Tiles (Hover Zoom-Out) */}
      <motion.section
        initial={prefersReducedMotion ? false : revealUpInitial}
        whileInView={prefersReducedMotion ? undefined : revealUpWhileInView}
        viewport={prefersReducedMotion ? undefined : revealViewport}
        transition={prefersReducedMotion ? undefined : revealTransition}
        className="bg-white"
      >
        <div className="w-full grid grid-cols-1 md:flex md:overflow-visible">
          {serviceTiles.map((tile, index) => (
            <div
              key={tile.id}
              onMouseEnter={() => setHoveredServiceTile(tile.id)}
              onMouseLeave={() => setHoveredServiceTile(null)}
              className={`group relative h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] w-full overflow-hidden ${tile.bgClass} md:snap-none md:shrink md:transition-[flex] md:duration-700 md:ease-[cubic-bezier(0.22,1,0.36,1)] md:flex-1 ${
                hoveredServiceTile === null
                  ? "md:flex-[1]"
                  : hoveredServiceTile === tile.id
                  ? "md:flex-[1.6]"
                  : "md:flex-[0.8]"
              }`}
            >
              <img
                src={getResponsiveImgSrc(tile.imageSrc, 1200)}
                srcSet={getResponsiveImgSrcSet(tile.imageSrc, [480, 768, 1024, 1200, 1600])}
                sizes="(min-width: 1024px) 25vw, 100vw"
                alt={tile.imageAlt}
                className="absolute inset-0 h-full w-full object-cover transform scale-125 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "low"}
              />
              <div className="absolute inset-0 bg-black/15 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-10" />
              <h2 className="absolute bottom-6 left-6 text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide uppercase">
                {tile.title}
              </h2>
            </div>
          ))}
        </div>
      </motion.section>

      {/* <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={prefersReducedMotion ? false : revealUpInitial}
            whileInView={prefersReducedMotion ? undefined : revealUpWhileInView}
            viewport={prefersReducedMotion ? undefined : revealViewport}
            transition={prefersReducedMotion ? undefined : revealTransition}
            className="text-center mb-10 lg:mb-14"
          >
            
            <h2 className="font-heading text-h2 leading-tight-13 font-bold text-brand-blue-900">
              Strategies built for <span className="text-brand-green">growth</span>
            </h2>
            <p className="mt-4 text-base lg:text-lg text-brand-blue-700 max-w-2xl mx-auto">
              Choose a capability to see how we help you reach the right audience, on the right channel, with the right message.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:gap-14 lg:grid-cols-2 items-start">
            <div className="space-y-4">
              {marketingServices.map((service) => {
                const isActive = service.id === activeMarketingService;
                return (
                  <button
                    key={service.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveMarketingService(service.id)}
                    className="w-full text-left group flex gap-4 items-start px-1 py-2 transition-colors"
                  >
                    <span
                      className={
                        isActive
                          ? "mt-2 h-3 w-3 rounded-full bg-brand-green shrink-0"
                          : "mt-2 h-3 w-3 rounded-full bg-brand-blue-200/60 shrink-0"
                      }
                    />
                    <span
                      className={
                        isActive
                          ? "font-heading text-2xl md:text-3xl leading-tight font-bold text-brand-blue-900"
                          : "font-heading text-base md:text-lg leading-tight text-brand-blue-900/70 group-hover:text-brand-blue-900 transition-colors"
                      }
                    >
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="lg:pl-12 lg:border-l lg:border-brand-blue-100/80">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={activeMarketingServiceData.id}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -18 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="text-base md:text-lg text-brand-blue-700 leading-relaxed max-w-xl"
                >
                  {activeMarketingServiceData.description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section> */}

      {/* Category Filter */}
      {/* <section className="py-8 bg-brand-beige-100 sticky top-20 z-40 border-b border-brand-gray-300 shadow-brand">
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
      </section> */}

      



      {false && (
        <section className="relative overflow-hidden bg-[#F4FAFF] py-16 sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-brand-green/20 blur-3xl opacity-70 animate-pulse" />
            <div className="absolute bottom-[-120px] left-[-40px] h-72 w-72 rounded-full bg-brand-blue-500/10 blur-3xl" />
          </div>
          <div className="relative max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <motion.div
              initial={prefersReducedMotion ? false : revealUpInitial}
              whileInView={prefersReducedMotion ? undefined : revealUpWhileInView}
              viewport={prefersReducedMotion ? undefined : revealViewport}
              transition={prefersReducedMotion ? undefined : revealTransition}
              className="text-center mb-12 lg:mb-16"
            >
              <p className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-brand-green">
                Client Outcomes
              </p>
              <h2 className="font-heading text-h2 leading-tight-13 font-bold text-brand-blue-900">
                <span className="text-brand-green">Real Results</span>{" "}
                for Real Brands
              </h2>
              <p className="mt-4 text-base lg:text-lg text-brand-blue-700 max-w-2xl mx-auto">
                We embed with growth teams to ship high-performing creative pods.
                Every metric below is tied to shipped assets and real revenue
                moments&mdash;not vanity stats.
              </p>
            </motion.div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-[#F4FAFF] md:hidden" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-[#F4FAFF] md:hidden" />
              <div className="flex snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
                {clientResultStats.map((stat) => (
                  <motion.article
                    key={stat.brand}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
                    whileInView={
                      prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                    }
                    viewport={prefersReducedMotion ? undefined : revealViewport}
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : { ...revealTransition, delay: stat.delay }
                    }
                    whileHover={{ y: -12, rotate: -0.4 }}
                    className="group relative min-w-[280px] snap-center rounded-2xl border border-brand-blue-100/60 bg-white/90 p-6 lg:p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-[transform,box-shadow] duration-500 md:min-w-0"
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${stat.glow}`}
                    />
                    <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-blue-500">
                      <span>{stat.metric}</span>
                      <span className="flex items-center gap-2 tracking-[0.2em] text-brand-blue-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-green"></span>
                        {stat.signal}
                      </span>
                    </div>
                    <p className="mt-6 text-5xl md:text-6xl font-black leading-none text-brand-green">
                      {stat.value}
                    </p>
                    <p className="mt-4 text-base lg:text-lg text-brand-blue-800">
                      <span className="font-semibold text-brand-blue-900">
                        {stat.brand}
                      </span>{" "}
                      {stat.copy}
                    </p>
                    <motion.span
                      aria-hidden="true"
                      className="mt-6 block h-px w-full bg-brand-blue-200/60"
                      animate={
                        prefersReducedMotion
                          ? { opacity: 0.6 }
                          : { opacity: [0.3, 1, 0.3] }
                      }
                      transition={
                        prefersReducedMotion
                          ? undefined
                          : { duration: 3, repeat: Infinity, ease: "easeInOut" }
                      }
                    />
                    <a
                      href={stat.href}
                      className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue-800 transition-all duration-300 hover:text-brand-green"
                    >
                      Explore case study
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {renderDeferredSections ? (
        <Suspense fallback={null}>
          <ServicesSectionLazy />
        </Suspense>
      ) : null}



      {/* Portfolio Work Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={prefersReducedMotion ? false : revealUpInitial}
            whileInView={prefersReducedMotion ? undefined : revealUpWhileInView}
            viewport={prefersReducedMotion ? undefined : revealViewport}
            transition={prefersReducedMotion ? undefined : revealTransition}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="font-heading text-h2 leading-tight-13 font-bold mb-4 text-brand-blue-900">
              <span className="font-semibold uppercase tracking-wide text-brand-green">
                Featured
              </span>{" "}
              Work
            </h2>
          </motion.div>

          <div className="mb-10 lg:mb-14">
            <div className="flex items-end justify-between gap-6 mb-5">
              <div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-brand-green">
                  Featured Videos
                </p>
                <p className="mt-2 text-sm sm:text-base text-brand-blue-700 max-w-2xl">
                  A quick look at motion, edits, and reels we craft for brands.
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  className="w-10 h-10 rounded-full bg-white border border-brand-blue-100 text-brand-blue-900 shadow-sm flex items-center justify-center hover:bg-brand-blue-900 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous featured video"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  className="w-10 h-10 rounded-full bg-white border border-brand-blue-100 text-brand-blue-900 shadow-sm flex items-center justify-center hover:bg-brand-blue-900 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next featured video"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                  {featuredVideos.map((video, index) => (
                    <div
                      key={video.title}
                      className="flex-[0_0_88%] sm:flex-[0_0_65%] md:flex-[0_0_52%] lg:flex-[0_0_40%] xl:flex-[0_0_33%] min-w-0"
                    >
                      <a
                        href={video.href}
                        className="group block overflow-hidden rounded-2xl border border-brand-blue-100/70 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
                      >
                        <div className="relative aspect-[16/9] overflow-hidden">
                          {activeFeaturedVideoIndex === index ? (
                            <video
                              autoPlay
                              playsInline
                              muted
                              loop
                              preload="metadata"
                              poster={video.poster}
                              className="absolute inset-0 w-full h-full object-cover hidden md:block"
                              src={video.src}
                            />
                          ) : (
                            <img
                              src={getResponsiveImgSrc(video.poster, 960)}
                              srcSet={
                                getResponsiveImgSrcSet(video.poster, [480, 768, 960, 1280]) ||
                                undefined
                              }
                              sizes="(min-width: 1024px) 33vw, 88vw"
                              alt={video.title}
                              className="absolute inset-0 w-full h-full object-cover hidden md:block"
                              loading="lazy"
                              decoding="async"
                            />
                          )}
                          <img
                            src={getResponsiveImgSrc(video.poster, 720)}
                            srcSet={
                              getResponsiveImgSrcSet(video.poster, [360, 480, 720, 960]) ||
                              undefined
                            }
                            sizes="100vw"
                            alt={video.title}
                            className="absolute inset-0 w-full h-full object-cover md:hidden transform transition-transform duration-500 group-hover:scale-105"
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding="async"
                            fetchPriority={index === 0 ? "high" : "auto"}
                          />

                          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center transform transition-transform group-hover:scale-110">
                              <Play className="w-6 h-6 text-brand-blue-900 ml-1" />
                            </div>
                          </div> */}

                          <div className="absolute left-4 right-4 bottom-4">
                            <p className="text-white font-semibold text-lg leading-tight">
                              {video.title}
                            </p>
                            <p className="mt-1 text-white/80 text-sm">
                              {video.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sm:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <button
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  className="w-10 h-10 rounded-full bg-white border border-brand-blue-100 text-brand-blue-900 shadow-sm flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous featured video"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  className="w-10 h-10 rounded-full bg-white border border-brand-blue-100 text-brand-blue-900 shadow-sm flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next featured video"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-y-10">
            {workItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={prefersReducedMotion ? undefined : revealViewport}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { ...revealTransition, delay: index * 0.05 }
                }
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { y: -10, transition: { duration: 0.25, ease: revealEase } }
                }
                className={`col-span-full row-span-1 ${item.colSpan} group`}
              >
                <a
                  href={item.href}
                  className="flex flex-col lg:gap-6 gap-3"
                >
                  <div className="overflow-hidden rounded-[10px]">
                    <div className="relative h-[180px] lg:h-[396px] overflow-hidden">
                      {item.isVideo ? (
                        prefersReducedMotion ? (
                          <img
                            src={
                              item.poster ||
                              "https://source.unsplash.com/1200x800/?video,production&sig=99"
                            }
                            alt={item.title}
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <>
                            <video
                              autoPlay
                              playsInline
                              muted
                              loop
                              preload="metadata"
                              poster={
                                item.poster ||
                                "https://source.unsplash.com/1200x800/?video,production&sig=99"
                              }
                              className="absolute inset-0 w-full h-full object-cover hidden md:block"
                              src={item.videoSrc || item.image}
                            />
                            <img
                              src={
                                item.poster ||
                                "https://source.unsplash.com/1200x800/?video,production&sig=99"
                              }
                              alt={item.title}
                              className="absolute inset-0 w-full h-full object-cover md:hidden transform transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                              decoding="async"
                            />
                          </>
                        )
                      ) : (
                        <img
                          src={getResponsiveImgSrc(item.image, 960)}
                          srcSet={
                            getResponsiveImgSrcSet(item.image, [480, 768, 960, 1280, 1600]) ||
                            undefined
                          }
                          sizes={getWorkItemSizes(item.colSpan)}
                          alt={item.title}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                      {item.isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          {/* <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transform transition-transform group-hover:scale-110">
                            <Play className="w-6 h-6 text-brand-blue-900 ml-1" />
                          </div> */}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex max-w-full flex-col gap-1 lg:gap-2 select-none justify-start items-start">
                    <div className="flex max-w-full flex-row gap-3 items-center">
                      <h5 className="font-heading box-border tracking-tight text-2xl md:text-3xl lg:text-4xl font-bold text-brand-blue-900">
                        {item.title}
                      </h5>
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-brand-blue-900" />
                    </div>
                    <p className="text-sm md:text-sm lg:text-base break-words sm:truncate w-full text-brand-blue-700">
                      {item.description}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* {renderDeferredSections ? (
              <Suspense fallback={null}>
                <CreativeAssetsSectionLazy />
              </Suspense>
            ) : null} */}

      {/* Accelerate Business Section */}
      {/* <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-h2 leading-tight-13 font-bold text-brand-blue-900">
                <span className="font-semibold uppercase tracking-wide text-brand-green">
                  Accelerate
                </span>{" "}
                your business with us
              </h2>

              <p className="text-xl md:text-2xl text-brand-blue-700 font-medium">
                Learn more about our range of our services.
              </p>

              <p className="text-base md:text-lg text-brand-blue-700 leading-relaxed">
                Whether you need transformational{" "}
                <span className="font-semibold text-brand-green">
                  brand
                </span>{" "}
                <span className="font-semibold text-brand-green">
                  strategy,
                </span>{" "}
                <span className="font-semibold text-brand-green">
                  communications,
                </span>{" "}
                <span className="font-semibold text-brand-green">
                  digital
                </span>{" "}
                <span className="font-semibold text-brand-green">
                  experiences
                </span>{" "}
                or more valuable relationships with your customers — we are
                ready to take your brief.
              </p>

              <div className="pt-4">
                <a href="/services">
                  <Button
                    variant="cta"
                    size="lg"
                    className="text-base md:text-lg px-6 md:px-8 w-full sm:w-auto bg-brand-blue-900 hover:bg-brand-blue-800 text-white"
                  >
                    See All Services
                  </Button>
                </a>
              </div>
            </motion.div>

            
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

              
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <button
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-brand-blue-900 text-white shadow-lg flex items-center justify-center hover:bg-brand-blue-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-brand-blue-900 text-white shadow-lg flex items-center justify-center hover:bg-brand-blue-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Projects Grid */}
      {/* <section className="py-20 bg-brand-beige-100">
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
                  
                  <div className="relative h-64 overflow-hidden bg-brand-gray-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900 via-brand-blue-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    
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

         
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-brand-gray-600 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}

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
      </section> */}

      {/* Stats Section */}
      {/* <section className="py-16 md:py-20 lg:py-24 bg-brand-blue-900">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
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
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-xs sm:text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonial Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={prefersReducedMotion ? false : revealUpInitial}
            whileInView={prefersReducedMotion ? undefined : revealUpWhileInView}
            viewport={prefersReducedMotion ? undefined : revealViewport}
            transition={prefersReducedMotion ? undefined : revealTransition}
            className="text-center mb-10 md:mb-12"
          >
            <span className="text-xs md:text-xs lg:text-sm tracking-widest font-semibold uppercase text-brand-blue-800">TESTIMONIALS</span>
            <h3 className="font-heading mt-3 text-h2 leading-tight-13 font-bold text-brand-blue-900">
              STRAIGHT FROM THE FEED
            </h3>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden" ref={tEmblaRef}>
              <div className="flex">
                {testimonials.map((t, idx) => (
                  <div key={idx} className="flex-[0_0_100%] min-w-0">
                    <div className="mx-auto max-w-3xl text-center px-2 sm:px-4">
                      <div className="text-5xl md:text-6xl text-brand-green mb-6">"</div>
                      <blockquote className="text-xl md:text-2xl text-brand-blue-900 font-light leading-relaxed">
                        {t.quote}
                      </blockquote>
                      <div className="mt-6 text-brand-blue-700">
                        <div className="font-semibold text-brand-blue-900">{t.name}</div>
                        <div className="text-sm">{t.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Nav */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
              <button
                onClick={tScrollPrev}
                disabled={!tCanPrev}
                className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-brand-blue-900/20 text-brand-blue-900 shadow-sm flex items-center justify-center hover:bg-brand-blue-900 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={tScrollNext}
                disabled={!tCanNext}
                className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-brand-blue-900/20 text-brand-blue-900 shadow-sm flex items-center justify-center hover:bg-brand-blue-900 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 border border-brand-green/30 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,195,74,0.1),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Ready to Create Your{" "}
                <span className="text-brand-green">Success Story?</span>
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help your brand achieve similar results
                and make an impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/917998596948"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="cta"
                    size="lg"
                    className="text-base md:text-lg px-6 md:px-8 w-full sm:w-auto"
                  >
                    Start Your Project
                  </Button>
                </a>
                <a href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-brand-blue-900 text-base md:text-lg px-6 md:px-8 w-full sm:w-auto"
                  >
                    Get in Touch
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      <Footer />
      </main>
    </>
  );
}
