import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Menu,
  X,
  LayoutGrid,
  FileText,
  Lightbulb,
  Video,
  Move,
  Layers,
  Sparkles,
  Brain,
  LineChart,
  Instagram,
  Facebook,
  Linkedin,
  
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  
  {
    title: "Services",
    hasSubmenu: true,
    href: "/services",
    subsections: [
      {
        title: "Creative design services",
        href: "/services/creative-design",
        items: [
          {
            icon: LayoutGrid,
            title: "Brand Identity",
            description: "Complete brand design and identity systems",
            href: "/services/brand-identity",
          },
          {
            icon: FileText,
            title: "Graphic Design",
            description: "Visual content for all your needs",
            href: "/services/graphic-design",
          },
          {
            icon: Lightbulb,
            title: "UI/UX Design",
            description: "Beautiful and intuitive user experiences",
            href: "/services/ui-ux-design",
          },
        ],
      },
      {
        title: "Specialized production services",
        href: "/services/production",
        items: [
          {
            icon: Video,
            title: "Social Media Marketing",
            description: "Engage your audience on social platforms",
            href: "/services/social-media-marketing",
          },
          {
            icon: Move,
            title: "Content Marketing",
            description: "Strategic content that drives results",
            href: "/services/content-marketing",
          },
          {
            icon: Layers,
            title: "SEO & Analytics",
            description: "Data-driven digital strategies",
            href: "/services/seo-analytics",
          },
        ],
      },
      {
        title: "AI & marketing services",
        href: "/services/ai-marketing",
        items: [
          {
            icon: Sparkles,
            title: "Video Production",
            description: "Professional videos that tell your story",
            href: "/services/video-production",
          },
          {
            icon: Brain,
            title: "Animation",
            description: "Engaging animated content",
            href: "/services/animation",
          },
          {
            icon: LineChart,
            title: "Photography",
            description: "High-quality visual storytelling",
            href: "/services/photography",
          },
        ],
      },
    ],
  },
  { title: "Studio", hasSubmenu: false, href: "/why-us" },
  { title: "Portfolio", hasSubmenu: false, href: "/our-work" },
  {
    title: "Contact",
    hasSubmenu: false,
    href: "/contact",
  },
];

type NavigationTheme = "default" | "blue" | "white";

export function Navigation({ theme = "default" }: { theme?: NavigationTheme }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDesktopSubmenu, setActiveDesktopSubmenu] = useState<
    number | null
  >(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<number | null>(
    null
  );
  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isBlue = theme === "blue";
  const isBlueScrolled = isBlue && isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const handleDesktopSubmenuEnter = (index: number) => {
    if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
    setActiveDesktopSubmenu(index);
  };

  const handleDesktopSubmenuLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setActiveDesktopSubmenu(null);
    }, 300);
  };

  const handleMobileSubmenu = (index: number) => {
    setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index);
  };

  return (
    <>
      {/* ===========================
          HEADER
      ============================ */}
      <motion.header
        initial={{
          backgroundColor: "rgba(255,255,255,0)",
        }}
        animate={{
          backgroundColor: isBlue
            ? isScrolled
              ? "#0d123c"
              : "rgba(255,255,255,0)"
            : isScrolled
              ? "rgba(255,255,255,1)"
              : "rgba(255,255,255,0)",
          boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none",
          backdropFilter: isBlue
            ? "blur(0px)"
            : isScrolled
              ? "blur(10px)"
              : "blur(0px)",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="max-w-[1680px] mx-auto">
          <div className="grid grid-cols-3 items-center h-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 transition-all duration-500">
            {/* Left: Social Icons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://instagram.com/digitellercreative"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isBlue
                    ? isBlueScrolled
                      ? "text-white hover:text-brand-blue-200"
                      : "text-[#0033A0] hover:text-[#001F54]"
                    : isScrolled
                      ? "text-[#001F54] hover:text-[#0033A0]"
                      : "text-white hover:text-blue-200"
                } transition-colors`}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/digitellercreative"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isBlue
                    ? isBlueScrolled
                      ? "text-white hover:text-brand-blue-200"
                      : "text-[#0033A0] hover:text-[#001F54]"
                    : isScrolled
                      ? "text-[#001F54] hover:text-[#0033A0]"
                      : "text-white hover:text-blue-200"
                } transition-colors`}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://linkedin.com/company/digitellercreative"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isBlue
                    ? isBlueScrolled
                      ? "text-white hover:text-brand-blue-200"
                      : "text-[#0033A0] hover:text-[#001F54]"
                    : isScrolled
                      ? "text-[#001F54] hover:text-[#0033A0]"
                      : "text-white hover:text-blue-200"
                } transition-colors`}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              
            </div>

            {/* Center: Logo */}
            <div className="flex justify-start lg:justify-center col-start-1 lg:col-start-2">
              <a href="/" className="flex-shrink-0 select-none relative group flex items-center justify-center">
{/* LOGO IMAGE */}
<motion.img
src="/images/work/Digireller%20logo_png.png" // <-- corrected public path
alt="DIGITELLER CREATIVE"
whileHover={{ scale: 1.05, y: -2 }}
transition={{ type: "spring", stiffness: 300 }}
className="h-10 sm:h-14 lg:h-16 w-auto max-w-[160px] sm:max-w-none object-contain"
/>


{/* OPTIONAL UNDERLINE EFFECT */}
<motion.div
layoutId="logo-underline"
className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 rounded-full ${
  isBlue && isScrolled ? "bg-white" : "bg-[#0033A0]"
} group-hover:w-full transition-all duration-500`}
/>
</a>
            </div>

            {/* Right: Desktop Nav + Mobile Toggle */}
            <div className="flex items-center justify-center lg:justify-end gap-3 col-start-2 lg:col-start-3">
              <nav className="hidden lg:flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() =>
                      item.hasSubmenu && handleDesktopSubmenuEnter(index)
                    }
                    onMouseLeave={() =>
                      item.hasSubmenu && handleDesktopSubmenuLeave()
                    }
                  >
                    <motion.a
                      whileHover={{ y: -2 }}
                      href={item.href || "#"}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${
                        isBlue
                          ? isBlueScrolled
                            ? "text-white hover:text-brand-blue-200 hover:bg-white/10"
                            : "text-[#0033A0] hover:text-[#001F54] hover:bg-blue-50"
                          : isScrolled
                            ? "text-[#001F54] hover:text-[#0033A0] hover:bg-blue-50"
                            : "text-white hover:text-blue-200"
                      } ${
                        activeDesktopSubmenu === index
                          ? isBlue
                            ? isBlueScrolled
                              ? "text-brand-blue-200"
                              : "text-[#001F54]"
                            : "text-[#0033A0]"
                          : ""
                      }`}
                    >
                      {item.title}
                      {item.hasSubmenu && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            activeDesktopSubmenu === index ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </motion.a>
                  </div>
                ))}
              </nav>

              {/* Mobile Toggle */}
              <button
                onClick={toggleMobileMenu}
                className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                  isBlue
                    ? isBlueScrolled
                      ? "text-white"
                      : "text-[#0033A0]"
                    : isScrolled
                      ? "text-[#001F54]"
                      : "text-white"
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop MegaMenu */}
        <AnimatePresence>
          {activeDesktopSubmenu !== null &&
            navItems[activeDesktopSubmenu].hasSubmenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => {
                  if (submenuTimeoutRef.current)
                    clearTimeout(submenuTimeoutRef.current);
                }}
                onMouseLeave={handleDesktopSubmenuLeave}
                className="absolute top-20 left-0 w-full bg-white border-t border-gray-200 shadow-xl z-[50]"
              >
                <div className="max-w-[1680px] mx-auto px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                  {navItems[activeDesktopSubmenu].subsections?.map(
                    (section, sIndex) => (
                      <div key={sIndex} className="space-y-5">
                        <h3 className="inline-block text-lg font-bold text-[#001F54] bg-[#E8F5E9] px-3 py-1 rounded-md">
                          {section.title}
                        </h3>
                        <div className="space-y-2">
                          {section.items?.map((item, iIndex) => {
                            const Icon = item.icon;
                            return (
                              <motion.a
                                key={iIndex}
                                href={item.href || "#"}
                                whileHover={{ x: 6 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 group"
                              >
                                <Icon
                                  size={18}
                                  className="text-[#0033A0] mt-1"
                                />
                                <div>
                                  <h4 className="font-semibold text-base text-[#001F54] group-hover:text-[#0033A0] transition-colors">
                                    {item.title}
                                  </h4>
                                  <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                                    {item.description}
                                  </p>
                                </div>
                              </motion.a>
                            );
                          })}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            )}
        </AnimatePresence>

        {/* ===========================
            MOBILE MENU (Slide-in)
        ============================ */}
        {/* Mobile Overlay */}
        {/* Mobile Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleMobileMenu}
            />
          )}
        </AnimatePresence>

        {/* Mobile Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white text-[#001F54] border-t border-gray-200 z-50 lg:hidden overflow-y-auto shadow-lg"
            >
              <div className="px-4 sm:px-6 py-6">
                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <div key={index}>
                      {item.hasSubmenu ? (
                        <div>
                          {/* Main Parent Button */}
                          <button
                            onClick={() => handleMobileSubmenu(index)}
                            className="flex items-center justify-between w-full px-4 py-4 text-lg font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300"
                          >
                            {item.title}
                            <ChevronDown
                              size={20}
                              className={`transition-transform duration-300 ${
                                activeMobileSubmenu === index
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>

                          {/* Submenu Animation */}
                          <AnimatePresence>
                            {activeMobileSubmenu === index && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4 }}
                                className="overflow-hidden mt-2"
                              >
                                <div className="space-y-4 px-2">
                                  {item.subsections?.map(
                                    (subsection, sIndex) => (
                                      <div
                                        key={sIndex}
                                        className="bg-blue-50 rounded-lg p-4 border-l-4 border-[#001F54]"
                                      >
                                        <h3 className="text-base font-bold text-[#001F54] mb-3">
                                          {subsection.title}
                                        </h3>
                                        <div className="space-y-2">
                                          {subsection.items?.map(
                                            (subItem, iIndex) => {
                                              const Icon = subItem.icon;
                                              return (
                                                <a
                                                  key={iIndex}
                                                  href={subItem.href || "#"}
                                                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-100 transition-all duration-300"
                                                  onClick={toggleMobileMenu}
                                                >
                                                  {Icon && (
                                                    <Icon
                                                      size={18}
                                                      className="text-[#0033A0] mt-1 flex-shrink-0"
                                                    />
                                                  )}
                                                  <div>
                                                    <h4 className="font-semibold text-[#001F54] text-sm">
                                                      {subItem.title}
                                                    </h4>
                                                    {subItem.description && (
                                                      <p className="text-gray-600 text-xs mt-1 leading-snug">
                                                        {subItem.description}
                                                      </p>
                                                    )}
                                                  </div>
                                                </a>
                                              );
                                            }
                                          )}
                                        </div>
                                      </div>
                                    )
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          className="block px-4 py-4 text-lg font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300"
                          onClick={toggleMobileMenu}
                        >
                          {item.title}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile CTA Button */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a
                    href="https://wa.me/917998596948"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="w-full bg-[#001F54] hover:bg-[#0033A0] text-white font-semibold text-base py-6 shadow-md hover:shadow-lg transition-all duration-300">
                      Book a Demo
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
