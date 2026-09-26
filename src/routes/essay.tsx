import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/site-shell";
import { essaySections } from "@/lib/content";

export const Route = createFileRoute("/essay")({
  component: Essay,
  head: () => ({ meta: [{ title: "The Agent Onboarding Problem — LOG_ON" }] }),
});

function Essay() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-10">
      <SectionLabel>LOG_ON Intelligence Review · Synthesis</SectionLabel>
      <h1 className="font-display text-3xl font-black sm:text-5xl">
        You are still onboarding agents like it is{" "}
        <em className="text-amber italic">2019.</em>
      </h1>
      <p className="mt-6 font-display text-lg text-muted italic">
        The Direction Problem at the scale of a single CLAUDE.md — and at the scale of a continent.
      </p>

      <div className="mt-10 space-y-12">
        {essaySections.map((s) => (
          <section key={s.k}>
            <p className="font-mono text-xs tracking-widest text-amber">{s.k}</p>
            <h2 className="mt-2 font-display text-2xl font-bold">{s.t}</h2>
            <p className="mt-3 text-base leading-relaxed">{s.p}</p>
          </section>
        ))}
      </div>

      <aside className="mt-16 border border-amber-dim bg-amber-pale p-6">
        <p className="font-mono text-xs tracking-widest text-amber uppercase">Read next</p>
        <h3 className="mt-2 font-display text-xl font-bold text-paper">Whose Intelligence Is This?</h3>
        <p className="mt-2 text-sm">
          Essay No. 08 — architecture, authorship, fragility, the objective function, African AI,
          interface, error, manifesto. ~4,200 words. Downloadable.
        </p>
        <Link
          to="/papers/$slug"
          params={{ slug: "whose-intelligence" }}
          className="mt-4 inline-flex min-h-11 items-center font-mono text-xs tracking-widest text-amber uppercase"
        >
          Open the full essay →
        </Link>
      </aside>
    </article>
  );
}
