import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Construction AI Brief — the honest read on AI in commercial construction.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F4F1EA",
          backgroundImage:
            "linear-gradient(to right, rgba(27,31,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,31,42,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          padding: "60px 70px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Top meta bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: 22,
            letterSpacing: 3,
            color: "#1B1F2A",
            textTransform: "uppercase",
            paddingBottom: 18,
            borderBottom: "2px solid #1B1F2A",
          }}
        >
          <span>
            Construction AI Brief <span style={{ color: "#E54B00" }}>/</span> Issue №001
          </span>
          <span>2026.05.13</span>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#1B1F2A",
            fontFamily: "serif",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-0.025em",
            paddingTop: 30,
            paddingBottom: 30,
          }}
        >
          <span>The honest read on AI in</span>
          <span style={{ color: "#E54B00", fontStyle: "italic" }}>commercial construction.</span>
        </div>

        {/* Bottom meta */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingTop: 22,
            borderTop: "2px solid #1B1F2A",
          }}
        >
          <div
            style={{
              fontFamily: "serif",
              fontSize: 28,
              color: "#5F6573",
              maxWidth: 700,
            }}
          >
            Tool teardowns, news, and field reports from contractors actually shipping AI. Tue / Thu / Fri.
          </div>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 18,
              letterSpacing: 2,
              color: "#1B1F2A",
              textTransform: "uppercase",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <span style={{ color: "#5F6573" }}>SUBSCRIBE</span>
            <span>constructionaibrief.com</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
