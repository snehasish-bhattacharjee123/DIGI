import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VideoPlayer } from "@/components/VideoPlayer";

const successStories = [
  {
    badge: "success story",
    title: (
      <>
        "A Game Changer:" How our creative solutions drive tangible results and
        elevate brands.
      </>
    ),
    videoDesktopUrl:
      "https://cdn.sanity.io/files/k0dlbavy/production/bc8082e2b9b2a6b0cc7392174bdaf334db6f36b8.mp4",
    videoMobileUrl:
      "https://cdn.sanity.io/files/k0dlbavy/production/8a7053c0cf69cb62d9d10e45c336d9eb36d21241.mp4",
    linkUrl: "#",
  },
  {
    badge: "success story",
    title: (
      <>
        "Seamless Process:" Discover how we deliver exceptional creative work
        with unmatched efficiency.
      </>
    ),
    videoDesktopUrl:
      "https://cdn.sanity.io/files/k0dlbavy/production/2f6d02ab9a1fab4e8a4222bc8a7346ca7e261227.mp4",
    videoMobileUrl:
      "https://cdn.sanity.io/files/k0dlbavy/production/9ae5377f436b8ed9c0ad543680533ea2c97bef48.mp4",
    linkUrl: "#",
  },
];

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 256 256"
    className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
  >
    <rect width="256" height="256" fill="none"></rect>
    <line
      x1="64"
      y1="192"
      x2="192"
      y2="64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></line>
    <polyline
      points="88 64 192 64 192 168"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></polyline>
  </svg>
);

export function SuccessStoriesSection() {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  const handleClose = () => {
    setSelectedStory(null);
  };

  return (
    <section className="bg-bor-background text-white py-20 md:py-28 lg:py-40">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Driving creative success for{" "}
            <em className="font-serif font-normal not-italic">
              industry leaders
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="group relative h-[400px] lg:h-[440px] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedStory(index)}
            >
              {/* Video Background */}
              <video
                autoPlay
                playsInline
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
                src={story.videoDesktopUrl}
              />
              <video
                autoPlay
                playsInline
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
                src={story.videoMobileUrl}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 z-10"></div>

              {/* Content */}
              <div className="relative z-20 flex flex-col h-full p-6 lg:p-8">
                <div className="flex-grow">
                  <span className="inline-block border border-white/50 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                    {story.badge}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold mt-4 max-w-md">
                    {story.title}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => setSelectedStory(index)}
                    className="group/link inline-flex items-center gap-2 font-semibold text-lg cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    Play video <ArrowIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedStory !== null && (
        <Dialog open={selectedStory !== null} onOpenChange={handleClose}>
          <DialogContent className="max-w-7xl w-full max-h-[90vh] p-0 bg-black border-0">
            <DialogHeader className="sr-only">
              <DialogTitle>Video Player</DialogTitle>
            </DialogHeader>
            <div className="relative w-full aspect-video">
              <VideoPlayer
                src={
                  window.innerWidth >= 768
                    ? successStories[selectedStory].videoDesktopUrl
                    : successStories[selectedStory].videoMobileUrl
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
