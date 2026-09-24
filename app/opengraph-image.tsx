import { ImageResponse } from "next/og";

export const alt =
  "Görkem Tanağardıgil — Senior Software Engineer & former submarine officer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#061018",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 18,
            height: "100%",
            background: "#22d3ee",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
            }}
          >
            <div
              style={{
                width: 148,
                height: 148,
                borderRadius: 74,
                border: "3px solid #22d3ee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#67e8f9",
                fontSize: 42,
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              GT
            </div>
            <div
              style={{
                display: "flex",
                color: "#67e8f9",
                fontSize: 22,
                letterSpacing: 5,
              }}
            >
              SENIOR SOFTWARE ENGINEER
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
              Görkem Tanağardıgil
            </div>
            <div style={{ fontSize: 28, color: "#a5f3fc", marginTop: 8 }}>
              Gorkem Tanagardigil
            </div>
          </div>

          <div style={{ fontSize: 32, color: "#e2e8f0", lineHeight: 1.35 }}>
            Former submarine officer. Resilient backend systems, cloud, and
            mission-critical operations.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
