import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { Eyebrow, SectionLabel } from "@/components/site-shell";
import { mission, offers, researchStreams, stats, moat } from "@/lib/content";
import { papers } from "@/lib/papers";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "LOG_ON — Direction Infrastructure for African AI" }],
  }),
});

function Home() {
  const featured = papers.slice(0, 4);
  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-amber px-4 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <Eyebrow>LOG_ON AI Solution Agency · Lagos, Nigeria</Eyebrow>
        <h1 className="max-w-5xl font-display text-3xl leading-tight font-black tracking-tight text-paper sm:text-5xl">
          Your AI is executing.
          <br />
          <em className="text-amber italic">Toward what?</em>
        </h1>
        <p className="mt-7 max-w-lg font-display text-lg text-muted italic">
          Most organisations deploying AI in African contexts get technically correct outputs
          that solve the wrong problem, miss the cultural context, or violate constraints that
          were never documented.
        </p>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-body">{mission}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center bg-amber px-6 font-mono text-xs font-bold tracking-widest text-void uppercase transition-colors hover:bg-amber-dim"
          >
            Get a Cultural Bias Audit
          </Link>
          <Link
            to="/papers"
            className="inline-flex min-h-12 items-center border border-amber-dim px-6 font-mono text-xs font-bold tracking-widest text-amber uppercase transition-colors hover:border-amber hover:bg-amber-pale"
          >
            Read the papers
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-2 border-b border-border md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="border-r border-border px-5 py-8 last:border-r-0">
            <p className="font-display text-3xl font-black text-amber">{s.n}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted">{s.l}</p>
          </div>
        ))}
      </section>

      <section className="border-b border-border px-4 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Offer stack</SectionLabel>
          <h2 className="mb-10 font-display text-3xl font-black">
            Three ways in. <em className="text-amber italic">One direction.</em>
          </h2>
          <div className="grid gap-px bg-border md:grid-cols-3">
            {offers.map((o) => (
              <article
                key={o.tier}
                className={o.featured ? "bg-amber-pale px-6 py-8" : "bg-surface px-6 py-8"}
              >
                <p className="font-mono text-xs tracking-widest text-amber uppercase">{o.tier}</p>
                <h3 className="mt-3 font-display text-xl font-bold text-paper">{o.name}</h3>
                <p className="mt-2 font-mono text-sm text-head">
                  {o.price} <span className="text-muted">· {o.usd}</span>
                </p>
                <p className="mt-1 text-xs text-muted">{o.time}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {o.points.map((p) => (
                    <li key={p} className="border-l-2 border-amber-dim pl-3">
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={
                    o.featured
                      ? "mt-6 flex min-h-11 items-center justify-center bg-amber font-mono text-xs font-bold tracking-widest text-void uppercase"
                      : "mt-6 flex min-h-11 items-center justify-center border border-amber-dim font-mono text-xs font-bold tracking-widest text-amber uppercase"
                  }
                >
                  {o.featured ? "Start here" : "Request"}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface px-4 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Research streams</SectionLabel>
          <h2 className="mb-10 font-display text-3xl font-black">
            Building the cognitive <em className="text-amber italic">infrastructure layer.</em>
          </h2>
          <div className="grid gap-px md:grid-cols-3">
            {researchStreams.map((r) => (
              <Link
                key={r.label}
                to="/papers/$slug"
                params={{ slug: r.slug }}
                className="border-l-2 border-amber-dim bg-void px-5 py-6 transition-colors hover:bg-panel"
              >
                <p className="mb-2 font-mono text-xs font-bold tracking-widest text-amber-dim uppercase">
                  {r.label}
                </p>
                <h3 className="mb-2 font-sans text-sm font-bold text-head">{r.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{r.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-amber">
                  Open paper <ArrowRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border px-4 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel>Library</SectionLabel>
              <h2 className="font-display text-3xl font-black">
                Papers, proposals, <em className="text-amber italic">downloadable.</em>
              </h2>
            </div>
            <a
              href="/papers/LOG_ON-Direction-Infrastructure.pptx"
              download
              className="inline-flex min-h-11 items-center gap-2 border border-amber-dim px-4 font-mono text-xs tracking-widest text-amber uppercase"
            >
              <Download className="size-4" /> Strategy deck
            </a>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {featured.map((p) => (
              <Link
                key={p.slug}
                to="/papers/$slug"
                params={{ slug: p.slug }}
                className="border border-border bg-surface p-5 transition-colors hover:border-amber-dim"
              >
                <p className="font-mono text-xs tracking-widest text-amber uppercase">
                  {p.kind} · {p.date}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-paper">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.excerpt}</p>
              </Link>
            ))}
          </div>
          <Link
            to="/papers"
            className="mt-6 inline-flex min-h-11 items-center font-mono text-xs tracking-widest text-amber uppercase"
          >
            All papers →
          </Link>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-10">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Why LOG_ON</SectionLabel>
            <h2 className="font-display text-3xl font-black">
              The objective function is a{" "}
              <em className="text-amber italic">cultural document.</em>
            </h2>
          </div>
          <ol>
            {moat.map((m, i) => (
              <li key={m} className="flex gap-3.5 border-b border-border py-4 text-sm last:border-b-0">
                <span className="mt-0.5 min-w-6 font-mono text-xs font-bold text-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{m}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
