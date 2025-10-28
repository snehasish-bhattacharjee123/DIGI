import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Newspaper,
  Download,
  Image,
  FileText,
  Award,
  TrendingUp,
  Users,
  Globe,
  Calendar,
  ExternalLink,
  Mail,
  Phone,
  Sparkles,
  CheckCircle2,
  Video,
  Palette,
} from "lucide-react";
import { useState } from "react";

export default function Press() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Product Launch", "Company News", "Awards", "Partnership", "Community"];

  const pressReleases = [
    {
      title: "DIGITELLER CREATIVE Wins Best Brand Identity Agency Award 2024",
      category: "Awards",
      date: "December 15, 2024",
      excerpt: "Recognized for innovative brand transformation work across multiple industries, demonstrating creative excellence and measurable business impact.",
      link: "#",
    },
    {
      title: "New AI-Powered Creative Tools Launch to Streamline Design Process",
      category: "Product Launch",
      date: "November 8, 2024",
      excerpt: "Revolutionary suite of AI tools helps clients reduce design turnaround time by 60% while maintaining creative quality.",
      link: "#",
    },
    {
      title: "Strategic Partnership with Global Tech Leader Announced",
      category: "Partnership",
      date: "October 22, 2024",
      excerpt: "Collaboration brings cutting-edge technology to creative services, enabling unprecedented innovation for clients.",
      link: "#",
    },
    {
      title: "DIGITELLER CREATIVE Expands to Mumbai and Bangalore",
      category: "Company News",
      date: "September 10, 2024",
      excerpt: "Opening two new offices to better serve growing client base and expand creative talent pool across India.",
      link: "#",
    },
    {
      title: "Free Creative Workshop Series Launches for Small Businesses",
      category: "Community",
      date: "August 5, 2024",
      excerpt: "Giving back to the community with monthly workshops on branding, marketing, and digital strategy.",
      link: "#",
    },
    {
      title: "Client Portfolio Surpasses 200 Successful Projects",
      category: "Company News",
      date: "July 18, 2024",
      excerpt: "Milestone achievement reflects consistent growth and client satisfaction across diverse industries.",
      link: "#",
    },
  ];

  const mediaCoverage = [
    {
      outlet: "Forbes India",
      title: "Top 10 Creative Agencies Transforming Indian Brands",
      date: "November 2024",
      type: "Feature",
      link: "#",
    },
    {
      outlet: "Business Today",
      title: "How DIGITELLER CREATIVE is Redefining Brand Storytelling",
      date: "October 2024",
      type: "Interview",
      link: "#",
    },
    {
      outlet: "Economic Times",
      title: "The Rise of Digital-First Creative Agencies",
      date: "September 2024",
      type: "Mention",
      link: "#",
    },
    {
      outlet: "Marketing Week",
      title: "Award-Winning Campaign Analysis: DIGITELLER's Approach",
      date: "August 2024",
      type: "Feature",
      link: "#",
    },
  ];

  const mediaKitItems = [
    {
      icon: Image,
      title: "Brand Assets",
      description: "Logos, color palettes, and brand guidelines in various formats",
      files: "ZIP (15 MB)",
    },
    {
      icon: FileText,
      title: "Company Overview",
      description: "Fact sheet, mission statement, and company history",
      files: "PDF (2 MB)",
    },
    {
      icon: Users,
      title: "Leadership Bios",
      description: "Executive team photos and biographies",
      files: "PDF + Images (8 MB)",
    },
    {
      icon: Award,
      title: "Awards & Recognition",
      description: "Complete list of accolades and achievements",
      files: "PDF (1 MB)",
    },
    {
      icon: Video,
      title: "Brand Video",
      description: "High-resolution brand story video and b-roll footage",
      files: "MP4 (250 MB)",
    },
    {
      icon: Palette,
      title: "Case Studies",
      description: "Detailed project breakdowns and client success stories",
      files: "PDF (12 MB)",
    },
  ];

  const stats = [
    { icon: Users, value: "200+", label: "Clients Served" },
    { icon: Award, value: "45+", label: "Industry Awards" },
    { icon: Globe, value: "15+", label: "Countries" },
    { icon: TrendingUp, value: "350%", label: "Average ROI" },
  ];

  const filteredReleases = pressReleases.filter(
    (release) => selectedCategory === "All" || release.category === selectedCategory
  );

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Press & Media | News & Resources | DIGI</title>
        <meta
          name="description"
          content="Latest news, press releases, media coverage, and downloadable media kit from DIGITELLER CREATIVE. Media inquiries welcome."
        />
        <meta
          name="keywords"
          content="press releases, media kit, brand assets, company news, media coverage, press contact"
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
                <Newspaper className="w-4 h-4 text-brand-orange-500" />
                <span className="text-sm font-medium text-brand-orange-500">Press & Media</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Latest News &
                <span className="block text-brand-orange-500">Media Resources</span>
              </h1>

              <p className="text-xl text-brand-beige-100/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Stay updated with our latest announcements, achievements, and media coverage.
                Download our press kit for brand assets and company information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-brand-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-orange-500/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-brand-orange-500" />
                    </div>
                    <div className="text-3xl font-bold text-brand-blue-900 mb-2">{stat.value}</div>
                    <div className="text-brand-gray-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-beige-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue-900 mb-2">
                    Press Releases
                  </h2>
                  <p className="text-brand-gray-600">
                    {filteredReleases.length} release{filteredReleases.length !== 1 ? "s" : ""} found
                  </p>
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                        selectedCategory === category
                          ? "bg-brand-orange-500 text-white"
                          : "bg-white text-brand-gray-700 hover:bg-brand-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              {filteredReleases.map((release, index) => (
                <motion.article
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group p-8 rounded-xl bg-white border-2 border-transparent hover:border-brand-orange-500 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-brand-blue-900 text-white text-xs font-medium">
                          {release.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-brand-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>{release.date}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-brand-blue-900 mb-3 group-hover:text-brand-orange-500 transition-colors leading-tight">
                        {release.title}
                      </h3>
                      <p className="text-brand-gray-600 leading-relaxed mb-4">
                        {release.excerpt}
                      </p>
                      <a
                        href={release.link}
                        className="inline-flex items-center gap-2 text-brand-orange-500 hover:text-brand-orange-600 font-semibold transition-colors"
                      >
                        Read Full Release
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Media Coverage Section */}
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
                Media Coverage
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                See what industry leaders and publications are saying about us.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {mediaCoverage.map((coverage, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 rounded-xl bg-brand-beige-100 hover:bg-white border-2 border-transparent hover:border-brand-orange-500 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-brand-blue-900 mb-1">{coverage.outlet}</h4>
                      <span className="text-sm text-brand-gray-600">{coverage.date}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-brand-orange-500/10 text-brand-orange-600 text-xs font-medium">
                      {coverage.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue-900 mb-4 leading-tight group-hover:text-brand-orange-500 transition-colors">
                    {coverage.title}
                  </h3>
                  <a
                    href={coverage.link}
                    className="inline-flex items-center gap-2 text-brand-orange-500 hover:text-brand-orange-600 font-semibold transition-colors"
                  >
                    Read Article
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit Section */}
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
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-brand-orange-500" />
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue-900">
                  Download Media Kit
                </h2>
              </div>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                Everything you need for press coverage, including brand assets, company information, and high-resolution images.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {mediaKitItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-8 rounded-xl bg-white border-2 border-brand-gray-200 hover:border-brand-orange-500 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="w-14 h-14 rounded-lg bg-brand-blue-900 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-brand-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue-900 mb-3">{item.title}</h3>
                    <p className="text-brand-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-brand-gray-500">{item.files}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-brand-orange-500 hover:text-brand-orange-600 p-0 h-auto font-semibold"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Button
                size="lg"
                className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Complete Media Kit
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Media Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Media Inquiries
              </h2>
              <p className="text-lg text-brand-beige-100/90 max-w-2xl mx-auto">
                For press inquiries, interviews, or additional information, please contact our media relations team.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-orange-500 flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a
                  href="mailto:press@digitellercreative.com"
                  className="text-brand-beige-100/90 hover:text-brand-orange-500 transition-colors"
                >
                  press@digitellercreative.com
                </a>
                <p className="text-sm text-brand-beige-100/70 mt-4">
                  Response time: Within 24 hours
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-orange-500 flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <a
                  href="tel:+917998596948"
                  className="text-brand-beige-100/90 hover:text-brand-orange-500 transition-colors"
                >
                  +91-7998596948
                </a>
                <p className="text-sm text-brand-beige-100/70 mt-4">
                  Available: Mon-Fri, 9 AM - 6 PM IST
                </p>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-6 rounded-xl bg-brand-orange-500/20 border border-brand-orange-500/30"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">For Interview Requests</h4>
                  <p className="text-sm text-brand-beige-100/90 leading-relaxed">
                    Please include your publication name, intended topic, deadline, and preferred format (written, video, or podcast).
                    We'll respond with availability and can provide executive bios and photos upon request.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
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
                Stay Updated on Company News
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Subscribe to receive our latest press releases, announcements, and company updates directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-brand-blue-900 placeholder-brand-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button
                  size="lg"
                  className="bg-brand-blue-900 hover:bg-brand-blue-800 text-white px-8 py-4 font-semibold rounded-lg transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-white/70 mt-4">
                Media professionals only. We respect your inbox and send updates monthly.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
