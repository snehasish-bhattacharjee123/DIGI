import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Users,
  Zap,
  Award,
  Globe,
  TrendingUp,
  Clock,
  Shield,
  Target,
  Sparkles,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { LiquidButton } from "@/components/LiquidButton";
import { Button } from "@/components/ui/button";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { GlobalTeamSection } from "@/components/GlobalTeamSection";
import { CTASection } from "@/components/CTASection";
import { CreativePowerSection } from "@/components/CreativePowerSection";
import { OurPeopleSection } from "@/components/OurPeopleSection";
import { TeamSection } from "@/components/TeamSection";
import { NewEraSection } from "@/components/NewEraSection";
import { FreshAdsFuelSection } from "@/components/FreshAdsFuelSection";
// import { SectionSkeleton } from "@/components/SectionSkeleton";
import { CreativeServicesSection } from "@/components/CreativeServicesSection";
import { CreativeShowcaseSection } from "@/components/CreativeShowcaseSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function WhyUs() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<
    { src: string; title: string } | null
  >(null);

  const [galleryEmblaRef, galleryEmblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [gallerySelectedIndex, setGallerySelectedIndex] = useState(0);

  const benefits = [
    {
      icon: Users,
      title: "World-Class Creative Team",
      description:
        "Access elite designers, strategists, and developers handpicked from leading agencies like Google, Nike, and Apple—without the overhead of full-time hires.",
      color: "text-brand-green",
    },
    {
      icon: Zap,
      title: "12-Hour Rush Delivery",
      description:
        "From brief to final delivery in as little as 12 hours. Our AI-enhanced workflows and global team ensure your urgent projects never miss a deadline.",
      color: "text-brand-orange",
    },
    {
      icon: Award,
      title: "Award-Winning Excellence",
      description:
        "Our portfolio has earned multiple industry awards including Webby, CSS Design Awards, and recognition from Awwwards for creative innovation.",
      color: "text-yellow-500",
    },
    {
      icon: Globe,
      title: "Global Reach, Local Expertise",
      description:
        "We've successfully delivered 70,000+ projects across 30+ countries, understanding diverse markets, cultural nuances, and regional preferences.",
      color: "text-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Measurable ROI: 94% Average",
      description:
        "Our data-driven approach has helped clients achieve an average 94% three-year ROI, with engagement increases up to 300% and significant conversion boosts.",
      color: "text-green-600",
    },
    {
      icon: Clock,
      title: "24/7 Dedicated Support",
      description:
        "Your dedicated project manager and support team are available around the clock to keep your projects on track and answer questions instantly.",
      color: "text-purple-500",
    },
    {
      icon: Shield,
      title: "Unlimited Revisions",
      description:
        "We stand behind our work with unlimited revisions and a satisfaction guarantee. We iterate until you're completely thrilled with the results.",
      color: "text-brand-blue-600",
    },
    {
      icon: Target,
      title: "Strategy-First Approach",
      description:
        "Every creative decision is backed by data, user research, and strategic thinking—focused relentlessly on achieving your business objectives.",
      color: "text-red-500",
    },
  ];

  const galleryItems = [
    { src: "https://www.promotedge.com/wp-content/uploads/2024/06/img-2.jpeg", title: "img-2" },
    { src: "https://www.promotedge.com/wp-content/uploads/2024/06/promotedge-team.png", title: "promotedge-team" },
    { src: "https://www.promotedge.com/wp-content/uploads/2024/06/promotedge-gallery-8.webp", title: "promotedge-gallery-8" },
    { src: "https://www.promotedge.com/wp-content/uploads/2024/06/promotedge-gallery-6.webp", title: "promotedge-gallery-6" },
    { src: "https://www.promotedge.com/wp-content/uploads/2024/06/promotedge-gallery-16.webp", title: "promotedge-gallery-16" },
    { src: "https://www.promotedge.com/wp-content/uploads/2024/06/promotedge-gallery-18.webp", title: "promotedge-gallery-18" },
    { src: "https://www.promotedge.com/wp-content/uploads/2024/06/promotedge-gallery-41.webp", title: "promotedge-gallery-41" },
    { src: "https://www.promotedge.com/wp-content/uploads/2024/06/promotedge-gallery-1.webp", title: "promotedge-gallery-1" },
    { src: "https://www.promotedge.com/wp-content/uploads/2024/06/promotedge-gallery-2.webp", title: "promotedge-gallery-2" },
    { src: "https://www.promotedge.com/wp-content/uploads/2024/06/promotedge-gallery-12.webp", title: "promotedge-gallery-12" },
    { src: "https://www.promotedge.com/wp-content/uploads/2024/06/promotedge-gallery-11.webp", title: "promotedge-gallery-11" },
    { src: "https://www.promotedge.com/wp-content/uploads/2024/06/promotedge-gallery-4.webp", title: "promotedge-gallery-4" },
  ];

  const onGallerySelect = useCallback(() => {
    if (!galleryEmblaApi) return;
    setGallerySelectedIndex(galleryEmblaApi.selectedScrollSnap());
  }, [galleryEmblaApi]);

  useEffect(() => {
    if (!galleryEmblaApi) return;
    onGallerySelect();
    galleryEmblaApi.on("select", onGallerySelect);
    galleryEmblaApi.on("reInit", onGallerySelect);
    return () => {
      galleryEmblaApi.off("select", onGallerySelect);
      galleryEmblaApi.off("reInit", onGallerySelect);
    };
  }, [galleryEmblaApi, onGallerySelect]);

  const galleryPrev = useCallback(() => galleryEmblaApi?.scrollPrev(), [
    galleryEmblaApi,
  ]);
  const galleryNext = useCallback(() => galleryEmblaApi?.scrollNext(), [
    galleryEmblaApi,
  ]);

  const gallerySlideStyles = useMemo(() => {
    const total = galleryItems.length;
    return galleryItems.map((_, index) => {
      let diff = index - gallerySelectedIndex;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;

      const abs = Math.abs(diff);
      const rotateY = diff * -50;
      const translateZ = -abs * 120;
      const scale = abs === 0 ? 1 : 0.92;
      const zIndex = 10 - abs;
      const opacity = abs > 4 ? 0 : Math.max(0.2, 1 - abs * 0.18);

      return {
        transform: `translate3d(0px, 0px, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
        zIndex,
        opacity,
      } as const;
    });
  }, [galleryItems, gallerySelectedIndex]);

  const stats = [
    { number: "500+", label: "Global Brands Trust Us", icon: Sparkles },
    { number: "70k+", label: "Projects Delivered", icon: Award },
    { number: "94%", label: "Average 3-Year ROI", icon: TrendingUp },
    { number: "30+", label: "Countries Served", icon: Globe },
  ];

  const testimonials = [
    {
      quote:
        "Digiteller Creative didn't just redesign our brand—they transformed how our customers perceive us. The attention to detail, strategic thinking, and creative vision exceeded every expectation. Our conversion rate increased 47% in the first quarter.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp International",
      company: "Enterprise SaaS",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      quote:
        "Working with this team was seamless from day one. They understood our vision instantly and brought it to life better than we imagined. The collaborative process, rapid turnarounds, and quality exceeded our previous agency by miles.",
      author: "Michael Chen",
      role: "Marketing Director, InnovateLab",
      company: "HealthTech Startup",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=13",
    },
    {
      quote:
        "The ROI we've seen from their social media campaigns is incredible. Our engagement jumped 300% in just 3 months, and we're now seeing consistent lead generation. Best creative investment we've ever made.",
      author: "Emma Williams",
      role: "Founder, FitLife Wellness",
      company: "Consumer Brand",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=9",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Smart intake",
      description:
        "Kick off with a clear brief, fast alignment, and the right creative team matched to your goals.",
    },
    {
      number: "02",
      title: "On-brand production",
      description:
        "Build with toolkits, systems, and creatives trained on your brand—so every deliverable stays consistent.",
    },
    {
      number: "03",
      title: "Create, iterate, optimize",
      description:
        "Move from concepts to polished assets with tight feedback loops and rapid iterations.",
    },
    {
      number: "04",
      title: "QA & delivery",
      description:
        "Get final outputs that meet spec, across formats and channels—ready to launch, test, and scale.",
    },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Why Choose Digiteller Creative | Award-Winning Creative Agency
        </title>
        <meta
          name="description"
          content="Discover why 500+ global brands trust Digiteller Creative for world-class design, 12-hour turnarounds, and 94% average ROI. Elite creative team, unlimited revisions, 24/7 support."
        />
        <meta
          name="keywords"
          content="creative agency, design services, award-winning design, fast turnaround, global creative team, ROI-driven design"
        />
        <link rel="canonical" href="https://digiteller.com/why-us" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Why Choose Digiteller Creative | Award-Winning Creative Agency"
        />
        <meta
          property="og:description"
          content="World-class creative team, 12-hour rush delivery, 94% average ROI. See why 500+ brands choose us."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digiteller.com/why-us" />
      </Helmet>

      <Navigation />

      <main
        id="main-content"
        role="main"
        className="min-h-screen bg-white wst-fonts overflow-x-hidden"
      >

      <ErrorBoundary>  
              <CreativeServicesSection />
          </ErrorBoundary>

        

        {/* <ErrorBoundary>
          <OurPeopleSection />
        </ErrorBoundary> */}

        

        {/* ========================================= */}

        {/* ========================================= */}
        {/* STATS SECTION */}
        {/* ========================================= */}
        {/* <section className="py-16 md:py-20 lg:py-24 bg-white border-b">
          <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 text-center">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center gap-3"
                >
                  <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-brand-green" />
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue-900">
                    {stat.number}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-brand-blue-900/70">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* ========================================= */}
        {/* BENEFITS GRID SECTION */}
        {/* ========================================= */}
        {/* <section className="py-20 md:py-28 lg:py-40 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-green mb-3 block">
                What Sets Us Apart
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-brand-blue-900">
                Eight Reasons We're Your{" "}
                <span className="text-brand-green">
                  Perfect Creative Partner
                </span>
              </h2>
              <p className="text-base md:text-lg text-brand-blue-900/70">
                From rapid turnarounds to unlimited revisions, we've built our
                agency around what matters most to ambitious brands.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {benefits.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.6 }}
                  className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-brand-green/30 hover:-translate-y-1"
                >
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 ${item.color} bg-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-brand-blue-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-blue-900/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* ========================================= */}
        {/* OUR PROCESS SECTION */}
        {/* ========================================= */}
        <section
          className="py-20 md:py-28 lg:py-40 bg-brand-blue-900 text-white"
          data-mood="brand-dark"
        >
          <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="font-din text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-brand-green mb-3 block">
                Our Process
              </span>
              <h2 className="font-heading text-h2 leading-tight-13 font-bold mb-4 md:mb-6 text-white">
                How We Deliver{" "}
                <span className="text-brand-green">Exceptional Results</span>
              </h2>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                A proven, collaborative process designed for speed, quality, and
                scale—without sacrificing craft.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="relative"
                >
                  <div className="font-heading text-6xl md:text-7xl font-bold text-brand-green/20 mb-4 leading-none">
                    {step.number}
                  </div>
                  <h3 className="font-heading text-h4 leading-tight-14 font-bold mb-2 md:mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                  {i < processSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute -right-4 top-12 text-brand-green/30 w-8 h-8" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Team Section */}
        <ErrorBoundary>
          <TeamSection />
        </ErrorBoundary>

        {/* How We Work Section */}
        <ErrorBoundary>
          <HowWeWorkSection />
        </ErrorBoundary>


              
        <ErrorBoundary>
          <GlobalTeamSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <CreativeShowcaseSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <section className="commonSec careerGalSec">
            <div className="container">
              <span className="careerGalKicker !text-brand-blue-900/70">
                Inside Digiteller
              </span>
              <h2 className="mainH !text-brand-blue-900">Digiteller Gallery</h2>
              <p className="careerGalSub !text-brand-blue-900/70">
                A snapshot of our team, culture, and the moments that shape our
                work.
              </p>
            </div>
            <div className="careerGalSecWrap">
              <Dialog
                open={galleryOpen}
                onOpenChange={(open) => {
                  setGalleryOpen(open);
                  if (!open) setSelectedGalleryItem(null);
                }}
              >
                <div
                  className="swiper gallerySwiper swiper-coverflow swiper-3d"
                  ref={galleryEmblaRef}
                >
                  <div className="swiper-wrapper" aria-live="polite">
                    {galleryItems.map((item, idx) => (
                      <div
                        key={item.src}
                        className={
                          idx === gallerySelectedIndex
                            ? "swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
                            : "swiper-slide"
                        }
                        role="group"
                        aria-label={`${idx + 1} / ${galleryItems.length}`}
                        style={gallerySlideStyles[idx]}
                      >
                        <button
                          type="button"
                          className="careerGalSlideBtn"
                          onClick={() => {
                            setSelectedGalleryItem(item);
                            setGalleryOpen(true);
                          }}
                        >
                          <figure className="carGallFig">
                            <img
                              width={400}
                              height={500}
                              src={item.src}
                              alt={item.title}
                              loading="lazy"
                              decoding="async"
                            />
                          </figure>
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="cube-button-next1 arrow"
                    aria-label="Next slide"
                    onClick={galleryNext}
                  />
                  <button
                    type="button"
                    className="cube-button-prev1 arrow"
                    aria-label="Previous slide"
                    onClick={galleryPrev}
                  />
                </div>

                <DialogContent className="max-w-5xl bg-transparent border-0 p-0 shadow-none text-white">
                  {selectedGalleryItem && (
                    <div className="w-full">
                      <img
                        src={selectedGalleryItem.src}
                        alt={selectedGalleryItem.title}
                        className="w-full h-auto rounded-xl"
                      />
                      <div className="mt-3 text-center text-sm text-white/80">
                        {selectedGalleryItem.title}
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </section>
        </ErrorBoundary>

        {/* <ErrorBoundary>
          <section
            id="gallerySec"
            className="commonSec content-row fadeout-element gallerySec bg-white py-16 md:py-20 lg:py-28"
          >
            <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <h2 className="galleryH font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-blue-900 mb-8 md:mb-12">
                Moments That <br className="hidden sm:block" /> Define Us
              </h2>

              <Dialog
                open={galleryOpen}
                onOpenChange={(open) => {
                  setGalleryOpen(open);
                  if (!open) setSelectedGalleryItem(null);
                }}
              >
                <div className="imgHolderWrap grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {galleryItems.map((item, idx) => (
                    <button
                      key={item.src}
                      type="button"
                      className={`galleryImg galleryImg_${idx + 1} group relative overflow-hidden rounded-2xl bg-black/5 aspect-[4/3] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white`}
                      onClick={() => {
                        setSelectedGalleryItem(item);
                        setGalleryOpen(true);
                      }}
                    >
                      <figure className="h-full w-full">
                        <img
                          width={1024}
                          height={768}
                          src={item.src}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </figure>
                      <span className="galleryTitle absolute left-3 bottom-3 text-[10px] sm:text-xs font-din uppercase tracking-widest text-white bg-black/55 px-2 py-1 rounded-md backdrop-blur-sm">
                        {item.title}
                      </span>
                    </button>
                  ))}
                </div>

                <DialogContent className="max-w-5xl bg-transparent border-0 p-0 shadow-none text-white">
                  {selectedGalleryItem && (
                    <div className="w-full">
                      <img
                        src={selectedGalleryItem.src}
                        alt={selectedGalleryItem.title}
                        className="w-full h-auto rounded-xl"
                      />
                      <div className="mt-3 text-center text-sm text-white/80">
                        {selectedGalleryItem.title}
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </section>
        </ErrorBoundary> */}



        

        {/* ========================================= */}
        {/* ADDITIONAL SECTIONS */}
        {/* ========================================= */}

        

        

        {/* CTA Section */}
        {/* <ErrorBoundary>
          <CTASection />
        </ErrorBoundary> */}

        {/* <ErrorBoundary>
          <NewEraSection />
        </ErrorBoundary> */}

        {false && (
          <>
            <ErrorBoundary>
              <FreshAdsFuelSection />
            </ErrorBoundary>
          </>
        )}

        <ErrorBoundary>
          <CreativePowerSection />
        </ErrorBoundary>
      </main>

      <Footer />
    </>
  );
}
