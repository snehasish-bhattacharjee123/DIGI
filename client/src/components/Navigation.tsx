import { useState, useEffect } from "react";
import { ChevronDown, Dot, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    title: "Solutions",
    hasSubmenu: true,
    href: "#solutions",
    subsections: [
      {
        title: "By Need",
        href: "#by-need",
        items: [
          {
            title: "Creative & Design",
            description: "End-to-end creative and design services",
            href: "#creative-design",
          },
          {
            title: "Production",
            description: "High-quality asset production at scale",
            href: "#production",
          },
          {
            title: "Marketing",
            description: "Performance-driven creative for marketing",
            href: "#marketing",
          },
        ],
      },
      {
        title: "By Service",
        href: "#by-service",
        items: [
          {
            title: "Presentation Design",
            description: "Compelling presentations that captivate",
            href: "#presentation-design",
          },
          {
            title: "Video Production",
            description: "Engaging videos for any platform",
            href: "#video-production",
          },
          {
            title: "Ad Creative",
            description: "Creative that converts for paid social & digital",
            href: "#ad-creative",
          },
        ],
      },
      {
        title: "By Industry",
        href: "#by-industry",
        items: [
          {
            title: "Technology",
            description: "Creative for fast-paced tech companies",
            href: "#tech",
          },
          {
            title: "Consulting",
            description: "Professional design for consulting firms",
            href: "#consulting",
          },
          {
            title: "Finance",
            description: "Secure and compliant design for finance",
            href: "#finance",
          },
        ],
      },
    ],
  },
  { title: "About Us", hasSubmenu: false, href: "#about-us" },
  { title: "Resources", hasSubmenu: false, href: "#resources" },
  { title: "Enterprise", hasSubmenu: false, href: "#enterprise" },
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDesktopSubmenu = (index: number | null) => {
    setActiveDesktopSubmenu(index);
  };

  const handleMobileSubmenu = (index: number) => {
    setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index);
  };

  return (
    <header
      className={`fixed top-0 left-0 flex w-full z-50 h-20 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/40 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full w-full">
        <div className="flex flex-row justify-between static h-full gap-2 px-6">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center no-underline text-foreground"
          >
            <span className="text-xl font-bold">DIGITELLER CREATIVE</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex flex-row items-stretch -mx-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => handleDesktopSubmenu(index)}
                onMouseLeave={() => handleDesktopSubmenu(null)}
              >
                <a
                  href={item.href || "#"}
                  className="px-4 flex items-center text-sm h-full cursor-pointer relative group"
                >
                  <span className="relative flex w-full flex-row items-center justify-between gap-2">
                    <Dot
                      className={`absolute -left-3 text-primary transition-opacity duration-300 ${
                        activeDesktopSubmenu === index
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                    {item.title}
                    {item.hasSubmenu && (
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 ${
                          activeDesktopSubmenu === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <nav className="self-center hidden lg:flex">
            <div className="flex flex-row gap-3">
              <a
                href="https://wa.me/917998596948"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Book a demo</Button>
              </a>
              <Button variant="outline">Sign in</Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="relative flex h-6 w-6 flex-col items-center justify-center gap-1"
            >
              <span
                className={`bg-primary h-[2px] w-full rounded transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[2px]" : ""
                }`}
              ></span>
              <span
                className={`bg-primary h-[2px] w-full rounded transition-transform duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[4px]" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Submenu */}
      {activeDesktopSubmenu !== null &&
        navItems[activeDesktopSubmenu].hasSubmenu && (
          <div
            onMouseEnter={() => handleDesktopSubmenu(activeDesktopSubmenu)}
            onMouseLeave={() => handleDesktopSubmenu(null)}
            className="absolute top-20 left-0 w-full bg-background/98 backdrop-blur-md border-t border-border/40 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {navItems[activeDesktopSubmenu].subsections?.map(
                (subsection, sIndex) => (
                  <section
                    key={sIndex}
                    className="flex flex-col gap-6 transform transition-all duration-300 animate-in fade-in slide-in-from-top-4"
                  >
                    <a
                      href={subsection.href || "#"}
                      className="group/link inline-flex items-center gap-2 text-lg font-semibold text-foreground hover:text-primary transition-colors duration-200"
                    >
                      <span>{subsection.title}</span>
                      <MoveUpRight className="size-4 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-200" />
                    </a>
                    <div className="flex flex-col gap-4">
                      {subsection.items?.map((subItem, iIndex) => (
                        <a
                          key={iIndex}
                          href={subItem.href || "#"}
                          className="group relative px-4 py-3 rounded-lg hover:bg-primary/5 transition-all duration-200 overflow-hidden"
                        >
                          <div className="absolute inset-0 w-0 group-hover:w-1 bg-primary rounded-full transition-all duration-300"></div>
                          <div className="flex-1 relative">
                            <h4 className="font-medium text-foreground text-base group-hover:text-primary transition-colors duration-200">
                              {subItem.title}
                            </h4>
                            <p className="text-muted-foreground text-sm mt-1 group-hover:text-foreground/70 transition-colors duration-200">
                              {subItem.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </section>
                ),
              )}
            </div>
          </div>
        )}

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-0 w-full bg-background/98 backdrop-blur-md border-b border-border/40 lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-12">
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="border-b border-border/20 last:border-b-0"
              >
                {item.hasSubmenu ? (
                  <div>
                    <button
                      onClick={() => handleMobileSubmenu(index)}
                      className="flex items-center justify-between w-full py-4 text-base sm:text-lg font-semibold hover:text-primary transition-colors duration-200"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 text-primary ${
                          activeMobileSubmenu === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        activeMobileSubmenu === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pb-4 grid grid-cols-1 gap-4">
                        {item.subsections?.map((subsection, sIndex) => (
                          <div
                            key={sIndex}
                            className="border-l-2 border-primary/30 pl-4"
                          >
                            <a
                              href={subsection.href}
                              className="text-base font-semibold text-primary hover:text-primary/80 block mb-3 transition-colors"
                            >
                              {subsection.title}
                            </a>
                            <div className="flex flex-col gap-3">
                              {subsection.items?.map((subItem, iIndex) => (
                                <a
                                  key={iIndex}
                                  href={subItem.href || "#"}
                                  className="flex flex-col py-2 rounded-md hover:bg-primary/5 px-2 transition-colors duration-200"
                                >
                                  <span className="font-medium text-sm">
                                    {subItem.title}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    {subItem.description}
                                  </span>
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
                    className="flex items-center py-4 text-base sm:text-lg font-semibold hover:text-primary transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 pt-6 border-t border-border/20 mt-6">
            <a
              href="https://wa.me/917998596948"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full rounded-lg">Book a demo</Button>
            </a>
            <Button variant="outline" className="w-full rounded-lg">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
