import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f1218",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#eef2f7",
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: -2,
            fontFamily: "system-ui, sans-serif",
            lineHeight: 1,
            marginTop: -10,
          }}
        >
          GT
        </div>
        <div
          style={{
            position: "absolute",
            left: 36,
            right: 36,
            bottom: 32,
            height: 10,
            borderRadius: 6,
            background: "#c8ff00",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
