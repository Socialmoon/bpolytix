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
    "linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #334155 100%)",
  color: "#ffffff",
  fontFamily: "Arial, sans-serif",
};

const headerStyle = {
  fontSize: 34,
  letterSpacing: 3,
  textTransform: "uppercase" as const,
  opacity: 0.85,
};

const headlineStyle = {
  fontSize: 78,
  fontWeight: 800,
  lineHeight: 1.1,
  maxWidth: 900,
};

const tagsStyle = {
  display: "flex",
  gap: 16,
  fontSize: 30,
  opacity: 0.9,
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={containerStyle}>
        <div style={headerStyle}>
          BPOlytix | Powered by SocialMoon
        </div>
        <div style={headlineStyle}>
          India&apos;s BPO Company for Smart Operations &amp; Smarter Results.
        </div>
        <div style={tagsStyle}>
          <span>BPO Services</span>
          <span>BPO Company India</span>
          <span>Lucknow</span>
        </div>
      </div>
    ),
    size,
  );
}

