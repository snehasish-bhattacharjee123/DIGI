import React, { useEffect, useState } from "react";

const cardData = [
  {
    title: (
      <>
        Top{" "}
        <span className="text-[calc(100%+4px)] font-normal">
          global creative talent
        </span>
      </>
    ),
    description:
      "We're not restricted by borders. Top-tier talent, powered by AI means consistently high-quality work for your brand.",
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/71dc609798d4610f6a3a3b2759e07075e0692331-1050x1200.png",
    mood: "minty-leaf",
    bgColor: "bg-emerald-700",
    textColor: "text-white",
  },
  {
    title: (
      <>
        <span className="text-[calc(100%+4px)] font-normal">
          Ultra-fast
        </span>{" "}
        turnaround times
      </>
    ),
    description:
      "With dedicated project managers, collaborative online tools and the expert use of AI, projects can be completed in as little as 12 hours.",
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/fcd887306fb2cd40740214fecf88069f9ff51111-1050x1200.png",
    mood: "cloudy",
    bgColor: "bg-gray-100",
    textColor: "text-gray-900",
  },
  {
    title: (
      <>
        <span className="text-[calc(100%+4px)] font-normal">
          Flexible
        </span>{" "}
        subscription model
      </>
    ),
    description:
      "Access a broad range of services, pivot as needed and work more efficiently with AI-enhanced creative, so that you never waste a dollar.",
    imageUrl:
      "https://cdn.sanity.io/images/k0dlbavy/production/e7cb5871b7cc27d276a749bc86e848cf9056ca16-1050x1200.png",
    mood: "spark",
    bgColor: "bg-orange-50",
    textColor: "text-gray-900",
  },
];

interface CardProps {
  card: (typeof cardData)[0];
  index: number;
  isMobile?: boolean;
}

const Card: React.FC<CardProps> = ({ card, isMobile }) => {
  return (
    <div
      className={`
        group relative flex flex-col overflow-hidden rounded-[10px] transition-all duration-500
        ${
          isMobile
            ? "min-h-[490px] h-full"
            : "shrink-0 h-[588px] xl:h-[720px] w-[280px] sm:w-[328px] lg:w-[390px] xl:w-[525px] snap-start"
        }
        lg:hover:-translate-y-[10px]
      `}
    >
      {/* Image Section */}
      <div className="relative min-h-[250px] w-full grow md:min-h-[300px] lg:min-h-0">
        <img
          alt=""
          loading="lazy"
          className="absolute h-full w-full object-cover object-center"
          srcSet={`${card.imageUrl}?auto=format&fit=max&q=100&w=263 263w,
                   ${card.imageUrl}?auto=format&fit=max&q=100&w=525 525w,
                   ${card.imageUrl}?auto=format&fit=max&q=100&w=788 788w,
                   ${card.imageUrl}?auto=format&fit=max&q=100&w=1050 1050w`}
          src={`${card.imageUrl}?auto=format&fit=max&q=100&w=525`}
        />
      </div>

      {/* Text Section */}
      <div
        className={`
        w-full px-4 py-6 transition-all lg:p-10 lg:pb-4 lg:group-hover:pb-10
        ${card.bgColor} ${card.textColor}
      `}
      >
        {/* Title */}
        <div className="mb-2 lg:mb-4">
          <h5 className="font-heading text-xl sm:text-2xl leading-tight-14 font-bold tracking-tight">
            {card.title}
          </h5>
        </div>

        {/* Description - Always visible on mobile, hidden by default on desktop (shows on hover) */}
        <div
          className={`
          gap-2 transition-all duration-300 ease-in-out
          ${
            isMobile
              ? "block"
              : "hidden lg:flex lg:flex-col lg:h-0 lg:gap-4 lg:opacity-0 lg:group-hover:h-auto lg:group-hover:opacity-100"
          }
        `}
        >
          <p className="text-lg leading-relaxed lg:text-xl">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export function MadeToFlexSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative z-0 flex max-w-full flex-col overflow-visible md:overflow-hidden bg-bor-background text-bor-foreground">
      <div className="mx-auto h-full w-full max-w-[1680px]">
        <div className="flex w-full flex-col transition-colors pt-20 md:pt-28 lg:pt-52 pb-20 md:pb-28 lg:pb-52 gap-12 lg:gap-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Header */}
          <div className="flex flex-col gap-4 lg:gap-8 text-center items-center mx-auto max-w-[840px]">
            <span className="font-din text-sm font-semibold uppercase tracking-[0.15em] text-bor-gray lg:text-base">
              made to flex
            </span>
            <h2 className="font-heading text-h2 leading-tight-13 font-bold tracking-tight">
              Supertalented. Superfast. Super responsive. Work with a global
              team that's purposefully{" "}
              <span className="text-[calc(100%+4px)] font-normal">
                made to keep up with you.
              </span>
            </h2>
          </div>

          {/* Desktop Carousel */}
          <div className="hidden md:block">
            <div className="flex flex-row overflow-x-auto scrollbar-hide snap-x snap-mandatory">
              <div className="shrink-0 will-change-transform flex gap-4 lg:gap-6" aria-hidden="false">
                {cardData.map((card, index) => (
                  <Card key={index} card={card} index={index} isMobile={false} />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Stacked Cards with Sticky Positioning */}
          <div className="flex flex-col gap-6 md:hidden">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="sticky"
                style={{ top: `${24 + index * 24}px` }}
              >
                <Card card={card} index={index} isMobile={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// -------------------------------------------

// import React, { useEffect, useState } from "react";
// import { client } from "@/lib/sanity.client";
// import { urlFor } from "@/lib/imageurl";

// interface CardItem {
//   _id: string;
//   title: string;
//   description: string;
//   mood: string;
//   bgColor: string;
//   textColor: string;
//   image: any;
//   imageUrl?: string;
// }

// interface CardProps {
//   card: CardItem;
//   index: number;
//   isMobile?: boolean;
// }

// const Card: React.FC<CardProps> = ({ card, isMobile }) => {
//   return (
//     <div
//       className={`
//         group relative flex flex-col overflow-hidden rounded-[10px] transition-all duration-500
//         ${
//           isMobile
//             ? "min-h-[490px] h-full"
//             : "shrink-0 h-[588px] xl:h-[720px] mx-2 w-[328px] lg:w-[390px] xl:w-[525px]"
//         }
//         lg:hover:-translate-y-[10px]
//       `}
//     >
//       {/* Image Section */}
//       <div className="relative min-h-[250px] w-full grow md:min-h-[300px] lg:min-h-0">
//         <img
//           alt=""
//           loading="lazy"
//           className="absolute h-full w-full object-cover object-center"
//           src={card.imageUrl}
//         />
//       </div>

//       {/* Text Section */}
//       <div
//         className={`
//         w-full px-4 py-6 transition-all lg:p-10 lg:pb-4 lg:group-hover:pb-10
//         ${card.bgColor} ${card.textColor}
//       `}
//       >
//         <div className="mb-2 lg:mb-4">
//           <h5 className="text-2xl font-bold tracking-tight md:text-2xl lg:text-4xl xl:text-4xl">
//             {card.title}
//           </h5>
//         </div>

//         <div
//           className={`
//           gap-2 transition-all duration-300 ease-in-out
//           ${
//             isMobile
//               ? "block"
//               : "hidden lg:flex lg:flex-col lg:h-0 lg:gap-4 lg:opacity-0 lg:group-hover:h-auto lg:group-hover:opacity-100"
//           }
//         `}
//         >
//           <p className="text-base leading-relaxed lg:text-lg">
//             {card.description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export function MadeToFlexSection() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [cardData, setCardData] = useState<CardItem[]>([]);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//   async function fetchCards() {
//     const data = await client.fetch(`*[_type == "gallery"]{
//       _id,
//       title,
//       description,
//       mood,
//       bgColor,
//       textColor,
//       image
//     }`);

//     const formatted = data.map((item: CardItem) => ({
//       ...item,
//       imageUrl: urlFor(item.image).width(1050).url(),
//     }));

//     setCardData(formatted);
//   }

//   fetchCards();
// }, []);

//   return (
//     <section className="relative z-0 flex max-w-full flex-col overflow-visible md:overflow-hidden bg-bor-background text-bor-foreground" data-mood="brand-dark">
//       <div className="mx-auto h-full w-full max-w-[1680px]">
//         <div className="flex w-full flex-col transition-colors pt-20 md:pt-28 lg:pt-52 pb-20 md:pb-28 lg:pb-52 gap-12 lg:gap-20 max-md:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
//           {/* Desktop Carousel */}
//           <div className="-mx-6 lg:-mx-8 xl:-mx-12 2xl:-mx-16 w-screen hidden md:block overflow-hidden">
//             <div className="max-w-screen">
//               <div className="flex flex-row overflow-x-auto scrollbar-hide">
//                 <div className="shrink-0 will-change-transform flex">
//                   <div className="w-6 lg:w-8 xl:w-12 2xl:w-16 -mr-2"></div>

//                   {cardData.map((card, index) => (
//                     <Card
//                       key={card._id}
//                       card={{
//                         ...card,
//                         imageUrl: urlFor(card.image).width(1050).url(),
//                       }}
//                       index={index}
//                       isMobile={false}
//                     />
//                   ))}

//                   <div className="w-6 lg:w-8 xl:w-12 2xl:w-16 -ml-2"></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Stacked */}
//           <div className="flex flex-col gap-6 md:hidden">
//             {cardData.map((card, index) => (
//               <div
//                 key={card._id}
//                 className="sticky"
//                 style={{ top: `${24 + index * 24}px` }}
//               >
//                 <Card card={card} index={index} isMobile={true} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
