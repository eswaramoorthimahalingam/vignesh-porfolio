import { WHATSAPP_URL } from "@/lib/contact";
import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vignesh · Crafted with code & curiosity.
        </p>
        <div className="flex items-center gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="size-9 rounded-full glass flex items-center justify-center hover:text-primary transition">
            <MessageCircle className="size-4" />
          </a>
          <a href="mailto:Vigneshthulsi06@gmail.com" aria-label="Email" className="size-9 rounded-full glass flex items-center justify-center hover:text-primary transition">
            <Mail className="size-4" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="size-9 rounded-full glass flex items-center justify-center hover:text-primary transition">
            <Github className="size-4" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="size-9 rounded-full glass flex items-center justify-center hover:text-primary transition">
            <Linkedin className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
