// The career as a process flow diagram. Each unit is drawn in a local
// 150 x 200 box and placed by the layout (horizontal on desktop, vertical
// on phones). Pipes carry animated "flow" between units.

type Ports = { left: number; right: number; top: number; bottom: number; yIn: number; yOut: number };

type Unit = {
  href: string;
  tag: string;
  name: string;
  sub: string;
  ports: Ports;
  Shape: () => React.ReactElement;
};

function Tank() {
  return (
    <>
      <rect x="39" y="24" width="72" height="162" rx="8" className="level" fill="var(--flow)" opacity="0.18" />
      <rect x="35" y="20" width="80" height="170" rx="12" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="35" y1="60" x2="115" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" opacity="0.5" />
      <line x1="45" y1="190" x2="45" y2="200" stroke="currentColor" strokeWidth="2" />
      <line x1="105" y1="190" x2="105" y2="200" stroke="currentColor" strokeWidth="2" />
    </>
  );
}

function Reactor() {
  return (
    <>
      <rect x="62" y="0" width="26" height="16" rx="3" fill="currentColor" opacity="0.85" />
      <line x1="75" y1="16" x2="75" y2="140" stroke="currentColor" strokeWidth="2" />
      <rect x="25" y="30" width="100" height="140" rx="40" fill="var(--card)" fillOpacity="0.6" stroke="currentColor" strokeWidth="2" />
      <g className="agitator">
        <line x1="50" y1="140" x2="100" y2="140" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g className="agitator" style={{ animationDelay: "-0.45s" }}>
        <line x1="55" y1="100" x2="95" y2="100" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </g>
      {[
        [45, 158, 0],
        [68, 162, 0.8],
        [92, 156, 1.6],
        [105, 160, 2.2],
        [58, 150, 1.2],
      ].map(([cx, cy, d], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="var(--flow)" className="bubble" style={{ animationDelay: `${d}s` }} />
      ))}
    </>
  );
}

function Column() {
  const trays = [30, 50, 70, 90, 110, 130, 150, 170];
  return (
    <>
      <rect x="50" y="0" width="50" height="200" rx="25" fill="var(--card)" fillOpacity="0.6" stroke="currentColor" strokeWidth="2" />
      {trays.map((y, i) => (
        <g key={y}>
          <line
            x1={i % 2 ? 62 : 50}
            y1={y}
            x2={i % 2 ? 100 : 88}
            y2={y}
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx={i % 2 ? 70 : 80}
            cy={y - 5}
            r="2.5"
            fill="var(--accent)"
            className="tray-glow"
            style={{ animationDelay: `${(trays.length - i) * 0.25}s` }}
          />
        </g>
      ))}
    </>
  );
}

function Drum() {
  return (
    <>
      <circle
        cx="75"
        cy="125"
        r="48"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        className="animate-ping"
        style={{ transformBox: "fill-box", transformOrigin: "center", animationDuration: "2.4s" }}
        opacity="0.5"
      />
      <rect x="10" y="90" width="130" height="70" rx="35" fill="var(--accent-soft)" stroke="currentColor" strokeWidth="2" />
      <line x1="40" y1="160" x2="34" y2="185" stroke="currentColor" strokeWidth="2" />
      <line x1="110" y1="160" x2="116" y2="185" stroke="currentColor" strokeWidth="2" />
      <text x="75" y="130" textAnchor="middle" fontSize="13" fontFamily="var(--font-plex-mono)" fill="var(--accent)" letterSpacing="2">
        NOW
      </text>
    </>
  );
}

const units: Unit[] = [
  {
    href: "#story",
    tag: "T-101",
    name: "Chemical Engineering",
    sub: "B.Tech + a year in industry",
    ports: { left: 35, right: 115, top: 20, bottom: 190, yIn: 150, yOut: 150 },
    Shape: Tank,
  },
  {
    href: "#story",
    tag: "R-201",
    name: "AI / ML training",
    sub: "learning by building",
    ports: { left: 25, right: 125, top: 0, bottom: 170, yIn: 150, yOut: 110 },
    Shape: Reactor,
  },
  {
    href: "#projects",
    tag: "C-301",
    name: "Building projects",
    sub: "RAG, agents, ML",
    ports: { left: 50, right: 100, top: 0, bottom: 200, yIn: 110, yOut: 40 },
    Shape: Column,
  },
  {
    href: "#now",
    tag: "P-401",
    name: "AI Developer, Euron",
    sub: "web, mobile, AI",
    ports: { left: 10, right: 140, top: 90, bottom: 160, yIn: 125, yOut: 125 },
    Shape: Drum,
  },
];

function Pipe({ d, fitting }: { d: string; fitting?: React.ReactNode }) {
  return (
    <g>
      <path d={d} fill="none" stroke="var(--line)" strokeOpacity="0.35" strokeWidth="7" strokeLinejoin="round" />
      <path d={d} fill="none" stroke="var(--flow)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="pipe-flow" />
      {fitting}
    </g>
  );
}

const Pump = ({ x, y }: { x: number; y: number }) => (
  <g>
    <circle cx={x} cy={y} r="11" fill="var(--paper)" stroke="var(--line)" strokeWidth="2" />
    <path d={`M${x - 5} ${y - 6} L${x + 7} ${y} L${x - 5} ${y + 6} Z`} fill="var(--line)" />
  </g>
);

const Valve = ({ x, y, vertical }: { x: number; y: number; vertical?: boolean }) => (
  <g transform={`rotate(${vertical ? 90 : 0} ${x} ${y})`}>
    <path d={`M${x - 9} ${y - 7} L${x + 9} ${y + 7} L${x + 9} ${y - 7} L${x - 9} ${y + 7} Z`} fill="var(--paper)" stroke="var(--line)" strokeWidth="2" strokeLinejoin="round" />
  </g>
);

function UnitLink({ u, x, y, labelX, labelY, anchor }: { u: Unit; x: number; y: number; labelX: number; labelY: number; anchor: "start" | "middle" }) {
  return (
    <a href={u.href} className="text-line outline-none transition-colors hover:text-accent focus-visible:text-accent" aria-label={`${u.tag} ${u.name}`}>
      <g transform={`translate(${x} ${y})`}>
        <rect x="0" y="0" width="150" height="200" fill="transparent" />
        <u.Shape />
      </g>
      <text x={labelX} y={labelY} textAnchor={anchor} fontFamily="var(--font-plex-mono)" fontSize="12" fill="var(--accent)" letterSpacing="1.5">
        {u.tag}
      </text>
      <text x={labelX} y={labelY + 20} textAnchor={anchor} fontFamily="var(--font-plex-sans)" fontSize="15" fontWeight="600" fill="var(--ink)">
        {u.name}
      </text>
      <text x={labelX} y={labelY + 38} textAnchor={anchor} fontFamily="var(--font-plex-sans)" fontSize="12.5" fill="var(--ink-soft)">
        {u.sub}
      </text>
    </a>
  );
}

function Horizontal() {
  const step = 270;
  const top = 20;
  const xs = units.map((_, i) => 20 + i * step);
  return (
    <svg viewBox="0 0 1000 310" className="hidden w-full md:block">
      {units.slice(0, -1).map((u, i) => {
        const n = units[i + 1];
        const ax = xs[i] + u.ports.right;
        const ay = top + u.ports.yOut;
        const bx = xs[i + 1] + n.ports.left;
        const by = top + n.ports.yIn;
        const mid = (ax + bx) / 2;
        const d = ay === by ? `M${ax} ${ay} H${bx}` : `M${ax} ${ay} H${mid} V${by} H${bx}`;
        const fitting = i === 0 ? <Pump x={mid} y={ay} /> : <Valve x={mid - 22} y={ay} />;
        return <Pipe key={i} d={d} fitting={fitting} />;
      })}
      {units.map((u, i) => (
        <UnitLink key={u.tag} u={u} x={xs[i]} y={top} labelX={xs[i] + 75} labelY={top + 232} anchor="middle" />
      ))}
    </svg>
  );
}

function Vertical() {
  const step = 230;
  const left = 10;
  const ys = units.map((_, i) => 10 + i * step);
  return (
    <svg viewBox="0 0 340 920" className="mx-auto block w-full max-w-sm md:hidden">
      {units.slice(0, -1).map((u, i) => {
        const n = units[i + 1];
        const x = left + 75;
        const a = ys[i] + u.ports.bottom;
        const b = ys[i + 1] + n.ports.top;
        const mid = (a + b) / 2;
        const fitting = i === 0 ? <Pump x={x} y={mid} /> : <Valve x={x} y={mid} vertical />;
        return <Pipe key={i} d={`M${x} ${a} V${b}`} fitting={fitting} />;
      })}
      {units.map((u, i) => (
        <UnitLink key={u.tag} u={u} x={left} y={ys[i]} labelX={left + 168} labelY={ys[i] + 80} anchor="start" />
      ))}
    </svg>
  );
}

export default function ProcessDiagram() {
  return (
    <figure aria-label="Career process flow: Chemical Engineering, then AI and ML training, then building projects, then AI Developer at Euron Systems">
      <Horizontal />
      <Vertical />
    </figure>
  );
}
