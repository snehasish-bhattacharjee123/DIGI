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
            <svg viewBox="0 0 160 32" className="h-6 lg:h-8 w-auto">
              <path
                fill="currentColor"
                d="M83.8867 15.1651C83.9178 9.52062 80.188 5.75866 74.7988 5.75866C69.1232 5.75866 65.0105 9.9679 65.0105 15.6114C65.0105 21.2548 69.1875 25.5284 74.9586 25.5284C79.2312 25.5284 82.6434 23.2318 83.8223 19.0547H79.8051C79.199 20.8407 77.4462 21.7654 75.1496 21.7654C71.9615 21.7654 69.7614 19.7884 69.3785 16.919H83.7268C83.8223 16.3129 83.8867 16.0265 83.8867 15.1651ZM69.5383 13.5389C70.1755 11.0192 72.1836 9.45732 74.7677 9.45732C77.3517 9.45732 79.3266 11.0835 79.7096 13.5389H69.5383ZM150.981 21.7644C147.793 21.7644 145.592 19.7874 145.209 16.9179H159.558C159.654 16.3119 159.717 16.0254 159.717 15.1641C159.749 9.51958 156.019 5.75763 150.631 5.75763C144.954 5.75763 140.841 9.96687 140.841 15.6103C140.841 21.2538 145.018 25.5274 150.789 25.5274C155.062 25.5274 158.475 23.2307 159.654 19.0537H155.636C155.031 20.8397 153.276 21.7644 150.981 21.7644ZM150.598 9.45628C153.213 9.45628 155.157 11.0825 155.54 13.5379H145.369C146.007 11.0181 148.016 9.45628 150.598 9.45628ZM134.783 8.33962C133.22 6.71342 131.084 5.75659 128.596 5.75659C123.336 5.75659 119.254 9.998 119.254 15.7058C119.254 21.4136 123.463 25.5263 128.596 25.5263C131.053 25.5263 133.22 24.5695 134.783 22.9433V25.1361H139.023V0.402676H134.783V8.34066V8.33962ZM129.139 21.6378C125.887 21.6378 123.559 19.1824 123.559 15.7068C123.559 12.2313 125.887 9.77592 129.139 9.77592C132.392 9.77592 134.815 12.1981 134.815 15.7068C134.815 19.2156 132.455 21.6378 129.139 21.6378ZM117.803 2.48654C117.803 3.91971 116.772 4.95127 115.339 4.95127C113.906 4.95127 112.846 3.94877 112.846 2.5156C112.846 1.08242 113.877 0.0508677 115.339 0.0508677C116.8 0.0508677 117.803 1.05336 117.803 2.48654ZM113.299 6.16547H117.349V25.1382H113.299V6.16651V6.16547ZM103.91 9.23419C101.614 9.23419 101.199 10.7006 101.199 11.4021C101.199 12.359 101.933 12.9962 103.941 13.5067L106.236 14.1128C109.744 15.0696 111.37 16.7913 111.37 19.5331C111.338 23.1041 108.501 25.5274 104.482 25.5274C100.464 25.5274 97.1806 23.5182 96.7344 19.2457H100.21C100.624 21.095 102.091 22.0518 104.227 22.0518C106.204 22.0518 107.352 21.1593 107.352 19.8839C107.352 18.8316 106.587 18.1944 104.61 17.6516L102.378 17.0134C99.1576 16.0887 97.2439 14.5258 97.2439 11.5287C97.2439 7.83007 100.178 5.75763 103.844 5.75763C107.511 5.75763 110.668 8.14867 111.306 11.3699L111.401 11.8484H107.671L107.575 11.5931C107.033 10.1578 105.758 9.23316 103.909 9.23316L103.91 9.23419ZM96.6348 9.91394C96.6348 9.91394 95.8128 9.64827 94.7263 9.64827C91.7603 9.64827 89.8799 11.5536 89.8799 14.6462V25.1372H85.6706V6.16651H89.8799V8.39878C91.092 6.64493 92.7493 5.7597 94.7585 5.7597C95.7174 5.7597 96.6348 6.04717 96.6348 6.04717V9.91601V9.91394ZM60.7358 8.48699C59.0453 6.73729 56.6864 5.75036 54.231 5.75036C51.7756 5.75036 49.5434 6.8006 48.0126 8.74125V6.16444H43.8034V32H48.0126V22.6143C49.5755 24.4917 51.7113 25.5408 54.231 25.5408C59.2362 25.5408 63.4133 21.5952 63.4133 15.6466C63.4133 12.8457 62.4565 10.301 60.7358 8.48699ZM53.625 21.6274C50.3726 21.6274 48.0126 19.146 48.0126 15.6466C48.0126 12.1472 50.3726 9.66487 53.5928 9.66487C56.813 9.66487 59.2051 12.2417 59.2051 15.6466C59.2051 19.0516 56.9085 21.6274 53.625 21.6274ZM41.2525 25.1372H36.98V23.4549C35.7679 24.7936 34.0462 25.5274 31.9737 25.5274C27.7967 25.5274 24.6719 22.6579 24.6719 17.9702V10.2139H28.9444V17.4929C28.9444 20.4578 30.7938 21.6066 32.8984 21.6066C35.4171 21.6066 36.98 19.8528 36.98 17.0466V6.16547H41.2525V25.1382V25.1372ZM23.0644 18.595C23.3726 23.072 19.3948 25.5554 16.3229 25.5481C14.8524 25.545 13.2449 24.9649 11.9072 24.035L9.78078 22.5593C8.13589 21.4364 7.66474 21.2434 7.04415 21.2413C5.54144 21.2372 4.568 22.2905 4.66244 23.6656C4.69565 24.145 4.71329 24.529 5.14501 25.106L0.579807 25.0946C0.24149 24.4543 0.0588402 23.6863 0.01214 23.0149C-0.205794 19.8497 2.53084 16.8826 6.5813 16.892C8.24797 16.8961 9.98107 17.4119 11.3561 18.4061L14.3802 20.5875C14.9624 20.9725 15.4325 21.1656 16.0863 21.1676C17.9813 21.1718 18.6507 19.5113 18.576 18.4237C18.5272 17.7201 18.1567 17.0798 17.5382 16.6305L11.5523 12.2355C9.86795 11.0161 8.84988 9.03183 8.70667 6.95315C8.39949 2.47616 12.3763 -0.00724858 15.4481 1.58926e-05C16.9186 0.00312924 18.5262 0.583249 19.8639 1.5131L21.9903 2.98883C23.6352 4.11171 24.1063 4.30473 24.7269 4.30577C26.2296 4.30992 27.0287 3.25657 26.9343 1.88151C26.9011 1.40206 26.8834 1.01808 26.4517 0.441073L31.0169 0.452489C31.3552 1.0928 32.0225 5.0125 29.2599 7.24581C25.5343 10.2574 21.7879 8.13518 20.4139 7.13995L17.3898 4.95853C16.8076 4.57352 16.3375 4.38049 15.6837 4.37842C13.7887 4.37426 13.1193 6.03471 13.192 7.09014C13.2407 7.79375 13.6133 8.46623 14.1996 8.91456L20.2177 13.3096C21.9 14.4968 22.9222 16.5454 23.0633 18.5919L23.0644 18.595Z"
              ></path>
            </svg>
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
              <Button>Book a demo</Button>
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
            className="absolute top-20 left-0 w-full bg-background border-t border-border/50 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {navItems[activeDesktopSubmenu].subsections?.map(
                (subsection, sIndex) => (
                  <section key={sIndex} className="flex flex-col gap-4">
                    <a
                      href={subsection.href || "#"}
                      className="group/link text-xl font-serif text-foreground hover:text-primary transition-colors"
                    >
                      {subsection.title}
                      <MoveUpRight className="inline-block size-4 align-middle opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                    <div className="flex flex-col gap-3">
                      {subsection.items?.map((subItem, iIndex) => (
                        <a
                          key={iIndex}
                          href={subItem.href || "#"}
                          className="group flex items-center gap-2 pb-3 border-b border-border/30 last:border-b-0"
                        >
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-1 before:bg-primary before:rounded-full before:transition-all group-hover:before:w-2 pl-3 group-hover:pl-4 transition-all">
                              {subItem.title}
                            </h4>
                            <p className="text-muted-foreground text-sm">
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
        className={`absolute top-20 left-0 w-full bg-background/95 backdrop-blur-lg lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-12">
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="py-4 border-t border-border/30 first:border-t-0"
              >
                {item.hasSubmenu ? (
                  <div>
                    <button
                      onClick={() => handleMobileSubmenu(index)}
                      className="flex items-center justify-between w-full text-lg font-semibold"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          activeMobileSubmenu === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        activeMobileSubmenu === index
                          ? "max-h-screen"
                          : "max-h-0"
                      }`}
                    >
                      <div className="pt-4 grid grid-cols-1 gap-6">
                        {item.subsections?.map((subsection, sIndex) => (
                          <div key={sIndex}>
                            <a
                              href={subsection.href}
                              className="text-lg font-serif block text-primary mb-3"
                            >
                              {subsection.title}
                            </a>
                            <div className="flex flex-col gap-3">
                              {subsection.items?.map((subItem, iIndex) => (
                                <a
                                  key={iIndex}
                                  href={subItem.href || "#"}
                                  className="flex flex-col pb-3 border-b border-border/30 last:border-b-0"
                                >
                                  <span className="font-medium">
                                    {subItem.title}
                                  </span>
                                  <span className="text-sm text-muted-foreground">
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
                    className="flex items-center text-lg font-semibold"
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 pt-6">
            <Button className="w-full">Book a demo</Button>
            <Button variant="outline" className="w-full">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
