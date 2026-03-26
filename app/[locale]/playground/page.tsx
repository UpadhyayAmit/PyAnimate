import { Suspense } from "react";
import type { Metadata } from "next";
import { PlaygroundShell } from "@/components/playground-shell";
import { SiteHeader } from "@/components/site-header";
import { playgroundLessons } from "@/data/course";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ searchParams, params }: { searchParams: Promise<{ lesson?: string }>, params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { lesson: lessonId } = await searchParams;
  const lesson = playgroundLessons.find((l) => l.id === lessonId) ?? playgroundLessons[0];
  
  return {
    title: `${lesson.title} - Visual Execution Playground | PyAnimate`,
    description: lesson.objective,
    openGraph: {
      images: [`/og/${lesson.level.toLowerCase().replace(/\s+/g, '-')}.png`],
    },
  };
}

export default async function PlaygroundPage() {
  const t = await getTranslations("Navigation");

  return (
    <main className="pb-16">
      <SiteHeader compactLabel={t("interactiveLab")} />
      <Suspense fallback={<div className="p-16 text-center text-sm text-ink/45">Loading playground…</div>}>
        <PlaygroundShell />
      </Suspense>
    </main>
  );
}
