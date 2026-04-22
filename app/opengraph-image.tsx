import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default function OpenGraphImage() {
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
            "linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #334155 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 34, letterSpacing: 3, textTransform: "uppercase", opacity: 0.85 }}>
          BPOlytix | Powered by SocialMoon
        </div>
        <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
          Smart Calls. Smarter Results.
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 30, opacity: 0.9 }}>
          <span>Domestic BPO</span>
          <span>Lucknow</span>
          <span>India</span>
        </div>
      </div>
    ),
    size,
  );
}
