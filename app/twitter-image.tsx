import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 56,
          background:
            "linear-gradient(140deg, #111827 0%, #1f2937 52%, #374151 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 32, letterSpacing: 2, textTransform: "uppercase", opacity: 0.85 }}>
          BPOlytix
        </div>
        <div style={{ fontSize: 70, fontWeight: 800, lineHeight: 1.12, maxWidth: 930 }}>
          Customer Support and Lead Generation Services
        </div>
        <div style={{ fontSize: 28, opacity: 0.9 }}>
          Lucknow, Uttar Pradesh, India
        </div>
      </div>
    ),
    size,
  );
}
