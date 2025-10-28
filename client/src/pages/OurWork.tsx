import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Play, ExternalLink, Eye, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function OurWork() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "branding", label: "Branding" },
    { id: "social", label: "Social Media" },
    { id: "video", label: "Video Production" },
    { id: "web", label: "Web Design" },
    { id: "graphics", label: "Graphic Design" },
  ];

  const projects = [
    {
      id: 1,
      title: "TechCorp Brand Redesign",
      category: "branding",
      client: "TechCorp International",
      description:
        "Complete brand identity overhaul including logo, guidelines, and marketing collateral",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
      tags: ["Branding", "Identity", "Print"],
      results: "+250% brand recognition",
    },
    {
      id: 2,
      title: "Fashion Campaign 2024",
      category: "social",
      client: "Luxe Fashion",
      description:
        "Multi-platform social media campaign reaching millions of engaged users",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop",
      tags: ["Social Media", "Content", "Strategy"],
      results: "5M+ impressions",
    },
    {
      id: 3,
      title: "Product Launch Video",
      category: "video",
      client: "InnovateTech",
      description:
        "High-impact product launch video with 3D animations and storytelling",
      image:
        "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&auto=format&fit=crop",
      tags: ["Video", "Animation", "Production"],
      results: "2M+ views in 48hrs",
      isVideo: true,
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      category: "web",
      client: "ShopHub",
      description:
        "Modern, conversion-optimized e-commerce website with seamless UX",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      tags: ["Web Design", "UX/UI", "Development"],
      results: "+180% conversions",
    },
    {
      id: 5,
      title: "Restaurant Branding Suite",
      category: "branding",
      client: "Gourmet Bistro",
      description:
        "Full branding package including logo, menu design, and interior graphics",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
      tags: ["Branding", "Print", "Packaging"],
      results: "Featured in design awards",
    },
    {
      id: 6,
      title: "Instagram Campaign Series",
      category: "social",
      client: "FitLife Wellness",
      description:
        "30-day Instagram content series driving engagement and community growth",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
      tags: ["Social Media", "Content", "Photography"],
      results: "+300% engagement rate",
    },
    {
      id: 7,
      title: "Corporate Documentary",
      category: "video",
      client: "Global Enterprises",
      description:
        "Professional corporate documentary highlighting company culture and values",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop",
      tags: ["Video", "Documentary", "Production"],
      results: "Used in recruitment drive",
      isVideo: true,
    },
    {
      id: 8,
      title: "Marketing Collateral Design",
      category: "graphics",
      client: "Summit Consulting",
      description:
        "Complete suite of marketing materials including brochures, presentations, and infographics",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop",
      tags: ["Graphic Design", "Print", "Presentation"],
      results: "Improved sales materials",
    },
    {
      id: 9,
      title: "SaaS Platform Interface",
      category: "web",
      client: "CloudSync",
      description: "Clean, intuitive dashboard design for B2B SaaS platform",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      tags: ["Web Design", "UX/UI", "Dashboard"],
      results: "+95% user satisfaction",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Our Work - Portfolio | DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Explore our portfolio of award-winning creative projects. From branding to video production, see how we've helped brands tell their stories."
        />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-brand-blue-900 text-brand-beige-100 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,117,31,0.08),transparent_50%)]" />

        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-sm md:text-base text-brand-orange uppercase tracking-wider font-semibold mb-4">
              Our Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our Creative <span className="text-brand-orange">Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-gray-400 mb-8 leading-relaxed">
              Explore our collection of award-winning work that has helped
              brands across industries tell their stories, engage audiences, and
              achieve remarkable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-brand-beige-100 sticky top-20 z-40 border-b border-brand-gray-300 shadow-brand">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex items-center gap-3 mb-4 lg:mb-0">
            <Filter className="w-5 h-5 text-brand-gray-600" />
            <span className="text-sm font-semibold text-brand-gray-700 uppercase tracking-wide">
              Filter by:
            </span>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-brand-orange text-white shadow-brand-lg scale-105"
                    : "bg-white text-brand-gray-700 hover:bg-brand-gray-100 border border-brand-gray-300 hover:border-brand-orange/50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-brand-beige-100">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white border border-brand-gray-300 rounded-2xl overflow-hidden hover:border-brand-orange/50 transition-all duration-300 hover:shadow-brand-xl hover:scale-[1.02]"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden bg-brand-gray-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900 via-brand-blue-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Video Play Icon */}
                    {project.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-brand-lg">
                          <Play
                            className="w-8 h-8 text-white ml-1"
                            fill="white"
                          />
                        </div>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-blue-900/70">
                      <div className="flex gap-3">
                        <button className="bg-white text-brand-blue-900 p-3 rounded-full hover:bg-brand-orange hover:text-white transition-colors duration-300 shadow-brand">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="bg-white text-brand-blue-900 p-3 rounded-full hover:bg-brand-orange hover:text-white transition-colors duration-300 shadow-brand">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="text-sm text-brand-orange font-semibold mb-2 uppercase tracking-wide">
                      {project.client}
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue-900 mb-3 group-hover:text-brand-orange transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-brand-gray-700 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-brand-beige-100 text-brand-gray-700 text-xs rounded-full border border-brand-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="pt-4 border-t border-brand-gray-300">
                      <div className="text-xs text-brand-gray-600 mb-1 uppercase tracking-wide">
                        Results
                      </div>
                      <div className="text-brand-green font-semibold">
                        {project.results}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-brand-gray-600 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}

          {/* Load More Button */}
          {filteredProjects.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 text-lg"
              >
                Load More Projects
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-blue-900">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Awards Won" },
              { number: "30+", label: "Countries Served" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green mb-2">
                  {stat.number}
                </div>
                <div className="text-brand-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-brand-beige-100">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-6xl text-brand-orange mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl text-brand-blue-900 font-light mb-8 leading-relaxed">
              Digiteller Creative transformed our brand identity and helped us
              stand out in a crowded market. Their creativity and attention to
              detail is unmatched.
            </blockquote>
            <div className="text-brand-gray-700">
              <div className="font-semibold text-brand-blue-900 mb-1 text-lg">
                Sarah Johnson
              </div>
              <div className="text-sm">CEO, TechCorp International</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-brand-beige-50 to-brand-beige-100">
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
                Ready to Create Your{" "}
                <span className="text-brand-orange">Success Story?</span>
              </h2>
              <p className="text-xl text-brand-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help your brand achieve similar results
                and make an impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/917998596948"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="cta" size="lg" className="text-lg px-8">
                    Start Your Project
                  </Button>
                </a>
                <a href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-brand-beige-100 text-brand-beige-100 hover:bg-brand-beige-100 hover:text-brand-blue-900 text-lg px-8"
                  >
                    Get in Touch
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
