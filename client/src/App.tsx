import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import WhyUs from "@/pages/WhyUs";
import OurWork from "@/pages/OurWork";
import Enterprise from "@/pages/Enterprise";
import Contact from "@/pages/Contact";

// Services
import BrandIdentity from "@/pages/services/BrandIdentity";
import GraphicDesign from "@/pages/services/GraphicDesign";
import SocialMediaMarketing from "@/pages/services/SocialMediaMarketing";
import UiUxDesign from "@/pages/services/UiUxDesign";
import ContentMarketing from "@/pages/services/ContentMarketing";
import SEOAnalytics from "@/pages/services/SEOAnalytics";
import VideoProduction from "@/pages/services/VideoProduction";
import Animation from "@/pages/services/Animation";
import Photography from "@/pages/services/Photography";

// Legal
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import Terms from "@/pages/legal/Terms";
import Security from "@/pages/legal/Security";
import Cookies from "@/pages/legal/Cookies";

// Resources
import Blog from "@/pages/resources/Blog";
import CaseStudies from "@/pages/resources/CaseStudies";

// Company
import About from "@/pages/company/About";
import Careers from "@/pages/company/Careers";
import Press from "@/pages/company/Press";
import CompanyContact from "@/pages/company/Contact";

function Router() {
  return (
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
      <Route path="/services/video-production" component={VideoProduction} />
      <Route path="/services/animation" component={Animation} />
      <Route path="/services/photography" component={Photography} />

      {/* Legal */}
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/security" component={Security} />
      <Route path="/cookies" component={Cookies} />

      {/* Resources */}
      <Route path="/blog" component={Blog} />
      <Route path="/case-studies" component={CaseStudies} />

      {/* Company */}
      <Route path="/about" component={About} />
      <Route path="/careers" component={Careers} />
      <Route path="/press" component={Press} />

      {/* 404 */}
      <Route component={NotFound} />
    </Switch>
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
