import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Cookie,
  Settings,
  Eye,
  BarChart,
  Shield,
  CheckCircle2,
  AlertCircle,
  Info,
  Zap,
  Lock,
  Globe,
  UserCheck,
} from "lucide-react";

export default function Cookies() {
  const cookieTypes = [
    {
      icon: Shield,
      title: "Strictly Necessary Cookies",
      description: "Essential cookies required for the website to function properly. These cannot be disabled.",
      examples: ["Authentication", "Security", "Session management", "Load balancing"],
      required: true,
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      description: "Enable enhanced functionality and personalization, such as remembering your preferences.",
      examples: ["Language preferences", "Region settings", "Theme preferences", "User interface customization"],
      required: false,
    },
    {
      icon: BarChart,
      title: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website to improve user experience.",
      examples: ["Google Analytics", "Page views", "User behavior", "Performance metrics"],
      required: false,
    },
    {
      icon: Eye,
      title: "Marketing Cookies",
      description: "Track visitors across websites to display relevant and engaging advertisements.",
      examples: ["Advertising platforms", "Retargeting", "Campaign tracking", "Social media integration"],
      required: false,
    },
  ];

  const specificCookies = [
    {
      name: "_digi_session",
      purpose: "Authentication & Session Management",
      type: "Strictly Necessary",
      duration: "Session (expires when browser closes)",
      party: "First Party",
    },
    {
      name: "_digi_csrf",
      purpose: "Security - Cross-Site Request Forgery Protection",
      type: "Strictly Necessary",
      duration: "Session",
      party: "First Party",
    },
    {
      name: "_digi_preferences",
      purpose: "Store User Preferences & Settings",
      type: "Functional",
      duration: "1 year",
      party: "First Party",
    },
    {
      name: "_ga",
      purpose: "Google Analytics - Visitor Tracking",
      type: "Analytics",
      duration: "2 years",
      party: "Third Party",
    },
    {
      name: "_gid",
      purpose: "Google Analytics - Session Differentiation",
      type: "Analytics",
      duration: "24 hours",
      party: "Third Party",
    },
    {
      name: "_fbp",
      purpose: "Facebook Pixel - Advertising & Retargeting",
      type: "Marketing",
      duration: "3 months",
      party: "Third Party",
    },
  ];

  const managementSteps = [
    {
      title: "Browser Settings",
      description: "Most browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete cookies.",
      icon: Globe,
    },
    {
      title: "Cookie Consent Manager",
      description: "Use our cookie consent manager at the bottom of the page to customize your cookie preferences at any time.",
      icon: Settings,
    },
    {
      title: "Opt-Out Tools",
      description: "Use industry opt-out tools like Google Analytics Opt-out Browser Add-on or NAI Consumer Opt-Out.",
      icon: UserCheck,
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Cookie Policy | DIGI</title>
        <meta
          name="description"
          content="Learn about how DIGI uses cookies, what types of cookies we use, and how you can manage your cookie preferences."
        />
        <meta
          name="keywords"
          content="cookies, cookie policy, privacy, tracking, analytics, data collection"
        />
      </Helmet>

      <div className="min-h-screen bg-brand-beige-100">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,117,31,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(194,240,135,0.05),transparent_50%)]" />

          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/30 mb-6">
                <Cookie className="w-4 h-4 text-brand-orange-500" />
                <span className="text-sm font-medium text-brand-orange-500">Cookie Policy</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                How We Use
                <span className="block text-brand-orange-500">Cookies</span>
              </h1>

              <p className="text-xl text-brand-beige-100/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                This Cookie Policy explains what cookies are, how we use them, and how you can
                control your cookie preferences on our website.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-6 px-4 sm:px-6 lg:px-8 bg-brand-orange-500/10 border-b border-brand-orange-500/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-brand-blue-900">
              <AlertCircle className="w-5 h-5" />
              <span className="font-medium">Last Updated: January 2025</span>
            </div>
          </div>
        </section>

        {/* What Are Cookies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-brand-blue-900 flex items-center justify-center flex-shrink-0">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-brand-blue-900 mb-4">
                    What Are Cookies?
                  </h2>
                  <div className="prose prose-lg text-brand-gray-600 max-w-none">
                    <p className="mb-4 leading-relaxed">
                      Cookies are small text files that are placed on your device when you visit a website.
                      They are widely used to make websites work more efficiently and provide information to
                      website owners.
                    </p>
                    <p className="mb-4 leading-relaxed">
                      Cookies help us understand how you use our website, remember your preferences, and
                      provide you with a better, more personalized experience.
                    </p>
                    <p className="leading-relaxed">
                      We use both first-party cookies (set by DIGI) and third-party cookies (set by other
                      services we use) on our website.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cookie Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-beige-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue-900 mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                We use different types of cookies to provide and improve our services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {cookieTypes.map((cookie, index) => {
                const Icon = cookie.icon;
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-8 rounded-xl bg-white border-2 border-brand-gray-200"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-lg bg-brand-blue-900 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      {cookie.required ? (
                        <span className="px-3 py-1 rounded-full bg-brand-green-300/20 text-brand-green-700 text-xs font-semibold">
                          REQUIRED
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-brand-orange-500/20 text-brand-orange-600 text-xs font-semibold">
                          OPTIONAL
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue-900 mb-3">{cookie.title}</h3>
                    <p className="text-brand-gray-600 leading-relaxed mb-4">{cookie.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-brand-blue-900">Examples:</p>
                      <ul className="space-y-1">
                        {cookie.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-brand-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange-500" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Specific Cookies Table */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue-900 mb-4 text-center">
                Specific Cookies We Use
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto text-center">
                Detailed information about the specific cookies used on our website.
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-brand-beige-100 rounded-xl border-2 border-brand-gray-200 overflow-hidden"
              >
                <table className="w-full">
                  <thead className="bg-brand-blue-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Cookie Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Purpose</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Type</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Duration</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Party</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-gray-200">
                    {specificCookies.map((cookie, index) => (
                      <tr key={index} className="bg-white hover:bg-brand-beige-50 transition-colors">
                        <td className="px-6 py-4">
                          <code className="text-sm font-mono text-brand-blue-900 bg-brand-beige-100 px-2 py-1 rounded">
                            {cookie.name}
                          </code>
                        </td>
                        <td className="px-6 py-4 text-sm text-brand-gray-600">{cookie.purpose}</td>
                        <td className="px-6 py-4">
                          <span className="inline-block px-2 py-1 rounded-full bg-brand-orange-500/10 text-brand-orange-600 text-xs font-medium">
                            {cookie.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-brand-gray-600">{cookie.duration}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            cookie.party === "First Party"
                              ? "bg-brand-green-300/20 text-brand-green-700"
                              : "bg-brand-gray-200 text-brand-gray-700"
                          }`}>
                            {cookie.party}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Managing Cookies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-beige-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue-900 mb-4">
                How to Manage Cookies
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                You have control over which cookies you accept and can change your preferences at any time.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {managementSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-8 rounded-xl bg-white border-2 border-brand-gray-200 hover:border-brand-orange-500 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-lg bg-brand-orange-500 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue-900 mb-3">{step.title}</h3>
                    <p className="text-brand-gray-600 leading-relaxed">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Browser Instructions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="bg-brand-beige-100 p-8 md:p-12 rounded-2xl border-2 border-brand-gray-200"
            >
              <h2 className="text-2xl font-bold text-brand-blue-900 mb-6">
                Browser-Specific Cookie Settings
              </h2>
              <div className="space-y-4 text-brand-gray-600">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-blue-900">Chrome:</strong> Settings → Privacy and Security → Cookies and other site data
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-blue-900">Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-blue-900">Safari:</strong> Preferences → Privacy → Manage Website Data
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-blue-900">Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-brand-orange-500/10 border-l-4 border-brand-orange-500 rounded-r-lg">
                <p className="text-brand-gray-700">
                  <strong className="text-brand-blue-900">Note:</strong> Disabling certain cookies may affect
                  the functionality of our website and your user experience.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Questions About Our Cookie Policy?
              </h2>
              <p className="text-xl text-brand-beige-100/90 mb-8 leading-relaxed">
                If you have any questions or concerns about how we use cookies, please don't hesitate to contact us.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Contact Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-blue-900 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Manage Cookie Preferences
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-beige-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-brand-blue-900 mb-8">
                Related Policies
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-2 border-brand-blue-900 text-brand-blue-900 hover:bg-brand-blue-900 hover:text-white"
                >
                  Privacy Policy
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-brand-blue-900 text-brand-blue-900 hover:bg-brand-blue-900 hover:text-white"
                >
                  Security Policy
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-brand-blue-900 text-brand-blue-900 hover:bg-brand-blue-900 hover:text-white"
                >
                  Terms of Service
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
