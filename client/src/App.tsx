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
import BrandIdentity from "@/pages/services/BrandIdentity";
import GraphicDesign from "@/pages/services/GraphicDesign";
import SocialMediaMarketing from "@/pages/services/SocialMediaMarketing";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import Terms from "@/pages/legal/Terms";
import UiUxDesign from "@/pages/services/UiUxDesign";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/why-us" component={WhyUs} />
      <Route path="/our-work" component={OurWork} />
      <Route path="/enterprise" component={Enterprise} />
      <Route path="/services/brand-identity" component={BrandIdentity} />
      <Route path="/services/graphic-design" component={GraphicDesign} />
      <Route
        path="/services/social-media-marketing"
        component={SocialMediaMarketing}
      />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/services/ui-ux-design" component={UiUxDesign} />
      <Route path="/contact" component={Contact} />
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
