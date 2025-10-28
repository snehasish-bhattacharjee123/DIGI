import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Server,
  CheckCircle2,
  FileCheck,
  Users,
  AlertCircle,
  Key,
  Database,
  ShieldCheck,
  Fingerprint,
} from "lucide-react";

export default function Security() {
  const securityMeasures = [
    {
      icon: Lock,
      title: "Data Encryption",
      description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption standards.",
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Our infrastructure is hosted on enterprise-grade servers with regular security audits and monitoring.",
    },
    {
      icon: Key,
      title: "Access Control",
      description: "Role-based access control (RBAC) and multi-factor authentication (MFA) protect your account.",
    },
    {
      icon: Database,
      title: "Data Backup",
      description: "Automated daily backups with geo-redundant storage ensure your data is always recoverable.",
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "24/7 security monitoring and incident response to detect and prevent potential threats.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance",
      description: "We comply with GDPR, CCPA, SOC 2, and other industry-standard security frameworks.",
    },
  ];

  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Certified for security, availability, and confidentiality",
    },
    {
      name: "GDPR Compliant",
      description: "Full compliance with EU data protection regulations",
    },
    {
      name: "ISO 27001",
      description: "Information security management system certified",
    },
    {
      name: "CCPA Compliant",
      description: "California Consumer Privacy Act compliant",
    },
  ];

  const practices = [
    {
      icon: Fingerprint,
      title: "Authentication & Authorization",
      items: [
        "Multi-factor authentication (MFA) required for all accounts",
        "Password complexity requirements and secure hashing (bcrypt)",
        "Session management with automatic timeout",
        "OAuth 2.0 and OpenID Connect support",
        "IP whitelisting and geolocation restrictions available",
      ],
    },
    {
      icon: Database,
      title: "Data Protection",
      items: [
        "End-to-end encryption for sensitive data",
        "Data minimization and retention policies",
        "Secure deletion and data sanitization",
        "Regular data privacy impact assessments",
        "Data portability and export capabilities",
      ],
    },
    {
      icon: Shield,
      title: "Application Security",
      items: [
        "Regular penetration testing and vulnerability assessments",
        "Secure development lifecycle (SDL) practices",
        "Code reviews and static/dynamic analysis",
        "Web application firewall (WAF) protection",
        "DDoS mitigation and rate limiting",
      ],
    },
    {
      icon: Users,
      title: "Employee Security",
      items: [
        "Background checks for all employees",
        "Regular security awareness training",
        "Strict data access policies and logging",
        "Signed confidentiality and NDA agreements",
        "Zero-trust security model implementation",
      ],
    },
  ];

  const incidentResponse = [
    {
      step: "Detection",
      description: "Automated monitoring systems and threat intelligence detect potential security incidents 24/7.",
    },
    {
      step: "Assessment",
      description: "Security team assesses the scope, severity, and impact of the incident immediately.",
    },
    {
      step: "Containment",
      description: "Affected systems are isolated to prevent further damage or data exposure.",
    },
    {
      step: "Remediation",
      description: "Vulnerabilities are patched, and systems are restored to secure operational status.",
    },
    {
      step: "Communication",
      description: "Affected parties are notified in accordance with legal requirements and best practices.",
    },
    {
      step: "Review",
      description: "Post-incident analysis to improve security measures and prevent future occurrences.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Security & Data Protection | DIGI</title>
        <meta
          name="description"
          content="Learn about DIGI's security measures, data protection practices, compliance certifications, and how we keep your information safe and secure."
        />
        <meta
          name="keywords"
          content="security, data protection, encryption, compliance, GDPR, SOC 2, cybersecurity"
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
                <Shield className="w-4 h-4 text-brand-orange-500" />
                <span className="text-sm font-medium text-brand-orange-500">Security & Data Protection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Security is
                <span className="block text-brand-orange-500">Our Top Priority</span>
              </h1>

              <p className="text-xl text-brand-beige-100/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                We implement enterprise-grade security measures and industry best practices
                to protect your data and maintain your trust.
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

        {/* Security Measures Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
                Our Security Measures
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                Multi-layered security approach to protect your data at every level.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityMeasures.map((measure, index) => {
                const Icon = measure.icon;
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-8 rounded-xl bg-brand-beige-100 border-2 border-brand-gray-200 hover:border-brand-orange-500 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-lg bg-brand-blue-900 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue-900 mb-3">{measure.title}</h3>
                    <p className="text-brand-gray-600 leading-relaxed">{measure.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
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
                Certifications & Compliance
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                We meet and exceed industry standards for security and data protection.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-xl bg-white border-2 border-brand-gray-200 hover:border-brand-green-300 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-green-300/20 flex items-center justify-center mx-auto mb-4">
                    <FileCheck className="w-8 h-8 text-brand-green-700" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-blue-900 mb-2">{cert.name}</h3>
                  <p className="text-sm text-brand-gray-600">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Practices Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
                Security Best Practices
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                Comprehensive security measures across all aspects of our platform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {practices.map((practice, index) => {
                const Icon = practice.icon;
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-8 rounded-xl bg-brand-beige-100 border-2 border-brand-gray-200"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-brand-blue-900 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-brand-blue-900">{practice.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {practice.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-brand-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Incident Response Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Incident Response Plan
              </h2>
              <p className="text-lg text-brand-beige-100/90 max-w-2xl mx-auto">
                Our structured approach to handling security incidents quickly and effectively.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {incidentResponse.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <div className="text-4xl font-bold text-brand-orange-500 mb-3">{index + 1}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.step}</h3>
                  <p className="text-brand-beige-100/80 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-beige-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-12 rounded-2xl border-2 border-brand-gray-200"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-brand-orange-500 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-blue-900 mb-2">
                    Report a Security Concern
                  </h2>
                  <p className="text-brand-gray-600 leading-relaxed">
                    If you discover a security vulnerability or have concerns about our security practices,
                    please contact our security team immediately.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-orange-500" />
                  <span className="text-brand-gray-700">
                    <strong>Email:</strong> security@digi.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-orange-500" />
                  <span className="text-brand-gray-700">
                    <strong>Response Time:</strong> Within 24 hours for critical issues
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-orange-500" />
                  <span className="text-brand-gray-700">
                    <strong>PGP Key:</strong> Available upon request for encrypted communication
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 font-semibold rounded-lg transition-all duration-300"
              >
                Contact Security Team
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
                Additional Resources
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
                  Terms of Service
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-brand-blue-900 text-brand-blue-900 hover:bg-brand-blue-900 hover:text-white"
                >
                  Cookie Policy
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-brand-blue-900 text-brand-blue-900 hover:bg-brand-blue-900 hover:text-white"
                >
                  Data Processing Agreement
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
