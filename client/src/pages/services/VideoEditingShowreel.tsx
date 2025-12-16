import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { VideoEditingServiceSubmenu } from "@/components/VideoEditingServiceSubmenu";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { VideoPlayer } from "@/components/VideoPlayer";
import { useState } from "react";
import { Play } from "lucide-react";

type ShowreelItem = {
  title: string;
  description: string;
  poster: string;
  src: string;
};

const showreelItems: ShowreelItem[] = [
  {
    title: "Digiteller Graphics Reel",
    description: "Motion graphics & design highlights",
    src: "/videos/Digiteller Graphics Reel Final.mp4",
    poster: "/images/work/DSC09150.jpg",
  },
  {
    title: "Motion Graphic Animation",
    description: "Animated storytelling & kinetic typography",
    src: "/videos/7048309_Animation_Motion_Graphic_3840x2160.mp4",
    poster: "/images/work/IMG_20251210_205642.jpg",
  },
  {
    title: "Product Video Snippet",
    description: "High-energy edits for performance creatives",
    src: "/videos/3135926-hd_1920_1080_30fps.mp4",
    poster: "/images/work/DSC09150.jpg",
  },
];

export default function VideoEditingShowreel() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selected = selectedIndex === null ? null : showreelItems[selectedIndex];

  return (
    <>
      <Helmet>
        <title>Showreel | Video Editing Services</title>
        <meta
          name="description"
          content="Watch our showreel of video edits, motion graphics, and creative production highlights."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation theme="white" />

        <main id="main-content" role="main" className="wst-fonts overflow-x-hidden pt-20">
          <VideoEditingServiceSubmenu />

          <section className="bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
              <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-blue-900">
                Showreel
              </h1>
              <p className="mt-4 text-center text-brand-gray-600 max-w-2xl mx-auto">
                A quick look at our editing style—motion, pacing, storytelling, and polish.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {showreelItems.map((item, idx) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setSelectedIndex(idx)}
                    className="group text-left rounded-2xl border border-brand-gray-200 overflow-hidden bg-white shadow-sm"
                    aria-label={`Play ${item.title}`}
                  >
                    <div
                      className="relative w-full aspect-video"
                      style={{
                        backgroundImage: `url(${item.poster})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="absolute inset-0 bg-black/25" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                          <Play className="h-7 w-7 text-white translate-x-[1px]" />
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="font-semibold text-brand-blue-900">{item.title}</div>
                      <div className="mt-1 text-sm text-brand-gray-600">{item.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
          <DialogContent className="max-w-7xl w-full max-h-[90vh] p-0 bg-black border-0">
            <DialogHeader className="sr-only">
              <DialogTitle>Showreel video</DialogTitle>
            </DialogHeader>
            <div className="relative w-full aspect-video">
              {selected ? (
                <VideoPlayer src={selected.src} className="aspect-video" isModal={true} />
              ) : null}
            </div>
          </DialogContent>
        </Dialog>

        <Footer />
      </div>
    </>
  );
}
