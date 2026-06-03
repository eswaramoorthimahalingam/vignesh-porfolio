import { createFileRoute } from "@tanstack/react-router";
import { SKILLS, EDUCATION, CERTIFICATES, ACHIEVEMENTS, WORKSHOPS, PROFILE } from "@/lib/content";
import { GraduationCap, Award, Sparkle } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vignesh S" },
      { name: "description", content: "About Vignesh S — BSc Computer Science student at Kongunadu Arts and Science College, Coimbatore. Skills, education, and certifications." },
      { property: "og:title", content: "About — Vignesh S" },
      { property: "og:description", content: "BSc Computer Science student at Kongunadu Arts and Science College, Coimbatore." },
    ],
  }),
  component: About,
});

function About() {
  const grouped = SKILLS.reduce<Record<string, typeof SKILLS>>((acc, s) => {
    (acc[s.group] ??= []).push(s);
    return acc;
  }, {});

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <header className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">About</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
          Curious learner, <span className="text-gradient">future engineer.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          I'm {PROFILE.name}, a 2nd-year BSc Computer Science student at Kongunadu Arts and Science
          College, Coimbatore. {PROFILE.objective}
        </p>
      </header>

      {/* Education */}
      <section className="mt-16">
        <div className="flex items-center gap-2">
          <GraduationCap className="size-5 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight">Education</h2>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl glass">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60">
              <tr className="text-left">
                <th className="px-5 py-3 font-medium">Qualification</th>
                <th className="px-5 py-3 font-medium hidden sm:table-cell">Institution</th>
                <th className="px-5 py-3 font-medium hidden md:table-cell">Board</th>
                <th className="px-5 py-3 font-medium">Score</th>
                <th className="px-5 py-3 font-medium">Year</th>
              </tr>
            </thead>
            <tbody>
              {EDUCATION.map((e) => (
                <tr key={e.degree} className="border-t border-border/60">
                  <td className="px-5 py-3 font-medium">{e.degree}</td>
                  <td className="px-5 py-3 text-muted-foreground hidden sm:table-cell">{e.institute}</td>
                  <td className="px-5 py-3 text-muted-foreground hidden md:table-cell">{e.board}</td>
                  <td className="px-5 py-3 font-mono text-primary">{e.score}</td>
                  <td className="px-5 py-3 text-muted-foreground">{e.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">Technical skills</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {Object.entries(grouped).map(([group, items]) => (
            <div key={group} className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-sm font-mono uppercase tracking-wider text-primary">
                {group}
              </h3>
              <ul className="mt-4 space-y-3">
                {items.map((s) => (
                  <li key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span>{s.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div className="h-full rounded-full rgb-ring" style={{ width: `${s.level}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="mt-16">
        <div className="flex items-center gap-2">
          <Award className="size-5 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight">Certifications</h2>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {CERTIFICATES.map((c) => (
            <div key={c.title} className="tilt-card glass rounded-2xl p-5">
              <div className="text-xs font-mono uppercase tracking-wider text-primary">{c.issuer}</div>
              <h3 className="mt-2 font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements + Workshops */}
      <section className="mt-16 grid md:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <Sparkle className="size-4 text-primary" />
            <h2 className="text-lg font-semibold">Academic achievements</h2>
          </div>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground list-disc list-inside marker:text-primary">
            {ACHIEVEMENTS.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <Sparkle className="size-4 text-primary" />
            <h2 className="text-lg font-semibold">Workshops</h2>
          </div>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground list-disc list-inside marker:text-primary">
            {WORKSHOPS.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Personal */}
      <section className="mt-16 glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold">Personal details</h2>
        <dl className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div><dt className="text-muted-foreground">Name</dt><dd className="font-medium">{PROFILE.name}</dd></div>
          <div><dt className="text-muted-foreground">Date of Birth</dt><dd className="font-medium">{PROFILE.dob}</dd></div>
          <div><dt className="text-muted-foreground">Age</dt><dd className="font-medium">{PROFILE.age}</dd></div>
          <div><dt className="text-muted-foreground">Location</dt><dd className="font-medium">Coimbatore</dd></div>
        </dl>
      </section>
    </div>
  );
}
