import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  TrendingUp,
  Users,
  BarChart3,
  CheckCircle2,
  MessageCircle,
  Heart,
} from "lucide-react";

export default function SocialMediaMarketing() {
  const services = [
    {
      icon: Instagram,
      title: "Instagram Marketing",
      description: "Engaging content, stories, reels, and campaigns that grow your Instagram presence organically.",
    },
    {
      icon: Facebook,
      title: "Facebook Advertising",
      description: "Targeted ad campaigns that reach the right audience and maximize your ROI on Facebook.",
    },
    {
      icon: Linkedin,
      title: "LinkedIn Strategy",
      description: "Professional content and lead generation strategies for B2B success on LinkedIn.",
    },
    {
      icon: Twitter,
      title: "Twitter/X Management",
      description: "Real-time engagement, trending content, and community building on Twitter/X platform.",
    },
    {
      icon: Youtube,
      title: "YouTube Marketing",
      description: "Video content strategy, optimization, and advertising to grow your YouTube channel.",
    },
    {
      icon: TrendingUp,
      title: "Social Media Analytics",
      description: "Data-driven insights and reporting to track performance and optimize your social strategy.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Social Audit & Strategy",
      description: "Comprehensive analysis of your current social presence and development of a tailored strategy.",
    },
    {
      step: "02",
      title: "Content Planning",
      description: "Creating a content calendar with engaging posts aligned to your brand and audience preferences.",
    },
    {
      step: "03",
      title: "Content Creation",
      description: "Designing eye-catching graphics, writing compelling copy, and producing engaging videos.",
    },
    {
      step: "04",
      title: "Community Management",
      description: "Active engagement with your audience, responding to comments, and building relationships.",
    },
    {
      step: "05",
      title: "Paid Advertising",
      description: "Strategic ad campaigns targeting your ideal customers with optimized budgets and creative.",
    },
    {
      step: "06",
      title: "Analytics & Optimization",
      description: "Continuous monitoring, reporting, and optimization based on performance data.",
    },
  ];

  const benefits = [
    "Increase brand awareness and reach",
    "Drive website traffic and conversions",
    "Build engaged community of followers",
    "Generate qualified leads consistently",
    "Establish thought leadership in your industry",
    "Improve customer service and satisfaction",
    "Stay ahead of competitors on social media",
    "Maximize ROI on advertising spend",
  ];

  const platforms = [
    { name: "Instagram", color: "from-pink-500 to-purple-500", reach: "2B+" },
    { name: "Facebook", color: "from-blue-600 to-blue-400", reach: "3B+" },
    { name: "LinkedIn", color: "from-blue-700 to-blue-500", reach: "900M+" },
    { name: "Twitter/X", color: "from-gray-800 to-gray-600", reach: "500M+" },
    { name: "YouTube", color: "from-red-600 to-red-400", reach: "2.5B+" },
    { name: "TikTok", color: "from-black to-gray-800", reach: "1B+" },
  ];

  const caseStudies = [
    {
      title: "Fashion Brand Growth",
      platform: "Instagram",
      result: "+500% follower growth in 6 months",
      metric: "300K+ new followers",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
    },
    {
      title: "B2B Lead Generation",
      platform: "LinkedIn",
      result: "Generated 500+ qualified leads",
      metric: "150% ROI",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    },
    {
      title: "E-Commerce Campaign",
      platform: "Facebook",
      result: "$500K in revenue from social ads",
      metric: "5x ROAS",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Social Media Marketing Services - DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Expert social media marketing services to grow your brand. Instagram, Facebook, LinkedIn, and more. Drive engagement, leads, and sales."
        />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(139,92,246,0.15),transparent_50%)]" />

        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
                <span className="text-primary font-semibold">Social Media Marketing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Grow Your Brand on <span className="text-primary">Social Media</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                Strategic social media marketing that builds communities, drives engagement, and converts
                followers into customers. From content creation to paid advertising, we handle it all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
                    Boost Your Social Presence
                  </Button>
                </a>
                <a href="#case-studies">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                    See Results
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-2xl p-6 flex items-center justify-center h-40">
                    <Instagram className="w-16 h-16 text-pink-500" />
                  </div>
                  <div className="bg-gradient-to-br from-blue-600/20 to-blue-400/20 border border-blue-500/30 rounded-2xl p-6 flex items-center justify-center h-40">
                    <Facebook className="w-16 h-16 text-blue-500" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gradient-to-br from-blue-700/20 to-blue-500/20 border border-blue-600/30 rounded-2xl p-6 flex items-center justify-center h-40">
                    <Linkedin className="w-16 h-16 text-blue-600" />
                  </div>
                  <div className="bg-gradient-to-br from-red-600/20 to-red-400/20 border border-red-500/30 rounded-2xl p-6 flex items-center justify-center h-40">
                    <Youtube className="w-16 h-16 text-red-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              We Excel Across All Major Platforms
            </h2>
            <p className="text-xl text-gray-400">Reaching billions of users worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${platform.color} w-12 h-12 rounded-lg mx-auto mb-3`} />
                <h3 className="text-white font-semibold mb-1">{platform.name}</h3>
                <p className="text-gray-400 text-sm">{platform.reach} users</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive Social Media Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to succeed on social media
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
              Our Social Media Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven approach to social media success
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
                Why Social Media Marketing Matters
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Social media is where your customers are. A strong social media presence is essential
                for modern businesses to connect, engage, and grow.
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
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">4.9B</div>
                    <div className="text-gray-300 text-sm">Active Social Media Users</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">2.5hrs</div>
                    <div className="text-gray-300 text-sm">Average Daily Usage</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">71%</div>
                    <div className="text-gray-300 text-sm">More Likely to Buy from Brands They Follow</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-black">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Real Results from Real Campaigns
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how we've helped brands achieve remarkable social media success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group bg-black border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{study.platform}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <div className="space-y-2">
                    <div className="text-gray-300">{study.result}</div>
                    <div className="text-2xl font-bold text-primary">{study.metric}</div>
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
              Ready to Dominate Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create a social media strategy that grows your audience, boosts engagement, and drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
                  Get Your Free Social Audit
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
