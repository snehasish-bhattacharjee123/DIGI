import { motion } from "framer-motion";
import { useState } from "react";
import type { ReactNode } from "react";
import { Flag, Clock, Lightbulb, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VideoPlayer } from "@/components/VideoPlayer";
import { videoAssets } from "@/data/portfolio-assets";

interface FeaturePill {
  icon: ReactNode;
  title: string;
  delay: number;
}

const features: FeaturePill[] = [
  {
    icon: <Flag className="w-5 h-5 lg:w-6 lg:h-6" />,
    title: "67 countries",
    delay: 0,
  },
  {
    icon: <Clock className="w-5 h-5 lg:w-6 lg:h-6" />,
    title: "Video/photo production hubs in Bogotá and Johannesburg",
    delay: 0.2,
  },
  {
    icon: <Lightbulb className="w-5 h-5 lg:w-6 lg:h-6" />,
    title:
      "100% remote from day one, so we're expert collaborators in remote settings",
    delay: 0.4,
  },
];

const featuredWork = [
  {
    id: "featured-1",
    eyebrow: "Featured work",
    title: "Campaign story: Game Changer",
    poster: "https://source.unsplash.com/1200x800/?advertising,campaign&sig=21",
    videoDesktopUrl: videoAssets.successStories[0].desktop,
    videoMobileUrl: videoAssets.successStories[0].mobile,
  },
  {
    id: "featured-2",
    eyebrow: "Featured work",
    title: "Production sprint: Seamless Process",
    poster: "https://source.unsplash.com/1200x800/?video,production&sig=22",
    videoDesktopUrl: videoAssets.successStories[1].desktop,
    videoMobileUrl: videoAssets.successStories[1].mobile,
  },
  {
    id: "featured-3",
    eyebrow: "Featured work",
    title: "Behind the work: New Era",
    poster: "https://source.unsplash.com/1200x800/?design,creative&sig=23",
    videoDesktopUrl: videoAssets.newEra.desktop,
    videoMobileUrl: videoAssets.newEra.mobile,
  },
];

export function GlobalTeamSection() {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);

  const selectedItem = selectedWork !== null ? featuredWork[selectedWork] : null;

  const handleClose = () => setSelectedWork(null);

  return (
    <section className="relative overflow-hidden text-white py-0 min-h-[520px] md:min-h-[580px] lg:min-h-[640px]">
      {/* Full-Width Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.sanity.io/images/k0dlbavy/production/c4f5fdeae73ba665af447d9bd9bebc04d58ff18f-2271x1244.png?q=100&auto=format&fit=min"
          alt="Global team collaboration"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
        {/* Additional subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14 lg:py-16">
        <div className="max-w-2xl">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <span className="font-din text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-gray-400 block">
                OUR GLOBAL TEAM
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                When we say "world-class",{" "}
                <span className="font-extrabold tracking-tight text-primary">
                  we really mean it
                </span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-gray-200/90 leading-relaxed max-w-xl">
                As a fully remote company, we aren't bound by borders. So we're
                able to hire the best, no matter where they live, including
                South Africa, Brazil, Germany, Malaysia, Canada and more.
              </p>
            </div>

            {/* Glass Morphism Info Cards */}
            <div className="space-y-3 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/8 hover:border-white/20 transition-all duration-500 shadow-xl"
                >
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative flex items-start gap-3 md:gap-4">
                    <span className="flex items-center justify-center rounded-lg bg-white/5 border border-white/10 p-2.5 md:p-3 flex-shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
                      {feature.icon}
                    </span>
                    <div className="flex-1 pt-1">
                      <h3 className="font-heading text-sm sm:text-base lg:text-lg tracking-wide text-gray-100 leading-relaxed">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Featured Work */}
            <div className="pt-6 lg:pt-8">
              <div className="flex items-end justify-between gap-6 mb-4">
                <div className="space-y-2">
                  <span className="font-din text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-gray-400 block">
                    FEATURED WORK
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                    Proof in motion
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {featuredWork.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedWork(index)}
                    className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/8 transition-all duration-500 text-left"
                  >
                    <div className="relative aspect-[16/10]">
                      <img
                        src={item.poster}
                        alt={item.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/15 backdrop-blur border border-white/20 group-hover:bg-white/20 transition-colors">
                          <Play className="h-4 w-4 text-white" />
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 md:p-4">
                      <div className="text-xs uppercase tracking-widest text-gray-300">
                        {item.eyebrow}
                      </div>
                      <div className="font-heading mt-2 text-sm sm:text-base font-semibold text-white leading-snug">
                        {item.title}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[1]">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {selectedWork !== null && (
        <Dialog open={selectedWork !== null} onOpenChange={handleClose}>
          <DialogContent className="max-w-7xl w-full max-h-[90vh] p-0 bg-black border-0">
            <DialogHeader className="sr-only">
              <DialogTitle>Featured Work Video</DialogTitle>
            </DialogHeader>
            <div className="relative w-full aspect-video">
              <VideoPlayer
                src={
                  window.innerWidth >= 768
                    ? selectedItem!.videoDesktopUrl
                    : selectedItem!.videoMobileUrl
                }
                className="aspect-video"
                isModal={true}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
