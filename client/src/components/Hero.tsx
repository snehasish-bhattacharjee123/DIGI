// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import type { PortfolioItem } from "@shared/schema";
// import { ScrollingImages } from "./aceternity/ScrollingImages";
// import { LiquidButton } from "./LiquidButton";

// const images = [
//   "/generated_images/Amazon_Pharmacy_app_mockup_8bf3e1d7.png",
//   "/generated_images/Brand_identity_system_8af1f13b.png",
//   "/generated_images/E-commerce_website_design_43c43606.png",
//   "/generated_images/Fintech_app_design_413d4352.png",
//   "/generated_images/Pernod_Ricard_video_production_685784cf.png",
//   "/generated_images/Reddit_campaign_creative_1b23ce70.png",
// ];

// // 15 portfolio items cycling through the actual images
// const portfolioItems: PortfolioItem[] = Array.from({ length: 15 }, (_, i) => ({
//   id: String(i + 1),
//   imageUrl: images[i % images.length],
//   title: `Portfolio Item ${i + 1}`,
//   client: "Creative Brand",
//   category: "Design",
//   aspectRatio: "portrait",
// }));

// export function Hero() {
//   const items1 = portfolioItems.slice(0, 5);
//   const items2 = portfolioItems.slice(5, 10);
//   const items3 = portfolioItems.slice(10, 15);

//   return (
//     <section
//       className="relative bg-brand-blue-900 text-brand-beige-100 overflow-hidden z-0 min-h-[80vh] md:min-h-[90vh] lg:min-h-[656px] xl:min-h-[965px] pt-6 md:pt-0 pb-10 lg:py-40"
//       data-mood="brand-dark"
//       aria-label="Hero section showcasing portfolio and brand introduction"
//     >
//       {/* Background gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 opacity-50" />

//       <div className="relative max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 w-full z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 xl:gap-32 items-center">
//           {/* LEFT SIDE — Text Content */}
//           {/* LEFT SIDE — Text Content */}
//           {/* LEFT SIDE — Text Content */}
//           <div
//             className="
//     flex flex-col justify-center
//     h-full
//     text-center lg:text-left
//     w-full
//     max-w-xl sm:max-w-2xl lg:max-w-3xl
//     mx-auto
//     px-2 sm:px-0
//     lg:ml-12        /* Add margin from left in desktop */
//   "
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6 lg:space-y-8"
//             >
//               {/* HEADINGS */}
//               <h1 className="font-bold tracking-tight leading-[1.05] font-serif italic">
//                 <span
//                   className="
//           block
//           text-brand-gray-400
//           text-4xl sm:text-5xl md:text-6xl lg:text-6xl
//         "
//                 >
//                   DIGITELLER
//                 </span>

//                 <span
//                   className="
//           block
//           text-brand-beige-100
//           text-5xl sm:text-6xl md:text-7xl lg:text-7xl
//         "
//                 >
//                   CREATIVE
//                 </span>
//               </h1>

//               {/* SUB TITLE */}
//               <p className="text-base sm:text-lg md:text-xl text-brand-beige-200 max-w-md mx-auto lg:mx-0">
//                 Tailor of Tales
//               </p>

//               {/* DESCRIPTION */}
//               <p
//                 className="
//         text-sm sm:text-base md:text-lg
//         text-brand-gray-400
//         max-w-md sm:max-w-lg lg:max-w-md
//         mx-auto lg:mx-0
//       "
//               >
//                 Crafting digital experiences that tell your story with
//                 creativity, precision, and purpose.
//               </p>

//               {/* BUTTONS */}
//               <div
//                 className="
//         flex flex-col sm:flex-row
//         gap-4
//         justify-center lg:justify-start
//         pt-2
//       "
//               >
//                 <LiquidButton
//                   label="Book a Demo"
//                   color="#ff751f"
//                   duration={1000}
//                   className="shadow-brand-lg hover:shadow-brand-xl"
//                 />

//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="
//           border-2 border-brand-beige-100
//           text-brand-beige-100
//           hover:bg-brand-beige-100 hover:text-brand-blue-900
//           transition-all duration-300
//         "
//                 >
//                   View Our Work
//                 </Button>
//               </div>

//               {/* TRUST INDICATORS */}
//               <div
//                 className="
//         pt-6
//         flex flex-wrap gap-6 sm:gap-8
//         justify-center lg:justify-start
//         items-center
//       "
//               >
//                 <div className="text-center lg:text-left">
//                   <p className="text-2xl sm:text-3xl font-bold text-brand-green">
//                     500+
//                   </p>
//                   <p className="text-xs sm:text-sm text-brand-gray-400">
//                     Projects Delivered
//                   </p>
//                 </div>

//                 <div className="h-10 sm:h-12 w-px bg-brand-gray-600 hidden sm:block" />

//                 <div className="text-center lg:text-left">
//                   <p className="text-2xl sm:text-3xl font-bold text-brand-green">
//                     98%
//                   </p>
//                   <p className="text-xs sm:text-sm text-brand-gray-400">
//                     Client Satisfaction
//                   </p>
//                 </div>

//                 <div className="h-10 sm:h-12 w-px bg-brand-gray-600 hidden sm:block" />

//                 <div className="text-center lg:text-left">
//                   <p className="text-2xl sm:text-3xl font-bold text-brand-green">
//                     50+
//                   </p>
//                   <p className="text-xs sm:text-sm text-brand-gray-400">
//                     Global Brands
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* RIGHT SIDE — Scrolling Images */}
//           {/* RIGHT SIDE — Scrolling Images */}
//           <div className="relative w-full h-96 sm:h-[500px] lg:h-[700px] overflow-hidden">
//             {/* Mobile: horizontal row, Desktop: vertical columns */}
//             {/* ── < 1280 px : two horizontal rows, long enough to scroll ── */}
//             <div className="flex lg:hidden gap-3 h-full">
//               {/* Row 1 → scroll right (10 items) */}
//               <div className="flex-shrink-0 h-full">
//                 <ScrollingImages
//                   items={[...items1, ...items2]} // 10 items
//                   direction="right"
//                   speed="slow"
//                   imgProps={{ loading: "lazy" }}
//                   className="h-full"
//                 />
//               </div>

//               {/* Row 2 ← scroll left (10 items) */}
//               <div className="flex-shrink-0 h-full">
//                 <ScrollingImages
//                   items={[...items3, ...items1]} // 10 items (re-use items1 to fill)
//                   direction="left"
//                   speed="normal"
//                   imgProps={{ loading: "lazy" }}
//                   className="h-full"
//                 />
//               </div>
//             </div>

//             {/* Desktop: original 3-column vertical layout */}
//             <div className="hidden lg:flex gap-3 lg:gap-4 h-full">
//               <div className="flex-1 h-full">
//                 <ScrollingImages
//                   items={items1}
//                   direction="up"
//                   speed="slow"
//                   imgProps={{ loading: "lazy" }}
//                 />
//               </div>
//               <div className="flex-1 h-full">
//                 <ScrollingImages
//                   items={items2}
//                   direction="down"
//                   speed="normal"
//                   imgProps={{ loading: "lazy" }}
//                 />
//               </div>
//               <div className="flex-1 h-full">
//                 <ScrollingImages
//                   items={items3}
//                   direction="up"
//                   speed="slow"
//                   imgProps={{ loading: "lazy" }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom fade-out gradient for depth */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-beige-100 to-transparent opacity-10" />
//     </section>
//   );
// }

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  // ---------------------------------------
  // TEXT MORPH CYCLING
  // ---------------------------------------
  const words = ["STORY", "OBSESSION", "IMPACT", "AMPLIFIED"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % words.length),
      2300
    );
    return () => clearInterval(interval);
  }, []);

  // ---------------------------------------
  // PARALLAX SETUP
  // ---------------------------------------
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX1 = useTransform(mouseX, (v) => (v - 0.5) * 40);
  const parallaxY1 = useTransform(mouseY, (v) => (v - 0.5) * 40);

  const parallaxX2 = useTransform(mouseX, (v) => (v - 0.5) * 80);
  const parallaxY2 = useTransform(mouseY, (v) => (v - 0.5) * 80);

  const parallaxX3 = useTransform(mouseX, (v) => (v - 0.5) * 120);
  const parallaxY3 = useTransform(mouseY, (v) => (v - 0.5) * 120);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="
        relative
        flex flex-col items-center justify-center
        text-center
        bg-brand-blue-900
        text-brand-beige-100
        min-h-[90vh]
        px-4
        overflow-hidden
      "
    >
      {/* ---------------------------------------
          SOFT NOISE TEXTURE LAYER
      ---------------------------------------- */}
      <div
        className="
          pointer-events-none 
          absolute inset-0 
          opacity-[0.07] 
          mix-blend-soft-light 
          noise-texture
        "
      />

      <style>{`
        .noise-texture {
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          background-size: cover;
        }
      `}</style>

      {/* ---------------------------------------
          PARALLAX DEPTH ELEMENTS
      ---------------------------------------- */}

      {/* Glow */}
      <motion.div
        style={{ x: parallaxX1, y: parallaxY1 }}
        className="
          absolute top-1/3 left-1/2 -translate-x-1/2
          h-[650px] w-[650px]
          bg-brand-blue-700/40 blur-[150px] rounded-full
        "
      />

      {/* Green circle */}
      <motion.div
        style={{ x: parallaxX2, y: parallaxY2 }}
        className="
          absolute top-20 right-20 
          h-32 w-32 
          bg-brand-green/20 
          rounded-full 
          blur-2xl 
          opacity-40
        "
      />

      {/* Parallax Ring */}
      <motion.div
        style={{ x: parallaxX3, y: parallaxY3 }}
        className="
          absolute bottom-24 left-16 
          h-44 w-44 
          border border-brand-beige-100/20 
          rounded-full
        "
      />

      {/* ---------------------------------------
          CONTENT
      ---------------------------------------- */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-10">
        {/* HEADLINE WITH WORD-BY-WORD STAGGER */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.18 },
            },
          }}
          className="
            font-serif italic font-bold tracking-tight 
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            leading-[1.05]
            flex flex-col items-center
          "
        >
          {/* ROW 1 — DIGITELLER CREATIVE */}
          <div className="flex justify-center gap-3 flex-wrap mb-3">
            {["DIGITELLER", "CREATIVE"].map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                }}
                className="text-brand-beige-100"
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* MORPHING WORD */}
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
            transition={{ duration: 0.6 }}
            className="block text-brand-green"
          >
            {words[index]}
          </motion.span>

          {/* Static final line */}
          <span className="block text-brand-gray-300 mt-2">AMPLIFIED.</span>
        </motion.h1>

        {/* SUBHEAD */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="
            text-brand-beige-200
            text-lg sm:text-xl md:text-2xl
            font-normal tracking-wide
            max-w-2xl
          "
        >
          WE DON’T JUST MANAGE FEEDS —{" "}
          <span className="text-brand-green">WE CRAFT OBSESSIONS.</span>
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button
            size="lg"
            className="
              mt-4
              text-brand-blue-900
              bg-brand-beige-100
              hover:bg-brand-beige-200
              px-10 py-6
              text-lg font-semibold
              rounded-full
              shadow-lg hover:shadow-2xl
              transition-all duration-300
            "
          >
            LET’S MAKE WAVES
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
