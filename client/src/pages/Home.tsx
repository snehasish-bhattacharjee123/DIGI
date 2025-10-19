import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { QuoteSection } from "@/components/QuoteSection";
import { Services } from "@/components/Services";
import { ClientLogos } from "@/components/ClientLogos";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { NewEraSection } from "@/components/NewEraSection";
import { MadeToFlexSection } from "@/components/MadeToFlexSection";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import { OurWorkSection } from "@/components/OurWorkSection";
import { WorkWithTheBestSection } from "@/components/WorkWithTheBestSection";
import { FaqSection } from "@/components/FaqSection";
import { TechEnabledSection } from "@/components/TechEnabledSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <StatsSection />
        <SuccessStoriesSection />
        <OurWorkSection />
        <PortfolioGrid />
        <NewEraSection />
        <MadeToFlexSection />
        <WorkWithTheBestSection />
        <TechEnabledSection />
        <QuoteSection />
        <Services />
        <div id="solutions">
          <ClientLogos />
        </div>
        <div id="resources">
          <Testimonials />
        </div>
        <div id="company">
          <CTASection />
        </div>
      </main>
      <FaqSection />
      <Footer />
    </div>
  );
}
