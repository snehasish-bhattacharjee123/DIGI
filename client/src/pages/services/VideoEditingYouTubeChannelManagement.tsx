import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { VideoEditingServiceSubmenu } from "@/components/VideoEditingServiceSubmenu";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useMemo, useState } from "react";
import { Play } from "lucide-react";

type ChannelExample = {
  title: string;
  thumbnail: string;
  videoUrl: string;
};

const channelExamples: ChannelExample[] = [
  {
    title: "Packaging + publish-ready edit",
    thumbnail: "https://prapermedia.com/wp-content/uploads/2025/05/1.jpg",
    videoUrl: "https://www.youtube.com/watch?v=JGQsLMnbavY",
  },
  {
    title: "Retention improvements",
    thumbnail: "https://prapermedia.com/wp-content/uploads/2025/05/3-1.jpg",
    videoUrl: "https://www.youtube.com/watch?v=JuVEWgHv54Y",
  },
  {
    title: "Channel growth storytelling",
    thumbnail: "https://prapermedia.com/wp-content/uploads/2025/05/6-1.jpg",
    videoUrl: "https://www.youtube.com/watch?v=VmcvIV9QjkI",
  },
];

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

export default function VideoEditingYouTubeChannelManagement() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const activeEmbedUrl = useMemo(() => {
    if (!activeVideoUrl) return null;
    return getYouTubeEmbedUrl(activeVideoUrl);
  }, [activeVideoUrl]);

  return (
    <>
      <Helmet>
        <title>YouTube Channel Management | Video Editing Services</title>
        <meta
          name="description"
          content="YouTube channel management services including strategy, SEO, publishing support and analytics for growth."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation theme="white" />

        <main id="main-content" role="main" className="wst-fonts overflow-x-hidden pt-20">
          <VideoEditingServiceSubmenu />

          <section className="bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
              <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-blue-900">
                YouTube Channel Management
              </h1>
              <p className="mt-4 text-center text-brand-gray-600 max-w-2xl mx-auto">
                End-to-end support to grow your channel—content planning, optimization, and performance tracking.
              </p>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="rounded-2xl border border-brand-gray-200 p-6">
                  <h3 className="font-semibold text-brand-blue-900">Content strategy</h3>
                  <p className="mt-2 text-sm text-brand-gray-600">
                    Topic planning, retention-first structure, and packaging that matches your audience.
                  </p>
                </div>
                <div className="rounded-2xl border border-brand-gray-200 p-6">
                  <h3 className="font-semibold text-brand-blue-900">SEO + publishing</h3>
                  <p className="mt-2 text-sm text-brand-gray-600">
                    Titles, descriptions, chapters, thumbnails, and upload workflows done consistently.
                  </p>
                </div>
                <div className="rounded-2xl border border-brand-gray-200 p-6">
                  <h3 className="font-semibold text-brand-blue-900">Analytics + iteration</h3>
                  <p className="mt-2 text-sm text-brand-gray-600">
                    Performance review loops to improve CTR, watch-time, and subscriber conversion.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
              <h2 className="text-center text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-blue-900">
                Examples
              </h2>
              <p className="mt-3 text-center text-brand-gray-600 max-w-2xl mx-auto">
                Click a card to watch inside this page.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {channelExamples.map((item) => (
                  <button
                    key={item.videoUrl}
                    type="button"
                    onClick={() => {
                      setActiveVideoUrl(item.videoUrl);
                      setIsVideoModalOpen(true);
                    }}
                    className="group text-left rounded-2xl border border-brand-gray-200 overflow-hidden bg-white shadow-sm"
                    aria-label={`Play ${item.title}`}
                  >
                    <div
                      className="relative w-full aspect-video"
                      style={{
                        backgroundImage: `url(${item.thumbnail})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="absolute inset-0 bg-black/15" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                          <Play className="h-7 w-7 text-white translate-x-[1px]" />
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="font-semibold text-brand-blue-900">{item.title}</div>
                      <div className="mt-1 text-sm text-brand-gray-600">Click to play</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
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
