import React from "react";

const cardData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h80a8,8,0,0,1,0,16H48V208H208V128a8,8,0,0,1,16,0Z"></path>
      </svg>
    ),
    title: "From brief to review and sign off.",
    description:
      "Welcome to Superspace. Quickly submit a brief, review in platform, keep track of usage and more in one easy place.",
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/22cec7d799686d9aafd24b057a1bbd55dd88c070-1040x880.png",
    className: "lg:col-span-4",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
      </svg>
    ),
    title: "Learn from our customers’ successful projects",
    description: "Reference work from the world’s best brands on our platform.",
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/916c0e6bd31f6432b767f6986d93034e50299135-2128x880.png",
    className: "lg:col-span-8",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M237.2,151.87v0a47.1,47.1,0,0,0-2.35-5.45L193.26,51.8a7.82,7.82,0,0,0-1.66-2.44,32,32,0,0,0-45.26,0A8,8,0,0,0,144,55V80H112V55a8,8,0,0,0-2.34-5.66,32,32,0,0,0-45.26,0,7.82,7.82,0,0,0-1.66,2.44L21.15,146.4a47.1,47.1,0,0,0-2.35,5.45v0A48,48,0,1,0,112,168V96h32v72a48,48,0,1,0,93.2-16.13ZM76.71,59.75a16,16,0,0,1,19.29-1v73.51a47.9,47.9,0,0,0-46.79-9.92ZM64,200a32,32,0,1,1,32-32A32,32,0,0,1,64,200ZM160,58.74a16,16,0,0,1,19.29,1l27.5,62.58A47.9,47.9,0,0,0,160,132.25ZM192,200a32,32,0,1,1,32-32A32,32,0,0,1,192,200Z"></path>
      </svg>
    ),
    title: "Organize and share all your brand assets",
    description:
      "Stop searching—store and organize everything on our platform.",
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/9a7d2896fcbbbe358decb25e3629b25e2b7d5db8-780x1356.png",
    className: "lg:col-span-4 lg:row-span-2",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M232.07,186.76a80,80,0,0,0-62.5-114.17A80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a80.39,80.39,0,0,0,25.18,7.35,80,80,0,0,0,108.34,40.65l24.71,7.27a16,16,0,0,0,19.87-19.86ZM62,159.5a8.28,8.28,0,0,0-2.26.32L32,168l8.17-27.76a8,8,0,0,0-.63-6,64,64,0,1,1,26.26,26.26A8,8,0,0,0,62,159.5Zm153.79,28.73L224,216l-27.76-8.17a8,8,0,0,0-6,.63,64.05,64.05,0,0,1-85.87-24.88A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.75,92.48A8,8,0,0,0,215.82,188.23Z"></path>
      </svg>
    ),
    title: "Integrate with your favorite platforms.",
    description:
      "Already using platforms like Asana/Jira/Slack? They integrate too.",
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/06c73269db2d7c929e816d2ffe0ac19439828293-1040x880.png",
    className: "lg:col-span-4",
  },
];

export function TechEnabledSection() {
  return (
    <section className="bg-bor-background text-bor-foreground py-20 md:py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-20">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-bor-gray">
              easy & hassle-free
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
              Tech Enabled and Made to{" "}
              <em className="font-serif font-normal not-italic">
                Work for You.
              </em>
            </h2>
          </div>
          <p className="lg:max-w-md text-lg text-bor-foreground/80">
            No matter your creative need, submitting and managing a project is
            effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`group relative rounded-lg overflow-hidden min-h-[440px] ${card.className}`}
            >
              <img
                src={card.imageUrl}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="relative z-10 flex flex-col h-full p-6 lg:p-8 text-white">
                <div className="w-10 h-10 text-3xl mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <p className="mt-2 text-white/80 flex-grow">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
