import { Switch, Route } from "wouter";
import { Suspense, lazy } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
const NotFound = lazy(() => import("@/pages/not-found"));
const WhyUs = lazy(() => import("@/pages/WhyUs"));
const OurWork = lazy(() => import("@/pages/OurWork"));
const Enterprise = lazy(() => import("@/pages/Enterprise"));
const Contact = lazy(() => import("@/pages/Contact"));

// Services
const BrandIdentity = lazy(() => import("@/pages/services/BrandIdentity"));
const GraphicDesign = lazy(() => import("@/pages/services/GraphicDesign"));
const SocialMediaMarketing = lazy(() => import("@/pages/services/SocialMediaMarketing"));
const UiUxDesign = lazy(() => import("@/pages/services/UiUxDesign"));
const ContentMarketing = lazy(() => import("@/pages/services/ContentMarketing"));
const SEOAnalytics = lazy(() => import("@/pages/services/SEOAnalytics"));
const VideoProduction = lazy(() => import("@/pages/services/VideoProduction"));
const Animation = lazy(() => import("@/pages/services/Animation"));
const Photography = lazy(() => import("@/pages/services/Photography"));
const VideoEditingLongVideos = lazy(() => import("@/pages/services/VideoEditingLongVideos"));
const VideoEditingPodcastVideoEditing = lazy(
  () => import("@/pages/services/VideoEditingPodcastVideoEditing")
);
const VideoEditingThumbnailDesigning = lazy(
  () => import("@/pages/services/VideoEditingThumbnailDesigning")
);
const VideoEditingShortsReelVideoEditing = lazy(
  () => import("@/pages/services/VideoEditingShortsReelVideoEditing")
);
const VideoEditingYouTubeChannelManagement = lazy(
  () => import("@/pages/services/VideoEditingYouTubeChannelManagement")
);
const VideoEditingShowreel = lazy(() => import("@/pages/services/VideoEditingShowreel"));

// Legal
const PrivacyPolicy = lazy(() => import("@/pages/legal/PrivacyPolicy"));
const Terms = lazy(() => import("@/pages/legal/Terms"));
const Security = lazy(() => import("@/pages/legal/Security"));
const Cookies = lazy(() => import("@/pages/legal/Cookies"));

// Resources
const Blog = lazy(() => import("@/pages/resources/Blog"));
const CaseStudies = lazy(() => import("@/pages/resources/CaseStudies"));
const SupersidePreferredSourceDesignNews = lazy(() => import("@/pages/resources/blog/SupersidePreferredSourceDesignNews"));

// Company
const About = lazy(() => import("@/pages/company/About"));
const Careers = lazy(() => import("@/pages/company/Careers"));
const Press = lazy(() => import("@/pages/company/Press"));
const CompanyContact = lazy(() => import("@/pages/company/Contact"));
const JoinUs = lazy(() => import("@/pages/company/JoinUs"));
const JobDetails = lazy(() => import("@/pages/company/JobDetails"));
const ApplyJob = lazy(() => import("@/pages/company/ApplyJob"));
const TalentRequisition = lazy(() => import("@/pages/company/TalentRequisition"));

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <Switch>
        {/* Main Pages */}
        <Route path="/" component={Home} />
        <Route path="/why-us" component={WhyUs} />
        <Route path="/our-work" component={OurWork} />
        <Route path="/enterprise" component={Enterprise} />
        <Route path="/contact" component={Contact} />

        {/* Services */}
        <Route path="/services/brand-identity" component={BrandIdentity} />
        <Route path="/services/graphic-design" component={GraphicDesign} />
        <Route path="/services/ui-ux-design" component={UiUxDesign} />
        <Route
          path="/services/social-media-marketing"
          component={SocialMediaMarketing}
        />
        <Route path="/services/content-marketing" component={ContentMarketing} />
        <Route path="/services/seo-analytics" component={SEOAnalytics} />
        <Route path="/services/ai-marketing" component={SEOAnalytics} />
        <Route path="/services/video-production" component={VideoProduction} />
        <Route path="/services/animation" component={Animation} />
        <Route path="/services/photography" component={Photography} />
        <Route
          path="/services/video-editing/long-videos"
          component={VideoEditingLongVideos}
        />
        <Route
          path="/services/video-editing/podcast-video-editing"
          component={VideoEditingPodcastVideoEditing}
        />
        <Route
          path="/services/video-editing/thumbnail-designing"
          component={VideoEditingThumbnailDesigning}
        />
        <Route
          path="/services/video-editing/shorts-reel-video-editing"
          component={VideoEditingShortsReelVideoEditing}
        />
        <Route
          path="/services/video-editing/youtube-channel-management"
          component={VideoEditingYouTubeChannelManagement}
        />
        <Route
          path="/services/video-editing/showreel"
          component={VideoEditingShowreel}
        />

        {/* Legal */}
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms" component={Terms} />
        <Route path="/security" component={Security} />
        <Route path="/cookies" component={Cookies} />

        {/* Resources */}
        <Route path="/blog" component={Blog} />
        <Route
          path="/blog/superside-preferred-source-design-news"
          component={SupersidePreferredSourceDesignNews}
        />
        <Route path="/case-studies" component={CaseStudies} />

        {/* Company */}
        <Route path="/about" component={About} />
        <Route path="/careers" component={Careers} />
        <Route path="/press" component={Press} />
        <Route path="/join-us" component={JoinUs} />
        <Route path="/careers/jobdetails/:jobId" component={JobDetails} />
        <Route path="/careers/applyjob/:jobId" component={ApplyJob} />
        <Route path="/talent-requisition" component={TalentRequisition} />

        {/* 404 */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
 }

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
