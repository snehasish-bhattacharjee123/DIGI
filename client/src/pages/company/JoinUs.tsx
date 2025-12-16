import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Music,
  HeartHandshake,
  PartyPopper,
  Shield,
  Cake,
  TrendingUp,
  ArrowRight,
  Instagram,
  Briefcase,
  ClipboardList,
} from "lucide-react";

export default function JoinUs() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const lifeAt = {
    title: "Life at DIGITELLER",
    description:
      "We’re not your usual agency. We move fast, ask better questions, and actually like the people we work with. It’s a place where showing up as yourself isn’t just accepted — it’s expected. Good vibes, big ideas, and the occasional prank war included.",
    instagramHref: "https://instagram.com/digitellercreative",
    instagramLabel: "Team DIGITELLER on Instagram",
  };

  const videos = [
    {
      title: "DIGITELLER Graphics Reel",
      src: "/videos/Digiteller%20Graphics%20Reel%20Final.mp4",
    },
    {
      title: "Motion Graphics",
      src: "/videos/7048309_Animation_Motion_Graphic_3840x2160.mp4",
    },
    {
      title: "Behind the Scenes",
      src: "/videos/3135926-hd_1920_1080_30fps.mp4",
    },
  ];

  const perks = [
    {
      icon: Music,
      title: "All-Day Music Vibes",
      description: "Plug in and play what fuels you. Music’s always on post-lunch.",
    },
    {
      icon: HeartHandshake,
      title: "Free Therapy for You + Your Family",
      description: "Mental health support — no red tape, no fine print.",
    },
    {
      icon: PartyPopper,
      title: "Month-End Parties",
      description: "Celebrate wins, wrap up the month, and make memories together.",
    },
    {
      icon: Shield,
      title: "Health Insurance",
      description: "Medical support that makes adulting a little easier.",
    },
    {
      icon: Cake,
      title: "Day Off on Your Birthday",
      description: "Because no one should be on ClickUp when there’s cake.",
    },
    {
      icon: TrendingUp,
      title: "We Promote From Within",
      description: "Your growth matters. Great work doesn’t go unnoticed here.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Join Us | Careers | DIGITELLER CREATIVE</title>
        <meta
          name="description"
          content="Join DIGITELLER CREATIVE. Explore life at the studio, perks, open roles, and apply online."
        />
      </Helmet>

      <div className="min-h-screen bg-brand-beige-100">
        <Navigation />

        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,117,31,0.12),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(194,240,135,0.06),transparent_55%)]" />

          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-500/30 mb-6">
                <Briefcase className="w-4 h-4 text-brand-orange-500" />
                <span className="text-sm font-medium text-brand-orange-500">Join Us</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Build with a team that
                <span className="block text-brand-orange-500">ships great creative, fast</span>
              </h1>

              <p className="text-xl text-brand-beige-100/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                If you thrive on ownership, craft, and momentum — you’ll fit right in.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/careers/jobdetails/63803">
                  <Button
                    size="lg"
                    className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    View open role
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a href="/talent-requisition">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-brand-blue-900 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    Talent requisition
                    <ClipboardList className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-12 gap-10 items-start"
            >
              <div className="lg:col-span-5">
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue-900 mb-4">
                  {lifeAt.title}
                </h2>
                <p className="text-lg text-brand-gray-600 leading-relaxed mb-6">
                  {lifeAt.description}
                </p>
                <a
                  href={lifeAt.instagramHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-brand-blue-900 font-semibold hover:text-brand-orange-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  {lifeAt.instagramLabel}
                </a>
              </div>

              <div className="lg:col-span-7">
                <div className="grid md:grid-cols-2 gap-6">
                  {videos.map((video, index) => (
                    <div
                      key={video.src}
                      className={
                        index === 0
                          ? "md:col-span-2 rounded-2xl overflow-hidden border border-brand-gray-200 bg-brand-beige-100"
                          : "rounded-2xl overflow-hidden border border-brand-gray-200 bg-brand-beige-100"
                      }
                    >
                      <div className="px-5 py-4 border-b border-brand-gray-200">
                        <h3 className="text-base font-bold text-brand-blue-900">{video.title}</h3>
                      </div>
                      <div className="p-4">
                        <video
                          src={video.src}
                          controls
                          playsInline
                          className="w-full rounded-xl bg-black"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-beige-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue-900 mb-4">
                Why you’ll love working here
              </h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                Benefits that support your energy, focus, and long-term growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {perks.map((perk, index) => {
                const Icon = perk.icon;
                return (
                  <motion.div
                    key={perk.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="p-8 rounded-xl bg-white border-2 border-brand-gray-200 hover:border-brand-orange-500 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="w-14 h-14 rounded-lg bg-brand-blue-900 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-brand-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue-900 mb-2">{perk.title}</h3>
                    <p className="text-brand-gray-600 leading-relaxed">{perk.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue-900 mb-4">Apply now</h2>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                Explore open roles or request hiring support.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-brand-beige-100 border-2 border-brand-gray-200">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-blue-900 mb-2">
                      Talent Acquisition Executive
                    </h3>
                    <p className="text-brand-gray-600">Full-time · Mohali, Chandigarh</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a href="/careers/jobdetails/63803">
                    <Button className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-semibold">
                      View job details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white border-2 border-white/10">
                <h3 className="text-2xl font-bold mb-2">Talent requisition</h3>
                <p className="text-brand-beige-100/90 leading-relaxed">
                  Need to hire? Submit a requisition with role details and requirements.
                </p>
                <div className="mt-6">
                  <a href="/talent-requisition">
                    <Button className="bg-white text-brand-blue-900 hover:bg-brand-beige-100 font-semibold">
                      Open requisition form
                      <ClipboardList className="w-4 h-4 ml-2" />
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
