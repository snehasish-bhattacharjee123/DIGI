import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type Mood = "light" | "dark" | "leaf" | "lavender" | "peach" | "sea" | "minty-leaf" | "dark-spark";

type CardSize = {
  colSpan: string;
  rowSpan: string;
  mobileHeight?: string;
  desktopMinHeight?: string;
};

type ShowcaseCard = {
  id: string;
  mood: Mood;
  size: CardSize;
  imageUrl?: string;
  superscript?: string;
  icon?: "quotes";
  heading?: React.ReactNode;
  subHeading?: React.ReactNode;
  description?: React.ReactNode;
};

type ShowcaseTab = {
  id: string;
  title: string;
  cards: ShowcaseCard[];
};

function QuotesIcon({ className }: { className?: string }) {
  return (
    <span className={cn("[&_svg]:size-8 lg:[&_svg]:size-10", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"></path>
      </svg>
    </span>
  );
}

function BentoCard({ card }: { card: ShowcaseCard }) {
  const moodBg = (() => {
    switch (card.mood) {
      case "dark":
        return "bg-bor-background text-bor-foreground";
      case "leaf":
      case "minty-leaf":
      case "lavender":
      case "peach":
      case "sea":
      case "dark-spark":
      case "light":
      default:
        return "bg-bor-background text-bor-foreground";
    }
  })();

  return (
    <div
      className={cn(
        "group",
        card.size.colSpan,
        card.size.rowSpan,
        card.size.mobileHeight,
        card.size.desktopMinHeight
      )}
    >
      <div
        className={cn(
          "flex max-w-full flex-[0_0_auto] flex-col lg:p-8 relative h-full w-full overflow-hidden rounded-[10px] bg-cover bg-center bg-no-repeat p-4",
          moodBg
        )}
        data-mood={card.mood}
      >
        {card.imageUrl ? (
          <div className="absolute inset-0 z-0">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              role="presentation"
              src={card.imageUrl}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}

        <div className="absolute inset-0 bg-black-100 opacity-0 transition-opacity duration-300 group-hover:opacity-5 pointer-events-none" />

        <div className="max-w-full flex-[0_0_auto] h-full flex flex-col z-1 gap-6">
          <div className={cn("flex flex-col h-full gap-2 md:gap-4 max-w-[380px] flex-initial justify-start", card.icon ? "lg:justify-between" : "")}
          >
            {card.icon === "quotes" ? <QuotesIcon /> : null}

            <div className="flex max-w-full flex-[0_0_auto] flex-col gap-4">
              {card.superscript ? (
                <span className="text-bor-sm 768:text-bor-sm 1280:text-bor-base tracking-15 elysia:font-normal font-semibold uppercase">
                  {card.superscript}
                </span>
              ) : null}

              {card.heading ? (
                <div className="font-heading box-border tracking-[0.1px] superads2:font-normal text-bor-xl md:text-bor-2xl lg:text-bor-2xl xl:text-bor-2xl [&_strong]:!font-medium">
                  {card.heading}
                </div>
              ) : null}

              {card.subHeading ? (
                <div className="text-bor-base 768:text-bor-base 1280:text-bor-lg">
                  {card.subHeading}
                </div>
              ) : null}

              {card.description ? (
                <div className="text-bor-base 768:text-bor-base 1280:text-bor-lg opacity-80">
                  {card.description}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const tabs: ShowcaseTab[] = [
  {
    id: "michi",
    title: "Michi Gonzales",
    cards: [
      {
        id: "michi-hero",
        mood: "dark",
        size: {
          colSpan: "col-span-full xl:col-span-4",
          rowSpan: "row-span-2",
          mobileHeight: "max-lg:h-[520px]",
          desktopMinHeight: "lg:min-h-[904px]",
        },
        imageUrl:
          "https://cdn.sanity.io/images/k0dlbavy/production/49febc4061de4e58967f9b07577da62c7547c3bf-780x1356.png?q=100&auto=format&fit=min",
        heading: <span className="font-extrabold tracking-tight">Michi Gonzalez</span>,
        subHeading: (
          <strong>
            Michi is a Senior Graphic Designer and Illustrator who has been with Superside for over 4.5 years.
          </strong>
        ),
        description: (
          <span>
            As a kid she created comics for her friends, which sparked her passion for storytelling through
            illustration. She is part of Limonada Bandida, a collective of female illustrators fighting against
            inequality in the field of design.
          </span>
        ),
      },
      {
        id: "michi-goto",
        mood: "leaf",
        size: {
          colSpan: "col-span-full xl:col-span-4",
          rowSpan: "row-span-1",
          mobileHeight: "max-lg:h-[440px]",
          desktopMinHeight: "lg:min-h-[440px]",
        },
        imageUrl:
          "https://cdn.sanity.io/images/k0dlbavy/production/ce8143a958c73df73eeecc5b9d570cda59ac0db2-1620x1620.png?q=100&auto=format&fit=min",
        superscript: "The go-to for",
        heading: "Character Design, Motion Graphics and Digital Illustration.",
      },
      {
        id: "michi-quote",
        mood: "lavender",
        size: {
          colSpan: "col-span-full xl:col-span-4",
          rowSpan: "row-span-1",
          mobileHeight: "max-lg:h-full",
          desktopMinHeight: "lg:min-h-[440px]",
        },
        icon: "quotes",
        superscript: "in michi's words",
        description: (
          <span>
            “My comics reflect a bit of my everyday life, and when I receive responses from people who relate to
            what I’m going through, <span className="font-semibold">it fosters a sense of connection.</span> It reminds me that we’re not alone in this world; we’re all here living for the first time.”
          </span>
        ),
      },
      {
        id: "michi-from",
        mood: "leaf",
        size: {
          colSpan: "col-span-full xl:col-span-4",
          rowSpan: "row-span-1",
          mobileHeight: "max-lg:h-[440px]",
          desktopMinHeight: "lg:min-h-[440px]",
        },
        imageUrl:
          "https://cdn.sanity.io/images/k0dlbavy/production/f03b9c83ef3daffb83b9c05457452b84034c0c8b-1620x1620.png?q=100&auto=format&fit=min",
        superscript: "Dialing in from",
        heading: "France",
      },
      {
        id: "michi-brands",
        mood: "leaf",
        size: {
          colSpan: "col-span-full xl:col-span-4",
          rowSpan: "row-span-1",
          mobileHeight: "max-lg:h-[440px]",
          desktopMinHeight: "lg:min-h-[440px]",
        },
        imageUrl:
          "https://cdn.sanity.io/images/k0dlbavy/production/6a9e8eb079b5604562cef3e34fcdfe4e36672003-1620x1620.png?q=100&auto=format&fit=min",
        superscript: "Some brands Michi worked on",
        heading: "Amazon, Meta, Boston Consulting, Morgan Lewis, and Obligo",
      },
    ],
  },
  {
    id: "daniel",
    title: "Daniel Soto",
    cards: [
      {
        id: "daniel-hero",
        mood: "dark",
        size: {
          colSpan: "col-span-full xl:col-span-4",
          rowSpan: "row-span-2",
          mobileHeight: "max-lg:h-[520px]",
          desktopMinHeight: "lg:min-h-[904px]",
        },
        imageUrl:
          "https://cdn.sanity.io/images/k0dlbavy/production/00289f113c2fd92b16cdc51beb2e5aade8b616e4-780x1356.png?q=100&auto=format&fit=min",
        heading: <span className="font-extrabold tracking-tight">Daniel Soto</span>,
        subHeading: (
          <strong>
            Daniel is a talented Graphic and UI Designer, specializing in brand development and social media
            campaigns.
          </strong>
        ),
        description: (
          <span>
            He’s a lover of all things football, art, movies, and technology and has been with Superside since
            April 2022.
          </span>
        ),
      },
      {
        id: "daniel-goto",
        mood: "leaf",
        size: {
          colSpan: "col-span-full xl:col-span-4",
          rowSpan: "row-span-1",
          mobileHeight: "max-lg:h-[440px]",
          desktopMinHeight: "lg:min-h-[440px]",
        },
        imageUrl:
          "https://cdn.sanity.io/images/k0dlbavy/production/af5e67fa44f158968b71d9744e3c41aebc10214d-1620x1620.png?q=100&auto=format&fit=min",
        superscript: "The go-to for",
        heading: "UI, Landing Page Design, Graphic Design and Ads",
      },
      {
        id: "daniel-quote",
        mood: "peach",
        size: {
          colSpan: "col-span-full xl:col-span-4",
          rowSpan: "row-span-1",
          mobileHeight: "max-lg:h-full",
          desktopMinHeight: "lg:min-h-[440px]",
        },
        icon: "quotes",
        superscript: "in daniel's words",
        description: (
          <span>
            “I love how diverse and inclusive the team at Superside is. It’s inspiring to collaborate with people
            from all over the world <span className="font-semibold">who are just as passionate about creativity as I am.”</span>
          </span>
        ),
      },
      {
        id: "daniel-from",
        mood: "leaf",
        size: {
          colSpan: "col-span-full xl:col-span-4",
          rowSpan: "row-span-1",
          mobileHeight: "max-lg:h-[440px]",
          desktopMinHeight: "lg:min-h-[440px]",
        },
        imageUrl:
          "https://cdn.sanity.io/images/k0dlbavy/production/203762381bfbcc064e7b24323e1e1aa6f6ec6a79-1620x1620.png?q=100&auto=format&fit=min",
        superscript: "Dialing in from",
        heading: "Santo Domingo, Dominican Republic",
      },
      {
        id: "daniel-brands",
        mood: "leaf",
        size: {
          colSpan: "col-span-full xl:col-span-4",
          rowSpan: "row-span-1",
          mobileHeight: "max-lg:h-[440px]",
          desktopMinHeight: "lg:min-h-[440px]",
        },
        imageUrl:
          "https://cdn.sanity.io/images/k0dlbavy/production/f56d350c36cc6691193a6e351221a33ab41386ea-1620x1620.png?q=100&auto=format&fit=min",
        superscript: "Some brands Daniel worked on",
        heading: "Boomi, Salesloft, Oyster, CodePath",
      },
    ],
  },
  {
    id: "sam",
    title: "Sam Solórzano",
    cards: [
      {
        id: "sam-hero",
        mood: "dark",
        size: {
          colSpan: "col-span-full xl:col-span-4",
          rowSpan: "row-span-2",
          mobileHeight: "max-lg:h-[520px]",
          desktopMinHeight: "lg:min-h-[904px]",
        },
        imageUrl:
          "https://cdn.sanity.io/images/k0dlbavy/production/0290d7853a587a70114e0f7e88cbd3d37a8dce47-780x1356.png?q=100&auto=format&fit=min",
        heading: <span className="font-extrabold tracking-tight">Sam Solórzano</span>,
        subHeading: (
          <strong>
            Sam was on a mission to rediscover the sense of wonder he had as a child. That mission led him to a
            change in career path from architecture to graphic arts.
          </strong>
        ),
        description: "He has been a Senior Graphic Designer at Superside since 2023.",
      },
      {
        id: "sam-goto",
        mood: "leaf",
        size: {
          colSpan: "col-span-full xl:col-span-4",
          rowSpan: "row-span-1",
          mobileHeight: "max-lg:h-[440px]",
          desktopMinHeight: "lg:min-h-[440px]",
        },
        imageUrl:
          "https://cdn.sanity.io/images/k0dlbavy/production/2fe93cb374fac9ad0ade31f00bef530909ee9b4f-1620x1620.png?q=100&auto=format&fit=min",
        superscript: "The go-to for",
        heading: "Branding, Graphic Design, Typography, Lettering, Illustration, Logo Design, Look and Feel",
      },
      {
        id: "sam-quote",
        mood: "minty-leaf",
        size: {
          colSpan: "col-span-full xl:col-span-4",
          rowSpan: "row-span-1",
          mobileHeight: "max-lg:h-full",
          desktopMinHeight: "lg:min-h-[440px]",
        },
        icon: "quotes",
        superscript: "in sam's words",
        description: (
          <span>
            “As a Latin American from a small town in Guatemala, <span className="font-semibold">I grew up surrounded by popular graphics, “Gráfica Popular” in Spanish;</span> empirical design and hand-painted typography on walls. ”
          </span>
        ),
      },
      {
        id: "sam-from",
        mood: "leaf",
        size: {
          colSpan: "col-span-full xl:col-span-4",
          rowSpan: "row-span-1",
          mobileHeight: "max-lg:h-[440px]",
          desktopMinHeight: "lg:min-h-[440px]",
        },
        imageUrl:
          "https://cdn.sanity.io/images/k0dlbavy/production/7fe49f780eb15839d223b8ee0dfe3c72ab37e3bc-1620x1620.png?q=100&auto=format&fit=min",
        superscript: "Dialing in from",
        heading: "Villa Canales, Guatemala",
      },
      {
        id: "sam-brands",
        mood: "leaf",
        size: {
          colSpan: "col-span-full xl:col-span-4",
          rowSpan: "row-span-1",
          mobileHeight: "max-lg:h-[440px]",
          desktopMinHeight: "lg:min-h-[440px]",
        },
        imageUrl:
          "https://cdn.sanity.io/images/k0dlbavy/production/bd7344ebb26532f3886b861d783afe3412d387c5-1620x1620.png?q=100&auto=format&fit=min",
        superscript: "Some brands Sam worked on",
        heading: "Sony, Help Scout, Embark, Upstart",
      },
    ],
  },
];

export function CreativeShowcaseSection() {
  return (
    <section
      data-mood="light"
      className="bg-bor-background text-bor-foreground light overflow-hidden z-0 relative"
    >
      <div className="max-w-layout mx-auto h-full w-full">
        <div className="max-w-container mx-container-overflow flex flex-[0_0_auto] flex-col w-full transition-colors pt-16 md:pt-20 lg:pt-32 pb-11 md:pb-14 lg:pb-[88px] gap-10 lg:gap-16">
          <div className="gap-4 lg:gap-8 flex flex-col text-center items-center [&_div]:mx-auto!">
            <div className="flex-col flex gap-2 lg:gap-4 max-w-[1064px]">
              <span className="text-bor-xs 768:text-bor-xs 1280:text-bor-sm tracking-15 elysia:font-normal font-semibold uppercase">
                creative showcase
              </span>
              <h2 className="font-heading box-border tracking-[0.1px] text-bor-4xl md:text-bor-7xl lg:text-bor-8xl xl:text-bor-9xl">
                The <span className="font-extrabold tracking-tight">people</span> behind the work
              </h2>
            </div>
          </div>

          <Tabs defaultValue={tabs[0]?.id} className="w-full">
            <div className="flex justify-center">
              <TabsList className="h-auto bg-transparent p-0 gap-2 flex flex-wrap justify-center">
                {tabs.map((t) => (
                  <TabsTrigger
                    key={t.id}
                    value={t.id}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-semibold tracking-wide",
                      "bg-transparent border border-border text-bor-foreground",
                      "data-[state=active]:bg-bor-foreground data-[state=active]:text-bor-background data-[state=active]:shadow-none"
                    )}
                  >
                    {t.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {tabs.map((t) => (
              <TabsContent key={t.id} value={t.id} className="mt-10 lg:mt-16">
                <div className="grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-4 grid-flow-dense">
                  {t.cards.map((c) => (
                    <BentoCard key={c.id} card={c} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
