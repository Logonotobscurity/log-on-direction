import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SectionLabel } from "@/components/site-shell";
import { tasks, claudeFiles, dms, calendar } from "@/lib/content";
import { useExecuteStore } from "@/lib/execute-store";

export const Route = createFileRoute("/execute")({
  component: Execute,
  head: () => ({ meta: [{ title: "Execution Command Centre — LOG_ON" }] }),
});

function Execute() {
  const done = useExecuteStore((s) => s.done);
  const toggle = useExecuteStore((s) => s.toggle);
  const total = tasks.length;
  const count = tasks.filter((t) => done[t.id]).length;
  const groups = useMemo(() => {
    const map = new Map<string, typeof tasks>();
    for (const t of tasks) {
      const list = map.get(t.group) ?? [];
      list.push(t);
      map.set(t.group, list);
    }
    return [...map.entries()];
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-10">
      <SectionLabel>Command centre</SectionLabel>
      <h1 className="font-display text-3xl font-black sm:text-5xl">
        Check it off. <em className="text-amber italic">Ship it.</em>
      </h1>
      <p className="mt-4 text-sm">
        {count} / {total} tasks complete. Persists in this browser.
      </p>
      <div className="mt-4 h-2 w-full bg-border">
        <div
          className="h-2 bg-amber transition-all duration-200"
          style={{ width: `${(count / total) * 100}%` }}
        />
      </div>

      <div className="mt-10 space-y-8">
        {groups.map(([group, list]) => (
          <section key={group}>
            <h2 className="font-mono text-xs tracking-widest text-amber uppercase">{group}</h2>
            <ul className="mt-3 divide-y divide-border border border-border">
              {list.map((t) => (
                <li key={t.id}>
                  <label className="flex min-h-12 cursor-pointer items-center gap-3 px-4 py-2">
                    <input
                      type="checkbox"
                      checked={!!done[t.id]}
                      onChange={() => toggle(t.id)}
                      className="size-4 accent-amber"
                    />
                    <span className={done[t.id] ? "text-muted line-through" : "text-head"}>
                      {t.label}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl font-black">Copyable CLAUDE.md</h2>
      <div className="mt-4 grid gap-4">
        {claudeFiles.map((f) => (
          <CopyBlock key={f.name} title={f.name} body={f.body} />
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl font-black">Outreach DMs</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {dms.map((d) => (
          <CopyBlock key={d.title} title={d.title} body={d.body} />
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
    </div>
  );
}

function CopyBlock({ title, body }: { title: string; body: string }) {
  const [ok, setOk] = useState(false);
  return (
    <div className="border border-border bg-surface p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-xs text-amber">{title}</p>
        <button
          type="button"
          className="min-h-11 px-3 font-mono text-xs tracking-widest text-head uppercase"
          onClick={async () => {
            await navigator.clipboard.writeText(body);
            setOk(true);
            setTimeout(() => setOk(false), 1500);
          }}
        >
          {ok ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="mt-3 overflow-x-auto font-mono text-xs leading-relaxed whitespace-pre-wrap text-body">
        {body}
      </pre>
    </div>
  );
}
