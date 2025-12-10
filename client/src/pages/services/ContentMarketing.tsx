import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  PenTool,
  FileText,
  Video,
  Mic,
  BarChart,
  Users,
  CheckCircle2,
  TrendingUp,
  Target,
  Lightbulb,
} from "lucide-react";
import { clientLogos } from "@/data/portfolio-assets";
import { FreshAdsFuelSection } from "@/components/FreshAdsFuelSection";
import { MadeToFlexSection } from "@/components/MadeToFlexSection";
import { VersatileDesignsSection } from "@/components/VersatileDesignsSection";
import { CreativePowerSection } from "@/components/CreativePowerSection";
import  {StatsSection}  from "@/components/StatsSection";
import { OurWorkSection } from "@/components/OurWorkSection";
import { TechEnabledSection } from "@/components/TechEnabledSection";
import { FaqSection } from "@/components/FaqSection";
export default function ContentMarketing() {
  const services = [
    {
      icon: FileText,
      title: "Blog & Article Writing",
      description: "SEO-optimized blog posts and articles that engage readers and rank well in search engines.",
    },
    {
      icon: Video,
      title: "Video Content",
      description: "Scripts, storyboards, and video content strategy that captivates and converts audiences.",
    },
    {
      icon: Mic,
      title: "Podcast Production",
      description: "End-to-end podcast creation from concept to editing, helping you build an engaged audio audience.",
    },
    {
      icon: PenTool,
      title: "Copywriting",
      description: "Persuasive copy for websites, emails, ads, and landing pages that drive action.",
    },
    {
      icon: Users,
      title: "Social Content",
      description: "Engaging social media content that builds community and drives meaningful interactions.",
    },
    {
      icon: BarChart,
      title: "Content Strategy",
      description: "Comprehensive content plans aligned with your business goals and audience needs.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Content Audit & Strategy",
      description: "Analyze your current content, identify gaps, and develop a strategic content roadmap aligned with business objectives.",
    },
    {
      step: "02",
      title: "Audience Research",
      description: "Deep dive into your target audience's needs, pain points, and content consumption habits.",
    },
    {
      step: "03",
      title: "Content Creation",
      description: "Produce high-quality, SEO-optimized content that educates, entertains, and engages your audience.",
    },
    {
      step: "04",
      title: "Distribution & Promotion",
      description: "Strategic content distribution across channels to maximize reach and engagement.",
    },
    {
      step: "05",
      title: "Performance Analysis",
      description: "Track metrics, analyze performance, and continuously optimize content for better results.",
    },
    {
      step: "06",
      title: "Iteration & Growth",
      description: "Refine strategy based on data insights and scale successful content initiatives.",
    },
  ];

  const benefits = [
    "Establish thought leadership in your industry",
    "Drive organic traffic and improve SEO rankings",
    "Generate qualified leads consistently",
    "Build trust and credibility with your audience",
    "Reduce customer acquisition costs",
    "Create evergreen assets that compound value",
    "Support sales team with valuable resources",
    "Educate customers and reduce support burden",
  ];

  const portfolioItems = [
    {
      title: "SaaS Blog Strategy",
      category: "B2B Technology",
      result: "+350% organic traffic in 6 months",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop",
    },
    {
      title: "E-commerce Content Hub",
      category: "Retail",
      result: "+200% conversion from content",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
    },
    {
      title: "Podcast Launch Campaign",
      category: "Finance",
      result: "10K+ subscribers in 3 months",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop",
    },
  ];

  const stats = [
    { icon: TrendingUp, number: "3x", label: "Average ROI from content" },
    { icon: Users, number: "70%", label: "Prefer learning via content" },
    { icon: Target, number: "80%", label: "Decision makers read content" },
    { icon: Lightbulb, number: "62%", label: "Trust branded content" },
  ];

  return (
    <>
      <Helmet>
        <title>Content Marketing Services - DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Strategic content marketing services that drive traffic, engagement, and conversions. From blog posts to video content, we create content that works."
        />
      </Helmet>
      <Navigation />

      {/* <clientLogos/> */}
      <FreshAdsFuelSection/>
      <MadeToFlexSection/>
      <VersatileDesignsSection/>
      <CreativePowerSection/>
      <StatsSection/>
      <OurWorkSection/>
      <TechEnabledSection/>
      <FaqSection/>



      <Footer />
    </>
  );
}
