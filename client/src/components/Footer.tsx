import { Instagram, Linkedin, Twitter } from "lucide-react";

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
    <footer className="bg-background border-t border-border">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3
              className="text-2xl font-bold mb-4"
              data-testid="text-footer-brand"
            >
              DIGITELLER CREATIVE
            </h3>
            <p
              className="text-muted-foreground text-sm mb-6"
              data-testid="text-footer-tagline"
            >
              Tailor of Tales
            </p>
            <div className="text-sm text-muted-foreground space-y-2 mb-6">
              <p>
                <strong>Phone:</strong> +91-7998596948
              </p>
              <p>
                <strong>Email:</strong> digitellercreative@gmail.com
              </p>
              <p>
                <strong>Address:</strong> E-79, Ramgarh, Kolkata 700047
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4
                className="font-semibold mb-4"
                data-testid={`text-footer-section-${section.title.toLowerCase()}`}
              >
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
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
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-sm text-muted-foreground"
            data-testid="text-footer-copyright"
          >
            © {new Date().getFullYear()} DIGITELLER CREATIVE. All rights
            reserved.
          </p>
          <p
            className="text-sm text-muted-foreground"
            data-testid="text-footer-location"
          >
            Made with creativity worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
