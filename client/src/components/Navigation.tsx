import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { title: "Home", hasSubmenu: false, href: "/" },
  {
    title: "Services",
    hasSubmenu: true,
    href: "/services",
    subsections: [
      {
        title: "Creative & Design",
        items: [
          {
            title: "Brand Identity",
            description: "Complete brand design and identity systems",
            href: "/services/brand-identity",
          },
          {
            title: "Graphic Design",
            description: "Visual content for all your needs",
            href: "/services/graphic-design",
          },
          {
            title: "UI/UX Design",
            description: "Beautiful and intuitive user experiences",
            href: "/services/ui-ux-design",
          },
        ],
      },
      {
        title: "Digital Marketing",
        items: [
          {
            title: "Social Media Marketing",
            description: "Engage your audience on social platforms",
            href: "/services/social-media-marketing",
          },
          {
            title: "Content Marketing",
            description: "Strategic content that drives results",
            href: "/services/content-marketing",
          },
          {
            title: "SEO & Analytics",
            description: "Data-driven digital strategies",
            href: "/services/seo-analytics",
          },
        ],
      },
      {
        title: "Video & Production",
        items: [
          {
            title: "Video Production",
            description: "Professional videos that tell your story",
            href: "/services/video-production",
          },
          {
            title: "Animation",
            description: "Engaging animated content",
            href: "/services/animation",
          },
          {
            title: "Photography",
            description: "High-quality visual storytelling",
            href: "/services/photography",
          },
        ],
      },
    ],
  },
  { title: "Why Us?", hasSubmenu: false, href: "/why-us" },
  { title: "Our Work", hasSubmenu: false, href: "/our-work" },
  { title: "Enterprise", hasSubmenu: false, href: "/enterprise" },
];

export function Navigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDesktopSubmenu, setActiveDesktopSubmenu] = useState<
    number | null
  >(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<number | null>(
    null
  );
  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
      {/* HEADER */}
      <motion.header
        initial={{ backgroundColor: "rgba(255,255,255,0)" }}
        animate={{
          backgroundColor: isScrolled
            ? "rgba(255,255,255,1)"
            : "rgba(255,255,255,0)",
          boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none",
          backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="max-w-[1680px] mx-auto">
          <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 transition-all duration-500">
            {/* Logo */}
            <a href="/" className="relative group select-none">
              <motion.span
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`text-xl sm:text-2xl font-extrabold tracking-tight transition-colors duration-500 ${
                  isScrolled
                    ? "text-[#001F54] group-hover:text-[#0033A0]"
                    : "text-white group-hover:text-blue-200"
                }`}
              >
                DIGITELLER CREATIVE
              </motion.span>
              <motion.div
                layoutId="logo-underline"
                className={`absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-500 ${
                  isScrolled ? "bg-[#0033A0]" : "bg-white"
                } group-hover:w-full w-0`}
              />
            </a>

            {/* Desktop Nav */}
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
                      isScrolled
                        ? "text-[#001F54] hover:text-[#0033A0] hover:bg-blue-50"
                        : "text-white hover:text-blue-200"
                    } ${
                      activeDesktopSubmenu === index ? "text-[#0033A0]" : ""
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

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/917998596948"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    className={`font-semibold shadow-md hover:shadow-lg transition-all duration-300 ${
                      isScrolled
                        ? "bg-[#001F54] hover:bg-[#0033A0] text-white"
                        : "bg-white text-[#001F54] hover:bg-blue-100"
                    }`}
                  >
                    Book a Demo
                  </Button>
                </motion.div>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                isScrolled ? "text-[#001F54]" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
                <div className="max-w-[1680px] mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                  {navItems[activeDesktopSubmenu].subsections?.map(
                    (subsection, sIndex) => (
                      <div key={sIndex} className="space-y-5">
                        <h3 className="text-lg font-bold text-[#001F54] border-b border-[#001F54]/20 pb-2">
                          {subsection.title}
                        </h3>
                        <div className="space-y-3">
                          {subsection.items?.map((subItem, iIndex) => (
                            <motion.a
                              key={iIndex}
                              href={subItem.href || "#"}
                              whileHover={{ x: 6 }}
                              transition={{ type: "spring", stiffness: 200 }}
                              className="block p-3 rounded-lg group hover:bg-blue-50 transition-all duration-300"
                            >
                              <h4 className="font-semibold text-base text-[#001F54] group-hover:text-[#0033A0] transition-colors">
                                {subItem.title}
                              </h4>
                              <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                                {subItem.description}
                              </p>
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Panel */}
      <div
        className={`fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white text-[#001F54] border-t border-gray-200 z-40 lg:hidden transition-all duration-500 ease-in-out overflow-y-auto ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100 visible"
            : "-translate-x-full opacity-0 invisible"
        }`}
      >
        <div className="px-4 sm:px-6 py-6">
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.hasSubmenu ? (
                  <div>
                    <button
                      onClick={() => handleMobileSubmenu(index)}
                      className="flex items-center justify-between w-full px-4 py-4 text-lg font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300"
                    >
                      {item.title}
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          activeMobileSubmenu === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        activeMobileSubmenu === index
                          ? "max-h-[1000px] opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="space-y-4 px-2">
                        {item.subsections?.map((subsection, sIndex) => (
                          <div
                            key={sIndex}
                            className="bg-blue-50 rounded-lg p-4 border-l-4 border-[#001F54]"
                          >
                            <h3 className="text-base font-bold text-[#001F54] mb-3">
                              {subsection.title}
                            </h3>
                            <div className="space-y-2">
                              {subsection.items?.map((subItem, iIndex) => (
                                <a
                                  key={iIndex}
                                  href={subItem.href || "#"}
                                  className="block p-3 rounded-lg hover:bg-blue-100 transition-all duration-300"
                                  onClick={toggleMobileMenu}
                                >
                                  <h4 className="font-semibold text-[#001F54] text-sm">
                                    {subItem.title}
                                  </h4>
                                  <p className="text-gray-600 text-xs mt-1">
                                    {subItem.description}
                                  </p>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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

          {/* Mobile CTA */}
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
      </div>
    </>
  );
}
