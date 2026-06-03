import { createFileRoute, Link } from "@tanstack/react-router";
import { Cube3D } from "@/components/cube-3d";
import { WHATSAPP_URL } from "@/lib/contact";
import { PROJECTS, SKILLS, POSTS } from "@/lib/content";
import { ArrowRight, MessageCircle, Sparkles, Code2, Brain, Rocket } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vignesh — Computer Science Portfolio" },
      { name: "description", content: "Computer science engineer crafting 3D web experiences, AI tools, and full-stack products. Explore projects, skills, and writing." },
      { property: "og:title", content: "Vignesh — Computer Science Portfolio" },
      { property: "og:description", content: "3D animated portfolio: projects, skills, and writing in CS, AI, and the web." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-24 grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
          <div className="animate-[fade-up_0.8s_ease-out]">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              Available for collaborations
            </div>
            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Hi, I'm <span className="text-gradient">Vignesh S</span>.
              <br />
              <span className="text-foreground/90">Learning to build the future.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              2nd-year BSc Computer Science student at Kongunadu Arts and Science College,
              Coimbatore. Sincere, hardworking, and looking for opportunities to grow as a
              developer — one project at a time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-lg shadow-primary/30"
              >
                <MessageCircle className="size-4" />
                Connect on WhatsApp
                <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:bg-secondary transition"
              >
                View projects
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "8+", v: "Tech skills" },
                { k: "5+", v: "Certifications" },
                { k: "2nd", v: "Year BSc CS" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="text-3xl font-bold text-gradient">{s.k}</dt>
                  <dd className="text-xs text-muted-foreground mt-1">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            <Cube3D />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-12 rounded-full bg-primary/20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <section className="border-y border-border/40 py-6 overflow-hidden bg-secondary/30">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center gap-12 px-6 font-mono text-sm text-muted-foreground">
              {SKILLS.map((s) => (
                <span key={`${dup}-${s.name}`} className="hover:text-foreground transition">
                  {s.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What I'm learning</h2>
          <p className="mt-3 text-muted-foreground">
            Building a strong foundation across languages, web, and tools — one course and one
            project at a time.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { icon: Code2, title: "Programming Foundations", body: "C, C++, Java, and Python — strengthening logic, OOP, and problem-solving from the ground up." },
            { icon: Brain, title: "Data & Cybersecurity", body: "IBM SkillsBuild coursework in Exploring Data and Cybersecurity — learning how real systems work." },
            { icon: Rocket, title: "Web & Productivity", body: "HTML, CSS, MS Office and Excel — shipping small projects and dashboards while I learn." },
          ].map((f) => (
            <div key={f.title} className="tilt-card glass rounded-2xl p-6">
              <div className="size-10 rounded-xl rgb-ring p-[2px]">
                <div className="size-full rounded-[10px] bg-card flex items-center justify-center">
                  <f.icon className="size-5 text-primary" />
                </div>
              </div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured work</h2>
            <p className="mt-2 text-muted-foreground">A few things I've shipped recently.</p>
          </div>
          <Link to="/projects" className="text-sm text-primary hover:underline flex items-center gap-1">
            All projects <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {PROJECTS.slice(0, 4).map((p) => (
            <article key={p.slug} className="tilt-card glass rounded-2xl p-6 relative overflow-hidden">
              <div
                className="absolute -top-20 -right-20 size-48 rounded-full blur-3xl opacity-40"
                style={{ background: p.accent }}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {p.tag}
                  </span>
                  <Sparkles className="size-4 text-primary" />
                </div>
                <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-full bg-secondary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LATEST POSTS */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">From the blog</h2>
            <p className="mt-2 text-muted-foreground">Notes on engineering, AI, and craft.</p>
          </div>
          <Link to="/blog" className="text-sm text-primary hover:underline flex items-center gap-1">
            All posts <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {POSTS.map((p) => (
            <article key={p.slug} className="tilt-card glass rounded-2xl p-6">
              <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                <time>{new Date(p.date).toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric" })}</time>
                <span>·</span>
                <span>{p.read}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl glass p-10 sm:p-14 text-center">
          <div className="absolute inset-0 rgb-ring opacity-30 -z-10" />
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Got an idea? <span className="text-gradient">Let's build it.</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Whether it's a 3D landing page, an AI agent, or a full product — I'm a message away.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-xl shadow-primary/40"
          >
            <MessageCircle className="size-4" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
