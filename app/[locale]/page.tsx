import { AlgorithmPipeline } from "@/components/algorithm-pipeline";
import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";
import { TrackGrid } from "@/components/track-grid";

export default function HomePage() {
  return (
    <main className="pb-20 relative">
      <SiteHeader />
      <Hero />
      <AlgorithmPipeline />
      <TrackGrid />
    </main>
  );
}
