import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, Users, Zap, Award, Globe, TrendingUp, Clock, Shield } from "lucide-react";

export default function WhyUs() {
  const benefits = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our talented team of designers, strategists, and developers bring years of experience and creativity to every project.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "We understand deadlines matter. Our streamlined process ensures quick delivery without compromising quality.",
    },
    {
      icon: Award,
      title: "Award-Winning Work",
      description: "Our portfolio speaks for itself with multiple industry awards and recognition for creative excellence.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "We've worked with clients across 30+ countries, understanding diverse markets and cultural nuances.",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Our strategies have helped clients increase engagement by 300% and boost conversions significantly.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support ensures your questions are answered and your projects stay on track.",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "We stand behind our work with unlimited revisions until you're completely satisfied.",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "30+", label: "Countries Served" },
  ];

  const differentiators = [
    {
      title: "Data-Driven Creativity",
      description: "We blend creative excellence with data analytics to ensure every design decision is backed by insights and measurable results.",
    },
    {
      title: "End-to-End Solutions",
      description: "From strategy to execution, we handle every aspect of your creative needs, providing a seamless experience from start to finish.",
    },
    {
      title: "Scalable Partnerships",
      description: "Whether you're a startup or an enterprise, our flexible engagement models grow with your business needs.",
    },
    {
      title: "Cutting-Edge Technology",
      description: "We leverage the latest tools and technologies to deliver innovative solutions that keep you ahead of the competition.",
    },
    {
      title: "Transparent Process",
      description: "Clear communication, regular updates, and complete transparency throughout the project lifecycle.",
    },
    {
      title: "Industry Expertise",
      description: "Deep experience across multiple industries means we understand your market and speak your language.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose Us - DIGITELLER CREATIVE</title>
        <meta name="description" content="Discover why leading brands trust DIGITELLER CREATIVE for their creative and digital marketing needs. Expert team, proven results, and unmatched quality." />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]" />

        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Why Choose <span className="text-primary">Digiteller Creative?</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              We're not just another creative agency. We're your strategic partner in building brands that matter,
              creating stories that resonate, and delivering results that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              The Digiteller Advantage
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the difference that sets us apart from the rest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 bg-black">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our unique approach combines creativity with strategy to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
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
              Ready to Work with the Best?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their brands with our creative expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
                  Book a Demo
                </Button>
              </a>
              <a href="#our-work">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                  View Our Work
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
