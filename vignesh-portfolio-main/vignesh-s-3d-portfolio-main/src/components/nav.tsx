import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./theme-toggle";
import { WHATSAPP_URL } from "@/lib/contact";
import { MessageCircle } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative size-8 rounded-lg rgb-ring p-[2px]">
            <div className="size-full rounded-[6px] bg-background flex items-center justify-center font-mono font-bold text-sm">
              V
            </div>
          </div>
          <span className="font-display font-semibold tracking-tight">Vignesh</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md transition-colors"
              activeProps={{ className: "text-foreground bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90 transition"
          >
            <MessageCircle className="size-3.5" /> Connect
          </a>
        </div>
      </div>
    </header>
  );
}
