"use client";
import React from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "From brief to review and sign off.",
    description:
      "Welcome to Superspace. Quickly submit a brief, review in platform, keep track of usage and more in one easy place.",
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/22cec7d799686d9aafd24b057a1bbd55dd88c070-1040x880.png",
    className: "lg:col-span-4",
  },
  {
    title: "Learn from our customers’ successful projects",
    description: "Reference work from the world’s best brands on our platform.",
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/916c0e6bd31f6432b767f6986d93034e50299135-2128x880.png",
    className: "lg:col-span-8",
  },
  {
    title: "Organize and share all your brand assets",
    description:
      "Stop searching—store and organize everything on our platform.",
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/9a7d2896fcbbbe358decb25e2b7d5db8-780x1356.png",
    className: "lg:col-span-4 lg:row-span-2",
  },
  {
    title: "Integrate with your favorite platforms.",
    description:
      "Already using platforms like Asana, Jira, or Slack? They integrate too.",
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/06c73269db2d7c929e816d2ffe0ac19439828293-1040x880.png",
    className: "lg:col-span-4",
  },
];

export function TechEnabledSection() {
  return (
    <section className="relative bg-white text-[#003366] py-20 md:py-28 lg:py-40 overflow-hidden" data-mood="light">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-transparent to-blue-50 opacity-60 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-20"
        >
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-green-700/80">
              easy & hassle-free
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight leading-tight">
              Tech Enabled and Made to{" "}
              <em className="font-serif not-italic text-green-700">
                Work for You.
              </em>
            </h2>
          </div>
          <p className="lg:max-w-md text-lg text-blue-800/80">
            No matter your creative need, submitting and managing a project is
            effortless.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden min-h-[440px] shadow-lg hover:shadow-2xl transition-all duration-500 ${card.className}`}
            >
              {/* Image fills container perfectly */}
              <div className="absolute inset-0">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover object-center "
                  loading="lazy"
                />
              </div>

              {/* Overlay gradient */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" /> */}

              {/* Text content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 lg:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-3">
                  {card.title}
                </h3>
                <p className="text-white/85 text-base md:text-lg">
                  {card.description}
                </p>
              </div>

              {/* Subtle glass effect */}
              {/* <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
