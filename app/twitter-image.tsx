import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

const containerStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "space-between",
  padding: 56,
  background:
    "linear-gradient(140deg, #111827 0%, #1f2937 52%, #374151 100%)",
  color: "#ffffff",
  fontFamily: "Arial, sans-serif",
};

const headerStyle = {
  fontSize: 32,
  letterSpacing: 2,
  textTransform: "uppercase" as const,
  opacity: 0.85,
};

const headlineStyle = {
  fontSize: 70,
  fontWeight: 800,
  lineHeight: 1.12,
  maxWidth: 930,
};

const locationStyle = {
  fontSize: 28,
  opacity: 0.9,
};

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div style={containerStyle}>
        <div style={headerStyle}>
          BPOlytix
        </div>
        <div style={headlineStyle}>
          BPO Customer Support and Lead Generation Services
        </div>
        <div style={locationStyle}>
          Lucknow, Uttar Pradesh, India
        </div>
      </div>
    ),
    size,
  );
}

