import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: -0.5,
            fontFamily: "system-ui, sans-serif",
            lineHeight: 1,
            marginTop: -2,
          }}
        >
          GT
        </div>
        <div
          style={{
            position: "absolute",
            left: 6,
            right: 6,
            bottom: 5,
            height: 2.5,
            borderRadius: 2,
            background: "#c8ff00",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
