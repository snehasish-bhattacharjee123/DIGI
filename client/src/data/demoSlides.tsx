import { Slide } from "@/components/ScrollSections";

export const demoSlides: Slide[] = [
  {
    id: "slide-1",
    title: "Bold visual design",
    subtitle: "Big impactful imagery combined with concise messaging",
    content: (
      <div className="w-full h-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=80&auto=format&fit=crop"
          alt="Bold visual design"
          className="w-full max-w-5xl h-auto rounded-2xl shadow-2xl"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    id: "slide-2",
    title: "Predictable output",
    subtitle: "Reliable, repeatable processes that scale with your business",
    content: (
      <div className="w-full h-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80&auto=format&fit=crop"
          alt="Predictable output"
          className="w-full max-w-5xl h-auto rounded-2xl shadow-2xl"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    id: "slide-3",
    title: "Motion that sells",
    subtitle: "Subtle motion that guides attention and converts visitors",
    content: (
      <div className="w-full h-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1501877008226-4fca48f4b0d4?w=1600&q=80&auto=format&fit=crop"
          alt="Motion that sells"
          className="w-full max-w-5xl h-auto rounded-2xl shadow-2xl"
          loading="lazy"
        />
      </div>
    ),
  },
];
