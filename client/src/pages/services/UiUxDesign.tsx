import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import {
  Smartphone,
  Monitor,
  Layers,
  Users,
  Zap,
  Target,
  CheckCircle2,
  MousePointer,
} from "lucide-react";

export default function UiUxDesign() {
  const services = [
    {
      icon: Monitor,
      title: "Web Design & UI",
      description: "Beautiful, modern web interfaces that engage users and drive conversions on desktop and mobile.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Intuitive iOS and Android app designs optimized for touch interactions and mobile-first experiences.",
    },
    {
      icon: Users,
      title: "User Research",
      description: "In-depth user research, personas, and journey mapping to understand your audience deeply.",
    },
    {
      icon: Target,
      title: "UX Strategy",
      description: "Comprehensive UX strategy aligning user needs with business goals for maximum impact.",
    },
    {
      icon: MousePointer,
      title: "Interaction Design",
      description: "Engaging micro-interactions, animations, and transitions that delight users.",
    },
    {
      icon: Layers,
      title: "Design Systems",
      description: "Scalable design systems with reusable components ensuring consistency across products.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Research & Discovery",
      description: "User research, competitive analysis, and stakeholder interviews to understand requirements and opportunities.",
    },
    {
      step: "02",
      title: "Information Architecture",
      description: "Structuring content and features into logical flows, sitemaps, and navigation patterns.",
    },
    {
      step: "03",
      title: "Wireframing",
      description: "Low-fidelity wireframes to explore layouts, hierarchy, and user flows without visual distractions.",
    },
    {
      step: "04",
      title: "Visual Design",
      description: "High-fidelity mockups bringing your brand to life with colors, typography, and imagery.",
    },
    {
      step: "05",
      title: "Prototyping",
      description: "Interactive prototypes to test and validate designs before development begins.",
    },
    {
      step: "06",
      title: "User Testing",
      description: "Usability testing with real users to identify issues and optimize the experience.",
    },
  ];

  const benefits = [
    "Increase user engagement and retention",
    "Reduce bounce rates and cart abandonment",
    "Improve conversion rates significantly",
    "Decrease customer support requests",
    "Build user trust and credibility",
    "Stay ahead of competitors",
    "Reduce development costs with clear specifications",
    "Create accessible experiences for all users",
  ];

  const portfolioItems = [
    {
      title: "E-Commerce Platform Redesign",
      category: "Web & Mobile",
      result: "+180% conversion rate",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    },
    {
      title: "SaaS Dashboard Design",
      category: "Web Application",
      result: "+95% user satisfaction",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    },
    {
      title: "Mobile Banking App",
      category: "iOS & Android",
      result: "4.8★ App Store rating",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <Helmet>
        <title>UI/UX Design Services - DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Expert UI/UX design services creating beautiful, intuitive digital experiences. User research, wireframing, prototyping, and visual design."
        />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(139,92,246,0.15),transparent_50%)]" />

        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
                <span className="text-primary font-semibold">UI/UX Design</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                User Experiences That <span className="text-primary">Convert</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                We design intuitive, beautiful digital experiences that users love and that drive
                measurable business results. From web apps to mobile interfaces, we create designs
                that combine aesthetics with functionality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
                    Start Your UX Project
                  </Button>
                </a>
                <a href="#portfolio">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                    View Case Studies
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl border border-primary/30 flex items-center justify-center">
                <MousePointer className="w-32 h-32 text-primary" />
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
              Complete UI/UX Design Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From strategy to execution, we handle every aspect of UX design
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
              Our UX Design Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A user-centered approach that delivers exceptional experiences
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
                Why Great UX Design Matters
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                User experience design isn't just about making things look pretty—it's about
                creating intuitive, efficient experiences that achieve real business outcomes.
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
                  <div className="text-5xl font-bold text-primary mb-2">$100</div>
                  <div className="text-gray-300">Return for every $1 invested in UX</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">88%</div>
                  <div className="text-gray-300">Won't return after bad UX</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">200%</div>
                  <div className="text-gray-300">Average conversion increase with good UX</div>
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
              Featured UX Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real results from thoughtfully designed user experiences
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
              Ready to Create Amazing User Experiences?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's design digital experiences that your users will love and that drive real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
                  Start Your Project
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                  Book a Consultation
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
