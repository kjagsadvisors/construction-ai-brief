import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1B1F2A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F4F1EA",
          fontFamily: "serif",
          fontWeight: 900,
          fontSize: 42,
          fontStyle: "italic",
          letterSpacing: "-0.04em",
        }}
      >
        <span>
          C<span style={{ color: "#E54B00" }}>·</span>B
        </span>
      </div>
    ),
    size,
  );
}
