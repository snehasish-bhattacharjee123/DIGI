# 🚀 Home Page Optimization - Complete Implementation Guide

> **Version:** 2.0  
> **Last Updated:** December 2024  
> **Estimated Time:** 2-4 weeks  
> **Difficulty:** Intermediate  

---

## 📋 Table of Contents

1. [Pre-Implementation Checklist](#pre-implementation-checklist)
2. [Phase 1: Critical Fixes (Week 1)](#phase-1-critical-fixes-week-1)
3. [Phase 2: Content Optimization (Week 2)](#phase-2-content-optimization-week-2)
4. [Phase 3: Performance (Week 3)](#phase-3-performance-week-3)
5. [Phase 4: UX Enhancements (Week 4)](#phase-4-ux-enhancements-week-4)
6. [Testing & Validation](#testing--validation)
7. [Deployment Guide](#deployment-guide)
8. [Troubleshooting](#troubleshooting)

---

## Pre-Implementation Checklist

### Before You Start

- [ ] **Backup current code**: Create a full backup of your project
- [ ] **Create feature branch**: `git checkout -b feature/home-optimization`
- [ ] **Read documentation**: Review HOME_PAGE_ANALYSIS.md
- [ ] **Setup development environment**: Ensure all dependencies are installed
- [ ] **Document current metrics**: Run Lighthouse audit and save baseline scores

### Install Required Dependencies

```bash
# Navigate to your project
cd DIGI/client

# Install React Helmet for SEO
npm install react-helmet-async

# Install types (if using TypeScript)
npm install -D @types/react-helmet-async

# Optional: Install Sentry for error tracking
npm install @sentry/react @sentry/tracing

# Verify installation
npm list react-helmet-async
```

### Setup React Helmet Provider

**File:** `client/src/main.tsx` or `client/src/App.tsx`

```tsx
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        {/* Your routes and components */}
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
```

---

## Phase 1: Critical Fixes (Week 1)

### Day 1-2: Fix Semantic HTML Structure

#### Step 1: Move Sections Inside `<main>` Tag

**Current Issue:** 5 sections are outside the `<main>` element.

**File:** `client/src/pages/Home.tsx`

**Before:**
```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Only 17 sections */}
      </main>
      <FaqSection />
      <HowWeWorkSection />
      <VersatileDesignsSection />
      <GlobalTeamSection />
      <WorkCarouselSection />
      <Footer />
    </div>
  );
}
```

**After:**
```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" role="main">
        <Hero />
        <StatsSection />
        <CreativeServicesSection />
        <SuccessStoriesSection />
        <OurWorkSection />
        <PortfolioGrid />
        <NewEraSection />
        <MadeToFlexSection />
        <WorkWithTheBestSection />
        <TechEnabledSection />
        <QuoteSection />
        <Services />
        <CreativePowerSection />
        <ClientLogos />
        <Testimonials />
        <CTASection />
        {/* ✅ Moved inside main */}
        <FaqSection />
        <HowWeWorkSection />
        <VersatileDesignsSection />
        <GlobalTeamSection />
        <WorkCarouselSection />
      </main>
      <Footer />
    </div>
  );
}
```

✅ **Checklist:**
- [ ] All content sections inside `<main>` tag
- [ ] `<main>` has `id="main-content"` attribute
- [ ] `<main>` has `role="main"` attribute
- [ ] Only `<Navigation>` and `<Footer>` outside main
- [ ] Test page structure in browser DevTools

#### Step 2: Add Skip-to-Content Link

**Why:** Improves accessibility for keyboard and screen reader users.

**File:** `client/src/pages/Home.tsx`

Add this CSS first:

**File:** `client/src/index.css` or `client/src/styles/globals.css`

```css
/* Skip to content link - Hidden until focused */
.skip-to-content {
  position: absolute;
  top: -40px;
  left: 0;
  z-index: 100;
  padding: 8px 16px;
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  text-decoration: none;
  border-radius: 0 0 4px 0;
  font-weight: 600;
  transition: top 0.3s;
}

.skip-to-content:focus {
  top: 0;
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}
```

Now add the link in Home.tsx:

```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* ✅ Skip to content link - first element */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
      <Navigation />
      <main id="main-content" role="main">
        {/* sections */}
      </main>
      <Footer />
    </div>
  );
}
```

✅ **Checklist:**
- [ ] Skip link added as first element
- [ ] CSS styles applied
- [ ] Test: Press Tab key on page load - link should appear
- [ ] Test: Click link - page should scroll to main content
- [ ] Link has proper contrast ratio (WCAG AA)

#### Step 3: Remove Unnecessary Wrapper Divs

**Current Code:**
```tsx
<div id="solutions">
  <ClientLogos />
</div>
<div id="resources">
  <Testimonials />
</div>
<div id="company">
  <CTASection />
</div>
```

**Option 1 - Keep IDs (if needed for navigation):**

Modify each component to accept an id prop:

**File:** `client/src/components/ClientLogos.tsx`

```tsx
interface ClientLogosProps {
  id?: string;
}

export function ClientLogos({ id }: ClientLogosProps) {
  return (
    <section id={id} className="py-16 bg-background">
      {/* content */}
    </section>
  );
}
```

**File:** `client/src/pages/Home.tsx`

```tsx
<ClientLogos id="solutions" />
<Testimonials id="resources" />
<CTASection id="company" />
```

**Option 2 - Remove IDs (if not used):**

```tsx
<ClientLogos />
<Testimonials />
<CTASection />
```

✅ **Checklist:**
- [ ] Wrapper divs removed
- [ ] IDs preserved if needed for navigation
- [ ] Components render correctly
- [ ] Navigation links still work (if applicable)

---

### Day 3-4: Create Error Boundary Component

#### Step 1: Create ErrorBoundary Component

**File:** `client/src/components/ErrorBoundary.tsx` (create new file)

```tsx
import { Component, ReactNode, ErrorInfo } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("❌ Error caught by ErrorBoundary:", error);
      console.error("📊 Error Info:", errorInfo);
    }

    this.setState({ errorInfo });

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // TODO: Send to error monitoring service
    // if (window.Sentry) {
    //   window.Sentry.captureException(error, { 
    //     contexts: { react: { componentStack: errorInfo.componentStack } } 
    //   });
    // }
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div
          className="py-12 md:py-20 px-4"
          role="alert"
          aria-live="assertive"
        >
          <div className="max-w-2xl mx-auto text-center">
            <AlertCircle className="w-16 h-16 mx-auto text-destructive mb-4" />
            
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Oops! Something went wrong
            </h2>
            
            <p className="text-muted-foreground mb-6">
              We encountered an unexpected error. Don't worry, our team has been
              notified.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={this.handleReset}
                className="gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </Button>

              <Button
                onClick={() => window.location.reload()}
                variant="outline"
              >
                Reload Page
              </Button>
            </div>

            {/* Show details in development */}
            {(process.env.NODE_ENV === "development" || this.props.showDetails) &&
              this.state.error && (
                <details className="mt-8 text-left">
                  <summary className="cursor-pointer text-sm font-semibold mb-4 hover:text-primary">
                    🔍 Error Details (Development Only)
                  </summary>
                  <div className="bg-muted/50 rounded-lg p-4 border">
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-destructive mb-2">
                        Error Message:
                      </h3>
                      <code className="text-xs block bg-background p-3 rounded overflow-auto">
                        {this.state.error.toString()}
                      </code>
                    </div>

                    {this.state.errorInfo && (
                      <div>
                        <h3 className="text-sm font-semibold text-destructive mb-2">
                          Component Stack:
                        </h3>
                        <pre className="text-xs bg-background p-3 rounded overflow-auto max-h-64">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                </details>
              )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

✅ **Checklist:**
- [ ] ErrorBoundary.tsx created
- [ ] Component compiles without errors
- [ ] Imports work correctly
- [ ] Button and icon components available

#### Step 2: Wrap Components with Error Boundaries

**File:** `client/src/pages/Home.tsx`

```tsx
import { ErrorBoundary } from "@/components/ErrorBoundary";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
      <Navigation />
      
      <main id="main-content" role="main">
        <Hero />
        <StatsSection />
        
        {/* Wrap each major section */}
        <ErrorBoundary>
          <CreativeServicesSection />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <SuccessStoriesSection />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <OurWorkSection />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <PortfolioGrid />
        </ErrorBoundary>
        
        {/* Continue for all sections */}
      </main>
      
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
```

#### Step 3: Test Error Boundary

Create a test component to verify it works:

```tsx
// Temporary test component
function ErrorTest() {
  const [shouldError, setShouldError] = useState(false);
  
  if (shouldError) {
    throw new Error("Test error boundary!");
  }
  
  return (
    <button onClick={() => setShouldError(true)}>
      Trigger Error
    </button>
  );
}

// In Home.tsx temporarily:
<ErrorBoundary>
  <ErrorTest />
</ErrorBoundary>
```

✅ **Checklist:**
- [ ] All major sections wrapped with ErrorBoundary
- [ ] Test error boundary works (shows fallback UI)
- [ ] Error details shown in development
- [ ] "Try Again" button resets error state
- [ ] Other sections continue working when one fails

---

### Day 5-6: Implement Lazy Loading

#### Step 1: Update Imports to Use Lazy Loading

**File:** `client/src/pages/Home.tsx`

**Before:**
```tsx
// ❌ All eager imports
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Services } from "@/components/Services";
import { ClientLogos } from "@/components/ClientLogos";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
// ... 15+ more imports
```

**After:**
```tsx
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// ✅ EAGER LOAD: Above-the-fold (visible immediately)
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";

// ✅ LAZY LOAD: Below-the-fold (load when needed)
const CreativeServicesSection = lazy(() =>
  import("@/components/MadeToFlexSection").then((module) => ({
    default: module.CreativeServicesSection,
  }))
);

const SuccessStoriesSection = lazy(() =>
  import("@/components/SuccessStoriesSection").then((module) => ({
    default: module.SuccessStoriesSection,
  }))
);

const OurWorkSection = lazy(() =>
  import("@/components/OurWorkSection").then((module) => ({
    default: module.OurWorkSection,
  }))
);

const PortfolioGrid = lazy(() =>
  import("@/components/PortfolioGrid").then((module) => ({
    default: module.PortfolioGrid,
  }))
);

const NewEraSection = lazy(() =>
  import("@/components/NewEraSection").then((module) => ({
    default: module.NewEraSection,
  }))
);

const MadeToFlexSection = lazy(() =>
  import("@/components/MadeToFlexSection").then((module) => ({
    default: module.MadeToFlexSection,
  }))
);

const WorkWithTheBestSection = lazy(() =>
  import("@/components/WorkWithTheBestSection").then((module) => ({
    default: module.WorkWithTheBestSection,
  }))
);

const TechEnabledSection = lazy(() =>
  import("@/components/TechEnabledSection").then((module) => ({
    default: module.TechEnabledSection,
  }))
);

const QuoteSection = lazy(() =>
  import("@/components/QuoteSection").then((module) => ({
    default: module.QuoteSection,
  }))
);

const Services = lazy(() =>
  import("@/components/Services").then((module) => ({
    default: module.Services,
  }))
);

const CreativePowerSection = lazy(() =>
  import("@/components/CreativePowerSection").then((module) => ({
    default: module.CreativePowerSection,
  }))
);

const ClientLogos = lazy(() =>
  import("@/components/ClientLogos").then((module) => ({
    default: module.ClientLogos,
  }))
);

const Testimonials = lazy(() =>
  import("@/components/Testimonials").then((module) => ({
    default: module.Testimonials,
  }))
);

const CTASection = lazy(() =>
  import("@/components/CTASection").then((module) => ({
    default: module.CTASection,
  }))
);

const FaqSection = lazy(() =>
  import("@/components/FaqSection").then((module) => ({
    default: module.FaqSection,
  }))
);

const HowWeWorkSection = lazy(() =>
  import("@/components/HowWeWorkSection").then((module) => ({
    default: module.HowWeWorkSection,
  }))
);

const VersatileDesignsSection = lazy(() =>
  import("@/components/VersatileDesignsSection").then((module) => ({
    default: module.VersatileDesignsSection,
  }))
);

const GlobalTeamSection = lazy(() =>
  import("@/components/GlobalTeamSection").then((module) => ({
    default: module.GlobalTeamSection,
  }))
);

const WorkCarouselSection = lazy(() =>
  import("@/components/WorkCarouselSection").then((module) => ({
    default: module.WorkCarouselSection,
  }))
);

const Footer = lazy(() =>
  import("@/components/Footer").then((module) => ({
    default: module.Footer,
  }))
);
```

#### Step 2: Create Loading Skeleton Component

**File:** `client/src/components/ui/SectionSkeleton.tsx` (create new file)

```tsx
interface SectionSkeletonProps {
  height?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function SectionSkeleton({ 
  height = "md", 
  className = "" 
}: SectionSkeletonProps) {
  const heights = {
    xs: "h-48",
    sm: "h-64",
    md: "h-96",
    lg: "h-[600px]",
    xl: "h-[800px]",
  };

  return (
    <div 
      className={`w-full ${heights[height]} bg-muted/30 animate-pulse ${className}`}
      role="status"
      aria-label="Loading content..."
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
```

#### Step 3: Wrap Lazy Components with Suspense

**File:** `client/src/pages/Home.tsx`

```tsx
import { SectionSkeleton } from "@/components/ui/SectionSkeleton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
      <Navigation />
      
      <main id="main-content" role="main">
        {/* Eager loaded - no Suspense needed */}
        <Hero />
        <StatsSection />
        
        {/* Lazy loaded - wrap with Suspense + ErrorBoundary */}
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="md" />}>
            <CreativeServicesSection />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="lg" />}>
            <SuccessStoriesSection />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="lg" />}>
            <OurWorkSection />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="xl" />}>
            <PortfolioGrid />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="md" />}>
            <NewEraSection />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="lg" />}>
            <MadeToFlexSection />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="md" />}>
            <WorkWithTheBestSection />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="lg" />}>
            <TechEnabledSection />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="sm" />}>
            <QuoteSection />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="lg" />}>
            <Services />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="md" />}>
            <CreativePowerSection />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="sm" />}>
            <ClientLogos />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="lg" />}>
            <Testimonials />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="sm" />}>
            <CTASection />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="xl" />}>
            <FaqSection />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="xl" />}>
            <HowWeWorkSection />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="lg" />}>
            <VersatileDesignsSection />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="md" />}>
            <GlobalTeamSection />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton height="lg" />}>
            <WorkCarouselSection />
          </Suspense>
        </ErrorBoundary>
      </main>
      
      <ErrorBoundary>
        <Suspense fallback={<div className="h-96 bg-muted/20" />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
```

✅ **Checklist:**
- [ ] All below-fold components lazy loaded
- [ ] SectionSkeleton component created
- [ ] All lazy components wrapped with Suspense
- [ ] Suspense components wrapped with ErrorBoundary
- [ ] Appropriate skeleton heights chosen
- [ ] Test: Clear browser cache and reload page
- [ ] Test: Open Network tab - should see chunks loading
- [ ] Test: Slow 3G simulation - skeletons appear before content

---

### Day 7: Add SEO Metadata

#### Step 1: Add Comprehensive SEO Tags

**File:** `client/src/pages/Home.tsx`

```tsx
import { Helmet } from "react-helmet-async";

export default function Home() {
  // Structured data for rich results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Digiteller Creative",
    "description": "Premium creative services agency specializing in design, branding, and digital marketing.",
    "url": "https://digiteller.com",
    "logo": "https://digiteller.com/logo.png",
    "image": "https://digiteller.com/og-image.jpg",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://twitter.com/digiteller",
      "https://linkedin.com/company/digiteller",
      "https://instagram.com/digiteller"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "hello@digiteller.com",
      "availableLanguage": ["English"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Digiteller Creative - Transform Your Brand | Premium Creative Services</title>
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
          content="creative agency, design services, branding agency, digital marketing, UI/UX design, graphic design, web development" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digiteller.com/" />
        <meta property="og:title" content="Digiteller Creative - Premium Creative Services" />
        <meta property="og:description" content="Transform your brand with world-class creative services. 500+ companies trust us." />
        <meta property="og:image" content="https://digiteller.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://digiteller.com/" />
        <meta property="twitter:title" content="Digiteller Creative" />
        <meta property="twitter:description" content="Transform your brand with world-class creative services." />
        <meta property="twitter:image" content="https://digiteller.com/og-image.jpg" />
        
        {/* Additional Meta */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://digiteller.com/" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      {/* Rest of page */}
    </>
  );
}
```

#### Step 2: Create SEO Image (og-image.jpg)

**Requirements:**
- Dimensions: 1200x630px
- Format: JPG or PNG
- Size: < 300KB
- Content: Your logo + tagline
- Text: Readable at small sizes

**Tools:**
- Canva: https://www.canva.com/create/social-media-images/
- Figma: Create custom design
- Online generators: https://www.opengraph.xyz/

✅ **Checklist:**
- [ ] Helmet wrapper added to Home component
- [ ] All meta tags filled with correct information
- [ ] og-image.jpg created and uploaded to public folder
- [ ] Test: Share URL on Facebook - preview looks good
- [ ] Test: Share URL on Twitter - card appears correctly
- [ ] Test: Google Rich Results Test - passes validation

---

## Phase 2: Content Optimization (Week 2)

### Day 1-2: Consolidate Portfolio Sections

#### Current Problem

You have 3 separate portfolio sections:
1. `<OurWorkSection />` - Video intro
2. `<PortfolioGrid />` - Main grid
3. `<WorkCarouselSection />` - Carousel

#### Solution: Create Unified PortfolioShowcase

**File:** `client/src/components/PortfolioShowcase.tsx` (create new file)

```tsx
import { OurWorkSection } from "./OurWorkSection";
import { PortfolioGrid } from "./PortfolioGrid";
// Optionally include WorkCarouselSection if it adds unique value

export function PortfolioShowcase() {
  return (
    <section id="portfolio" className="relative">
      {/* Video Introduction - Sets context */}
      <OurWorkSection