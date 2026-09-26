import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Download } from "lucide-react";
import { SectionLabel } from "@/components/site-shell";
import { paperKinds, papers, type PaperKind } from "@/lib/papers";

export const Route = createFileRoute("/papers/")({
  component: PapersIndex,
  head: () => ({ meta: [{ title: "Papers — LOG_ON" }] }),
});

function PapersIndex() {
  const [kind, setKind] = useState<PaperKind | "All">("All");
  const list = useMemo(
    () => (kind === "All" ? papers : papers.filter((p) => p.kind === kind)),
    [kind],
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-10">
      <SectionLabel>Library · 13 artifacts</SectionLabel>
      <h1 className="font-display text-3xl font-black sm:text-5xl">
        Read it here. <em className="text-amber italic">Take the file.</em>
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed">
        Essays, study protocols, the Schmidt proposal, SAE analysis, AgentBridge spec, outreach
        scripts, and the strategy deck. Original files download as DOCX, MD, HTML, or PPTX.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {(["All", ...paperKinds] as const).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setKind(k)}
            className={
              kind === k
                ? "min-h-11 border border-amber bg-amber-pale px-3 font-mono text-xs tracking-widest text-amber uppercase"
                : "min-h-11 border border-border px-3 font-mono text-xs tracking-widest text-muted uppercase"
            }
          >
            {k}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-2">
        {list.map((p) => (
          <article
            key={p.slug}
            className="flex flex-col gap-4 border border-border bg-surface p-5 sm:flex-row sm:items-start sm:justify-between"
          >
            <div className="max-w-2xl">
              <p className="font-mono text-xs tracking-widest text-amber uppercase">
                {p.kind} · {p.kicker} · {p.date}
              </p>
              <Link
                to="/papers/$slug"
                params={{ slug: p.slug }}
                className="mt-1 block font-display text-xl font-bold text-paper hover:text-amber"
              >
                {p.title}
              </Link>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.excerpt}</p>
              <p className="mt-2 font-mono text-xs text-mid">
                {p.stream} · {p.words}
              </p>
            </div>
            <a
              href={`/papers/${p.file}`}
              download
              className="inline-flex min-h-11 shrink-0 items-center gap-2 border border-amber-dim px-4 font-mono text-xs tracking-widest text-amber uppercase"
            >
              <Download className="size-4" />
              Download
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
