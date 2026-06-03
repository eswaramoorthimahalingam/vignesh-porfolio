import { Sun, Moon, Sparkles } from "lucide-react";
import { useTheme, type Theme } from "./theme-provider";

const modes: { id: Theme; icon: typeof Sun; label: string }[] = [
  { id: "light", icon: Sun, label: "Light" },
  { id: "dark", icon: Moon, label: "Dark" },
  { id: "rgb", icon: Sparkles, label: "RGB" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="relative inline-flex items-center gap-1 rounded-full p-1 glass">
      <div className="absolute inset-0 rounded-full rgb-ring opacity-40 -z-10 blur-sm" />
      {modes.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => setTheme(id)}
          aria-label={`Switch to ${label} theme`}
          className={`relative flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
            theme === id
              ? "bg-primary text-primary-foreground shadow-lg"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Icon className="size-3.5" />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
}
