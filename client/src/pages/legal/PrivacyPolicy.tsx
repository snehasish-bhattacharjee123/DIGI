import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Shield, Lock, Eye, UserCheck, FileText, Bell } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "We collect information that you provide directly to us, including:",
        "• Personal identification information (name, email address, phone number)",
        "• Business information (company name, job title, industry)",
        "• Payment and billing information",
        "• Communications and correspondence with us",
        "• Information you provide when filling out forms on our website",
        "• Survey responses and feedback",
        "",
        "We also automatically collect certain information when you visit our website:",
        "• Device information (IP address, browser type, operating system)",
        "• Usage data (pages visited, time spent, click patterns)",
        "• Cookies and similar tracking technologies",
        "• Referral sources and search terms",
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "We use the information we collect for various purposes:",
        "• To provide, maintain, and improve our services",
        "• To process transactions and send related information",
        "• To send you technical notices, updates, and support messages",
        "• To respond to your comments, questions, and requests",
        "• To communicate with you about products, services, and events",
        "• To monitor and analyze trends, usage, and activities",
        "• To detect, prevent, and address technical issues and fraud",
        "• To personalize your experience and deliver relevant content",
        "• To comply with legal obligations and protect our rights",
      ],
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We take the security of your personal information seriously and implement appropriate technical and organizational measures:",
        "• Encryption of data in transit and at rest using industry-standard protocols",
        "• Secure servers with restricted access controls",
        "• Regular security audits and vulnerability assessments",
        "• Employee training on data protection and security practices",
        "• Incident response procedures and breach notification protocols",
        "",
        "While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security but will notify you of any breach as required by law.",
      ],
    },
    {
      icon: UserCheck,
      title: "Your Rights and Choices",
      content: [
        "You have certain rights regarding your personal information:",
        "• Access: Request access to the personal data we hold about you",
        "• Correction: Request correction of inaccurate or incomplete data",
        "• Deletion: Request deletion of your personal data",
        "• Portability: Request transfer of your data to another service",
        "• Objection: Object to processing of your personal data",
        "• Restriction: Request restriction of processing your data",
        "• Withdraw Consent: Withdraw consent at any time where we rely on consent",
        "",
        "To exercise these rights, please contact us at digitellercreative@gmail.com",
        "We will respond to your request within 30 days.",
      ],
    },
    {
      icon: Bell,
      title: "Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar tracking technologies to collect and track information:",
        "• Essential Cookies: Required for website functionality",
        "• Analytics Cookies: Help us understand how visitors use our website",
        "• Marketing Cookies: Used to deliver relevant advertisements",
        "• Preference Cookies: Remember your settings and preferences",
        "",
        "You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.",
        "",
        "We also use third-party services like Google Analytics, which may collect information about your online activities over time and across different websites.",
      ],
    },
    {
      icon: Shield,
      title: "Third-Party Services",
      content: [
        "We may share your information with third-party service providers who perform services on our behalf:",
        "• Payment processors for transaction processing",
        "• Cloud hosting providers for data storage",
        "• Email service providers for communications",
        "• Analytics providers for website performance",
        "• Marketing platforms for campaign management",
        "",
        "These service providers are contractually obligated to protect your information and use it only for the purposes we specify. We do not sell your personal information to third parties.",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Privacy Policy for DIGITELLER CREATIVE. Learn how we collect, use, and protect your personal information."
        />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-black text-white pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />

        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
              <span className="text-primary font-semibold">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Last Updated: December 2024
            </p>
            <p className="text-gray-400">
              At DIGITELLER CREATIVE, we are committed to protecting your privacy and ensuring
              the security of your personal information. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-800 rounded-2xl p-8 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                    {section.title}
                  </h2>
                </div>
                <div className="ml-16 space-y-3">
                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className={`text-gray-300 leading-relaxed ${
                        paragraph === "" ? "h-2" : ""
                      } ${paragraph.startsWith("•") ? "ml-4" : ""}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Additional Legal Sections */}
            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Data Retention
              </h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes
                  outlined in this Privacy Policy, unless a longer retention period is required or
                  permitted by law.
                </p>
                <p>
                  When we no longer need your information, we will securely delete or anonymize it in
                  accordance with our data retention policies and applicable legal requirements.
                </p>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                International Data Transfers
              </h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  Your information may be transferred to and maintained on computers located outside
                  of your state, province, country, or other governmental jurisdiction where data
                  protection laws may differ.
                </p>
                <p>
                  We take appropriate measures to ensure that your personal information receives an
                  adequate level of protection and that transfers comply with applicable data
                  protection laws.
                </p>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Children's Privacy
              </h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  Our services are not intended for children under the age of 13. We do not knowingly
                  collect personal information from children under 13. If you are a parent or guardian
                  and believe we have collected information about a child, please contact us immediately.
                </p>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Changes to This Privacy Policy
              </h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices
                  or for other operational, legal, or regulatory reasons. We will notify you of any
                  material changes by posting the new Privacy Policy on this page and updating the
                  "Last Updated" date.
                </p>
                <p>
                  We encourage you to review this Privacy Policy periodically to stay informed about
                  how we are protecting your information.
                </p>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Contact Us
              </h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or
                  our data practices, please contact us:
                </p>
                <div className="mt-4 space-y-2">
                  <p><strong className="text-white">DIGITELLER CREATIVE</strong></p>
                  <p>Email: digitellercreative@gmail.com</p>
                  <p>Phone: +91-7998596948</p>
                  <p>Address: E-79, Ramgarh, Kolkata 700047, India</p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Your Consent
              </h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  By using our website and services, you consent to the collection, use, and disclosure
                  of your information as described in this Privacy Policy. If you do not agree with
                  this Privacy Policy, please do not use our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black border-t border-gray-800">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Questions About Your Privacy?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We're here to help. Contact us if you have any questions or concerns about how we
            handle your personal information.
          </p>
          <a
            href="mailto:digitellercreative@gmail.com"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
          >
            Contact Privacy Team
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
