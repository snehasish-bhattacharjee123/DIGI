// import { lazy, Suspense } from "react";
// import { Helmet } from "react-helmet-async";
// import { ErrorBoundary } from "@/components/ErrorBoundary";

// // Above-the-fold components (eager load for immediate render)
// import { Navigation } from "@/components/Navigation";
// import { Hero } from "@/components/Hero";
// // import { StatsSection } from "@/components/StatsSection";
// import StatsSection from "@/components/StatsSection";

// // Below-the-fold components (lazy load for performance)
// const ClientLogos = lazy(() =>
//   import("@/components/ClientLogos").then((module) => ({
//     default: module.ClientLogos,
//   }))
// );

// const Services = lazy(() =>
//   import("@/components/Services").then((module) => ({
//     default: module.Services,
//   }))
// );

// const PortfolioGrid = lazy(() =>
//   import("@/components/PortfolioGrid").then((module) => ({
//     default: module.PortfolioGrid,
//   }))
// );

// const HowWeWorkSection = lazy(() =>
//   import("@/components/HowWeWorkSection").then((module) => ({
//     default: module.HowWeWorkSection,
//   }))
// );

// const TechEnabledSection = lazy(() =>
//   import("@/components/TechEnabledSection").then((module) => ({
//     default: module.TechEnabledSection,
//   }))
// );

// const Testimonials = lazy(() =>
//   import("@/components/Testimonials").then((module) => ({
//     default: module.Testimonials,
//   }))
// );

// const GlobalTeamSection = lazy(() =>
//   import("@/components/GlobalTeamSection").then((module) => ({
//     default: module.GlobalTeamSection,
//   }))
// );

// const FaqSection = lazy(() =>
//   import("@/components/FaqSection").then((module) => ({
//     default: module.FaqSection,
//   }))
// );

// const CTASection = lazy(() =>
//   import("@/components/CTASection").then((module) => ({
//     default: module.CTASection,
//   }))
// );

// const Footer = lazy(() =>
//   import("@/components/Footer").then((module) => ({
//     default: module.Footer,
//   }))
// );

// // Loading skeleton components
// function SectionSkeleton({ height = "md" }: { height?: "sm" | "md" | "lg" }) {
//   const heights = {
//     sm: "h-64",
//     md: "h-96",
//     lg: "h-[600px]",
//   };

//   return (
//     <div
//       className={`w-full ${heights[height]} bg-muted/50 animate-pulse`}
//       aria-label="Loading..."
//     />
//   );
// }

// function ErrorFallback({ error }: { error?: string }) {
//   return (
//     <div className="py-16 md:py-24 text-center px-4">
//       <div className="max-w-md mx-auto">
//         <div className="mb-4 text-destructive">
//           <svg
//             className="w-12 h-12 mx-auto"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//         </div>
//         <p className="text-destructive font-semibold mb-2">
//           Oops! Something went wrong
//         </p>
//         <p className="text-muted-foreground text-sm">
//           {error || "Please refresh the page to try again."}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <>
//       {/* SEO & Meta Tags */}
//       <Helmet>
//         <title>
//           Digiteller Creative - Premium Creative Services | Design, Branding &
//           Marketing
//         </title>
//         <meta
//           name="description"
//           content="Transform your brand with world-class creative services. 500+ companies trust Digiteller Creative for design, branding, and digital marketing at scale."
//         />
//         <meta
//           name="keywords"
//           content="creative agency, design services, branding, digital marketing, UI/UX design, graphic design"
//         />

//         {/* Open Graph / Facebook */}
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://digiteller.com/" />
//         <meta
//           property="og:title"
//           content="Digiteller Creative - Premium Creative Services"
//         />
//         <meta
//           property="og:description"
//           content="Transform your brand with world-class creative services at scale."
//         />
//         <meta
//           property="og:image"
//           content="https://digiteller.com/og-image.jpg"
//         />

//         {/* Twitter */}
//         <meta property="twitter:card" content="summary_large_image" />
//         <meta property="twitter:url" content="https://digiteller.com/" />
//         <meta
//           property="twitter:title"
//           content="Digiteller Creative - Premium Creative Services"
//         />
//         <meta
//           property="twitter:description"
//           content="Transform your brand with world-class creative services at scale."
//         />
//         <meta
//           property="twitter:image"
//           content="https://digiteller.com/og-image.jpg"
//         />

//         {/* Canonical URL */}
//         <link rel="canonical" href="https://digiteller.com/" />

//         {/* Structured Data (JSON-LD) */}
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Organization",
//             name: "Digiteller Creative",
//             description:
//               "Premium creative services agency specializing in design, branding, and digital marketing.",
//             url: "https://digiteller.com",
//             logo: "https://digiteller.com/logo.png",
//             sameAs: [
//               "https://twitter.com/digiteller",
//               "https://linkedin.com/company/digiteller",
//               "https://instagram.com/digiteller",
//             ],
//             contactPoint: {
//               "@type": "ContactPoint",
//               contactType: "Sales",
//               email: "hello@digiteller.com",
//             },
//           })}
//         </script>
//       </Helmet>

//       <div className="min-h-screen bg-background">
//         {/* Skip to main content link for accessibility */}
//         <a
//           href="#main-content"
//           className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
//         >
//           Skip to main content
//         </a>

//         {/* Navigation - Always visible, not lazy loaded */}
//         <Navigation />

//         {/* Main content area - Semantic HTML for SEO and accessibility */}
//         <main id="main-content" role="main">
//           {/* Above-the-fold content - No lazy loading for immediate render */}
//           <Hero />
//           <StatsSection />

//           {/* Client Logos - Social proof early in the journey */}
//           <ErrorBoundary fallback={<ErrorFallback />}>
//             <Suspense fallback={<SectionSkeleton height="sm" />}>
//               <ClientLogos />
//             </Suspense>
//           </ErrorBoundary>

//           {/* Services Section - What we offer */}
//           <ErrorBoundary fallback={<ErrorFallback />}>
//             <Suspense fallback={<SectionSkeleton height="lg" />}>
//               <Services />
//             </Suspense>
//           </ErrorBoundary>

//           {/* Portfolio Grid - Show our work */}
//           <ErrorBoundary fallback={<ErrorFallback />}>
//             <Suspense fallback={<SectionSkeleton height="lg" />}>
//               <PortfolioGrid />
//             </Suspense>
//           </ErrorBoundary>

//           {/* How We Work - Process explanation */}
//           <ErrorBoundary fallback={<ErrorFallback />}>
//             <Suspense fallback={<SectionSkeleton height="lg" />}>
//               <HowWeWorkSection />
//             </Suspense>
//           </ErrorBoundary>

//           {/* Tech Enabled - Unique advantages */}
//           <ErrorBoundary fallback={<ErrorFallback />}>
//             <Suspense fallback={<SectionSkeleton height="md" />}>
//               <TechEnabledSection />
//             </Suspense>
//           </ErrorBoundary>

//           {/* Testimonials - Social proof */}
//           <ErrorBoundary fallback={<ErrorFallback />}>
//             <Suspense fallback={<SectionSkeleton height="lg" />}>
//               <Testimonials />
//             </Suspense>
//           </ErrorBoundary>

//           {/* Global Team - Team & capabilities */}
//           <ErrorBoundary fallback={<ErrorFallback />}>
//             <Suspense fallback={<SectionSkeleton height="md" />}>
//               <GlobalTeamSection />
//             </Suspense>
//           </ErrorBoundary>

//           {/* FAQ Section - Address objections */}
//           <ErrorBoundary fallback={<ErrorFallback />}>
//             <Suspense fallback={<SectionSkeleton height="lg" />}>
//               <FaqSection />
//             </Suspense>
//           </ErrorBoundary>

//           {/* CTA Section - Clear next step */}
//           <ErrorBoundary fallback={<ErrorFallback />}>
//             <Suspense fallback={<SectionSkeleton height="sm" />}>
//               <CTASection />
//             </Suspense>
//           </ErrorBoundary>
//         </main>

//         {/* Footer - Can be lazy loaded as it's at the bottom */}
//         <ErrorBoundary fallback={<ErrorFallback />}>
//           <Suspense
//             fallback={
//               <div
//                 className="h-96 bg-muted/30 animate-pulse"
//                 aria-hidden="true"
//               />
//             }
//           >
//             <Footer />
//           </Suspense>
//         </ErrorBoundary>
//       </div>
//     </>
//   );
// }
