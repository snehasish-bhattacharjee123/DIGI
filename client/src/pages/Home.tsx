import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { demoSlides } from "@/data/demoSlides";

// ============================================================================
// EAGER LOAD: Above-the-fold components (visible immediately)
// ============================================================================
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";

// ============================================================================
// LAZY LOAD: Below-the-fold components (load when needed)
// ============================================================================
const CreativeServicesSection = lazy(() =>
  import("@/components/MadeToFlexSection").then((module) => ({
    default: (module as any).CreativeServicesSection ?? (module as any).default,
  }))
);

const SuccessStoriesSection = lazy(() =>
  import("@/components/SuccessStoriesSection").then((module) => ({
    default: (module as any).SuccessStoriesSection ?? (module as any).default,
  }))
);

const OurWorkSection = lazy(() =>
  import("@/components/OurWorkSection").then((module) => ({
    default: (module as any).OurWorkSection ?? (module as any).default,
  }))
);

const PortfolioGrid = lazy(() =>
  import("@/components/PortfolioGrid").then((module) => ({
    default: (module as any).PortfolioGrid ?? (module as any).default,
  }))
);

const NewEraSection = lazy(() =>
  import("@/components/NewEraSection").then((module) => ({
    default: (module as any).NewEraSection ?? (module as any).default,
  }))
);

const MadeToFlexSection = lazy(() =>
  import("@/components/MadeToFlexSection").then((module) => ({
    default: (module as any).MadeToFlexSection ?? (module as any).default,
  }))
);

const WorkWithTheBestSection = lazy(() =>
  import("@/components/WorkWithTheBestSection").then((module) => ({
    default: (module as any).WorkWithTheBestSection ?? (module as any).default,
  }))
);

const TechEnabledSection = lazy(() =>
  import("@/components/TechEnabledSection").then((module) => ({
    default: (module as any).TechEnabledSection ?? (module as any).default,
  }))
);

const QuoteSection = lazy(() =>
  import("@/components/QuoteSection").then((module) => ({
    default: (module as any).QuoteSection ?? (module as any).default,
  }))
);

const Services = lazy(() =>
  import("@/components/Services").then((module) => ({
    default: (module as any).Services ?? (module as any).default,
  }))
);

const CreativePowerSection = lazy(() =>
  import("@/components/CreativePowerSection").then((module) => ({
    default: (module as any).CreativePowerSection ?? (module as any).default,
  }))
);

const ClientLogos = lazy(() =>
  import("@/components/ClientLogos").then((module) => ({
    default: (module as any).ClientLogos ?? (module as any).default,
  }))
);

const Testimonials = lazy(() =>
  import("@/components/Testimonials").then((module) => ({
    default: (module as any).Testimonials ?? (module as any).default,
  }))
);

const CTASection = lazy(() =>
  import("@/components/CTASection").then((module) => ({
    default: (module as any).CTASection ?? (module as any).default,
  }))
);

const FaqSection = lazy(() =>
  import("@/components/FaqSection").then((module) => ({
    default: (module as any).FaqSection ?? (module as any).default,
  }))
);

const ServicesSection = lazy(() =>
  import("@/components/ServicesSection").then((module) => ({
    default: (module as any).ServicesSection ?? (module as any).default,
  }))
);

const HowWeWorkSection = lazy(() =>
  import("@/components/HowWeWorkSection").then((module) => ({
    default: (module as any).HowWeWorkSection ?? (module as any).default,
  }))
);

const OurPeopleSection = lazy(() =>
  import("@/components/OurPeopleSection").then((module) => ({
    default: (module as any).OurPeopleSection ?? (module as any).default,
  }))
);

const ScrollSections = lazy(() => import("@/components/ScrollSections"));

const VersatileDesignsSection = lazy(() =>
  import("@/components/VersatileDesignsSection").then((module) => ({
    default: (module as any).VersatileDesignsSection ?? (module as any).default,
  }))
);

const TeamSection = lazy(() =>
  import("@/components/TeamSection").then((module) => ({
    default: (module as any).TeamSection ?? (module as any).default,
  }))
);

const GlobalTeamSection = lazy(() =>
  import("@/components/GlobalTeamSection").then((module) => ({
    default: (module as any).GlobalTeamSection ?? (module as any).default,
  }))
);

const WorkCarouselSection = lazy(() =>
  import("@/components/WorkCarouselSection").then((module) => ({
    default: (module as any).WorkCarouselSection ?? (module as any).default,
  }))
);

const Footer = lazy(() =>
  import("@/components/Footer").then((module) => ({
    default: (module as any).Footer ?? (module as any).default,
  }))
);

// ============================================================================
// LOADING SKELETON COMPONENT
// ============================================================================
function SectionSkeleton({
  height = "md",
}: {
  height?: "xs" | "sm" | "md" | "lg" | "xl";
}) {
  const heights = {
    xs: "h-48",
    sm: "h-64",
    md: "h-96",
    lg: "h-[600px]",
    xl: "h-[800px]",
  };

  return (
    <div
      className={`w-full ${heights[height]} bg-muted/30 animate-pulse`}
      role="status"
      aria-label="Loading content..."
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

// ============================================================================
// HOME PAGE COMPONENT
// ============================================================================
export default function Home() {
  // Structured data for SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Digiteller Creative",
    description:
      "Premium creative services agency specializing in design, branding, and digital marketing.",
    url: "https://digiteller.com",
    logo: "https://digiteller.com/logo.png",
    image: "https://digiteller.com/og-image.jpg",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    sameAs: [
      "https://twitter.com/digiteller",
      "https://linkedin.com/company/digiteller",
      "https://instagram.com/digiteller",
      "https://facebook.com/digiteller",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "hello@digiteller.com",
      availableLanguage: ["English"],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
    },
  };

  return (
    <>
      {/* ================================================================ */}
      {/* SEO METADATA */}
      {/* ================================================================ */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Digiteller Creative - Transform Your Brand | Premium Creative Services
        </title>
        <meta
          name="title"
          content="Digiteller Creative - Transform Your Brand | Premium Creative Services"
        />
        <meta
          name="description"
          content="World-class creative services for startups and enterprises. 500+ companies trust our design, branding, and digital marketing expertise. 94% ROI guaranteed."
        />
        <meta
          name="keywords"
          content="creative agency, design services, branding agency, digital marketing, UI/UX design, graphic design, web development, creative solutions"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digiteller.com/" />
        <meta
          property="og:title"
          content="Digiteller Creative - Premium Creative Services"
        />
        <meta
          property="og:description"
          content="Transform your brand with world-class creative services. 500+ companies trust us for design, branding, and digital marketing excellence."
        />
        <meta
          property="og:image"
          content="https://digiteller.com/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Digiteller Creative" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://digiteller.com/" />
        <meta
          property="twitter:title"
          content="Digiteller Creative - Premium Creative Services"
        />
        <meta
          property="twitter:description"
          content="Transform your brand with world-class creative services at scale."
        />
        <meta
          property="twitter:image"
          content="https://digiteller.com/og-image.jpg"
        />
        <meta property="twitter:site" content="@digiteller" />
        <meta property="twitter:creator" content="@digiteller" />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Digiteller Creative" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://digiteller.com/" />

        {/* Alternate Languages (if applicable) */}
        <link rel="alternate" hrefLang="en" href="https://digiteller.com/" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* ================================================================ */}
      {/* PAGE CONTENT */}
      {/* ================================================================ */}
      <div className="min-h-screen bg-background">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Skip to main content
        </a>

        {/* Navigation - Always visible, not lazy loaded */}
        <Navigation />

        {/* Main content area - Semantic HTML for SEO and accessibility */}
        <main id="main-content" role="main">
          {/* ========================================================== */}
          {/* ABOVE THE FOLD - Eager loaded for immediate render */}
          {/* ========================================================== */}
          <Hero />

          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="md" />}>
              <ClientLogos />
            </Suspense>
          </ErrorBoundary>

          {/* New Era Section */}
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="md" />}>
              <NewEraSection />
            </Suspense>
          </ErrorBoundary>

          {/* Made to Flex Section */}
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="lg" />}>
              <MadeToFlexSection />
            </Suspense>
          </ErrorBoundary>

          <StatsSection />

          {/* Success Stories Section */}
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="lg" />}>
              <SuccessStoriesSection />
            </Suspense>
          </ErrorBoundary>

          {/* Portfolio Grid - Main showcase */}
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="xl" />}>
              <PortfolioGrid />
            </Suspense>
          </ErrorBoundary>

          {/* Our Work Video Section */}
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="lg" />}>
              <OurWorkSection />
            </Suspense>
          </ErrorBoundary>

          {/* Work Carousel Section */}
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="lg" />}>
              <WorkCarouselSection />
            </Suspense>
          </ErrorBoundary>

          {/* Testimonials Section */}
          {/* <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="lg" />}>
              <Testimonials />
            </Suspense>
          </ErrorBoundary> */}

          {/* Tech Enabled Section */}
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="lg" />}>
              <TechEnabledSection />
            </Suspense>
          </ErrorBoundary>

          {/* Versatile Designs Section */}
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="lg" />}>
              <VersatileDesignsSection />
            </Suspense>
          </ErrorBoundary>

          {/* Work With The Best Section */}
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="md" />}>
              <WorkWithTheBestSection />
            </Suspense>
          </ErrorBoundary>

          {/* Team Section */}
          {/* <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="lg" />}>
              <TeamSection />
            </Suspense>
          </ErrorBoundary> */}

          {/* ========================================================== */}
          {/* BELOW THE FOLD - Lazy loaded for performance */}
          {/* ========================================================== */}

          {/* Creative Services Section */}
          {/* <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="md" />}>
              <CreativeServicesSection />
            </Suspense>
          </ErrorBoundary> */}

          {/* Our People Section */}
          {/* <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="md" />}>
              <OurPeopleSection />
            </Suspense>
          </ErrorBoundary> */}

          {/* <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="md" />}>
              <ScrollSections slides={demoSlides} />
            </Suspense>
          </ErrorBoundary> */}

          {/* Quote Section */}
          {/* <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="sm" />}>
              <QuoteSection />
            </Suspense>
          </ErrorBoundary> */}

          {/* Services Section */}
          {/* <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="lg" />}>
              <Services />
            </Suspense>
          </ErrorBoundary> */}

          {/* Creative Power Section */}
          {/* <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="md" />}>
              <CreativePowerSection />
            </Suspense>
          </ErrorBoundary> */}

          {/* CTA Section */}
          {/* <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="sm" />}>
              <CTASection />
            </Suspense>
          </ErrorBoundary> */}

          {/* ========================================================== */}
          {/* PREVIOUSLY OUTSIDE MAIN - Now properly inside */}
          {/* ========================================================== */}

          {/* FAQ Section */}
          {/* <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="xl" />}>
              <FaqSection />
            </Suspense>
          </ErrorBoundary> */}

          {/* Services Section */}
          {/* <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="lg" />}>
              <ServicesSection />
            </Suspense>
          </ErrorBoundary> */}

          {/* How We Work Section */}
          {/* <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="xl" />}>
              <HowWeWorkSection />
            </Suspense>
          </ErrorBoundary> */}

          {/* Global Team Section */}
          {/* <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="md" />}>
              <GlobalTeamSection />
            </Suspense>
          </ErrorBoundary> */}
        </main>

        {/* ========================================================== */}
        {/* FOOTER - Outside main, lazy loaded */}
        {/* ========================================================== */}
        <ErrorBoundary>
          <Suspense
            fallback={
              <div
                className="h-96 bg-muted/20 animate-pulse"
                aria-hidden="true"
              />
            }
          >
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
}
