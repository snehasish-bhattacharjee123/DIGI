import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  BookOpen,
  Calendar,
  Clock,
  Tag,
  Search,
  TrendingUp,
  User,
  ArrowRight,
  Filter,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Digital Marketing",
    "Brand Strategy",
    "Design Trends",
    "SEO & Analytics",
    "Social Media",
    "Content Marketing",
    "Case Studies",
    "Industry News",
  ];

  const featuredPost = {
    title: "The Future of Digital Marketing in 2025: AI, Personalization, and Beyond",
    excerpt: "Explore the emerging trends reshaping digital marketing, from AI-powered personalization to immersive experiences that engage audiences like never before.",
    author: "Sarah Johnson",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Digital Marketing",
    image: "featured-blog.jpg",
    featured: true,
  };

  const blogPosts = [
    {
      title: "10 Brand Identity Mistakes That Are Costing You Customers",
      excerpt: "Learn about common brand identity pitfalls and how to avoid them to create a stronger, more memorable brand presence.",
      author: "Michael Chen",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "Brand Strategy",
      image: "blog-1.jpg",
    },
    {
      title: "How to Optimize Your Website for Voice Search in 2025",
      excerpt: "Voice search is changing SEO. Discover strategies to optimize your content for voice assistants and conversational queries.",
      author: "Emily Rodriguez",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "SEO & Analytics",
      image: "blog-2.jpg",
    },
    {
      title: "The Psychology of Color in Social Media Marketing",
      excerpt: "Understanding how colors influence emotions and behaviors can dramatically improve your social media engagement rates.",
      author: "David Park",
      date: "January 8, 2025",
      readTime: "5 min read",
      category: "Social Media",
      image: "blog-3.jpg",
    },
    {
      title: "Case Study: How We Increased ROI by 300% for E-commerce Client",
      excerpt: "A deep dive into our comprehensive digital strategy that tripled return on investment for a growing e-commerce brand.",
      author: "Sarah Johnson",
      date: "January 5, 2025",
      readTime: "10 min read",
      category: "Case Studies",
      image: "blog-4.jpg",
    },
    {
      title: "Content Marketing Trends You Can't Ignore This Year",
      excerpt: "From interactive content to micro-moments, discover the content marketing strategies that drive real results.",
      author: "Lisa Wang",
      date: "January 3, 2025",
      readTime: "6 min read",
      category: "Content Marketing",
      image: "blog-5.jpg",
    },
    {
      title: "Design Systems: Building Consistency at Scale",
      excerpt: "Learn how to create and implement design systems that ensure brand consistency across all touchpoints.",
      author: "Alex Turner",
      date: "December 30, 2024",
      readTime: "8 min read",
      category: "Design Trends",
      image: "blog-6.jpg",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Blog | Digital Marketing Insights & Strategies | DIGI</title>
        <meta
          name="description"
          content="Stay updated with the latest digital marketing trends, strategies, and insights from DIGI's expert team. Learn how to grow your brand online."
        />
        <meta
          name="keywords"
          content="digital marketing blog, marketing insights, brand strategy, SEO tips, content marketing, design trends"
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
                <BookOpen className="w-4 h-4 text-brand-orange-500" />
                <span className="text-sm font-medium text-brand-orange-500">DIGI Blog</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Insights & Strategies for
                <span className="block text-brand-orange-500">Digital Success</span>
              </h1>

              <p className="text-xl text-brand-beige-100/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Expert insights, actionable strategies, and the latest trends in digital marketing,
                branding, and design to help your business thrive online.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-gray-500" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white text-brand-blue-900 placeholder-brand-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-brand-gray-200 sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex items-center gap-2 text-brand-gray-600 font-medium flex-shrink-0">
                <Filter className="w-5 h-5" />
                <span>Filter:</span>
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === category
                        ? "bg-brand-orange-500 text-white"
                        : "bg-brand-beige-100 text-brand-gray-700 hover:bg-brand-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
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
                <h2 className="text-2xl font-bold text-brand-blue-900">Featured Article</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl overflow-hidden border-2 border-brand-orange-500 hover:shadow-xl transition-all duration-300">
                <div className="h-full min-h-[400px] bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 flex items-center justify-center">
                  <BookOpen className="w-32 h-32 text-brand-orange-500/30" />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-brand-orange-500 text-white text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-brand-green-600 font-semibold text-sm">Featured</span>
                  </div>
                  <h3 className="text-3xl font-bold text-brand-blue-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-brand-gray-600 mb-6 leading-relaxed text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-brand-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-semibold group">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
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
              <h2 className="text-3xl font-bold text-brand-blue-900 mb-2">Latest Articles</h2>
              <p className="text-brand-gray-600">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
              </p>
            </motion.div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <Search className="w-16 h-16 text-brand-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-blue-900 mb-2">No articles found</h3>
                <p className="text-brand-gray-600 mb-6">Try adjusting your search or filters</p>
                <Button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-brand-beige-100 rounded-xl overflow-hidden border-2 border-transparent hover:border-brand-orange-500 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-brand-blue-900 to-brand-blue-700 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-brand-orange-500/30" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 rounded-full bg-brand-blue-900 text-white text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-brand-blue-900 mb-3 group-hover:text-brand-orange-500 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-brand-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-brand-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-brand-gray-500 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <Button
                        variant="ghost"
                        className="text-brand-orange-500 hover:text-brand-orange-600 p-0 h-auto font-semibold group/btn"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {filteredPosts.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="text-center mt-12"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-brand-blue-900 text-brand-blue-900 hover:bg-brand-blue-900 hover:text-white px-8"
                >
                  Load More Articles
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
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
                Never Miss an Update
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Subscribe to our newsletter for weekly insights, tips, and strategies delivered to your inbox.
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
                Join 10,000+ marketers getting weekly insights. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
