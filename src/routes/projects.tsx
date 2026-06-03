import { createFileRoute } from "@tanstack/react-router";
import { PROJECTS } from "@/lib/content";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Vignesh" },
      { name: "description", content: "A selection of full-stack, AI, and motion projects built by Vignesh." },
      { property: "og:title", content: "Projects — Vignesh" },
      { property: "og:description", content: "Full-stack, AI, and motion projects." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <header className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Projects</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
          Things I've <span className="text-gradient">shipped</span>.
        </h1>
        <p className="mt-4 text-muted-foreground">
          A growing collection of products, experiments, and side quests.
        </p>
      </header>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <article
            key={p.slug}
            className="tilt-card glass rounded-3xl p-8 relative overflow-hidden group"
          >
            <div
              className="absolute -top-24 -right-24 size-64 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition"
              style={{ background: p.accent }}
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {p.tag}
                </span>
                <Sparkles className="size-4 text-primary" />
              </div>
              <h2 className="mt-4 text-2xl font-semibold">{p.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
