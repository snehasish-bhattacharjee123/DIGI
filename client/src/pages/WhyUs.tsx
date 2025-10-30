// import { Navigation } from "@/components/Navigation";
// import { Footer } from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Helmet } from "react-helmet-async";
// import {
//   CheckCircle2,
//   Users,
//   Zap,
//   Award,
//   Globe,
//   TrendingUp,
//   Clock,
//   Shield,
//   Target,
//   Sparkles,
//   Heart,
//   Star,
// } from "lucide-react";
// import { motion } from "framer-motion";

// export default function WhyUs() {
//   const benefits = [
//     {
//       icon: Users,
//       title: "Expert Team",
//       description:
//         "Our talented team of designers, strategists, and developers bring years of experience and creativity to every project.",
//     },
//     {
//       icon: Zap,
//       title: "Fast Turnaround",
//       description:
//         "We understand deadlines matter. Our streamlined process ensures quick delivery without compromising quality.",
//     },
//     {
//       icon: Award,
//       title: "Award-Winning Work",
//       description:
//         "Our portfolio speaks for itself with multiple industry awards and recognition for creative excellence.",
//     },
//     {
//       icon: Globe,
//       title: "Global Reach",
//       description:
//         "We've worked with clients across 30+ countries, understanding diverse markets and cultural nuances.",
//     },
//     {
//       icon: TrendingUp,
//       title: "Proven Results",
//       description:
//         "Our strategies have helped clients increase engagement by 300% and boost conversions significantly.",
//     },
//     {
//       icon: Clock,
//       title: "24/7 Support",
//       description:
//         "Round-the-clock support ensures your questions are answered and your projects stay on track.",
//     },
//     {
//       icon: Shield,
//       title: "Quality Guarantee",
//       description:
//         "We stand behind our work with unlimited revisions until you're completely satisfied.",
//     },
//     {
//       icon: Target,
//       title: "Results-Driven",
//       description:
//         "Every decision we make is backed by data and focused on achieving your business objectives.",
//     },
//   ];

//   const stats = [
//     { number: "500+", label: "Projects Completed", icon: Sparkles },
//     { number: "200+", label: "Happy Clients", icon: Heart },
//     { number: "50+", label: "Team Members", icon: Users },
//     { number: "30+", label: "Countries Served", icon: Globe },
//   ];

//   const differentiators = [
//     {
//       title: "Data-Driven Creativity",
//       description:
//         "We blend creative excellence with data analytics to ensure every design decision is backed by insights and measurable results.",
//     },
//     {
//       title: "End-to-End Solutions",
//       description:
//         "From strategy to execution, we handle every aspect of your creative needs, providing a seamless experience from start to finish.",
//     },
//     {
//       title: "Scalable Partnerships",
//       description:
//         "Whether you're a startup or an enterprise, our flexible engagement models grow with your business needs.",
//     },
//     {
//       title: "Cutting-Edge Technology",
//       description:
//         "We leverage the latest tools and technologies to deliver innovative solutions that keep you ahead of the competition.",
//     },
//     {
//       title: "Transparent Process",
//       description:
//         "Clear communication, regular updates, and complete transparency throughout the project lifecycle.",
//     },
//     {
//       title: "Industry Expertise",
//       description:
//         "Deep experience across multiple industries means we understand your market and speak your language.",
//     },
//   ];

//   const testimonials = [
//     {
//       quote:
//         "Digiteller Creative transformed our brand identity completely. The attention to detail and creative vision exceeded all our expectations.",
//       author: "Sarah Johnson",
//       role: "CEO, TechCorp International",
//       rating: 5,
//     },
//     {
//       quote:
//         "Working with this team was an absolute pleasure. They understood our vision and brought it to life better than we imagined.",
//       author: "Michael Chen",
//       role: "Marketing Director, InnovateLab",
//       rating: 5,
//     },
//     {
//       quote:
//         "The ROI we've seen from their social media campaigns is incredible. Our engagement is up 300% in just 3 months.",
//       author: "Emma Williams",
//       role: "Founder, FitLife Wellness",
//       rating: 5,
//     },
//   ];

//   return (
//     <>
//       <Helmet>
//         <title>Why Choose Us - DIGITELLER CREATIVE</title>
//         <meta
//           name="description"
//           content="Discover why leading brands trust DIGITELLER CREATIVE for their creative and digital marketing needs. Expert team, proven results, and unmatched quality."
//         />
//       </Helmet>
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative bg-brand-blue-900 text-brand-beige-100 pt-32 pb-20 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,117,31,0.08),transparent_50%)]" />

//         <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <p className="text-sm md:text-base text-brand-orange uppercase tracking-wider font-semibold mb-4">
//               Your Creative Partner
//             </p>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//               Why Choose{" "}
//               <span className="text-brand-orange">Digiteller Creative?</span>
//             </h1>
//             <p className="text-lg sm:text-xl text-brand-gray-400 mb-8 leading-relaxed">
//               We're not just another creative agency. We're your strategic
//               partner in building brands that matter, creating stories that
//               resonate, and delivering results that exceed expectations.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-gradient-to-b from-brand-blue-900 to-brand-blue-800">
//         <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="text-center group"
//               >
//                 <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-orange/20 transition-colors duration-300">
//                   <stat.icon className="w-8 h-8 text-brand-orange" />
//                 </div>
//                 <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-brand-gray-400 text-sm md:text-base">
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-24 bg-brand-beige-100">
//         <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <p className="text-sm md:text-base text-brand-orange uppercase tracking-wider font-semibold mb-4">
//               Our Advantages
//             </p>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-900 mb-4">
//               The Digiteller{" "}
//               <span className="text-brand-orange">Advantage</span>
//             </h2>
//             <p className="text-xl text-brand-gray-700 max-w-3xl mx-auto">
//               Experience the difference that sets us apart from the rest
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 className="bg-white border border-brand-gray-300 rounded-2xl p-8 hover:border-brand-orange/50 hover:shadow-brand-lg transition-all duration-300 group"
//               >
//                 <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 group-hover:scale-110 transition-all duration-300">
//                   <benefit.icon className="w-7 h-7 text-brand-orange" />
//                 </div>
//                 <h3 className="text-xl font-bold text-brand-blue-900 mb-3 group-hover:text-brand-orange transition-colors duration-300">
//                   {benefit.title}
//                 </h3>
//                 <p className="text-brand-gray-700 leading-relaxed">
//                   {benefit.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Creative Excellence Section with Stats & Testimonials */}
//       <section className="py-24 bg-white">
//         <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <p className="text-sm md:text-base text-brand-orange uppercase tracking-wider font-semibold mb-4">
//               Creative Excellence
//             </p>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-900 mb-4">
//               The team behind 500+ global brands?{" "}
//               <span className="italic font-serif text-brand-orange">
//                 That's us
//               </span>
//             </h2>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
//             {/* Left Column */}
//             <div className="flex flex-col gap-6">
//               {/* Thumbs Up Icon */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 className="hidden md:flex w-16 h-16 bg-brand-green/20 rounded-xl items-center justify-center self-end"
//               >
//                 <CheckCircle2 className="w-8 h-8 text-brand-green" />
//               </motion.div>

//               {/* 98% Stat Card */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//                 className="bg-brand-beige-100 p-8 rounded-2xl"
//               >
//                 <div className="text-7xl md:text-8xl font-serif font-bold text-brand-blue-900 mb-4">
//                   98%
//                 </div>
//                 <p className="text-lg text-brand-gray-700">
//                   Of projects are delivered on or before the deadline.
//                 </p>
//               </motion.div>

//               {/* Testimonial Card 1 */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 }}
//                 className="bg-gradient-to-br from-brand-orange/90 to-brand-orange text-white p-8 rounded-2xl"
//               >
//                 <p className="text-lg mb-8 leading-relaxed">
//                   "For us it has been important to find a creative partner like
//                   Digiteller – a team we can trust to deliver quality work on
//                   time, even with short notices."
//                 </p>
//                 <div className="flex items-center gap-4">
//                   <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
//                     <Users className="w-10 h-10 text-white/80" />
//                   </div>
//                   <div>
//                     <div className="font-semibold text-lg">Sarah Mitchell</div>
//                     <div className="text-white/90">Head of Marketing</div>
//                     <div className="text-sm text-white/80 mt-1">
//                       Tech Innovations Ltd
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Right Column */}
//             <div className="flex flex-col gap-6 md:flex-col-reverse">
//               {/* Testimonial Card 2 */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 }}
//                 className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white p-8 rounded-2xl"
//               >
//                 <p className="text-lg mb-8 leading-relaxed">
//                   "Digiteller is my creative team's creative team—and one of the
//                   best creative teams I've ever worked with."
//                 </p>
//                 <div className="flex items-center gap-4">
//                   <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
//                     <Users className="w-10 h-10 text-white/80" />
//                   </div>
//                   <div>
//                     <div className="font-semibold text-lg">James Parker</div>
//                     <div className="text-brand-beige-100/90">
//                       Brand Design Manager
//                     </div>
//                     <div className="text-sm text-brand-beige-100/70 mt-1">
//                       Global Ventures Inc
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* 94% Stat Card */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//                 className="bg-brand-beige-100 p-8 rounded-2xl"
//               >
//                 <div className="text-7xl md:text-8xl font-serif font-bold text-brand-blue-900 mb-4">
//                   94%
//                 </div>
//                 <p className="text-lg text-brand-gray-700">
//                   Of our customers rate their deliverables as exceeding
//                   expectations.
//                 </p>
//               </motion.div>

//               {/* Heart Icon */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 className="hidden md:flex w-16 h-16 bg-brand-orange/20 rounded-xl items-center justify-center self-start"
//               >
//                 <Heart className="w-8 h-8 text-brand-orange" />
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Differentiators Section */}
//       <section className="py-24 bg-brand-blue-900 text-brand-beige-100">
//         <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <p className="text-sm md:text-base text-brand-orange uppercase tracking-wider font-semibold mb-4">
//               What Sets Us Apart
//             </p>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-beige-100 mb-4">
//               What Makes Us <span className="text-brand-orange">Different</span>
//             </h2>
//             <p className="text-xl text-brand-gray-400 max-w-3xl mx-auto">
//               Our unique approach combines creativity with strategy to deliver
//               exceptional results
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {differentiators.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 className="bg-brand-blue-800/50 border border-brand-blue-700 rounded-xl p-6 hover:border-brand-orange/50 hover:bg-brand-blue-800/70 transition-all duration-300 group"
//               >
//                 <div className="flex items-start gap-3">
//                   <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
//                   <div>
//                     <h3 className="text-lg font-bold text-brand-beige-100 mb-2 group-hover:text-brand-orange transition-colors duration-300">
//                       {item.title}
//                     </h3>
//                     <p className="text-brand-gray-400 text-sm leading-relaxed">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-24 bg-brand-beige-100">
//         <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <p className="text-sm md:text-base text-brand-orange uppercase tracking-wider font-semibold mb-4">
//               Client Success Stories
//             </p>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-900 mb-4">
//               What Our <span className="text-brand-orange">Clients Say</span>
//             </h2>
//             <p className="text-xl text-brand-gray-700 max-w-3xl mx-auto">
//               Don't just take our word for it - hear from the brands we've
//               helped transform
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white border border-brand-gray-300 rounded-2xl p-8 hover:border-brand-orange/50 hover:shadow-brand-lg transition-all duration-300"
//               >
//                 <div className="flex gap-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-5 h-5 fill-brand-orange text-brand-orange"
//                     />
//                   ))}
//                 </div>
//                 <p className="text-brand-gray-700 text-lg mb-6 leading-relaxed italic">
//                   "{testimonial.quote}"
//                 </p>
//                 <div className="border-t border-brand-gray-300 pt-4">
//                   <div className="font-semibold text-brand-blue-900">
//                     {testimonial.author}
//                   </div>
//                   <div className="text-sm text-brand-gray-600">
//                     {testimonial.role}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 bg-gradient-to-b from-brand-beige-50 to-brand-beige-100">
//         <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-r from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 border border-brand-orange/30 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
//           >
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,117,31,0.1),transparent_70%)]" />
//             <div className="relative z-10">
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-beige-100 mb-6">
//                 Ready to Work with{" "}
//                 <span className="text-brand-orange">the Best?</span>
//               </h2>
//               <p className="text-xl text-brand-gray-400 mb-8 max-w-2xl mx-auto">
//                 Join hundreds of satisfied clients who have transformed their
//                 brands with our creative expertise.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <a
//                   href="https://wa.me/917998596948"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Button variant="cta" size="lg" className="text-lg px-8">
//                     Book a Demo
//                   </Button>
//                 </a>
//                 <a href="/our-work">
//                   <Button
//                     variant="outline"
//                     size="lg"
//                     className="border-2 border-brand-beige-100 text-brand-beige-100 hover:bg-brand-beige-100 hover:text-brand-blue-900 text-lg px-8"
//                   >
//                     View Our Work
//                   </Button>
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }


"use client";

import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Users,
  Zap,
  Award,
  Globe,
  TrendingUp,
  Clock,
  Shield,
  Target,
  Sparkles,
  Heart,
  Star,
} from "lucide-react";

// ============================================================
// Lazy Imports (same pattern as Home.tsx)
// ============================================================
const CreativePowerSection = lazy(() =>
  import("@/components/CreativePowerSection").then((m) => ({
    default: m.CreativePowerSection ?? m.default,
  }))
);

const GlobalTeamSection = lazy(() =>
  import("@/components/GlobalTeamSection").then((m) => ({
    default: m.GlobalTeamSection ?? m.default,
  }))
);

const CTASection = lazy(() =>
  import("@/components/CTASection").then((m) => ({
    default: m.CTASection ?? m.default,
  }))
);



const OurPeopleSection = lazy(()=>
    import ("@/components/OurPeopleSection").then((m) =>({
      default:m.OurPeopleSection ?? m.default,
    }))
);


const HowWeWorkSection = lazy(()=>
    import ("@/components/HowWeWorkSection").then((m) =>({
      default:m.HowWeWorkSection ?? m.default,
    }))
);

const TeamSection = lazy(()=>
    import ("@/components/TeamSection").then((m) =>({
      default:m.TeamSection ?? m.default,
    }))
);

// ============================================================
// Skeleton Loader (matches Home.tsx)
// ============================================================
function SectionSkeleton({ height = "md" }: { height?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "h-64",
    md: "h-96",
    lg: "h-[600px]",
  };
  return (
    <div
      className={`w-full ${sizes[height]} bg-muted/30 animate-pulse rounded-2xl`}
      aria-hidden="true"
    />
  );
}

// ============================================================
// WHY US PAGE
// ============================================================
export default function WhyUs() {
  const benefits = [
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our talented team of designers, strategists, and developers bring years of experience and creativity to every project.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description:
        "We understand deadlines matter. Our streamlined process ensures quick delivery without compromising quality.",
    },
    {
      icon: Award,
      title: "Award-Winning Work",
      description:
        "Our portfolio speaks for itself with multiple industry awards and recognition for creative excellence.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "We've worked with clients across 30+ countries, understanding diverse markets and cultural nuances.",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description:
        "Our strategies have helped clients increase engagement by 300% and boost conversions significantly.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock support ensures your questions are answered and your projects stay on track.",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description:
        "We stand behind our work with unlimited revisions until you're completely satisfied.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Every decision we make is backed by data and focused on achieving your business objectives.",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Sparkles },
    { number: "200+", label: "Happy Clients", icon: Heart },
    { number: "50+", label: "Team Members", icon: Users },
    { number: "30+", label: "Countries Served", icon: Globe },
  ];

  const testimonials = [
    {
      quote:
        "Digiteller Creative transformed our brand identity completely. The attention to detail and creative vision exceeded all our expectations.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp International",
      rating: 5,
    },
    {
      quote:
        "Working with this team was an absolute pleasure. They understood our vision and brought it to life better than we imagined.",
      author: "Michael Chen",
      role: "Marketing Director, InnovateLab",
      rating: 5,
    },
    {
      quote:
        "The ROI we've seen from their social media campaigns is incredible. Our engagement is up 300% in just 3 months.",
      author: "Emma Williams",
      role: "Founder, FitLife Wellness",
      rating: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose Us - DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Discover why leading brands trust DIGITELLER CREATIVE for their creative and digital marketing needs. Expert team, proven results, and unmatched quality."
        />
        <link rel="canonical" href="https://digiteller.com/why-us" />
      </Helmet>

      <Navigation />

      {/* <main id="main-content" role="main" className="min-h-screen bg-background">  */}
        {/* === HERO SECTION === */}
        {/* <section className="py-20 text-center bg-gradient-to-b from-muted/30 via-background to-background">
          <div className="container mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Why Choose <span className="text-primary">Digiteller Creative</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              We don’t just design — we empower your brand with purpose, precision,
              and creativity that connects with your audience.
            </motion.p>
          </div>
        </section> */}

        {/* === STATS SECTION === */}
        {/* <section className="py-16 bg-background">
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <stat.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-3xl font-bold">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* === BENEFITS SECTION === */}
        {/* <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Makes Us Different
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                >
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* === TESTIMONIALS SECTION === */}
        {/* <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg"
                >
                  <p className="italic text-muted-foreground mb-4">“{t.quote}”</p>
                  <div className="flex justify-center mb-2">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 text-yellow-500" />
                    ))}
                  </div>
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}
      {/* </main>  */}

      {/* === ADDITIONAL LAZY LOADED SECTIONS === */}
              {/* Our People Section */}
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="md" />}>
              <OurPeopleSection />
            </Suspense>
          </ErrorBoundary>

           {/* Team Section */}
          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton height="lg" />}>
              <TeamSection />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton height="lg" />}>
          <GlobalTeamSection />
        </Suspense>
      </ErrorBoundary>

          <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton height="lg" />}>
          <HowWeWorkSection />
        </Suspense>
      </ErrorBoundary>


      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton height="lg" />}>
          <CreativePowerSection />
        </Suspense>
      </ErrorBoundary>

      

      <ErrorBoundary>
        <Suspense fallback={<SectionSkeleton height="md" />}>
          <CTASection />
        </Suspense>
      </ErrorBoundary>

      <Footer />
    </>
  );
}
