import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { VideoEditingServiceSubmenu } from "@/components/VideoEditingServiceSubmenu";

export default function VideoEditingShortsReelVideoEditing() {
  return (
    <>
      <Helmet>
        <title>Shorts/Reel Video Editing | Video Editing Services</title>
        <meta
          name="description"
          content="Shorts/Reel video editing services for TikTok, Reels and YouTube Shorts—fast, hook-first, and platform-native."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation theme="white" />

        <main id="main-content" role="main" className="wst-fonts overflow-x-hidden pt-20">
          <VideoEditingServiceSubmenu />

          <section className="bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
              <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-blue-900">
                Shorts/Reel Video Editing
              </h1>
              <p className="mt-4 text-center text-brand-gray-600 max-w-2xl mx-auto">
                Short-form edits designed for retention—strong hooks, punchy pacing, captions, and trend-ready styling.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
