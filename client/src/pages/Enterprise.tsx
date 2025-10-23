import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import {
  Shield,
  Users,
  Zap,
  BarChart3,
  Lock,
  HeadphonesIcon,
  Globe,
  Workflow,
  CheckCircle2,
  TrendingUp,
  Award,
  Clock
} from "lucide-react";

export default function Enterprise() {
  const features = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level security with SOC 2 compliance, data encryption, and regular security audits to protect your sensitive information.",
    },
    {
      icon: Users,
      title: "Dedicated Account Team",
      description: "Your own dedicated team of creative strategists, account managers, and technical experts available 24/7.",
    },
    {
      icon: Workflow,
      title: "Custom Workflows",
      description: "Tailored processes that integrate seamlessly with your existing tools, systems, and approval workflows.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive reporting dashboards with real-time insights, ROI tracking, and performance metrics.",
    },
    {
      icon: Globe,
      title: "Multi-Market Support",
      description: "Global creative operations with localized content for different markets, languages, and cultural contexts.",
    },
    {
      icon: Zap,
      title: "Unlimited Scalability",
      description: "Scale your creative production up or down based on demand without quality compromise or resource constraints.",
    },
  ];

  const solutions = [
    {
      title: "Brand Management Platform",
      description: "Centralized brand asset management with version control, approval workflows, and global brand consistency tools.",
      benefits: ["Digital Asset Management", "Brand Guidelines Portal", "Template Library", "Usage Rights Tracking"],
    },
    {
      title: "Content Production at Scale",
      description: "High-volume content creation with consistent quality across all channels, markets, and campaigns.",
      benefits: ["Unlimited Design Requests", "Video Production Teams", "Content Calendar Management", "Multi-Channel Distribution"],
    },
    {
      title: "Strategic Creative Consulting",
      description: "Executive-level creative strategy consulting to align your brand vision with business objectives.",
      benefits: ["Quarterly Strategy Reviews", "Market Research Insights", "Competitive Analysis", "Creative Audits"],
    },
    {
      title: "Technology Integration",
      description: "Seamless integration with your existing marketing stack, CMS, CRM, and project management tools.",
      benefits: ["API Access", "Custom Integrations", "Automation Workflows", "Real-time Sync"],
    },
  ];

  const enterpriseClients = [
    { name: "Fortune 500 Tech Company", logo: "T" },
    { name: "Global Bank Corporation", logo: "G" },
    { name: "Leading E-Commerce Platform", logo: "E" },
    { name: "International Retail Chain", logo: "I" },
    { name: "Healthcare Innovation Leader", logo: "H" },
    { name: "Automotive Industry Giant", logo: "A" },
  ];

  const benefits = [
    "Priority Support & SLA Guarantees",
    "Dedicated Slack/Teams Channel",
    "Custom Contract Terms",
    "Volume-Based Pricing",
    "Quarterly Business Reviews",
    "Exclusive Feature Access",
    "Training & Onboarding Programs",
    "White-Label Solutions Available",
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise Solutions - DIGITELLER CREATIVE</title>
        <meta name="description" content="Enterprise-grade creative solutions for large organizations. Scalable, secure, and tailored to meet the complex needs of global brands." />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(139,92,246,0.15),transparent_50%)]" />

        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
              <span className="text-primary font-semibold">Enterprise Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Creative Power for <span className="text-primary">Global Brands</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Enterprise-grade creative solutions designed to scale with your organization.
              Secure, reliable, and built to handle the complex needs of the world's leading brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
                  Schedule a Demo
                </Button>
              </a>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                Download Enterprise Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-12">
            <p className="text-gray-400 text-lg mb-8">Trusted by Leading Global Enterprises</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {enterpriseClients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-24 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-primary/50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{client.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built for scale, security, and seamless integration with your existing infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-black">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Tailored Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet the unique challenges of enterprise organizations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {solution.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Enterprise Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to power your creative operations at scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-black">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
                <span className="text-primary font-semibold">Security First</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise Security & Compliance
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Your data security is our top priority. We maintain the highest standards of security
                and compliance to protect your sensitive information and intellectual property.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Data Encryption</h4>
                    <p className="text-gray-400">End-to-end encryption for data in transit and at rest</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Compliance Ready</h4>
                    <p className="text-gray-400">SOC 2, GDPR, HIPAA, and ISO 27001 compliant</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Regular Audits</h4>
                    <p className="text-gray-400">Continuous security monitoring and third-party audits</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-purple-600/10 border border-primary/30 rounded-3xl p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-300">Security Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">&lt;1hr</div>
                  <div className="text-gray-300">Critical Issue Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="bg-gradient-to-r from-primary/20 via-purple-600/20 to-primary/20 border border-primary/30 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Creative Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our enterprise solutions can help your organization achieve more with less complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
                  Schedule Enterprise Demo
                </Button>
              </a>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                Contact Sales Team
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Custom pricing available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Dedicated onboarding support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
