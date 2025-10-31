import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Users,
  Zap,
  Award,
  Globe,
  TrendingUp,
  Clock,
  Shield,
  Target,
  Sparkles,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { LiquidButton } from "@/components/LiquidButton";
import { Button } from "@/components/ui/button";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { GlobalTeamSection } from "@/components/GlobalTeamSection";
import { CTASection } from "@/components/CTASection";
import { CreativePowerSection } from "@/components/CreativePowerSection";
import { OurPeopleSection } from "@/components/OurPeopleSection"
import { TeamSection } from "@/components/TeamSection";

export default function WhyUs() {
  const benefits = [
    {
      icon: Users,
      title: "World-Class Creative Team",
      description:
        "Access elite designers, strategists, and developers handpicked from leading agencies like Google, Nike, and Apple—without the overhead of full-time hires.",
      color: "text-brand-green",
    },
    {
      icon: Zap,
      title: "12-Hour Rush Delivery",
      description:
        "From brief to final delivery in as little as 12 hours. Our AI-enhanced workflows and global team ensure your urgent projects never miss a deadline.",
      color: "text-brand-orange",
    },
    {
      icon: Award,
      title: "Award-Winning Excellence",
      description:
        "Our portfolio has earned multiple industry awards including Webby, CSS Design Awards, and recognition from Awwwards for creative innovation.",
      color: "text-yellow-500",
    },
    {
      icon: Globe,
      title: "Global Reach, Local Expertise",
      description:
        "We've successfully delivered 70,000+ projects across 30+ countries, understanding diverse markets, cultural nuances, and regional preferences.",
      color: "text-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Measurable ROI: 94% Average",
      description:
        "Our data-driven approach has helped clients achieve an average 94% three-year ROI, with engagement increases up to 300% and significant conversion boosts.",
      color: "text-green-600",
    },
    {
      icon: Clock,
      title: "24/7 Dedicated Support",
      description:
        "Your dedicated project manager and support team are available around the clock to keep your projects on track and answer questions instantly.",
      color: "text-purple-500",
    },
    {
      icon: Shield,
      title: "Unlimited Revisions",
      description:
        "We stand behind our work with unlimited revisions and a satisfaction guarantee. We iterate until you're completely thrilled with the results.",
      color: "text-brand-blue-600",
    },
    {
      icon: Target,
      title: "Strategy-First Approach",
      description:
        "Every creative decision is backed by data, user research, and strategic thinking—focused relentlessly on achieving your business objectives.",
      color: "text-red-500",
    },
  ];

  const stats = [
    { number: "500+", label: "Global Brands Trust Us", icon: Sparkles },
    { number: "70k+", label: "Projects Delivered", icon: Award },
    { number: "94%", label: "Average 3-Year ROI", icon: TrendingUp },
    { number: "30+", label: "Countries Served", icon: Globe },
  ];

  const testimonials = [
    {
      quote:
        "Digiteller Creative didn't just redesign our brand—they transformed how our customers perceive us. The attention to detail, strategic thinking, and creative vision exceeded every expectation. Our conversion rate increased 47% in the first quarter.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp International",
      company: "Enterprise SaaS",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      quote:
        "Working with this team was seamless from day one. They understood our vision instantly and brought it to life better than we imagined. The collaborative process, rapid turnarounds, and quality exceeded our previous agency by miles.",
      author: "Michael Chen",
      role: "Marketing Director, InnovateLab",
      company: "HealthTech Startup",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=13",
    },
    {
      quote:
        "The ROI we've seen from their social media campaigns is incredible. Our engagement jumped 300% in just 3 months, and we're now seeing consistent lead generation. Best creative investment we've ever made.",
      author: "Emma Williams",
      role: "Founder, FitLife Wellness",
      company: "Consumer Brand",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=9",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We dive deep into your brand, audience, and objectives to create a strategic foundation for success.",
    },
    {
      number: "02",
      title: "Creative Concepting",
      description:
        "Our team develops innovative concepts aligned with your goals, presenting options that push boundaries.",
    },
    {
      number: "03",
      title: "Design & Development",
      description:
        "Elite designers and developers bring concepts to life with pixel-perfect execution and technical excellence.",
    },
    {
      number: "04",
      title: "Review & Iteration",
      description:
        "Collaborative feedback rounds ensure every detail meets your standards—unlimited revisions included.",
    },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Why Choose Digiteller Creative | Award-Winning Creative Agency
        </title>
        <meta
          name="description"
          content="Discover why 500+ global brands trust Digiteller Creative for world-class design, 12-hour turnarounds, and 94% average ROI. Elite creative team, unlimited revisions, 24/7 support."
        />
        <meta
          name="keywords"
          content="creative agency, design services, award-winning design, fast turnaround, global creative team, ROI-driven design"
        />
        <link rel="canonical" href="https://digiteller.com/why-us" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Why Choose Digiteller Creative | Award-Winning Creative Agency"
        />
        <meta
          property="og:description"
          content="World-class creative team, 12-hour rush delivery, 94% average ROI. See why 500+ brands choose us."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digiteller.com/why-us" />
      </Helmet>

      <Navigation />

      <main
        id="main-content"
        role="main"
        className="min-h-screen bg-background"
      >
        
        <ErrorBoundary>
          <OurPeopleSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <TeamSection />
        </ErrorBoundary>

        

        

        {/* ========================================= */}
        

        {/* ========================================= */}
        {/* STATS SECTION */}
        {/* ========================================= */}
        <section className="py-16 md:py-20 bg-background border-b">
          <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center gap-3"
                >
                  <stat.icon className="w-10 h-10 text-brand-green" />
                  <h3 className="text-4xl md:text-5xl font-bold text-foreground">
                    {stat.number}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================= */}
        {/* BENEFITS GRID SECTION */}
        {/* ========================================= */}
        <section className="py-20 md:py-28 lg:py-40 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-green mb-3 block">
                What Sets Us Apart
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Eight Reasons We're Your{" "}
                <span className="text-brand-green">
                  Perfect Creative Partner
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                From rapid turnarounds to unlimited revisions, we've built our
                agency around what matters most to ambitious brands.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.6 }}
                  className="group bg-card p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-brand-green/30 hover:-translate-y-1"
                >
                  <div
                    className={`w-14 h-14 ${item.color} bg-muted rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================= */}
        {/* OUR PROCESS SECTION */}
        {/* ========================================= */}
        <section className="py-20 md:py-28 lg:py-40 bg-brand-blue-900 text-brand-beige-100">
          <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-green mb-3 block">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How We Deliver{" "}
                <span className="text-brand-green">Exceptional Results</span>
              </h2>
              <p className="text-lg text-brand-beige-200">
                A proven, collaborative process that ensures every project
                exceeds expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="relative"
                >
                  <div className="text-7xl font-bold text-brand-green/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-brand-beige-200 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  {i < processSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute -right-4 top-12 text-brand-green/30 w-8 h-8" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================= */}
        {/* ADDITIONAL SECTIONS */}
        {/* ========================================= */}

 {/* Global Team Section */}
        <ErrorBoundary>
          <GlobalTeamSection />
        </ErrorBoundary>

        {/* How We Work Section */}
        <ErrorBoundary>
          <HowWeWorkSection />
        </ErrorBoundary>

       <ErrorBoundary>
          <CreativePowerSection />
        </ErrorBoundary>

        {/* CTA Section */}
        {/* <ErrorBoundary>
          <CTASection />
        </ErrorBoundary> */}
      </main>

      <Footer />
    </>
  );
}
