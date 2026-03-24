import { AlgorithmPipeline } from "@/components/algorithm-pipeline";
import { Hero } from "@/components/hero";
import { LearningJourney } from "@/components/learning-journey";
import { LessonSpotlight } from "@/components/lesson-spotlight";
import { OutcomesBand } from "@/components/outcomes-band";
import { SiteHeader } from "@/components/site-header";
import { TrackGrid } from "@/components/track-grid";

export default function HomePage() {
  return (
    <main className="pb-20">
      <SiteHeader />
      <Hero />
      <OutcomesBand />
      <TrackGrid />
      <LearningJourney />
      <AlgorithmPipeline />
      <LessonSpotlight />
    </main>
  );
}
