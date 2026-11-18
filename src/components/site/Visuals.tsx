/** Architectural composition: stacked planes on a fine grid with one blue element. */
export function HeroVisual() {
  return (
    <svg viewBox="0 0 480 560" className="h-auto w-full" role="img" aria-label="Abstract architectural composition">
      <g className="stroke-border" strokeWidth="1">
        {Array.from({ length: 13 }, (_, i) => <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="560" />)}
        {Array.from({ length: 15 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 40} x2="480" y2={i * 40} />)}
      </g>
      <rect x="80" y="80" width="240" height="360" className="fill-foreground" />
      <rect x="200" y="200" width="200" height="280" className="fill-card stroke-foreground" strokeWidth="1.5" />
      <rect x="320" y="120" width="80" height="80" className="fill-primary" />
      <line x1="40" y1="520" x2="440" y2="520" className="stroke-foreground" strokeWidth="1.5" />
      <circle cx="400" cy="520" r="5" className="fill-primary anim-node" />
      <g className="stroke-foreground" strokeWidth="1">
        {[0, 1, 2, 3, 4, 5].map((i) => <line key={i} x1="230" y1={240 + i * 32} x2={370 - (i % 2) * 50} y2={240 + i * 32} />)}
      </g>
      <text x="84" y="460" className="fill-muted-foreground font-display" fontSize="11" letterSpacing="2">FIG. 01 — SYSTEM</text>
    </svg>
  );
}

export function ProjectVisual({ variant }: { variant: number }) {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="300" className={variant === 1 ? "fill-foreground" : "fill-card"} />
      {variant === 0 && (<g>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => { const h = [60, 110, 80, 150, 120, 190, 140][i]!; return <rect key={i} x={50 + i * 44} y={250 - h} width="26" height={h} className={i === 5 ? "fill-primary" : "fill-foreground"} />; })}
        <line x1="40" y1="250" x2="360" y2="250" className="stroke-foreground" />
      </g>)}
      {variant === 1 && (<g>
        {[0, 1, 2, 3, 4].map((i) => <circle key={i} cx="200" cy="150" r={20 + i * 26} fill="none" className={i === 2 ? "stroke-primary" : "stroke-background/40"} strokeWidth={i === 2 ? 2 : 1} />)}
        <circle cx="200" cy="150" r="8" className="fill-primary" />
      </g>)}
      {variant === 2 && (<g>
        {Array.from({ length: 24 }, (_, k) => { const r = Math.floor(k / 6), c = k % 6; return <rect key={k} x={60 + c * 48} y={50 + r * 52} width="36" height="40" className={k === 9 ? "fill-primary" : (r + c) % 3 === 0 ? "fill-foreground" : "fill-none stroke-foreground"} />; })}
      </g>)}
    </svg>
  );
}
