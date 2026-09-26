import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { SectionLabel } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({ meta: [{ title: "Contact — LOG_ON" }] }),
});

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    localStorage.setItem("logon-enquiry", JSON.stringify({ ...data, at: Date.now() }));
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-14 sm:px-10">
      <SectionLabel>Contact</SectionLabel>
      <h1 className="font-display text-3xl font-black sm:text-5xl">
        Tell us about the <em className="text-amber italic">deployment.</em>
      </h1>
      <p className="mt-4 text-sm leading-relaxed">
        Lagos, Nigeria · logonthepage@gmail.com. 48-hour Cultural Bias Rapid Audit is the default
        entry.
      </p>

      {sent ? (
        <p className="mt-10 border border-amber bg-amber-pale px-5 py-8 font-display text-lg text-amber italic">
          Enquiry saved on this device. We will follow up at the email you left.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-10 space-y-5">
          <Field label="Name" name="name" required />
          <Field label="Organisation" name="org" required placeholder="TechCo Nigeria" />
          <Field label="Email" name="email" type="email" required placeholder="amaka@techco.ng" />
          <div>
            <label className="font-mono text-xs tracking-widest text-muted uppercase">
              I’m interested in
            </label>
            <select
              name="service"
              className="mt-2 min-h-12 w-full border border-border bg-surface px-3 text-sm text-head"
              defaultValue="tier1"
            >
              <option value="tier1">Cultural Bias Rapid Audit (₦300K–₦750K)</option>
              <option value="tier2">Agent Environment Design (₦1.8M–₦4.5M)</option>
              <option value="tier3">African AI Direction Consulting (₦9M–₦21M)</option>
              <option value="other">Research partnership / other</option>
            </select>
          </div>
          <div>
            <label className="font-mono text-xs tracking-widest text-muted uppercase">
              Tell us about your AI deployment
            </label>
            <textarea
              name="message"
              required
              rows={6}
              className="mt-2 w-full border border-border bg-surface px-3 py-3 text-sm text-head"
              placeholder="We’re deploying an AI customer service system across 3 Nigerian cities…"
            />
          </div>
          <button
            type="submit"
            className="inline-flex min-h-12 items-center bg-amber px-6 font-mono text-xs font-bold tracking-widest text-void uppercase"
          >
            Send enquiry →
          </button>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="font-mono text-xs tracking-widest text-muted uppercase">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 min-h-12 w-full border border-border bg-surface px-3 text-sm text-head"
      />
    </div>
  );
}
