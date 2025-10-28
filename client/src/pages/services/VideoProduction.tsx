import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Video,
  Film,
  Camera,
  Clapperboard,
  Sparkles,
  Users,
  CheckCircle2,
  TrendingUp,
  Target,
  Play,
  Edit,
  Palette,
} from "lucide-react";

export default function VideoProduction() {
  const services = [
    {
      icon: Video,
      title: "Corporate Videos",
      description: "Professional corporate videos that showcase your brand, values, and expertise to clients and stakeholders.",
    },
    {
      icon: Clapperboard,
      title: "Promotional Videos",
      description: "Engaging promotional content that drives conversions and captures your audience's attention.",
    },
    {
      icon: Film,
      title: "Brand Documentaries",
      description: "Compelling storytelling that brings your brand's journey and mission to life.",
    },
    {
      icon: Camera,
      title: "Product Demos",
      description: "Clear, professional product demonstrations that highlight features and benefits effectively.",
    },
    {
      icon: Users,
      title: "Testimonial Videos",
      description: "Authentic customer stories that build trust and credibility with potential clients.",
    },
    {
      icon: Sparkles,
      title: "Social Video Content",
      description: "Short-form video content optimized for social media platforms and maximum engagement.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Concept",
      description: "Understand your goals, audience, and message. Develop creative concepts and storyboards that align with your vision.",
    },
    {
      step: "02",
      title: "Pre-Production",
      description: "Script writing, location scouting, casting, and detailed production planning to ensure smooth execution.",
    },
    {
      step: "03",
      title: "Production",
      description: "Professional filming with state-of-the-art equipment, experienced crew, and meticulous attention to detail.",
    },
    {
      step: "04",
      title: "Post-Production",
      description: "Expert editing, color grading, sound design, and visual effects to create a polished final product.",
    },
    {
      step: "05",
      title: "Review & Refinement",
      description: "Collaborative revision process to ensure the final video exceeds your expectations.",
    },
    {
      step: "06",
      title: "Delivery & Distribution",
      description: "Optimized delivery in multiple formats and guidance on distribution strategy for maximum impact.",
    },
  ];

  const benefits = [
    "Increase engagement and conversion rates",
    "Communicate complex ideas simply and effectively",
    "Boost SEO and online visibility",
    "Build emotional connections with your audience",
    "Stand out in crowded digital spaces",
    "Improve brand recall and recognition",
    "Reduce customer support inquiries with explainer videos",
    "Extend reach across multiple platforms",
  ];

  const portfolioItems = [
    {
      title: "Tech Startup Launch Video",
      category: "Corporate",
      description: "3-minute brand story that helped secure Series A funding",
      metrics: "2M+ views, 45% conversion increase",
    },
    {
      title: "E-commerce Product Series",
      category: "Product Demo",
      description: "20+ product videos increasing online sales",
      metrics: "156% increase in product page conversions",
    },
    {
      title: "Healthcare Testimonials",
      category: "Customer Stories",
      description: "Patient testimonial series building trust and credibility",
      metrics: "300% increase in consultation bookings",
    },
    {
      title: "Social Media Campaign",
      category: "Social Content",
      description: "15-second video ads for Instagram and TikTok",
      metrics: "8M impressions, 12% engagement rate",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Video Production Services | Professional Video Marketing | DIGI</title>
        <meta
          name="description"
          content="Professional video production services including corporate videos, product demos, testimonials, and social content. Bring your brand story to life with compelling video."
        />
        <meta
          name="keywords"
          content="video production, corporate videos, product videos, video marketing, testimonial videos, brand videos"
        />
      </Helmet>

      <div className="min-h-screen bg-brand-beige-100">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,117,31,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(194,240,135,0.05),transparent_50%)]" />

          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/30 mb-6">
                <Play className="w-4 h-4 text-brand-orange-500" />
                <span className="text-sm font-medium text-brand-orange-500">Video Production Services</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Bring Your Brand Story
                <span className="block text-brand-orange-500">to Life with Video</span>
              </h1>

              <p className="text-xl text-brand-beige-100/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Professional video production that captivates audiences, drives engagement,
                and delivers measurable results for your business.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-blue-900 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  View Our Work
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue-900 mb-4">
                Our Video Production Services
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                From concept to delivery, we create video content that tells your story and drives results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group p-8 rounded-xl bg-brand-beige-100 hover:bg-white border-2 border-transparent hover:border-brand-orange-500 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="w-14 h-14 rounded-lg bg-brand-blue-900 flex items-center justify-center mb-6 group-hover:bg-brand-orange-500 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue-900 mb-3">{service.title}</h3>
                    <p className="text-brand-gray-600 leading-relaxed">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-beige-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue-900 mb-4">
                Our Production Process
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                A streamlined workflow that ensures quality, efficiency, and exceptional results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-8 rounded-xl bg-white border-2 border-brand-gray-200 hover:border-brand-orange-500 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="text-6xl font-bold text-brand-orange-500/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-brand-blue-900 mb-3">{item.title}</h3>
                  <p className="text-brand-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Why Invest in Professional Video?
                </h2>
                <p className="text-lg text-brand-beige-100/90 mb-8 leading-relaxed">
                  Video is the most powerful medium for storytelling and engagement.
                  Our professional production services help you maximize its impact.
                </p>
                <Button
                  size="lg"
                  className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 font-semibold rounded-lg transition-all duration-300"
                >
                  Get a Quote
                </Button>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    <CheckCircle2 className="w-6 h-6 text-brand-green-300 flex-shrink-0 mt-0.5" />
                    <span className="text-brand-beige-100">{benefit}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                Real results from video campaigns that made an impact.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-8 rounded-xl bg-brand-beige-100 hover:bg-white border-2 border-transparent hover:border-brand-orange-500 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-brand-blue-900 text-white text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-blue-900 mb-3">{item.title}</h3>
                  <p className="text-brand-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex items-center gap-2 text-brand-orange-500 font-semibold">
                    <TrendingUp className="w-5 h-5" />
                    <span>{item.metrics}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Create Compelling Video Content?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Let's discuss your video production needs and create content that resonates with your audience.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-brand-blue-900 hover:bg-brand-blue-800 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Schedule a Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-orange-500 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  View Pricing
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
