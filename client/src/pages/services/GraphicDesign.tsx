import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import {
  Image,
  Layout,
  FileText,
  Presentation,
  Newspaper,
  Package2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function GraphicDesign() {
  const services = [
    {
      icon: Image,
      title: "Social Media Graphics",
      description: "Eye-catching visuals for Instagram, Facebook, LinkedIn, and all social platforms.",
    },
    {
      icon: Layout,
      title: "Marketing Materials",
      description: "Brochures, flyers, posters, and print materials that drive engagement and conversions.",
    },
    {
      icon: Presentation,
      title: "Presentation Design",
      description: "Professional slide decks that captivate audiences and communicate your message effectively.",
    },
    {
      icon: FileText,
      title: "Infographics",
      description: "Data visualization and infographics that make complex information easy to understand.",
    },
    {
      icon: Newspaper,
      title: "Digital Ads",
      description: "Display ads, banners, and paid social creatives optimized for maximum impact.",
    },
    {
      icon: Package2,
      title: "Packaging Design",
      description: "Product packaging that stands out on shelves and tells your brand story.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Brief & Requirements",
      description: "Understanding your goals, target audience, brand guidelines, and project specifications.",
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Creating initial design concepts exploring different creative directions and styles.",
    },
    {
      step: "03",
      title: "Design Execution",
      description: "Crafting polished designs with attention to typography, color, composition, and details.",
    },
    {
      step: "04",
      title: "Review & Refinement",
      description: "Incorporating your feedback and refining designs until they're perfect.",
    },
    {
      step: "05",
      title: "Final Delivery",
      description: "Providing all final files in required formats, ready for print or digital use.",
    },
  ];

  const benefits = [
    "Fast turnaround times without compromising quality",
    "Unlimited revisions until you're satisfied",
    "Files delivered in all necessary formats",
    "Print-ready and web-optimized outputs",
    "Consistent brand application across all designs",
    "Scalable solutions that grow with your needs",
    "Dedicated designer assigned to your projects",
    "Rights and ownership transferred to you",
  ];

  const portfolioItems = [
    {
      title: "Fashion Brand Campaign",
      category: "Social Media",
      result: "500K+ engagements",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop",
    },
    {
      title: "Tech Conference Materials",
      category: "Marketing Collateral",
      result: "Used across 12 events",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
    },
    {
      title: "Product Launch Packaging",
      category: "Packaging Design",
      result: "Design award winner",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Graphic Design Services - DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Professional graphic design services for all your visual content needs. From social media graphics to print materials, we create designs that captivate."
        />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.15),transparent_50%)]" />

        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
                <span className="text-primary font-semibold">Graphic Design</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Visual Content That <span className="text-primary">Captivates</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                From social media graphics to marketing materials, we create stunning visual content
                that captures attention, communicates your message, and drives results across all platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
                    Start Your Design Project
                  </Button>
                </a>
                <a href="#portfolio">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                    View Our Work
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl border border-primary/30 flex items-center justify-center">
                <Sparkles className="w-32 h-32 text-primary" />
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
              Comprehensive Graphic Design Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional design solutions for every visual content need
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
              Our Design Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A streamlined workflow that delivers exceptional designs, fast
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-primary/30 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
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
                Why Choose Our Graphic Design Services
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                We combine creativity with strategic thinking to deliver designs that not only look
                amazing but also achieve your business goals.
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
                  <div className="text-5xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-gray-300">Designs Created Monthly</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">24-48hr</div>
                  <div className="text-gray-300">Average Turnaround Time</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">98%</div>
                  <div className="text-gray-300">Client Satisfaction Rate</div>
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
              Featured Design Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how our designs have helped brands communicate better
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
                  <div className="text-sm text-primary font-semibold mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <div className="pt-4 border-t border-gray-800">
                    <div className="text-sm text-gray-500 mb-1">Result</div>
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
              Ready to Elevate Your Visual Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create stunning graphics that capture attention and drive results for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
                  Get Started Today
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                  Request a Quote
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
