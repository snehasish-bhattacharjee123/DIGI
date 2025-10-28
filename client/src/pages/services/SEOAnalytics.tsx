import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Search,
  TrendingUp,
  BarChart3,
  Target,
  LineChart,
  FileSearch,
  CheckCircle2,
  Zap,
  Award,
  Users,
} from "lucide-react";

export default function SEOAnalytics() {
  const services = [
    {
      icon: Search,
      title: "Technical SEO Audit",
      description: "Comprehensive site audits identifying and fixing technical issues that impact your search rankings.",
    },
    {
      icon: FileSearch,
      title: "Keyword Research",
      description: "In-depth keyword analysis to target terms your customers actually search for with buying intent.",
    },
    {
      icon: TrendingUp,
      title: "On-Page Optimization",
      description: "Optimize every page element from meta tags to content structure for maximum search visibility.",
    },
    {
      icon: Target,
      title: "Link Building",
      description: "High-quality backlink acquisition from authoritative sites to boost your domain authority.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Detailed performance tracking and insights to measure ROI and guide strategy decisions.",
    },
    {
      icon: LineChart,
      title: "Conversion Optimization",
      description: "Data-driven CRO strategies to turn your traffic into customers and revenue.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "SEO Audit & Analysis",
      description: "Comprehensive audit of your website's current SEO health, identifying opportunities and issues.",
    },
    {
      step: "02",
      title: "Competitor Research",
      description: "Analyze top competitors to understand what's working in your industry and find gaps.",
    },
    {
      step: "03",
      title: "Strategy Development",
      description: "Create a customized SEO roadmap aligned with your business goals and target audience.",
    },
    {
      step: "04",
      title: "Implementation",
      description: "Execute on-page, technical, and off-page SEO tactics to improve rankings.",
    },
    {
      step: "05",
      title: "Content Optimization",
      description: "Optimize existing content and create new SEO-focused content that ranks and converts.",
    },
    {
      step: "06",
      title: "Monitoring & Reporting",
      description: "Track rankings, traffic, and conversions with regular reports and strategy adjustments.",
    },
  ];

  const benefits = [
    "Increase organic traffic and reduce paid ad spend",
    "Rank for high-intent keywords that convert",
    "Build sustainable, long-term visibility",
    "Understand your audience behavior and preferences",
    "Make data-driven decisions with confidence",
    "Outrank competitors in your market",
    "Improve website user experience and speed",
    "Track and optimize every marketing dollar",
  ];

  const portfolioItems = [
    {
      title: "E-Commerce SEO Overhaul",
      category: "Retail",
      result: "+450% organic traffic, +280% revenue",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    },
    {
      title: "Local SEO Campaign",
      category: "Service Business",
      result: "#1 rankings for 15 local terms",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    },
    {
      title: "B2B SaaS SEO Strategy",
      category: "Technology",
      result: "+320% qualified leads from organic",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop",
    },
  ];

  const stats = [
    { icon: TrendingUp, number: "68%", label: "Of online experiences start with search" },
    { icon: Users, number: "53%", label: "Of website traffic comes from organic" },
    { icon: Award, number: "5x", label: "Higher close rate than outbound" },
    { icon: Zap, number: "14x", label: "ROI from SEO vs traditional marketing" },
  ];

  return (
    <>
      <Helmet>
        <title>SEO & Analytics Services - DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Data-driven SEO and analytics services that improve rankings, drive qualified traffic, and increase conversions. Get found by customers searching for your solutions."
        />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-brand-blue-900 text-brand-beige-100 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,117,31,0.08),transparent_50%)]" />

        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-brand-orange/10 border border-brand-orange/30 rounded-full px-6 py-2 mb-6">
                <span className="text-brand-orange font-semibold">SEO & Analytics</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Get Found By Customers <span className="text-brand-orange">Searching For You</span>
              </h1>
              <p className="text-lg sm:text-xl text-brand-gray-400 mb-8 leading-relaxed">
                Data-driven SEO strategies that improve your search rankings, drive qualified traffic,
                and turn visitors into customers. We combine technical expertise with analytics insights
                to deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer">
                  <Button variant="cta" size="lg">
                    Get Free SEO Audit
                  </Button>
                </a>
                <a href="#portfolio">
                  <Button variant="outline" size="lg" className="border-2 border-brand-beige-100 text-brand-beige-100 hover:bg-brand-beige-100 hover:text-brand-blue-900">
                    View Results
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
                <Search className="w-32 h-32 text-brand-orange" />
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
                <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-green/20 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-brand-green" />
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
              Complete SEO & <span className="text-brand-orange">Analytics Solutions</span>
            </h2>
            <p className="text-xl text-brand-gray-700 max-w-3xl mx-auto">
              Everything you need to dominate search results and understand your data
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
                <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-brand-green" />
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
              Our SEO <span className="text-brand-orange">Methodology</span>
            </h2>
            <p className="text-xl text-brand-gray-400 max-w-3xl mx-auto">
              A proven process that consistently delivers ranking improvements
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
                <div className="text-5xl font-bold text-brand-green/30 mb-4">{item.step}</div>
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
                Why SEO Is <span className="text-brand-orange">Essential</span>
              </h2>
              <p className="text-xl text-brand-gray-700 mb-8 leading-relaxed">
                SEO is the most cost-effective marketing channel, delivering 5x higher close rates than
                outbound marketing. It's not optional—it's essential for sustainable growth.
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
              className="bg-gradient-to-br from-brand-green/10 to-brand-orange/10 border border-brand-green/30 rounded-3xl p-12"
            >
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-brand-green mb-2">75%</div>
                  <div className="text-brand-gray-700">Never scroll past page 1 of search</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-brand-orange mb-2">0.78%</div>
                  <div className="text-brand-gray-700">Average organic CTR for position #1</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-brand-blue-900 mb-2">10x</div>
                  <div className="text-brand-gray-700">More clicks to position #1 vs #10</div>
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
              Case Studies
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-900 mb-4">
              Real Results From <span className="text-brand-orange">Real Clients</span>
            </h2>
            <p className="text-xl text-brand-gray-700 max-w-3xl mx-auto">
              See how our SEO strategies have transformed businesses
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
                    <div className="text-sm text-brand-gray-600 mb-1">Impact</div>
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
                Ready to <span className="text-brand-orange">Dominate Search Results?</span>
              </h2>
              <p className="text-xl text-brand-gray-400 mb-8 max-w-2xl mx-auto">
                Get a free SEO audit and discover untapped opportunities to grow your organic traffic and revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/917998596948" target="_blank" rel="noopener noreferrer">
                  <Button variant="cta" size="lg">
                    Get Free SEO Audit
                  </Button>
                </a>
                <a href="/contact">
                  <Button variant="outline" size="lg" className="border-2 border-brand-beige-100 text-brand-beige-100 hover:bg-brand-beige-100 hover:text-brand-blue-900">
                    Schedule Strategy Call
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
