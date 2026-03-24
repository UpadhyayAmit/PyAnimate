import { Suspense } from "react";
import { PlaygroundShell } from "@/components/playground-shell";
import { SiteHeader } from "@/components/site-header";

export default function PlaygroundPage() {
  return (
    <main className="pb-16">
      <SiteHeader compactLabel="Interactive Playground" />
      <Suspense fallback={<div className="p-16 text-center text-sm text-ink/45">Loading playground…</div>}>
        <PlaygroundShell />
      </Suspense>
    </main>
  );
}
