export function Aura() {
  return (
    <div className="aura-bg" aria-hidden>
      <div
        className="aura-blob"
        style={{ background: "var(--color-aura-1)", top: "5%", left: "10%" }}
      />
      <div
        className="aura-blob"
        style={{ background: "var(--color-aura-2)", top: "30%", right: "5%", animationDelay: "-4s" }}
      />
      <div
        className="aura-blob"
        style={{ background: "var(--color-aura-3)", bottom: "5%", left: "30%", animationDelay: "-8s" }}
      />
    </div>
  );
}
