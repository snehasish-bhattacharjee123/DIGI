import React, { useCallback, useEffect, useRef, useState } from "react";

/**
 * FaqSection.tsx
 *
 * Features:
 * - Multi-open accordion (Set<number>) so multiple items can be expanded at once.
 * - Roving tabindex + keyboard navigation (ArrowUp, ArrowDown, Home, End, Enter, Space).
 * - Each item measures its content height using ResizeObserver (with window.resize fallback)
 *   so max-height animations are accurate and smooth.
 * - Respects prefers-reduced-motion.
 * - Accessible: buttons have aria-expanded/controls, panels have role="region" and aria-labelledby.
 */

/* FAQ content */
const faqData: { title: string; content: string }[] = [
  {
    title: "What is “Creative-as-a-Service” (CaaS)?",
    content:
      "Creative-as-a-Service (CaaS) is a subscription model that provides on-demand, scalable creative output — design, motion, copy, and more — through a dedicated team and streamlined production process. DIGITELLER CREATIVE bundles talent, tooling, and reliable workflows so teams can get high-quality creative work consistently and predictably.",
  },
  {
    title: "What makes DIGITELLER CREATIVE’s services different?",
    content:
      "Our subscriptions include a dedicated creative team aligned to your brand, tailored workflows, and a single collaboration platform to submit briefs, review work, and manage assets. We combine specialized roles (design directors, motion designers, copywriters) with a DesignOps approach so output is predictable, high quality, and scalable.",
  },
  {
    title: "How does a design subscription work?",
    content:
      "Select a plan based on the volume and capabilities you need. You receive a dedicated point of contact, access to a creative team, and a collaboration workspace to submit briefs, provide feedback, and download final assets and source files.",
  },
  {
    title: "What is graphic design?",
    content:
      "Graphic design is the craft of arranging visual elements—typography, imagery, color, and layout—to communicate a message. It’s used across packaging, websites, marketing materials, presentations, and social media to shape perception and drive action.",
  },
  {
    title: "What do graphic designers do?",
    content:
      "Graphic designers create visual content for digital and print channels: social creatives, marketing collateral, presentations, packaging, infographics, illustrations, and more. They translate strategy and brand into assets that communicate clearly and attract attention.",
  },
  {
    title: "Who needs graphic design services?",
    content:
      "Any organization that wants to present a clear, consistent, and compelling message benefits from graphic design—startups, enterprises, nonprofits, and individual creators. Design helps build trust, communicate offers, and move people toward desired actions.",
  },
  {
    title: "Do you offer custom plans?",
    content:
      "Yes. If your needs are larger or more complex, we can create a custom plan with tailored SLAs, dedicated staffing, and enterprise-grade support to match your operating model.",
  },
  {
    title: "What billing options do you offer?",
    content:
      "We offer credit-card billing and invoicing options for monthly and annual agreements.",
  },
];

/* Hook: prefers-reduced-motion (SSR-safe) */
function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia === "undefined"
    )
      return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setPrefersReducedMotion(mq.matches);
    handler();
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);
  return prefersReducedMotion;
}

/* Individual FAQ item component */
const FaqItem: React.FC<{
  faq: { title: string; content: string };
  index: number;
  isOpen: boolean;
  toggle: (index: number) => void;
  // Accept a function ref so callers can assign into our shared ref array.
  // This avoids mismatches between RefObject and callback refs.
  buttonRef: (el: HTMLButtonElement | null) => void;
  tabIndex: number;
  prefersReducedMotion: boolean;
}> = ({
  faq,
  index,
  isOpen,
  toggle,
  buttonRef,
  tabIndex,
  prefersReducedMotion,
}) => {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const update = () => setContentHeight(el.scrollHeight || 0);

    update();

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => update());
      ro.observe(el);
    } else {
      // fallback
      window.addEventListener("resize", update);
    }

    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", update);
    };
  }, [faq.content]);

  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  const panelStyle: React.CSSProperties = prefersReducedMotion
    ? { maxHeight: isOpen ? undefined : 0, opacity: isOpen ? 1 : 0 }
    : {
        maxHeight: isOpen ? `${contentHeight}px` : 0,
        opacity: isOpen ? 1 : 0,
        transition:
          "max-height 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease-out",
        overflow: "hidden",
      };

  return (
    <div className="border-b border-bor-foreground/20 pb-4 md:pb-6 lg:pb-8 last:border-b-0">
      <h3 className="mb-0">
        <button
          id={buttonId}
          ref={buttonRef}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => toggle(index)}
          tabIndex={tabIndex}
          className="before:content-none flex w-full items-start justify-between gap-4 md:gap-6 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded hover:text-primary"
        >
          <span className="before:content-none font_2 font-semibold flex-1 text-left">
            {faq.title}
          </span>

          <span
            aria-hidden
            className={`ml-2 flex-shrink-0 mt-1 transform transition-transform duration-200 ease-out text-primary ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              className="text-primary"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v14M5 12h14"
              />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        style={panelStyle}
      >
        <div ref={innerRef} className="pt-3 md:pt-4">
          <p className="font_3 text-bor-foreground/80 leading-normal-16">
            {faq.content}
          </p>
        </div>
      </div>
    </div>
  );
};

/* Parent FAQ section with multi-open, keyboard navigation, roving tabindex */
export function FaqSection() {
  // multi-open set
  const [openSet, setOpenSet] = useState<Set<number>>(() => new Set<number>());

  // focused index for roving tabindex
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  // refs for each button to support programmatic focus
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const prefersReducedMotion = usePrefersReducedMotion();

  // toggle item in the set (multi-open)
  const toggle = useCallback((index: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
    // when toggled via click, move focus to that item so roving tabindex aligns
    setFocusedIndex(index);
    // ensure the element receives focus (use setTimeout to allow click to finish)
    setTimeout(() => {
      buttonRefs.current[index]?.focus();
    }, 0);
  }, []);

  // Keyboard navigation handler (attached to buttons via onKeyDown)
  const onKeyDown = useCallback(
    (event: React.KeyboardEvent, index: number) => {
      const key = event.key;
      const count = faqData.length;
      let nextIndex = -1;

      const focusAt = (i: number) => {
        const clamped = (i + count) % count;
        setFocusedIndex(clamped);
        buttonRefs.current[clamped]?.focus();
      };

      if (key === "ArrowDown") {
        event.preventDefault();
        nextIndex = index + 1;
        focusAt(nextIndex);
      } else if (key === "ArrowUp") {
        event.preventDefault();
        nextIndex = index - 1;
        focusAt(nextIndex);
      } else if (key === "Home") {
        event.preventDefault();
        focusAt(0);
      } else if (key === "End") {
        event.preventDefault();
        focusAt(count - 1);
      } else if (key === "Enter" || key === " ") {
        event.preventDefault();
        // toggle the item
        toggle(index);
      }
    },
    [toggle],
  );

  // Initialize refs length
  useEffect(() => {
    buttonRefs.current = Array(faqData.length)
      .fill(null)
      .map((_, i) => buttonRefs.current[i] || null);
  }, []);

  // When focusedIndex changes, ensure only that button is tabbable; others have tabIndex -1.
  // We'll pass tabIndex value to each item (0 for focusedIndex, -1 otherwise).
  const getTabIndex = (i: number) => (i === focusedIndex ? 0 : -1);

  // Ensure keyboard clicks set focused index correctly (for keyboard users who click via Enter/Space)
  const handleButtonFocus = (i: number) => {
    setFocusedIndex(i);
  };

  // Render
  // Split into two halves for larger screens
  const midIndex = Math.ceil(faqData.length / 2);
  const firstHalf = faqData.slice(0, midIndex);
  const secondHalf = faqData.slice(midIndex);

  return (
    <section className="w-full bg-bor-background text-bor-foreground py-16 md:py-24 lg:py-32" data-mood="brand-dark">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <span className="font-din text-xs md:text-sm font-semibold uppercase tracking-widest text-bor-gray mb-3 block">
            FAQS
          </span>
          <h2 className="font_2 font-bold tracking-tight">
            Frequently asked{" "}
            <span className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal">
              <em>questions</em>
            </span>
          </h2>
        </div>

        {/* Mobile: single column */}
        <div className="flex flex-col md:hidden gap-4 sm:gap-6">
          {faqData.map((faq, i) => (
            <div key={i}>
              <div
                onKeyDown={(e) => onKeyDown(e as any, i)}
                onFocus={() => handleButtonFocus(i)}
              >
                <FaqItem
                  faq={faq}
                  index={i}
                  isOpen={openSet.has(i)}
                  toggle={toggle}
                  buttonRef={(el: HTMLButtonElement | null) => {
                    buttonRefs.current[i] = el;
                  }}
                  tabIndex={getTabIndex(i)}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: two columns */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col gap-6 lg:gap-8">
            {firstHalf.map((faq, idx) => {
              const globalIndex = idx;
              return (
                <div
                  key={globalIndex}
                  onKeyDown={(e) => onKeyDown(e as any, globalIndex)}
                  onFocus={() => handleButtonFocus(globalIndex)}
                >
                  <FaqItem
                    faq={faq}
                    index={globalIndex}
                    isOpen={openSet.has(globalIndex)}
                    toggle={toggle}
                    buttonRef={(el: HTMLButtonElement | null) => {
                      buttonRefs.current[globalIndex] = el;
                    }}
                    tabIndex={getTabIndex(globalIndex)}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-6 lg:gap-8">
            {secondHalf.map((faq, idx) => {
              const globalIndex = midIndex + idx;
              return (
                <div
                  key={globalIndex}
                  onKeyDown={(e) => onKeyDown(e as any, globalIndex)}
                  onFocus={() => handleButtonFocus(globalIndex)}
                >
                  <FaqItem
                    faq={faq}
                    index={globalIndex}
                    isOpen={openSet.has(globalIndex)}
                    toggle={toggle}
                    buttonRef={(el: HTMLButtonElement | null) => {
                      buttonRefs.current[globalIndex] = el;
                    }}
                    tabIndex={getTabIndex(globalIndex)}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
