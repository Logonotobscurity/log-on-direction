import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/site-shell";
import { lfaRows, recs, offers, audits, calendar } from "@/lib/content";
import { papers } from "@/lib/papers";

export const Route = createFileRoute("/brief")({
  component: Brief,
  head: () => ({ meta: [{ title: "Action Brief — LOG_ON" }] }),
});

function Brief() {
  const related = papers.filter((p) =>
    ["study-1", "study-2-pal", "cultural-bridge-sae", "schmidt-proposal", "research-ideas"].includes(
      p.slug,
    ),
  );
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-10">
      <SectionLabel>Action Brief · 6 recommendations executed</SectionLabel>
      <h1 className="font-display text-3xl font-black sm:text-5xl">
        The logic chain, then the <em className="text-amber italic">work.</em>
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed">
        Williams’ LFA applied to LOG_ON. Every proposal, article, and sprint traces to one impact:
        African cognitive sovereignty.
      </p>

      <div className="mt-12 overflow-x-auto">
        <table className="w-full min-w-lg border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-amber font-mono text-xs tracking-widest text-amber uppercase">
              <th className="py-3 pr-4">Layer</th>
              <th className="py-3 pr-4">Horizon</th>
              <th className="py-3 pr-4">Definition</th>
              <th className="py-3">Evidence</th>
            </tr>
          </thead>
          <tbody>
            {lfaRows.map((r) => (
              <tr key={r.layer} className="border-b border-border align-top">
                <td className="py-4 pr-4 font-mono text-xs font-bold text-amber">{r.layer}</td>
                <td className="py-4 pr-4 text-muted">{r.time}</td>
                <td className="py-4 pr-4 text-head">{r.def}</td>
                <td className="py-4 text-muted">{r.evidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionLabel>Six recommendations</SectionLabel>
      <div className="mt-2 grid gap-px md:grid-cols-2">
        {recs.map((r) => (
          <article key={r.n} className="border-l-2 border-amber bg-surface px-5 py-6">
            <p className="font-mono text-xs text-amber-dim">
              {r.n} · {r.domain}
            </p>
            <h3 className="mt-2 font-display text-lg font-bold text-paper">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed">{r.body}</p>
            <p className="mt-4 border-l-2 border-amber bg-amber-pale px-3 py-2 font-mono text-xs text-amber">
              {r.action}
            </p>
          </article>
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl font-black">Offer ladder</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {offers.map((o) => (
          <div key={o.tier} className="border border-border p-5">
            <p className="font-mono text-xs text-amber">{o.tier}</p>
            <p className="mt-1 font-sans font-bold text-head">{o.name}</p>
            <p className="mt-1 font-mono text-sm">
              {o.price} · {o.usd}
            </p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl font-black">Environment audit</h2>
      <div className="mt-4 grid gap-3">
        {audits.map((a) => (
          <div key={a.title} className="border border-border bg-panel p-5">
            <p className="font-mono text-xs tracking-widest text-amber uppercase">{a.severity}</p>
            <h3 className="mt-1 font-sans font-bold text-head">{a.title}</h3>
            <p className="mt-2 text-sm">{a.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl font-black">30-day calendar</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {calendar.map((w) => (
          <div key={w.week} className="border border-border p-5">
            <p className="font-mono text-xs text-amber">{w.week}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {w.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl font-black">Papers that execute this brief</h2>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {related.map((p) => (
          <Link
            key={p.slug}
            to="/papers/$slug"
            params={{ slug: p.slug }}
            className="border border-border p-4 hover:border-amber-dim"
          >
            <p className="font-mono text-xs text-amber">{p.kind}</p>
            <p className="mt-1 font-sans font-bold text-head">{p.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
