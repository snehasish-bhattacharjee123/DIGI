import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Services } from "@/components/Services";
import { ClientLogos } from "@/components/ClientLogos";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <PortfolioGrid />
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
      <Footer />
    </div>
  );
}
