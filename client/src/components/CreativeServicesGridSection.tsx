import React from "react";

interface CreativeService {
  id: string;
  title: string;
  description: string;
  link: string;
  imageDesktop: string;
  imageMobile: string;
  colSpan?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
  rowSpan?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
}

const creativeServices: CreativeService[] = [
  {
    id: "ad-creative",
    title: "Ad creative",
    description:
      "Get original designs for your social media channels. Static, animated or video, from Instagram to YouTube or Facebook.",
    link: "https://www.superside.com/ad-creative",
    imageDesktop:
      "https://cdn.sanity.io/images/k0dlbavy/production/6e325ab9ba57cd632cccac0dc75047bcb2fb1380-1040x1808.png?q=100&auto=format&fit=max",
    imageMobile:
      "https://cdn.sanity.io/images/k0dlbavy/production/f84524b319677cc2a0637282e9c4c0729b8cedab-780x416.png?q=100&auto=format&fit=max",
    colSpan: { mobile: "full", tablet: "full", desktop: "4" },
    rowSpan: { mobile: "1", tablet: "1", desktop: "2" },
  },
  {
    id: "branding",
    title: "Branding",
    description:
      "Get the brand expertise you need, however you need it, from brand development and design to custom branding solutions.",
    link: "https://www.superside.com/branding-services",
    imageDesktop:
      "https://cdn.sanity.io/images/k0dlbavy/production/388974fb9ed613ec604c067f2a050c1da2a701af-1040x880.png?q=100&auto=format&fit=max",
    imageMobile:
      "https://cdn.sanity.io/images/k0dlbavy/production/874918c09132d7e1e24cb71e4ab83090807e479c-780x416.png?q=100&auto=format&fit=max",
    colSpan: { mobile: "full", tablet: "full", desktop: "4" },
    rowSpan: { mobile: "1", tablet: "1", desktop: "1" },
  },
  {
    id: "web-design",
    title: "Web design",
    description:
      "Get landing pages designed from scratch or based on existing materials with thoughtful UI/UX wireframes and designs.",
    link: "https://www.superside.com/web-design-services",
    imageDesktop:
      "https://cdn.sanity.io/images/k0dlbavy/production/32c2c74d970dead408c1903d77ea14a1f9abcd7d-1040x880.png?q=100&auto=format&fit=max",
    imageMobile:
      "https://cdn.sanity.io/images/k0dlbavy/production/1b3f3d105697522bf8c57213d81540d7b20aa07c-780x416.png?q=100&auto=format&fit=max",
    colSpan: { mobile: "full", tablet: "full", desktop: "4" },
    rowSpan: { mobile: "1", tablet: "1", desktop: "1" },
  },
  {
    id: "social-media-creative",
    title: "Social media creative",
    description:
      "Get static and motion ad creative, concepts, and variations for testing your way to better results across social media.",
    link: "https://www.superside.com/social-media-creative",
    imageDesktop:
      "https://cdn.sanity.io/images/k0dlbavy/production/3035b9aa55e9381050424e9bfc56f61f1142d7c2-2128x880.png?q=100&auto=format&fit=max",
    imageMobile:
      "https://cdn.sanity.io/images/k0dlbavy/production/f71af6a22576607d1de1da7406ba449c7fa9f67d-780x416.png?q=100&auto=format&fit=max",
    colSpan: { mobile: "full", tablet: "full", desktop: "8" },
    rowSpan: { mobile: "1", tablet: "1", desktop: "1" },
  },
  {
    id: "email-design",
    title: "Email design",
    description:
      "Invigorate your communications your emails with original email designs, templates, and creative to capture your audience's attention.",
    link: "https://www.superside.com/email-design",
    imageDesktop:
      "https://cdn.sanity.io/images/k0dlbavy/production/b255672d6c170de5c2101ffa9dd5c016122bac89-1040x880.png?q=100&auto=format&fit=max",
    imageMobile:
      "https://cdn.sanity.io/images/k0dlbavy/production/f560528587473861a1377064d1034b3759aa595b-780x416.png?q=100&auto=format&fit=max",
    colSpan: { mobile: "full", tablet: "full", desktop: "4" },
    rowSpan: { mobile: "1", tablet: "1", desktop: "1" },
  },
  {
    id: "ebooks-report-design",
    title: "eBooks & report design",
    description:
      "Get eBooks and reports with designs that demands attention. Supercharge your reports, eBooks and digital learning content.",
    link: "https://www.superside.com/ebook-digital-report-design",
    imageDesktop:
      "https://cdn.sanity.io/images/k0dlbavy/production/a16c0d906661c45c07f72cdc571f0eb3a6096457-1040x880.png?q=100&auto=format&fit=max",
    imageMobile:
      "https://cdn.sanity.io/images/k0dlbavy/production/e5daaeb468972a96ccb84d6cd7582320442304a5-780x416.png?q=100&auto=format&fit=max",
    colSpan: { mobile: "full", tablet: "full", desktop: "4" },
    rowSpan: { mobile: "1", tablet: "1", desktop: "1" },
  },
  {
    id: "illustration-design",
    title: "Illustration design",
    description:
      "Get custom, on-brand illustrations for your business or marketing efforts that act as an extension of your company.",
    link: "https://www.superside.com/illustration-design",
    imageDesktop:
      "https://cdn.sanity.io/images/k0dlbavy/production/3ff1989f6b6f09564f9e70674ef127fdb28345a7-1040x880.png?q=100&auto=format&fit=max",
    imageMobile:
      "https://cdn.sanity.io/images/k0dlbavy/production/5eea79ca3781a27d8c935c02d16d4cfa35939176-780x416.png?q=100&auto=format&fit=max",
    colSpan: { mobile: "full", tablet: "full", desktop: "4" },
    rowSpan: { mobile: "1", tablet: "1", desktop: "1" },
  },
  {
    id: "packaging-merchandise",
    title: "Packaging & merchandise design",
    description:
      "Get 360 campaigns, designs and concept ideas for ads that capture and entice your audience be it online or offline.",
    link: "https://www.superside.com/packaging-merchandise-design",
    imageDesktop:
      "https://cdn.sanity.io/images/k0dlbavy/production/eea5931d29a7bb696dca1481a4af0baee3cbc058-2128x880.png?q=100&auto=format&fit=max",
    imageMobile:
      "https://cdn.sanity.io/images/k0dlbavy/production/fc36b1343664fe64230c4a2da58b5f3ae5fe7720-780x416.png?q=100&auto=format&fit=max",
    colSpan: { mobile: "full", tablet: "full", desktop: "8" },
    rowSpan: { mobile: "1", tablet: "1", desktop: "1" },
  },
  {
    id: "presentation-design",
    title: "Presentation design",
    description:
      "Get original presentations designed for your persuasive pitch decks, sales decks, or PowerPoint presentations.",
    link: "https://www.superside.com/presentation-design",
    imageDesktop:
      "https://cdn.sanity.io/images/k0dlbavy/production/a0c183d60b7b90468eff467c45d27b6991218edc-1040x1808.png?q=100&auto=format&fit=max",
    imageMobile:
      "https://cdn.sanity.io/images/k0dlbavy/production/9e3c829b83c794830cd8dedb6e035f2545eebe9c-780x416.png?q=100&auto=format&fit=max",
    colSpan: { mobile: "full", tablet: "full", desktop: "4" },
    rowSpan: { mobile: "1", tablet: "1", desktop: "2" },
  },
  {
    id: "concept-creation",
    title: "Concept creation",
    description:
      "Get 360 campaigns, designs and concept ideas for ads that capture and entice your audience be it online or offline.",
    link: "https://www.superside.com/concept-creation",
    imageDesktop:
      "https://cdn.sanity.io/images/k0dlbavy/production/8f3ba200006d064be5c52483f277217a25c7ae5a-1040x880.png?q=100&auto=format&fit=max",
    imageMobile:
      "https://cdn.sanity.io/images/k0dlbavy/production/8d86c6f06026115ad29dae5ef8a97e33d27e0365-780x416.png?q=100&auto=format&fit=max",
    colSpan: { mobile: "full", tablet: "full", desktop: "4" },
    rowSpan: { mobile: "1", tablet: "1", desktop: "1" },
  },
  {
    id: "print-design",
    title: "Print design",
    description:
      "Get eBooks and reports with designs that demands attention. Supercharge your reports, eBooks and digital learning content.",
    link: "https://www.superside.com/print-design",
    imageDesktop:
      "https://cdn.sanity.io/images/k0dlbavy/production/f0e830702bd06498aa8cc77cbfc287755ae5ba2f-1040x880.png?q=100&auto=format&fit=max",
    imageMobile:
      "https://cdn.sanity.io/images/k0dlbavy/production/85ac87bd92815765ebb47f9513f22baf89a3fe6e-780x416.png?q=100&auto=format&fit=max",
    colSpan: { mobile: "full", tablet: "full", desktop: "4" },
    rowSpan: { mobile: "1", tablet: "1", desktop: "1" },
  },
];

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="currentColor"
    viewBox="0 0 256 256"
    className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
  >
    <rect width="256" height="256" fill="none"></rect>
    <line
      x1="64"
      y1="192"
      x2="192"
      y2="64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></line>
    <polyline
      points="88 64 192 64 192 168"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></polyline>
  </svg>
);

interface ServiceCardProps {
  service: CreativeService;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getColSpanClasses = () => {
    const colSpanMap: Record<string, string> = {
      "1": "col-span-1",
      "2": "col-span-2",
      "3": "col-span-3",
      "4": "col-span-4",
      "5": "col-span-5",
      "6": "col-span-6",
      "7": "col-span-7",
      "8": "col-span-8",
      "9": "col-span-9",
      "10": "col-span-10",
      "11": "col-span-11",
      "12": "col-span-12",
      full: "col-span-full",
    };

    const mobile =
      service.colSpan?.mobile === "full"
        ? "col-span-full"
        : service.colSpan?.mobile
        ? colSpanMap[service.colSpan.mobile] || ""
        : "";
    const tablet =
      service.colSpan?.tablet === "full"
        ? "md:col-span-full"
        : service.colSpan?.tablet
        ? `md:${colSpanMap[service.colSpan.tablet] || ""}`
        : "";
    const desktop =
      service.colSpan?.desktop === "full"
        ? "lg:col-span-full"
        : service.colSpan?.desktop
        ? `lg:${colSpanMap[service.colSpan.desktop] || ""}`
        : "";

    return `${mobile} ${tablet} ${desktop}`.trim();
  };

  const getRowSpanClasses = () => {
    const rowSpanMap: Record<string, string> = {
      "1": "row-span-1",
      "2": "row-span-2",
      "3": "row-span-3",
      "4": "row-span-4",
    };

    const mobile = service.rowSpan?.mobile
      ? rowSpanMap[service.rowSpan.mobile] || ""
      : "";
    const tablet = service.rowSpan?.tablet
      ? `md:${rowSpanMap[service.rowSpan.tablet] || ""}`
      : "";
    const desktop = service.rowSpan?.desktop
      ? `lg:${rowSpanMap[service.rowSpan.desktop] || ""}`
      : "";

    return `${mobile} ${tablet} ${desktop}`.trim();
  };

  const getMinHeightClasses = () => {
    if (service.rowSpan?.desktop === "2") {
      return "lg:min-h-[904px]";
    }
    return "lg:min-h-[440px]";
  };

  return (
    <div
      className={`group ${getColSpanClasses()} ${getRowSpanClasses()} max-lg:h-full ${getMinHeightClasses()}`}
    >
      <div className="flex max-w-full flex-col text-bor-foreground lg:p-8 relative h-full w-full overflow-hidden rounded-[10px] bg-cover bg-center bg-no-repeat p-4 group bg-bor-background">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 w-full h-full">
          {/* Mobile Image */}
          <img
            src={service.imageMobile}
            alt={service.title}
            className="md:hidden w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          {/* Tablet Image */}
          <img
            src={service.imageMobile}
            alt={service.title}
            className="max-md:hidden lg:hidden w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          {/* Desktop Image */}
          <img
            src={service.imageDesktop}
            alt={service.title}
            className="relative max-lg:hidden w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-opacity duration-300 pointer-events-none"></div>

        {/* Content */}
        <div className="max-w-full flex-[0_0_auto] h-full flex flex-col z-10 gap-6">
          <div className="flex flex-col h-full gap-2 md:gap-4 max-w-[380px] flex-initial justify-start">
            <div className="flex max-w-full flex-[0_0_auto] flex-col gap-4">
              <div className="flex max-w-full flex-[0_0_auto] flex-col gap-2">
                <h5 className="font-heading box-border tracking-[0.1px] text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold">
                  {service.title}
                </h5>
              </div>
            </div>
            <div className="flex max-w-full flex-[0_0_auto] flex-col gap-2 opacity-80">
              <p className="text-base md:text-base lg:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
          <div className="flex max-w-full flex-1 flex-row">
            <div className="self-end">
              <a
                href={service.link}
                className="group/link relative inline-flex items-center gap-2 cursor-pointer"
              >
                <span className="relative">
                  Learn more
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-500 group-hover/link:w-full"></span>
                </span>
                <span className="relative inline-block w-4 h-4 align-middle">
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function CreativeServicesGridSection() {
  return (
    <section
      data-mood="dark"
      className="bg-bor-background text-bor-foreground dark overflow-hidden z-0 relative"
    >
      <div className="max-w-[1680px] mx-auto h-full w-full">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 flex-[0_0_auto] flex-col w-full transition-colors pt-20 md:pt-28 lg:pt-52 pb-11 md:pb-14 lg:pb-[88px] gap-12 lg:gap-20">
          {/* Header */}
          <div className="gap-4 lg:gap-8 flex flex-col text-center items-center mx-auto">
            <div className="flex-col flex gap-2 lg:gap-4 max-w-[700px]">
              <h2 className="font-heading box-border tracking-[0.1px] text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
                <span className="font-serif text-[calc(100%+4px)] font-normal">
                  <em>Creative</em>
                </span>{" "}
                services
              </h2>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 grid-flow-dense">
            {creativeServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

