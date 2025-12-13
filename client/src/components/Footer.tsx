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

import { Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const navigationLinks = [
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "STUDIO", href: "/studio" },
    { label: "CONTACT", href: "/contact" },
  ];

  const policyLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Accessibility Statement", href: "/accessibility" },
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
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Top Section with Company Name and Contact Info */}
        <div className="py-16 border-b border-gray-800 text-center">
          <h3
            className="text-3xl md:text-4xl font-bold mb-8"
            data-testid="text-footer-brand"
          >
            DIGITELLER CREATIVE
          </h3>
          <div className="space-y-2 text-gray-300 text-sm md:text-base mb-8">
            <p>
              <a
                href="mailto:digitellercreative@gmail.com"
                className="hover:text-white transition-colors"
              >
                DIGITELLERCREATIVE@GMAIL.COM
              </a>
            </p>
            <p>+91-7998596948</p>
            <p>E-79, RAMGARH, KOLKATA 700047</p>
          </div>
        </div>

        {/* Navigation and Social Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Navigation Menu */}
            <nav className="flex gap-8 md:gap-12">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  data-testid={`link-footer-nav-${link.label
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.ariaLabel}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Policy Links Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-center">
            {policyLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors"
                data-testid={`link-footer-policy-${link.label
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="py-8 text-center">
          <p
            className="text-xs md:text-sm text-gray-500"
            data-testid="text-footer-copyright"
          >
            © {new Date().getFullYear()} by DIGITELLER CREATIVE. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
