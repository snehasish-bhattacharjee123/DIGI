import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { FileText, Users, CreditCard, AlertTriangle, Shield, Scale } from "lucide-react";

export default function Terms() {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using the services of DIGITELLER CREATIVE ('Company', 'we', 'us', or 'our'), you accept and agree to be bound by the terms and provisions of this agreement.",
        "",
        "If you do not agree to these Terms of Service, please do not use our services. We reserve the right to modify these terms at any time, and such modifications shall be effective immediately upon posting. Your continued use of our services after any such changes constitutes your acceptance of the new Terms of Service.",
      ],
    },
    {
      icon: Users,
      title: "Use of Services",
      content: [
        "Our services include but are not limited to:",
        "• Brand identity design and development",
        "• Graphic design and visual content creation",
        "• Social media marketing and management",
        "• UI/UX design and user experience optimization",
        "• Video production and animation services",
        "• Website and application design",
        "• Digital marketing and advertising campaigns",
        "",
        "You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of our services complies with all applicable laws and regulations.",
      ],
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      content: [
        "Payment terms are established in individual service agreements or proposals:",
        "",
        "• Deposits: A deposit may be required before work begins, typically 50% of the project cost",
        "• Payment Schedule: Payment milestones will be outlined in your project agreement",
        "• Late Payments: Late payments may incur interest charges of 1.5% per month",
        "• Refunds: Refund policies vary by service and will be specified in your agreement",
        "• Subscription Services: Recurring services are billed monthly or annually as agreed",
        "",
        "All prices are in USD unless otherwise stated. Prices do not include applicable taxes, which will be added to invoices where required by law.",
      ],
    },
    {
      icon: Shield,
      title: "Intellectual Property Rights",
      content: [
        "Ownership of Work Product:",
        "Upon full payment, you will own the final deliverables as specified in your project agreement. This includes:",
        "• Final approved designs and creative assets",
        "• Licensed fonts and stock imagery as specified",
        "• Source files as outlined in your agreement",
        "",
        "We retain ownership of:",
        "• All preliminary designs, concepts, and drafts not selected",
        "• Our design processes, methodologies, and templates",
        "• The right to display work in our portfolio unless otherwise agreed",
        "",
        "Third-Party Materials: Any third-party materials (fonts, stock photos, etc.) are licensed separately and subject to their respective terms and conditions.",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Activities",
      content: [
        "You agree not to:",
        "• Use our services for any illegal or unauthorized purpose",
        "• Violate any laws in your jurisdiction",
        "• Infringe upon intellectual property rights of others",
        "• Transmit any malicious code, viruses, or harmful components",
        "• Attempt to gain unauthorized access to our systems",
        "• Interfere with or disrupt our services or servers",
        "• Impersonate any person or entity",
        "• Collect or store personal data about other users",
        "• Use our services to create content that is defamatory, obscene, or offensive",
        "• Resell or redistribute our services without authorization",
      ],
    },
    {
      icon: Scale,
      title: "Disclaimers and Warranties",
      content: [
        "Our services are provided 'as is' and 'as available' without warranties of any kind, either express or implied, including but not limited to:",
        "",
        "• We do not guarantee that our services will be uninterrupted or error-free",
        "• We do not warrant that results obtained from our services will meet your expectations",
        "• We do not guarantee specific business outcomes or results",
        "• We are not responsible for third-party services or content",
        "",
        "While we strive for excellence in all our work, creative services involve subjective elements and we cannot guarantee satisfaction for all aspects of design preferences.",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Terms of Service for DIGITELLER CREATIVE. Read our terms and conditions for using our creative and design services."
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
              Terms of Service
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Last Updated: December 2024
            </p>
            <p className="text-gray-400">
              Please read these Terms of Service carefully before using our services.
              These terms govern your use of DIGITELLER CREATIVE's services and establish
              the legal agreement between you and our company.
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
                Limitation of Liability
              </h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  To the maximum extent permitted by applicable law, DIGITELLER CREATIVE shall not be
                  liable for any indirect, incidental, special, consequential, or punitive damages,
                  or any loss of profits or revenues, whether incurred directly or indirectly, or any
                  loss of data, use, goodwill, or other intangible losses.
                </p>
                <p>
                  Our total liability for any claims arising from or relating to these Terms or our
                  services shall not exceed the amount you paid us in the twelve (12) months preceding
                  the claim.
                </p>
                <p>
                  Some jurisdictions do not allow the exclusion or limitation of liability for
                  consequential or incidental damages, so the above limitations may not apply to you.
                </p>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Indemnification
              </h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  You agree to indemnify, defend, and hold harmless DIGITELLER CREATIVE, its officers,
                  directors, employees, agents, and affiliates from and against any claims, liabilities,
                  damages, losses, and expenses, including reasonable legal fees, arising out of or in
                  any way connected with:
                </p>
                <ul className="ml-4 space-y-2">
                  <li>• Your access to or use of our services</li>
                  <li>• Your violation of these Terms</li>
                  <li>• Your violation of any third-party rights</li>
                  <li>• Any content you provide to us</li>
                  <li>• Your use of our deliverables in a manner not authorized by these Terms</li>
                </ul>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Project Revisions and Approvals
              </h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  Revision rounds are specified in individual project agreements. Additional revisions
                  beyond the agreed scope may incur additional charges.
                </p>
                <p>
                  You are responsible for reviewing and approving all deliverables in a timely manner.
                  Once you approve final deliverables, no further revisions are included unless
                  separately agreed upon.
                </p>
                <p>
                  If you fail to provide feedback or approval within the timeframes specified in your
                  project agreement, we reserve the right to consider the deliverables approved and
                  proceed to final delivery and invoicing.
                </p>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Confidentiality
              </h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  We respect the confidentiality of your business information. Any confidential
                  information shared with us will be protected and not disclosed to third parties
                  without your consent, except as required by law.
                </p>
                <p>
                  If you require additional confidentiality protections, we can execute a separate
                  Non-Disclosure Agreement (NDA) upon request.
                </p>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Termination
              </h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  Either party may terminate a project agreement with written notice. Termination terms:
                </p>
                <ul className="ml-4 space-y-2">
                  <li>• You are responsible for payment for all work completed up to the termination date</li>
                  <li>• Any deposits paid are non-refundable</li>
                  <li>• We will provide all work completed to date in its current state</li>
                  <li>• Rights to incomplete work remain with DIGITELLER CREATIVE until full payment is received</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to suspend or terminate services immediately if you breach these
                  Terms, fail to make required payments, or engage in prohibited activities.
                </p>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Governing Law and Disputes
              </h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India,
                  without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising from these Terms or our services shall be resolved through
                  good-faith negotiations. If negotiations fail, disputes shall be subject to the
                  exclusive jurisdiction of the courts in Kolkata, India.
                </p>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Changes to Terms
              </h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  We reserve the right to modify these Terms at any time. We will notify users of any
                  material changes by posting the updated Terms on our website and updating the
                  "Last Updated" date.
                </p>
                <p>
                  Your continued use of our services after any changes indicates your acceptance of
                  the new Terms. If you do not agree to the modified Terms, you must stop using our
                  services.
                </p>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Severability
              </h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that
                  provision will be limited or eliminated to the minimum extent necessary so that
                  these Terms will otherwise remain in full force and effect.
                </p>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
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
                Entire Agreement
              </h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  These Terms, together with any project-specific agreements, proposals, or statements
                  of work, constitute the entire agreement between you and DIGITELLER CREATIVE regarding
                  our services and supersede all prior agreements and understandings.
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
            Questions About Our Terms?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We're here to help clarify any questions you have about our Terms of Service.
            Don't hesitate to reach out.
          </p>
          <a
            href="mailto:digitellercreative@gmail.com"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
          >
            Contact Legal Team
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
