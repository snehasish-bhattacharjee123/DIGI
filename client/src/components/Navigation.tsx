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
    null,
  );

  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
    }, 400);
  };

  const handleMobileSubmenu = (index: number) => {
    setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-black/95 backdrop-blur-sm shadow-lg"
            : "bg-black/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1680px] mx-auto">
          <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2 group">
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                DIGITELLER CREATIVE
              </span>
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
                  <a
                    href={item.href || "#"}
                    className={`flex items-center gap-1 px-4 py-2 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-all duration-300 ${
                      activeDesktopSubmenu === index
                        ? "bg-white/10 text-primary"
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
                  </a>
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
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Book a Demo
                </Button>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* DESKTOP DROPDOWN OVERLAY */}
        <AnimatePresence>
          {activeDesktopSubmenu !== null &&
            navItems[activeDesktopSubmenu].hasSubmenu && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute top-20 left-0 w-full h-[500px] z-[40] ${
                  navItems[activeDesktopSubmenu].title === "Services"
                    ? "bg-white"
                    : "bg-black/95"
                }`}
              />
            )}
        </AnimatePresence>

        {/* DESKTOP MEGAMENU */}
        {activeDesktopSubmenu !== null &&
          navItems[activeDesktopSubmenu].hasSubmenu && (
            <div
              onMouseEnter={() => {
                if (submenuTimeoutRef.current)
                  clearTimeout(submenuTimeoutRef.current);
              }}
              onMouseLeave={handleDesktopSubmenuLeave}
              className={`absolute top-20 left-0 w-full border-t shadow-2xl z-[50] transition-all duration-500 ease-in-out ${
                navItems[activeDesktopSubmenu].title === "Services"
                  ? "bg-white text-black border-gray-200"
                  : "bg-black/95 text-white border-white/10"
              }`}
            >
              <div className="max-w-[1680px] mx-auto px-6 lg:px-8 xl:px-12 2xl:px-16 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {navItems[activeDesktopSubmenu].subsections?.map(
                    (subsection, sIndex) => (
                      <div key={sIndex} className="space-y-5">
                        <h3
                          className={`text-lg font-bold pb-2 border-b ${
                            navItems[activeDesktopSubmenu].title === "Services"
                              ? "border-primary/40 text-black"
                              : "border-primary/30 text-white"
                          }`}
                        >
                          {subsection.title}
                        </h3>
                        <div className="space-y-3">
                          {subsection.items?.map((subItem, iIndex) => (
                            <a
                              key={iIndex}
                              href={subItem.href || "#"}
                              className={`block p-3 rounded-lg transition-all duration-300 group ${
                                navItems[activeDesktopSubmenu].title ===
                                "Services"
                                  ? "hover:bg-gray-100"
                                  : "hover:bg-white/5"
                              }`}
                            >
                              <h4
                                className={`font-semibold text-base transition-colors duration-300 group-hover:text-primary ${
                                  navItems[activeDesktopSubmenu].title ===
                                  "Services"
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                {subItem.title}
                              </h4>
                              <p
                                className={`text-sm mt-1 transition-colors duration-300 ${
                                  navItems[activeDesktopSubmenu].title ===
                                  "Services"
                                    ? "text-gray-600 group-hover:text-gray-800"
                                    : "text-gray-400 group-hover:text-gray-300"
                                }`}
                              >
                                {subItem.description}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          )}
      </header>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* MOBILE MENU PANEL */}
      <div
        className={`fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-black/95 backdrop-blur-md border-t border-white/10 z-40 lg:hidden transition-all duration-500 ease-in-out overflow-y-auto ${
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
                      className="flex items-center justify-between w-full px-4 py-4 text-white text-lg font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
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
                            className="bg-white/5 rounded-lg p-4 border-l-4 border-primary"
                          >
                            <h3 className="text-base font-bold text-primary mb-3">
                              {subsection.title}
                            </h3>
                            <div className="space-y-2">
                              {subsection.items?.map((subItem, iIndex) => (
                                <a
                                  key={iIndex}
                                  href={subItem.href || "#"}
                                  className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                                  onClick={toggleMobileMenu}
                                >
                                  <h4 className="font-semibold text-white text-sm">
                                    {subItem.title}
                                  </h4>
                                  <p className="text-gray-400 text-xs mt-1">
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
                    className="block px-4 py-4 text-white text-lg font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                    onClick={toggleMobileMenu}
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* MOBILE CTA */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <a
              href="https://wa.me/917998596948"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-base py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Book a Demo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
