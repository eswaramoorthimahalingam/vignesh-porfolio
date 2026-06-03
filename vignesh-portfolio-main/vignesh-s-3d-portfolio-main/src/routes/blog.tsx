import { createFileRoute } from "@tanstack/react-router";
import { POSTS } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Vignesh" },
      { name: "description", content: "Notes on engineering, AI, edge runtimes, and developer workflows by Vignesh." },
      { property: "og:title", content: "Blog — Vignesh" },
      { property: "og:description", content: "Notes on engineering, AI, and developer workflows." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
      <header>
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Blog</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
          Writing on <span className="text-gradient">code & craft</span>.
        </h1>
        <p className="mt-4 text-muted-foreground">
          Long-form notes from the trenches — engineering decisions, AI experiments, and honest
          retros.
        </p>
      </header>

      <ul className="mt-12 divide-y divide-border/60">
        {POSTS.map((p) => (
          <li key={p.slug} className="py-8 group cursor-pointer">
            <div className="font-mono text-xs text-muted-foreground flex items-center gap-2">
              <time>
                {new Date(p.date).toLocaleDateString("en", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{p.read} read</span>
            </div>
            <h2 className="mt-2 text-2xl font-semibold group-hover:text-gradient transition">
              {p.title}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{p.excerpt}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
              Read more <ArrowRight className="size-4" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
