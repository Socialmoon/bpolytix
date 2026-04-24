import { ImageResponse } from "next/og";
import { getInsightBySlug } from "@/lib/content/insights";

export function renderInsightSocialImage(slug: string) {
  const post = getInsightBySlug(slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #111827 0%, #312e81 52%, #0f766e 100%)",
            color: "white",
            fontSize: 52,
            fontWeight: 700,
            fontFamily: "Arial, sans-serif",
          }}
        >
          BPOlytix Insights
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  }

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
          background: "linear-gradient(135deg, #111827 0%, #312e81 48%, #0ea5e9 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -40,
            left: -20,
            width: 220,
            height: 220,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.10)",
            filter: "blur(10px)",
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 3,
              textTransform: "uppercase",
              opacity: 0.82,
            }}
          >
            {post.category}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 2,
              textTransform: "uppercase",
              opacity: 0.72,
            }}
          >
            {post.heroLabel}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 920 }}>
          <div style={{ fontSize: 74, fontWeight: 800, lineHeight: 1.05 }}>{post.title}</div>
          <div style={{ fontSize: 30, lineHeight: 1.35, opacity: 0.88 }}>{post.summary}</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 22, textTransform: "uppercase", letterSpacing: 2, opacity: 0.7 }}>
              {post.statLabel}
            </div>
            <div style={{ fontSize: 40, fontWeight: 700 }}>{post.statValue}</div>
          </div>
          <div style={{ display: "flex", gap: 20, fontSize: 24, opacity: 0.82 }}>
            <span>{post.readTime}</span>
            <span>{post.author}</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
