import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin, Clock, Building2, ExternalLink } from "lucide-react";
import { useRoute } from "wouter";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  introduction: string;
  responsibilities: string[];
  qualifications: string[];
  whyJoin: string[];
  externalJobDetailsUrl: string;
};

const jobsById: Record<string, Job> = {
  "63803": {
    id: "63803",
    title: "Talent Acquisition Executive",
    company: "Praper Media",
    location: "Mohali, Chandigarh",
    type: "Full-Time",
    introduction:
      "Praper Media is a dynamic media and video editing agency dedicated to producing high-quality content for a diverse range of clients. We are committed to building a team of skilled professionals who share our passion for creativity and innovation.\n\nWe are seeking a motivated and experienced Talent Acquisition Executive to join our team. In this role, you will be responsible for identifying, attracting, and hiring top talent to support our creative and operational goals.",
    responsibilities: [
      "Manage the end-to-end recruitment process for roles in media production, video editing, motion graphics, and other creative positions.",
      "Proactively source candidates using job boards, social media, and professional networks.",
      "Screen resumes and conduct initial candidate assessments to evaluate skills and suitability.",
      "Coordinate and schedule interviews between candidates and hiring managers.",
      "Ensure a seamless and professional candidate experience throughout the hiring process.",
      "Facilitate onboarding by managing documentation and conducting orientation sessions.",
      "Collaborate with department heads to ensure new hires integrate effectively.",
      "Build and maintain strong relationships with candidates and hiring teams.",
      "Maintain accurate candidate records and confidentiality.",
      "Prepare recruitment reports, offer letters, and job descriptions as needed.",
    ],
    qualifications: [
      "Bachelor’s degree in Human Resources, Business Administration, or a related field.",
      "Previous experience in recruitment or talent acquisition.",
      "Excellent communication and interpersonal skills.",
      "Familiarity with sourcing tools, job portals, and social media platforms.",
      "Strong organizational and multitasking abilities.",
      "Proficiency in Microsoft Office Suite (Word, Excel, PowerPoint).",
    ],
    whyJoin: [
      "Work with a creative and collaborative team in a growing organization.",
      "Gain valuable experience in recruiting for creative roles.",
      "Opportunities for professional development and career growth.",
      "Contribute to shaping a talented workforce in the media and video editing industry.",
    ],
    externalJobDetailsUrl: "https://prapermedia.keka.com/careers/jobdetails/63803",
  },
};

export default function JobDetails() {
  const [match, params] = useRoute("/careers/jobdetails/:jobId");
  const jobId = match ? params?.jobId : undefined;
  const job = jobId ? jobsById[jobId] : undefined;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (!job) {
    return (
      <>
        <Helmet>
          <title>Job Details | DIGITELLER CREATIVE</title>
        </Helmet>
        <div className="min-h-screen bg-brand-beige-100">
          <Navigation />
          <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-brand-gray-200 p-8">
              <h1 className="text-3xl font-bold text-brand-blue-900 mb-2">Job not found</h1>
              <p className="text-brand-gray-600 mb-8">
                The job you’re looking for isn’t available here.
              </p>
              <a href="/join-us">
                <Button className="bg-brand-blue-900 hover:bg-brand-blue-800 text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Join Us
                </Button>
              </a>
            </div>
          </section>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{job.title} | Job Details | DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content={`Job details for ${job.title}. Apply online.`}
        />
      </Helmet>

      <div className="min-h-screen bg-brand-beige-100">
        <Navigation />

        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,117,31,0.12),transparent_55%)]" />
          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <a
                href="/join-us"
                className="inline-flex items-center text-sm font-semibold text-white/90 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Join Us
              </a>

              <h1 className="text-4xl sm:text-5xl font-bold mt-6 mb-5">
                {job.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-sm text-brand-beige-100/90">
                <div className="inline-flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>{job.company}</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{job.type}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`/careers/applyjob/${job.id}`}>
                  <Button className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-semibold">
                    Apply now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a
                  href={job.externalJobDetailsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-brand-blue-900 font-semibold"
                  >
                    View on Keka
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div className="bg-brand-beige-100 rounded-2xl border-2 border-brand-gray-200 p-8">
                <h2 className="text-2xl font-bold text-brand-blue-900 mb-4">Introduction</h2>
                {job.introduction.split("\n\n").map((p) => (
                  <p key={p} className="text-brand-gray-600 leading-relaxed mb-4 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-8 bg-white rounded-2xl border-2 border-brand-gray-200 p-8">
                <h2 className="text-2xl font-bold text-brand-blue-900 mb-4">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="text-brand-gray-600 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 bg-white rounded-2xl border-2 border-brand-gray-200 p-8">
                <h2 className="text-2xl font-bold text-brand-blue-900 mb-4">Qualifications</h2>
                <ul className="space-y-3">
                  {job.qualifications.map((item) => (
                    <li key={item} className="text-brand-gray-600 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white rounded-2xl border-2 border-white/10 p-8 sticky top-28">
                <h2 className="text-2xl font-bold mb-4">Why Join Us</h2>
                <ul className="space-y-3">
                  {job.whyJoin.map((item) => (
                    <li key={item} className="text-brand-beige-100/90 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a href={`/careers/applyjob/${job.id}`}>
                    <Button className="w-full bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-semibold">
                      Apply now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>

                <div className="mt-4">
                  <a href="/talent-requisition" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-2 border-white text-white hover:bg-white hover:text-brand-blue-900 font-semibold"
                    >
                      Submit talent requisition
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
