import { useLocation } from "wouter";

type SubmenuItem = {
  label: string;
  href: string;
};

const videoEditingSubmenu: SubmenuItem[] = [
  { label: "Long-Form Video Editing", href: "/services/video-editing/long-videos" },
  { label: "Showreel", href: "/services/video-editing/showreel" },
  {
    label: "Podcast Video Editing",
    href: "/services/video-editing/podcast-video-editing",
  },
  {
    label: "Thumbnail Designing",
    href: "/services/video-editing/thumbnail-designing",
  },
  {
    label: "Shorts/Reel Video Editing",
    href: "/services/video-editing/shorts-reel-video-editing",
  },
  {
    label: "YouTube Channel Management",
    href: "/services/video-editing/youtube-channel-management",
  },
];

export function VideoEditingServiceSubmenu() {
  const [location] = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    const a = href.replace(/\/+$/, "");
    const b = location.replace(/\/+$/, "");
    return a === b;
  };

  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <nav aria-label="Video editing services" className="w-full">
          <div className="flex justify-center overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-2 sm:gap-3 md:gap-4 whitespace-nowrap py-2 px-1">
              {videoEditingSubmenu.map((item) => {
                const active = isActive(item.href);

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "rounded-full bg-brand-orange-500 text-white border border-brand-orange-500 px-4 sm:px-5 py-2 text-[13px] sm:text-sm font-semibold shadow-sm"
                        : "rounded-full bg-white text-brand-blue-900 border border-brand-gray-300 px-4 sm:px-5 py-2 text-[13px] sm:text-sm font-semibold hover:bg-brand-beige-100 hover:border-brand-blue-900/20 transition-colors"
                    }
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
