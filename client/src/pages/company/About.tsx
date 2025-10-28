import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Target,
  Heart,
  Sparkles,
  Users,
  Award,
  Globe,
  TrendingUp,
  Zap,
  Shield,
  CheckCircle2,
  Lightbulb,
  Rocket,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "We pour our hearts into every project, treating your brand as if it were our own.",
    },
    {
      icon: Lightbulb,
      title: "Creative Excellence",
      description: "Innovation and creativity are at the core of everything we create and deliver.",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Honest communication and reliable partnerships built on mutual respect.",
    },
    {
      icon: Rocket,
      title: "Results-Focused",
      description: "We measure success by your growth and the tangible results we deliver.",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Your vision combined with our expertise creates something extraordinary.",
    },
    {
      icon: Zap,
      title: "Agile & Adaptive",
      description: "Quick to respond, fast to deliver, always ahead of industry trends.",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Founded in Kolkata with a vision to transform how brands tell their stories through digital media.",
    },
    {
      year: "2019",
      title: "Building Momentum",
      description: "Expanded our services to include comprehensive digital marketing and brand strategy.",
    },
    {
      year: "2020",
      title: "Going Virtual",
      description: "Adapted to remote collaboration, serving clients globally while maintaining creative excellence.",
    },
    {
      year: "2021",
      title: "Scaling Up",
      description: "Grew our team to 25+ creative professionals and launched our video production division.",
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Won multiple awards for brand identity and digital campaigns across various industries.",
    },
    {
      year: "2023",
      title: "Innovation Hub",
      description: "Launched our AI-powered creative tools and established partnerships with global brands.",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Opened offices in Mumbai and Bangalore, serving 200+ clients across 15 countries.",
    },
    {
      year: "2025",
      title: "Future Forward",
      description: "Continuing to push boundaries in creative technology and sustainable brand building.",
    },
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Creative Director",
      description: "15+ years shaping brand narratives",
    },
    {
      name: "Priya Sharma",
      role: "Head of Design",
      description: "Award-winning visual storyteller",
    },
    {
      name: "Amit Patel",
      role: "Technical Director",
      description: "Building digital experiences that scale",
    },
    {
      name: "Sneha Reddy",
      role: "Strategy Lead",
      description: "Data-driven marketing strategist",
    },
    {
      name: "Vikram Singh",
      role: "Video Production Head",
      description: "Crafting compelling visual stories",
    },
    {
      name: "Aisha Khan",
      role: "Client Success Manager",
      description: "Ensuring every client thrives",
    },
  ];

  const stats = [
    { icon: Users, value: "200+", label: "Happy Clients" },
    { icon: Award, value: "45+", label: "Industry Awards" },
    { icon: Globe, value: "15+", label: "Countries Served" },
    { icon: TrendingUp, value: "350%", label: "Average ROI" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>About Us | Our Story & Team | DIGI</title>
        <meta
          name="description"
          content="Learn about DIGI's mission, values, and the passionate team behind award-winning creative work. Discover how we're transforming brands through storytelling."
        />
        <meta
          name="keywords"
          content="about us, company story, creative team, brand agency, digital marketing team"
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
                <Sparkles className="w-4 h-4 text-brand-orange-500" />
                <span className="text-sm font-medium text-brand-orange-500">About DIGITELLER CREATIVE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                We're Not Just Creatives,
                <span className="block text-brand-orange-500">We're Your Growth Partners</span>
              </h1>

              <p className="text-xl text-brand-beige-100/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Since 2018, we've been crafting compelling brand stories that resonate,
                inspire action, and drive measurable business growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-brand-orange-500 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-brand-blue-900">Our Mission</h2>
                </div>
                <p className="text-lg text-brand-gray-600 mb-6 leading-relaxed">
                  To empower businesses with creative solutions that don't just look beautiful,
                  but drive real, measurable results. We believe every brand has a unique story
                  worth telling, and we're here to help you tell it in the most compelling way possible.
                </p>
                <p className="text-lg text-brand-gray-600 leading-relaxed">
                  We combine strategic thinking with creative excellence to build brands that
                  stand out, connect with audiences, and achieve sustainable growth in an
                  increasingly competitive digital landscape.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 p-12 rounded-2xl text-white"
              >
                <h3 className="text-2xl font-bold mb-6 text-brand-orange-500">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    "Data-driven creativity that delivers ROI",
                    "Award-winning team of specialists",
                    "Proven track record across industries",
                    "Transparent pricing and communication",
                    "Agile approach to project delivery",
                    "Long-term partnership mindset",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-brand-green-300 flex-shrink-0 mt-0.5" />
                      <span className="text-brand-beige-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                Our Core Values
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                The principles that guide every decision we make and every project we undertake.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
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
                    <h3 className="text-xl font-bold text-brand-blue-900 mb-3">{value.title}</h3>
                    <p className="text-brand-gray-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
              <p className="text-lg text-brand-beige-100/90 max-w-2xl mx-auto">
                Results that speak louder than words.
              </p>
            </motion.div>

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

        {/* Timeline Section */}
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
                Our Journey
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                From a small startup to a globally recognized creative agency.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-orange-500/30 hidden md:block" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="relative pl-0 md:pl-24"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-brand-orange-500 border-4 border-white hidden md:block" />

                    <div className="bg-brand-beige-100 p-6 rounded-xl border-2 border-brand-gray-200 hover:border-brand-orange-500 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-3xl font-bold text-brand-orange-500">{item.year}</span>
                        <h3 className="text-xl font-bold text-brand-blue-900">{item.title}</h3>
                      </div>
                      <p className="text-brand-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
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
                Meet Our Leadership
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                The passionate minds driving innovation and excellence at DIGITELLER CREATIVE.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-xl overflow-hidden border-2 border-brand-gray-200 hover:border-brand-orange-500 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="h-64 bg-gradient-to-br from-brand-blue-900 to-brand-blue-700 flex items-center justify-center">
                    <Users className="w-24 h-24 text-brand-orange-500/30" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-blue-900 mb-2">{member.name}</h3>
                    <p className="text-brand-orange-500 font-semibold mb-3">{member.role}</p>
                    <p className="text-brand-gray-600 text-sm">{member.description}</p>
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
                Ready to Work with Us?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Let's create something extraordinary together. Join 200+ brands that trust us
                to tell their stories and drive their growth.
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
                  View Our Work
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
