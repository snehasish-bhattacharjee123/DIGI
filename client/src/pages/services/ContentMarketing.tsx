import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  PenTool,
  FileText,
  Video,
  Mic,
  BarChart,
  Users,
  CheckCircle2,
  TrendingUp,
  Target,
  Lightbulb,
} from "lucide-react";

export default function ContentMarketing() {
  const services = [
    {
      icon: FileText,
      title: "Blog & Article Writing",
      description: "SEO-optimized blog posts and articles that engage readers and rank well in search engines.",
    },
    {
      icon: Video,
      title: "Video Content",
      description: "Scripts, storyboards, and video content strategy that captivates and converts audiences.",
    },
    {
      icon: Mic,
      title: "Podcast Production",
      description: "End-to-end podcast creation from concept to editing, helping you build an engaged audio audience.",
    },
    {
      icon: PenTool,
      title: "Copywriting",
      description: "Persuasive copy for websites, emails, ads, and landing pages that drive action.",
    },
    {
      icon: Users,
      title: "Social Content",
      description: "Engaging social media content that builds community and drives meaningful interactions.",
    },
    {
      icon: BarChart,
      title: "Content Strategy",
      description: "Comprehensive content plans aligned with your business goals and audience needs.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Content Audit & Strategy",
      description: "Analyze your current content, identify gaps, and develop a strategic content roadmap aligned with business objectives.",
    },
    {
      step: "02",
      title: "Audience Research",
      description: "Deep dive into your target audience's needs, pain points, and content consumption habits.",
    },
    {
      step: "03",
      title: "Content Creation",
      description: "Produce high-quality, SEO-optimized content that educates, entertains, and engages your audience.",
    },
    {
      step: "04",
      title: "Distribution & Promotion",
      description: "Strategic content distribution across channels to maximize reach and engagement.",
    },
    {
      step: "05",
      title: "Performance Analysis",
      description: "Track metrics, analyze performance, and continuously optimize content for better results.",
    },
    {
      step: "06",
      title: "Iteration & Growth",
      description: "Refine strategy based on data insights and scale successful content initiatives.",
    },
  ];

  const benefits = [
    "Establish thought leadership in your industry",
    "Drive organic traffic and improve SEO rankings",
    "Generate qualified leads consistently",
    "Build trust and credibility with your audience",
    "Reduce customer acquisition costs",
    "Create evergreen assets that compound value",
    "Support sales team with valuable resources",
    "Educate customers and reduce support burden",
  ];

  const portfolioItems = [
    {
      title: "SaaS Blog Strategy",
      category: "B2B Technology",
      result: "+350% organic traffic in 6 months",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop",
    },
    {
      title: "E-commerce Content Hub",
      category: "Retail",
      result: "+200% conversion from content",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
    },
    {
      title: "Podcast Launch Campaign",
      category: "Finance",
      result: "10K+ subscribers in 3 months",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop",
    },
  ];

  const stats = [
    { icon: TrendingUp, number: "3x", label: "Average ROI from content" },
    { icon: Users, number: "70%", label: "Prefer learning via content" },
    { icon: Target, number: "80%", label: "Decision makers read content" },
    { icon: Lightbulb, number: "62%", label: "Trust branded content" },
  ];

  return (
    <>
      <Helmet>
        <title>Content Marketing Services - DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Strategic content marketing services that drive traffic, engagement, and conversions. From blog posts to video content, we create content that works."
        />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-brand-blue-900 text-brand-beige-100 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,117,31,0.08),transparent_50%)]" />

        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-brand-orange/10 border border-brand-orange/30 rounded-full px-6 py-2 mb-6">
                <span className="text-brand-orange font-semibold">Content Marketing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Content That <span className="text-brand-orange">Connects & Converts</span>
              </h1>
              <p className="text-lg sm:text-xl text-brand-gray-400 mb-8 leading-relaxed">
                Strategic content marketing that attracts, engages, and converts your ideal customers.
                From SEO-optimized blog posts to compelling video content, we create content that drives
                real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer">
                  <Button variant="cta" size="lg">
                    Start Your Content Strategy
                  </Button>
                </a>
                <a href="#portfolio">
                  <Button variant="outline" size="lg" className="border-2 border-brand-beige-100 text-brand-beige-100 hover:bg-brand-beige-100 hover:text-brand-blue-900">
                    View Case Studies
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-brand-orange/20 to-brand-green/20 rounded-3xl border border-brand-orange/30 flex items-center justify-center">
                <PenTool className="w-32 h-32 text-brand-orange" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-beige-100">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-orange/20 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-brand-orange" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-brand-blue-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-brand-gray-700 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-brand-beige-50">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm md:text-base text-brand-orange uppercase tracking-wider font-semibold mb-4">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-900 mb-4">
              Comprehensive Content <span className="text-brand-orange">Marketing Solutions</span>
            </h2>
            <p className="text-xl text-brand-gray-700 max-w-3xl mx-auto">
              Every type of content your business needs to succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-brand-gray-300 rounded-2xl p-8 hover:border-brand-orange/50 hover:shadow-brand-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue-900 mb-3 group-hover:text-brand-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-brand-gray-700 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-brand-blue-900">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm md:text-base text-brand-orange uppercase tracking-wider font-semibold mb-4">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-beige-100 mb-4">
              How We Create <span className="text-brand-orange">Winning Content</span>
            </h2>
            <p className="text-xl text-brand-gray-400 max-w-3xl mx-auto">
              A data-driven approach to content that delivers results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-blue-800/50 border border-brand-blue-700 rounded-xl p-6 hover:border-brand-orange/50 hover:bg-brand-blue-800/70 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-brand-orange/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-brand-beige-100 mb-3">{item.title}</h3>
                <p className="text-brand-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-brand-beige-100">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-900 mb-6">
                Why Content Marketing <span className="text-brand-orange">Works</span>
              </h2>
              <p className="text-xl text-brand-gray-700 mb-8 leading-relaxed">
                Content marketing costs 62% less than traditional marketing and generates 3x as many leads.
                It's the foundation of modern digital marketing strategy.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0" />
                    <span className="text-brand-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-brand-orange/10 to-brand-green/10 border border-brand-orange/30 rounded-3xl p-12"
            >
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-brand-orange mb-2">62%</div>
                  <div className="text-brand-gray-700">Lower cost than traditional marketing</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-brand-green mb-2">3x</div>
                  <div className="text-brand-gray-700">More leads generated</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-brand-blue-900 mb-2">13x</div>
                  <div className="text-brand-gray-700">ROI from content marketing</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-brand-beige-50">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm md:text-base text-brand-orange uppercase tracking-wider font-semibold mb-4">
              Success Stories
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-900 mb-4">
              Content That <span className="text-brand-orange">Drives Results</span>
            </h2>
            <p className="text-xl text-brand-gray-700 max-w-3xl mx-auto">
              See how our content strategies have helped businesses grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white border border-brand-gray-300 rounded-2xl overflow-hidden hover:border-brand-orange/50 hover:shadow-brand-lg transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900 via-brand-blue-900/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-brand-orange font-semibold mb-2 uppercase tracking-wide">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue-900 mb-3 group-hover:text-brand-orange transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="pt-4 border-t border-brand-gray-300">
                    <div className="text-sm text-brand-gray-600 mb-1">Result</div>
                    <div className="text-brand-green font-semibold">{item.result}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-brand-beige-100 to-brand-beige-50">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 border border-brand-orange/30 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,117,31,0.1),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-beige-100 mb-6">
                Ready to Transform Your <span className="text-brand-orange">Content Strategy?</span>
              </h2>
              <p className="text-xl text-brand-gray-400 mb-8 max-w-2xl mx-auto">
                Let's create content that attracts, engages, and converts your ideal customers into loyal advocates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer">
                  <Button variant="cta" size="lg">
                    Get Started Today
                  </Button>
                </a>
                <a href="/contact">
                  <Button variant="outline" size="lg" className="border-2 border-brand-beige-100 text-brand-beige-100 hover:bg-brand-beige-100 hover:text-brand-blue-900">
                    Schedule Consultation
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
