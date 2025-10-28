import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Briefcase,
  TrendingUp,
  Target,
  Award,
  ArrowRight,
  Filter,
  CheckCircle2,
  BarChart3,
  Users,
  DollarSign,
  Sparkles,
  Calendar,
} from "lucide-react";
import { useState } from "react";

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const industries = [
    "All",
    "E-commerce",
    "SaaS",
    "Healthcare",
    "Finance",
    "Education",
    "Retail",
    "Technology",
    "Non-Profit",
  ];

  const featuredCaseStudy = {
    client: "TechFlow Solutions",
    industry: "SaaS",
    title: "How We Helped a B2B SaaS Company Achieve 400% Growth in 12 Months",
    challenge: "TechFlow struggled with low brand awareness and poor conversion rates despite having a superior product.",
    solution: "Comprehensive rebrand, content marketing strategy, and conversion rate optimization across all touchpoints.",
    image: "techflow-case.jpg",
    metrics: [
      { label: "Revenue Growth", value: "400%", icon: TrendingUp },
      { label: "Lead Generation", value: "850%", icon: Users },
      { label: "Conversion Rate", value: "+285%", icon: Target },
      { label: "Market Share", value: "+45%", icon: BarChart3 },
    ],
    testimonial: {
      quote: "DIGI transformed our entire digital presence. Their strategic approach and creative execution exceeded all our expectations.",
      author: "Sarah Chen",
      position: "CEO, TechFlow Solutions",
    },
  };

  const caseStudies = [
    {
      client: "Urban Threads",
      industry: "E-commerce",
      title: "Transforming a Fashion Startup into an E-commerce Powerhouse",
      description: "Complete brand identity redesign and e-commerce optimization that resulted in explosive growth.",
      image: "urban-threads.jpg",
      results: [
        "320% increase in online sales",
        "4.8 star customer rating",
        "65% reduction in cart abandonment",
      ],
      metrics: {
        revenue: "+320%",
        traffic: "+580%",
        conversion: "+145%",
      },
      services: ["Brand Identity", "E-commerce Design", "Digital Marketing"],
    },
    {
      client: "HealthFirst Clinic",
      industry: "Healthcare",
      title: "Modernizing Healthcare Marketing While Maintaining Trust",
      description: "Patient-centered digital strategy that increased appointments by 275% while building community trust.",
      image: "healthfirst.jpg",
      results: [
        "275% increase in patient bookings",
        "92% patient satisfaction score",
        "5x increase in online reviews",
      ],
      metrics: {
        bookings: "+275%",
        engagement: "+420%",
        reviews: "5x",
      },
      services: ["Website Design", "Content Marketing", "SEO"],
    },
    {
      client: "GreenLeaf Financial",
      industry: "Finance",
      title: "Building Digital Trust in the Financial Services Industry",
      description: "Comprehensive digital transformation that positioned GreenLeaf as a modern, trustworthy financial partner.",
      image: "greenleaf.jpg",
      results: [
        "$2.5M in new client acquisitions",
        "180% increase in qualified leads",
        "Top 3 search ranking for key terms",
      ],
      metrics: {
        acquisition: "$2.5M",
        leads: "+180%",
        roi: "450%",
      },
      services: ["Brand Strategy", "Web Development", "SEO Analytics"],
    },
    {
      client: "EduTech Academy",
      industry: "Education",
      title: "Scaling Online Education Through Strategic Marketing",
      description: "Digital marketing campaign that grew student enrollment by 600% in just 8 months.",
      image: "edutech.jpg",
      results: [
        "600% growth in student enrollment",
        "85% course completion rate",
        "4.9 star average course rating",
      ],
      metrics: {
        enrollment: "+600%",
        completion: "85%",
        retention: "+340%",
      },
      services: ["Digital Marketing", "UX Design", "Video Production"],
    },
    {
      client: "NextGen Retail",
      industry: "Retail",
      title: "Omnichannel Strategy That Unified Online and In-Store Experience",
      description: "Seamless integration of digital and physical retail experiences that drove unprecedented growth.",
      image: "nextgen.jpg",
      results: [
        "250% increase in foot traffic",
        "90% mobile conversion rate improvement",
        "$1.2M additional revenue",
      ],
      metrics: {
        traffic: "+250%",
        mobile: "+90%",
        revenue: "$1.2M",
      },
      services: ["Brand Identity", "Mobile App", "Social Media Marketing"],
    },
    {
      client: "Hope Foundation",
      industry: "Non-Profit",
      title: "Amplifying Social Impact Through Digital Storytelling",
      description: "Emotional brand storytelling and digital campaigns that tripled donations and volunteer engagement.",
      image: "hope.jpg",
      results: [
        "325% increase in donations",
        "500+ new volunteers recruited",
        "2M+ social media impressions",
      ],
      metrics: {
        donations: "+325%",
        volunteers: "500+",
        reach: "2M+",
      },
      services: ["Content Marketing", "Video Production", "Social Media"],
    },
  ];

  const filteredCaseStudies = caseStudies.filter(
    (study) => selectedIndustry === "All" || study.industry === selectedIndustry
  );

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Case Studies | Client Success Stories | DIGI</title>
        <meta
          name="description"
          content="Explore our portfolio of successful digital marketing campaigns and brand transformations. Real results for real businesses across diverse industries."
        />
        <meta
          name="keywords"
          content="case studies, client success stories, marketing results, ROI, digital transformation, portfolio"
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
                <Award className="w-4 h-4 text-brand-orange-500" />
                <span className="text-sm font-medium text-brand-orange-500">Success Stories</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Real Results for
                <span className="block text-brand-orange-500">Real Businesses</span>
              </h1>

              <p className="text-xl text-brand-beige-100/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover how we've helped businesses across industries achieve remarkable growth
                through strategic digital marketing and brand transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-brand-gray-200 sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex items-center gap-2 text-brand-gray-600 font-medium flex-shrink-0">
                <Filter className="w-5 h-5" />
                <span>Industry:</span>
              </div>
              <div className="flex gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      selectedIndustry === industry
                        ? "bg-brand-orange-500 text-white"
                        : "bg-brand-beige-100 text-brand-gray-700 hover:bg-brand-gray-200"
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-beige-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-8">
                <Sparkles className="w-5 h-5 text-brand-orange-500" />
                <h2 className="text-2xl font-bold text-brand-blue-900">Featured Success Story</h2>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden border-2 border-brand-orange-500 shadow-xl">
                {/* Header */}
                <div className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 p-8 lg:p-12 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-brand-orange-500 text-white text-sm font-medium">
                      {featuredCaseStudy.industry}
                    </span>
                    <span className="text-brand-green-300 font-semibold text-sm">Featured Case Study</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    {featuredCaseStudy.title}
                  </h3>
                  <p className="text-lg text-brand-beige-100/90 mb-2">Client: {featuredCaseStudy.client}</p>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                      <h4 className="text-lg font-bold text-brand-blue-900 mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-brand-orange-500" />
                        The Challenge
                      </h4>
                      <p className="text-brand-gray-600 leading-relaxed">{featuredCaseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-brand-blue-900 mb-3 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-brand-orange-500" />
                        Our Solution
                      </h4>
                      <p className="text-brand-gray-600 leading-relaxed">{featuredCaseStudy.solution}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {featuredCaseStudy.metrics.map((metric, index) => {
                      const Icon = metric.icon;
                      return (
                        <div
                          key={index}
                          className="bg-brand-beige-100 p-6 rounded-xl border-2 border-brand-gray-200 text-center"
                        >
                          <div className="w-12 h-12 rounded-lg bg-brand-orange-500 flex items-center justify-center mx-auto mb-4">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-3xl font-bold text-brand-blue-900 mb-2">{metric.value}</div>
                          <div className="text-sm text-brand-gray-600">{metric.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 p-8 rounded-xl text-white">
                    <div className="flex items-start gap-4">
                      <div className="text-6xl text-brand-orange-500 leading-none">"</div>
                      <div>
                        <p className="text-lg italic mb-4 leading-relaxed">
                          {featuredCaseStudy.testimonial.quote}
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-brand-orange-500 flex items-center justify-center">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="font-bold">{featuredCaseStudy.testimonial.author}</div>
                            <div className="text-sm text-brand-beige-100/80">
                              {featuredCaseStudy.testimonial.position}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-brand-blue-900 mb-2">More Success Stories</h2>
              <p className="text-brand-gray-600">
                {filteredCaseStudies.length} case {filteredCaseStudies.length !== 1 ? "studies" : "study"} found
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-brand-beige-100 rounded-xl overflow-hidden border-2 border-transparent hover:border-brand-orange-500 hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-brand-blue-900 to-brand-blue-700 flex items-center justify-center">
                    <Briefcase className="w-16 h-16 text-brand-orange-500/30" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 rounded-full bg-brand-blue-900 text-white text-xs font-medium">
                        {study.industry}
                      </span>
                      <Award className="w-5 h-5 text-brand-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue-900 mb-2 group-hover:text-brand-orange-500 transition-colors leading-tight">
                      {study.client}
                    </h3>
                    <h4 className="text-base font-semibold text-brand-gray-700 mb-3 leading-tight">
                      {study.title}
                    </h4>
                    <p className="text-brand-gray-600 mb-4 leading-relaxed text-sm">
                      {study.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-4 p-4 bg-white rounded-lg">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-brand-orange-500">{value}</div>
                          <div className="text-xs text-brand-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="space-y-2 mb-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-brand-gray-600">{result}</span>
                        </div>
                      ))}
                    </div>

                    {/* Services */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded-full bg-brand-beige-200 text-brand-gray-700 text-xs"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      className="text-brand-orange-500 hover:text-brand-orange-600 p-0 h-auto font-semibold group/btn w-full justify-start"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Track Record</h2>
              <p className="text-lg text-brand-beige-100/90 max-w-2xl mx-auto">
                Numbers that demonstrate our commitment to delivering exceptional results.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Briefcase, value: "200+", label: "Successful Projects" },
                { icon: Users, value: "150+", label: "Happy Clients" },
                { icon: TrendingUp, value: "350%", label: "Average ROI" },
                { icon: Award, value: "45+", label: "Industry Awards" },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-orange-500 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-brand-orange-500 mb-2">{stat.value}</div>
                    <div className="text-brand-beige-100/90">{stat.label}</div>
                  </motion.div>
                );
              })}
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
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Let's discuss how we can help your business achieve remarkable results through
                strategic digital marketing and brand transformation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-brand-blue-900 hover:bg-brand-blue-800 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Start Your Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-orange-500 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Schedule Consultation
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
