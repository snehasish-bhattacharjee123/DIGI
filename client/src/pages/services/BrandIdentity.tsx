import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import {
  Palette,
  BookOpen,
  FileText,
  Package,
  Target,
  Lightbulb,
  Layers,
  CheckCircle2,
} from "lucide-react";

export default function BrandIdentity() {
  const services = [
    {
      icon: Palette,
      title: "Logo Design",
      description: "Memorable and versatile logos that capture your brand essence and work across all mediums.",
    },
    {
      icon: BookOpen,
      title: "Brand Guidelines",
      description: "Comprehensive brand standards documenting logo usage, colors, typography, and visual style.",
    },
    {
      icon: FileText,
      title: "Brand Messaging",
      description: "Compelling brand voice, taglines, and messaging frameworks that resonate with your audience.",
    },
    {
      icon: Package,
      title: "Brand Collateral",
      description: "Business cards, letterheads, presentations, and all materials needed for consistent branding.",
    },
    {
      icon: Layers,
      title: "Visual Identity System",
      description: "Complete visual language including patterns, icons, imagery style, and graphic elements.",
    },
    {
      icon: Target,
      title: "Brand Strategy",
      description: "Strategic positioning, brand architecture, and market differentiation strategies.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "We dive deep into your business, industry, competitors, and target audience to understand your unique positioning.",
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Define your brand's core values, personality, positioning, and messaging framework.",
    },
    {
      step: "03",
      title: "Creative Exploration",
      description: "Multiple design concepts exploring different visual directions for your brand identity.",
    },
    {
      step: "04",
      title: "Refinement & Testing",
      description: "Refine chosen direction, test across applications, and ensure scalability and versatility.",
    },
    {
      step: "05",
      title: "Guidelines & Delivery",
      description: "Complete brand guidelines, asset library, and all files ready for implementation.",
    },
    {
      step: "06",
      title: "Launch Support",
      description: "Ongoing support during rollout to ensure consistent and impactful brand implementation.",
    },
  ];

  const benefits = [
    "Stand out in a crowded marketplace",
    "Build trust and credibility instantly",
    "Create emotional connections with customers",
    "Increase brand recognition and recall",
    "Command premium pricing",
    "Attract top talent to your organization",
    "Streamline marketing efforts with consistency",
    "Future-proof your brand for growth",
  ];

  const portfolioItems = [
    {
      title: "Tech Startup Rebrand",
      industry: "Technology",
      result: "250% increase in brand recognition",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
    },
    {
      title: "Luxury Restaurant Identity",
      industry: "Hospitality",
      result: "Featured in design awards",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
    },
    {
      title: "E-Commerce Brand Launch",
      industry: "Retail",
      result: "Successful market entry in 6 countries",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Brand Identity Design Services - DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Professional brand identity design services. Create a memorable brand with custom logos, guidelines, and comprehensive visual identity systems."
        />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_50%)]" />

        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
                <span className="text-primary font-semibold">Brand Identity</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Create a Brand Identity That <span className="text-primary">Stands Out</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                Your brand identity is more than just a logo—it's the complete visual and emotional
                experience that sets you apart. We craft memorable brand identities that capture your
                essence and resonate with your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
                    Start Your Brand Journey
                  </Button>
                </a>
                <a href="#portfolio">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                    View Portfolio
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl border border-primary/30 flex items-center justify-center">
                <Palette className="w-32 h-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Complete Brand Identity Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to build a powerful, cohesive brand identity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Brand Development Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven methodology that delivers exceptional brand identities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-primary/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Why Brand Identity Matters
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                A strong brand identity is the foundation of business success. It's how customers
                recognize, remember, and connect with your business in a meaningful way.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-purple-600/10 border border-primary/30 rounded-3xl p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">75%</div>
                  <div className="text-gray-300">of consumers judge credibility by design</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">3-5x</div>
                  <div className="text-gray-300">ROI from consistent branding</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">80%</div>
                  <div className="text-gray-300">increased brand recognition</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Brand Identities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real results from real brands we've helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group bg-black border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{item.industry}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <div className="pt-4 border-t border-gray-800">
                    <div className="text-sm text-gray-500 mb-1">Impact</div>
                    <div className="text-primary font-semibold">{item.result}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="bg-gradient-to-r from-primary/20 via-purple-600/20 to-primary/20 border border-primary/30 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Brand Identity?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create a brand identity that captures your essence and sets you apart from the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
                  Get Started Today
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                  Schedule Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
