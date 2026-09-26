import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/brief", label: "Brief" },
  { to: "/map", label: "Map" },
  { to: "/essay", label: "Essay" },
  { to: "/papers", label: "Papers" },
  { to: "/execute", label: "Execute" },
  { to: "/contact", label: "Contact" },
] as const;

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 font-mono text-xs font-bold tracking-widest text-amber uppercase">
      {children}
    </p>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-xs font-bold tracking-widest text-amber uppercase">
      {children}
    </p>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const active = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <div className="min-h-dvh bg-void text-body">
      <header className="sticky top-0 z-50 border-b border-border bg-void/95 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-8">
          <Link
            to="/"
            className="font-mono text-xs font-bold tracking-widest text-amber"
            onClick={() => setOpen(false)}
          >
            LOG_ON
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "font-mono text-xs tracking-widest transition-colors duration-150",
                  active(l.to) ? "text-amber" : "text-muted hover:text-head",
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center text-head md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open ? (
          <nav className="border-t border-border px-4 py-3 md:hidden">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-11 items-center font-mono text-xs tracking-widest",
                  active(l.to) ? "text-amber" : "text-head",
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>
      <main>{children}</main>
      <footer className="border-t-2 border-amber px-4 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-xs font-bold tracking-widest text-amber">LOG_ON</span>
          <p className="font-mono text-xs tracking-wide text-muted">
            Lagos, Nigeria · Direction infrastructure for African AI · 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
