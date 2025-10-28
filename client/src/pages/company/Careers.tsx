import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Briefcase,
  Heart,
  Zap,
  Users,
  TrendingUp,
  Coffee,
  Home,
  GraduationCap,
  Sparkles,
  Globe,
  Clock,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Filter,
} from "lucide-react";
import { useState } from "react";

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const departments = ["All", "Design", "Development", "Marketing", "Video Production", "Strategy"];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance bonuses and equity options.",
    },
    {
      icon: Home,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours that fit your lifestyle and productivity peaks.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Unlimited access to courses, conferences, and certifications to grow your skills.",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs.",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Generous PTO, paid holidays, and sabbatical opportunities for long-term team members.",
    },
    {
      icon: Users,
      title: "Amazing Team",
      description: "Collaborate with talented, passionate professionals who love what they do.",
    },
  ];

  const cultureValues = [
    {
      icon: Sparkles,
      title: "Creativity First",
      description: "We celebrate bold ideas and encourage everyone to think outside the box.",
    },
    {
      icon: Zap,
      title: "Move Fast",
      description: "Agile processes and quick decision-making keep us ahead of the curve.",
    },
    {
      icon: Users,
      title: "Collaborate Openly",
      description: "Transparent communication and teamwork are at our core.",
    },
    {
      icon: TrendingUp,
      title: "Grow Together",
      description: "Your growth is our growth. We invest in your career development.",
    },
  ];

  const openPositions = [
    {
      title: "Senior Brand Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Lead brand identity projects for global clients, crafting visual systems that tell compelling stories.",
      requirements: ["5+ years in brand design", "Portfolio showcasing brand work", "Figma/Adobe expertise"],
    },
    {
      title: "Frontend Developer",
      department: "Development",
      location: "Kolkata / Remote",
      type: "Full-time",
      description: "Build beautiful, responsive web experiences using React, TypeScript, and modern frameworks.",
      requirements: ["3+ years React experience", "TypeScript proficiency", "Strong CSS/Tailwind skills"],
    },
    {
      title: "Social Media Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Develop and execute social media strategies that drive engagement and brand awareness.",
      requirements: ["3+ years social media marketing", "Analytics expertise", "Content creation skills"],
    },
    {
      title: "Video Editor",
      department: "Video Production",
      location: "Kolkata",
      type: "Full-time",
      description: "Edit compelling video content for brands across multiple platforms and formats.",
      requirements: ["4+ years video editing", "Premiere Pro/After Effects", "Motion graphics skills"],
    },
    {
      title: "Content Strategist",
      department: "Strategy",
      location: "Remote",
      type: "Full-time",
      description: "Develop content strategies that align with business goals and audience needs.",
      requirements: ["4+ years content strategy", "SEO knowledge", "Data-driven approach"],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Design intuitive user experiences for web and mobile applications.",
      requirements: ["3+ years UI/UX design", "User research experience", "Prototyping skills"],
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Mumbai / Remote",
      type: "Full-time",
      description: "Execute multi-channel digital campaigns that drive measurable results for clients.",
      requirements: ["2+ years digital marketing", "Google Ads/Facebook Ads", "Analytics tools"],
    },
    {
      title: "Motion Graphics Designer",
      department: "Design",
      location: "Remote",
      type: "Contract",
      description: "Create engaging motion graphics and animations for digital campaigns and brand content.",
      requirements: ["3+ years motion design", "After Effects expert", "Strong portfolio"],
    },
  ];

  const filteredPositions = openPositions.filter(
    (position) => selectedDepartment === "All" || position.department === selectedDepartment
  );

  const applicationProcess = [
    {
      step: "01",
      title: "Apply Online",
      description: "Submit your resume, portfolio, and a brief cover letter telling us why you're excited about this role.",
    },
    {
      step: "02",
      title: "Initial Screening",
      description: "Our team reviews your application and reaches out to qualified candidates within 5-7 days.",
    },
    {
      step: "03",
      title: "Portfolio Review",
      description: "We'll dive deep into your work, discussing your process, challenges, and creative thinking.",
    },
    {
      step: "04",
      title: "Team Interview",
      description: "Meet the team you'll be working with and get a feel for our culture and collaboration style.",
    },
    {
      step: "05",
      title: "Skills Assessment",
      description: "Depending on the role, we may ask you to complete a brief project or technical challenge.",
    },
    {
      step: "06",
      title: "Final Decision",
      description: "We'll make our decision and extend an offer, typically within 2-3 weeks of your first interview.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Careers | Join Our Creative Team | DIGI</title>
        <meta
          name="description"
          content="Join DIGITELLER CREATIVE and work on exciting projects with a talented team. Explore career opportunities in design, development, marketing, and more."
        />
        <meta
          name="keywords"
          content="careers, jobs, creative jobs, design jobs, developer jobs, marketing jobs, remote work"
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
                <Briefcase className="w-4 h-4 text-brand-orange-500" />
                <span className="text-sm font-medium text-brand-orange-500">Join Our Team</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Build Your Career with
                <span className="block text-brand-orange-500">Award-Winning Creatives</span>
              </h1>

              <p className="text-xl text-brand-beige-100/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join a team of passionate creators, strategists, and innovators who are
                redefining what's possible in digital marketing and brand storytelling.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View Open Positions
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Culture Section */}
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
                Our Culture & Values
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                We're more than just a workplace. We're a community of passionate people
                who love what they do and support each other's growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cultureValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-brand-beige-100 border-2 border-transparent hover:border-brand-orange-500 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-brand-blue-900 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-brand-orange-500" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-blue-900 mb-2">{value.title}</h3>
                    <p className="text-brand-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                Benefits & Perks
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                We invest in our team's wellbeing, growth, and happiness.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
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
                    <div className="w-14 h-14 rounded-lg bg-brand-orange-500 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue-900 mb-3">{benefit.title}</h3>
                    <p className="text-brand-gray-600 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue-900 mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto mb-8">
                Find your next opportunity and join a team that values your talent and ambition.
              </p>

              {/* Department Filter */}
              <div className="flex items-center justify-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex items-center gap-2 text-brand-gray-600 font-medium flex-shrink-0">
                  <Filter className="w-5 h-5" />
                  <span>Filter:</span>
                </div>
                <div className="flex gap-2">
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      onClick={() => setSelectedDepartment(dept)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                        selectedDepartment === dept
                          ? "bg-brand-orange-500 text-white"
                          : "bg-brand-beige-100 text-brand-gray-700 hover:bg-brand-gray-200"
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              {filteredPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group p-8 rounded-xl bg-brand-beige-100 border-2 border-transparent hover:border-brand-orange-500 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-brand-blue-900 group-hover:text-brand-orange-500 transition-colors">
                          {position.title}
                        </h3>
                        <span className="px-3 py-1 rounded-full bg-brand-blue-900 text-white text-xs font-medium">
                          {position.department}
                        </span>
                      </div>
                      <p className="text-brand-gray-600 mb-4 leading-relaxed">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-brand-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-brand-gray-600">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-semibold group/btn w-full lg:w-auto">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredPositions.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="w-16 h-16 text-brand-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-blue-900 mb-2">No positions found</h3>
                <p className="text-brand-gray-600 mb-6">Try adjusting your filters</p>
                <Button
                  onClick={() => setSelectedDepartment("All")}
                  className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Application Process Section */}
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Hiring Process
              </h2>
              <p className="text-lg text-brand-beige-100/90 max-w-2xl mx-auto">
                Transparent, respectful, and designed to help you showcase your best work.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applicationProcess.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <div className="text-4xl font-bold text-brand-orange-500 mb-3">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-brand-beige-100/80 text-sm leading-relaxed">{item.description}</p>
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
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                We're always looking for talented people to join our team. Send us your resume
                and portfolio, and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-brand-blue-900 hover:bg-brand-blue-800 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Send General Application
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-orange-500 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Contact HR Team
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
