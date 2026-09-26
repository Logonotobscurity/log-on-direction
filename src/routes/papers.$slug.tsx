import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Download } from "lucide-react";
import { getPaper } from "@/lib/papers";

export const Route = createFileRoute("/papers/$slug")({
  component: PaperPage,
  loader: ({ params }) => {
    const paper = getPaper(params.slug);
    if (!paper) throw notFound();
    return { paper };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.paper.title ?? "Paper"} — LOG_ON` }],
  }),
  notFoundComponent: () => (
    <div className="px-4 py-20 text-center">
      <p className="font-display text-2xl text-paper">Paper not found.</p>
      <Link to="/papers" className="mt-4 inline-block font-mono text-xs text-amber uppercase">
        Back to library
      </Link>
    </div>
  ),
});

function PaperPage() {
  const { paper } = Route.useLoaderData();
  const [body, setBody] = useState<string | null>(null);

  useEffect(() => {
    if (!paper.mdFile) {
      setBody(null);
      return;
    }
    let cancelled = false;
    fetch(`/papers/${paper.mdFile}`)
      .then((r) => (r.ok ? r.text() : Promise.reject()))
      .then((t) => {
        if (!cancelled) setBody(t);
      })
      .catch(() => {
        if (!cancelled) setBody(null);
      });
    return () => {
      cancelled = true;
    };
  }, [paper.mdFile]);

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-10">
      <Link
        to="/papers"
        className="inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-widest text-muted uppercase hover:text-amber"
      >
        <ArrowLeft className="size-4" /> Library
      </Link>
      <p className="mt-8 font-mono text-xs tracking-widest text-amber uppercase">
        {paper.kind} · {paper.kicker} · {paper.date}
      </p>
      <h1 className="mt-3 font-display text-3xl font-black sm:text-5xl">{paper.title}</h1>
      <p className="mt-4 font-display text-lg text-muted italic">{paper.excerpt}</p>
      <p className="mt-3 font-mono text-xs text-mid">
        {paper.stream} · {paper.words}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`/papers/${paper.file}`}
          download
          className="inline-flex min-h-12 items-center gap-2 bg-amber px-5 font-mono text-xs font-bold tracking-widest text-void uppercase"
        >
          <Download className="size-4" />
          Download {paper.file.split(".").pop()?.toUpperCase()}
        </a>
        {paper.mdFile && paper.mdFile !== paper.file ? (
          <a
            href={`/papers/${paper.mdFile}`}
            download
            className="inline-flex min-h-12 items-center gap-2 border border-amber-dim px-5 font-mono text-xs tracking-widest text-amber uppercase"
          >
            Markdown
          </a>
        ) : null}
        <a
          href={paper.related}
          className="inline-flex min-h-12 items-center font-mono text-xs tracking-widest text-muted uppercase"
        >
          Related section →
        </a>
      </div>

      {paper.slug === "strategy-deck" ? (
        <p className="mt-10 text-sm leading-relaxed">
          22-slide strategy deck covering the Direction Problem, LFA, offer stack, research
          programme (Studies 1–2, PAL, SAE, Benchmark Paradox), Schmidt grant, AgentBridge, and the
          30-day run plan. Open in PowerPoint or Google Slides.
        </p>
      ) : null}

      {paper.slug === "direction-mindmap" ? (
        <p className="mt-10 text-sm">
          Original interactive HTML mind map. Download and open locally, or stay on the{" "}
          <Link to="/map" className="text-amber">
            Map
          </Link>{" "}
          page for the rebuilt version.
        </p>
      ) : null}

      {body ? (
        <div className="mt-12 border-t border-border pt-10">
          <pre className="font-sans text-sm leading-relaxed whitespace-pre-wrap text-body">{body}</pre>
        </div>
      ) : paper.mdFile ? (
        <p className="mt-12 text-sm text-muted">Loading full text…</p>
      ) : null}
    </article>
  );
}
