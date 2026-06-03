import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/contact";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vignesh" },
      { name: "description", content: "Get in touch with Vignesh on WhatsApp at +91 73390 20958 for collaborations, freelance work, or a quick chat." },
      { property: "og:title", content: "Contact — Vignesh" },
      { property: "og:description", content: "Reach Vignesh on WhatsApp for collaborations and freelance work." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <header className="text-center max-w-2xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Contact</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
          Let's make something <span className="text-gradient">unforgettable</span>.
        </h1>
        <p className="mt-4 text-muted-foreground">
          The fastest way to reach me is WhatsApp. I usually reply within a few hours.
        </p>
      </header>

      <div className="mt-12 grid md:grid-cols-[1.2fr,1fr] gap-6">
        {/* Primary CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="tilt-card relative overflow-hidden rounded-3xl p-10 text-primary-foreground bg-primary group"
        >
          <div className="absolute inset-0 rgb-ring opacity-40 mix-blend-overlay" />
          <div className="relative">
            <div className="size-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center">
              <MessageCircle className="size-7" />
            </div>
            <h2 className="mt-6 text-2xl font-bold">Message me on WhatsApp</h2>
            <p className="mt-2 text-sm opacity-90">
              Tap to start a conversation. No forms, no waiting.
            </p>
            <p className="mt-6 font-mono text-lg">+91 73390 20958</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
              Open chat →
            </span>
          </div>
        </a>

        {/* Secondary info */}
        <div className="space-y-4">
          <a
            href="mailto:Vigneshthulsi06@gmail.com"
            className="tilt-card glass rounded-2xl p-6 block"
          >
            <Mail className="size-5 text-primary" />
            <h3 className="mt-3 font-semibold">Email</h3>
            <p className="text-sm text-muted-foreground mt-1 break-all">Vigneshthulsi06@gmail.com</p>
          </a>
          <div className="glass rounded-2xl p-6">
            <MapPin className="size-5 text-primary" />
            <h3 className="mt-3 font-semibold">Based in</h3>
            <p className="text-sm text-muted-foreground mt-1">Tamil Nadu, India · Available worldwide</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <Clock className="size-5 text-primary" />
            <h3 className="mt-3 font-semibold">Response time</h3>
            <p className="text-sm text-muted-foreground mt-1">Within a few hours, IST daytime</p>
          </div>
        </div>
      </div>

      {/* Quick enquiry form (opens WhatsApp prefilled) */}
      <form
        className="mt-10 glass rounded-3xl p-8"
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          const name = fd.get("name");
          const message = fd.get("message");
          const text = `Hi Vignesh, I'm ${name}. ${message}`;
          window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
            "_blank"
          );
        }}
      >
        <h2 className="text-xl font-semibold">Quick enquiry</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Send this directly to my WhatsApp.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <input
            required
            name="name"
            placeholder="Your name"
            className="rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            name="topic"
            placeholder="Topic (optional)"
            className="rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Tell me about your project or idea..."
          className="mt-4 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
        >
          <MessageCircle className="size-4" />
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
}
