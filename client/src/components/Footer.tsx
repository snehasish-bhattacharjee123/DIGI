"use client";

import { Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Design", href: "/services/graphic-design" },
        { label: "Video & Motion", href: "/services/video-production" },
        { label: "Web Development", href: "/services/ui-ux-design" },
        { label: "Creative Strategy", href: "/services/brand-identity" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Help Center", href: "/help" },
        { label: "API Docs", href: "/api-docs" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy-policy" },
        { label: "Terms", href: "/terms" },
        { label: "Security", href: "/security" },
        { label: "Cookies", href: "/cookies" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/digitellercreative",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/digitellercreative",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/digitellercreative",
      label: "Instagram",
    },
  ];

  return (
    <footer
      className="relative text-brand-gray-300 overflow-hidden"
      style={{
        backgroundImage: "url('/images/footer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Organic Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-32 md:h-44"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,160 C240,80 480,240 720,160 C960,80 1200,240 1440,160 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-[1680px] mx-auto px-6 md:px-10 lg:px-16 py-24">
        {/* Header Text */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-beige-100 tracking-wide">
            Let’s Create Something Legendary
          </h2>
          <p className="mt-4 text-brand-gray-300 text-sm md:text-base max-w-xl mx-auto">
            We craft stories, brands, and experiences that move people and shape
            cultures.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-3 text-brand-beige-100 tracking-wide">
              DIGITELLER CREATIVE
            </h3>
            <p className="text-brand-green text-sm mb-6 font-medium">
              Tailor of Tales
            </p>

            <div className="text-sm space-y-2 mb-6">
              <p>
                <strong className="text-brand-beige-100">Phone:</strong>{" "}
                +91-7998596948
              </p>
              <p>
                <strong className="text-brand-beige-100">Email:</strong>{" "}
                digitellercreative@gmail.com
              </p>
              <p>
                <strong className="text-brand-beige-100">Address:</strong> E-79,
                Ramgarh, Kolkata 700047
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gray-400 hover:text-brand-orange transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-brand-beige-100 text-lg">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-brand-gray-300 hover:text-brand-orange transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-gray-300">
            © {new Date().getFullYear()} DIGITELLER CREATIVE. All rights
            reserved.
          </p>
          <p className="text-sm text-brand-gray-300 flex items-center gap-2">
            Made with <span className="text-brand-orange">❤️</span> worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
