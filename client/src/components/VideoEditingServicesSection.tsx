import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type VideoServiceItem = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
};

const videoServices: VideoServiceItem[] = [
  {
    title: "Short Form Video Editing",
    description:
      "Nail your Reels, TikToks and YouTube shorts to optimize engagement and shareability.",
    href: "/short-form-vertical-video-editing",
    imageSrc: "https://prapermedia.com/wp-content/uploads/2025/05/Frame-3-1.webp",
  },
  {
    title: "Long Form Video Editing",
    description:
      "YouTube videos made more entertaining than ever for longer watch-time and more subs.",
    href: "/long-form-video-editing",
    imageSrc: "https://prapermedia.com/wp-content/uploads/2025/05/Frame-4-1.webp",
  },
  {
    title: "Thumbnail Design",
    description:
      "Upto 78% higher click-through rates with inviting graphics that lead to more views.",
    href: "/thumbnail-design/",
    imageSrc: "https://prapermedia.com/wp-content/uploads/2025/05/Frame-1.webp",
  },
  {
    title: "YT Channel Management",
    description:
      "End-to-end growth strategy, SEO, maintenance and analytics to grow your channel.",
    href: "/youtube-channel-management/",
    imageSrc:
      "https://prapermedia.com/wp-content/uploads/2025/05/combined-3-youtube-2.webp",
  },
  {
    title: "Podcast Editing",
    description: "Editing, sound design and content repurposing to boost reach.",
    href: "/podcast-video-editing/",
    imageSrc: "https://prapermedia.com/wp-content/uploads/2025/05/Frame-2-1.webp",
  },
];

function TiltServiceCard({
  item,
  index,
}: {
  item: VideoServiceItem;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const figureRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const update = (clientX: number, clientY: number) => {
    const figureEl = figureRef.current;
    if (!figureEl) return;

    const rect = figureEl.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;

    const clamp = (n: number, min: number, max: number) =>
      Math.max(min, Math.min(max, n));

    const rx = clamp((0.5 - y) * 10, -10, 10);
    const ry = clamp((x - 0.5) * 12, -12, 12);

    const tx = clamp((x - 0.5) * 10, -10, 10);
    const ty = clamp((y - 0.5) * 10, -10, 10);

    figureEl.style.transition = "transform 120ms ease-out";
    figureEl.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translate3d(${tx}px, ${ty}px, 0)`;
  };

  const reset = () => {
    const figureEl = figureRef.current;
    if (!figureEl) return;

    figureEl.style.transition = "transform 520ms cubic-bezier(0.22, 1, 0.36, 1)";
    figureEl.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0)";
  };

  return (
    <motion.a
      href={item.href}
      ref={cardRef}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group block text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bor-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      onPointerMove={(e) => {
        if (shouldReduceMotion) return;
        if (e.pointerType !== "mouse") return;

        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          update(e.clientX, e.clientY);
        });
      }}
      onPointerLeave={() => {
        if (shouldReduceMotion) return;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
        reset();
      }}
      onPointerDown={() => {
        if (shouldReduceMotion) return;
        const figureEl = figureRef.current;
        if (!figureEl) return;
        figureEl.style.transition = "transform 180ms ease-out";
        const base =
          figureEl.style.transform && figureEl.style.transform.trim().length > 0
            ? figureEl.style.transform
            : "perspective(900px) rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0)";
        figureEl.style.transform = `${base} scale(0.99)`;
      }}
      onPointerUp={() => {
        if (shouldReduceMotion) return;
        reset();
      }}
    >
      <div className="mx-auto h-[124px] w-full max-w-[180px] md:h-[140px] md:max-w-[200px]">
        <div
          ref={figureRef}
          className="h-full w-full"
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
          <img
            src={item.imageSrc}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <h3 className="mt-4 text-base md:text-[15px] font-semibold tracking-tight text-foreground">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-[240px] mx-auto">
        {item.description}
      </p>
    </motion.a>
  );
}

export function VideoEditingServicesSection() {
  return (
    <section
      data-mood="light"
      className="bg-background text-foreground"
      aria-label="Video editing services"
    >
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8 items-start">
          {videoServices.map((item, index) => (
            <TiltServiceCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
