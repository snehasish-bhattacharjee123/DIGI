import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { VideoEditingServiceSubmenu } from "@/components/VideoEditingServiceSubmenu";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

type ThumbnailItem = {
  title: string;
  imageSrc: string;
};

const thumbnailGallery: ThumbnailItem[] = [
  {
    title: "High-contrast thumbnail",
    imageSrc: "https://prapermedia.com/wp-content/uploads/2025/05/1.jpg",
  },
  {
    title: "Bold typography layout",
    imageSrc: "https://prapermedia.com/wp-content/uploads/2025/05/2-1.jpg",
  },
  {
    title: "Clean subject framing",
    imageSrc: "https://prapermedia.com/wp-content/uploads/2025/05/3-1.jpg",
  },
  {
    title: "Story-driven composition",
    imageSrc: "https://prapermedia.com/wp-content/uploads/2025/05/4-1.jpg",
  },
  {
    title: "Consistent channel style",
    imageSrc: "https://prapermedia.com/wp-content/uploads/2025/05/5-1.jpg",
  },
  {
    title: "CTR-optimized layout",
    imageSrc: "https://prapermedia.com/wp-content/uploads/2025/05/6-1.jpg",
  },
];

export default function VideoEditingThumbnailDesigning() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<ThumbnailItem | null>(null);

  return (
    <>
      <Helmet>
        <title>Thumbnail Designing | Video Editing Services</title>
        <meta
          name="description"
          content="Thumbnail designing services to increase clicks with bold, high-converting YouTube thumbnails."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation theme="white" />

        <main id="main-content" role="main" className="wst-fonts overflow-x-hidden pt-20">
          <VideoEditingServiceSubmenu />

          <section className="bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
              <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-blue-900">
                Thumbnail Designing
              </h1>
              <p className="mt-4 text-center text-brand-gray-600 max-w-2xl mx-auto">
                Get scroll-stopping thumbnails built for higher CTR, consistent branding, and faster iteration.
              </p>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="rounded-2xl border border-brand-gray-200 p-6">
                  <h3 className="font-semibold text-brand-blue-900">CTR-focused composition</h3>
                  <p className="mt-2 text-sm text-brand-gray-600">
                    Clear focal subject, bold hierarchy, and mobile-first legibility.
                  </p>
                </div>
                <div className="rounded-2xl border border-brand-gray-200 p-6">
                  <h3 className="font-semibold text-brand-blue-900">Brand consistency</h3>
                  <p className="mt-2 text-sm text-brand-gray-600">
                    Repeatable style guides so your videos look recognizable at a glance.
                  </p>
                </div>
                <div className="rounded-2xl border border-brand-gray-200 p-6">
                  <h3 className="font-semibold text-brand-blue-900">Fast iteration</h3>
                  <p className="mt-2 text-sm text-brand-gray-600">
                    Variations for testing—colorways, titles, subjects, and layouts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
              <h2 className="text-center text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-blue-900">
                Thumbnail examples
              </h2>
              <p className="mt-3 text-center text-brand-gray-600 max-w-2xl mx-auto">
                Tap any thumbnail to preview it.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {thumbnailGallery.map((item) => (
                  <button
                    key={item.imageSrc}
                    type="button"
                    onClick={() => {
                      setActiveImage(item);
                      setIsPreviewOpen(true);
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-brand-gray-200 bg-white"
                    aria-label={`Preview ${item.title}`}
                  >
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover aspect-[16/9] transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Dialog
          open={isPreviewOpen}
          onOpenChange={(open) => {
            setIsPreviewOpen(open);
            if (!open) setActiveImage(null);
          }}
        >
          <DialogContent className="max-w-[92vw] sm:max-w-5xl p-0 overflow-hidden bg-black border border-brand-gray-200">
            <div className="w-full bg-black">
              {activeImage ? (
                <img
                  src={activeImage.imageSrc}
                  alt={activeImage.title}
                  className="w-full h-auto"
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
