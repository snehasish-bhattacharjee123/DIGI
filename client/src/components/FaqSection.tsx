import { useState } from 'react';

const faqData = [
  {
    title: 'What is “Creative-as a Service”?',
    content:
      'Creative-as-a-Service (CaaS) is a subscription service model that gives organizations access to quality creative assets at scale. CaaS solutions like Superside combine top talent and technology with a DesignOps process and team structure that removes the limits on speed, capacity, and capabilities for creative execution.',
  },
  {
    title: 'What makes Superside’s design services different?',
    content:
      'Superside subscriptions include a dedicated creative team onboarded to your brand and tailored for your specific needs, with specialized roles like Motion Designers, Design Directors, and Copywriters, along with in-plan hours to spend each month. Other “unlimited” design subscription services have hidden limits on output and speed. You can submit as many projects as you want, but they enter a queue to be worked on by 1 or 2, often freelance designers. Your next project only begins after your current project is fully completed, including any revisions.',
  },
  {
    title: 'How does a design subscription work?',
    content:
      'You pick a monthly plan based on the capabilities you need and the volume you expect. For a predictable price, you get access to a dedicated project manager through a creative collaboration platform that lets you submit briefs, provide feedback, and access your finished assets and project files in a single place.',
  },
  {
    title: 'What is graphic design?',
    content:
      'Graphic design is the art or practice of planning and arranging visual elements of a project to enhance or convey a message. A good graphic designer should be able to streamline communications and invoke emotion from their audience. Most people experience graphic design in their daily life from magazines and packaging to websites and social media.',
  },
  {
    title: 'What do graphic designers do?',
    content:
      'By definition, graphic designers plan and arrange visual elements to convey a message that is pleasing to the eye. Our graphic designers specialize in the various areas of graphic design and are ready to assist with the creation of digital ads, marketing, motion graphics, print, merchandise, packaging, powerpoints, illustrations, infographics, and landing pages.',
  },
  {
    title: 'Who needs graphic design services?',
    content:
      'The simple answer: anyone who wants their brand, product, or service to invoke a response from their audience needs a graphic designer. Graphic design services use data and visual elements to streamline communication and easily convey your message in a comprehensive format.',
  },
  {
    title: 'Do you do custom plans?',
    content:
      'Yes! We develop a budget that aligns if you have larger and more complex needs. Otherwise, all plans are identical, giving you full access to everything you need from Superside, regardless of the size of your monthly budget.',
  },
  {
    title: 'What billing options do you offer?',
    content: 'We offer credit card billing or invoicing.',
  },
];

const FaqItem = ({
  faq,
  index,
  openIndex,
  toggleFaq,
}: {
  faq: { title: string; content: string };
  index: number;
  openIndex: number | null;
  toggleFaq: (index: number) => void;
}) => {
  const isOpen = index === openIndex;

  return (
    <div className="border-bor-foreground/[0.15] overflow-hidden border-b last:border-b-0 pb-4 md:pb-8">
      <button
        onClick={() => toggleFaq(index)}
        className="flex w-full items-center justify-between gap-6 text-left lg:gap-12"
      >
        <span className="lg:text-bor-xl font-medium">{faq.title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 256 256"
          className={`lg:size-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
            x1="40"
            y1="128"
            x2="216"
            y2="128"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <line
            x1="128"
            y1="40"
            x2="128"
            y2="216"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? '1000px' : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <div className="pt-2 md:pt-4">
          <p>{faq.content}</p>
        </div>
      </div>
    </div>
  );
};

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const midIndex = Math.ceil(faqData.length / 2);
  const firstHalf = faqData.slice(0, midIndex);
  const secondHalf = faqData.slice(midIndex);

  return (
    <section className="flex max-w-full flex-[0_0_auto] flex-col bg-bor-background text-bor-foreground dark overflow-hidden relative">
      <div className="max-w-layout mx-auto h-full w-full">
        <div className="max-w-container mx-container-overflow flex flex-[0_0_auto] flex-col w-full transition-colors pt-11 md:pt-14 lg:pt-[88px] pb-20 md:pb-28 lg:pb-52 gap-12 lg:gap-20">
          <div className="apply-without-header absolute left-0 top-0" id="section-ipa"></div>
          <div className="gap-4 lg:gap-8 flex flex-col lg:flex-row lg:items-end lg:justify-between [&_div]:mr-auto!">
            <div className="flex-col flex gap-2 lg:gap-4 max-w-[720px] xl:max-w-[924px]">
              <span className="text-bor-xs 768:text-bor-xs 1280:text-bor-sm tracking-15 elysia:font-normal font-semibold uppercase">
                FAQS
              </span>
              <h2
                className="font-heading box-border tracking-[0.1px] text-bor-4xl md:text-bor-7xl lg:text-bor-8xl xl:text-bor-9xl"
                data-testid="heading"
              >
                Frequently asked{' '}
                <span className="font-serif text-[calc(100%+4px)] !font-normal">
                  <em>questions</em>
                </span>
              </h2>
            </div>
          </div>
          <div className="flex max-w-full flex-[0_0_auto] flex-col">
            {/* Mobile view */}
            <div className="flex max-w-full flex-[0_0_auto] flex-col md:hidden">
              <div className="max-w-full flex-[0_0_auto] flex flex-col gap-4 md:gap-8">
                {faqData.map((faq, index) => (
                  <FaqItem
                    key={index}
                    faq={faq}
                    index={index}
                    openIndex={openIndex}
                    toggleFaq={toggleFaq}
                  />
                ))}
              </div>
            </div>
            {/* Desktop view */}
            <div className="max-w-full flex-[0_0_auto] hidden md:flex flex-row gap-12">
              <div className="w-full">
                <div className="max-w-full flex-[0_0_auto] flex flex-col gap-4 md:gap-8">
                  {firstHalf.map((faq, index) => (
                    <FaqItem
                      key={index}
                      faq={faq}
                      index={index}
                      openIndex={openIndex}
                      toggleFaq={toggleFaq}
                    />
                  ))}
                </div>
              </div>
              <div className="w-full">
                <div className="max-w-full flex-[0_0_auto] flex flex-col gap-4 md:gap-8">
                  {secondHalf.map((faq, index) => (
                    <FaqItem
                      key={midIndex + index}
                      faq={faq}
                      index={midIndex + index}
                      openIndex={openIndex}
                      toggleFaq={toggleFaq}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
