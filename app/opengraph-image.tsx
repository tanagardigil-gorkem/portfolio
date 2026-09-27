import { ImageResponse } from "next/og";

export const alt = "Görkem Tanağardıgil — AI Systems Engineer";
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
          background: "#0f1218",
          color: "#eef2f7",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Atmosphere wash */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(ellipse 70% 55% at 12% 0%, rgba(200,255,0,0.18), transparent 55%), radial-gradient(ellipse 50% 40% at 92% 12%, rgba(90,140,255,0.14), transparent 50%)",
          }}
        />
        {/* Lime accent rail */}
        <div
          style={{
            width: 14,
            height: "100%",
            background: "#c8ff00",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 64px 56px 56px",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div
              style={{
                width: 120,
                height: 120,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "#151922",
                border: "2px solid rgba(238,242,247,0.14)",
                color: "#eef2f7",
                fontSize: 44,
                fontWeight: 800,
                letterSpacing: -1,
              }}
            >
              <span style={{ display: "flex", marginTop: -6 }}>GT</span>
              <div
                style={{
                  width: 56,
                  height: 6,
                  marginTop: 8,
                  borderRadius: 3,
                  background: "#c8ff00",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div
                style={{
                  display: "flex",
                  color: "#c8ff00",
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: 4,
                }}
              >
                SIGNAL LAB
              </div>
              <div
                style={{
                  display: "flex",
                  color: "#8b93a3",
                  fontSize: 20,
                  letterSpacing: 2,
                }}
              >
                AI SYSTEMS ENGINEER
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 72,
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: -1.5,
              }}
            >
              Görkem Tanağardıgil
            </div>
            <div style={{ fontSize: 26, color: "#8b93a3", marginTop: 10 }}>
              Gorkem Tanagardigil
            </div>
          </div>

          <div
            style={{
              fontSize: 28,
              color: "#c5ccd8",
              lineHeight: 1.35,
              maxWidth: 920,
            }}
          >
            RAG knowledge bases and LangGraph agents — grounded answers,
            citations, human escalation.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
