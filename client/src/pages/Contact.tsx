import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      value: "digitellercreative@gmail.com",
      link: "mailto:digitellercreative@gmail.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91-7998596948",
      link: "tel:+917998596948",
      description: "Mon-Fri from 9am to 6pm IST",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "+91-7998596948",
      link: "https://wa.me/917998596948",
      description: "Chat with us instantly",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "E-79, Ramgarh, Kolkata 700047",
      link: "https://maps.google.com/?q=E-79,Ramgarh,Kolkata",
      description: "Come say hello at our office",
    },
  ];

  const services = [
    "Brand Identity",
    "Graphic Design",
    "UI/UX Design",
    "Social Media Marketing",
    "Content Marketing",
    "SEO & Analytics",
    "Video Production",
    "Animation",
    "Photography",
    "Enterprise Solutions",
    "Other",
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://instagram.com/digitellercreative",
      color: "hover:text-pink-500",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/company/digitellercreative",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://twitter.com/digitellercreative",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Get in touch with DIGITELLER CREATIVE. Contact us for creative services, brand identity, graphic design, and digital marketing solutions."
        />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(139,92,246,0.15),transparent_50%)]" />

        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Let's Create Something <span className="text-primary">Amazing Together</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Have a project in mind? Want to discuss how we can help your brand grow?
              We'd love to hear from you. Reach out and let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith("http") ? "_blank" : undefined}
                rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-black/50 border border-gray-800 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                <p className="text-primary font-medium mb-2">{method.value}</p>
                <p className="text-gray-400 text-sm">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-400 text-sm">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm">
                    Something went wrong. Please try again or contact us directly via email or phone.
                  </div>
                )}
              </form>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-white">Office Hours</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-gray-800 text-sm text-gray-400">
                    All times are in Indian Standard Time (IST)
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Follow Us</h3>
                <p className="text-gray-300 mb-6">
                  Stay connected and see our latest work on social media
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:border-primary/50 hover:transform hover:scale-110`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-br from-primary/10 to-purple-600/10 border border-primary/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Need a Quick Response?</h3>
                <p className="text-gray-300 mb-6">
                  For urgent inquiries, WhatsApp is the fastest way to reach us. We typically respond within minutes during business hours.
                </p>
                <a
                  href="https://wa.me/917998596948"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - can be enabled when needed) */}
      <section className="py-20 bg-black">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Visit Our Studio</h2>
            <p className="text-xl text-gray-400">
              We're located in Kolkata, India. Drop by for a coffee and let's discuss your project in person.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-gray-400">
                E-79, Ramgarh, Kolkata 700047, India
              </p>
              <a
                href="https://maps.google.com/?q=E-79,Ramgarh,Kolkata"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary hover:text-primary/80 transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  What's your typical response time?
                </h3>
                <p className="text-gray-400">
                  We aim to respond to all inquiries within 24 hours during business days. For urgent matters, WhatsApp is the fastest way to reach us.
                </p>
              </div>
              <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  Do you work with international clients?
                </h3>
                <p className="text-gray-400">
                  Absolutely! We've worked with clients across 30+ countries and are experienced in remote collaboration across different time zones.
                </p>
              </div>
              <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  What information should I include in my inquiry?
                </h3>
                <p className="text-gray-400">
                  Tell us about your project goals, timeline, budget range, and any specific requirements. The more details you provide, the better we can help you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
