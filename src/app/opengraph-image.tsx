import { ImageResponse } from "next/og";

export const alt = "Afeefa Albeena Sheikh: chemical engineer by training, AI developer by practice";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The link preview LinkedIn, WhatsApp and Slack show when the site is shared.
export default function OpengraphImage() {
  const grid = "linear-gradient(rgba(22,33,58,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(22,33,58,0.07) 1px, transparent 1px)";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "#f3efe6",
          backgroundImage: grid,
          backgroundSize: "32px 32px",
          color: "#16213a",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 4, color: "#4a5468", fontFamily: "monospace" }}>
          DWG NO. AAS-2026 · PROCESS FLOW OF ONE CAREER
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 92, lineHeight: 1.02 }}>
          <div>Chemical engineer</div>
          <div style={{ color: "#4a5468", fontStyle: "italic" }}>by training.</div>
          <div>AI developer</div>
          <div style={{ color: "#c73e17", fontStyle: "italic" }}>by practice.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 30, fontFamily: "sans-serif" }}>
          <div style={{ fontWeight: 600 }}>Afeefa Albeena Sheikh</div>
          <div style={{ color: "#4a5468" }}>AI Developer · Euron Systems</div>
        </div>
      </div>
    ),
    size,
  );
}
