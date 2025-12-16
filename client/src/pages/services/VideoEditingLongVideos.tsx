import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { VideoEditingServiceSubmenu } from "@/components/VideoEditingServiceSubmenu";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink, Play } from "lucide-react";







function VideoEditingLongFormGrowthGrid() {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {longFormGrowthItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-brand-gray-200 bg-white p-4 md:p-5 shadow-sm"
            >
              <div className="w-full overflow-hidden rounded-xl bg-white">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-square object-contain"
                />
              </div>
              <p className="mt-4 text-[13px] md:text-sm font-semibold text-brand-blue-900 text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoEditingWatchItInActionCta() {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 flex justify-center">
        <a
          href="https://www.instagram.com/prathamjindal14/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-semibold px-6 py-6 rounded-full shadow-md hover:shadow-lg transition-all">
            <span>Watch it in Action</span>
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </section>
  );
}

type EditsInActionItem = {
  thumbnail: string;
  videoUrl: string;
  channelAvatar: string;
  channelName: string;
  subscribers: string;
};

const editsInActionItems: EditsInActionItem[] = [
  {
    thumbnail: "https://prapermedia.com/wp-content/uploads/2025/05/1.jpg",
    videoUrl: "https://www.youtube.com/watch?v=JGQsLMnbavY",
    channelAvatar:
      "https://yt3.ggpht.com/3JCa8zKuqdZDOA-uWrI4Or30LTZoOPDnw-Lqa_oLmTKW1eEoXsPCkiRfzS7LiiU3PyMdWuMLUw=s800-c-k-c0x00ffffff-no-rj",
    channelName: "The Powerful Humans",
    subscribers: "346k",
  },
  {
    thumbnail: "https://prapermedia.com/wp-content/uploads/2025/05/2-1.jpg",
    videoUrl: "https://www.youtube.com/watch?v=djF2Whi8XEk",
    channelAvatar:
      "https://yt3.ggpht.com/3JCa8zKuqdZDOA-uWrI4Or30LTZoOPDnw-Lqa_oLmTKW1eEoXsPCkiRfzS7LiiU3PyMdWuMLUw=s800-c-k-c0x00ffffff-no-rj",
    channelName: "The Powerful Humans",
    subscribers: "346k",
  },
  {
    thumbnail: "https://prapermedia.com/wp-content/uploads/2025/05/3-1.jpg",
    videoUrl: "https://www.youtube.com/watch?v=JuVEWgHv54Y",
    channelAvatar:
      "https://yt3.ggpht.com/kPHQeQsyFdlL7VJy4bF5qjnc2wfG5__pVr5ngNzPrffdY6ClIwSFjuXO2joo1wMrUIPMQjKD=s800-c-k-c0x00ffffff-no-rj",
    channelName: "Reel Rejects",
    subscribers: "1.43M",
  },
  {
    thumbnail: "https://prapermedia.com/wp-content/uploads/2025/05/4-1.jpg",
    videoUrl: "https://youtu.be/FSzF0cQ8IAQ?si=u9ryqnJqkSFfS1LH",
    channelAvatar:
      "https://yt3.ggpht.com/RpkQjohSRSKrbp_x2GZ8v3lOHJteyjnjpX1No8Z-XDmJbGKBm2i0VDpEKG-AjHIqriFpi1HV=s800-c-k-c0x00ffffff-no-rj",
    channelName: "The Founder's Dream | Abhishek vyas",
    subscribers: "190k",
  },
  {
    thumbnail: "https://prapermedia.com/wp-content/uploads/2025/05/5-1.jpg",
    videoUrl: "https://www.youtube.com/watch?v=UCYPHbyngAM",
    channelAvatar:
      "https://yt3.ggpht.com/pnWVjmmZfI7hrctv-XRlk8FWrpPaP2nPgi3Cwwc5P75FUFSgweB-bh8LSLNA82SluRqXL1I5Dg=s800-c-k-c0x00ffffff-no-rj",
    channelName: "CineDesi",
    subscribers: "2.46M",
  },
  {
    thumbnail: "https://prapermedia.com/wp-content/uploads/2025/05/6-1.jpg",
    videoUrl: "https://www.youtube.com/watch?v=VmcvIV9QjkI",
    channelAvatar:
      "https://yt3.ggpht.com/RpkQjohSRSKrbp_x2GZ8v3lOHJteyjnjpX1No8Z-XDmJbGKBm2i0VDpEKG-AjHIqriFpi1HV=s800-c-k-c0x00ffffff-no-rj",
    channelName: "The Founder's Dream | Abhishek vyas",
    subscribers: "190k",
  },
];

type LongFormGrowthItem = {
  imageSrc: string;
  title: string;
};

const longFormGrowthItems: LongFormGrowthItem[] = [
  {
    imageSrc: "https://prapermedia.com/wp-content/uploads/2025/05/Reel-1.png",
    title: "Hook-first editing structure",
  },
  {
    imageSrc: "https://prapermedia.com/wp-content/uploads/2025/05/Reel-2.png",
    title: "Platform-first format design",
  },
  {
    imageSrc: "https://prapermedia.com/wp-content/uploads/2025/05/Reel-3.png",
    title: "Consistent posting frequency",
  },
  {
    imageSrc: "https://prapermedia.com/wp-content/uploads/2025/05/Reel-4.png",
    title: "Cross-platform repurposing",
  },
];

function VideoEditingEditsInActionCarousel({
  onPlay,
}: {
  onPlay: (videoUrl: string) => void;
}) {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <Carousel opts={{ align: "center", loop: true }} className="w-full">
          <CarouselContent>
            {editsInActionItems.map((item) => (
              <CarouselItem
                key={`${item.channelName}-${item.videoUrl}`}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="w-full">
                  <div className="relative overflow-hidden rounded-[22px] border border-brand-gray-200 bg-white shadow-sm">
                    <div
                      className="relative h-[260px] sm:h-[320px] w-full"
                      style={{
                        backgroundImage: `url(${item.thumbnail})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="absolute inset-0 bg-black/10" />
                      <button
                        type="button"
                        onClick={() => onPlay(item.videoUrl)}
                        className="absolute inset-0 flex items-center justify-center"
                        aria-label={`Play ${item.channelName}`}
                      >
                        <span className="inline-flex h-[78px] w-[78px] items-center justify-center rounded-full border-2 border-white/80 bg-white/15 backdrop-blur-sm transition-transform duration-300 hover:scale-105">
                          <Play className="h-8 w-8 text-white translate-x-[1px]" />
                        </span>
                      </button>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.channelAvatar}
                          alt={item.channelName}
                          loading="lazy"
                          decoding="async"
                          className="h-12 w-12 rounded-full object-cover border border-brand-gray-200"
                        />
                        <div className="min-w-0">
                          <div className="font-semibold text-brand-blue-900 truncate">
                            {item.channelName}
                          </div>
                          <div className="text-sm text-brand-gray-600">
                            {item.subscribers} <span className="text-brand-gray-500">Subscribers</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="max-md:hidden left-2 bg-white/90 border border-brand-gray-200 shadow-md" />
          <CarouselNext className="max-md:hidden right-2 bg-white/90 border border-brand-gray-200 shadow-md" />
        </Carousel>
      </div>
    </section>
  );
}

type BeforeAfterVariant = {
  title: "Before" | "After";
  backgroundClassName: string;
  imageSrc: string;
  bullets: string[];
};

const beforeAfter: BeforeAfterVariant[] = [
  {
    title: "Before",
    backgroundClassName: "bg-[#141414]",
    imageSrc: "https://prapermedia.com/wp-content/uploads/2025/04/Before.jpg",
    bullets: [
      "Drop Offs after 6:26 min mark",
      "Avg Watch time 8:07 mins",
      "Low ad suitability",
      "Flat editing style",
    ],
  },
  {
    title: "After",
    backgroundClassName: "bg-[#b0001a]",
    imageSrc: "https://prapermedia.com/wp-content/uploads/2025/04/After-2.jpg",
    bullets: [
      "Stronger retention across episodes",
      "Avg watch time 38:43 min",
      "Boosted monetisation",
      "Dynamic, meme-driven edits",
    ],
  },
];

function VideoEditingBeforeAfter() {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {beforeAfter.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index === 0 ? 0 : 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden rounded-[22px] shadow-xl"
            >
              <div className={`absolute inset-0 ${card.backgroundClassName}`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_55%)] opacity-80" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.10),transparent_55%)] opacity-80" />

              <div className="relative p-6 sm:p-8 flex flex-col">
                <h4 className="text-center text-white text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {card.title}
                </h4>

                <div className="mt-6 rounded-2xl bg-white p-4 sm:p-5 shadow-sm">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full rounded-xl object-cover aspect-[6/5]"
                  />
                </div>

                <ul className="mt-6 space-y-4 text-white/95 text-sm sm:text-base">
                  {card.bullets.map((text) => (
                    <li key={text} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-white flex-shrink-0" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function VideoEditingEditsInActionHeading() {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 md:pt-12 md:pb-10">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-brand-blue-900"
        >
          Our long-form{" "}
          <mark className="relative inline-block bg-transparent px-2">
            <span className="relative z-10">edits in action</span>
            <span className="absolute inset-x-0 -bottom-0.5 h-[3px] bg-brand-orange-500 rounded-full -z-0" />
          </mark>
        </motion.h2>
      </div>
    </section>
  );
}



function VideoEditingFancyHeading() {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-brand-blue-900"
        >
          200% Higher Watch Time for{" "}
          <mark className="relative inline-block bg-transparent px-2">
            <span className="relative z-10">Reel Rejects</span>
            <span className="absolute inset-x-0 -bottom-0.5 h-[3px] bg-brand-orange-500 rounded-full -z-0" />
          </mark>
        </motion.h2>
      </div>
    </section>
  );
}










function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    let videoId: string | null = null;

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        videoId = parsed.searchParams.get("v");
      } else if (parsed.pathname.startsWith("/embed/")) {
        videoId = parsed.pathname.split("/embed/")[1] ?? null;
      } else if (parsed.pathname.startsWith("/shorts/")) {
        videoId = parsed.pathname.split("/shorts/")[1] ?? null;
      }
    }

    if (host === "youtu.be") {
      videoId = parsed.pathname.replace(/^\//, "") || null;
    }

    if (!videoId) return null;

    const embed = new URL(`https://www.youtube.com/embed/${videoId}`);
    embed.searchParams.set("autoplay", "1");
    embed.searchParams.set("rel", "0");
    embed.searchParams.set("modestbranding", "1");
    return embed.toString();
  } catch {
    return null;
  }
}

export default function VideoEditingLongVideos() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const activeEmbedUrl = useMemo(() => {
    if (!activeVideoUrl) return null;
    return getYouTubeEmbedUrl(activeVideoUrl);
  }, [activeVideoUrl]);

  return (
    <>
      <Helmet>
        <title>Long Videos | Video Editing Services</title>
        <meta
          name="description"
          content="Long video editing services: YouTube, podcasts, interviews, webinars and more."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation theme="white" />

        <main
          id="main-content"
          role="main"
          className="wst-fonts overflow-x-hidden pt-20"
        >
          {/* <VideoEditingHero /> */}
          <VideoEditingServiceSubmenu />
          <VideoEditingFancyHeading />
          <VideoEditingBeforeAfter />
          <VideoEditingWatchItInActionCta />
          <VideoEditingEditsInActionHeading />
          <VideoEditingEditsInActionCarousel
            onPlay={(videoUrl) => {
              setActiveVideoUrl(videoUrl);
              setIsVideoModalOpen(true);
            }}
          />
          <VideoEditingLongFormGrowthGrid />
          {/* <VideoEditingServicesSection />
          <ServicesSection limit={3} />
          <FeaturedWorkSection /> */}
        </main>

        <Dialog
          open={isVideoModalOpen}
          onOpenChange={(open) => {
            setIsVideoModalOpen(open);
            if (!open) setActiveVideoUrl(null);
          }}
        >
          <DialogContent className="max-w-[92vw] sm:max-w-3xl md:max-w-4xl p-0 overflow-hidden bg-black border border-brand-gray-200">
            <div className="w-full aspect-video bg-black">
              {activeEmbedUrl ? (
                <iframe
                  key={activeEmbedUrl}
                  src={activeEmbedUrl}
                  title="YouTube video player"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : null}
            </div>
          </DialogContent>
        </Dialog>

        <Footer />
      </div>
    </>
  );
}
