import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Sparkles,
  Zap,
  Layers,
  Film,
  Smile,
  MonitorPlay,
  CheckCircle2,
  TrendingUp,
  Target,
  Palette,
  Wand2,
  Play,
} from "lucide-react";

export default function Animation() {
  const services = [
    {
      icon: Sparkles,
      title: "Motion Graphics",
      description: "Eye-catching motion graphics that bring static designs to life and enhance your visual storytelling.",
    },
    {
      icon: Film,
      title: "Explainer Videos",
      description: "Animated explainer videos that simplify complex concepts and engage your audience effectively.",
    },
    {
      icon: Smile,
      title: "Character Animation",
      description: "Custom character design and animation that adds personality and memorability to your brand.",
    },
    {
      icon: Layers,
      title: "2D Animation",
      description: "Versatile 2D animation for marketing, education, and entertainment across all platforms.",
    },
    {
      icon: Zap,
      title: "3D Animation",
      description: "Cutting-edge 3D animation and modeling for product visualization and immersive experiences.",
    },
    {
      icon: MonitorPlay,
      title: "UI/UX Animation",
      description: "Micro-interactions and interface animations that enhance user experience and delight users.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Concept & Storyboarding",
      description: "Collaborate on creative concepts and develop detailed storyboards that map out every scene and transition.",
    },
    {
      step: "02",
      title: "Style Development",
      description: "Create a unique visual style that aligns with your brand identity and resonates with your audience.",
    },
    {
      step: "03",
      title: "Design & Illustration",
      description: "Craft detailed illustrations, characters, and assets that will be brought to life through animation.",
    },
    {
      step: "04",
      title: "Animation Production",
      description: "Expertly animate every element using industry-leading tools and techniques for smooth, professional motion.",
    },
    {
      step: "05",
      title: "Sound Design & Music",
      description: "Add audio elements, sound effects, and music that complement the animation and enhance storytelling.",
    },
    {
      step: "06",
      title: "Final Delivery",
      description: "Deliver polished animations in all required formats, optimized for your specific platforms and use cases.",
    },
  ];

  const benefits = [
    "Capture attention in crowded digital spaces",
    "Explain complex ideas in seconds, not minutes",
    "Increase engagement rates by up to 300%",
    "Create memorable brand experiences",
    "Boost conversion rates on landing pages",
    "Stand out on social media feeds",
    "Make data and statistics visually compelling",
    "Build emotional connections with your audience",
  ];

  const portfolioItems = [
    {
      title: "SaaS Product Explainer",
      category: "Explainer Video",
      description: "90-second animated explainer that increased trial signups by 180%",
      metrics: "180% increase in trial signups",
    },
    {
      title: "Brand Motion System",
      category: "Motion Graphics",
      description: "Complete motion design system for fintech startup",
      metrics: "Used across 50+ marketing assets",
    },
    {
      title: "Educational Series",
      category: "2D Animation",
      description: "15-part animated series for e-learning platform",
      metrics: "92% student completion rate",
    },
    {
      title: "3D Product Visualization",
      category: "3D Animation",
      description: "Photorealistic 3D product animations for e-commerce",
      metrics: "45% reduction in product returns",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Animation Services | Motion Graphics & Character Animation | DIGI</title>
        <meta
          name="description"
          content="Professional animation services including motion graphics, explainer videos, 2D/3D animation, and character animation. Bring your ideas to life with stunning visuals."
        />
        <meta
          name="keywords"
          content="animation services, motion graphics, explainer videos, 2D animation, 3D animation, character animation"
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
                <Wand2 className="w-4 h-4 text-brand-orange-500" />
                <span className="text-sm font-medium text-brand-orange-500">Animation Services</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Bring Your Ideas to Life
                <span className="block text-brand-orange-500">with Stunning Animation</span>
              </h1>

              <p className="text-xl text-brand-beige-100/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Professional animation and motion graphics that captivate audiences,
                simplify complex ideas, and create unforgettable brand experiences.
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
                  View Our Portfolio
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
                Our Animation Services
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                From concept to final render, we create animations that engage, educate, and inspire.
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
                Our Animation Process
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                A proven workflow that delivers exceptional animations on time and on budget.
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
                  Why Choose Animation for Your Brand?
                </h2>
                <p className="text-lg text-brand-beige-100/90 mb-8 leading-relaxed">
                  Animation combines creativity and strategy to deliver messages that stick.
                  It's the most engaging way to communicate your value proposition.
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
                Featured Animation Projects
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                See how our animations have helped brands tell their stories and achieve their goals.
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
                Ready to Animate Your Vision?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Let's create stunning animations that captivate your audience and elevate your brand.
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
