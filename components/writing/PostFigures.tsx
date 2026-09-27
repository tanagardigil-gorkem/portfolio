import type { ReactNode } from "react";

type FigProps = { caption: string; children: ReactNode };

function Figure({ caption, children }: FigProps) {
  return (
    <figure className="my-8 border-2 border-[var(--foreground)] bg-[var(--panel)]">
      <div className="px-3 py-5 sm:px-6 sm:py-8">{children}</div>
      <figcaption className="border-t-2 border-[var(--foreground)] bg-[var(--accent)] px-3 py-2 font-mono text-[11px] text-[var(--accent-ink)] sm:px-4">
        {caption}
      </figcaption>
    </figure>
  );
}

function Box({
  x,
  y,
  w,
  h,
  label,
  accent,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={accent ? "var(--accent)" : "var(--background)"}
        stroke="var(--foreground)"
        strokeWidth="2"
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + 4}
        textAnchor="middle"
        fill={accent ? "var(--accent-ink)" : "var(--foreground)"}
        style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 11, fontWeight: 600 }}
      >
        {label}
      </text>
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="var(--foreground)"
      strokeWidth="2"
      markerEnd="url(#arrowhead)"
    />
  );
}

function SvgDefs() {
  return (
    <defs>
      <marker
        id="arrowhead"
        markerWidth="8"
        markerHeight="8"
        refX="6"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L6,3 L0,6 Z" fill="var(--foreground)" />
      </marker>
    </defs>
  );
}

export function RagPipelineFigure() {
  return (
    <Figure caption="Fig — Ingest → hybrid retrieve → agent graph → cite / escalate">
      <svg viewBox="0 0 640 160" className="h-auto w-full" role="img" aria-label="RAG pipeline diagram">
        <SvgDefs />
        <Box x={8} y={50} w={100} h={56} label="Docs" />
        <Arrow x1={108} y1={78} x2={128} y2={78} />
        <Box x={128} y={50} w={100} h={56} label="Chunk+Meta" />
        <Arrow x1={228} y1={78} x2={248} y2={78} />
        <Box x={248} y={50} w={110} h={56} label="Hybrid index" accent />
        <Arrow x1={358} y1={78} x2={378} y2={78} />
        <Box x={378} y={50} w={110} h={56} label="LangGraph" />
        <Arrow x1={488} y1={78} x2={508} y2={78} />
        <Box x={508} y={28} w={120} h={40} label="Cite answer" />
        <Box x={508} y={88} w={120} h={40} label="Human handoff" />
        <Arrow x1={488} y1={78} x2={508} y2={48} />
        <Arrow x1={488} y1={78} x2={508} y2={108} />
      </svg>
    </Figure>
  );
}

export function MongoRaceFigure() {
  return (
    <Figure caption="Fig — Lost update: two workers, one stale write wins without a version filter">
      <svg viewBox="0 0 640 200" className="h-auto w-full" role="img" aria-label="MongoDB race diagram">
        <SvgDefs />
        <Box x={250} y={12} w={140} h={40} label="Doc v=3" accent />
        <text
          x={80}
          y={100}
          fill="var(--foreground)"
          style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12, fontWeight: 700 }}
        >
          Worker A
        </text>
        <text
          x={480}
          y={100}
          fill="var(--foreground)"
          style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12, fontWeight: 700 }}
        >
          Worker B
        </text>
        <Box x={20} y={110} w={160} h={36} label="read PENDING" />
        <Box x={460} y={110} w={160} h={36} label="read PENDING" />
        <Box x={20} y={156} w={160} h={36} label="write OK" />
        <Box x={460} y={156} w={160} h={36} label="write overwrites" />
        <Arrow x1={320} y1={52} x2={100} y2={110} />
        <Arrow x1={320} y1={52} x2={540} y2={110} />
      </svg>
    </Figure>
  );
}

export function ModelRoutingFigure() {
  return (
    <Figure caption="Fig — Route by data boundary, task shape, and shared eval gate">
      <svg viewBox="0 0 640 180" className="h-auto w-full" role="img" aria-label="Model routing diagram">
        <SvgDefs />
        <Box x={20} y={60} w={120} h={50} label="Task" />
        <Arrow x1={140} y1={85} x2={170} y2={85} />
        <Box x={170} y={60} w={130} h={50} label="Router" accent />
        <Arrow x1={300} y1={70} x2={340} y2={40} />
        <Arrow x1={300} y1={100} x2={340} y2={130} />
        <Box x={340} y={16} w={130} h={44} label="Local LLM" />
        <Box x={340} y={110} w={130} h={44} label="Frontier API" />
        <Arrow x1={470} y1={38} x2={510} y2={85} />
        <Arrow x1={470} y1={132} x2={510} y2={85} />
        <Box x={510} y={60} w={110} h={50} label="Eval gate" accent />
      </svg>
    </Figure>
  );
}

export function EvalLoopFigure() {
  return (
    <Figure caption="Fig — Outcome + process + trajectory → CI fixtures">
      <svg viewBox="0 0 640 150" className="h-auto w-full" role="img" aria-label="Eval loop diagram">
        <SvgDefs />
        <Box x={20} y={45} w={120} h={50} label="Transcript" />
        <Arrow x1={140} y1={70} x2={170} y2={70} />
        <Box x={170} y={45} w={120} h={50} label="Outcome" />
        <Arrow x1={290} y1={70} x2={320} y2={70} />
        <Box x={320} y={45} w={120} h={50} label="Process" accent />
        <Arrow x1={440} y1={70} x2={470} y2={70} />
        <Box x={470} y={45} w={140} h={50} label="Fixture → CI" />
      </svg>
    </Figure>
  );
}

export function ProfilingLoopFigure() {
  return (
    <Figure caption="Fig — Observe → classify CPU vs memory → profile → one change → re-measure">
      <svg viewBox="0 0 640 170" className="h-auto w-full" role="img" aria-label="Profiling loop diagram">
        <SvgDefs />
        <Box x={12} y={55} w={100} h={50} label="Metrics" />
        <Arrow x1={112} y1={80} x2={136} y2={80} />
        <Box x={136} y={55} w={110} h={50} label="Classify" accent />
        <Arrow x1={246} y1={70} x2={280} y2={40} />
        <Arrow x1={246} y1={90} x2={280} y2={120} />
        <Box x={280} y={16} w={130} h={44} label="CPU profile" />
        <Box x={280} y={100} w={130} h={44} label="Heap / GC" />
        <Arrow x1={410} y1={38} x2={450} y2={80} />
        <Arrow x1={410} y1={122} x2={450} y2={80} />
        <Box x={450} y={55} w={80} h={50} label="Fix 1" />
        <Arrow x1={530} y1={80} x2={560} y2={80} />
        <Box x={560} y={55} w={68} h={50} label="Recheck" accent />
      </svg>
    </Figure>
  );
}

export function PostFigure({ id }: { id: string }) {
  switch (id) {
    case "rag-pipeline":
      return <RagPipelineFigure />;
    case "mongo-race":
      return <MongoRaceFigure />;
    case "model-routing":
      return <ModelRoutingFigure />;
    case "eval-loop":
      return <EvalLoopFigure />;
    case "profiling-loop":
      return <ProfilingLoopFigure />;
    default:
      return null;
  }
}
