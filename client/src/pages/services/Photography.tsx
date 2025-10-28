import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Camera,
  Building2,
  Users,
  Package,
  ImageIcon,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Target,
  Aperture,
  Lightbulb,
  Eye,
} from "lucide-react";

export default function Photography() {
  const services = [
    {
      icon: Building2,
      title: "Corporate Photography",
      description: "Professional corporate headshots, team photos, and office environment photography that showcases your company culture.",
    },
    {
      icon: Package,
      title: "Product Photography",
      description: "High-quality product images that highlight details, textures, and features to drive e-commerce sales.",
    },
    {
      icon: Users,
      title: "Event Photography",
      description: "Comprehensive event coverage capturing key moments, networking, and atmosphere at your corporate events.",
    },
    {
      icon: ImageIcon,
      title: "Lifestyle Photography",
      description: "Authentic lifestyle imagery that tells your brand story and connects emotionally with your audience.",
    },
    {
      icon: Sparkles,
      title: "Creative & Conceptual",
      description: "Artistic photography for advertising campaigns, editorial content, and creative brand projects.",
    },
    {
      icon: Camera,
      title: "Commercial Photography",
      description: "Full-service commercial photography for advertising, marketing materials, and brand campaigns.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "Discuss your vision, goals, and requirements. Develop a detailed shot list and creative direction for the project.",
    },
    {
      step: "02",
      title: "Pre-Production",
      description: "Location scouting, talent coordination, prop sourcing, and logistics planning to ensure smooth execution.",
    },
    {
      step: "03",
      title: "Photo Shoot",
      description: "Professional photography session with expert lighting, composition, and direction to capture the perfect shots.",
    },
    {
      step: "04",
      title: "Photo Selection",
      description: "Review all images and select the best shots for editing and final delivery based on your needs.",
    },
    {
      step: "05",
      title: "Post-Production",
      description: "Expert retouching, color correction, and enhancement to ensure every image looks its absolute best.",
    },
    {
      step: "06",
      title: "Delivery & Usage Rights",
      description: "Receive high-resolution images in all required formats with clear usage rights and licensing.",
    },
  ];

  const benefits = [
    "Build trust with professional, high-quality imagery",
    "Increase conversion rates with compelling visuals",
    "Stand out from competitors with unique photography",
    "Create consistent visual brand identity",
    "Engage audiences across all marketing channels",
    "Reduce stock photo costs with custom content",
    "Showcase products and services authentically",
    "Generate versatile assets for multiple campaigns",
  ];

  const portfolioItems = [
    {
      title: "Tech Startup Brand Shoot",
      category: "Corporate",
      description: "Complete corporate photography package for Series B tech company",
      metrics: "150+ images delivered, 12+ months of content",
    },
    {
      title: "E-commerce Product Line",
      category: "Product Photography",
      description: "500+ product images for fashion e-commerce brand",
      metrics: "85% increase in product page conversions",
    },
    {
      title: "Annual Conference Coverage",
      category: "Event Photography",
      description: "3-day conference with 1,000+ attendees fully documented",
      metrics: "300+ images, 95% client satisfaction",
    },
    {
      title: "Lifestyle Campaign",
      category: "Lifestyle",
      description: "Multi-location lifestyle shoot for wellness brand",
      metrics: "Used across 20+ marketing campaigns",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Professional Photography Services | Corporate & Product Photography | DIGI</title>
        <meta
          name="description"
          content="Professional photography services including corporate headshots, product photography, event coverage, and lifestyle imagery. High-quality visuals that elevate your brand."
        />
        <meta
          name="keywords"
          content="photography services, corporate photography, product photography, event photography, commercial photography, professional photographer"
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
                <Aperture className="w-4 h-4 text-brand-orange-500" />
                <span className="text-sm font-medium text-brand-orange-500">Photography Services</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Capture Your Brand's Story
                <span className="block text-brand-orange-500">with Professional Photography</span>
              </h1>

              <p className="text-xl text-brand-beige-100/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                High-quality photography that showcases your products, people, and brand personality
                to create lasting impressions and drive business results.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book a Session
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-blue-900 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  View Portfolio
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
                Our Photography Services
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                Professional photography solutions tailored to your business needs and brand vision.
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
                Our Photography Process
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                A seamless workflow from concept to delivery that ensures exceptional results every time.
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
                  Why Invest in Professional Photography?
                </h2>
                <p className="text-lg text-brand-beige-100/90 mb-8 leading-relaxed">
                  In a visual world, professional photography is essential for building credibility,
                  engaging audiences, and standing out from the competition.
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
                Featured Photography Projects
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                Real results from photography projects that helped brands tell their stories visually.
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
                Ready to Elevate Your Visual Content?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Let's create stunning photography that showcases your brand and drives real business results.
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
