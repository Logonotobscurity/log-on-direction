import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/site-shell";
import { mapSources, threads, recs } from "@/lib/content";

export const Route = createFileRoute("/map")({
  component: MapPage,
  head: () => ({ meta: [{ title: "The Direction Problem — LOG_ON" }] }),
});

function MapPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-10">
      <SectionLabel>Cross-source synthesis · April 2026</SectionLabel>
      <h1 className="font-display text-3xl font-black sm:text-5xl">
        The <em className="text-amber italic">Direction</em> Problem
      </h1>
      <p className="mt-4 max-w-2xl font-display text-lg text-muted italic">
        Three writers. Three domains. One failure mode: execution running ahead of understanding,
        with AI making the error faster and more expensive.
      </p>

      <div className="mt-10 border-y-2 border-amber bg-amber-pale px-6 py-8">
        <p className="font-display text-xl text-amber italic">The thread across all three</p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed">
          Williams: systems thinking must precede analytical execution. Derosiaux: the agent’s
          epistemic environment must be designed before tasks are assigned. Koe: AI is leverage for
          skilled humans — it amplifies direction, not replaces it. The name for it is the Direction
          Problem.
        </p>
      </div>

      <div className="mx-auto my-12 max-w-xl bg-amber px-8 py-6 text-center">
        <h2 className="font-display text-2xl font-black text-void">THE DIRECTION PROBLEM</h2>
        <p className="mt-1 font-mono text-xs tracking-widest text-void/70 uppercase">
          Execution amplified · Wrong target · Same failure · Three domains
        </p>
      </div>

      <div className="grid gap-px md:grid-cols-3">
        {mapSources.map((s) => (
          <article
            key={s.tag}
            className={
              s.tone === "teal"
                ? "border-t-2 border-teal bg-teal-pale p-5"
                : s.tone === "amber"
                  ? "border-t-2 border-amber bg-amber-pale p-5"
                  : "border-t-2 border-head bg-panel p-5"
            }
          >
            <p className="font-mono text-xs tracking-widest text-amber uppercase">{s.tag}</p>
            <h3 className="mt-3 font-display text-lg italic text-head">{s.title}</h3>
            <p className="mt-3 border-b border-border pb-3 text-sm">{s.core}</p>
            <p className="mt-3 text-sm font-bold text-amber">{s.concept}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl font-black">Six synthesis threads</h2>
      <div className="mt-4 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
        {threads.map((t) => (
          <article key={t.n} className="bg-surface p-5">
            <p className="font-mono text-xs text-amber">{t.label}</p>
            <h3 className="mt-2 font-display text-base font-bold text-head">{t.title}</h3>
          </article>
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl font-black">What this means for LOG_ON</h2>
      <ol className="mt-4 space-y-3">
        {recs.map((r) => (
          <li key={r.n} className="flex gap-4 border-l-2 border-amber pl-4">
            <span className="font-mono text-xs text-amber">{r.n}</span>
            <span className="text-sm text-head">{r.title}</span>
          </li>
        ))}
      </ol>

      <Link
        to="/papers/$slug"
        params={{ slug: "direction-mindmap" }}
        className="mt-10 inline-flex min-h-11 items-center font-mono text-xs tracking-widest text-amber uppercase"
      >
        Download original mind map HTML →
      </Link>
    </div>
  );
}
