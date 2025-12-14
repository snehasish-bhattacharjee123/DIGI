import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { PortfolioItem } from "@shared/schema";
import { ScrollingImages } from "./aceternity/ScrollingImages";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import SplitType from "split-type";

const images = [
  "/generated_images/Amazon_Pharmacy_app_mockup_8bf3e1d7.png",
  "/generated_images/Brand_identity_system_8af1f13b.png",
  "/generated_images/E-commerce_website_design_43c43606.png",
  "/generated_images/Fintech_app_design_413d4352.png",
  "/generated_images/Pernod_Ricard_video_production_685784cf.png",
  "/generated_images/Reddit_campaign_creative_1b23ce70.png",
];

// 15 portfolio items cycling through the actual images
const portfolioItems: PortfolioItem[] = Array.from({ length: 15 }, (_, i) => ({
  id: String(i + 1),
  imageUrl: images[i % images.length],
  title: `Portfolio Item ${i + 1}`,
  client: "Creative Brand",
  category: "Design",
  aspectRatio: "portrait",
  href: null,
  description: null,
}));

export function Hero() {
  const items1 = portfolioItems.slice(0, 5);
  const items2 = portfolioItems.slice(5, 10);
  const items3 = portfolioItems.slice(10, 15);

  // Mouse parallax for left text group
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const parallaxX = useTransform(mouseX, (v) => (v - 0.5) * 14);
  const parallaxY = useTransform(mouseY, (v) => (v - 0.5) * 10);

  const sectionRef = useRef<HTMLElement | null>(null);
  const leftTextRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (!leftTextRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const container =
      document.querySelector<HTMLElement>("[data-scroll-container]") ??
      document.body;

    const sectionEl = sectionRef.current ?? leftTextRef.current;

    const w = window as unknown as {
      __locoScroll?: LocomotiveScroll;
      __locoProxySet?: boolean;
      __locoScrollHooked?: boolean;
    };

    if (!w.__locoScroll) {
      w.__locoScroll = new LocomotiveScroll({
        el: container,
        smooth: false,
        smartphone: { smooth: false },
        tablet: { smooth: false },
      });
    }

    const loco = w.__locoScroll;

    if (!w.__locoScrollHooked) {
      loco.on("scroll", ScrollTrigger.update);
      w.__locoScrollHooked = true;
    }

    if (!w.__locoProxySet) {
      ScrollTrigger.scrollerProxy(container, {
        scrollTop(value) {
          if (typeof value === "number") {
            loco.scrollTo(value, { duration: 0, disableLerp: true });
          }
          return loco.scroll?.instance?.scroll?.y ?? window.scrollY;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType:
          getComputedStyle(container).transform !== "none" ? "transform" : "fixed",
      });

      ScrollTrigger.defaults({ scroller: container });
      w.__locoProxySet = true;
    }

    const onRefresh = () => loco.update();
    ScrollTrigger.addEventListener("refresh", onRefresh);

    const titleEl = leftTextRef.current.querySelector<HTMLElement>(
      ".hero-left-title",
    );
    const titleWrapEl =
      leftTextRef.current.querySelector<HTMLElement>(
        ".hero-left-title-wrap",
      ) ?? titleEl;
    const subtitleEl = leftTextRef.current.querySelector<HTMLElement>(
      ".hero-left-subtitle",
    );
    const descEl = leftTextRef.current.querySelector<HTMLElement>(
      ".hero-left-desc",
    );

    if (!titleEl) return;

    const split = new SplitType(titleEl, {
      types: "lines,words,chars",
    });

    let cleanupKeyboard: (() => void) | undefined;

    const ctx = gsap.context(() => {
      gsap.set(titleWrapEl, {
        x: 0,
        y: 0,
        rotateZ: 0,
        transformOrigin: "50% 50%",
        willChange: "transform",
      });
      gsap.set(titleEl, { perspective: 900 });

      const lineChildren: HTMLElement[] = [];
      if (split.lines && split.lines.length > 0) {
        split.lines.forEach((lineEl) => {
          const parent = document.createElement("span");
          parent.className = "line-parent";

          const child = document.createElement("span");
          child.className = "line-child";
          child.innerHTML = lineEl.innerHTML;
          parent.appendChild(child);

          lineEl.innerHTML = "";
          lineEl.appendChild(parent);
          lineChildren.push(child);
        });
      }

      gsap.set(split.chars, {
        opacity: 1,
        xPercent: 0,
        yPercent: 0,
        rotateX: 0,
        rotateZ: 0,
        scale: 1,
        transformOrigin: "50% 50% -24",
        filter: "blur(0px)",
      });

      if (lineChildren.length > 0) {
        gsap.set(lineChildren, {
          yPercent: 120,
          rotateZ: -1.5,
          opacity: 1,
          filter: "blur(10px)",
        });
      }

      const sprinkleEls = Array.from(
        leftTextRef.current?.querySelectorAll<HTMLElement>(
          ".hero-sprinkle",
        ) ?? [],
      );
      if (sprinkleEls.length > 0) {
        gsap.set(sprinkleEls, {
          opacity: 0,
          scale: 0.6,
          filter: "blur(0px)",
          transformOrigin: "50% 50%",
          willChange: "transform, opacity",
        });
      }

      if (subtitleEl) {
        gsap.set(subtitleEl, {
          opacity: 0,
          y: 14,
          filter: "blur(6px)",
        });
      }

      if (descEl) {
        gsap.set(descEl, {
          opacity: 0,
          y: 12,
          filter: "blur(8px)",
        });
      }

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        scrollTrigger: {
          trigger: leftTextRef.current,
          start: "top 72%",
          end: "top 35%",
          scroller: container,
          once: true,
        },
      });

      if (sectionEl) {
        gsap.to(titleWrapEl, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top top",
            end: "bottom top",
            scrub: true,
            scroller: container,
            invalidateOnRefresh: true,
          },
        });
      }

      if (lineChildren.length > 0) {
        tl.to(
          lineChildren,
          {
            yPercent: 0,
            rotateZ: 0,
            filter: "blur(0px)",
            duration: 1.05,
            stagger: { each: 0.13, from: "start" },
            ease: "power4.out",
          },
          0,
        );
      }

      if (sprinkleEls.length > 0) {
        tl.to(
          sprinkleEls,
          {
            opacity: (i) => (i % 3 === 0 ? 0.85 : 0.6),
            scale: 1,
            duration: 0.7,
            stagger: { each: 0.03, from: "random" },
            ease: "power3.out",
          },
          0.18,
        );
      }

      tl.to(
        titleEl,
        {
          letterSpacing: "-0.01em",
          duration: 0.8,
        },
        0,
      );

      if (subtitleEl) {
        tl.to(
          subtitleEl,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.7,
          },
          0.28,
        );
      }

      if (descEl) {
        tl.to(
          descEl,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.75,
          },
          0.38,
        );
      }

      tl.to(
        split.chars,
        {
          yPercent: -2,
          duration: 0.7,
          stagger: { each: 0.01, from: "center" },
          ease: "sine.inOut",
        },
        0.55,
      );

      const floatChars = gsap.to(split.chars, {
        yPercent: "random(-6, 3)",
        rotateZ: "random(-1.2, 1.2)",
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.02, from: "random" },
        paused: true,
      });

      const breatheTracking = gsap.to(titleEl, {
        letterSpacing: "0.06em",
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        paused: true,
      });

      const floatSprinkles = sprinkleEls.map((el, i) => {
        const d1 = gsap.to(el, {
          x: `random(-14, 14)`,
          y: `random(-16, 16)`,
          rotateZ: `random(-10, 10)`,
          duration: 2.4 + (i % 5) * 0.25,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          paused: true,
        });
        const d2 = gsap.to(el, {
          scale: `random(0.85, 1.2)`,
          duration: 2.1 + (i % 4) * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          paused: true,
        });
        return [d1, d2];
      });

      tl.call(() => {
        floatChars.play(0);
        breatheTracking.play(0);
        floatSprinkles.flat().forEach((t) => t.play(0));
      }, undefined, 0.75);

      const quickX = gsap.quickTo(titleWrapEl, "x", {
        duration: 0.5,
        ease: "power3.out",
      });
      const quickR = gsap.quickTo(titleWrapEl, "rotateZ", {
        duration: 0.6,
        ease: "power3.out",
      });

      const clamp = (n: number, min: number, max: number) =>
        Math.max(min, Math.min(max, n));
      let shift = 0;
      let tilt = 0;

      const onKeyDown = (e: KeyboardEvent) => {
        const k = e.key;
        if (k === "ArrowLeft" || k === "a" || k === "A") {
          shift = clamp(shift - 12, -48, 48);
          tilt = clamp(tilt - 0.8, -7, 7);
          quickX(shift);
          quickR(tilt);
        }
        if (k === "ArrowRight" || k === "d" || k === "D") {
          shift = clamp(shift + 12, -48, 48);
          tilt = clamp(tilt + 0.8, -7, 7);
          quickX(shift);
          quickR(tilt);
        }
        if (k === "ArrowUp" || k === "w" || k === "W") {
          tilt = clamp(tilt - 1.0, -7, 7);
          quickR(tilt);
        }
        if (k === "ArrowDown" || k === "s" || k === "S") {
          tilt = clamp(tilt + 1.0, -7, 7);
          quickR(tilt);
        }
      };

      const onKeyUp = () => {
        shift = 0;
        tilt = 0;
        quickX(0);
        quickR(0);
      };

      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("keyup", onKeyUp);

      cleanupKeyboard = () => {
        window.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("keyup", onKeyUp);
      };

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    }, leftTextRef);

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      ctx.revert();
      split.revert();
      cleanupKeyboard?.();
    };
  }, []);

  function WordsReveal({ text, className = "" }: { text: string; className?: string }) {
    const words = text.split(" ");
    return (
      <motion.span
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className={className}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } }}
            className="inline-block mr-1"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: i * 0.06 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  function CountUp({ to, suffix = "", className = "", duration = 1.6 }: { to: number; suffix?: string; className?: string; duration?: number }) {
    const ref = useRef<HTMLSpanElement | null>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const [value, setValue] = useState(0);

    useEffect(() => {
      if (!inView) return;
      let raf = 0;
      const startTime = performance.now();
      const start = 0;
      const animate = (now: number) => {
        const t = Math.min((now - startTime) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const next = Math.round(start + (to - start) * eased);
        setValue(next);
        if (t < 1) raf = requestAnimationFrame(animate);
      };
      raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    }, [inView, to, duration]);

    return (
      <span ref={ref} className={className}>
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <section
      ref={sectionRef as any}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
      }}
      className="relative bg-brand-blue-900 text-brand-beige-100 overflow-hidden z-0 min-h-[80vh] md:min-h-[90vh] lg:min-h-[656px] xl:min-h-[965px] pt-6 md:pt-0 pb-10 lg:py-40"
      data-mood="brand-dark"
      aria-label="Hero section showcasing portfolio and brand introduction"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 opacity-50" />

      <div className="relative max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-28 xl:gap-40 items-center">
          {/* LEFT SIDE — Text Content */}
          {/* LEFT SIDE — Text Content */}
          {/* LEFT SIDE — Text Content */}
          <motion.div
            style={{ x: parallaxX, y: parallaxY }}
            className="
    flex flex-col justify-center
    h-full
    text-center lg:text-left
    w-full
    max-w-xl sm:max-w-2xl lg:max-w-3xl
    mx-auto
    px-2 sm:px-0
  "
            ref={leftTextRef}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:space-y-8"
            >
              {/* Eyebrow label */}
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-brand-beige-200/80 text-center lg:text-left">
                Services
              </p>

              {/* HEADINGS */}
              <div className="hero-left-title-wrap relative inline-block">
                <span
                  aria-hidden="true"
                  className="hero-sprinkles pointer-events-none absolute inset-0"
                >
                  {Array.from({ length: 14 }).map((_, i) => (
                    <span
                      key={i}
                      className={`hero-sprinkle hero-sprinkle-${i}`}
                    />
                  ))}
                </span>

                <motion.h1
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.7 }}
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
                  className="hero-left-title madefor-display font-black uppercase tracking-tight leading-[0.98] drop-shadow-[0_18px_40px_rgba(13,18,60,0.45)]"
                  style={{ transform: "scaleX(1.04)", transformOrigin: "left center" }}
                >
                  <span className="block whitespace-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-brand-beige-100">
                    Digiteller
                  </span>
                  <span className="block mt-3 whitespace-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-brand-beige-100">
                    <span className="hero-left-accent">Creative</span>
                  </span>
                </motion.h1>
              </div>

              {/* SUB TITLE */}
              <p className="hero-left-subtitle text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold tracking-tight text-brand-beige-100/90 max-w-md mx-auto lg:mx-0 lg:max-w-xl leading-relaxed">
                <WordsReveal text="Tailor of Tales. Built for bold brands." />
              </p>

              {/* DESCRIPTION */}
              <p
                className="
        hero-left-desc
        text-base sm:text-lg md:text-xl
        text-brand-beige-100/70
        leading-relaxed
        max-w-md sm:max-w-lg lg:max-w-xl
        mx-auto lg:mx-0
      "
              >
                <WordsReveal text="We craft digital experiences that elevate your story with creativity, precision, and purpose." />
              </p>

              {/* BUTTONS REMOVED AS REQUESTED */}

              {/* TRUST INDICATORS */}
              <div
                className="
        pt-6
        flex flex-wrap gap-6 sm:gap-8
        justify-center lg:justify-start
        items-center
      "
              >
                <div className="text-center lg:text-left">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-green">
                    <CountUp to={500} suffix="+" duration={3.8} />
                  </p>
                  <p className="text-sm sm:text-base font-medium tracking-wide text-brand-beige-100/70">
                    Projects Delivered
                  </p>
                </div>

                <div className="h-10 sm:h-12 w-px bg-brand-beige-100/20 hidden sm:block" />

                <div className="text-center lg:text-left">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-green">
                    <CountUp to={98} suffix="%" duration={3.0} />
                  </p>
                  <p className="text-sm sm:text-base font-medium tracking-wide text-brand-beige-100/70">
                    Client Satisfaction
                  </p>
                </div>

                <div className="h-10 sm:h-12 w-px bg-brand-beige-100/20 hidden sm:block" />

                <div className="text-center lg:text-left">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-green">
                    <CountUp to={50} suffix="+" duration={3.4} />
                  </p>
                  <p className="text-sm sm:text-base font-medium tracking-wide text-brand-beige-100/70">
                    Global Brands
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — Scrolling Images */}
          {/* RIGHT SIDE — Scrolling Images */}
          <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[700px] overflow-hidden">
            {/* Mobile: horizontal row, Desktop: vertical columns */}
            {/* ── < 1280 px : two horizontal rows, long enough to scroll ── */}
            <div className="flex lg:hidden gap-3 h-full">
              {/* Row 1 → scroll right (10 items) */}
              <div className="flex-shrink-0 h-full">
                <ScrollingImages
                  items={[...items1, ...items2]} // 10 items
                  speed="slow"
                  imgProps={{ loading: "lazy" }}
                  className="h-full"
                />
              </div>

              {/* Row 2 ← scroll left (10 items) */}
              <div className="flex-shrink-0 h-full">
                <ScrollingImages
                  items={[...items3, ...items1]} // 10 items (re-use items1 to fill)
                  speed="normal"
                  imgProps={{ loading: "lazy" }}
                  className="h-full"
                />
              </div>
            </div>

            {/* Desktop: original 3-column vertical layout */}
            <div className="hidden lg:flex gap-3 lg:gap-4 h-full">
              <div className="flex-1 h-full">
                <ScrollingImages
                  items={items1}
                  direction="up"
                  speed="slow"
                  imgProps={{ loading: "lazy" }}
                />
              </div>
              <div className="flex-1 h-full">
                <ScrollingImages
                  items={items2}
                  direction="down"
                  speed="normal"
                  imgProps={{ loading: "lazy" }}
                />
              </div>
              <div className="flex-1 h-full">
                <ScrollingImages
                  items={items3}
                  direction="up"
                  speed="slow"
                  imgProps={{ loading: "lazy" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade-out gradient for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-beige-100 to-transparent opacity-10" />
    </section>
  );
}

// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";

// export function Hero() {
//   // ---------------------------------------
//   // TEXT MORPH CYCLING
//   // ---------------------------------------
//   const words = ["STORY", "OBSESSION", "IMPACT", "AMPLIFIED"];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(
//       () => setIndex((prev) => (prev + 1) % words.length),
//       2300
//     );
//     return () => clearInterval(interval);
//   }, []);

//   // ---------------------------------------
//   // PARALLAX SETUP
//   // ---------------------------------------
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const parallaxX1 = useTransform(mouseX, (v) => (v - 0.5) * 40);
//   const parallaxY1 = useTransform(mouseY, (v) => (v - 0.5) * 40);

//   const parallaxX2 = useTransform(mouseX, (v) => (v - 0.5) * 80);
//   const parallaxY2 = useTransform(mouseY, (v) => (v - 0.5) * 80);

//   const parallaxX3 = useTransform(mouseX, (v) => (v - 0.5) * 120);
//   const parallaxY3 = useTransform(mouseY, (v) => (v - 0.5) * 120);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     mouseX.set((e.clientX - rect.left) / rect.width);
//     mouseY.set((e.clientY - rect.top) / rect.height);
//   };

//   return (
//     <section
//       onMouseMove={handleMouseMove}
//       className="
//         relative
//         flex flex-col items-center justify-center
//         text-center
//         bg-brand-blue-900
//         text-brand-beige-100
//         min-h-[90vh]
//         px-4
//         overflow-hidden
//       "
//     >
//       {/* ---------------------------------------
//           SOFT NOISE TEXTURE LAYER
//       ---------------------------------------- */}
//       <div
//         className="
//           pointer-events-none
//           absolute inset-0
//           opacity-[0.07]
//           mix-blend-soft-light
//           noise-texture
//         "
//       />

//       <style>{`
//         .noise-texture {
//           background-image: url("https://grainy-gradients.vercel.app/noise.svg");
//           background-size: cover;
//         }
//       `}</style>

//       {/* ---------------------------------------
//           PARALLAX DEPTH ELEMENTS
//       ---------------------------------------- */}

//       {/* Glow */}
//       <motion.div
//         style={{ x: parallaxX1, y: parallaxY1 }}
//         className="
//           absolute top-1/3 left-1/2 -translate-x-1/2
//           h-[650px] w-[650px]
//           bg-brand-blue-700/40 blur-[150px] rounded-full
//         "
//       />

//       {/* Green circle */}
//       <motion.div
//         style={{ x: parallaxX2, y: parallaxY2 }}
//         className="
//           absolute top-20 right-20
//           h-32 w-32
//           bg-brand-green/20
//           rounded-full
//           blur-2xl
//           opacity-40
//         "
//       />

//       {/* Parallax Ring */}
//       <motion.div
//         style={{ x: parallaxX3, y: parallaxY3 }}
//         className="
//           absolute bottom-24 left-16
//           h-44 w-44
//           border border-brand-beige-100/20
//           rounded-full
//         "
//       />

//       {/* ---------------------------------------
//           CONTENT
//       ---------------------------------------- */}
//       <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-10">
//         {/* HEADLINE WITH WORD-BY-WORD STAGGER */}
//         <motion.h1
//           initial="hidden"
//           animate="show"
//           variants={{
//             hidden: {},
//             show: {
//               transition: { staggerChildren: 0.18 },
//             },
//           }}
//           className="
//             font-serif italic font-bold tracking-tight
//             text-4xl sm:text-5xl md:text-6xl lg:text-7xl
//             leading-[1.05]
//             flex flex-col items-center
//           "
//         >
//           {/* ROW 1 — DIGITELLER CREATIVE */}
//           <div className="flex justify-center gap-3 flex-wrap mb-3">
//             {["DIGITELLER", "CREATIVE"].map((word, i) => (
//               <motion.span
//                 key={i}
//                 variants={{
//                   hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
//                   show: {
//                     opacity: 1,
//                     y: 0,
//                     filter: "blur(0px)",
//                     transition: { duration: 0.7, ease: "easeOut" },
//                   },
//                 }}
//                 className="text-brand-beige-100"
//               >
//                 {word}
//               </motion.span>
//             ))}
//           </div>

//           {/* MORPHING WORD */}
//           <motion.span
//             key={index}
//             initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
//             transition={{ duration: 0.6 }}
//             className="block text-brand-green"
//           >
//             {words[index]}
//           </motion.span>

//           {/* Static final line */}
//           <span className="block text-brand-gray-300 mt-2">AMPLIFIED.</span>
//         </motion.h1>

//         {/* SUBHEAD */}
//         <motion.p
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="
//             text-brand-beige-200
//             text-lg sm:text-xl md:text-2xl
//             font-normal tracking-wide
//             max-w-2xl
//           "
//         >
//           WE DON’T JUST MANAGE FEEDS —{" "}
//           <span className="text-brand-green">WE CRAFT OBSESSIONS.</span>
//         </motion.p>

//         {/* BUTTON */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.85 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//         >
//           <Button
//             size="lg"
//             className="
//               mt-4
//               text-brand-blue-900
//               bg-brand-beige-100
//               hover:bg-brand-beige-200
//               px-10 py-6
//               text-lg font-semibold
//               rounded-full
//               shadow-lg hover:shadow-2xl
//               transition-all duration-300
//             "
//           >
//             LET’S MAKE WAVES
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
