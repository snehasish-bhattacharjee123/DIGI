import { Button } from "@/components/ui/button";
import { VideoPlayer } from "@/components/VideoPlayer";

export function NewEraSection() {
  return (
    <section className="bg-bor-background text-bor-foreground py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Right Side: Video/Image (Order changed for mobile) */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <VideoPlayer
                src="https://cdn.sanity.io/files/k0dlbavy/production/2f6d02ab9a1fab4e8a4222bc8a7346ca7e261227.mp4"
                className="aspect-video"
              />
            </div>
          </div>
          {/* Left Side: Text Content */}
          <div className="order-2 lg:order-1">
            <span className="font-semibold uppercase pb-3 border-b border-bor-foreground/20 text-sm tracking-widest block mb-8">
              A new era of creative work
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Creative Solutions That Drive{" "}
              <em className="font-serif font-normal not-italic">Real Growth</em>
            </h2>
            <p className="text-lg md:text-xl text-bor-foreground/80 mb-4 max-w-2xl">
              DIGITELLER CREATIVE is your dedicated, on-call creative partner to
              expand your production capacity and extend your team’s creative
              capabilities.
            </p>
            <p className="text-base text-bor-foreground/80 mb-8 max-w-2xl">
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
