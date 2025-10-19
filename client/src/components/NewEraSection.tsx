import { Button } from "@/components/ui/button";

export function NewEraSection() {
  return (
    <section className="bg-white text-black py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Right Side: Video/Image (Order changed for mobile) */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-video bg-gray-200 rounded-lg flex items-center justify-center shadow-lg">
              {/* Placeholder for video */}
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
              <p className="text-white z-10 font-semibold">Video Placeholder</p>
              <svg
                className="absolute w-16 h-16 text-white z-10"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          {/* Left Side: Text Content */}
          <div className="order-2 lg:order-1">
            <span className="font-semibold uppercase pb-3 border-b border-black/20 text-sm tracking-widest block mb-8">
              A new era of creative work
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              The support your creative team{" "}
              <em className="font-serif font-normal not-italic">
                has been asking for
              </em>
            </h2>
            <p className="text-lg md:text-xl text-black/70 mb-4 max-w-2xl">
              Superside is your dedicated, on-call creative team to expand your
              production capacity and extend your team’s creative capabilities.
            </p>
            <p className="text-base text-black/70 mb-8 max-w-2xl">
              See us as an extension of your team, freeing you to focus on your
              most impactful and creative work.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold"
            >
              Book a demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
