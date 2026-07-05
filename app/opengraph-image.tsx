import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0D0A07",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            border: "1px solid #3d2a10",
            borderRadius: 8,
            padding: "12px 24px",
            marginBottom: 40,
          }}
        >
          <span style={{ color: "#E8C99A", fontSize: 32, letterSpacing: 4 }}>404</span>
          <span style={{ color: "#3d2a10" }}>|</span>
          <span style={{ color: "#B87333", fontSize: 32, letterSpacing: 4 }}>TRADE</span>
          <span style={{ color: "#3d2a10" }}>|</span>
          <span style={{ color: "#E8C99A", fontSize: 32, letterSpacing: 4 }}>OS</span>
        </div>
        <div style={{ color: "#F7F2EC", fontSize: 56, fontWeight: 600, textAlign: "center", maxWidth: 900 }}>
          Stop being a 404.
        </div>
        <div style={{ color: "#B87333", fontSize: 56, fontWeight: 600, textAlign: "center" }}>
          Start getting found.
        </div>
        <div style={{ color: "#C8C0B0", fontSize: 24, marginTop: 32 }}>
          Web design for the trades
        </div>
      </div>
    ),
    { ...size }
  );
}
