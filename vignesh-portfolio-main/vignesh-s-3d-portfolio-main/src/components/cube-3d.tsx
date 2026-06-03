export function Cube3D() {
  const labels = ["</>", "{ }", "AI", "λ", "01", "π"];
  return (
    <div className="cube-scene flex items-center justify-center">
      <div className="cube">
        {labels.map((l, i) => (
          <div key={i} className={`face f${i + 1}`}>
            <span className="text-gradient font-bold">{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
