// import { Navigation } from "@/components/Navigation";
// import { Footer } from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Helmet } from "react-helmet-async";
// import { useState } from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   MessageSquare,
//   Clock,
//   Send,
//   CheckCircle,
//   Instagram,
//   Linkedin,
//   Twitter,
//   ArrowRight,
//   Sparkles,
//   Zap,
//   HeartHandshake,
// } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     service: "",
//     budget: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<
//     "idle" | "success" | "error"
//   >("idle");

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitStatus("success");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         service: "",
//         budget: "",
//         message: "",
//       });

//       // Reset success message after 5 seconds
//       setTimeout(() => setSubmitStatus("idle"), 5000);
//     }, 1500);
//   };

//   const contactMethods = [
//     {
//       icon: Mail,
//       title: "Email Us",
//       value: "digitellercreative@gmail.com",
//       link: "mailto:digitellercreative@gmail.com",
//       description: "Send us an email anytime",
//       color: "bg-brand-orange/10 group-hover:bg-brand-orange/20",
//       iconColor: "text-brand-orange",
//     },
//     {
//       icon: Phone,
//       title: "Call Us",
//       value: "+91-7998596948",
//       link: "tel:+917998596948",
//       description: "Mon-Fri from 9am to 6pm IST",
//       color: "bg-brand-green/10 group-hover:bg-brand-green/20",
//       iconColor: "text-brand-green",
//     },
//     {
//       icon: MessageSquare,
//       title: "WhatsApp",
//       value: "+91-7998596948",
//       link: "https://wa.me/917998596948",
//       description: "Chat with us instantly",
//       color: "bg-brand-blue-900/10 group-hover:bg-brand-blue-900/20",
//       iconColor: "text-brand-blue-900",
//     },
//     {
//       icon: MapPin,
//       title: "Visit Us",
//       value: "E-79, Ramgarh, Kolkata 700047",
//       link: "https://maps.google.com/?q=E-79,Ramgarh,Kolkata",
//       description: "Come say hello at our office",
//       color: "bg-brand-orange/10 group-hover:bg-brand-orange/20",
//       iconColor: "text-brand-orange",
//     },
//   ];

//   const services = [
//     "Brand Identity",
//     "Graphic Design",
//     "UI/UX Design",
//     "Social Media Marketing",
//     "Content Marketing",
//     "SEO & Analytics",
//     "Video Production",
//     "Animation",
//     "Photography",
//     "Web Development",
//     "Enterprise Solutions",
//     "Other",
//   ];

//   const budgetRanges = [
//     "Under $5,000",
//     "$5,000 - $10,000",
//     "$10,000 - $25,000",
//     "$25,000 - $50,000",
//     "$50,000+",
//     "Not Sure Yet",
//   ];

//   const socialLinks = [
//     {
//       icon: Instagram,
//       name: "Instagram",
//       href: "https://instagram.com/digitellercreative",
//       color: "hover:text-pink-500",
//     },
//     {
//       icon: Linkedin,
//       name: "LinkedIn",
//       href: "https://linkedin.com/company/digitellercreative",
//       color: "hover:text-blue-600",
//     },
//     {
//       icon: Twitter,
//       name: "Twitter",
//       href: "https://twitter.com/digitellercreative",
//       color: "hover:text-blue-400",
//     },
//   ];

//   const reasons = [
//     {
//       icon: Zap,
//       title: "Quick Response",
//       description: "We typically respond within 24 hours on business days",
//     },
//     {
//       icon: HeartHandshake,
//       title: "Personalized Approach",
//       description: "Every project gets a dedicated team and custom strategy",
//     },
//     {
//       icon: Sparkles,
//       title: "Free Consultation",
//       description: "Get expert advice with no strings attached",
//     },
//   ];

//   const faqs = [
//     {
//       question: "What is your typical response time?",
//       answer:
//         "We aim to respond to all inquiries within 24 hours on business days. For urgent matters, WhatsApp is the fastest way to reach us.",
//     },
//     {
//       question: "Do you work with international clients?",
//       answer:
//         "Absolutely! We've worked with clients across 30+ countries and are experienced in remote collaboration across different time zones.",
//     },
//     {
//       question: "What information should I include in my message?",
//       answer:
//         "Tell us about your project goals, timeline, budget range, and any specific requirements. The more details you provide, the better we can assist you.",
//     },
//     {
//       question: "Do you offer free consultations?",
//       answer:
//         "Yes! We offer a free initial consultation to discuss your project, understand your needs, and provide recommendations.",
//     },
//   ];

//   return (
//     <>
//       <Helmet>
//         <title>Contact Us - DIGITELLER CREATIVE</title>
//         <meta
//           name="description"
//           content="Get in touch with DIGITELLER CREATIVE. Contact us for creative services, brand identity, graphic design, and digital marketing solutions."
//         />
//       </Helmet>
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative bg-brand-blue-900 text-brand-beige-100 pt-32 pb-20 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,117,31,0.08),transparent_50%)]" />

//         <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <p className="text-sm md:text-base text-brand-orange uppercase tracking-wider font-semibold mb-4">
//               Let's Connect
//             </p>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//               Let's Create Something{" "}
//               <span className="text-brand-orange">Amazing Together</span>
//             </h1>
//             <p className="text-lg sm:text-xl text-brand-gray-400 mb-8 leading-relaxed">
//               Have a project in mind? Want to discuss how we can help your brand
//               grow? We'd love to hear from you. Reach out and let's start the
//               conversation.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact Methods Grid */}
//       <section className="py-16 bg-gradient-to-b from-brand-blue-900 to-brand-blue-800">
//         <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {contactMethods.map((method, index) => (
//               <motion.a
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 href={method.link}
//                 target={method.link.startsWith("http") ? "_blank" : undefined}
//                 rel={
//                   method.link.startsWith("http")
//                     ? "noopener noreferrer"
//                     : undefined
//                 }
//                 className="bg-brand-blue-800/50 border border-brand-blue-700 rounded-2xl p-6 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group"
//               >
//                 <div
//                   className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center mb-4 transition-colors duration-300`}
//                 >
//                   <method.icon className={`w-6 h-6 ${method.iconColor}`} />
//                 </div>
//                 <h3 className="text-lg font-bold text-brand-beige-100 mb-2 group-hover:text-brand-orange transition-colors duration-300">
//                   {method.title}
//                 </h3>
//                 <p className="text-brand-orange font-medium mb-2 text-sm">
//                   {method.value}
//                 </p>
//                 <p className="text-brand-gray-400 text-sm">
//                   {method.description}
//                 </p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Contact Us Section */}
//       <section className="py-16 bg-brand-beige-100">
//         <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {reasons.map((reason, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <reason.icon className="w-8 h-8 text-brand-orange" />
//                 </div>
//                 <h3 className="text-xl font-bold text-brand-blue-900 mb-2">
//                   {reason.title}
//                 </h3>
//                 <p className="text-brand-gray-700">{reason.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form & Info Section */}
//       <section className="py-24 bg-brand-beige-50">
//         <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="bg-white border border-brand-gray-300 rounded-2xl p-8 shadow-brand-lg"
//             >
//               <h2 className="text-3xl font-bold text-brand-blue-900 mb-2">
//                 Send Us a Message
//               </h2>
//               <p className="text-brand-gray-600 mb-6">
//                 Fill out the form below and we'll get back to you as soon as
//                 possible.
//               </p>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-semibold text-brand-blue-900 mb-2"
//                   >
//                     Your Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-brand-beige-100 border border-brand-gray-300 rounded-lg text-brand-blue-900 placeholder:text-brand-gray-500 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-colors"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-semibold text-brand-blue-900 mb-2"
//                     >
//                       Email *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 bg-brand-beige-100 border border-brand-gray-300 rounded-lg text-brand-blue-900 placeholder:text-brand-gray-500 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-colors"
//                       placeholder="john@example.com"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="phone"
//                       className="block text-sm font-semibold text-brand-blue-900 mb-2"
//                     >
//                       Phone
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-brand-beige-100 border border-brand-gray-300 rounded-lg text-brand-blue-900 placeholder:text-brand-gray-500 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-colors"
//                       placeholder="+91 1234567890"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="company"
//                     className="block text-sm font-semibold text-brand-blue-900 mb-2"
//                   >
//                     Company Name
//                   </label>
//                   <input
//                     type="text"
//                     id="company"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-brand-beige-100 border border-brand-gray-300 rounded-lg text-brand-blue-900 placeholder:text-brand-gray-500 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-colors"
//                     placeholder="Your Company"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <label
//                       htmlFor="service"
//                       className="block text-sm font-semibold text-brand-blue-900 mb-2"
//                     >
//                       Service Interested In
//                     </label>
//                     <select
//                       id="service"
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-brand-beige-100 border border-brand-gray-300 rounded-lg text-brand-blue-900 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-colors"
//                     >
//                       <option value="">Select a service</option>
//                       {services.map((service) => (
//                         <option key={service} value={service}>
//                           {service}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="budget"
//                       className="block text-sm font-semibold text-brand-blue-900 mb-2"
//                     >
//                       Budget Range
//                     </label>
//                     <select
//                       id="budget"
//                       name="budget"
//                       value={formData.budget}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-brand-beige-100 border border-brand-gray-300 rounded-lg text-brand-blue-900 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-colors"
//                     >
//                       <option value="">Select budget range</option>
//                       {budgetRanges.map((budget) => (
//                         <option key={budget} value={budget}>
//                           {budget}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-semibold text-brand-blue-900 mb-2"
//                   >
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={6}
//                     className="w-full px-4 py-3 bg-brand-beige-100 border border-brand-gray-300 rounded-lg text-brand-blue-900 placeholder:text-brand-gray-500 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-colors resize-none"
//                     placeholder="Tell us about your project..."
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   disabled={isSubmitting}
//                   variant="cta"
//                   size="lg"
//                   className="w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {isSubmitting ? (
//                     "Sending..."
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5 mr-2" />
//                       Send Message
//                     </>
//                   )}
//                 </Button>

//                 {submitStatus === "success" && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="bg-brand-green/10 border border-brand-green/30 rounded-lg p-4 text-brand-blue-900 text-sm flex items-start gap-3"
//                   >
//                     <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
//                     <span>
//                       Thank you! Your message has been sent successfully. We'll
//                       get back to you soon.
//                     </span>
//                   </motion.div>
//                 )}

//                 {submitStatus === "error" && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-600 text-sm"
//                   >
//                     Something went wrong. Please try again or contact us
//                     directly via email or phone.
//                   </motion.div>
//                 )}
//               </form>
//             </motion.div>

//             {/* Additional Information */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="space-y-6"
//             >
//               {/* Office Hours */}
//               <div className="bg-white border border-brand-gray-300 rounded-2xl p-8 shadow-brand">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center">
//                     <Clock className="w-6 h-6 text-brand-orange" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-brand-blue-900">
//                     Office Hours
//                   </h3>
//                 </div>
//                 <div className="space-y-3 text-brand-gray-700">
//                   <div className="flex justify-between items-center py-2 border-b border-brand-gray-200">
//                     <span className="font-medium">Monday - Friday</span>
//                     <span className="text-brand-blue-900 font-semibold">
//                       9:00 AM - 6:00 PM
//                     </span>
//                   </div>
//                   <div className="flex justify-between items-center py-2 border-b border-brand-gray-200">
//                     <span className="font-medium">Saturday</span>
//                     <span className="text-brand-blue-900 font-semibold">
//                       10:00 AM - 4:00 PM
//                     </span>
//                   </div>
//                   <div className="flex justify-between items-center py-2 border-b border-brand-gray-200">
//                     <span className="font-medium">Sunday</span>
//                     <span className="text-brand-gray-500">Closed</span>
//                   </div>
//                   <div className="pt-3 text-sm text-brand-gray-600">
//                     All times are in Indian Standard Time (IST)
//                   </div>
//                 </div>
//               </div>

//               {/* Social Media */}
//               <div className="bg-white border border-brand-gray-300 rounded-2xl p-8 shadow-brand">
//                 <h3 className="text-2xl font-bold text-brand-blue-900 mb-3">
//                   Follow Us
//                 </h3>
//                 <p className="text-brand-gray-700 mb-6">
//                   Stay connected and see our latest work on social media
//                 </p>
//                 <div className="flex gap-4">
//                   {socialLinks.map((social) => (
//                     <a
//                       key={social.name}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-12 h-12 bg-brand-beige-100 border border-brand-gray-300 rounded-lg flex items-center justify-center text-brand-gray-600 hover:border-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300 hover:scale-110"
//                       aria-label={social.name}
//                     >
//                       <social.icon className="w-5 h-5" />
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               {/* Quick Response CTA */}
//               <div className="bg-gradient-to-br from-brand-green/10 to-brand-green/5 border border-brand-green/30 rounded-2xl p-8">
//                 <h3 className="text-2xl font-bold text-brand-blue-900 mb-3">
//                   Need a Quick Response?
//                 </h3>
//                 <p className="text-brand-gray-700 mb-6">
//                   For urgent inquiries, WhatsApp is the fastest way to reach us.
//                   We typically respond within minutes during business hours.
//                 </p>
//                 <a
//                   href="https://wa.me/917998596948"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Button variant="success" size="lg" className="w-full group">
//                     <MessageSquare className="w-5 h-5 mr-2" />
//                     Chat on WhatsApp
//                     <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-24 bg-brand-beige-100">
//         <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <p className="text-sm md:text-base text-brand-orange uppercase tracking-wider font-semibold mb-4">
//               Common Questions
//             </p>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-900 mb-4">
//               Frequently Asked{" "}
//               <span className="text-brand-orange">Questions</span>
//             </h2>
//             <p className="text-xl text-brand-gray-700 max-w-3xl mx-auto">
//               Find answers to common questions about working with us
//             </p>
//           </motion.div>

//           <div className="max-w-3xl mx-auto space-y-4">
//             {faqs.map((faq, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white border border-brand-gray-300 rounded-xl p-6 hover:border-brand-orange/50 hover:shadow-brand-lg transition-all duration-300"
//               >
//                 <h3 className="text-lg font-bold text-brand-blue-900 mb-3">
//                   {faq.question}
//                 </h3>
//                 <p className="text-brand-gray-700 leading-relaxed">
//                   {faq.answer}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-24 bg-brand-blue-900">
//         <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl sm:text-4xl font-bold text-brand-beige-100 mb-4">
//               Visit Our <span className="text-brand-orange">Studio</span>
//             </h2>
//             <p className="text-xl text-brand-gray-400">
//               We're located in Kolkata, India. Drop by for a coffee and let's
//               discuss your project in person.
//             </p>
//           </motion.div>
//           <div className="bg-brand-blue-800 border border-brand-blue-700 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
//             <div className="text-center">
//               <MapPin className="w-16 h-16 text-brand-orange mx-auto mb-4" />
//               <p className="text-brand-beige-100 text-lg font-semibold mb-2">
//                 E-79, Ramgarh, Kolkata 700047
//               </p>
//               <a
//                 href="https://maps.google.com/?q=E-79,Ramgarh,Kolkata"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-brand-orange hover:text-brand-orange-600 transition-colors duration-300 inline-flex items-center gap-2"
//               >
//                 Open in Google Maps
//                 <ArrowRight className="w-4 h-4" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/digitellercreative",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/digitellercreative",
      label: "Facebook",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/digitellercreative",
      label: "LinkedIn",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Get in touch with DIGITELLER CREATIVE. Contact us for creative services."
        />
      </Helmet>
      <Navigation theme="blue" />

      {/* Hero Section with Company Name */}
      <section className="bg-white text-brand-blue-900 pt-20 pb-16">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              DIGITELLER
              <br />
              CREATIVE
            </h1>
          </div>

          {/* Intro Text Section under the title */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-brand-blue-900">CONTACT</h2>
            <h3 className="text-2xl mt-2 font-medium text-brand-blue-900">Digiteller Creative</h3>
            <p className="mt-4 text-base text-brand-blue-900/70">
              This is the space to share the business's contact information. Let people know when the business is available, how long it will take to get a response, and what the best ways are to get in touch. Remind readers that the business is happy to answer their questions, and encourage them to reach out.
            </p>
            <p className="mt-4 text-base">
              <a href="mailto:DIGITELLERCREATIVE@GMAIL.COM" className="text-brand-blue-800 hover:text-brand-orange transition-colors">DIGITELLERCREATIVE@GMAIL.COM</a>
              <br />
              +91-7998596948
              <br />
              E-79, RAMGARH,
              <br />
              KOLKATA 700047
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Contact Info */}
            <div className="flex flex-col justify-start">
              {/* Contact Details */}
              <div className="space-y-4 mb-12">
                <a
                  href="mailto:digitellercreative@gmail.com"
                  className="text-sm md:text-base uppercase tracking-wide text-brand-blue-700 hover:text-brand-orange transition-colors"
                >
                  DIGITELLERCREATIVE@GMAIL.COM
                </a>
                <p className="text-sm md:text-base uppercase tracking-wide text-brand-blue-900">
                  +91-7998596948
                </p>
                <p className="text-sm md:text-base uppercase tracking-wide text-brand-blue-900">
                  E-79, RAMGARH,
                  <br />
                  KOLKATA 700047
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-brand-blue-700 hover:text-brand-orange transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <h2 className="text-lg md:text-xl font-bold text-brand-blue-900 mb-3 uppercase tracking-wide">
                Ready to Collaborate?
              </h2>
              <p className="text-brand-blue-900/70 mb-8 text-sm md:text-base">
                Let's create something epic together
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name and Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs font-bold text-brand-blue-900 mb-2 uppercase tracking-wide"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                      className="w-full px-0 py-2 bg-transparent border-b border-brand-blue-900 text-brand-blue-900 placeholder-gray-400 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs font-bold text-brand-blue-900 mb-2 uppercase tracking-wide"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Smith"
                      className="w-full px-0 py-2 bg-transparent border-b border-brand-blue-900 text-brand-blue-900 placeholder-gray-400 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-brand-blue-900 mb-2 uppercase tracking-wide"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="hello@example.com"
                    className="w-full px-0 py-2 bg-transparent border-b border-brand-blue-900 text-brand-blue-900 placeholder-gray-400 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-brand-blue-900 mb-2 uppercase tracking-wide"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message here"
                    rows={4}
                    className="w-full px-0 py-2 bg-transparent border-b border-brand-blue-900 text-brand-blue-900 placeholder-gray-400 focus:outline-none focus:border-brand-orange transition-colors text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-blue-900 text-white font-bold py-3 px-6 rounded-lg uppercase tracking-wide text-sm hover:bg-brand-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-sm">
                    Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-12">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <h2 className="text-2xl font-bold text-brand-blue-900 mb-6">Find Us on the Map</h2>
          <div className="w-full h-[420px] rounded-2xl overflow-hidden border border-brand-blue-900/20 shadow-sm">
            <iframe
              title="Digiteller Creative Location"
              src="https://www.google.com/maps?q=E-79%2C%20Ramgarh%2C%20Kolkata%20700047&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
