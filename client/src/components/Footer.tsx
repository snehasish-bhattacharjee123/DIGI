// "use client";

// import { Instagram, Linkedin, Twitter } from "lucide-react";
// import { motion } from "framer-motion";

// export function Footer() {
//   const footerSections = [
//     {
//       title: "Company",
//       links: [
//         { label: "About", href: "/about" },
//         { label: "Careers", href: "/careers" },
//         { label: "Press", href: "/press" },
//         { label: "Contact", href: "/contact" },
//       ],
//     },
//     {
//       title: "Services",
//       links: [
//         { label: "Design", href: "/services/graphic-design" },
//         { label: "Video & Motion", href: "/services/video-production" },
//         { label: "Web Development", href: "/services/ui-ux-design" },
//         { label: "Creative Strategy", href: "/services/brand-identity" },
//       ],
//     },
//     {
//       title: "Resources",
//       links: [
//         { label: "Blog", href: "/blog" },
//         { label: "Case Studies", href: "/case-studies" },
//         { label: "Help Center", href: "/help" },
//         { label: "API Docs", href: "/api-docs" },
//       ],
//     },
//     {
//       title: "Legal",
//       links: [
//         { label: "Privacy", href: "/privacy-policy" },
//         { label: "Terms", href: "/terms" },
//         { label: "Security", href: "/security" },
//         { label: "Cookies", href: "/cookies" },
//       ],
//     },
//   ];

//   const socialLinks = [
//     {
//       icon: Twitter,
//       href: "https://twitter.com/digitellercreative",
//       label: "Twitter",
//     },
//     {
//       icon: Linkedin,
//       href: "https://linkedin.com/company/digitellercreative",
//       label: "LinkedIn",
//     },
//     {
//       icon: Instagram,
//       href: "https://instagram.com/digitellercreative",
//       label: "Instagram",
//     },
//   ];

//   return (
//     <footer
//       className="relative text-brand-gray-300 overflow-hidden"
//       style={{
//         backgroundImage: "url('/images/footer-bg.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Organic Wave Top */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
//         <svg
//           className="relative block w-full h-32 md:h-44"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 200"
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="#fff"
//             fillOpacity="1"
//             d="M0,160 C240,80 480,240 720,160 C960,80 1200,240 1440,160 L1440,0 L0,0 Z"
//           />
//         </svg>
//       </div>

//       {/* Overlay for contrast */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Footer Content */}
//       <div className="relative z-10 max-w-[1680px] mx-auto px-6 md:px-10 lg:px-16 py-24">
//         {/* Header Text */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold text-brand-beige-100 tracking-wide">
//             Let’s Create Something Legendary
//           </h2>
//           <p className="mt-4 text-brand-gray-300 text-sm md:text-base max-w-xl mx-auto">
//             We craft stories, brands, and experiences that move people and shape
//             cultures.
//           </p>
//         </motion.div>

//         {/* Main Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-14">
//           {/* Brand Column */}
//           <div className="col-span-2 md:col-span-4 lg:col-span-1">
//             <h3 className="text-2xl font-bold mb-3 text-brand-beige-100 tracking-wide">
//               DIGITELLER CREATIVE
//             </h3>
//             <p className="text-brand-green text-sm mb-6 font-medium">
//               Tailor of Tales
//             </p>

//             <div className="text-sm space-y-2 mb-6">
//               <p>
//                 <strong className="text-brand-beige-100">Phone:</strong>{" "}
//                 +91-7998596948
//               </p>
//               <p>
//                 <strong className="text-brand-beige-100">Email:</strong>{" "}
//                 digitellercreative@gmail.com
//               </p>
//               <p>
//                 <strong className="text-brand-beige-100">Address:</strong> E-79,
//                 Ramgarh, Kolkata 700047
//               </p>
//             </div>

//             {/* Social Links */}
//             <div className="flex gap-5 mt-6">
//               {socialLinks.map((social) => (
//                 <motion.a
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-brand-gray-400 hover:text-brand-orange transition-all duration-300"
//                   whileHover={{ scale: 1.2, rotate: 5 }}
//                   whileTap={{ scale: 0.95 }}
//                   aria-label={social.label}
//                 >
//                   <social.icon className="w-5 h-5" />
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Sections */}
//           {footerSections.map((section) => (
//             <div key={section.title}>
//               <h4 className="font-semibold mb-4 text-brand-beige-100 text-lg">
//                 {section.title}
//               </h4>
//               <ul className="space-y-3">
//                 {section.links.map((link) => (
//                   <li key={link.label}>
//                     <a
//                       href={link.href}
//                       className="text-sm text-brand-gray-300 hover:text-brand-orange transition-all duration-300 hover:translate-x-1 inline-block"
//                     >
//                       {link.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-brand-gray-300">
//             © {new Date().getFullYear()} DIGITELLER CREATIVE. All rights
//             reserved.
//           </p>
//           <p className="text-sm text-brand-gray-300 flex items-center gap-2">
//             Made with <span className="text-brand-orange">❤️</span> worldwide
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import {
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { RequirementsForm } from "@/components/RequirementsForm";

export function Footer() {
  const navigationLinks = [
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "STUDIO", href: "/studio" },
    { label: "CONTACT", href: "/contact" },
  ];

  const policyLinks = [
    { label: "Accessibility Statement", href: "/accessibility" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/digitellercreative",
      label: "Instagram",
      ariaLabel: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/digitellercreative",
      label: "Facebook",
      ariaLabel: "Facebook",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/digitellercreative",
      label: "LinkedIn",
      ariaLabel: "LinkedIn",
    },
    {
      icon: Phone,
      href: "tel:+917998596948",
      label: "Phone",
      ariaLabel: "Call +91-7998596948",
    },
  ];

  return (
    <footer className="bg-bor-black text-white py-16 md:py-24 overflow-hidden">
      <div className="relative max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section 1: Top grid (DIGITELLER) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-8">
            <h2 className="sr-only" data-testid="text-footer-brand">
              DigiTeller Creative
            </h2>
            <div className="select-none">
              <div className="inline-block font-azeret font-extrabold tracking-tight leading-none text-[clamp(48px,8vw,120px)] uppercase bg-gradient-to-r from-brand-blue-500 via-brand-blue-300 to-brand-green bg-clip-text text-transparent">
                DIGITELLER
              </div>
              <div className="mt-2 text-gray-300 text-sm md:text-base max-w-xl">
                A one stop subcription for your creative solutions.
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex md:justify-end">
            <div className="flex gap-5">
              {socialLinks.map((social) => {
                const isExternal = social.href.startsWith("http");

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer noopener" : undefined}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.ariaLabel}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section 2: Left contact | Middle menu | Right form */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 mb-16">
          {/* Left: Email / Phone / Address */}
          <div className="md:col-span-4">
            <div className="space-y-5 text-gray-300 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                    Email
                  </p>
                  <a
                    href="mailto:DIGITELLERCREATIVE@GMAIL.COM"
                    className="hover:text-white transition-colors"
                  >
                    DIGITELLERCREATIVE@GMAIL.COM
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                    Phone
                  </p>
                  <a
                    href="tel:+917998596948"
                    className="hover:text-white transition-colors"
                  >
                    +91-7998596948
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                    Address
                  </p>
                  <p className="text-gray-300">
                    E-79, Ramgarh,
                    <br />
                    Kolkata 700047
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                  Map
                </p>
                <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-white/10 bg-white">
                  <iframe
                    title="Digiteller Creative Location"
                    src="https://www.google.com/maps?q=E-79%2C%20Ramgarh%2C%20Kolkata%20700047&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Menus */}
          <div className="md:col-span-2 md:flex md:flex-col md:justify-start">
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4">
                  Menu
                </p>
                <nav className="flex flex-col gap-4">
                  {navigationLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm font-semibold uppercase tracking-wide hover:text-gray-400 transition-colors"
                      data-testid={`link-footer-nav-${link.label
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-6">
            <div className="bg-white text-black p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-xl">
              <RequirementsForm />
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            {/* Policy Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
              {policyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                  data-testid={`link-footer-policy-${link.label
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p
              className="text-xs text-gray-400"
              data-testid="text-footer-copyright"
            >
              © 2035 by UmpaUmpa. Built on{" "}
              <a
                href="https://www.wix.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                Wix Studio™
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
