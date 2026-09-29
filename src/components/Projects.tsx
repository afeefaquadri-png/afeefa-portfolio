"use client";

import { useState } from "react";
import { projects, type Category } from "@/data/content";

const filters: { key: Category | "All"; label: string }[] = [
  { key: "All", label: "All" },
  { key: "RAG", label: "RAG" },
  { key: "Agents", label: "Agents" },
  { key: "ML", label: "Machine learning" },
  { key: "Product", label: "Full products" },
];

export default function Projects() {
  const [active, setActive] = useState<Category | "All">("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((f) => {
          const on = f.key === active;
          const count = f.key === "All" ? projects.length : projects.filter((p) => p.categories.includes(f.key as Category)).length;
          return (
            <button
              key={f.key}
              aria-pressed={on}
              onClick={() => setActive(f.key)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                on ? "bg-ink text-paper" : "bg-paper-2 text-ink-soft hover:text-ink"
              }`}
            >
              {f.label}
              <span className={`ml-2 font-mono text-xs ${on ? "opacity-70" : "text-ink-faint"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {shown.map((p) => (
          <article
            key={p.tag}
            className="group relative flex flex-col rounded-2xl bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-4 flex items-center justify-between font-mono text-xs tracking-wider">
              <span className="text-accent">{p.tag}</span>
              <span className="text-ink-faint">{p.date}</span>
            </div>
            <h3 className="font-display text-3xl leading-tight">{p.name}</h3>
            <p className="mb-3 text-sm text-ink-soft">{p.kind}</p>
            <p className="mb-5 text-[15px] leading-relaxed">{p.body}</p>
            <ul className="mb-6 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <li key={s} className="rounded-md bg-paper-2 px-2 py-0.5 font-mono text-[11px] text-ink-soft">
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex gap-4 text-sm font-medium">
              <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} source code on GitHub`} className="-my-2 py-2 underline decoration-ink-faint underline-offset-4 hover:decoration-accent hover:text-accent">
                Code
              </a>
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.name} live demo`} className="-my-2 py-2 underline decoration-ink-faint underline-offset-4 hover:decoration-accent hover:text-accent">
                  Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
