import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  User,
  Building2,
  Briefcase,
  Globe,
  CheckCircle2,
  Instagram,
  Linkedin,
  Twitter,
  Calendar,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const offices = [
    {
      city: "Kolkata",
      type: "Headquarters",
      address: "E-79, Ramgarh, Kolkata 700047, West Bengal",
      phone: "+91-7998596948",
      email: "digitellercreative@gmail.com",
      hours: "Mon-Fri: 9 AM - 6 PM IST",
    },
    {
      city: "Mumbai",
      type: "Branch Office",
      address: "Coming Soon - Opening Q2 2025",
      phone: "+91-7998596948",
      email: "mumbai@digitellercreative.com",
      hours: "Mon-Fri: 9 AM - 6 PM IST",
    },
    {
      city: "Bangalore",
      type: "Branch Office",
      address: "Coming Soon - Opening Q2 2025",
      phone: "+91-7998596948",
      email: "bangalore@digitellercreative.com",
      hours: "Mon-Fri: 9 AM - 6 PM IST",
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91-7998596948",
      description: "Mon-Fri, 9 AM - 6 PM IST",
      link: "tel:+917998596948",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "digitellercreative@gmail.com",
      description: "We respond within 24 hours",
      link: "mailto:digitellercreative@gmail.com",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      detail: "+91-7998596948",
      description: "Quick chat for urgent inquiries",
      link: "https://wa.me/917998596948",
    },
    {
      icon: Calendar,
      title: "Book a Meeting",
      detail: "Schedule a consultation",
      description: "30-minute discovery call",
      link: "#",
    },
  ];

  const services = [
    "Brand Identity Design",
    "Graphic Design",
    "UI/UX Design",
    "Social Media Marketing",
    "Content Marketing",
    "SEO & Analytics",
    "Video Production",
    "Animation",
    "Photography",
    "Other",
  ];

  const budgetRanges = [
    "Less than $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Not sure yet",
  ];

  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/digitellercreative" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/digitellercreative" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/digitellercreative" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Get in Touch | DIGI</title>
        <meta
          name="description"
          content="Get in touch with DIGITELLER CREATIVE. Contact us for inquiries about our services, project collaborations, or general questions. We're here to help."
        />
        <meta
          name="keywords"
          content="contact us, get in touch, inquiries, project consultation, creative agency contact"
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
                <MessageSquare className="w-4 h-4 text-brand-orange-500" />
                <span className="text-sm font-medium text-brand-orange-500">Get in Touch</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Let's Create Something
                <span className="block text-brand-orange-500">Amazing Together</span>
              </h1>

              <p className="text-xl text-brand-beige-100/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to elevate your brand? We're here to listen, collaborate, and bring your
                vision to life. Reach out and let's start the conversation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods Section */}
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
                Choose Your Preferred Way to Connect
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                Multiple ways to reach us. Pick what works best for you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.link}
                    target={method.link.startsWith("http") ? "_blank" : undefined}
                    rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group p-8 rounded-xl bg-brand-beige-100 hover:bg-white border-2 border-transparent hover:border-brand-orange-500 transition-all duration-300 hover:shadow-lg text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-blue-900 group-hover:bg-brand-orange-500 flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue-900 mb-2">{method.title}</h3>
                    <p className="text-brand-orange-500 font-semibold mb-2">{method.detail}</p>
                    <p className="text-sm text-brand-gray-600">{method.description}</p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-beige-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white p-8 md:p-12 rounded-2xl border-2 border-brand-gray-200 shadow-lg">
                  <h2 className="text-3xl font-bold text-brand-blue-900 mb-2">Send Us a Message</h2>
                  <p className="text-brand-gray-600 mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  {formStatus === "success" ? (
                    <div className="p-8 rounded-xl bg-brand-green-300/20 border-2 border-brand-green-600 text-center">
                      <CheckCircle2 className="w-16 h-16 text-brand-green-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-brand-blue-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-brand-gray-600 mb-6">
                        Thank you for reaching out. We'll respond to your inquiry within 24 hours.
                      </p>
                      <Button
                        onClick={() => setFormStatus("idle")}
                        className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-brand-blue-900 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-gray-500" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-brand-gray-200 focus:border-brand-orange-500 focus:outline-none transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-brand-blue-900 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-gray-500" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-brand-gray-200 focus:border-brand-orange-500 focus:outline-none transition-colors"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-brand-blue-900 mb-2">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-gray-500" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-brand-gray-200 focus:border-brand-orange-500 focus:outline-none transition-colors"
                              placeholder="+91 99999 99999"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-brand-blue-900 mb-2">
                          Company Name
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-gray-500" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-brand-gray-200 focus:border-brand-orange-500 focus:outline-none transition-colors"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-brand-blue-900 mb-2">
                            Service Interested In
                          </label>
                          <div className="relative">
                            <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-gray-500" />
                            <select
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-brand-gray-200 focus:border-brand-orange-500 focus:outline-none transition-colors appearance-none bg-white"
                            >
                              <option value="">Select a service</option>
                              {services.map((service) => (
                                <option key={service} value={service}>
                                  {service}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-brand-blue-900 mb-2">
                            Project Budget
                          </label>
                          <div className="relative">
                            <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-gray-500" />
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-brand-gray-200 focus:border-brand-orange-500 focus:outline-none transition-colors appearance-none bg-white"
                            >
                              <option value="">Select budget range</option>
                              {budgetRanges.map((range) => (
                                <option key={range} value={range}>
                                  {range}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-brand-blue-900 mb-2">
                          Project Details *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg border-2 border-brand-gray-200 focus:border-brand-orange-500 focus:outline-none transition-colors resize-none"
                          placeholder="Tell us about your project, goals, and timeline..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={formStatus === "submitting"}
                        className="w-full bg-brand-orange-500 hover:bg-brand-orange-600 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 disabled:opacity-50"
                      >
                        {formStatus === "submitting" ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <p className="text-sm text-brand-gray-500 text-center">
                        By submitting this form, you agree to our{" "}
                        <a href="/privacy-policy" className="text-brand-orange-500 hover:underline">
                          Privacy Policy
                        </a>
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Contact Info & Offices */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-brand-blue-900 mb-6">Our Offices</h2>
                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <div
                        key={index}
                        className="p-6 rounded-xl bg-white border-2 border-brand-gray-200 hover:border-brand-orange-500 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-brand-blue-900 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-brand-orange-500" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-brand-blue-900">{office.city}</h3>
                            <span className="text-sm text-brand-orange-500 font-semibold">{office.type}</span>
                          </div>
                        </div>
                        <div className="space-y-3 text-sm text-brand-gray-600">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-gray-500" />
                            <span>{office.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-brand-gray-500" />
                            <a href={`tel:${office.phone}`} className="hover:text-brand-orange-500 transition-colors">
                              {office.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-brand-gray-500" />
                            <a href={`mailto:${office.email}`} className="hover:text-brand-orange-500 transition-colors">
                              {office.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-brand-gray-500" />
                            <span>{office.hours}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="p-8 rounded-xl bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white">
                  <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                  <p className="text-brand-beige-100/90 mb-6">
                    Stay connected and see our latest work, insights, and company updates.
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-lg bg-white/10 hover:bg-brand-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                          aria-label={social.label}
                        >
                          <Icon className="w-6 h-6" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Info */}
                <div className="p-8 rounded-xl bg-brand-orange-500/10 border-2 border-brand-orange-500/30">
                  <h3 className="text-xl font-bold text-brand-blue-900 mb-4">Quick Info</h3>
                  <ul className="space-y-3">
                    {[
                      "Response time: Within 24 hours",
                      "Free initial consultation: 30 minutes",
                      "Project quotes: Within 48 hours",
                      "Available worldwide (remote)",
                    ].map((info, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-brand-gray-700">{info}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
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
                Find Us on the Map
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                Visit our Kolkata headquarters or connect with us virtually from anywhere in the world.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-video rounded-2xl overflow-hidden border-4 border-brand-gray-200 bg-gradient-to-br from-brand-blue-900 to-brand-blue-700 flex items-center justify-center"
            >
              <div className="text-center text-white">
                <MapPin className="w-24 h-24 mx-auto mb-4 text-brand-orange-500/50" />
                <p className="text-xl font-semibold mb-2">Interactive Map</p>
                <p className="text-brand-beige-100/80">Map integration coming soon</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-beige-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-brand-gray-600">
                Quick answers to common questions about working with us.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "What's your typical project timeline?",
                  answer: "Project timelines vary based on scope and complexity. Typical projects range from 2-12 weeks. We'll provide a detailed timeline during our initial consultation.",
                },
                {
                  question: "Do you work with international clients?",
                  answer: "Absolutely! We serve clients across 15+ countries. Our remote-first approach and flexible scheduling make global collaboration seamless.",
                },
                {
                  question: "What's your pricing structure?",
                  answer: "We offer project-based and retainer pricing depending on your needs. After understanding your requirements, we'll provide a detailed quote within 48 hours.",
                },
                {
                  question: "Can you help with ongoing support after launch?",
                  answer: "Yes! We offer maintenance packages, ongoing optimization, and strategic consultation to ensure your continued success post-launch.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white border-2 border-brand-gray-200"
                >
                  <h3 className="text-lg font-bold text-brand-blue-900 mb-2">{faq.question}</h3>
                  <p className="text-brand-gray-600 leading-relaxed">{faq.answer}</p>
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
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Let's discuss your vision and create a strategy that drives real results.
                Book a free 30-minute consultation today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-brand-blue-900 hover:bg-brand-blue-800 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
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
