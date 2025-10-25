// src/App.tsx
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  CSSProperties,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Large example app containing:
 * - Navbar
 * - Hero
 * - Pinned ScrollSections carousel (scroll-driven)
 * - Interactive carousel fallback
 * - Testimonials slider (simple)
 * - Contact form (mock)
 * - Footer and small utilities
 *
 * Drop into CRA, Vite, or Next (client component). Requires framer-motion.
 */

/* ============================
   Types & Helpers
   ============================ */
type Slide = {
  id: string;
  label?: string;
  summary?: string;
  content: React.ReactNode;
};

type Props = {
  slides?: Slide[];
  pinned?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  loop?: boolean;
  fullWidthImages?: boolean;
  duration?: number;
  easing?: number[] | string;
  className?: string;
  onChange?: (index: number) => void;
  onPinnedStageChange?: (slideIndex: number) => void;
  snapOnScroll?: boolean;
  snapDebounceMs?: number;
  snapDurationMs?: number;
  mobileBreakpoint?: number;
  useProgrammaticSnap?: boolean;
  enterFraction?: number;
  showStepper?: boolean;
};

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia === "undefined")
    return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const defaultControlStyle: CSSProperties = {
  width: 44,
  height: 44,
  borderRadius: 10,
  border: "none",
  background: "rgba(255,255,255,0.06)",
  color: "#fff",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
  fontWeight: 700,
  userSelect: "none",
};

/* ============================
   Demo slides (images hosted)
   ============================ */
const DEMO_SLIDES: Slide[] = [
  {
    id: "s-1",
    label: "Bold visual design",
    summary: "Big impactful imagery combined with concise messaging.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=80&auto=format&fit=crop"
        alt="Bold visual design"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        draggable={false}
      />
    ),
  },
  {
    id: "s-2",
    label: "Predictable output",
    summary: "Reliable, repeatable processes that scale with your business.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop"
        alt="Predictable output"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        draggable={false}
      />
    ),
  },
  {
    id: "s-3",
    label: "Motion that sells",
    summary: "Subtle motion that guides attention and converts visitors.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1501877008226-4fca48f4b0d4?w=1200&q=80&auto=format&fit=crop"
        alt="Motion that sells"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        draggable={false}
      />
    ),
  },
];

/* ============================
   ScrollSections Component
   ============================ */
export function ScrollSections({
  slides = DEMO_SLIDES,
  pinned = true,
  autoPlay = false,
  autoPlayInterval = 4500,
  loop = false,
  fullWidthImages = true,
  duration = 0.5,
  easing = [0.22, 0.8, 0.2, 1],
  className,
  onChange,
  onPinnedStageChange,
  snapOnScroll = true,
  snapDebounceMs = 140,
  snapDurationMs = 600,
  mobileBreakpoint = 768,
  useProgrammaticSnap = true,
  enterFraction = 0,
  showStepper = true,
}: Props) {
  const reduced = prefersReducedMotion();
  const items = slides && slides.length ? slides : DEMO_SLIDES;
  const count = items.length;

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [wrapperRect, setWrapperRect] = useState<{
    top: number;
    height: number;
  } | null>(null);

  const [pinnedState, setPinnedState] = useState<{
    progress: number;
    stage: number;
    slideIndex: number;
    slideProgress: number;
  }>({
    progress: 0,
    stage: 0,
    slideIndex: -1,
    slideProgress: 0,
  });

  const interactingRef = useRef(false);
  const autoplayRef = useRef<number | null>(null);
  const lastPinnedStageRef = useRef<number | null>(null);
  const snapTimeoutRef = useRef<number | null>(null);
  const isSnappingRef = useRef(false);

  // Touch refs
  const touchStartYRef = useRef<number | null>(null);
  const touchDeltaYRef = useRef(0);

  // smooth scroll programmatic
  const smoothScrollTo = useCallback((targetY: number, durationMs: number) => {
    const startY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const startTime = performance.now();
    const clampTarget = Math.max(
      0,
      Math.min(
        targetY,
        Math.max(
          0,
          document.documentElement.scrollHeight -
            (window.innerHeight || document.documentElement.clientHeight),
        ),
      ),
    );

    const animate = (now: number) => {
      const elapsed = Math.min(durationMs, now - startTime);
      const t = durationMs <= 0 ? 1 : elapsed / durationMs;
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const nextY = Math.round(startY + (clampTarget - startY) * ease);
      window.scrollTo(0, nextY);
      if (elapsed < durationMs) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, []);

  // clamp helper
  const clamp = useCallback(
    (i: number) => {
      if (count === 0) return 0;
      if (loop) return ((i % count) + count) % count;
      return Math.max(0, Math.min(count - 1, i));
    },
    [count, loop],
  );

  const goTo = useCallback(
    (i: number, dir = 1) => {
      const next = clamp(i);
      setDirection(dir);
      setIndex(next);
      onChange?.(next);
    },
    [clamp, onChange],
  );

  const next = useCallback(() => goTo(index + 1, 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1, -1), [index, goTo]);

  // autoplay (only for non-pinned)
  useEffect(() => {
    if (pinned) return;
    if (!autoPlay || reduced || count <= 1) return;

    if (autoplayRef.current != null) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
    autoplayRef.current = window.setInterval(() => {
      if (!interactingRef.current) {
        setDirection(1);
        setIndex((prev) => {
          const nextIndex = loop
            ? (prev + 1) % count
            : Math.min(prev + 1, count - 1);
          onChange?.(nextIndex);
          return nextIndex;
        });
      }
    }, autoPlayInterval);

    return () => {
      if (autoplayRef.current != null) {
        window.clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [autoPlay, autoPlayInterval, reduced, count, loop, onChange, pinned]);

  // wheel & touch handlers (non-pinned)
  useEffect(() => {
    if (pinned) return;
    const node = containerRef.current ?? window;

    const onWheel = (e: WheelEvent) => {
      if (reduced) return;
      if (Math.abs(e.deltaY) < 8) return;
      e.preventDefault();
      interactingRef.current = true;
      if (e.deltaY > 0) next();
      else prev();
      window.setTimeout(() => (interactingRef.current = false), 180);
    };

    const onTouchStart = (ev: TouchEvent) => {
      touchStartYRef.current = ev.touches[0]?.clientY ?? null;
      touchDeltaYRef.current = 0;
    };

    const onTouchMove = (ev: TouchEvent) => {
      if (touchStartYRef.current == null) return;
      const y = ev.touches[0]?.clientY ?? 0;
      touchDeltaYRef.current = y - (touchStartYRef.current ?? 0);
      if (Math.abs(touchDeltaYRef.current) > 8) ev.preventDefault();
    };

    const onTouchEnd = () => {
      const d = touchDeltaYRef.current;
      touchStartYRef.current = null;
      touchDeltaYRef.current = 0;
      if (Math.abs(d) < 50) return;
      interactingRef.current = true;
      if (d < 0) next();
      else prev();
      window.setTimeout(() => (interactingRef.current = false), 200);
    };

    (node as any).addEventListener("wheel", onWheel, { passive: false });
    (node as any).addEventListener("touchstart", onTouchStart, {
      passive: false,
    });
    (node as any).addEventListener("touchmove", onTouchMove, {
      passive: false,
    });
    (node as any).addEventListener("touchend", onTouchEnd, { passive: true });
    (node as any).addEventListener("touchcancel", onTouchEnd, {
      passive: true,
    });

    return () => {
      (node as any).removeEventListener("wheel", onWheel as any);
      (node as any).removeEventListener("touchstart", onTouchStart as any);
      (node as any).removeEventListener("touchmove", onTouchMove as any);
      (node as any).removeEventListener("touchend", onTouchEnd as any);
      (node as any).removeEventListener("touchcancel", onTouchEnd as any);
    };
  }, [next, prev, pinned, reduced]);

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (reduced) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        if (pinned) {
          window.scrollBy({
            top: window.innerHeight * 0.9,
            behavior: "smooth",
          });
        } else next();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        if (pinned) {
          window.scrollBy({
            top: -window.innerHeight * 0.9,
            behavior: "smooth",
          });
        } else prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, pinned, reduced]);

  // responsive breakpoint
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.innerWidth <= mobileBreakpoint
      : false,
  );
  useEffect(() => {
    const onResize = () => {
      setIsSmallScreen(window.innerWidth <= mobileBreakpoint);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileBreakpoint]);

  // measure wrapper for pinned mode
  useEffect(() => {
    if (!pinned) return;
    const measure = () => {
      const wr = wrapperRef.current;
      if (!wr) return;
      const r = wr.getBoundingClientRect();
      const top = window.scrollY + r.top;
      setWrapperRect({ top, height: r.height });
    };
    measure();
    window.addEventListener("resize", measure);
    // remeasure when images load
    const imgs = Array.from(document.images);
    const onImgLoad = () => measure();
    imgs.forEach((img) => img.addEventListener("load", onImgLoad));
    return () => {
      window.removeEventListener("resize", measure);
      imgs.forEach((img) => img.removeEventListener("load", onImgLoad));
    };
  }, [pinned, count]);

  // RAF loop to compute pinned progress and snapping
  useEffect(() => {
    if (!pinned) return;
    let raf = 0;
    const totalStages = count;
    const loop = () => {
      const wr = wrapperRect;
      if (!wr) {
        raf = requestAnimationFrame(loop);
        return;
      }

      const scrollY = window.scrollY;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const enter = wr.top - vh * (1 - enterFraction);
      const exit = wr.top + wr.height - vh * enterFraction;
      const denom = Math.max(1, exit - enter);
      const raw = (scrollY - enter) / denom;
      const progress = Math.max(0, Math.min(1, raw || 0));
      const rawStage = progress * totalStages;

      const slideIndex = Math.min(count - 1, Math.max(0, Math.floor(rawStage)));
      const slideProgress = Math.max(0, Math.min(1, rawStage - slideIndex));

      setPinnedState({ progress, stage: rawStage, slideIndex, slideProgress });

      setIndex((prev) => {
        if (prev !== slideIndex) {
          onChange?.(slideIndex);
          setDirection(slideIndex > prev ? 1 : -1);
        }
        return slideIndex;
      });

      if (lastPinnedStageRef.current !== slideIndex) {
        lastPinnedStageRef.current = slideIndex;
        onPinnedStageChange?.(slideIndex);
      }

      if (!isSnappingRef.current && snapOnScroll) {
        if (snapTimeoutRef.current != null) {
          window.clearTimeout(snapTimeoutRef.current);
        }
        snapTimeoutRef.current = window.setTimeout(() => {
          if (progress > 0 && progress < 1) {
            const targetStage = Math.round(rawStage);
            const target = enter + (targetStage / totalStages) * denom;
            isSnappingRef.current = true;

            const maxScrollTop =
              Math.max(
                0,
                document.documentElement.scrollHeight -
                  (window.innerHeight || document.documentElement.clientHeight),
              ) || 0;
            const clampedTarget = Math.max(0, Math.min(maxScrollTop, target));
            if (useProgrammaticSnap) {
              smoothScrollTo(clampedTarget, snapDurationMs);
              window.setTimeout(() => {
                isSnappingRef.current = false;
              }, snapDurationMs + 80);
            } else {
              window.scrollTo({ top: clampedTarget, behavior: "smooth" });
              window.setTimeout(() => {
                isSnappingRef.current = false;
              }, snapDurationMs + 80);
            }
          }
        }, snapDebounceMs);
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    const onScroll = () => {
      if (snapTimeoutRef.current != null) {
        window.clearTimeout(snapTimeoutRef.current);
        snapTimeoutRef.current = window.setTimeout(() => {}, snapDebounceMs);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      if (snapTimeoutRef.current != null) {
        window.clearTimeout(snapTimeoutRef.current);
        snapTimeoutRef.current = null;
      }
    };
  }, [
    pinned,
    wrapperRect,
    count,
    onChange,
    onPinnedStageChange,
    snapDebounceMs,
    snapDurationMs,
    useProgrammaticSnap,
    snapOnScroll,
    enterFraction,
    smoothScrollTo,
  ]);

  // slide wrapper sizing
  const slideWrapperStyle: CSSProperties = fullWidthImages
    ? {
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        height: "100%",
        display: "block",
      }
    : { width: "100%", maxWidth: 1100, margin: "0 auto", height: "100%" };

  const motionTransition = { duration, ease: easing } as any;
  const createVariants = (dir: number) => ({
    enter: { y: dir > 0 ? "100%" : "-100%", opacity: 0, scale: 0.995 },
    center: { y: "0%", opacity: 1, scale: 1 },
    exit: { y: dir > 0 ? "-100%" : "100%", opacity: 0, scale: 0.995 },
  });

  // render inner UI shared by pinned and normal
  const renderInner = () => {
    const ps = pinned ? pinnedState : { slideIndex: index, slideProgress: 0 };
    return (
      <>
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          {items.map((s, i) => {
            let opacity = 0;
            let y = "0%";
            if (pinned) {
              if (ps.slideIndex === -1) {
                opacity = i === 0 ? 1 : 0;
              } else {
                if (i === ps.slideIndex) {
                  opacity = 1 - ps.slideProgress;
                  y = `calc(${(ps.slideProgress || 0) * -12}%)`;
                } else if (i === ps.slideIndex + 1) {
                  opacity = ps.slideProgress;
                  y = `calc(${(1 - (ps.slideProgress || 0)) * 8}%)`;
                } else {
                  opacity = 0;
                }
              }
            } else {
              opacity = i === index ? 1 : 0;
              y = "0%";
            }

            return (
              <div
                key={s.id}
                aria-hidden={i !== index && !pinned}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                  boxSizing: "border-box",
                  opacity,
                  transform: `translateY(${y})`,
                  transition: pinned
                    ? "opacity 180ms linear, transform 240ms linear"
                    : undefined,
                }}
              >
                <div
                  style={{
                    ...slideWrapperStyle,
                    height: "100%",
                    display: "flex",
                    flexDirection: isSmallScreen ? "column" : "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Left */}
                  <div
                    style={{
                      width: isSmallScreen ? "100%" : "50%",
                      padding: 24,
                      boxSizing: "border-box",
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      alignItems: "flex-start",
                      justifyContent: "center",
                      textAlign: "left",
                      minHeight: isSmallScreen ? 220 : "100%",
                      background: isSmallScreen
                        ? "linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.0))"
                        : "transparent",
                    }}
                  >
                    {s.label && (
                      <h3
                        style={{
                          margin: 0,
                          fontSize: 28,
                          lineHeight: "1.1",
                          fontWeight: 800,
                        }}
                      >
                        {s.label}
                      </h3>
                    )}
                    {s.summary ? (
                      <div style={{ opacity: 0.9, fontSize: 15 }}>
                        {s.summary}
                      </div>
                    ) : null}
                    <div style={{ marginTop: 8 }}>
                      <button
                        onClick={() => {
                          // example CTA
                          alert(`CTA clicked for ${s.label ?? s.id}`);
                        }}
                        style={{
                          padding: "10px 16px",
                          borderRadius: 10,
                          border: "none",
                          background: "#111827",
                          color: "#fff",
                          cursor: "pointer",
                        }}
                      >
                        Learn more
                      </button>
                    </div>
                  </div>

                  {/* Right */}
                  <div
                    style={{
                      width: isSmallScreen ? "100%" : "50%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#111",
                    }}
                  >
                    <div style={{ width: "100%", height: "100%" }}>
                      {s.content}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls (left) */}
        <div
          style={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            zIndex: 60,
          }}
          aria-hidden={pinned}
        >
          <button
            aria-label="Previous"
            onClick={() => {
              interactingRef.current = true;
              if (pinned) {
                window.scrollBy({
                  top: -window.innerHeight * 0.95,
                  behavior: "smooth",
                });
              } else prev();
              setTimeout(() => (interactingRef.current = false), 220);
            }}
            style={defaultControlStyle}
          >
            ▲
          </button>

          <button
            aria-label="Next"
            onClick={() => {
              interactingRef.current = true;
              if (pinned) {
                window.scrollBy({
                  top: window.innerHeight * 0.95,
                  behavior: "smooth",
                });
              } else next();
              setTimeout(() => (interactingRef.current = false), 220);
            }}
            style={defaultControlStyle}
          >
            ▼
          </button>
        </div>

        {/* Dots / stepper (right) */}
        <div
          style={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            zIndex: 60,
            alignItems: "center",
          }}
          aria-hidden={false}
        >
          {items.map((_, i) => {
            const active = i === index;
            const onClick = () => {
              interactingRef.current = true;
              setDirection(i > index ? 1 : -1);
              setIndex(i);
              setTimeout(() => (interactingRef.current = false), 200);
            };
            return (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={onClick}
                style={{
                  width: active ? 12 : 8,
                  height: active ? 12 : 8,
                  borderRadius: 999,
                  border: active
                    ? "2px solid rgba(255,255,255,0.95)"
                    : "1px solid rgba(255,255,255,0.14)",
                  background: active
                    ? "rgba(255,255,255,0.95)"
                    : "rgba(255,255,255,0.12)",
                  padding: 0,
                  cursor: "pointer",
                  transition:
                    "width 200ms ease, height 200ms ease, background 200ms ease",
                }}
              />
            );
          })}
        </div>
      </>
    );
  };

  // Render pinned wrapper or normal container
  if (pinned) {
    const wrapperHeightVh = 100 * count;
    return (
      <div
        ref={wrapperRef}
        id="scroll-carousel-wrapper"
        data-wrapper
        data-slides={count}
        style={{ height: `${wrapperHeightVh}vh`, position: "relative" }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div
            ref={containerRef}
            className={className}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              boxSizing: "border-box",
            }}
            role="region"
            aria-roledescription="carousel"
            aria-label="Scroll-pinned vertical carousel"
          >
            {renderInner()}
          </div>
        </div>
      </div>
    );
  }

  // Non-pinned interactive mode
  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        height: "80vh",
        maxHeight: 920,
        minHeight: 420,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        boxSizing: "border-box",
        position: "relative",
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Vertical carousel"
    >
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={items[index]?.id ?? index}
          custom={direction}
          variants={createVariants(direction)}
          initial="enter"
          animate="center"
          exit="exit"
          transition={motionTransition}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              ...slideWrapperStyle,
              height: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "50%",
                padding: 24,
                boxSizing: "border-box",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: "flex-start",
                justifyContent: "center",
                textAlign: "left",
              }}
            >
              {items[index]?.label && (
                <h3
                  style={{
                    margin: 0,
                    fontSize: 28,
                    lineHeight: "1.1",
                    fontWeight: 800,
                  }}
                >
                  {items[index]?.label}
                </h3>
              )}
              {items[index]?.summary ? (
                <div style={{ opacity: 0.9, fontSize: 15 }}>
                  {items[index]?.summary}
                </div>
              ) : null}
            </div>
            <div
              style={{
                width: "50%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                {items[index]?.content}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* left controls */}
      <div
        style={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          zIndex: 60,
        }}
      >
        <button
          aria-label="Previous"
          onClick={() => {
            interactingRef.current = true;
            prev();
            setTimeout(() => (interactingRef.current = false), 220);
          }}
          style={defaultControlStyle}
        >
          ▲
        </button>
        <button
          aria-label="Next"
          onClick={() => {
            interactingRef.current = true;
            next();
            setTimeout(() => (interactingRef.current = false), 220);
          }}
          style={defaultControlStyle}
        >
          ▼
        </button>
      </div>

      {/* right dots */}
      <div
        style={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          zIndex: 60,
          alignItems: "center",
        }}
      >
        {items.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                interactingRef.current = true;
                setDirection(i > index ? 1 : -1);
                setIndex(i);
                setTimeout(() => (interactingRef.current = false), 200);
              }}
              style={{
                width: active ? 12 : 8,
                height: active ? 12 : 8,
                borderRadius: 999,
                border: active
                  ? "2px solid rgba(255,255,255,0.95)"
                  : "1px solid rgba(255,255,255,0.14)",
                background: active
                  ? "rgba(255,255,255,0.95)"
                  : "rgba(255,255,255,0.12)",
                padding: 0,
                cursor: "pointer",
                transition:
                  "width 200ms ease, height 200ms ease, background 200ms ease",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

/* ============================
   Simple TestimonialCarousel
   ============================ */
function TestimonialCarousel() {
  const testimonials = [
    {
      id: "t1",
      name: "Aisha K",
      quote: "Amazing creativity and speed. Highly recommended.",
    },
    {
      id: "t2",
      name: "Ravi P",
      quote: "Results were consistent and on-brand every time.",
    },
    {
      id: "t3",
      name: "Maya L",
      quote: "The motion design increased our CTA conversion.",
    },
  ];
  const [i, setI] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setI((p) => (p + 1) % testimonials.length),
      3500,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: 12 }}>
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {testimonials.map((t, idx) => (
          <div
            key={t.id}
            style={{
              minWidth: 240,
              maxWidth: 420,
              padding: 18,
              borderRadius: 12,
              background: idx === i ? "#111827" : "#f3f4f6",
              color: idx === i ? "#fff" : "#111827",
              transition: "transform 300ms ease",
              transform: idx === i ? "scale(1.02)" : "scale(0.98)",
            }}
          >
            <div style={{ fontSize: 14, opacity: 0.9 }}>{t.quote}</div>
            <div style={{ marginTop: 10, fontWeight: 700 }}>{t.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================
   Page sections: Navbar, Hero, Contact, Footer
   ============================ */
function Navbar({ onNavigate }: { onNavigate?: (id: string) => void }) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 20px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div style={{ fontWeight: 800 }}>BrandName</div>
        <div style={{ display: "flex", gap: 12 }}>
          <button
            onClick={() => onNavigate?.("portfolio")}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Portfolio
          </button>
          <button
            onClick={() => onNavigate?.("testimonials")}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Testimonials
          </button>
          <button
            onClick={() => onNavigate?.("contact")}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header
      style={{
        minHeight: 520,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg,#0f172a,#020617)",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: 1100, padding: 24, textAlign: "center" }}>
        <h1 style={{ fontSize: 44, margin: 0, lineHeight: 1.05 }}>
          We build <span style={{ color: "#7c3aed" }}>meaningful</span> motion &
          product experiences that convert.
        </h1>
        <p style={{ marginTop: 14, fontSize: 18, opacity: 0.9 }}>
          Design-driven teams with data-driven processes. Fast iterations,
          reliable delivery.
        </p>
        <div
          style={{
            marginTop: 18,
            display: "flex",
            gap: 12,
            justifyContent: "center",
          }}
        >
          <button
            style={{
              padding: "12px 18px",
              borderRadius: 10,
              border: "none",
              background: "#7c3aed",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Book a demo
          </button>
          <button
            style={{
              padding: "12px 18px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "transparent",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Learn more
          </button>
        </div>
      </div>
    </header>
  );
}

function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | string>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending…");
    setTimeout(() => {
      setStatus("Message sent — we’ll be in touch!");
      setValues({ name: "", email: "", message: "" });
    }, 900);
  };
  return (
    <section id="contact" style={{ padding: 40 }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
          <input
            required
            placeholder="Name"
            value={values.name}
            onChange={(e) => setValues((p) => ({ ...p, name: e.target.value }))}
            style={{
              padding: 10,
              borderRadius: 8,
              border: "1px solid #e5e7eb",
            }}
          />
          <input
            required
            placeholder="Email"
            type="email"
            value={values.email}
            onChange={(e) =>
              setValues((p) => ({ ...p, email: e.target.value }))
            }
            style={{
              padding: 10,
              borderRadius: 8,
              border: "1px solid #e5e7eb",
            }}
          />
          <textarea
            required
            placeholder="Message"
            value={values.message}
            onChange={(e) =>
              setValues((p) => ({ ...p, message: e.target.value }))
            }
            rows={6}
            style={{
              padding: 10,
              borderRadius: 8,
              border: "1px solid #e5e7eb",
            }}
          />
          <div style={{ display: "flex", gap: 12 }}>
            <button
              type="submit"
              style={{
                padding: "10px 16px",
                borderRadius: 8,
                border: "none",
                background: "#0f172a",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Send
            </button>
            {status && <div style={{ alignSelf: "center" }}>{status}</div>}
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{ padding: 24, borderTop: "1px solid #e6e6e6", marginTop: 40 }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>© {new Date().getFullYear()} BrandName</div>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

/* ============================
   App (page) — assemble everything
   ============================ */
export default function App() {
  const [pinned, setPinned] = useState(true);

  const navigate = (id: string) => {
    if (id === "portfolio") {
      // scroll to portfolio anchor
      const el = document.getElementById("portfolio-anchor");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (id === "testimonials") {
      const el = document.getElementById("testimonials-anchor");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (id === "contact") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      style={{
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      }}
    >
      <Navbar onNavigate={navigate} />
      <Hero />

      <main>
        <section id="portfolio-anchor" style={{ padding: "40px 0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: 12 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <h2 style={{ margin: 0 }}>Featured Work</h2>
              <div style={{ display: "flex", gap: 8 }}>
                <label
                  style={{ display: "flex", gap: 8, alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    checked={pinned}
                    onChange={(e) => setPinned(e.target.checked)}
                  />{" "}
                  Pinned mode
                </label>
              </div>
            </div>

            <ScrollSections pinned={pinned} />
          </div>
        </section>

        <section
          id="testimonials-anchor"
          style={{ padding: "60px 0", background: "#f8fafc" }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: 12 }}>
            <h2>What clients say</h2>
            <TestimonialCarousel />
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
