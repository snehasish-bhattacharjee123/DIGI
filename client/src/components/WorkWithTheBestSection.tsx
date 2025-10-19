import { Button } from "@/components/ui/button";

export function WorkWithTheBestSection() {
  return (
    <section className="bg-[#f7f9f4] text-black py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Text Content */}
          <div className="order-2 lg:order-1">
            <span className="font-semibold uppercase pb-3 border-b border-black/20 text-sm tracking-widest block mb-8">
              Work with the best
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <em className="font-serif font-normal not-italic">
                World-class talent
              </em>{" "}
              with no borders
            </h2>
            <p className="text-lg md:text-xl text-black/70 mb-4 max-w-xl">
              Work with the top 1% of global creative talent – elite designers,
              project managers, animators, copywriters, AI technologists and
              more, recruited from the best brands and agencies.
            </p>
            <p className="text-base text-black/70 mb-8 max-w-xl">
              Plus, a dedicated project manager to ensure your briefs stay on
              track from start to finish.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold"
            >
              Book a demo
            </Button>
          </div>
          {/* Right Side: Image */}
          <div className="order-1 lg:order-2">
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/d30228afb9c19b5470843abd242786f9835466ca-1650x1380.png"
              alt="Global creative talent collaborating"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
